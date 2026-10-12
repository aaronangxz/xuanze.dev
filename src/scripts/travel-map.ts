// @ts-nocheck
/* Travel map: region zoom (tweened viewBox), label collision, route tooltips, city panel. */
const root = document.getElementById('tm');
if (root) init(root);

function init(tm) {
  const data = JSON.parse(document.getElementById('tm-data').textContent);
  const svg = document.getElementById('tm-svg');
  const stage = document.getElementById('tm-stage');
  const overlay = document.getElementById('tm-overlay');
  const tip = document.getElementById('tm-tip');
  const panel = document.getElementById('tm-panel');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const fmt = (n) => Number(n).toLocaleString('en-US');
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = (d) => { const [y, m, dd] = d.split('-'); return `${+dd} ${MON[+m - 1]} ${y}`; };
  const cityBy = Object.fromEntries(data.cities.map((c) => [c.slug, c]));

  let vb = { ...data.regions.world };
  let region = 'world';
  let anim = 0;

  /* ---------- viewBox ---------- */
  // Fit a region box to the stage's aspect, never showing beyond the world's edges.
  function fitted(box) {
    const ar = stage.clientWidth / Math.max(1, stage.clientHeight);
    let { x, y, w, h } = box;
    if (w / h > ar) { const nh = w / ar; y -= (nh - h) / 2; h = nh; } else { const nw = h * ar; x -= (nw - w) / 2; w = nw; }
    const world = data.regions.world;
    if (w > world.w) { x = world.x - (w - world.w) / 2; } else { x = Math.min(Math.max(x, world.x), world.x + world.w - w); }
    if (h <= world.h) y = Math.min(Math.max(y, world.y), world.y + world.h - h);
    return { x, y, w, h };
  }
  // Which sharper coastline (if any) suits this view: the smallest region that holds its centre.
  const HI = ['sea', 'europe', 'us', 'asia'];
  function landFor(v) {
    const cx = v.x + v.w / 2, cy = v.y + v.h / 2;
    for (const id of HI) {
      const r = data.regions[id];
      if (v.w <= r.w * 1.9 && cx > r.x - r.w * 0.2 && cx < r.x + r.w * 1.2 && cy > r.y - r.h * 0.2 && cy < r.y + r.h * 1.2) return id;
    }
    return 'lo';
  }
  function apply(v) {
    vb = v;
    const land = landFor(v);
    if (tm.dataset.land !== land) { tm.dataset.land = land; if (land !== 'lo') loadLand(); }
    svg.setAttribute('viewBox', `${v.x} ${v.y} ${v.w} ${v.h}`);
    tm.style.setProperty('--vbx', v.x); tm.style.setProperty('--vby', v.y);
    tm.style.setProperty('--vbw', v.w); tm.style.setProperty('--vbh', v.h);
    tm.style.setProperty('--u', (v.w / Math.max(1, stage.clientWidth)).toFixed(4));
  }
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  function zoomTo(box, done) {
    const to = fitted(box), from = { ...vb };
    cancelAnimationFrame(anim);
    tm.classList.add('moving');
    if (reduce) { apply(to); settle(); done?.(); return; }
    const t0 = performance.now(), dur = 750;
    // Interpolate in log-space for size so zooming feels even.
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur), k = ease(t);
      const w = Math.exp(Math.log(from.w) + (Math.log(to.w) - Math.log(from.w)) * k);
      const h = w * (to.h / to.w);
      const cx = from.x + from.w / 2 + (to.x + to.w / 2 - from.x - from.w / 2) * k;
      const cy = from.y + from.h / 2 + (to.y + to.h / 2 - from.y - from.h / 2) * k;
      apply({ x: cx - w / 2, y: cy - h / 2, w, h });
      if (t < 1) anim = requestAnimationFrame(step); else { settle(); done?.(); }
    };
    anim = requestAnimationFrame(step);
  }
  // Sharper coastlines for the zoomed views live in land.json next to the page, loaded once on first zoom.
  let landLoaded = false;
  function loadLand() {
    if (landLoaded) return;
    landLoaded = true;
    const href = location.href.split(/[?#]/)[0];
    const base = /\/$|\.html$/.test(href) ? href : href + '/';
    fetch(new URL('land.json', base)).then((r) => r.ok ? r.json() : null).then((land) => {
      if (land) for (const [id, d] of Object.entries(land)) svg.querySelector(`[data-hi="${id}"]`)?.setAttribute('d', d);
    }).catch(() => {});
  }
  tm.addEventListener('pointerenter', loadLand, { once: true });
  function setRegion(id, opts = {}) {
    region = id;
    tm.dataset.region = id;
    tm.querySelectorAll('.tm-chips button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.region === id)));
    if (!opts.silent) zoomTo(data.regions[id]);
  }

  /* ---------- labels: show the most important ones that don't collide ---------- */
  // Busiest places get first claim on label space (Singapore before Johor Bahru next door).
  const score = (c) => c.flights + c.nights * 1.5 + c.runs.length;
  const cityEls = [...overlay.querySelectorAll('.tm-city')].sort((a, b) => score(cityBy[b.dataset.city]) - score(cityBy[a.dataset.city]));
  const legend = stage.querySelector('.tm-legend');
  function settle() {
    tm.classList.remove('moving');
    const sr = stage.getBoundingClientRect();
    const rel = (r) => ({ l: r.left - sr.left, r: r.right - sr.left, t: r.top - sr.top, b: r.bottom - sr.top });
    const placed = legend ? [rel(legend.getBoundingClientRect())] : [];
    const hit = (r) => placed.some((p) => r.l < p.r + 3 && r.r + 3 > p.l && r.t < p.b + 2 && r.b + 2 > p.t);
    const dots = [];
    for (const el of cityEls) {
      el.classList.remove('lbl', 'tagged');
      const c = cityBy[el.dataset.city];
      const x = ((c.x - vb.x) / vb.w) * sr.width, y = ((c.y - vb.y) / vb.h) * sr.height;
      const inside = x > -20 && x < sr.width + 20 && y > -20 && y < sr.height + 20;
      el.classList.toggle('off', !inside);
      if (inside) dots.push({ el, x, y });
    }
    const fits = (r, self) => r.l > 2 && r.r < sr.width - 4 && r.t > 2 && r.b < sr.height - 4 && !hit(r)
      // Other cities' dots block a label, except the ones sitting on top of this city (same cluster).
      && !dots.some((d) => d !== self && Math.hypot(d.x - self.x, d.y - self.y) > 14 && d.x + 5 > r.l && d.x - 5 < r.r && d.y + 5 > r.t && d.y - 5 < r.b);
    const labelled = [];
    for (const d of dots) {
      const { el, x } = d;
      el.classList.remove('left');
      // A city on top of one that already has a label shares it.
      if (labelled.some((o) => Math.hypot(o.x - d.x, o.y - d.y) < 14)) continue;
      // Measured as laid out (tags take space even while hidden), so overlaps are real overlaps.
      const name = rel(el.querySelector('.tm-lbl b').getBoundingClientRect());
      const tagsEl = el.querySelector('.tm-tags');
      const tr = tagsEl && rel(tagsEl.getBoundingClientRect());
      const all = tr ? { ...name, r: Math.max(name.r, tr.r), b: tr.b } : name;
      const flip = (r) => ({ ...r, l: x - 11 - (r.r - r.l), r: x - 11 });
      const tries = [[all, true, false], [flip(all), true, true], [name, false, false], [flip({ ...name, r: name.l + (name.r - name.l) }), false, true]];
      for (const [r, tagged, left] of tries) {
        if (tagged && !tr) continue;
        if (!fits(r, d)) continue;
        el.classList.add('lbl'); if (tagged) el.classList.add('tagged'); if (left) el.classList.add('left');
        placed.push(r); labelled.push(d);
        break;
      }
    }
  }

  /* ---------- tooltip ---------- */
  function showTip(html, ev) {
    tip.innerHTML = html;
    tip.hidden = false;
    const sr = stage.getBoundingClientRect();
    const x = Math.min(ev.clientX - sr.left + 14, sr.width - tip.offsetWidth - 8);
    const y = Math.max(8, ev.clientY - sr.top - tip.offsetHeight - 12);
    tip.style.transform = `translate(${x}px, ${y}px)`;
  }
  const hideTip = () => { tip.hidden = true; svg.querySelectorAll('.tm-r.hot').forEach((p) => p.classList.remove('hot')); };
  const routeEls = [...svg.querySelectorAll('.tm-routes .tm-r')];
  svg.addEventListener('pointermove', (ev) => {
    const t = ev.target.closest?.('[data-route],[data-ground]');
    if (!t) { hideTip(); return; }
    svg.querySelectorAll('.tm-r.hot').forEach((p) => p.classList.remove('hot'));
    if (t.dataset.route != null) {
      const r = data.routes[+t.dataset.route];
      routeEls[+t.dataset.route].classList.add('hot');
      const times = r.upcoming ? 'upcoming' : r.count === 1 ? 'once' : `${r.count} times`;
      showTip(`<b>${esc(r.ca)} ⇄ ${esc(r.cb)}</b><span>${esc(r.a)}–${esc(r.b)} · ${fmt(r.km)} km · ${times} · ${esc(r.years)}</span>`, ev);
    } else {
      const g = data.ground[+t.dataset.ground];
      showTip(`<b>${esc(g.from)} → ${esc(g.to)}</b><span>Overland · ${fmt(g.km)} km · ${day(g.date)}</span>`, ev);
    }
  });
  svg.addEventListener('pointerleave', hideTip);

  /* ---------- free zoom: wheel, drag, pinch, buttons ---------- */
  const MIN_W = data.regions.sea.w / 6;
  // Keep a free view inside the world and between the zoom limits.
  function clamp(v) {
    const world = data.regions.world, ar = v.w / v.h;
    const maxW = Math.max(fitted(world).w, world.w);
    let w = Math.min(Math.max(v.w, MIN_W), maxW), h = w / ar;
    let x = v.x + (v.w - w) / 2, y = v.y + (v.h - h) / 2;
    if (w >= world.w) x = world.x - (w - world.w) / 2; else x = Math.min(Math.max(x, world.x), world.x + world.w - w);
    if (h >= world.h) y = world.y - (h - world.h) / 2; else y = Math.min(Math.max(y, world.y), world.y + world.h - h);
    return { x, y, w, h };
  }
  function goFree() {
    if (region === 'free' || region === 'city') return;
    region = 'free';
    tm.dataset.region = 'free';
    tm.querySelectorAll('.tm-chips button').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  }
  let settleT = 0;
  const settleSoon = () => { tm.classList.add('moving'); clearTimeout(settleT); settleT = setTimeout(settle, 160); };
  // Zoom by factor k (>1 zooms in) around a point given in stage pixels.
  function zoomAt(k, px, py) {
    cancelAnimationFrame(anim);
    const fx = px / stage.clientWidth, fy = py / stage.clientHeight;
    const w = vb.w / k, h = vb.h / k;
    apply(clamp({ x: vb.x + (vb.w - w) * fx, y: vb.y + (vb.h - h) * fy, w, h }));
    goFree(); settleSoon(); hideTip();
  }
  function panBy(dx, dy) {
    cancelAnimationFrame(anim);
    const s = vb.w / stage.clientWidth;
    apply(clamp({ ...vb, x: vb.x - dx * s, y: vb.y - dy * s }));
    goFree(); settleSoon(); hideTip();
  }

  // Wheel / trackpad. If the page was being scrolled when the map slid under the cursor, keep scrolling the page.
  let lastPageScroll = 0;
  addEventListener('scroll', () => { lastPageScroll = performance.now(); }, { passive: true });
  stage.addEventListener('wheel', (ev) => {
    if (performance.now() - lastPageScroll < 350) return;
    const zoomOut = ev.deltaY > 0;
    const atMax = vb.w >= Math.max(fitted(data.regions.world).w, data.regions.world.w) - 1;
    if (zoomOut && atMax && !ev.ctrlKey) return; // fully out: let the page scroll on
    ev.preventDefault();
    const r = stage.getBoundingClientRect();
    if (!ev.ctrlKey && Math.abs(ev.deltaX) > Math.abs(ev.deltaY) * 1.5) { panBy(-ev.deltaX, 0); return; }
    const unit = ev.deltaMode === 1 ? 16 : 1;
    zoomAt(Math.exp(-ev.deltaY * unit * (ev.ctrlKey ? 0.012 : 0.0022)), ev.clientX - r.left, ev.clientY - r.top);
  }, { passive: false });

  // Drag to pan (mouse, or one finger sideways); two fingers pinch.
  const pts = new Map();
  let dragMoved = 0, pinch = null;
  stage.addEventListener('pointerdown', (ev) => {
    if (ev.target.closest('.tm-zoom')) return;
    pts.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    dragMoved = 0;
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
    }
  });
  stage.addEventListener('pointermove', (ev) => {
    const p = pts.get(ev.pointerId);
    if (!p) return;
    const dx = ev.clientX - p.x, dy = ev.clientY - p.y;
    p.x = ev.clientX; p.y = ev.clientY;
    if (pts.size >= 2 && pinch) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const r = stage.getBoundingClientRect();
      zoomAt(d / pinch.d, mx - r.left, my - r.top);
      panBy(mx - pinch.mx, my - pinch.my);
      pinch = { d, mx, my };
      dragMoved += 10;
      return;
    }
    // A finger drags the map sideways only; vertical swipes belong to the page.
    if (ev.pointerType === 'touch' && Math.abs(dy) > Math.abs(dx)) return;
    dragMoved += Math.abs(dx) + Math.abs(dy);
    if (dragMoved > 4) { stage.classList.add('dragging'); if (!stage.hasPointerCapture(ev.pointerId)) stage.setPointerCapture?.(ev.pointerId); panBy(dx, ev.pointerType === 'touch' ? 0 : dy); }
  });
  const endPtr = (ev) => { pts.delete(ev.pointerId); if (pts.size < 2) pinch = null; if (!pts.size) stage.classList.remove('dragging'); };
  stage.addEventListener('pointerup', endPtr);
  stage.addEventListener('pointercancel', endPtr);
  // A drag that ends on a city must not also open it.
  stage.addEventListener('click', (ev) => { if (dragMoved > 4) { ev.stopPropagation(); ev.preventDefault(); dragMoved = 0; } }, true);
  stage.addEventListener('dblclick', (ev) => { const r = stage.getBoundingClientRect(); zoomAt(2, ev.clientX - r.left, ev.clientY - r.top); });

  tm.querySelector('.tm-zoom')?.addEventListener('click', (ev) => {
    const b = ev.target.closest('button[data-z]');
    if (!b) return;
    if (b.dataset.z === 'reset') { setRegion(small() ? 'asia' : 'world'); return; }
    zoomAt(b.dataset.z === 'in' ? 1.8 : 1 / 1.8, stage.clientWidth / 2, stage.clientHeight / 2);
  });

  /* ---------- city panel ---------- */
  function renderCity(c) {
    const head = `<div class="tp-head"><div><span class="lab">${esc(c.country)}</span><h3>${esc(c.name)}</h3></div>
      <button type="button" class="tp-x" data-close aria-label="Close">×</button></div>
      <p class="tp-sub">${[c.flights ? `${c.flights} flight${c.flights > 1 ? 's' : ''}` : '', c.nights ? `${c.nights} night${c.nights > 1 ? 's' : ''} in hotels` : '', c.runs.length ? `${c.runs.length} run${c.runs.length > 1 ? 's' : ''}` : '', c.years].filter(Boolean).join(' · ')}</p>`;
    const stays = c.stays.length ? `<ul class="tp-stays">${c.stays.map((s) => `<li class="${s.upcoming ? 'up' : ''}">
        ${s.tag ? `<span class="htag" data-chain="${esc(s.chain?.toLowerCase())}">${esc(s.tag)}</span>` : '<span class="htag indie">INDEPENDENT</span>'}
        <div><a href="/life/hotels/${esc(s.slug)}"><b>${esc(s.name)}</b></a><small>${day(s.checkIn)} · ${s.nights} night${s.nights > 1 ? 's' : ''}${s.upcoming ? ' · upcoming' : ''}</small></div></li>`).join('')}</ul>`
      : c.flights ? '<p class="tp-note">Passed through, no hotel on record.</p>' : '';
    const runs = c.runs.length ? `<div class="tp-runs">${c.runs.map((r) => `<figure class="run${r.race ? ' race' : ''}">
        <svg viewBox="${r.vb}" aria-hidden="true"><path d="${r.d}" /></svg>
        <figcaption><b>${esc(r.title)}</b><small>${r.km} km · ${day(r.date)}</small></figcaption></figure>`).join('')}</div>` : '';
    return `<div class="tp-a">${head}</div>`
      + (stays ? `<div class="tp-b"><span class="lab">stayed</span>${stays}</div>` : '')
      + (runs ? `<div class="tp-c"><span class="lab">ran</span>${runs}</div>` : '');
  }
  let openSlug = null;
  const defaultPanel = panel.innerHTML;
  function openCity(slug, { zoom = true } = {}) {
    const c = cityBy[slug];
    if (!c) return;
    openSlug = slug;
    cityEls.forEach((el) => el.classList.toggle('sel', el.dataset.city === slug));
    panel.innerHTML = renderCity(c);
    panel.classList.add('open');
    if (!reduce) panel.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' });
    // The panel sits under the map: bring its top into view if it starts below the fold.
    const r = panel.getBoundingClientRect();
    if (r.top > innerHeight - 140) scrollBy({ top: Math.min(r.height, 320) + r.top - innerHeight + 24, behavior: reduce ? 'auto' : 'smooth' });
    if (zoom) {
      // Zoom in on the city, unless it is already comfortably in view at a closer zoom.
      const k = Math.min(vb.w, data.regions.sea.w * 1.2);
      zoomTo({ x: c.x - k / 2, y: c.y - k / 4, w: k, h: k / 2 });
      region = 'city';
      tm.dataset.region = 'city';
      tm.querySelectorAll('.tm-chips button').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    }
  }
  function closeCity() {
    openSlug = null;
    cityEls.forEach((el) => el.classList.remove('sel'));
    panel.innerHTML = defaultPanel;
    panel.classList.remove('open');
  }

  tm.addEventListener('click', (ev) => {
    const chip = ev.target.closest('.tm-chips button');
    if (chip) { setRegion(chip.dataset.region); return; }
    const city = ev.target.closest('.tm-city');
    if (city) { openCity(city.dataset.city); return; }
    const quick = ev.target.closest('[data-goto]');
    if (quick) { openCity(quick.dataset.goto); return; }
    if (ev.target.closest('[data-close]')) { closeCity(); setRegion(region === 'city' ? 'world' : region); }
  });
  // Life search ("Where to?") can ask the map to show a city.
  addEventListener('xz:city', (ev) => { stage.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => openCity(ev.detail), reduce ? 0 : 450); });

  /* ---------- start ---------- */
  const small = () => stage.clientWidth < 640;
  let lastW = 0;
  const ro = new ResizeObserver(() => {
    if (Math.abs(stage.clientWidth - lastW) < 2) return;
    lastW = stage.clientWidth;
    if (region === 'city' || region === 'free') { apply(clamp(fitted(vb))); settle(); return; }
    apply(fitted(data.regions[region])); settle();
  });
  // Phones open on Asia, where most of the map's ink is.
  if (small()) setRegion('asia', { silent: true });
  apply(fitted(data.regions[region]));
  ro.observe(stage);
  requestAnimationFrame(settle);
  document.fonts?.ready.then(settle);

  // Draw the routes in once the map scrolls into view.
  const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { tm.classList.add('drawn'); io.disconnect(); } }, { threshold: 0.25 });
  io.observe(stage);
}
