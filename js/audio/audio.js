/*
 * Gestionnaire audio central.
 * - Une seule musique à la fois (background.mp3 ou doom.mp3), lancée après une interaction utilisateur.
 * - Effets sonores avec limitation des clics et du nombre de sons simultanés.
 * - Atténuation (ducking) de la musique pendant une consigne parlée.
 * - Pause quand l'onglet est masqué, reprise au retour.
 * - Fichiers absents ou lecture refusée : aucune erreur bloquante, état consultable dans les réglages.
 * - Sons de secours synthétisés (Web Audio) pour les effets si le fichier MP3 manque (désactivable).
 */
(function (AE) {
  'use strict';
  const cfg = AE.config.audio;
  const S = {
    unlocked: false, desired: null, tracks: {}, sfxBase: {}, status: {}, ducked: false, duckLevel: 1, playing: false, playLevel: 1, timers: {},
    hidden: false, lastClick: 0, active: 0, ctx: null, listeners: [], fadeTimer: null
  };

  const prefs = () => AE.settings.get();
  const url = file => cfg.basePath + file;
  const notify = () => S.listeners.forEach(fn => { try { fn(); } catch (e) { /* ignoré */ } });

  function setStatus(file, state) {
    if (S.status[file] === state) return;
    // « missing » est définitif pour la session ; « blocked » ne masque pas un état « ok »
    if (S.status[file] === 'missing') return;
    S.status[file] = state;
    notify();
  }

  function watch(el, file) {
    el.addEventListener('error', () => setStatus(file, 'missing'));
    el.addEventListener('canplaythrough', () => setStatus(file, 'ok'));
    el.addEventListener('loadedmetadata', () => setStatus(file, 'ok'));
  }

  function musicTrack(name) {
    if (S.tracks[name]) return S.tracks[name];
    const file = cfg.music[name];
    if (!file) return null;
    const el = new Audio();
    el.loop = true;
    el.preload = 'auto';
    watch(el, file);
    // Sécurité : si une musique non désirée démarre (course entre promesses), on la coupe aussitôt.
    el.addEventListener('playing', () => { if (S.desired !== name || !canPlayMusic()) el.pause(); });
    el.src = url(file);
    S.tracks[name] = el;
    return el;
  }

  function canPlayMusic() {
    const p = prefs();
    return S.unlocked && !p.muted && p.music > 0 && !S.hidden;
  }

  function musicVolume() {
    const p = prefs();
    if (p.muted) return 0;
    return AE.util.clamp(p.music * S.duckLevel * S.playLevel, 0, 1);
  }

  function applyVolumes() {
    Object.keys(S.tracks).forEach(n => { S.tracks[n].volume = musicVolume(); });
  }

  function stopTrack(el) {
    try { el.pause(); if (el.currentTime) el.currentTime = 0; } catch (e) { /* ignoré */ }
  }

  function sync() {
    // 1. Couper toute musique qui n'est pas celle souhaitée (jamais deux musiques à la fois)
    Object.keys(S.tracks).forEach(n => { if (n !== S.desired) stopTrack(S.tracks[n]); });
    if (!S.desired) return;
    const el = musicTrack(S.desired);
    if (!el || S.status[cfg.music[S.desired]] === 'missing') return;
    if (!canPlayMusic()) { el.pause(); return; }
    el.volume = musicVolume();
    if (!el.paused) return;
    const wanted = S.desired;
    let p;
    try { p = el.play(); } catch (e) { p = null; }
    if (p && p.then) {
      p.then(() => {
        setStatus(cfg.music[wanted], 'ok');
        if (S.desired !== wanted || !canPlayMusic()) el.pause();
      }).catch(err => {
        if (err && err.name === 'NotAllowedError') {
          // Le navigateur exige une interaction : on réessaiera au prochain geste.
          S.unlocked = false;
          setStatus(cfg.music[wanted], 'blocked');
        } else if (err && err.name === 'AbortError') {
          /* lecture interrompue par un changement de musique : normal */
        } else if (err && err.name === 'NotSupportedError') {
          setStatus(cfg.music[wanted], 'missing');
        }
      });
    }
  }

  // ---------- Effets sonores ----------
  function sfxBase(name) {
    if (S.sfxBase[name]) return S.sfxBase[name];
    const file = cfg.sfx[name];
    if (!file) return null;
    const el = new Audio();
    el.preload = 'auto';
    watch(el, file);
    el.src = url(file);
    S.sfxBase[name] = el;
    return el;
  }

  function ctx() {
    if (S.ctx) return S.ctx;
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    try { S.ctx = new C(); } catch (e) { S.ctx = null; }
    return S.ctx;
  }

  const SYNTH = {
    click: [[880, 0.035, 'triangle']],
    correct: [[660, 0.09, 'sine'], [880, 0.14, 'sine']],
    incorrect: [[330, 0.12, 'sine'], [294, 0.16, 'sine']],
    badge: [[523, 0.08, 'triangle'], [659, 0.08, 'triangle'], [784, 0.08, 'triangle'], [1047, 0.2, 'triangle']],
    victory: [[523, 0.12, 'triangle'], [659, 0.12, 'triangle'], [784, 0.12, 'triangle'], [1047, 0.32, 'triangle']],
    transition: [[392, 0.07, 'sine'], [523, 0.1, 'sine']]
  };

  function synth(name, volume) {
    const c = ctx();
    const notes = SYNTH[name];
    if (!c || !notes) return;
    if (c.state === 'suspended') { try { c.resume(); } catch (e) { /* ignoré */ } }
    let t = c.currentTime + 0.01;
    notes.forEach(([freq, dur, type]) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.value = freq;
      const peak = 0.18 * volume * (name === 'incorrect' ? 0.7 : 1);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + dur + 0.02);
      t += dur * 0.85;
    });
  }

  function sfx(name) {
    const p = prefs();
    if (p.muted || !(p.sfx > 0) || S.hidden) return;
    const now = Date.now();
    if (name === 'click') {
      if (now - S.lastClick < cfg.clickMinInterval) return;
      S.lastClick = now;
    }
    if (S.active >= cfg.maxSimultaneousSfx) return;
    const file = cfg.sfx[name];
    const base = sfxBase(name);
    const volume = AE.util.clamp(p.sfx * (name === 'incorrect' ? 0.55 : 1), 0, 1);
    if (!base || S.status[file] === 'missing') {
      if (p.synthSfx) synth(name, volume);
      return;
    }
    const el = base.cloneNode(true);
    el.volume = volume;
    S.active++;
    const done = () => { S.active = Math.max(0, S.active - 1); el.removeEventListener('ended', done); };
    el.addEventListener('ended', done);
    el.addEventListener('error', () => { done(); setStatus(file, 'missing'); if (p.synthSfx) synth(name, volume); });
    let pr;
    try { pr = el.play(); } catch (e) { pr = null; done(); }
    if (pr && pr.catch) pr.catch(() => { done(); if (p.synthSfx && S.status[file] !== 'ok') synth(name, volume); });
    setTimeout(done, 4000);
  }

  // ---------- Fondu progressif d'un niveau de volume (voix, partie en cours) ----------
  function fade(key, target, ms) {
    clearInterval(S.timers[key]);
    const reduce = AE.settings.reducedMotion && AE.settings.reducedMotion();
    if (reduce || !ms) { S[key] = target; applyVolumes(); return; }
    const steps = 10, start = S[key];
    let i = 0;
    S.timers[key] = setInterval(() => {
      i++;
      S[key] = start + (target - start) * (i / steps);
      applyVolumes();
      if (i >= steps) clearInterval(S.timers[key]);
    }, Math.round(ms / steps));
  }

  // Atténuation pendant une consigne ou un mot prononcé en anglais
  function duck(on) {
    S.ducked = !!on;
    fade('duckLevel', on ? cfg.duckFactor : 1, cfg.fadeMs);
  }

  // Niveau de la musique pendant une partie (réglable par musique dans config.js)
  function playLevelFor(name) {
    const lv = cfg.playLevel || {};
    return S.playing && lv[name] != null ? lv[name] : 1;
  }
  function setPlaying(on) {
    S.playing = !!on;
    fade('playLevel', playLevelFor(S.desired), cfg.playFadeMs || 800);
  }

  // ---------- Déverrouillage par interaction et visibilité ----------
  function unlock() {
    if (!S.unlocked) {
      S.unlocked = true;
      const c = ctx();
      if (c && c.state === 'suspended') { try { c.resume(); } catch (e) { /* ignoré */ } }
      sync();
    }
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach(ev => document.addEventListener(ev, unlock, { capture: true, passive: true }));

  document.addEventListener('visibilitychange', () => {
    S.hidden = document.hidden;
    if (S.hidden) {
      Object.keys(S.tracks).forEach(n => S.tracks[n].pause());
      if (AE.speech) AE.speech.stop();
      if (S.ctx && S.ctx.suspend) { try { S.ctx.suspend(); } catch (e) { /* ignoré */ } }
    } else {
      if (S.ctx && S.ctx.resume) { try { S.ctx.resume(); } catch (e) { /* ignoré */ } }
      sync();
    }
  });

  AE.audio = {
    init() {
      // Préchargement léger pour détecter les fichiers absents et les signaler dans les réglages
      Object.keys(cfg.sfx).forEach(sfxBase);
      musicTrack('background');
      musicTrack('doom');
    },
    unlock,
    setMusic(name) { S.desired = name; S.playLevel = playLevelFor(name); sync(); applyVolumes(); },
    setPlaying,
    isPlaying: () => S.playing,
    volumeOf: name => (S.tracks[name] ? S.tracks[name].volume : 0),
    currentMusic() {
      const n = Object.keys(S.tracks).find(k => !S.tracks[k].paused);
      return n || null;
    },
    desiredMusic: () => S.desired,
    sfx,
    click: () => sfx('click'),
    duck,
    refresh() { applyVolumes(); sync(); },
    isUnlocked: () => S.unlocked,
    status() {
      const all = Object.values(cfg.music).concat(Object.values(cfg.sfx));
      return all.map(f => ({ file: f, state: S.status[f] || 'unknown' }));
    },
    onChange(fn) { S.listeners.push(fn); },
    _state: S
  };
})(window.AE);
