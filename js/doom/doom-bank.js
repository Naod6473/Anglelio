/*
 * DOOM English — construction de la banque de questions (séparée des modes enfants).
 * Même principe que la banque enfants : génération déterministe + questions rédigées à la main.
 * Chaque question porte « tiers » (hard / nightmare / ultra) et une catégorie « cat ».
 */
(function (AE) {
  'use strict';
  const U = AE.util;
  const N = s => U.normalize(s);
  const TIER = { h: 'hard', n: 'nightmare', u: 'ultra' };
  const POSFR = { adj: 'adjectif', n: 'nom', v: 'verbe', adv: 'adverbe', conj: 'conjonction', prep: 'préposition' };

  const CATS = {
    vocab: 'Vocabulaire avancé', nuance: 'Nuances de sens', idiom: 'Expressions idiomatiques', phrasal: 'Phrasal verbs',
    falsefriend: 'Faux amis', collocation: 'Collocations', grammar: 'Grammaire complexe', register: 'Registre',
    reading: 'Lecture et inférence', listening: 'Écoute exigeante'
  };

  const tiersFrom = code => String(code || 'hnu').split('').map(c => TIER[c]).filter(Boolean);
  const lines = t => String(t || '').split('\n').map(s => s.trim()).filter(s => s && s[0] !== '#');

  function parseWords(text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      const w = { id: 'dw.' + U.slug(f[0]), en: f[0], pos: f[1], fr: f[2], def: f[3], example: f[4], exampleFr: f[5], cluster: f[6], note: f[7] || '' };
      const us = (w.note.match(/Orthographe américaine : ([A-Za-z-]+)/) || [])[1];
      w.variants = us ? [us] : [];
      return w;
    });
  }

  function parseIdioms(text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      return {
        id: 'di.' + U.slug(f[0]), en: f[0], type: f[1], fr: f[2], explain: f[3], example: f[4], exampleFr: f[5],
        key: f[6], wrong: String(f[7] || '').split(';').map(s => s.trim()).filter(Boolean)
      };
    });
  }

  function pick(target, cands, n, keys, rnd) {
    const out = [], seen = {};
    keys.forEach(k => { seen[k] = new Set([N(target[k])]); });
    U.shuffle(cands, rnd).forEach(c => {
      if (out.length >= n || c.id === target.id) return;
      if (keys.some(k => !N(c[k]) || seen[k].has(N(c[k])))) return;
      keys.forEach(k => seen[k].add(N(c[k])));
      out.push(c);
    });
    return out;
  }

  // Les mots de liaison (adverbes, conjonctions, prépositions) forment un seul groupe de distracteurs
  const posGroup = p => (p === 'adv' || p === 'conj' || p === 'prep') ? 'link' : p;

  function wordExplain(w) {
    return '« ' + w.en + ' » (' + (POSFR[w.pos] || w.pos) + ') = ' + w.fr + '. Définition : ' + w.def + '. Exemple : « ' + w.example + ' » — ' + w.exampleFr + (w.note ? ' ⚠️ ' + w.note : '');
  }

  function build() {
    const D = AE.doomData || {};
    const words = parseWords(D.words);
    const idioms = parseIdioms(D.idioms);
    const Q = [];
    const add = q => { q.refs = q.refs || { w: [], x: [] }; q.level = 5; q.tags = []; Q.push(q); };

    // ---------- Mots avancés : 5 questions de compétences distinctes ----------
    words.forEach(w => {
      const rnd = U.rng(w.id);
      const samePos = words.filter(o => posGroup(o.pos) === posGroup(w.pos));
      const cat = w.cluster === 'falsefriend' ? 'falsefriend' : 'vocab';

      // 1. Définition → mot (distracteurs de même nature, familles variées)
      const d1 = pick(w, samePos, 3, ['en', 'fr'], rnd);
      add({
        id: w.id + '.def', cat, tiers: ['hard', 'ultra'], kind: 'choice',
        instr: 'Quel mot correspond à cette définition ?', en: '“' + w.def + '”',
        options: [w].concat(d1).map(o => ({ t: o.en })),
        explain: wordExplain(w) + ' Les autres : ' + d1.map(o => o.en + ' = ' + o.fr).join(' ; ') + '.'
      });

      // 2. Mot → sens en français (distracteurs d'autres familles, pour éviter les quasi-synonymes)
      const d2 = pick(w, samePos.filter(o => o.cluster !== w.cluster), 3, ['en', 'fr'], rnd);
      add({
        id: w.id + '.fr', cat, tiers: ['hard', 'nightmare'], kind: 'choice',
        instr: 'Quel est le sens de ce mot ?', en: w.en, say: w.en,
        options: [w].concat(d2).map(o => ({ t: o.fr })),
        explain: wordExplain(w)
      });

      // 3. Nuance en contexte : phrase à trou, distracteurs proches (même famille), traduction fournie
      const blanked = U.blankWord(w.example, w.en);
      if (blanked) {
        const close = samePos.filter(o => o.cluster === w.cluster);
        let d3 = pick(w, close, 3, ['en', 'fr'], rnd);
        if (d3.length < 3) d3 = d3.concat(pick(w, samePos.filter(o => !d3.includes(o)), 3 - d3.length, ['en', 'fr'], rnd));
        add({
          id: w.id + '.cloze', cat: cat === 'vocab' ? 'nuance' : cat, tiers: ['nightmare', 'ultra'], kind: 'choice',
          instr: 'Choisis le mot exact. La traduction lève toute ambiguïté : c’est la nuance qui compte.',
          en: blanked, fr: w.exampleFr, say: w.example, sayAfter: true,
          options: [w].concat(d3).map(o => ({ t: o.en })),
          explain: wordExplain(w) + ' Les distracteurs : ' + d3.map(o => o.en + ' = ' + o.fr).join(' ; ') + '.'
        });
      }

      // 4. Réponse écrite (Ultra) : définition + traduction → orthographe exacte
      add({
        id: w.id + '.spell', cat, tiers: ['ultra'], kind: 'typed',
        instr: 'Écris le mot anglais (' + (POSFR[w.pos] || w.pos) + ') qui signifie « ' + w.fr + ' ».',
        en: '“' + w.def + '”',
        answer: w.en, accept: [w.en].concat(w.variants),
        explain: wordExplain(w)
      });

      // 5. Écoute : comprendre la phrase entendue à vitesse naturelle
      const d5 = pick(w, words.filter(o => o.cluster === w.cluster || o.pos === w.pos), 3, ['exampleFr'], rnd);
      if (d5.length === 3) {
        add({
          id: w.id + '.listen', cat: 'listening', tiers: ['nightmare', 'ultra'], kind: 'choice',
          instr: 'Écoute la phrase (vitesse naturelle) et choisis sa traduction.', say: w.example, hideText: true,
          options: [w].concat(d5).map(o => ({ t: o.exampleFr })),
          explain: 'Tu as entendu : « ' + w.example + ' ». ' + wordExplain(w)
        });
      }
    });

    // ---------- Expressions idiomatiques et phrasal verbs : 4 questions par expression ----------
    idioms.forEach(x => {
      const rnd = U.rng(x.id);
      const sameType = idioms.filter(o => o.type === x.type);
      const cat = x.type === 'phrasal' ? 'phrasal' : 'idiom';
      const expl = '« ' + x.en + ' » = ' + x.fr + '. ' + x.explain + ' Exemple : « ' + x.example + ' » — ' + x.exampleFr;

      const dm = pick(x, sameType, 3, ['fr', 'en'], rnd);
      add({
        id: x.id + '.meaning', cat, tiers: ['hard', 'nightmare'], kind: 'choice',
        instr: x.type === 'phrasal' ? 'Que signifie ce phrasal verb ?' : 'Que signifie cette expression ?', en: x.en, say: x.en,
        options: [x].concat(dm).map(o => ({ t: o.fr })),
        explain: expl
      });

      const blanked = U.blankWord(x.example, x.key);
      if (blanked) {
        add({
          id: x.id + '.cloze', cat, tiers: ['nightmare', 'ultra'], kind: 'choice',
          instr: 'Complète l’expression avec le mot exact.', en: blanked, fr: x.exampleFr, say: x.example, sayAfter: true,
          options: [{ t: x.key }].concat(x.wrong.map(t => ({ t }))),
          explain: expl + ' Seul « ' + x.key + ' » forme l’expression attendue.'
        });
        add({
          id: x.id + '.typed', cat, tiers: ['ultra'], kind: 'typed',
          instr: 'Écris le mot manquant de l’expression.', en: blanked, fr: x.exampleFr,
          answer: x.key, accept: [x.key],
          explain: expl
        });
      }

      const dl = pick(x, idioms, 3, ['exampleFr'], rnd);
      add({
        id: x.id + '.listen', cat: 'listening', tiers: ['hard', 'nightmare'], kind: 'choice',
        instr: 'Écoute la phrase et choisis sa traduction.', say: x.example, hideText: true,
        options: [{ t: x.exampleFr }].concat(dl.map(o => ({ t: o.exampleFr }))),
        explain: 'Tu as entendu : « ' + x.example + ' ». ' + expl
      });
    });

    // ---------- Questions rédigées à la main ----------
    const E = D.extra || {};
    ['falsefriend', 'collocation', 'grammar', 'register'].forEach(cat => {
      (E[cat] || []).forEach(it => {
        add({
          id: 'dx.' + cat + '.' + U.slug(it[0]) + '-' + U.slug(it[1]).slice(0, 12), cat, tiers: tiersFrom(it[4]), kind: 'choice',
          instr: cat === 'grammar' ? 'Choisis la forme grammaticalement correcte.' : (cat === 'collocation' ? 'Choisis le mot qui forme une collocation naturelle.' : (cat === 'register' ? 'Choisis la réponse la plus adaptée au registre.' : 'Attention aux faux amis !')),
          en: cat === 'grammar' ? it[0].replace('___', '____') : '', question: cat === 'grammar' ? '' : it[0],
          options: [{ t: it[1] }].concat(String(it[2]).split(';').map(t => ({ t: t.trim() }))),
          explain: it[3]
        });
      });
    });
    (E.reading || []).forEach(r => {
      r.quiz.forEach((qz, i) => {
        add({
          id: 'dx.reading.' + U.slug(r.title) + '.q' + (i + 1), cat: 'reading', tiers: tiersFrom(r.tiers), kind: 'choice',
          instr: 'Lis le texte et déduis la bonne réponse (elle n’est pas écrite mot pour mot).',
          passage: { title: r.title, text: r.text }, question: qz[0],
          options: [{ t: qz[1] }].concat(String(qz[2]).split(';').map(t => ({ t: t.trim() }))),
          explain: qz[3]
        });
      });
    });
    (E.listening || []).forEach(it => {
      add({
        id: 'dx.listening.' + U.slug(it[0]), cat: 'listening', tiers: tiersFrom(it[5]), kind: 'choice',
        instr: 'Écoute attentivement, puis réponds. Le sens est souvent implicite.', say: it[0], hideText: true,
        question: it[1],
        options: [{ t: it[2] }].concat(String(it[3]).split(';').map(t => ({ t: t.trim() }))),
        explain: 'Phrase entendue : « ' + it[0] + ' ». ' + it[4]
      });
    });

    AE.doomContent = { words, idioms, questions: Q, cats: CATS, ready: true };
    return AE.doomContent;
  }

  AE.doomBank = { build, CATS };
})(window.AE);
