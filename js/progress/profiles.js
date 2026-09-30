/* Réglages de l'appareil et profils locaux (aucun compte, aucune donnée envoyée). */
(function (AE) {
  'use strict';
  const U = AE.util;

  const DEFAULTS = {
    muted: false, music: 0.45, sfx: 0.8, voice: 1, rate: 'normal', voiceName: '', synthSfx: true,
    textSize: 'normal', reduceMotion: 'auto', contrast: false, spacing: false, missionLength: 8, showFrench: true
  };

  let settings = Object.assign({}, DEFAULTS, AE.store.get('settings', {}));

  AE.settings = {
    DEFAULTS,
    get: () => settings,
    set(patch) {
      settings = Object.assign({}, settings, patch);
      AE.store.set('settings', settings);
      AE.settings.apply();
      if (AE.audio) AE.audio.refresh();
      return settings;
    },
    reset() { settings = Object.assign({}, DEFAULTS); AE.store.set('settings', settings); AE.settings.apply(); },
    reducedMotion() {
      if (settings.reduceMotion === 'on') return true;
      if (settings.reduceMotion === 'off') return false;
      try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
    },
    apply() {
      const b = document.body;
      if (!b) return;
      b.dataset.textSize = settings.textSize;
      b.classList.toggle('reduce-motion', AE.settings.reducedMotion());
      b.classList.toggle('high-contrast', !!settings.contrast);
      b.classList.toggle('wide-spacing', !!settings.spacing);
    }
  };

  const AVATARS = ['🦊', '🐼', '🐯', '🦁', '🐸', '🐧', '🦉', '🐙', '🦄', '🐢', '🚀', '⚽', '🎸', '🌟', '🐬', '🦖'];

  function list() { return AE.store.get('profiles', []); }
  function saveList(l) { AE.store.set('profiles', l); }

  AE.profiles = {
    AVATARS,
    list,
    activeId: () => AE.store.get('activeProfile', null),
    active() { const id = AE.profiles.activeId(); return list().find(p => p.id === id) || null; },
    create(name, avatar) {
      const clean = String(name || '').trim().slice(0, 20) || 'Joueur';
      const p = { id: U.uid(), name: clean, avatar: avatar || AVATARS[0], createdAt: Date.now() };
      const l = list(); l.push(p); saveList(l);
      AE.profiles.select(p.id);
      return p;
    },
    select(id) {
      AE.store.set('activeProfile', id);
      if (AE.progress) AE.progress.load(id);
    },
    rename(id, name, avatar) {
      const l = list();
      const p = l.find(x => x.id === id);
      if (p) { if (name) p.name = String(name).trim().slice(0, 20); if (avatar) p.avatar = avatar; saveList(l); }
    },
    remove(id) {
      saveList(list().filter(p => p.id !== id));
      AE.store.remove('progress.' + id);
      if (AE.profiles.activeId() === id) {
        const next = list()[0];
        AE.store.set('activeProfile', next ? next.id : null);
        if (AE.progress) AE.progress.load(next ? next.id : null);
      }
    }
  };
})(window.AE);
