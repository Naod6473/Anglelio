/*
 * Progression d'un profil : découverte, apprentissage et maîtrise des mots et expressions,
 * notions de grammaire vues, missions, régularité et statistiques.
 *
 * Règle de maîtrise : chaque bonne réponse du premier coup fait monter la « boîte » d'un cran,
 * au plus une fois par séance. Un élément est maîtrisé à la boîte 3 : il faut donc au moins
 * trois bonnes réponses données lors de trois séances différentes. Une erreur fait redescendre
 * d'un cran et programme une révision rapide.
 */
(function (AE) {
  'use strict';
  const U = AE.util;
  const INTERVALS = [0, 1, 2, 4, 7, 14]; // jours avant la prochaine révision selon la boîte
  const MASTERED = 3;
  let id = null;
  let D = null;

  function blank() {
    return {
      v: 1, level: 1, levelChosen: false, words: {}, expr: {}, lessons: {}, missions: {}, qHist: [], days: [],
      stats: { answered: 0, firstTry: 0, bySkill: {}, byGame: {}, missions: 0, perfect: 0, reviews: 0, daily: {}, timedBest: {}, mixed: 0, practice: 0, placement: null, levelsDone: {}, listenOk: 0, spellOk: 0, dialogueOk: 0, readingOk: 0 },
      badges: {}, sessions: 0
    };
  }

  function today() { return U.dayNumber(U.today()); }

  const P = AE.progress = {
    MASTERED,
    load(pid) {
      id = pid;
      D = pid ? Object.assign(blank(), AE.store.get('progress.' + pid, {})) : null;
      if (D) D.stats = Object.assign(blank().stats, D.stats || {});
      return D;
    },
    save() { if (id && D) AE.store.set('progress.' + id, D); },
    data: () => D,
    has: () => !!D,
    level: () => (D ? D.level : 1),
    setLevel(n) { if (!D) return; D.level = U.clamp(n, 1, 5); D.levelChosen = true; P.save(); },
    reset() { if (!id) return; D = blank(); P.save(); },

    newSessionId() { if (!D) return 's0'; D.sessions++; P.save(); return 's' + D.sessions; },

    item(kind, iid) { return D ? (D[kind === 'x' ? 'expr' : 'words'][iid] || null) : null; },
    state(kind, iid) {
      const it = P.item(kind, iid);
      if (!it) return 'new';
      if (it.box >= MASTERED) return 'mastered';
      if ((it.c || 0) + (it.w || 0) > 0) return 'learning';
      return 'seen';
    },
    present(kind, ids) {
      if (!D) return;
      const store = D[kind === 'x' ? 'expr' : 'words'];
      ids.forEach(i => { if (!store[i]) store[i] = { s: 1, c: 0, w: 0, box: 0, due: today() }; });
      P.save();
    },

    recordAnswer(q, res, sessionId) {
      if (!D) return;
      const st = D.stats;
      st.answered++;
      if (res.firstTry) st.firstTry++;
      const sk = st.bySkill[q.skill] = st.bySkill[q.skill] || [0, 0];
      sk[1]++; if (res.firstTry) sk[0]++;
      const gm = st.byGame[q.game] = st.byGame[q.game] || [0, 0];
      gm[1]++; if (res.firstTry) gm[0]++;
      if (res.firstTry) {
        if (q.skill === 'listen') st.listenOk++;
        if (q.type === 'spell' || (q.kind === 'typed' && q.type !== 'reading')) st.spellOk++;
        if (q.type === 'dialogue') st.dialogueOk++;
        if (q.type === 'reading') st.readingOk++;
      }
      const t = today();
      const upd = (store, iid) => {
        const it = store[iid] = store[iid] || { s: 1, c: 0, w: 0, box: 0, due: t };
        it.last = Date.now();
        if (res.firstTry) {
          it.c++;
          if (it.ls !== sessionId) { it.box = Math.min(5, it.box + 1); it.ls = sessionId; }
          it.err = false;
        } else {
          it.w++;
          it.box = Math.max(0, it.box - 1);
          it.err = true;
        }
        it.due = t + (res.firstTry ? INTERVALS[it.box] : 0);
      };
      (q.refs.w || []).forEach(w => upd(D.words, w));
      (q.refs.x || []).forEach(x => upd(D.expr, x));
      D.qHist.push(q.id);
      if (D.qHist.length > 80) D.qHist = D.qHist.slice(-80);
      P.touchDay();
      P.save();
    },

    recent: () => (D ? D.qHist : []),
    lessonSeen: tag => !!(D && D.lessons[tag]),
    markLesson(tag) { if (D) { D.lessons[tag] = Date.now(); P.save(); } },

    missionKey: (theme, mid) => theme + ':' + mid,
    missionStars(theme, mid, level) {
      const m = D && D.missions[P.missionKey(theme, mid)];
      return m && m[level] ? m[level].stars : 0;
    },
    missionDone(theme, mid) {
      const m = D && D.missions[P.missionKey(theme, mid)];
      return !!(m && Object.keys(m).length);
    },
    saveMission(theme, mid, level, stars, score) {
      if (!D) return;
      const k = P.missionKey(theme, mid);
      const m = D.missions[k] = D.missions[k] || {};
      const cur = m[level] || { stars: 0, best: 0, plays: 0 };
      cur.stars = Math.max(cur.stars, stars);
      cur.best = Math.max(cur.best, score);
      cur.plays++;
      cur.last = Date.now();
      m[level] = cur;
      D.stats.missions++;
      D.stats.levelsDone[level] = true;
      P.save();
    },

    touchDay() {
      if (!D) return;
      const t = today();
      if (D.days[D.days.length - 1] !== t) { D.days.push(t); if (D.days.length > 400) D.days = D.days.slice(-400); }
    },
    streak() {
      if (!D || !D.days.length) return 0;
      const days = D.days;
      let s = 1;
      if (today() - days[days.length - 1] > 1) return 0;
      for (let i = days.length - 1; i > 0; i--) {
        if (days[i] - days[i - 1] === 1) s++; else break;
      }
      return s;
    },
    bestStreak() {
      if (!D || !D.days.length) return 0;
      let best = 1, cur = 1;
      for (let i = 1; i < D.days.length; i++) {
        cur = D.days[i] - D.days[i - 1] === 1 ? cur + 1 : 1;
        best = Math.max(best, cur);
      }
      return best;
    },

    counts(kind) {
      const out = { seen: 0, learning: 0, mastered: 0 };
      if (!D) return out;
      const store = D[kind === 'x' ? 'expr' : 'words'];
      Object.keys(store).forEach(k => { out[P.state(kind, k)]++; });
      return out;
    },
    themeCounts(themeId) {
      const out = { seen: 0, learning: 0, mastered: 0 };
      if (!D) return out;
      Object.keys(D.words).forEach(k => { if (k.indexOf(themeId + '.') === 0) out[P.state('w', k)]++; });
      return out;
    },

    // Éléments à réviser : erreurs récentes d'abord, puis éléments arrivés à échéance
    due(limit) {
      if (!D) return [];
      const t = today();
      const out = [];
      [['w', D.words], ['x', D.expr]].forEach(([kind, store]) => {
        Object.keys(store).forEach(k => {
          const it = store[k];
          const answered = (it.c || 0) + (it.w || 0) > 0;
          if (!answered) return;
          if (it.err || (it.box < 5 && it.due <= t)) {
            out.push({ kind, id: k, prio: (it.err ? 0 : 10) + it.box * 2 + Math.max(0, it.due - t) - Math.min(5, it.w || 0) });
          }
        });
      });
      out.sort((a, b) => a.prio - b.prio);
      return out.slice(0, limit || out.length);
    },
    struggling(themeId) {
      if (!D) return [];
      return Object.keys(D.words).filter(k => k.indexOf(themeId + '.') === 0 && D.words[k].err);
    }
  };
})(window.AE);
