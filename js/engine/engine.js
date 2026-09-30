/*
 * Moteur des séances : missions, entraînement libre, défi du jour, révision, parcours mélangé,
 * contre-la-montre et parcours de découverte. Vérification des réponses.
 */
(function (AE) {
  'use strict';
  const U = AE.util;
  const N = s => U.normalize(s);
  const C = () => AE.content;

  const MISSIONS = [
    { id: 'm1', icon: '🔤', title: 'Les mots, 1re partie', desc: 'Les dix premiers mots du thème.', group: 0 },
    { id: 'm2', icon: '🔡', title: 'Les mots, 2e partie', desc: 'Les mots 11 à 20.', group: 1 },
    { id: 'm3', icon: '🅰️', title: 'Les mots, 3e partie', desc: 'Les mots 21 à 30.', group: 2 },
    { id: 'm4', icon: '💬', title: 'Expressions utiles', desc: 'Les phrases toutes faites du thème.' },
    { id: 'm5', icon: '🧩', title: 'Phrases et grammaire', desc: 'Construire, compléter, trouver l’intrus, suivre des consignes.' },
    { id: 'm6', icon: '📖', title: 'Dialogues et lecture', desc: 'Comprendre de courts dialogues, des textes, et trouver la bonne réplique.' },
    { id: 'm7', icon: '🏆', title: 'Grand défi du thème', desc: 'Un mélange de toutes les activités.' }
  ];

  function wordIndex(theme) {
    if (!theme._wIndex) { theme._wIndex = {}; theme.words.forEach((w, i) => { theme._wIndex[w.id] = i; }); }
    return theme._wIndex;
  }

  function missionPool(theme, mid) {
    const m = MISSIONS.find(x => x.id === mid);
    const idx = wordIndex(theme);
    return theme.questions.filter(q => {
      if (m.group != null) {
        if (!q.refs.w.length || q.refs.x.length) return false;
        return Math.floor(idx[q.refs.w[0]] / 10) === m.group;
      }
      if (mid === 'm4') return q.refs.x.length > 0;
      if (mid === 'm5') return ['gram', 'build', 'odd', 'act'].includes(q.type) && !q.refs.x.length;
      if (mid === 'm6') return q.type === 'dialogue' || q.type === 'reading' || q.type === 'xsituation';
      return true;
    });
  }

  const MIN = 5;
  function eligible(pool, level) { return pool.filter(q => q.level <= level); }
  function missionAvailable(theme, mid, level) { return eligible(missionPool(theme, mid), level).length >= MIN; }
  function missionMinLevel(theme, mid) {
    for (let l = 1; l <= 5; l++) if (missionAvailable(theme, mid, l)) return l;
    return 5;
  }

  /*
   * Sélection pondérée : niveau choisi en priorité, puis le niveau juste en dessous ;
   * jamais au-dessus du niveau choisi. Évite les questions récentes, les doublons de mot
   * et plus d'un tiers de questions du même mini-jeu.
   */
  function pick(pool, level, n, opts) {
    opts = opts || {};
    const rnd = opts.rnd || Math.random;
    const recent = new Set(opts.recent || AE.progress.recent().slice(-40));
    let cands = eligible(pool, level);
    const fresh = cands.filter(q => !recent.has(q.id));
    if (fresh.length >= n) cands = fresh;
    const weight = q => (q.level === level ? 6 : q.level === level - 1 ? 3 : 1) * (opts.weight ? opts.weight(q) : 1);
    // tirage pondéré sans remise
    const bag = cands.map(q => ({ q, k: Math.pow(rnd(), 1 / weight(q)) })).sort((a, b) => b.k - a.k).map(x => x.q);
    const out = [];
    const usedRefs = new Set();
    const perGame = {};
    const cap = Math.max(2, Math.ceil(n / 3));
    const passes = [true, false];
    passes.forEach(strict => {
      for (const q of bag) {
        if (out.length >= n) break;
        if (out.includes(q)) continue;
        const refs = q.refs.w.concat(q.refs.x);
        if (strict) {
          if (refs.some(r => usedRefs.has(r))) continue;
          if ((perGame[q.game] || 0) >= cap) continue;
          if (q.dialogue && out.some(o => o.dialogue === q.dialogue)) continue;
          if (q.reading && out.some(o => o.reading === q.reading)) continue;
        }
        out.push(q);
        refs.forEach(r => usedRefs.add(r));
        perGame[q.game] = (perGame[q.game] || 0) + 1;
      }
    });
    // Les questions d'un même texte restent groupées ; la difficulté monte doucement
    return out.sort((a, b) => a.level - b.level || (rnd() - 0.5));
  }

  function intro(questions) {
    const words = [], expr = [], lessons = [];
    questions.forEach(q => {
      (q.refs.w || []).forEach(w => { if (AE.progress.state('w', w) === 'new' && !words.includes(w)) words.push(w); });
      (q.refs.x || []).forEach(x => { if (AE.progress.state('x', x) === 'new' && !expr.includes(x)) expr.push(x); });
      (q.tags || []).forEach(t => { if (!AE.progress.lessonSeen(t) && !lessons.includes(t) && C().lessons[t]) lessons.push(t); });
    });
    return { words, expr, lessons };
  }

  function missionLength() { return U.clamp(AE.settings.get().missionLength || 8, AE.config.mission.min, AE.config.mission.max); }

  function session(base) {
    return Object.assign({ index: 0, results: [], sessionId: AE.progress.newSessionId(), startedAt: Date.now() }, base);
  }

  const E = AE.engine = {
    MISSIONS,
    missionPool, missionAvailable, missionMinLevel,

    mission(theme, mid, level) {
      const n = missionLength();
      const pool = missionPool(theme, mid);
      let qs = pick(pool, level, n);
      // Réintroduire en douceur 1 ou 2 mots qui ont posé problème dans ce thème
      const hard = AE.progress.struggling(theme.id).filter(w => !qs.some(q => q.refs.w.includes(w)));
      const reviewIds = [];
      if (hard.length && qs.length >= 5) {
        const extra = pick(theme.questions.filter(q => q.refs.w.length === 1 && hard.includes(q.refs.w[0]) && ['listen', 'read', 'recall', 'cloze', 'spell'].includes(q.type)), level, 2);
        extra.forEach(q => { if (qs.length > 5) qs.splice(qs.length - 1 - Math.floor(Math.random() * 2), 1); qs.push(q); reviewIds.push(q.id); });
      }
      const m = MISSIONS.find(x => x.id === mid);
      return session({ mode: 'mission', theme: theme.id, missionId: mid, level, title: theme.meta.en + ' — ' + m.title, questions: qs, reviewIds, intro: intro(qs) });
    },

    practice(themeIds, game, level) {
      const pool = [];
      themeIds.forEach(t => { const th = C().themes[t]; if (th) th.questions.forEach(q => { if (!game || q.game === game) pool.push(q); }); });
      const s = session({ mode: 'practice', level, themes: themeIds, game, endless: true, title: 'Entraînement libre', pool });
      s.questions = pick(pool, level, 10);
      s.intro = intro(s.questions);
      return s;
    },
    morePractice(s) {
      const next = pick(s.pool, s.level, 10, { recent: s.questions.slice(-30).map(q => q.id).concat(AE.progress.recent().slice(-30)) });
      s.questions = s.questions.concat(next);
      return next;
    },

    daily(level, date) {
      date = date || U.today();
      const rnd = U.rng('daily:' + date + ':' + level);
      const pool = C().allQuestions().filter(q => q.kind !== 'match');
      const qs = pick(pool, level, 8, { rnd, recent: [] });
      return session({ mode: 'daily', level, date, title: 'Défi du jour', questions: qs, intro: intro(qs) });
    },

    review(level) {
      const due = AE.progress.due(30);
      const types = ['listen', 'read', 'recall', 'cloze', 'spell', 'xmeaning', 'xsituation', 'xlisten'];
      const all = C().allQuestions();
      const byRef = {};
      all.forEach(q => { if (!types.includes(q.type)) return; q.refs.w.concat(q.refs.x).forEach(r => { (byRef[r] = byRef[r] || []).push(q); }); });
      const qs = [];
      const recent = new Set(AE.progress.recent().slice(-20));
      for (const item of due) {
        if (qs.length >= missionLength()) break;
        const cands = (byRef[item.id] || []).filter(q => q.level <= level);
        if (!cands.length) continue;
        const fresh = cands.filter(q => !recent.has(q.id));
        const list = fresh.length ? fresh : cands;
        // au niveau 4 et plus, on privilégie l'écrit pour consolider
        list.sort((a, b) => Math.abs(b.level - level) - Math.abs(a.level - level));
        qs.push(list[list.length - 1 - Math.floor(Math.random() * Math.min(2, list.length))]);
      }
      return session({ mode: 'review', level, title: 'Révision', questions: qs, intro: { words: [], expr: [], lessons: [] } });
    },

    mixed(themeIds, level) {
      const n = Math.max(missionLength(), 10);
      const per = Math.ceil(n / themeIds.length);
      let qs = [];
      themeIds.forEach(t => { qs = qs.concat(pick(C().themes[t].questions, level, per)); });
      qs = U.shuffle(qs).slice(0, n);
      return session({ mode: 'mixed', level, themes: themeIds, title: 'Parcours mélangé', questions: qs, intro: intro(qs) });
    },

    timed(level) {
      const pool = C().allQuestions().filter(q => q.kind === 'choice' && !q.passage && !q.reading && !q.dialogue);
      const qs = pick(pool, level, 60, { recent: [] });
      return session({ mode: 'timed', level, title: 'Contre-la-montre', questions: qs, timeLimit: AE.config.timedSeconds, intro: { words: [], expr: [], lessons: [] } });
    },

    placement() {
      const all = C().allQuestions().filter(q => q.kind === 'choice' && ['listen', 'read', 'recall', 'cloze', 'gram', 'xsituation', 'dialogue'].includes(q.type));
      const qs = [];
      for (let l = 1; l <= 5; l++) {
        const lvl = all.filter(q => q.level === l || (l === 5 && q.level >= 4 && q.type === 'gram'));
        U.shuffle(lvl).slice(0, 2).forEach(q => qs.push(q));
      }
      return session({ mode: 'placement', level: 5, title: 'Parcours de découverte', questions: qs, noHints: false, intro: { words: [], expr: [], lessons: [] } });
    },

    // Prépare l'affichage d'une question sans modifier la banque
    view(q, level, opts) {
      opts = opts || {};
      const v = { q, options: null, textFallback: false };
      if (q.kind === 'choice') {
        let opts2 = q.options.map((o, i) => Object.assign({ ok: i === 0 }, o));
        const keepAll = ['odd', 'act', 'dialogue', 'reading'].includes(q.type) || opts.keepAll;
        if (level <= 1 && !keepAll && opts2.length > 3) {
          const wrong = U.shuffle(opts2.slice(1)).slice(0, 2);
          opts2 = [opts2[0]].concat(wrong);
        }
        v.options = U.shuffle(opts2);
      } else if (q.kind === 'build') {
        let t = U.shuffle(q.tokens.map((w, i) => ({ w, i })));
        let guard = 0;
        while (t.map(x => x.i).join() === q.tokens.map((w, i) => i).join() && guard++ < 10) t = U.shuffle(t);
        v.tokens = t;
      } else if (q.kind === 'match') {
        let pairs = q.pairs.slice();
        if (level <= 1) pairs = pairs.slice(0, 3);
        else if (level <= 3) pairs = pairs.slice(0, 4);
        v.left = U.shuffle(pairs.map((p, i) => ({ i, t: p.en })));
        v.right = U.shuffle(pairs.map((p, i) => ({ i, t: p.fr, v: p.v })));
      }
      const recId = (q.refs && (q.refs.w[0] || q.refs.x[0])) || null;
      v.recId = q.type === 'listen' || q.type === 'xlisten' || q.type === 'read' || q.type === 'spell' || q.type === 'xmeaning' ? recId : null;
      if (q.hideText && q.say && !AE.speech.available(v.recId)) v.textFallback = true;
      return v;
    },

    check(q, answer) {
      if (q.kind === 'choice') return { ok: !!(answer && answer.ok) };
      if (q.kind === 'typed') {
        const a = N(answer);
        const acc = (q.accept || [q.answer]).map(N);
        if (acc.includes(a)) return { ok: true };
        const near = a.length > 2 && acc.some(x => U.lev(a, x) === 1);
        return { ok: false, near, empty: !a };
      }
      if (q.kind === 'build') {
        const s = N(answer.join(' ') + (q.end || ''));
        const okList = [q.answer].concat(q.alt || []).map(N);
        return { ok: okList.includes(s) };
      }
      if (q.kind === 'match') return { ok: answer && answer.mistakes === 0 };
      return { ok: false };
    },

    stars(ratio) { return ratio >= 0.9 ? 3 : ratio >= 0.65 ? 2 : 1; }
  };
})(window.AE);
