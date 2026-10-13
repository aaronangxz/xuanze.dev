// @ts-nocheck
/* Client behaviour for the whole site: launcher, ⌘K, Life search, Work/Life slide, theme, small touches. */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(.2,.8,.2,1)';
const root = document.documentElement;
const $ = (id) => document.getElementById(id);
const mode = root.getAttribute('data-mode') === 'life' ? 'life' : 'work';
const site = JSON.parse($('site-data')?.textContent || '{}');

/* ---------- toast + copy ---------- */
const toastEl = $('toast');
let toastTimer;
function say(m) {
  toastEl.textContent = m; toastEl.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toastEl.hidden = true; }, 2200);
}
function copyEmail(btn) {
  const ok = () => {
    if (btn) { const t = btn.textContent; btn.textContent = 'Copied'; setTimeout(() => { btn.textContent = t; }, 1500); }
    else say('Email copied');
  };
  try { navigator.clipboard.writeText(site.email).then(ok, () => say('Copy failed. Select the address instead.')); }
  catch { say('Copy failed. Select the address instead.'); }
}

/* =========================================================
   Work launcher (inline on home, ⌘K overlay elsewhere)
   ========================================================= */
const IC = {
  user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path></svg>',
  box: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"></path><path d="M3 7v10l9 4 9-4V7"></path></svg>',
  doc: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"></path><path d="M9 12h6M9 16h6"></path></svg>',
  work: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M9 7V4h6v3"></path></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path></svg>',
  note: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 4h14v16H5z"></path><path d="M9 8h6M9 12h6M9 16h3"></path></svg>',
  sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>',
};
const items = JSON.parse($('launcher-data')?.textContent || '[]');
const launcher = $('launcher');
const slot = $('slot');
const overlay = $('overlay');
const isHome = !!slot;
let closing = false;

const L = launcher && (() => {
  const clearBtn = $('qclear');
  const input = $('q'), list = $('list'), prev = $('prev'), lw = $('lw'), moreBtn = $('more'), moreN = $('more-n'), countEl = $('count');
  let shown = [], active = 0, hl = null, lastFocus = null;
  // Phones: a plain list. A tap opens the row, and only the first rows show until "Show all" is pressed.
  const compactMQ = window.matchMedia('(max-width: 640px)');
  const FEW = 5;
  let expanded = false;
  const fullPlaceholder = input.placeholder;
  const setPlaceholder = () => { input.placeholder = compactMQ.matches ? 'Search projects, posts, notes' : fullPlaceholder; };
  setPlaceholder();

  const ctaHtml = (it) => {
    const label = (it.cta || 'Open') + (it.external ? ' ↗' : it.copy ? '' : ' →');
    if (it.copy) return `<button class="cta" type="button" data-copy>${label}</button>`;
    if (it.life) return `<a class="cta" href="${it.href}" data-life-link>${label}</a>`;
    return `<a class="cta" href="${it.href}"${it.external ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
  };

  function render(animate) {
    const q = input.value.trim().toLowerCase();
    shown = items.filter((it) => q ? (it.t + ' ' + it.s + ' ' + it.k + ' ' + it.g).toLowerCase().includes(q) : !it.searchOnly);
    if (active >= shown.length) active = 0;
    let html = '', g = null;
    if (!shown.length) html = '<li class="empty">No results. Try "go" or "redis".</li>';
    shown.forEach((it, i) => {
      const x = !q && i >= FEW ? ' x' : '';
      if (it.g !== g) { html += `<li class="grp${x}" role="presentation">${it.g}</li>`; g = it.g; }
      html += `<li class="opt${x}" role="option" id="o${i}" data-i="${i}" aria-selected="${i === active}"><span class="ic${it.img ? ' logo' : ''}">${it.img ? `<img src="${it.img}" alt="" width="30" height="30">` : IC[it.i] || IC.doc}</span><span class="tt">${it.t}</span><span class="sub">${it.s}</span></li>`;
    });
    list.innerHTML = html;
    hl = document.createElement('li'); hl.className = 'hl'; hl.setAttribute('role', 'presentation'); hl.setAttribute('aria-hidden', 'true');
    list.insertBefore(hl, list.firstChild);
    list.scrollTop = 0;
    moveHL(true);
    paint();
    if (animate !== false && !reduce) {
      list.querySelectorAll('.opt, .grp, .empty').forEach((el, i) => {
        if (i > 16) return;
        el.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 280, delay: i * 16, easing: EASE, fill: 'backwards' });
      });
    }
    countEl.textContent = shown.length + (shown.length === 1 ? ' result' : ' results');
    if (clearBtn) clearBtn.hidden = !input.value;
    requestAnimationFrame(updateScroll);
  }
  function moveHL(instant) {
    if (!hl) return;
    const el = $('o' + active);
    if (!el) { hl.style.opacity = '0'; return; }
    if (instant || reduce) hl.classList.add('instant');
    hl.style.opacity = '1';
    hl.style.transform = `translateY(${el.offsetTop}px)`;
    hl.style.height = el.offsetHeight + 'px';
    if (instant || reduce) { void hl.offsetWidth; hl.classList.remove('instant'); }
  }
  function paint() {
    const it = shown[active];
    input.setAttribute('aria-activedescendant', it ? 'o' + active : '');
    prev.innerHTML = it ? it.p + ctaHtml(it) : '';
    if (it && !reduce) prev.animate([{ opacity: 0, transform: 'translateY(8px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 280, easing: EASE });
  }
  function select(i) {
    if (i === active) return;
    active = i;
    list.querySelectorAll('.opt').forEach((o) => o.setAttribute('aria-selected', String(+o.dataset.i === i)));
    moveHL(false);
    paint();
    const el = $('o' + i);
    if (el) {
      // Keep the row clear of the top fade and the bottom "more" pill, scrolling the same way in both directions.
      const PAD_T = 40, PAD_B = 56;
      // The first row of a group brings its heading with it.
      const head = el.previousElementSibling?.classList.contains('grp') ? el.previousElementSibling : el;
      const top = head.offsetTop, bottom = el.offsetTop + el.offsetHeight;
      const behavior = reduce ? 'auto' : 'smooth';
      if (top - PAD_T < list.scrollTop) list.scrollTo({ top: Math.max(0, top - PAD_T), behavior });
      else if (bottom + PAD_B > list.scrollTop + list.clientHeight) list.scrollTo({ top: bottom + PAD_B - list.clientHeight, behavior });
    }
  }
  function updateScroll() {
    if (compactMQ.matches) {
      const q = input.value.trim();
      const more = !q && shown.length > FEW;
      lw.classList.toggle('short', more && !expanded);
      lw.classList.remove('below', 'above');
      moreBtn.hidden = !more;
      moreBtn.classList.toggle('up', expanded);
      moreN.textContent = expanded ? 'Show fewer' : `Show all ${shown.length}`;
      return;
    }
    lw.classList.remove('short');
    const below = list.scrollHeight - list.scrollTop - list.clientHeight > 4;
    lw.classList.toggle('below', below);
    lw.classList.toggle('above', list.scrollTop > 4);
    const edge = list.scrollTop + list.clientHeight - 56;
    let n = 0;
    list.querySelectorAll('.opt').forEach((o) => { if (o.offsetTop + o.offsetHeight / 2 > edge) n++; });
    // At the end of a long list the pill flips to take you back up.
    const up = !(below && n > 0) && list.scrollTop > 4;
    moreBtn.hidden = !(below && n > 0) && !up;
    moreBtn.classList.toggle('up', up);
    moreN.textContent = up ? 'Back to top' : n + ' more';
  }
  function open() {
    const it = shown[active]; if (!it) return;
    if (it.copy) { copyEmail(compactMQ.matches ? null : prev.querySelector('[data-copy]')); return; }
    if (it.life) { slideTo('life', it.href); return; }
    if (it.external) { window.open(it.href, '_blank', 'noopener'); return; }
    location.href = it.href;
  }

  let raf = 0;
  list.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(updateScroll); }, { passive: true });
  moreBtn.addEventListener('click', () => {
    const behavior = reduce ? 'auto' : 'smooth';
    if (compactMQ.matches) {
      expanded = !expanded;
      updateScroll();
      if (expanded && !reduce) list.querySelectorAll('.x').forEach((el, i) => { if (i < 20) el.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 260, delay: i * 18, easing: EASE, fill: 'backwards' }); });
      if (!expanded) launcher.scrollIntoView({ block: 'nearest', behavior });
      return;
    }
    if (moreBtn.classList.contains('up')) list.scrollTo({ top: 0, behavior });
    else list.scrollBy({ top: list.clientHeight * 0.7, behavior });
  });
  moreBtn.addEventListener('mousedown', (e) => e.preventDefault());
  window.addEventListener('resize', () => { moveHL(true); updateScroll(); });
  input.addEventListener('input', () => { active = 0; expanded = false; render(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (shown.length) select((active + 1) % shown.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (shown.length) select((active - 1 + shown.length) % shown.length); }
    else if (e.key === 'Enter') { e.preventDefault(); open(); }
    else if (e.key === 'Escape') { e.preventDefault(); if (!overlay.hidden) closeOverlay(); else { input.value = ''; active = 0; render(); } }
  });
  list.addEventListener('mousedown', (e) => e.preventDefault());
  list.addEventListener('click', (e) => {
    const o = e.target.closest('.opt'); if (!o) return; const i = +o.dataset.i;
    if (compactMQ.matches) { active = i; open(); return; }
    if (i === active) open(); else { select(i); input.focus(); }
  });
  compactMQ.addEventListener('change', () => { setPlaceholder(); render(false); });
  clearBtn?.addEventListener('mousedown', (e) => e.preventDefault()); // keep the keyboard up
  clearBtn?.addEventListener('click', () => { input.value = ''; active = 0; expanded = false; render(); input.focus(); });
  // A "Try" chip fills the search and brings the top of the search back into view, under the header.
  document.querySelectorAll('[data-q]').forEach((b) => b.addEventListener('click', () => {
    input.value = b.dataset.q; active = 0; expanded = false; render();
    input.focus({ preventScroll: true });
    // Land below both the header and the soft blur band that fades out under it, not inside the blur.
    const head = document.querySelector('header.top')?.getBoundingClientRect().bottom ?? 0;
    const blur = document.querySelector('.edge-t')?.getBoundingClientRect().height ?? 0;
    const y = launcher.getBoundingClientRect().top + scrollY - Math.max(head + 16, blur - 24);
    if (Math.abs(y - scrollY) > 4) scrollTo({ top: Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' });
  }));

  // Focus mode on home: everything around the launcher blurs back while you search.
  const homeEl = document.querySelector('.page.home');
  if (homeEl) {
    input.addEventListener('focus', () => homeEl.classList.add('searching'));
    input.addEventListener('blur', () => homeEl.classList.remove('searching'));
  }

  render(!isHome);
  return {
    input, render, moveHL, updateScroll,
    reset() { input.value = ''; active = 0; render(false); },
    set lastFocus(v) { lastFocus = v; }, get lastFocus() { return lastFocus; },
  };
})();

function openOverlay() {
  if (!L) return;
  if (isHome) { L.input.focus(); L.input.select(); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); return; }
  L.lastFocus = document.activeElement;
  overlay.hidden = false;
  L.reset();
  if (!reduce) {
    overlay.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, easing: 'ease-out' });
    launcher.animate([{ opacity: 0, transform: 'translateY(14px) scale(.975)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 300, easing: EASE });
  }
  setTimeout(() => L.input.focus(), 0);
}
function closeOverlay() {
  if (overlay.hidden || closing) return;
  const done = () => { overlay.hidden = true; closing = false; const f = L.lastFocus; if (f && f.focus) f.focus(); };
  if (reduce) { done(); return; }
  closing = true;
  overlay.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 170, easing: 'ease-in', fill: 'forwards' });
  const an = launcher.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(8px) scale(.985)' }], { duration: 170, easing: 'ease-in' });
  // Close on the animation's end, or after its duration at the latest: a heavy backdrop blur can stall frames.
  const finish = () => { if (!closing) return; overlay.getAnimations().forEach((x) => x.cancel()); an.cancel(); done(); };
  an.onfinish = finish;
  setTimeout(finish, 220);
}
overlay.addEventListener('mousedown', (e) => { if (!launcher.contains(e.target)) closeOverlay(); });

/* =========================================================
   Life search ("Where to?")
   ========================================================= */
const LS = $('loverlay') && (() => {
  const lov = $('loverlay'), lpanel = $('lpanel'), lq = $('lq'), llist = $('llist'), lclear = $('lqclear');
  const litems = JSON.parse($('life-data')?.textContent || '[]');
  let shown = [], act = 0, last = null, isClosing = false;

  function render(animate) {
    const q = lq.value.trim().toLowerCase();
    // Nothing typed: a short starter list. Typed: every match, best first (title start, title, anywhere).
    const rank = (it) => { const t = it.t.toLowerCase(); return t.startsWith(q) ? 0 : t.includes(q) ? 1 : 2; };
    shown = !q ? litems.filter((it) => it.top)
      : litems.map((it, i) => ({ it, i })).filter(({ it }) => (it.t + ' ' + it.s + ' ' + it.k + ' ' + it.cat).toLowerCase().includes(q))
        .sort((a, b) => rank(a.it) - rank(b.it) || a.i - b.i).map(({ it }) => it);
    if (act >= shown.length) act = 0;
    llist.innerHTML = shown.length
      ? shown.map((it, i) => `<li class="lopt" role="option" id="lo${i}" data-i="${i}" aria-selected="${i === act}"><span class="cat">${it.cat}</span><span class="tt">${it.t}</span><span class="sub">${it.s}</span></li>`).join('')
      : '<li class="lempty">Nowhere yet. Try "race".</li>';
    lq.setAttribute('aria-activedescendant', shown.length ? 'lo' + act : '');
    if (lclear) lclear.hidden = !lq.value;
    if (animate !== false && !reduce) llist.querySelectorAll('.lopt, .lempty').forEach((el, i) => {
      if (i < 12) el.animate([{ opacity: 0, transform: 'translateX(18px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 360, delay: i * 22, easing: EASE, fill: 'backwards' });
    });
  }
  function select(i) {
    act = i;
    llist.querySelectorAll('.lopt').forEach((o) => o.setAttribute('aria-selected', String(+o.dataset.i === i)));
    lq.setAttribute('aria-activedescendant', 'lo' + i);
    $('lo' + i)?.scrollIntoView({ block: 'nearest' });
  }
  function go() {
    const it = shown[act]; if (!it) return;
    close(true);
    if (it.href) { location.href = it.href; return; }
    if (it.city) { dispatchEvent(new CustomEvent('xz:city', { detail: it.city })); return; }
    const el = document.querySelector(it.sel); if (!el) return;
    el.dispatchEvent(new CustomEvent('deck:show', { bubbles: true })); // a bib in the stack comes to the top first
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    setTimeout(() => { el.classList.remove('ping'); void el.offsetWidth; el.classList.add('ping'); setTimeout(() => el.classList.remove('ping'), 2800); }, reduce ? 0 : 500);
  }
  function open() {
    if (!lov.hidden) return;
    last = document.activeElement; lov.hidden = false; lq.value = ''; act = 0; render(false);
    if (!reduce) {
      lov.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220, easing: 'ease-out' });
      lpanel.animate([{ opacity: 0, transform: 'translateY(16px) scale(.97)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 380, easing: EASE });
      llist.querySelectorAll('.lopt').forEach((el, i) => { if (i < 10) el.animate([{ opacity: 0, transform: 'translateX(18px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: 120 + i * 30, easing: EASE, fill: 'backwards' }); });
    }
    setTimeout(() => lq.focus(), 0);
  }
  function close(silent) {
    if (lov.hidden || isClosing) return;
    const done = () => { lov.hidden = true; isClosing = false; if (!silent && last && last.focus) last.focus(); };
    if (reduce) { done(); return; }
    isClosing = true;
    lov.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, easing: 'ease-in', fill: 'forwards' });
    const an = lpanel.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(10px) scale(.98)', filter: 'blur(6px)' }], { duration: 180, easing: 'ease-in' });
    const finish = () => { if (!isClosing) return; lov.getAnimations().forEach((x) => x.cancel()); an.cancel(); done(); };
    an.onfinish = finish;
    setTimeout(finish, 230);
  }
  lq.addEventListener('input', () => { act = 0; render(); });
  lclear?.addEventListener('mousedown', (e) => e.preventDefault());
  lclear?.addEventListener('click', () => { lq.value = ''; act = 0; render(); lq.focus(); });
  lq.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (shown.length) select((act + 1) % shown.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (shown.length) select((act - 1 + shown.length) % shown.length); }
    else if (e.key === 'Enter') { e.preventDefault(); go(); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
  });
  llist.addEventListener('mousedown', (e) => e.preventDefault());
  llist.addEventListener('mousemove', (e) => { const o = e.target.closest('.lopt'); if (o && +o.dataset.i !== act) select(+o.dataset.i); });
  llist.addEventListener('click', (e) => { const o = e.target.closest('.lopt'); if (o) { select(+o.dataset.i); go(); } });
  lov.addEventListener('mousedown', (e) => { if (e.target === lov) close(); });
  document.querySelectorAll('[data-lq]').forEach((b) => {
    b.addEventListener('mousedown', (e) => e.preventDefault());
    b.addEventListener('click', () => { lq.value = b.dataset.lq; act = 0; render(); lq.focus(); });
  });
  return { open, close, get isOpen() { return !lov.hidden; } };
})();

/* =========================================================
   Global clicks and keys
   ========================================================= */
document.addEventListener('click', (e) => {
  const t = e.target;
  const cp = t.closest('[data-copy]'); if (cp) { copyEmail(cp); return; }
  if (t.closest('[data-open]')) { openOverlay(); return; }
  if (t.closest('[data-lopen]')) { LS?.open(); return; }
  const lifeLink = t.closest('[data-life-link]');
  if (lifeLink) { e.preventDefault(); slideTo('life', lifeLink.getAttribute('href')); return; }
  const mb = t.closest('[data-mode-btn]');
  if (mb) {
    const want = mb.dataset.modeBtn;
    if (want === mode) return;
    // Each side always opens on its main page, not wherever it was left.
    slideTo(want, want === 'life' ? '/life' : '/');
  }
});
window.addEventListener('keydown', (e) => {
  const typing = e.target.closest && e.target.closest('input, textarea');
  if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    if (mode === 'life' && LS) { LS.isOpen ? LS.close() : LS.open(); return; }
    if (!overlay.hidden) closeOverlay(); else openOverlay();
    return;
  }
  if (e.key === '/' && !typing) { e.preventDefault(); if (mode === 'life' && LS) LS.open(); else openOverlay(); }
});

/* =========================================================
   Work / Life parallax slide (works across page loads)
   ========================================================= */
const ss = {
  get(k) { try { return sessionStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { sessionStorage.setItem(k, v); } catch {} },
};

function visibleMods(pg) {
  const list = [];
  for (const c of pg.children) {
    if (c.matches('.l-hero')) list.push(...c.children);
    else list.push(c);
  }
  return list.filter((el) => { const r = el.getBoundingClientRect(); return r.height > 0 && r.bottom > 0 && r.top < innerHeight; });
}
// Phones and tablets slide the modules without the motion blur: a blur on a moving layer is costly there, and
// on iOS the blur ending made WebKit repaint the hero's gradient text, which blinked once on arrival.
const slideBlur = !matchMedia('(pointer: coarse)').matches;
const blurred = (px) => (slideBlur ? { filter: `blur(${px}px)` } : {});
const navLinks = () => [...document.querySelectorAll('.top nav > *')].filter((el) => el.offsetParent !== null);
let sliding = false;

function slideTo(toMode, href) {
  if (sliding) return;
  if (reduce) { location.href = href; return; }
  sliding = true;
  window.__xzSliding = true;
  const dir = toMode === 'life' ? -1 : 1;
  const OUT = 'cubic-bezier(.55,0,.8,.3)';
  const knob = document.querySelector('.mode');
  knob.setAttribute('data-pos', toMode);
  knob.querySelectorAll('[data-mode-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.modeBtn === toMode)));
  root.classList.add('sliding');
  closeOverlay(); LS?.close(true);

  const pg = document.querySelector('.page');
  const mods = pg ? visibleMods(pg) : [];
  // Short and tight: the stagger stops growing after five modules so a long page doesn't take longer to leave.
  const step = 30, exitDur = 320;
  const exits = mods.map((m, i) => m.animate(
    [{ transform: 'translateX(0)', opacity: 1, ...blurred(0) }, { transform: `translateX(${dir * (80 + Math.min(i, 5) * 60)}px)`, opacity: 0, ...blurred(8) }],
    { duration: exitDur, delay: Math.min(i, 5) * step, easing: OUT, fill: 'forwards' }));
  navLinks().forEach((l, i) => exits.push(l.animate([{ transform: 'translateX(0)', opacity: 1 }, { transform: `translateX(${dir * 24}px)`, opacity: 0 }], { duration: 220, delay: i * 25, easing: OUT, fill: 'forwards' })));

  // The header mark pans from this side's scene to the other's, and the other side's entrance starts during the
  // pan; the next page continues it from the same moment (HeaderMark.astro), so the mark never jumps.
  const mark = document.getElementById('mark');
  const curPane = mark?.querySelector<HTMLElement>(`.mk-pane[data-side="${mode}"]`);
  const nxtPane = mark?.querySelector<HTMLElement>(`.mk-pane[data-side="${toMode}"]`);
  if (mark && curPane && nxtPane) {
    root.classList.remove('mk-in');
    nxtPane.classList.add('mk-in');
    mark.classList.add('mk-panning');
    ss.set('xz-mark-t', String(Date.now()));
    const PAN = 'cubic-bezier(.65,0,.35,1)';
    curPane.animate([{ transform: 'translateX(0)' }, { transform: `translateX(${dir * 100}%)` }], { duration: 560, easing: PAN, fill: 'forwards' });
    nxtPane.animate([{ transform: `translateX(${-dir * 100}%)` }, { transform: 'translateX(0)' }], { duration: 560, easing: PAN, fill: 'both' });
  }
  const total = exitDur + Math.min(Math.max(0, mods.length - 1), 5) * step;
  ss.set('xz-slide', toMode);
  // Once the content is out, change the whole look in one cross-fade (background, glow, header, toggle, edges
  // together; nothing switches on its own), and only then load the other side, which arrives already in its
  // final colours, so nothing is left to jump.
  const flip = () => { if (toMode === 'life') root.setAttribute('data-mode', 'life'); else root.removeAttribute('data-mode'); };
  const go = () => { location.href = href; };
  let started = false;
  const fade = () => {
    if (started) return; started = true;
    if (!document.startViewTransition) { flip(); setTimeout(go, 650); return; }
    root.classList.add('mode-vt');
    const vt = document.startViewTransition(flip);
    vt.finished.finally(go);
  };
  // Wait for the content to have actually left (a busy page can run the exit late), with a timer as a backstop.
  Promise.all(exits.map((a) => a.finished)).then(fade, fade);
  setTimeout(fade, total + 400);
}

// Arriving on the other side: swipe the new modules in from the opposite edge.
if (root.classList.contains('slide-in')) {
  const toMode = root.getAttribute('data-slide');
  const dir = toMode === 'life' ? -1 : 1;
  const IN = 'cubic-bezier(.16,1,.3,1)';
  const pg = document.querySelector('.page');
  // A side switch always lands at the top of the other side (or on its anchor), never at a remembered offset.
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  else {
    try { history.scrollRestoration = 'manual'; } catch {}
    scrollTo(0, 0);
    addEventListener('load', () => { if (scrollY > 0 && !location.hash) scrollTo(0, 0); }, { once: true });
  }
  const mods = pg ? visibleMods(pg) : [];
  mods.forEach((m, i) => m.animate(
    [{ transform: `translateX(${-dir * (160 + Math.min(i, 5) * 70)}px)`, opacity: 0, ...blurred(8) }, { transform: 'translateX(0)', opacity: 1, ...blurred(0) }],
    { duration: 560, delay: Math.min(i, 5) * 40, easing: IN, fill: 'backwards' }));
  navLinks().forEach((l, i) => l.animate([{ transform: `translateX(${-dir * 24}px)`, opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }], { duration: 420, delay: 60 + i * 35, easing: IN, fill: 'backwards' }));
  root.classList.add('slide-go');
}
window.addEventListener('pageshow', (e) => {
  // Coming back with the browser's Back button restores the old page mid-slide; reset it.
  if (e.persisted && sliding) location.reload();
});

/* =========================================================
   Theme, glass sheen, writing filter, flip board, countdown
   ========================================================= */
const themeBtn = $('theme');
if (themeBtn) {
  const modes = ['auto', 'light', 'dark'];
  const label = () => { themeBtn.textContent = 'Theme: ' + (root.getAttribute('data-theme') || 'auto'); };
  label();
  themeBtn.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme') || 'auto';
    const next = modes[(modes.indexOf(cur) + 1) % 3];
    if (next === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', next);
    try { localStorage.setItem('xz-theme', next); } catch {}
    // Mirror into window.name so the choice survives navigation where storage is blocked.
    window.name = (window.name || '').replace(/(?:^|;)xz-theme=\w+/g, '') + ';xz-theme=' + next;
    label();
  });
}

/* Phone menu: the header's links and theme switch fold behind one button */
const mbtn = $('mbtn');
const topBar = document.querySelector<HTMLElement>('header.top');
if (mbtn && topBar) {
  // The bar grows to the open height (and back) while the links slide in, so nothing pops.
  let menuOpen = false, menuAnim = null;
  const allMenuItems = () => [...topBar.querySelectorAll('nav a, nav .theme, nav .kbtn')];
  const menuItems = () => [...topBar.querySelectorAll('nav a, nav .theme')].filter((el) => getComputedStyle(el).display !== 'none');
  // Clear every leftover link animation first, visible or not: a fade-out that outlives its close would
  // otherwise keep the links invisible the next time the menu opens.
  const clearItemAnims = () => allMenuItems().forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
  const setMenu = (open) => {
    if (open === menuOpen) return;
    menuOpen = open;
    mbtn.setAttribute('aria-expanded', String(open));
    mbtn.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    menuAnim?.cancel();
    clearItemAnims();
    if (reduce) { topBar.classList.toggle('menu-open', open); return; }
    const h0 = topBar.getBoundingClientRect().height;
    topBar.classList.toggle('menu-open', open);
    const h1 = topBar.getBoundingClientRect().height;
    if (!open) topBar.classList.add('menu-open'); // keep the links laid out while the bar closes over them
    topBar.style.overflow = 'clip';
    menuAnim = topBar.animate([{ height: h0 + 'px' }, { height: h1 + 'px' }], { duration: open ? 320 : 240, easing: open ? EASE : 'cubic-bezier(.4,0,.2,1)' });
    menuItems().forEach((el, i) => el.animate(open
      ? [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }]
      : [{ opacity: 1 }, { opacity: 0 }],
      open ? { duration: 260, delay: 60 + i * 35, easing: EASE, fill: 'backwards' } : { duration: 140, fill: 'forwards' }));
    menuAnim.finished.then(() => {
      topBar.style.overflow = '';
      if (!open) {
        clearItemAnims(); topBar.classList.remove('menu-open');
        topBar.querySelectorAll('nav .kbtn').forEach((k) => k.animate([{ opacity: 0, transform: 'scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 180, easing: EASE }));
      }
    }, () => {});
  };
  mbtn.addEventListener('click', () => setMenu(!menuOpen));
  topBar.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('pointerdown', (e) => { if (!topBar.contains(e.target as Node)) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) { setMenu(false); mbtn.focus(); } });
  window.matchMedia('(max-width: 640px)').addEventListener('change', (m) => { if (!m.matches) setMenu(false); });
}

if (!reduce && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('pointermove', (e) => {
    const g = e.target.closest && e.target.closest('.app, .window, .widget, .top');
    if (!g) return;
    const r = g.getBoundingClientRect();
    g.style.setProperty('--mx', e.clientX - r.left + 'px');
    g.style.setProperty('--my', e.clientY - r.top + 'px');
  }, { passive: true });
}

const pf = $('pf');
if (pf) {
  pf.addEventListener('input', () => {
    const q = pf.value.trim().toLowerCase();
    document.querySelectorAll('#posts a').forEach((a) => {
      a.parentElement.hidden = !!q && !(a.textContent + ' ' + (a.dataset.k || '')).toLowerCase().includes(q);
    });
    document.querySelectorAll('#posts .grp').forEach((g) => {
      let n = g.nextElementSibling, any = false;
      while (n && !n.classList.contains('grp')) { if (!n.hidden) any = true; n = n.nextElementSibling; }
      g.hidden = !any;
    });
  });
}

const board = document.querySelector('.board');
if (board) {
  const CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  board.querySelectorAll('.flaps').forEach((el) => {
    const t = el.dataset.flap || '';
    el.setAttribute('role', 'cell'); el.setAttribute('aria-label', t.trim() || 'not recorded');
    el.innerHTML = t.split('').map((c) => `<span class="flap" aria-hidden="true">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
  });
  // One frame loop for the whole board (not a timer per letter, and no forced layout per flip), and each tile is
  // layout-contained (CSS), so the letters can churn while the page scrolls past without stalling it.
  const run = () => {
    if (reduce) return;
    const flaps = [];
    board.querySelectorAll('.board-row:not(.board-th)').forEach((row, ri) => {
      row.querySelectorAll('.flap').forEach((f, ci) => {
        const fin = f.textContent;
        if (!fin.trim() || fin === '\u00a0') return;
        flaps.push({ f, fin, steps: 5 + ci * 2 + ri * 2, digit: /[0-9]/.test(fin), n: 0 });
      });
    });
    const STEP = 55;
    let last = 0;
    const frame = (t) => {
      // hold while the page is scrolling (html.scrolling): each flip is a text change, and they cost scroll frames
      if (root.classList.contains('scrolling')) { requestAnimationFrame(frame); return; }
      if (t - last >= STEP) {
        last = t;
        let left = 0;
        for (const x of flaps) {
          if (x.n >= x.steps) continue;
          x.n++;
          x.f.firstChild.nodeValue = x.n >= x.steps ? x.fin : x.digit ? CH[26 + Math.floor(Math.random() * 10)] : CH[Math.floor(Math.random() * 26)];
          if (x.n < x.steps) left++;
        }
        if (!left) return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { run(); io.disconnect(); } }), { threshold: 0.3 });
    io.observe(board);
  } else run();
}

// Upcoming races: count down to each, and drop the ones already run so the next one takes the big slot.
const nrs = document.querySelectorAll('.nr[data-date]');
nrs.forEach((li) => {
  const d = Math.ceil((Date.parse(li.dataset.date + 'T00:00:00+08:00') - Date.now()) / 864e5);
  if (d < 0) { li.remove(); return; }
  li.querySelector('[data-days]').textContent = d === 0 ? 'Today' : String(d);
  if (d === 0) li.querySelector('.countdown span').textContent = 'race day';
});
if (nrs.length && !document.querySelector('.nr')) document.querySelector('.races')?.remove();

/* =========================================================
   Edge blur: show the top/bottom blur only when there is more page that way
   ========================================================= */
{
  // The page height is measured only when it can change (resize, content growing), never per scroll frame:
  // reading it forces a full layout, which is what dropped frames while scrolling.
  let raf = 0, max = 0, up = false, down = false;
  const edges = () => {
    raf = 0;
    const u = scrollY > 4, d = scrollY < max - 4;
    if (u !== up) { up = u; root.classList.toggle('edge-up', u); }
    if (d !== down) { down = d; root.classList.toggle('edge-down', d); }
  };
  const measure = () => { max = document.documentElement.scrollHeight - innerHeight; queue(); };
  const queue = () => { if (!raf) raf = requestAnimationFrame(edges); };
  // While the page scrolls, the header mark holds its pose (html.scrolling): its loop animates SVG shapes,
  // which repaints on the main thread every frame and was the biggest cost of a scroll frame on phones.
  let still = 0, moving = false;
  const settle = () => { moving = false; root.classList.remove('scrolling'); };
  addEventListener('scroll', () => {
    queue();
    if (!moving) { moving = true; root.classList.add('scrolling'); }
    clearTimeout(still); still = window.setTimeout(settle, 200);
  }, { passive: true });
  addEventListener('resize', measure);
  new ResizeObserver(measure).observe(document.body);
  max = document.documentElement.scrollHeight - innerHeight;
  down = root.classList.contains('edge-down');
  edges();
  // Fade the edges only after the first frames, so arriving on a page never animates them in.
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('edge-ready')));
}

/* =========================================================
   Prefetch: fetch a page the moment a link is hovered, touched or focused,
   so the click itself only has to render. Covers links added by scripts too.
   ========================================================= */
{
  const seen = new Set([location.pathname]);
  const save = navigator.connection?.saveData;
  const want = (a) => {
    if (!a || save || a.target === '_blank' || a.hasAttribute('download')) return null;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin || !/^https?:$/.test(u.protocol)) return null;
    if (u.pathname === location.pathname && u.hash) return null;
    if (/\.(pdf|xml|json|png|jpe?g|webp|svg|zip)$/i.test(u.pathname)) return null;
    return u.pathname + u.search;
  };
  const prefetch = (e) => {
    const url = want(e.target.closest?.('a[href]'));
    if (!url || seen.has(url)) return;
    seen.add(url);
    const l = document.createElement('link');
    l.rel = 'prefetch'; l.href = url; l.as = 'document';
    document.head.appendChild(l);
  };
  addEventListener('pointerover', prefetch, { passive: true });
  addEventListener('touchstart', prefetch, { passive: true });
  addEventListener('focusin', prefetch);
  // The header's few destinations are worth having before anyone points at them.
  const warm = () => document.querySelectorAll('.top nav a[href]').forEach((a) => prefetch({ target: a }));
  if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 2500 }); else setTimeout(warm, 1200);
}

/* =========================================================
   Race bibs: a stack, newest on top
   ========================================================= */
document.querySelectorAll<HTMLElement>('[data-deck]').forEach((deck) => {
  const cards = [...deck.querySelectorAll<HTMLElement>('.bib')];
  if (!cards.length) return;
  const wrap = deck.parentElement!;
  const n = wrap.querySelector<HTMLElement>('[data-deck-n]');
  let order = cards.map((_, i) => i); // order[0] is the bib on top
  const clearDrag = (c: HTMLElement) => { c.style.removeProperty('--dx'); c.style.removeProperty('--dr'); };
  let busy = false;
  const layout = () => {
    order.forEach((ci, pos) => {
      const c = cards[ci];
      c.style.setProperty('--i', String(pos));
      c.classList.toggle('deep', pos > 3);
      c.setAttribute('aria-hidden', String(pos !== 0));
    });
    if (n) n.textContent = `${order[0] + 1} / ${cards.length}`;
  };
  // Next: the top bib flies off to the left and goes to the back. Back: the last one flies in on top.
  const next = () => {
    if (busy || cards.length < 2) return; busy = true;
    const top = cards[order[0]];
    if (reduce) { order.push(order.shift()!); layout(); busy = false; return; }
    top.classList.add('fly');
    setTimeout(() => { order.push(order.shift()!); top.classList.remove('fly'); clearDrag(top); layout(); busy = false; }, 280);
  };
  const prev = () => {
    if (busy || cards.length < 2) return; busy = true;
    const c = cards[order[order.length - 1]];
    order.unshift(order.pop()!);
    if (reduce) { layout(); busy = false; return; }
    c.classList.add('fly-from'); layout();
    requestAnimationFrame(() => requestAnimationFrame(() => { c.classList.remove('fly-from'); setTimeout(() => { busy = false; }, 200); }));
  };
  const show = (card: HTMLElement) => { const ci = cards.indexOf(card); if (ci < 0) return; while (order[0] !== ci) order.push(order.shift()!); layout(); };
  wrap.querySelector('[data-deck-next]')?.addEventListener('click', next);
  wrap.querySelector('[data-deck-prev]')?.addEventListener('click', prev);
  deck.addEventListener('deck:show', (e) => show(e.target as HTMLElement));
  deck.tabIndex = 0;
  deck.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  });
  // Drag the top bib sideways: far enough flips it, otherwise it springs back. A tap flips it too.
  let x0 = 0, dx = 0, down = false, id = -1;
  deck.addEventListener('pointerdown', (e) => { if (busy) return; down = true; id = e.pointerId; x0 = e.clientX; dx = 0; });
  deck.addEventListener('pointermove', (e) => {
    if (!down || e.pointerId !== id) return;
    dx = e.clientX - x0;
    if (Math.abs(dx) > 6) { if (!deck.classList.contains('dragging')) { deck.classList.add('dragging'); try { deck.setPointerCapture(id); } catch {} } const t = cards[order[0]]; t.style.setProperty('--dx', dx + 'px'); t.style.setProperty('--dr', (dx * 0.04).toFixed(2) + 'deg'); }
  });
  const end = (e: PointerEvent) => {
    if (!down || e.pointerId !== id) return; down = false;
    const top = cards[order[0]];
    deck.classList.remove('dragging');
    if (Math.abs(dx) <= 6) { clearDrag(top); next(); return; }
    if (dx < -70) next();
    else if (dx > 70) { clearDrag(top); prev(); }
    else clearDrag(top);
  };
  deck.addEventListener('pointerup', end);
  deck.addEventListener('pointercancel', (e) => { if (e.pointerId === id) { down = false; deck.classList.remove('dragging'); clearDrag(cards[order[0]]); } });
  layout();
});
