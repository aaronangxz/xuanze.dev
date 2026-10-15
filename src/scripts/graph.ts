/* The /graph page: a force-directed map of every page on the Work side, drawn on a canvas, with a preview pane
   in the launcher's style. Hover a dot to preview it, click to pin it, double-click (or the pane's button) to open.
   Drag dots, drag the background to pan, scroll or pinch to zoom. Colours come from the theme tokens. */
import { forceSimulation, forceLink, forceManyBody, forceX, forceY, forceCollide, type SimulationNodeDatum } from 'd3-force';
import type { Graph, GraphNode, NodeType } from '../lib/graph';

interface N extends GraphNode, SimulationNodeDatum {
  i: number; deg: number; r: number; nb: Set<number>;
  a: number;     // drawn emphasis, eased toward 1 (lit) or a low value (dimmed)
  born: number;  // entrance delay, ms
}
interface L { source: N; target: N; bend: number }

const KIND: Record<NodeType, string> = { note: 'note', post: 'writing', project: 'project', leetcode: 'leetcode', topic: 'topic' };
const CTA: Record<NodeType, string> = { note: 'Open note', post: 'Read the post', project: 'Open project', leetcode: 'Open solution', topic: '' };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function mountGraph() {
  const app = document.getElementById('graph');
  const stage = document.getElementById('gstage');
  const canvas = document.getElementById('graph-canvas') as HTMLCanvasElement | null;
  const pane = document.getElementById('gprev');
  const data = JSON.parse(document.getElementById('graph-data')?.textContent || 'null') as Graph | null;
  if (!app || !stage || !canvas || !pane || !data) return;
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- data ---------- */
  const nodes: N[] = data.nodes.map((n, i) => ({ ...n, i, deg: 0, r: 0, nb: new Set(), a: 1, born: 0 }));
  const allLinks: L[] = data.links.map(([a, b], k) => {
    nodes[a].deg++; nodes[b].deg++; nodes[a].nb.add(b); nodes[b].nb.add(a);
    return { source: nodes[a], target: nodes[b], bend: ((k * 7919) % 13) / 13 - 0.5 };
  });
  for (const n of nodes) n.r = n.type === 'topic' ? 3 + Math.sqrt(n.deg) * 1.1 : 3.4 + Math.sqrt(n.deg) * 1.35;
  // Seeded spiral start, so the layout settles the same way on every visit; hubs first, near the middle.
  const order = [...nodes].sort((a, b) => b.deg - a.deg);
  order.forEach((n, k) => { const t = k * 2.39996, d = 11 * Math.sqrt(k + 1); n.x = Math.cos(t) * d; n.y = Math.sin(t) * d; n.born = reduce ? -1e4 : 120 + k * 9; });

  const hidden = new Set<NodeType>();
  let vis = nodes, links = allLinks;

  /* ---------- simulation ---------- */
  const sim = forceSimulation<N>(nodes)
    .force('link', forceLink<N, L>(allLinks).distance((l) => 26 + (l.source.r + l.target.r) * 2.2).strength((l) => 0.9 / Math.sqrt(Math.min(l.source.deg, l.target.deg) + 0.5)))
    .force('charge', forceManyBody<N>().strength((n) => -60 - n.deg * 6).distanceMax(380))
    .force('x', forceX<N>(0).strength(0.05))
    .force('y', forceY<N>(0).strength(0.07))
    .force('collide', forceCollide<N>((n) => n.r + 5))
    .alphaDecay(0.022)
    .on('tick', () => { if (autoFit) fit(false); kick(); });
  if (reduce) { sim.stop(); for (let k = 0; k < 320; k++) sim.tick(); }

  /* ---------- view ---------- */
  let W = 0, H = 0, dpr = 1;
  const view = { x: 0, y: 0, k: 1 }; // screen = world * k + (x, y)
  let autoFit = true;                // follow the settling layout until the reader takes over
  const resize = () => {
    // clientWidth, not getBoundingClientRect: the page's entrance transform would skew the size.
    W = stage.clientWidth; H = stage.clientHeight; dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    if (autoFit) fit(false);
    kick();
  };
  function bounds() {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const n of vis) { x0 = Math.min(x0, n.x! - n.r); y0 = Math.min(y0, n.y! - n.r); x1 = Math.max(x1, n.x! + n.r); y1 = Math.max(y1, n.y! + n.r + 14); }
    return vis.length ? { x0, y0, x1, y1 } : { x0: -1, y0: -1, x1: 1, y1: 1 };
  }
  function fit(animate: boolean) {
    const b = bounds(), pad = W < 600 ? 20 : 40;
    const k = Math.min(1.8, (W - pad * 2) / (b.x1 - b.x0), (H - pad * 2) / (b.y1 - b.y0));
    const to = { k, x: W / 2 - ((b.x0 + b.x1) / 2) * k, y: H / 2 - ((b.y0 + b.y1) / 2) * k };
    if (animate && !reduce) tween(to); else Object.assign(view, to);
  }
  let tw: { from: typeof view; to: typeof view; t0: number } | null = null;
  const tween = (to: typeof view) => { tw = { from: { ...view }, to, t0: performance.now() }; kick(); };
  const centreOn = (n: N, minK = 1.3) => {
    autoFit = false;
    const k = Math.max(view.k, minK);
    const to = { k, x: W / 2 - n.x! * k, y: H / 2 - n.y! * k };
    if (reduce) { Object.assign(view, to); kick(); } else tween(to);
  };
  function zoomAt(f: number, sx: number, sy: number) {
    const k = Math.max(0.3, Math.min(5, view.k * f));
    view.x = sx - ((sx - view.x) * k) / view.k; view.y = sy - ((sy - view.y) * k) / view.k; view.k = k;
    autoFit = false; tw = null; kick();
  }

  /* ---------- colours ---------- */
  let col: Record<string, string> = {};
  let dark = false;
  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    const v = (name: string) => cs.getPropertyValue(name).trim();
    col = { ink: v('--ink'), muted: v('--muted'), faint: v('--faint'), accent: v('--accent'), halo: v('--glass-solid') || v('--win') };
    dark = cs.colorScheme.includes('dark');
    kick();
  };
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readColors);

  /* ---------- state ---------- */
  let hover: N | null = null;  // under the pointer
  let pinned: N | null = null; // clicked, tapped, searched or picked in the pane
  const focus = () => hover ?? pinned;

  /* ---------- drawing ---------- */
  let raf = 0;
  const t0 = performance.now();
  function kick() { if (!raf) raf = requestAnimationFrame(frame); }
  const easeOutBack = (p: number) => 1 + 2.5 * (p - 1) ** 3 + 1.5 * (p - 1) ** 2;

  function frame(now: number) {
    raf = 0;
    if (!W) return;
    let busy = sim.alpha() > sim.alphaMin();

    if (tw) {
      const p = Math.min(1, (now - tw.t0) / 420), e = 1 - (1 - p) ** 3;
      view.k = tw.from.k + (tw.to.k - tw.from.k) * e; view.x = tw.from.x + (tw.to.x - tw.from.x) * e; view.y = tw.from.y + (tw.to.y - tw.from.y) * e;
      if (p < 1) busy = true; else tw = null;
    }

    const f = focus();
    for (const n of vis) {
      const target = !f || n === f || f.nb.has(n.i) ? 1 : 0.14;
      n.a += (target - n.a) * (reduce ? 1 : 0.2);
      if (Math.abs(target - n.a) > 0.01) busy = true; else n.a = target;
    }

    // The dotted backdrop moves with the graph.
    const g = 22 * view.k;
    stage!.style.backgroundSize = `${g}px ${g}px`;
    stage!.style.backgroundPosition = `${view.x % g}px ${view.y % g}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.setTransform(dpr * view.k, 0, 0, dpr * view.k, dpr * view.x, dpr * view.y);
    const px = 1 / view.k;
    const age = now - t0;
    const grow = (n: N) => { const p = Math.max(0, Math.min(1, (age - n.born) / 520)); if (p < 1) busy = true; return p <= 0 ? 0 : easeOutBack(p); };

    /* links: soft curves; the focused dot's links in the accent colour, with a light running along them */
    ctx.lineCap = 'round';
    for (const l of links) {
      const s = l.source, t = l.target;
      const on = !!f && (s === f || t === f);
      const shown = Math.min(1, grow(s), grow(t));
      if (shown <= 0) continue;
      const dx = t.x! - s.x!, dy = t.y! - s.y!;
      const cx = (s.x! + t.x!) / 2 - dy * l.bend * 0.18, cy = (s.y! + t.y!) / 2 + dx * l.bend * 0.18;
      ctx.globalAlpha = shown * (on ? 0.85 : f ? 0.05 : dark ? 0.22 : 0.17);
      ctx.strokeStyle = on ? col.accent : col.ink;
      ctx.lineWidth = (on ? 1.4 : 0.8) * px;
      ctx.beginPath(); ctx.moveTo(s.x!, s.y!); ctx.quadraticCurveTo(cx, cy, t.x!, t.y!); ctx.stroke();
      if (on && !reduce) {
        const from = f === s ? s : t, to = f === s ? t : s;
        const u = (now / 1600 + l.bend + 0.5) % 1, v = 1 - u;
        const qx = v * v * from.x! + 2 * v * u * cx + u * u * to.x!, qy = v * v * from.y! + 2 * v * u * cy + u * u * to.y!;
        ctx.globalAlpha = Math.sin(u * Math.PI) * 0.9;
        ctx.fillStyle = col.accent;
        ctx.beginPath(); ctx.arc(qx, qy, 1.7 * px, 0, Math.PI * 2); ctx.fill();
        busy = true;
      }
    }

    /* nodes: flat dots */
    for (const n of vis) {
      const s = grow(n);
      if (s <= 0) continue;
      const r = n.r * s, x = n.x!, y = n.y!;
      if (n === f) {
        ctx.globalAlpha = 0.18; ctx.fillStyle = col.accent;
        ctx.beginPath(); ctx.arc(x, y, r + 6 * px, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = n.a;
      if (n.type === 'topic') {
        ctx.fillStyle = col.halo; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = n === f ? col.accent : col.muted; ctx.lineWidth = 1.3 * px; ctx.stroke();
        continue;
      }
      ctx.fillStyle = n.type === 'note' ? col.accent : n.type === 'leetcode' ? col.faint : col.ink;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      if (n.type === 'project') {
        ctx.strokeStyle = col.ink; ctx.lineWidth = 1.2 * px;
        ctx.beginPath(); ctx.arc(x, y, r + 2.4 * px + 1, 0, Math.PI * 2); ctx.stroke();
      }
    }

    /* labels: hubs always, everything once zoomed in, and the focused neighbourhood on top */
    const fs = 11.5 * px;
    const family = getComputedStyle(document.body).fontFamily;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.lineJoin = 'round';
    const zoomA = Math.max(0, Math.min(1, (view.k - 1.05) / 0.5));
    // Most important first (the focused dot, its neighbours, then by connections); a label that would overlap
    // one already placed is skipped. The pane lists every neighbour, so nothing is lost.
    const cands: { n: N; a: number; strong: boolean; pri: number }[] = [];
    for (const n of vis) {
      const near = !!f && (n === f || f.nb.has(n.i));
      const a = (f ? (near ? 1 : 0) : n.deg >= 9 ? 0.95 : zoomA) * Math.min(1, grow(n));
      if (a > 0.02) cands.push({ n, a, strong: n === f, pri: (n === f ? 1e6 : near ? 1e4 : 0) + n.deg });
    }
    cands.sort((p, q) => q.pri - p.pri);
    const placed: [number, number, number, number][] = [];
    for (const { n, a, strong } of cands) {
      ctx.font = `${strong ? 600 : 500} ${strong ? fs * 1.1 : fs}px ${family}`;
      const label = n.label.length > 30 ? n.label.slice(0, 28).trimEnd() + '…' : n.label;
      const y = n.y! + n.r + (n.type === 'project' ? 6 : 4) * px;
      const w = ctx.measureText(label).width, h = fs * 1.25;
      const box: [number, number, number, number] = [n.x! - w / 2 - 2 * px, y, n.x! + w / 2 + 2 * px, y + h];
      if (placed.some((o) => box[0] < o[2] && box[2] > o[0] && box[1] < o[3] && box[3] > o[1])) continue;
      placed.push(box);
      ctx.globalAlpha = a;
      ctx.lineWidth = 4 * px; ctx.strokeStyle = col.halo; ctx.strokeText(label, n.x!, y);
      ctx.fillStyle = strong ? col.ink : n.type === 'topic' ? col.faint : col.muted;
      ctx.fillText(label, n.x!, y);
    }
    ctx.globalAlpha = 1;

    if (busy) kick();
  }

  /* ---------- the preview pane ---------- */
  const glyph = (t: NodeType) => `<i class="gg gg-${t}" aria-hidden="true"></i>`;
  const row = (n: N) => `<li><button type="button" data-node="${n.i}">${glyph(n.type)}<span class="tt">${esc(n.label)}</span><span class="sub">${esc(KIND[n.type])}</span></button></li>`;
  const chip = (n: N) => `<button type="button" data-node="${n.i}">${esc(n.label)}</button>`;
  const shownNb = (n: N) => [...n.nb].map((j) => nodes[j]).filter((m) => !hidden.has(m.type));
  function renderPane() {
    const n = focus();
    if (!n) {
      const hubs = vis.filter((m) => m.type !== 'topic').sort((a, b) => b.deg - a.deg).slice(0, 6);
      const topics = vis.filter((m) => m.type === 'topic').sort((a, b) => b.deg - a.deg).slice(0, 8);
      pane!.innerHTML = `<span class="k">graph</span><h2>Everything, connected</h2>
        <p>Pages are joined when they share a topic, link to each other, or one mentions the other. Bigger dots have more connections.</p>
        ${topics.length ? `<h3>Biggest topics</h3><div class="gchips">${topics.map(chip).join('')}</div>` : ''}
        ${hubs.length ? `<h3>Most connected</h3><ul class="gnb">${hubs.map(row).join('')}</ul>` : ''}`;
      return;
    }
    const nb = shownNb(n);
    const topics = nb.filter((m) => m.type === 'topic').sort((a, b) => b.deg - a.deg);
    const pagesNb = nb.filter((m) => m.type !== 'topic').sort((a, b) => b.deg - a.deg);
    const k = n.type === 'topic' ? 'topic' : n.sub ? `${KIND[n.type]} · ${n.sub.toLowerCase()}` : KIND[n.type];
    const desc = n.type === 'topic' ? `${pagesNb.length} page${pagesNb.length === 1 ? '' : 's'} on this topic.` : n.desc ?? '';
    pane!.innerHTML = `<span class="k">${esc(k)}</span><h2>${esc(n.label)}</h2>${desc ? `<p>${esc(desc)}</p>` : ''}
      ${topics.length ? `<div class="gchips">${topics.map(chip).join('')}</div>` : ''}
      ${pagesNb.length ? `<h3>${n.type === 'topic' ? 'Pages' : 'Connected to'} <span>${pagesNb.length}</span></h3><ul class="gnb">${pagesNb.map(row).join('')}</ul>` : ''}
      ${n.href ? `<a class="cta" href="${esc(n.href)}">${CTA[n.type]} <span aria-hidden="true">→</span></a>` : ''}`;
  }
  let paneFor: N | null | undefined;
  const syncPane = () => { const f = focus(); if (f !== paneFor) { paneFor = f; renderPane(); } };
  const setHover = (n: N | null) => { if (n === hover) return; hover = n; syncPane(); kick(); };
  const pin = (n: N | null, centre = false) => {
    pinned = n; hover = null; syncPane();
    if (n && centre) centreOn(n);
    kick();
  };
  pane.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-node]');
    if (b) pin(nodes[Number(b.dataset.node)], true);
  });

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
  const local = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

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
    drag = { n: hit(p.x, p.y, e.pointerType === 'touch' ? 14 : 6), x0: p.x, y0: p.y, moved: false, vx: view.x, vy: view.y };
    tw = null;
  });
  canvas.addEventListener('pointermove', (e) => {
    const p = local(e);
    if (pts.has(e.pointerId)) pts.set(e.pointerId, p);
    if (pinch && pts.size === 2) {
      const [a, b] = [...pts.values()];
      zoomAt((pinch.k * Math.hypot(a.x - b.x, a.y - b.y)) / pinch.d / view.k, (a.x + b.x) / 2, (a.y + b.y) / 2);
      return;
    }
    if (drag) {
      if (!drag.moved && Math.hypot(p.x - drag.x0, p.y - drag.y0) < 4) return;
      if (!drag.moved) { drag.moved = true; autoFit = false; if (drag.n) sim.alphaTarget(0.2).restart(); }
      if (drag.n) { const w = toWorld(p.x, p.y); drag.n.fx = w.x; drag.n.fy = w.y; setHover(drag.n); }
      else { view.x = drag.vx + p.x - drag.x0; view.y = drag.vy + p.y - drag.y0; kick(); }
      stage.classList.add('grabbing');
      return;
    }
    if (e.pointerType === 'mouse') {
      const n = hit(p.x, p.y, 6);
      stage.classList.toggle('over', !!n);
      setHover(n);
    }
  });
  const end = (e: PointerEvent) => {
    pts.delete(e.pointerId);
    if (pinch) { if (pts.size < 2) pinch = null; return; }
    if (!drag) return;
    const d = drag; drag = null;
    stage.classList.remove('grabbing');
    if (d.n && d.moved) { d.n.fx = d.n.fy = null; sim.alphaTarget(0); }
    if (d.moved || e.type === 'pointercancel') return;
    // A tap on the pinned dot (touch) unpins it; a click or tap on the background clears the pin.
    pin(d.n === pinned && e.pointerType !== 'mouse' ? null : d.n);
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && !drag) { stage.classList.remove('over'); setHover(null); } });
  canvas.addEventListener('dblclick', (e) => { const p = local(e); const n = hit(p.x, p.y, 6); if (n?.href) location.href = n.href; });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const p = local(e);
    zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.002)), p.x, p.y);
  }, { passive: false });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && pinned && document.activeElement?.id !== 'graph-q') pin(null); });

  app.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
    const z = b.dataset.zoom;
    autoFit = false;
    if (z === 'fit') { fit(true); return; }
    const k = Math.max(0.3, Math.min(5, view.k * (z === 'in' ? 1.4 : 1 / 1.4)));
    tween({ k, x: W / 2 - ((W / 2 - view.x) * k) / view.k, y: H / 2 - ((H / 2 - view.y) * k) / view.k });
  }));

  /* ---------- type filters ---------- */
  app.querySelectorAll<HTMLButtonElement>('[data-type]').forEach((b) => b.addEventListener('click', () => {
    const t = b.dataset.type as NodeType;
    const on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', String(on));
    if (on) hidden.delete(t); else hidden.add(t);
    vis = nodes.filter((n) => !hidden.has(n.type));
    links = allLinks.filter((l) => !hidden.has(l.source.type) && !hidden.has(l.target.type));
    sim.nodes(vis);
    (sim.force('link') as ReturnType<typeof forceLink<N, L>>).links(links);
    if (hover && hidden.has(hover.type)) hover = null;
    if (pinned && hidden.has(pinned.type)) pinned = null;
    paneFor = undefined; syncPane();
    autoFit = true;
    if (reduce) { for (let k = 0; k < 200; k++) sim.tick(); fit(false); kick(); }
    else sim.alpha(0.6).restart();
  }));

  /* ---------- find ---------- */
  const q = document.getElementById('graph-q') as HTMLInputElement;
  const find = (s: string) => {
    const t = s.trim().toLowerCase();
    if (!t) return null;
    const pool = [...vis].sort((a, b) => b.deg - a.deg);
    return pool.find((n) => n.label.toLowerCase() === t) ?? pool.find((n) => n.label.toLowerCase().startsWith(t))
      ?? pool.find((n) => n.label.toLowerCase().includes(t)) ?? null;
  };
  q.addEventListener('input', () => { const m = find(q.value); if (m) pin(m, true); else if (!q.value.trim()) pin(null); });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && pinned?.href) location.href = pinned.href;
    if (e.key === 'Escape') { q.value = ''; pin(null); }
  });

  new ResizeObserver(resize).observe(stage);
  readColors();
  renderPane();
  resize();
}
