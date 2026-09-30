/*
 * Voix anglaises : enregistrements s'ils existent (assets/audio/voice/manifest.js), sinon synthèse vocale.
 * Une seule consigne parlée à la fois ; la musique est atténuée pendant la lecture.
 */
(function (AE) {
  'use strict';
  const synth = window.speechSynthesis || null;
  const S = { voices: [], loaded: false, current: null, token: 0, recAudio: null, readyPromise: null };

  function english(v) { return /^en([-_]|$)/i.test(v.lang || ''); }

  function loadVoices() {
    if (!synth) return [];
    try { S.voices = synth.getVoices().filter(english); } catch (e) { S.voices = []; }
    if (S.voices.length) S.loaded = true;
    return S.voices;
  }

  function ready() {
    if (S.readyPromise) return S.readyPromise;
    S.readyPromise = new Promise(resolve => {
      if (!synth) { resolve([]); return; }
      if (loadVoices().length) { resolve(S.voices); return; }
      let tries = 0;
      const onChange = () => { if (loadVoices().length) { cleanup(); resolve(S.voices); } };
      const timer = setInterval(() => {
        tries++;
        if (loadVoices().length || tries > 16) { cleanup(); resolve(S.voices); }
      }, 200);
      function cleanup() { clearInterval(timer); try { synth.removeEventListener('voiceschanged', onChange); } catch (e) { /* ignoré */ } }
      try { synth.addEventListener('voiceschanged', onChange); } catch (e) { /* ignoré */ }
    });
    return S.readyPromise;
  }

  function pickVoice() {
    const name = AE.settings.get().voiceName;
    if (name) { const v = S.voices.find(x => x.name === name); if (v) return v; }
    for (const lang of AE.config.speech.preferLang) {
      const v = S.voices.find(x => (x.lang || '').toLowerCase().replace('_', '-').indexOf(lang.toLowerCase()) === 0);
      if (v) return v;
    }
    return S.voices[0] || null;
  }

  function recording(id) {
    const m = AE.voiceManifest || {};
    return id && m[id] ? AE.config.audio.voiceDir + m[id] : null;
  }

  function canUse() {
    const p = AE.settings.get();
    return !p.muted && p.voice > 0;
  }

  function available(id) {
    if (!canUse()) return false;
    if (id && recording(id)) return true;
    return !!(synth && S.voices.length);
  }

  function reason() {
    const p = AE.settings.get();
    if (p.muted) return 'Le son est coupé : la consigne est affichée en texte.';
    if (!(p.voice > 0)) return 'Le volume de la voix est à zéro : la consigne est affichée en texte.';
    if (!synth) return 'Ce navigateur ne propose pas de voix de synthèse : la consigne est affichée en texte.';
    return 'Aucune voix anglaise n’est installée sur cet appareil : la consigne est affichée en texte.';
  }

  function stop() {
    S.token++;
    if (S.recAudio) { try { S.recAudio.pause(); } catch (e) { /* ignoré */ } S.recAudio = null; }
    if (synth) { try { synth.cancel(); } catch (e) { /* ignoré */ } }
    if (S.current) { const c = S.current; S.current = null; c.resolve(false); }
    if (AE.audio) AE.audio.duck(false);
  }

  // speak(text, { rate: 'normal' | 'slow' | nombre, id: identifiant d'enregistrement éventuel })
  function speak(text, opts) {
    opts = opts || {};
    stop();
    if (!text || !canUse()) return Promise.resolve(false);
    const token = S.token;
    const p = AE.settings.get();
    const rate = typeof opts.rate === 'number' ? opts.rate
      : (opts.rate === 'slow' || p.rate === 'slow' ? AE.config.speech.rateSlow : AE.config.speech.rateNormal);
    return new Promise(resolve => {
      S.current = { resolve };
      const finish = ok => {
        if (token !== S.token) return;
        S.current = null;
        if (AE.audio) AE.audio.duck(false);
        resolve(ok);
      };
      const rec = recording(opts.id);
      if (AE.audio) AE.audio.duck(true);
      if (rec) {
        const a = new Audio(rec);
        a.volume = AE.util.clamp(p.voice, 0, 1);
        a.playbackRate = Math.max(0.5, rate / AE.config.speech.rateNormal);
        S.recAudio = a;
        a.onended = () => finish(true);
        a.onerror = () => { S.recAudio = null; speakSynth(text, rate, p, token, finish); };
        const pr = a.play();
        if (pr && pr.catch) pr.catch(() => { S.recAudio = null; speakSynth(text, rate, p, token, finish); });
        return;
      }
      speakSynth(text, rate, p, token, finish);
    });
  }

  function speakSynth(text, rate, p, token, finish) {
    if (!synth || !S.voices.length) { finish(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
    u.rate = rate;
    u.pitch = 1;
    u.volume = AE.util.clamp(p.voice, 0, 1);
    let done = false;
    const end = ok => { if (done) return; done = true; clearTimeout(safety); finish(ok); };
    u.onend = () => end(true);
    u.onerror = () => end(false);
    // Filet de sécurité : certains navigateurs n'envoient pas toujours « onend »
    const safety = setTimeout(() => end(true), Math.max(2500, text.length * 110 / rate));
    // Petit délai après cancel() : contourne un défaut connu de Chrome
    setTimeout(() => { if (token === S.token) { try { synth.speak(u); } catch (e) { end(false); } } }, 60);
  }

  AE.speech = {
    ready, available, reason, speak, stop,
    voices: () => S.voices.slice(),
    speaking: () => !!S.current
  };
  ready();
})(window.AE);
