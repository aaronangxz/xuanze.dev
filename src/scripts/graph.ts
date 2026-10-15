/* The /graph page: a force-directed map of every page on the Work side, drawn on a canvas.
   Hover (or tap) a node to light up its neighbours, click to open it; drag nodes, drag the background to pan,
   scroll or pinch to zoom. Colours come from the theme tokens, so it follows light and dark mode. */
import { forceSimulation, forceLink, forceManyBody, forceX, forceY, forceCollide, type SimulationNodeDatum } from 'd3-force';
import type { Graph, GraphNode, NodeType } from '../lib/graph';

interface N extends GraphNode, SimulationNodeDatum { i: number; deg: number; r: number; nb: Set<number> }
interface L { source: N; target: N }

const TYPE_LABEL: Record<NodeType, string> = { note: 'note', post: 'writing', project: 'project', leetcode: 'leetcode', topic: 'topic' };
const COLOR_VAR: Record<NodeType, string> = { note: '--accent', post: '--c-str', project: '--c-num', leetcode: '--c-kw', topic: '--faint' };

export function mountGraph() {
  const box = document.getElementById('graph');
  const canvas = document.getElementById('graph-canvas') as HTMLCanvasElement | null;
  const data = JSON.parse(document.getElementById('graph-data')?.textContent || 'null') as Graph | null;
  if (!box || !canvas || !data) return;
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- data ---------- */
  const nodes: N[] = data.nodes.map((n, i) => ({ ...n, i, deg: 0, r: 0, nb: new Set() }));
  const allLinks: L[] = data.links.map(([a, b]) => {
    nodes[a].deg++; nodes[b].deg++; nodes[a].nb.add(b); nodes[b].nb.add(a);
    return { source: nodes[a], target: nodes[b] };
  });
  for (const n of nodes) n.r = (n.type === 'topic' ? 2.5 : 3.5) + Math.sqrt(n.deg) * 1.5;
  // Start on a loose spiral (seeded, so the layout settles the same way on every visit).
  nodes.forEach((n, k) => { const a = k * 2.4, d = 14 * Math.sqrt(k + 1); n.x = Math.cos(a) * d; n.y = Math.sin(a) * d; });

  const hidden = new Set<NodeType>();
  let vis = nodes, links = allLinks;

  /* ---------- simulation ---------- */
  const sim = forceSimulation<N>(nodes)
    .force('link', forceLink<N, L>(allLinks).distance((l) => (l.source.type === 'topic' || l.target.type === 'topic' ? 38 : 48)).strength(0.5))
    .force('charge', forceManyBody<N>().strength(-110).distanceMax(420))
    .force('x', forceX<N>(0).strength(0.045))
    .force('y', forceY<N>(0).strength(0.06))
    .force('collide', forceCollide<N>((n) => n.r + 3))
    .alphaDecay(0.025)
    .on('tick', () => { if (autoFit) fit(false); draw(); });
  if (reduce) { sim.stop(); for (let k = 0; k < 300; k++) sim.tick(); }

  /* ---------- view ---------- */
  let W = 0, H = 0, dpr = 1;
  const view = { x: 0, y: 0, k: 1 }; // screen = world * k + (x, y)
  let autoFit = true; // follow the settling layout until the reader takes over
  const resize = () => {
    // clientWidth, not getBoundingClientRect: the page's entrance transform would skew the size.
    W = box.clientWidth; H = box.clientHeight; dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = W * dpr; canvas.height = H * dpr;
    if (autoFit) fit(false);
    draw();
  };
  function bounds() {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const n of vis) { x0 = Math.min(x0, n.x! - n.r); y0 = Math.min(y0, n.y! - n.r); x1 = Math.max(x1, n.x! + n.r); y1 = Math.max(y1, n.y! + n.r); }
    return vis.length ? { x0, y0, x1, y1 } : { x0: -1, y0: -1, x1: 1, y1: 1 };
  }
  function fit(animate: boolean) {
    const b = bounds(), pad = W < 600 ? 24 : 56, top = barH();
    const k = Math.min(2.2, (W - pad * 2) / (b.x1 - b.x0), (H - top - pad * 2) / (b.y1 - b.y0));
    const to = { k, x: W / 2 - ((b.x0 + b.x1) / 2) * k, y: top + (H - top) / 2 - ((b.y0 + b.y1) / 2) * k };
    if (animate && !reduce) tween(to); else Object.assign(view, to);
  }
  const barH = () => (box.querySelector('.graph-bar') as HTMLElement).offsetHeight + 8;
  let tweenId = 0;
  function tween(to: { x: number; y: number; k: number }) {
    const from = { ...view }, t0 = performance.now(), id = ++tweenId;
    const step = (t: number) => {
      if (id !== tweenId) return;
      const p = Math.min(1, (t - t0) / 380), e = 1 - Math.pow(1 - p, 3);
      view.k = from.k + (to.k - from.k) * e; view.x = from.x + (to.x - from.x) * e; view.y = from.y + (to.y - from.y) * e;
      draw();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function zoomAt(f: number, sx: number, sy: number) {
    const k = Math.max(0.25, Math.min(6, view.k * f));
    view.x = sx - ((sx - view.x) * k) / view.k; view.y = sy - ((sy - view.y) * k) / view.k; view.k = k;
    autoFit = false; draw();
  }

  /* ---------- colours ---------- */
  let col: Record<string, string> = {};
  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    const v = (name: string) => cs.getPropertyValue(name).trim();
    col = { ink: v('--ink'), muted: v('--muted'), line: v('--line2'), win: v('--win') };
    for (const t of Object.keys(COLOR_VAR) as NodeType[]) col[t] = v(COLOR_VAR[t]);
    draw();
  };
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readColors);

  /* ---------- drawing ---------- */
  let focus: N | null = null; // hovered or tapped node
  let match: N | null = null; // search hit
  let frame = 0;
  function draw() {
    if (frame) return;
    frame = requestAnimationFrame(render);
  }
  function render() {
    frame = 0;
    if (!W) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.setTransform(dpr * view.k, 0, 0, dpr * view.k, dpr * view.x, dpr * view.y);
    const f = focus ?? match;
    const lit = (n: N) => !f || n === f || f.nb.has(n.i);

    ctx.lineWidth = 1 / view.k;
    for (const l of links) {
      const on = f && (l.source === f || l.target === f);
      ctx.strokeStyle = on ? col[f!.type] : col.line;
      ctx.globalAlpha = f ? (on ? 0.9 : 0.12) : 0.7;
      ctx.beginPath(); ctx.moveTo(l.source.x!, l.source.y!); ctx.lineTo(l.target.x!, l.target.y!); ctx.stroke();
    }
    for (const n of vis) {
      ctx.globalAlpha = lit(n) ? 1 : 0.18;
      ctx.fillStyle = col[n.type];
      ctx.beginPath(); ctx.arc(n.x!, n.y!, n.r, 0, Math.PI * 2); ctx.fill();
      if (n === f) { ctx.lineWidth = 2 / view.k; ctx.strokeStyle = col.ink; ctx.stroke(); ctx.lineWidth = 1 / view.k; }
    }

    // Labels fade in as you zoom; big hubs and the focused neighbourhood are always labelled.
    const fs = 11 / view.k;
    ctx.font = `500 ${fs}px ${getComputedStyle(document.body).fontFamily}`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.lineJoin = 'round'; ctx.lineWidth = 3 / view.k; ctx.strokeStyle = col.win;
    const zoomA = Math.max(0, Math.min(1, (view.k - 1.1) / 0.6));
    for (const n of vis) {
      let a = f ? (lit(n) ? 1 : 0) : n.deg >= 7 ? 1 : zoomA;
      if (a <= 0.02) continue;
      ctx.globalAlpha = a;
      const label = n.label.length > 34 ? n.label.slice(0, 32) + '…' : n.label;
      ctx.strokeText(label, n.x!, n.y! + n.r + 3 / view.k);
      ctx.fillStyle = n === f ? col.ink : col.muted;
      ctx.fillText(label, n.x!, n.y! + n.r + 3 / view.k);
    }
    ctx.globalAlpha = 1;
  }

  /* ---------- the card under the graph ---------- */
  const card = document.getElementById('graph-card')!;
  const cardA = document.getElementById('gc-a') as HTMLAnchorElement;
  function showCard(n: N | null) {
    if (!n) { card.hidden = true; return; }
    const shown = [...n.nb].filter((j) => !hidden.has(nodes[j].type)).length;
    document.getElementById('gc-k')!.textContent = n.sub ? `${TYPE_LABEL[n.type]} · ${n.sub.toLowerCase()}` : TYPE_LABEL[n.type];
    document.getElementById('gc-t')!.textContent = n.label;
    document.getElementById('gc-n')!.textContent = `${shown} connection${shown === 1 ? '' : 's'}`;
    cardA.hidden = !n.href;
    if (n.href) cardA.href = n.href;
    card.hidden = false;
  }
  const setFocus = (n: N | null) => { if (n === focus) return; focus = n; showCard(n ?? match); draw(); };

  /* ---------- pointer: hover, click, drag, pan, pinch ---------- */
  const toWorld = (sx: number, sy: number) => ({ x: (sx - view.x) / view.k, y: (sy - view.y) / view.k });
  function hit(sx: number, sy: number, slop: number) {
    const p = toWorld(sx, sy);
    let best: N | null = null, bd = Infinity;
    for (const n of vis) {
      const d = Math.hypot(n.x! - p.x, n.y! - p.y) - n.r;
      if (d < bd) { bd = d; best = n; }
    }
    return best && bd * view.k <= slop ? best : null;
  }
  const local = (e: PointerEvent | WheelEvent) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

  const pts = new Map<number, { x: number; y: number }>();
  let drag: { n: N | null; x0: number; y0: number; moved: boolean; vx: number; vy: number } | null = null;
  let pinch: { d: number; k: number } | null = null;

  canvas.addEventListener('pointerdown', (e) => {
    const p = local(e);
    pts.set(e.pointerId, p);
    canvas.setPointerCapture(e.pointerId);
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: view.k };
      if (drag?.n) { drag.n.fx = drag.n.fy = null; sim.alphaTarget(0); }
      drag = null;
      return;
    }
    const n = hit(p.x, p.y, e.pointerType === 'touch' ? 14 : 6);
    drag = { n, x0: p.x, y0: p.y, moved: false, vx: view.x, vy: view.y };
    tweenId++;
  });
  canvas.addEventListener('pointermove', (e) => {
    const p = local(e);
    if (pts.has(e.pointerId)) pts.set(e.pointerId, p);
    if (pinch && pts.size === 2) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      zoomAt((pinch.k * d) / pinch.d / view.k, (a.x + b.x) / 2, (a.y + b.y) / 2);
      return;
    }
    if (drag) {
      if (!drag.moved && Math.hypot(p.x - drag.x0, p.y - drag.y0) < 4) return;
      if (!drag.moved) { drag.moved = true; autoFit = false; if (drag.n) { sim.alphaTarget(0.25).restart(); } }
      if (drag.n) { const w = toWorld(p.x, p.y); drag.n.fx = w.x; drag.n.fy = w.y; setFocus(drag.n); }
      else { view.x = drag.vx + p.x - drag.x0; view.y = drag.vy + p.y - drag.y0; draw(); }
      canvas.style.cursor = 'grabbing';
      return;
    }
    if (e.pointerType === 'mouse') {
      const n = hit(p.x, p.y, 6);
      canvas.style.cursor = n?.href ? 'pointer' : n ? 'default' : 'grab';
      setFocus(n);
    }
  });
  const end = (e: PointerEvent) => {
    pts.delete(e.pointerId);
    if (pinch) { if (pts.size < 2) pinch = null; return; }
    if (!drag) return;
    const d = drag; drag = null;
    canvas.style.cursor = '';
    if (d.n && d.moved) { d.n.fx = d.n.fy = null; sim.alphaTarget(0); }
    if (d.moved || e.type === 'pointercancel') return;
    // A click: open the page with a mouse; on touch the first tap shows the card (with an Open link).
    if (e.pointerType === 'mouse') { if (d.n?.href) location.href = d.n.href; else setFocus(d.n); }
    else setFocus(d.n === focus ? null : d.n);
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !drag) setFocus(null); });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const p = local(e);
    zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0022)), p.x, p.y);
  }, { passive: false });

  box.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
    const z = b.dataset.zoom;
    if (z === 'fit') { autoFit = false; fit(true); return; }
    const target = { ...view }, f = z === 'in' ? 1.4 : 1 / 1.4;
    const k = Math.max(0.25, Math.min(6, view.k * f));
    target.x = W / 2 - ((W / 2 - view.x) * k) / view.k; target.y = H / 2 - ((H / 2 - view.y) * k) / view.k; target.k = k;
    autoFit = false; tween(target);
  }));

  /* ---------- type filters ---------- */
  box.querySelectorAll<HTMLButtonElement>('[data-type]').forEach((b) => b.addEventListener('click', () => {
    const t = b.dataset.type as NodeType;
    const on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', String(on));
    if (on) hidden.delete(t); else hidden.add(t);
    vis = nodes.filter((n) => !hidden.has(n.type));
    links = allLinks.filter((l) => !hidden.has(l.source.type) && !hidden.has(l.target.type));
    sim.nodes(vis);
    (sim.force('link') as ReturnType<typeof forceLink<N, L>>).links(links);
    if (focus && hidden.has(focus.type)) setFocus(null);
    if (match && hidden.has(match.type)) match = null;
    autoFit = true;
    if (reduce) { for (let k = 0; k < 200; k++) sim.tick(); fit(false); draw(); }
    else sim.alpha(0.5).restart();
  }));

  /* ---------- find ---------- */
  const q = document.getElementById('graph-q') as HTMLInputElement;
  const find = (s: string) => {
    const t = s.trim().toLowerCase();
    if (!t) return null;
    const pool = vis.filter((n) => n.href);
    return pool.find((n) => n.label.toLowerCase() === t) ?? pool.find((n) => n.label.toLowerCase().startsWith(t)) ?? pool.find((n) => n.label.toLowerCase().includes(t)) ?? null;
  };
  q.addEventListener('input', () => {
    match = find(q.value);
    showCard(focus ?? match);
    if (match) {
      autoFit = false;
      const k = Math.max(view.k, 1.6);
      tween({ k, x: W / 2 - match.x! * k, y: barH() + (H - barH()) / 2 - match.y! * k });
    }
    draw();
  });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && match?.href) location.href = match.href;
    if (e.key === 'Escape') { q.value = ''; match = null; showCard(focus); draw(); }
  });

  new ResizeObserver(resize).observe(box);
  readColors();
  resize();
}
