/* Outils génériques : hasard reproductible, normalisation des réponses, échappement HTML. */
(function (AE) {
  'use strict';
  const U = {};

  U.hash = function (str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (h1 >>> 0) ^ ((h2 & 0xffff) << 3);
  };

  // Générateur pseudo-aléatoire reproductible (mulberry32)
  U.rng = function (seed) {
    let a = (typeof seed === 'string' ? U.hash(seed) : seed) >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  U.shuffle = function (arr, rnd) {
    rnd = rnd || Math.random;
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  U.pick = (arr, rnd) => arr[Math.floor((rnd || Math.random)() * arr.length)];

  U.slug = function (s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[’'`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);
  };

  // Normalisation des réponses écrites : casse, espaces, apostrophes typographiques,
  // ponctuation finale et virgules. Aucune tolérance sur les lettres elles-mêmes.
  U.normalize = function (s) {
    return String(s == null ? '' : s).normalize('NFC')
      .replace(/[‘’ʼ`´′]/g, "'")
      .replace(/[“”«»]/g, '"')
      .replace(/[‐-―]/g, '-')
      .replace(/,/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase()
      .replace(/\s+([.!?;:])/g, '$1')
      .replace(/^["']+|["']+$/g, '')
      .replace(/[.!?;:]+$/g, '')
      .trim();
  };

  U.lev = function (a, b) {
    a = String(a); b = String(b);
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = new Array(n + 1), cur = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      cur[0] = i;
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      const t = prev; prev = cur; cur = t;
    }
    return prev[n];
  };

  U.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  };

  const pad = n => (n < 10 ? '0' : '') + n;
  U.today = function (d) {
    d = d || new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  };
  U.dayNumber = function (dateStr) {
    const p = dateStr.split('-').map(Number);
    return Math.round(Date.UTC(p[0], p[1] - 1, p[2]) / 86400000);
  };

  U.uid = function () {
    return 'p' + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
  };

  U.clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // Remplace la première occurrence d'un mot entier (insensible à la casse)
  U.blankWord = function (sentence, word, blank) {
    blank = blank || '____';
    const esc = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('(^|[^A-Za-z\'’-])(' + esc + ')(?![A-Za-z’-]|\'[a-z])', 'i');
    if (!re.test(sentence)) return null;
    return sentence.replace(re, (m, pre) => pre + blank);
  };

  U.tokens = function (sentence) {
    const trimmed = String(sentence).trim();
    const endPunct = (trimmed.match(/[.!?]+$/) || [''])[0];
    const body = trimmed.slice(0, trimmed.length - endPunct.length);
    return { words: body.split(/\s+/).filter(Boolean), end: endPunct };
  };

  AE.util = U;
})(window.AE);
