/* Accès au stockage local, avec repli en mémoire si localStorage est indisponible (navigation privée stricte). */
(function (AE) {
  'use strict';
  const prefix = AE.config.storagePrefix;
  const memory = {};
  let ok = true;
  try {
    const k = prefix + '.__test';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
  } catch (e) { ok = false; }

  AE.store = {
    persistent: ok,
    get(key, def) {
      const full = prefix + '.' + key;
      try {
        const raw = ok ? window.localStorage.getItem(full) : memory[full];
        if (raw == null) return def;
        return JSON.parse(raw);
      } catch (e) { return def; }
    },
    set(key, value) {
      const full = prefix + '.' + key;
      const raw = JSON.stringify(value);
      try {
        if (ok) window.localStorage.setItem(full, raw); else memory[full] = raw;
        return true;
      } catch (e) {
        memory[full] = raw;
        return false;
      }
    },
    remove(key) {
      const full = prefix + '.' + key;
      try { if (ok) window.localStorage.removeItem(full); } catch (e) { /* ignoré */ }
      delete memory[full];
    },
    clearAll() {
      try {
        if (ok) {
          const keys = [];
          for (let i = 0; i < window.localStorage.length; i++) {
            const k = window.localStorage.key(i);
            if (k && k.indexOf(prefix + '.') === 0) keys.push(k);
          }
          keys.forEach(k => window.localStorage.removeItem(k));
        }
      } catch (e) { /* ignoré */ }
      Object.keys(memory).forEach(k => delete memory[k]);
    }
  };
})(window.AE);
