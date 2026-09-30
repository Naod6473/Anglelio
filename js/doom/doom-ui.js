/*
 * Interface du mode secret « DOOM English » (défi parents — anglais avancé).
 * Progression et records séparés : clé de stockage « doom.records », sans aucun effet
 * sur les badges ni la maîtrise des modes enfants.
 */
(function (AE) {
  'use strict';
  const { h, btn, toast, speakBtn } = AE.ui;
  const U = AE.util;
  const KEY = 'doom.records';
  const TIERS = AE.config.doomTiers;

  function blankRec() { return { tiers: {}, recent: [], byCat: {}, total: 0, correct: 0 }; }
  let rec = Object.assign(blankRec(), AE.store.get(KEY, {}));
  const save = () => AE.store.set(KEY, rec);
  const pref = { tier: 'hard', cat: '', length: 10, timer: null };

  function tierRec(t) { return rec.tiers[t] = rec.tiers[t] || { sessions: 0, best: 0, bestRatio: 0, answered: 0, correct: 0 }; }

  // ---------------------------------------------------------------- ÉCRAN D'ACCUEIL DOOM
  AE.screens.doom = function (main, params) {
    AE.app.loading(main, 'Chargement du défi…');
    return AE.loader.doom().then(D => {
      main.innerHTML = '';
      main.appendChild(doomHeader());
      if (params[0] === 'lexicon') { lexicon(main, D); return; }

      const tierBox = h('div', { class: 'tier-list', role: 'radiogroup', 'aria-label': 'Difficulté' });
      const timerCb = h('input', { type: 'checkbox', id: 'doom-timer' });
      const drawTiers = () => {
        tierBox.innerHTML = '';
        TIERS.forEach(t => {
          const r = tierRec(t.id);
          const on = pref.tier === t.id;
          tierBox.appendChild(h('button', {
            type: 'button', role: 'radio', 'aria-checked': String(on), class: 'tier' + (on ? ' on' : ''),
            on: { click: () => { AE.audio.click(); pref.tier = t.id; pref.timer = null; drawTiers(); syncTimer(); } }
          }, h('strong', null, t.name), h('span', null, t.desc),
            h('span', { class: 'small' }, r.sessions ? 'Record : ' + Math.round(r.bestRatio * 100) + ' % · ' + r.sessions + ' session(s)' : 'Aucune session')));
        });
      };
      const syncTimer = () => {
        const t = TIERS.find(x => x.id === pref.tier);
        timerCb.checked = pref.timer == null ? !!t.timer : pref.timer;
      };
      timerCb.addEventListener('change', () => { pref.timer = timerCb.checked; });
      drawTiers(); syncTimer();

      const catSel = h('select', { id: 'doom-cat', on: { change: e => { pref.cat = e.target.value; } } },
        h('option', { value: '' }, 'Toutes les compétences'),
        Object.keys(D.cats).map(k => h('option', { value: k, selected: pref.cat === k || null }, D.cats[k])));
      const lenSel = h('select', { id: 'doom-len', on: { change: e => { pref.length = Number(e.target.value); } } },
        [10, 15, 20].map(n => h('option', { value: n, selected: pref.length === n || null }, n + ' questions')));

      main.appendChild(h('section', { class: 'card doom-card' },
        h('h2', null, 'Choisis ton supplice'),
        tierBox,
        h('div', { class: 'form' },
          h('label', { for: 'doom-cat' }, 'Compétence'), catSel,
          h('label', { for: 'doom-len' }, 'Longueur'), lenSel,
          h('div', { class: 'field check-field' }, timerCb, h('label', { for: 'doom-timer' }, 'Chronomètre : ' + (TIERS[2].seconds) + ' secondes par question (activé par défaut en Ultra Nightmare)'))),
        h('div', { class: 'row gap' }, btn('▶ Lancer le défi', () => start(D), 'primary big doom-go'), btn('📚 Lexique DOOM', () => AE.app.go('#/doom/lexicon'), 'ghost'))));

      const totalRatio = rec.total ? Math.round(rec.correct / rec.total * 100) : 0;
      main.appendChild(h('section', { class: 'card doom-card' },
        h('h2', null, 'Records (séparés du jeu enfant)'),
        h('ul', { class: 'plain' }, TIERS.map(t => {
          const r = tierRec(t.id);
          return h('li', null, h('strong', null, t.name + ' : '), r.sessions ? ('meilleur score ' + r.best + ' pts (' + Math.round(r.bestRatio * 100) + ' %), ' + r.correct + ' / ' + r.answered + ' justes au total') : 'pas encore tenté');
        })),
        h('p', { class: 'small' }, 'Total : ' + rec.correct + ' / ' + rec.total + ' (' + totalRatio + ' %). Banque : ' + D.words.length + ' mots avancés, ' + D.idioms.length + ' expressions et phrasal verbs, ' + D.questions.length + ' questions.'),
        h('p', { class: 'small muted' }, 'Niveau visé : B2 à C2 — estimation éditoriale, pas une certification. La difficulté vient du contenu, jamais de pièges ambigus.'),
        musicLine(),
        btn('Effacer les records DOOM', () => AE.ui.confirm('Effacer les records ?', 'Les scores du mode DOOM seront remis à zéro. Le jeu enfant n’est pas concerné.', 'Effacer', () => { rec = blankRec(); save(); AE.app.route(); }, true), 'danger small')));
    });
  };

  function doomHeader() {
    return h('header', { class: 'doom-head' },
      h('div', null,
        h('h1', { class: 'doom-title' }, 'DOOM English'),
        h('p', { class: 'doom-badge' }, 'Défi parents — anglais avancé')),
      btn('↩ Retour au jeu enfant', () => AE.app.exitDoom(), 'exit-doom', { 'aria-label': 'Quitter le mode DOOM et revenir au jeu enfant' }));
  }

  function musicLine() {
    const f = AE.config.audio.music.doom;
    const st = (AE.audio.status().find(s => s.file === f) || {}).state;
    return h('p', { class: 'small muted' }, 'Musique : ' + f + (st === 'missing' ? ' (fichier absent : ajoutez-le dans assets/audio/)' : st === 'ok' ? ' ✓' : ''));
  }

  function start(D) {
    let pool = D.questions.filter(q => q.tiers.includes(pref.tier) && (!pref.cat || q.cat === pref.cat));
    if (pool.length < pref.length) { toast('Pas assez de questions pour cette combinaison.', '⚠️'); return; }
    const recent = new Set(rec.recent.slice(-150));
    const fresh = pool.filter(q => !recent.has(q.id));
    if (fresh.length >= pref.length) pool = fresh;
    // Mélange équilibré entre catégories quand aucune n'est imposée
    let qs;
    if (!pref.cat) {
      const byCat = {};
      U.shuffle(pool).forEach(q => { (byCat[q.cat] = byCat[q.cat] || []).push(q); });
      const cats = U.shuffle(Object.keys(byCat));
      qs = [];
      let i = 0;
      while (qs.length < pref.length && cats.some(c => byCat[c].length)) {
        const c = cats[i++ % cats.length];
        if (byCat[c].length) qs.push(byCat[c].shift());
      }
    } else qs = U.shuffle(pool).slice(0, pref.length);
    // pas deux questions sur le même texte
    const seenP = new Set();
    qs = qs.filter(q => { if (!q.passage) return true; if (seenP.has(q.passage.title)) return false; seenP.add(q.passage.title); return true; });
    const t = TIERS.find(x => x.id === pref.tier);
    const timer = pref.timer == null ? !!t.timer : pref.timer;
    AE.player.start({
      mode: 'doom', doom: true, tier: pref.tier, level: 5, title: 'DOOM English — ' + t.name,
      questions: qs, perQuestion: timer ? t.seconds || 30 : 0, index: 0, results: [], sessionId: 'doom',
      intro: { words: [], expr: [], lessons: [] }, startedAt: Date.now()
    });
  }

  // ---------------------------------------------------------------- LEXIQUE
  function lexicon(main, D) {
    main.appendChild(h('div', { class: 'row gap space' }, h('h2', null, '📚 Lexique DOOM'), btn('← Retour au défi', () => AE.app.go('#/doom'), 'ghost')));
    const q = h('input', { type: 'search', id: 'lex-q', placeholder: 'Chercher (anglais ou français)', autocomplete: 'off' });
    const kind = h('select', { id: 'lex-kind' }, [['', 'Tout'], ['w', 'Mots avancés'], ['idiom', 'Expressions idiomatiques'], ['phrasal', 'Phrasal verbs'], ['ff', 'Faux amis']].map(([v, l]) => h('option', { value: v }, l)));
    const out = h('div', { 'aria-live': 'polite' });
    const fold = s => U.normalize(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
    let limit = 40;
    const draw = () => {
      const s = fold(q.value);
      const k = kind.value;
      let items = [];
      if (!k || k === 'w' || k === 'ff') items = items.concat(D.words.filter(w => k !== 'ff' || w.cluster === 'falsefriend').map(w => ({ en: w.en, fr: w.fr, sub: w.def, ex: w.example, exFr: w.exampleFr, note: w.note, tag: w.cluster === 'falsefriend' ? 'faux ami' : w.pos })));
      if (!k || k === 'idiom' || k === 'phrasal') items = items.concat(D.idioms.filter(x => !k || x.type === k).map(x => ({ en: x.en, fr: x.fr, sub: x.explain, ex: x.example, exFr: x.exampleFr, tag: x.type === 'phrasal' ? 'phrasal verb' : 'idiome' })));
      items = items.filter(it => !s || fold(it.en).includes(s) || fold(it.fr).includes(s));
      out.innerHTML = '';
      out.appendChild(h('p', { class: 'small muted' }, items.length + ' entrées'));
      out.appendChild(h('ul', { class: 'lex-list' }, items.slice(0, limit).map(it => h('li', { class: 'card lex-item' },
        h('p', null, h('strong', { lang: 'en' }, it.en), ' ', h('span', { class: 'chip small' }, it.tag), ' — ', it.fr),
        h('p', { class: 'small' }, it.sub),
        h('p', { class: 'small', lang: 'en' }, h('em', null, it.ex)), h('p', { class: 'small muted' }, it.exFr),
        it.note ? h('p', { class: 'small note' }, '⚠️ ' + it.note) : null,
        speakBtn(it.ex, { label: 'Écouter', cls: 'small' })))));
      if (items.length > limit) out.appendChild(btn('Afficher plus', () => { limit += 40; draw(); }, 'ghost'));
    };
    q.addEventListener('input', () => { limit = 40; draw(); });
    kind.addEventListener('change', () => { limit = 40; draw(); });
    main.appendChild(h('div', { class: 'filters card doom-card' }, h('label', { for: 'lex-q', class: 'sr-only' }, 'Recherche'), q, h('label', { for: 'lex-kind', class: 'sr-only' }, 'Type'), kind));
    main.appendChild(out);
    draw();
  }

  // ---------------------------------------------------------------- ENREGISTREMENT ET RÉSULTATS
  AE.doomUI = {
    record(q, ok) {
      rec.total++; if (ok) rec.correct++;
      const c = rec.byCat[q.cat] = rec.byCat[q.cat] || [0, 0];
      c[1]++; if (ok) c[0]++;
      const t = tierRec(AE.player.s.tier);
      t.answered++; if (ok) t.correct++;
      rec.recent.push(q.id);
      if (rec.recent.length > 300) rec.recent = rec.recent.slice(-300);
      save();
    },
    finish(s) {
      const t = tierRec(s.tier);
      t.sessions++;
      const n = s.results.length;
      if (n) {
        t.best = Math.max(t.best, s.score);
        t.bestRatio = Math.max(t.bestRatio, s.score / n);
      }
      save();
    },
    results(main, s) {
      const n = s.results.length;
      const ok = s.results.filter(r => r.firstTry).length;
      const tier = TIERS.find(t => t.id === s.tier);
      main.appendChild(doomHeader());
      main.appendChild(h('section', { class: 'card doom-card results-head' },
        h('h2', { class: 'focus-target', tabindex: '-1' }, tier.name + ' — ' + (ok === n && n ? 'Survivant absolu' : ok / Math.max(1, n) >= 0.7 ? 'Survivant' : 'À retenter')),
        h('p', { class: 'big-score' }, ok + ' / ' + n + ' justes du premier coup (' + String(s.score).replace('.', ',') + ' pts)'),
        h('p', { class: 'small' }, 'Record ' + tier.name + ' : ' + Math.round(tierRec(s.tier).bestRatio * 100) + ' %.')));
      main.appendChild(h('section', { class: 'card doom-card' }, h('h2', null, 'Corrections détaillées'),
        h('ol', { class: 'corrections' }, s.results.map(r => h('li', { class: r.firstTry ? 'ok' : r.correct ? 'late' : 'ko' },
          h('p', { class: 'corr-q' }, h('span', { class: 'corr-mark', 'aria-hidden': 'true' }, r.firstTry ? '✓' : r.correct ? '↻' : '✗'),
            h('span', { class: 'sr-only' }, r.firstTry ? 'Juste. ' : r.correct ? 'Juste au second essai. ' : 'Faux. '),
            h('span', { lang: 'en' }, r.q.question || r.q.en || (r.q.hideText ? r.q.say : r.q.instr))),
          h('p', { class: 'corr-a' }, 'Réponse : ', h('strong', null, r.q.kind === 'typed' ? r.q.answer : r.q.options[0].t),
            r.given && !r.correct ? h('span', { class: 'muted' }, ' (votre réponse : « ' + r.given + ' »)') : null),
          h('p', { class: 'small' }, r.q.explain))))));
      main.appendChild(h('div', { class: 'row gap center' },
        btn('↻ Nouvelle session', () => AE.loader.doom().then(start), 'primary'),
        btn('Changer de réglages', () => AE.app.go('#/doom'), 'ghost'),
        btn('↩ Retour au jeu enfant', () => AE.app.exitDoom(), 'exit-doom')));
      setTimeout(() => { const f = main.querySelector('.focus-target'); if (f) f.focus(); }, 30);
    }
  };
})(window.AE);
