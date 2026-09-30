/* Petits outils d'interface : création d'éléments, fenêtres modales, messages, visuels et mascotte. */
(function (AE) {
  'use strict';
  const U = AE.util;

  function h(tag, attrs) {
    const el = document.createElement(tag);
    const kids = Array.prototype.slice.call(arguments, 2);
    if (attrs) {
      Object.keys(attrs).forEach(k => {
        const v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'on') Object.keys(v).forEach(ev => el.addEventListener(ev, v[ev]));
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
        else if (k === 'dataset') Object.assign(el.dataset, v);
        else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      });
    }
    append(el, kids);
    return el;
  }
  function append(el, kids) {
    kids.forEach(c => {
      if (c == null || c === false) return;
      if (Array.isArray(c)) append(el, c);
      else if (c instanceof Node) el.appendChild(c);
      else el.appendChild(document.createTextNode(String(c)));
    });
  }

  function btn(label, onClick, cls, attrs) {
    return h('button', Object.assign({ type: 'button', class: 'btn ' + (cls || ''), on: { click: e => { AE.audio.click(); onClick && onClick(e); } } }, attrs || {}), label);
  }

  function announce(msg) {
    const r = document.getElementById('sr-live');
    if (!r) return;
    r.textContent = '';
    setTimeout(() => { r.textContent = msg; }, 30);
  }

  function toast(msg, icon) {
    const root = document.getElementById('toast-root');
    if (!root) return;
    const t = h('div', { class: 'toast', role: 'status' }, icon ? h('span', { class: 'toast-icon', 'aria-hidden': 'true' }, icon) : null, h('span', null, msg));
    root.appendChild(t);
    setTimeout(() => t.classList.add('out'), 3200);
    setTimeout(() => t.remove(), 3800);
  }

  let lastFocus = null;
  function modal(opts) {
    close();
    lastFocus = document.activeElement;
    const root = document.getElementById('modal-root');
    const titleId = 'modal-title-' + Date.now();
    const box = h('div', { class: 'modal ' + (opts.cls || ''), role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId },
      h('h2', { id: titleId, class: 'modal-title' }, opts.title || ''),
      h('div', { class: 'modal-body' }, opts.body || null),
      h('div', { class: 'modal-actions' }, (opts.actions || [{ label: 'Fermer', primary: true }]).map(a =>
        btn(a.label, () => { if (!a.keepOpen) close(); a.onClick && a.onClick(); }, a.primary ? 'primary' : (a.danger ? 'danger' : 'ghost'))))
    );
    const backdrop = h('div', { class: 'modal-backdrop', on: { click: e => { if (e.target === backdrop && opts.dismissable !== false) close(); } } }, box);
    root.appendChild(backdrop);
    document.body.classList.add('has-modal');
    const focusables = () => Array.from(box.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(e => !e.disabled);
    box.addEventListener('keydown', e => {
      if (e.key === 'Escape' && opts.dismissable !== false) { e.preventDefault(); close(); }
      if (e.key === 'Tab') {
        const f = focusables(); if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
    setTimeout(() => { const f = focusables(); (opts.focus ? box.querySelector(opts.focus) : f[f.length - 1] || box).focus(); }, 20);
    return box;
  }
  function close() {
    const root = document.getElementById('modal-root');
    if (root && root.firstChild) {
      root.innerHTML = '';
      document.body.classList.remove('has-modal');
      if (lastFocus && document.contains(lastFocus)) { try { lastFocus.focus(); } catch (e) { /* ignoré */ } }
    }
  }
  function confirmBox(title, text, okLabel, onOk, danger) {
    modal({ title, body: h('p', null, text), actions: [{ label: 'Annuler' }, { label: okLabel, primary: !danger, danger: !!danger, onClick: onOk }] });
  }

  // ---------- Visuels : emoji, texte court ou forme SVG « @forme:couleur[:taille] » ----------
  const COLORS = { red: '#e11d48', blue: '#2563eb', green: '#16a34a', yellow: '#facc15', orange: '#f97316', purple: '#9333ea', pink: '#f472b6', black: '#1f2937', brown: '#92400e', white: '#ffffff', grey: '#9ca3af' };
  const SHAPES = {
    circle: '<circle cx="50" cy="50" r="40"/>',
    dot: '<circle cx="50" cy="50" r="14"/>',
    square: '<rect x="12" y="12" width="76" height="76" rx="4"/>',
    rectangle: '<rect x="6" y="26" width="88" height="48" rx="4"/>',
    triangle: '<polygon points="50,8 92,88 8,88"/>',
    star: '<polygon points="50,6 61,38 95,38 67,58 78,92 50,71 22,92 33,58 5,38 39,38"/>',
    heart: '<path d="M50 88 C20 66 6 50 6 32 C6 18 17 8 30 8 C39 8 46 13 50 20 C54 13 61 8 70 8 C83 8 94 18 94 32 C94 50 80 66 50 88Z"/>',
    oval: '<ellipse cx="50" cy="50" rx="44" ry="28"/>',
    diamond: '<polygon points="50,4 92,50 50,96 8,50"/>',
    line: '<rect x="6" y="44" width="88" height="12" rx="6"/>',
    stripes: '<rect x="6" y="14" width="88" height="14" rx="4"/><rect x="6" y="43" width="88" height="14" rx="4"/><rect x="6" y="72" width="88" height="14" rx="4"/>'
  };
  function visual(v, label) {
    if (!v) return null;
    if (v[0] === '@') {
      const p = v.slice(1).split(':');
      const shape = SHAPES[p[0]] || SHAPES.circle;
      const fill = COLORS[p[1]] || COLORS.blue;
      const scale = p[2] === 's' ? 0.55 : p[2] === 'l' ? 1 : 0.82;
      const span = h('span', { class: 'vis vis-shape', role: label ? 'img' : null, 'aria-label': label || null, 'aria-hidden': label ? null : 'true' });
      span.innerHTML = '<svg viewBox="0 0 100 100" focusable="false"><g transform="translate(' + (50 - 50 * scale) + ' ' + (50 - 50 * scale) + ') scale(' + scale + ')" fill="' + fill + '" stroke="#1f2937" stroke-width="' + (p[1] === 'white' ? 3 : 1.5) + '">' + shape + '</g></svg>';
      return span;
    }
    const isText = /^[0-9A-Za-z/ ]+$/.test(v);
    return h('span', { class: 'vis ' + (isText ? 'vis-text' : 'vis-emoji'), role: label ? 'img' : null, 'aria-label': label || null, 'aria-hidden': label ? null : 'true' }, v);
  }

  // ---------- Mascotte « Lio », un lionceau discret ----------
  function mascot(mood, size) {
    const s = size || 64;
    const mouth = mood === 'sad' ? 'M40 66 Q50 58 60 66' : mood === 'wow' ? 'M46 62 Q50 70 54 62 Z' : 'M38 60 Q50 72 62 60';
    const el = h('span', { class: 'mascot mascot-' + (mood || 'happy'), 'aria-hidden': 'true' });
    el.innerHTML = '<svg viewBox="0 0 100 100" width="' + s + '" height="' + s + '" focusable="false">' +
      '<circle cx="50" cy="52" r="44" fill="#f59e0b"/>' +
      '<g fill="#d97706">' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<circle cx="' + (50 + 40 * Math.cos(a * Math.PI / 180)).toFixed(1) + '" cy="' + (52 + 40 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" r="9"/>').join('') + '</g>' +
      '<circle cx="50" cy="54" r="30" fill="#fde68a"/>' +
      '<circle cx="28" cy="30" r="8" fill="#fde68a" stroke="#d97706" stroke-width="3"/><circle cx="72" cy="30" r="8" fill="#fde68a" stroke="#d97706" stroke-width="3"/>' +
      '<circle cx="40" cy="48" r="4.5" fill="#1f2937"/><circle cx="60" cy="48" r="4.5" fill="#1f2937"/>' +
      '<circle cx="41.5" cy="46.5" r="1.4" fill="#fff"/><circle cx="61.5" cy="46.5" r="1.4" fill="#fff"/>' +
      '<ellipse cx="50" cy="56" rx="5" ry="3.5" fill="#92400e"/>' +
      '<path d="' + mouth + '" fill="' + (mood === 'wow' ? '#92400e' : 'none') + '" stroke="#92400e" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="33" cy="60" r="4" fill="#fca5a5" opacity=".6"/><circle cx="67" cy="60" r="4" fill="#fca5a5" opacity=".6"/>' +
      '</svg>';
    return el;
  }

  function stars(n, max) {
    max = max || 3;
    const w = h('span', { class: 'stars', role: 'img', 'aria-label': n + ' étoile' + (n > 1 ? 's' : '') + ' sur ' + max });
    for (let i = 0; i < max; i++) w.appendChild(h('span', { class: i < n ? 'star on' : 'star', 'aria-hidden': 'true' }, i < n ? '★' : '☆'));
    return w;
  }

  function ring(ratio, label) {
    const pct = Math.round(U.clamp(ratio, 0, 1) * 100);
    const el = h('span', { class: 'ring', role: 'img', 'aria-label': label || (pct + ' %'), style: { '--p': pct } });
    el.appendChild(h('span', { class: 'ring-val', 'aria-hidden': 'true' }, pct + '%'));
    return el;
  }

  function speakBtn(text, opts) {
    opts = opts || {};
    const label = opts.label || 'Écouter';
    return btn([h('span', { 'aria-hidden': 'true' }, opts.slow ? '🐢 ' : '🔊 '), label], () => {
      if (!AE.speech.available(opts.id)) { toast(AE.speech.reason(), '🔇'); return; }
      AE.speech.speak(text, { rate: opts.slow ? 'slow' : undefined, id: opts.id });
    }, 'speak ' + (opts.cls || ''), { 'aria-label': opts.aria || (label + (opts.slow ? ' lentement' : '')) });
  }

  AE.ui = AE.ui || {};
  Object.assign(AE.ui, { h, btn, announce, toast, modal, close, confirm: confirmBox, visual, mascot, stars, ring, speakBtn, COLORS });
})(window.AE);
