/*
 * Fabrique déterministe de la banque de questions des modes enfants.
 * Chaque question reçoit un identifiant stable dérivé du contenu (mot, expression, phrase…).
 * Les distracteurs sont choisis avec un générateur pseudo-aléatoire initialisé par l'identifiant :
 * la banque est donc identique à chaque chargement et vérifiable par tools/validate.js.
 *
 * Convention : options[0] est toujours la bonne réponse ; l'ordre est mélangé à l'affichage.
 */
(function (AE) {
  'use strict';
  const U = AE.util;
  const N = s => U.normalize(s);

  // Familles de mini-jeux (les 10 demandées + 2 activités de vocabulaire)
  const GAMES = {
    listen: { name: 'Listen & Find', fr: 'Écoute et trouve', icon: '👂' },
    match: { name: 'Match It', fr: 'Associe', icon: '🔗' },
    build: { name: 'Build a Sentence', fr: 'Construis la phrase', icon: '🧱' },
    missing: { name: 'Missing Word', fr: 'Le mot manquant', icon: '🧩' },
    mystery: { name: 'Mystery Word', fr: 'Le mot mystère', icon: '🕵️' },
    act: { name: 'Listen & Act', fr: 'Écoute et agis', icon: '👉' },
    dialogue: { name: 'Dialogue Detective', fr: 'Détective des dialogues', icon: '💬' },
    spell: { name: 'Spell It', fr: 'Écris-le', icon: '✏️' },
    odd: { name: 'Odd One Out', fr: 'Trouve l’intrus', icon: '🙃' },
    reading: { name: 'Reading Quest', fr: 'Quête de lecture', icon: '📖' },
    word: { name: 'Word Quest', fr: 'Lis et choisis', icon: '🔤' },
    say: { name: 'Say It Right', fr: 'Que dirais-tu ?', icon: '🗨️' }
  };
  const TYPE_GAME = {
    listen: 'listen', xlisten: 'listen', match: 'match', build: 'build', cloze: 'missing', gram: 'missing',
    mystery: 'mystery', act: 'act', dialogue: 'dialogue', spell: 'spell', odd: 'odd', reading: 'reading',
    read: 'word', recall: 'word', xmeaning: 'say', xsituation: 'say'
  };

  function pickDistinct(target, cands, n, keys) {
    const out = [];
    const seen = {};
    keys.forEach(k => { seen[k] = new Set([N(target[k] || '')]); });
    for (const c of cands) {
      if (out.length >= n) break;
      let ok = true;
      for (const k of keys) {
        const v = N(c[k] || '');
        if (!v || seen[k].has(v)) { ok = false; break; }
      }
      if (!ok) continue;
      keys.forEach(k => seen[k].add(N(c[k])));
      out.push(c);
    }
    return out;
  }

  function wordDistractors(w, pool, n, seed, opts) {
    opts = opts || {};
    const rnd = U.rng(seed);
    let cands = pool.filter(o => o.id !== w.id);
    if (opts.emoji) cands = cands.filter(o => o.emoji);
    cands = U.shuffle(cands, rnd);
    if (opts.near) {
      cands.sort((a, b) => U.lev(a.en.toLowerCase(), w.en.toLowerCase()) - U.lev(b.en.toLowerCase(), w.en.toLowerCase()));
    }
    if (opts.pos) {
      const same = cands.filter(o => o.pos === w.pos), other = cands.filter(o => o.pos !== w.pos);
      cands = same.concat(other);
    }
    const keys = ['en', 'fr'].concat(opts.emoji ? ['emoji'] : []);
    return pickDistinct(w, cands, n, keys);
  }

  function exprDistractors(e, pool, n, seed, key) {
    const rnd = U.rng(seed);
    const cands = U.shuffle(pool.filter(o => o.id !== e.id), rnd);
    return pickDistinct(e, cands, n, [key, key === 'en' ? 'fr' : 'en']);
  }

  function lessonTags(tag) { return tag ? tag.split(',').map(s => s.trim()).filter(Boolean) : []; }

  function buildTheme(t) {
    const Q = [];
    const th = t.id;
    const words = t.words;
    const add = q => { q.theme = th; q.game = TYPE_GAME[q.type]; q.tags = q.tags || []; q.refs = q.refs || { w: [], x: [] }; Q.push(q); };

    // ---------- Questions générées depuis le vocabulaire (5 compétences distinctes par mot) ----------
    words.forEach(w => {
      const d = w.diff;
      const refs = { w: [w.id], x: [] };
      const hasPics = !!w.emoji && wordDistractors(w, words, 3, w.id + ':listen', { emoji: true }).length === 3;

      // 1. Listen & Find : entendre le mot, choisir l'image / le sens
      const dl = wordDistractors(w, words, 3, w.id + ':listen', { emoji: hasPics });
      add({
        id: w.id + '.listen', type: 'listen', kind: 'choice', skill: 'listen', level: Math.min(d, 3), refs,
        instr: hasPics ? 'Écoute le mot anglais et touche la bonne image.' : 'Écoute le mot anglais et choisis sa traduction.',
        say: w.say, hideText: true,
        options: [w].concat(dl).map(o => ({ t: o.fr, v: hasPics ? o.emoji : '' })),
        explain: '« ' + w.en + ' » veut dire « ' + w.fr + ' ».',
        hint: 'Réécoute lentement le mot, puis élimine les images qui ne correspondent pas.'
      });

      // 2. Word Quest (lecture) : lire le mot, choisir sa traduction
      const dr = wordDistractors(w, words, 3, w.id + ':read', { emoji: hasPics });
      add({
        id: w.id + '.read', type: 'read', kind: 'choice', skill: 'read', level: Math.min(d, 3), refs,
        instr: 'Lis le mot anglais. Que veut-il dire ?',
        en: w.en, say: w.say,
        options: [w].concat(dr).map(o => ({ t: o.fr, v: hasPics ? o.emoji : '' })),
        explain: '« ' + w.en + ' » (' + (AE.content.POS[w.pos] || w.pos) + ') = « ' + w.fr + ' ». Exemple : ' + w.example,
        hint: 'Pense à l’exemple : ' + w.example
      });

      // 3. Le bon mot : du français vers l'anglais, avec des mots à l'orthographe proche
      const dn = wordDistractors(w, words, 3, w.id + ':recall', { near: true });
      add({
        id: w.id + '.recall', type: 'recall', kind: 'choice', skill: 'vocab', level: d === 1 ? 2 : 3, refs,
        instr: 'Comment dit-on « ' + w.fr + ' » en anglais ?',
        visual: w.emoji,
        options: [w].concat(dn).map(o => ({ t: o.en })),
        explain: '« ' + w.fr + ' » se dit « ' + w.en + ' ».' + (w.variants.length ? ' On accepte aussi : ' + w.variants.join(', ') + '.' : ''),
        hint: 'Le mot commence par « ' + w.en.charAt(0) + ' ».'
      });

      // 4. Missing Word : compléter la phrase d'exemple (traduction française fournie)
      const blanked = U.blankWord(w.example, w.en);
      if (blanked) {
        const dc = wordDistractors(w, words, 3, w.id + ':cloze', { pos: true });
        add({
          id: w.id + '.cloze', type: 'cloze', kind: 'choice', skill: 'read', level: d <= 2 ? 3 : 4, refs,
          instr: 'Complète la phrase avec le bon mot.',
          en: blanked, fr: w.exampleFr, say: w.example, sayAfter: true,
          options: [w].concat(dc).map(o => ({ t: o.en })),
          explain: 'La phrase complète : « ' + w.example + ' » — ' + w.exampleFr,
          hint: 'Aide-toi de la phrase en français : ' + w.exampleFr
        });
      }

      // 5. Spell It : écrire le mot entendu et traduit
      add({
        id: w.id + '.spell', type: 'spell', kind: 'typed', skill: 'write', level: d <= 2 ? 4 : 5, refs,
        instr: 'Écris en anglais : « ' + w.fr + ' »',
        say: w.say, hideText: true, visual: w.emoji,
        answer: w.en, accept: [w.en].concat(w.variants),
        explain: 'On écrit « ' + w.en + ' »' + (w.variants.length ? ' (accepté aussi : ' + w.variants.join(', ') + ')' : '') + '. ' + w.example,
        hint: 'Le mot commence par « ' + w.en.charAt(0) + ' » et compte ' + w.en.replace(/[^A-Za-z]/g, '').length + ' lettres.'
      });
    });

    // ---------- Match It : groupes de 5 mots ----------
    for (let i = 0; i + 3 <= words.length; i += 5) {
      const group = pickDistinct({ en: '', fr: '' }, words.slice(i, i + 5), 5, ['en', 'fr']);
      if (group.length < 3) continue;
      const allPics = group.every(g => g.emoji) && new Set(group.map(g => g.emoji)).size === group.length;
      add({
        id: th + '.match.' + (i / 5 + 1), type: 'match', kind: 'match', skill: 'vocab',
        level: group.every(g => g.diff === 1) ? 1 : 2,
        refs: { w: group.map(g => g.id), x: [] },
        instr: 'Associe chaque mot anglais à sa traduction.',
        pairs: group.map(g => ({ en: g.en, fr: g.fr, v: allPics ? g.emoji : '' })),
        explain: group.map(g => g.en + ' = ' + g.fr).join(' · '),
        hint: 'Commence par les mots que tu connais le mieux.'
      });
    }

    // ---------- Expressions : 3 ou 4 questions de compétences différentes ----------
    t.expressions.forEach(e => {
      const refs = { w: [], x: [e.id] };
      const noteTxt = e.note ? ' Attention : ' + e.note : '';
      add({
        id: e.id + '.meaning', type: 'xmeaning', kind: 'choice', skill: 'read', level: e.level, refs,
        instr: 'Que veut dire cette expression ?', en: e.en, say: e.say,
        options: [e].concat(exprDistractors(e, t.expressions, 3, e.id + ':m', 'fr')).map(o => ({ t: o.fr })),
        explain: '« ' + e.en + ' » = « ' + e.fr + ' ». On l’utilise ' + e.context + '.' + noteTxt,
        hint: 'On l’utilise ' + e.context + '.'
      });
      add({
        id: e.id + '.situation', type: 'xsituation', kind: 'choice', skill: 'expression', level: Math.min(5, e.level + 1), refs,
        instr: 'Que dis-tu ' + e.context + ' ?',
        options: [e].concat(exprDistractors(e, t.expressions, 3, e.id + ':s', 'en')).map(o => ({ t: o.en })),
        explain: 'On dit « ' + e.en + ' » (' + e.fr + ').' + noteTxt,
        hint: 'Relis bien la situation : ' + e.context + '.'
      });
      add({
        id: e.id + '.listen', type: 'xlisten', kind: 'choice', skill: 'listen', level: Math.min(5, e.level + 1), refs,
        instr: 'Écoute la phrase. Que veut-elle dire ?', say: e.say, hideText: true,
        options: [e].concat(exprDistractors(e, t.expressions, 3, e.id + ':l', 'fr')).map(o => ({ t: o.fr })),
        explain: 'Tu as entendu « ' + e.en + ' » : ' + e.fr + '.',
        hint: 'Réécoute lentement et repère les mots que tu connais.'
      });
      const tk = U.tokens(e.en);
      if (tk.words.length >= 3 && tk.words.length <= 9) {
        add({
          id: e.id + '.build', type: 'build', kind: 'build', skill: 'sentence', level: Math.max(3, Math.min(5, e.level + 1)), refs,
          instr: 'Remets les mots dans l’ordre : « ' + e.fr + ' »',
          tokens: tk.words, end: tk.end, answer: e.en, alt: [], say: e.say, sayAfter: true,
          explain: 'La phrase correcte : « ' + e.en + ' ».' + noteTxt,
          hint: 'Le premier mot est « ' + tk.words[0] + ' ».'
        });
      }
    });

    // ---------- Build a Sentence (phrases rédigées) ----------
    t.build.forEach(b => {
      const tk = U.tokens(b.en);
      add({
        id: th + '.build.' + U.slug(b.en), type: 'build', kind: 'build', skill: 'sentence', level: b.level,
        tags: lessonTags(b.tag),
        instr: 'Remets les mots dans l’ordre : « ' + b.fr + ' »',
        tokens: tk.words, end: tk.end, answer: b.en, alt: b.alt, say: b.en, sayAfter: true,
        explain: 'La phrase correcte : « ' + b.en + ' »' + (b.alt.length ? ' (accepté aussi : « ' + b.alt.join(' », « ') + ' »)' : '') + '.',
        hint: 'Le premier mot est « ' + tk.words[0] + ' ».'
      });
    });

    // ---------- Missing Word grammatical ----------
    t.gram.forEach(g => {
      add({
        id: th + '.gram.' + U.slug(g.en.replace('___', g.answer)), type: 'gram', kind: 'choice', skill: 'grammar', level: g.level,
        tags: lessonTags(g.tag),
        instr: 'Choisis le mot qui complète correctement la phrase.',
        en: g.en.replace('___', '____'), fr: g.fr, say: g.en.replace('___', g.answer), sayAfter: true,
        options: [{ t: g.answer }].concat(g.wrong.map(x => ({ t: x }))),
        explain: g.explain,
        hint: g.fr ? 'En français : ' + g.fr : 'Relis toute la phrase avant de choisir.'
      });
    });

    // ---------- Odd One Out ----------
    t.odd.forEach(o => {
      add({
        id: th + '.odd.' + U.slug(o.items.join('-')), type: 'odd', kind: 'choice', skill: 'vocab', level: o.level,
        instr: 'Trouve l’intrus : quel mot ne va pas avec les autres ?',
        options: [{ t: o.odd }].concat(o.items.filter(x => x !== o.odd).map(x => ({ t: x }))),
        explain: o.explain,
        hint: 'Cherche ce que trois des mots ont en commun.'
      });
    });

    // ---------- Mystery Word ----------
    t.mystery.forEach(m => {
      const w = words.find(x => x.en === m.word);
      if (!w) { AE.content.errors.push('Mot mystère introuvable dans le thème ' + th + ' : ' + m.word); return; }
      const typed = m.level >= 4;
      const q = {
        id: th + '.mystery.' + U.slug(m.word), type: 'mystery', kind: typed ? 'typed' : 'choice', skill: 'read', level: m.level,
        refs: { w: [w.id], x: [] },
        instr: typed ? 'Lis les indices et écris le mot mystère.' : 'Lis les indices et trouve le mot mystère.',
        clues: m.clues, say: m.clues.join(' '), sayAfter: true,
        explain: 'Le mot mystère était « ' + w.en + ' » (' + w.fr + ').',
        hint: m.hintFr || ('Le mot commence par « ' + w.en.charAt(0) + ' ».')
      };
      if (typed) { q.answer = w.en; q.accept = [w.en].concat(w.variants); }
      else q.options = [w].concat(wordDistractors(w, words, 3, w.id + ':myst', { pos: true })).map(o => ({ t: o.en }));
      add(q);
    });

    // ---------- Listen & Act ----------
    t.act.forEach(a => {
      const all = [a.target].concat(a.wrong);
      add({
        id: th + '.act.' + U.slug(a.en), type: 'act', kind: 'choice', skill: 'listen', level: a.level,
        instr: 'Écoute la consigne et fais l’action : touche la bonne image.',
        say: a.en, hideText: true, reveal: a.en,
        options: all.map((tok, i) => ({ t: a.labels[i] || ('choix ' + (i + 1)), v: tok })),
        visualOnly: true,
        explain: '« ' + a.en + ' » : ' + a.fr,
        hint: 'Réécoute lentement la consigne.'
      });
    });

    // ---------- Dialogue Detective ----------
    t.dialogues.forEach(dg => {
      if (dg.gap != null && dg.wrong) {
        add({
          id: dg.id + '.gap', type: 'dialogue', kind: 'choice', skill: 'dialogue', level: dg.level,
          refs: { w: [], x: [] }, dialogue: dg.id, gap: dg.gap,
          instr: 'Lis le dialogue et choisis la réplique qui convient.',
          options: [{ t: dg.lines[dg.gap][1] }].concat(dg.wrong.map(x => ({ t: x }))),
          explain: dg.gapExplain || ('La réplique qui convient : « ' + dg.lines[dg.gap][1] + ' » (' + dg.lines[dg.gap][2] + ').'),
          hint: 'Relis la réplique juste avant et celle juste après le trou.'
        });
      }
      (dg.quiz || []).forEach((qz, i) => {
        add({
          id: dg.id + '.q' + (i + 1), type: 'dialogue', kind: 'choice', skill: 'dialogue', level: Math.min(5, dg.level + (qz[4] || 0)),
          refs: { w: [], x: [] }, dialogue: dg.id,
          instr: 'Lis le dialogue et réponds à la question.',
          question: qz[0],
          options: [{ t: qz[1] }].concat(String(qz[2]).split(';').map(s => ({ t: s.trim() }))),
          explain: qz[3], hint: 'La réponse se trouve dans le dialogue.'
        });
      });
    });

    // ---------- Reading Quest ----------
    t.readings.forEach(r => {
      (r.quiz || []).forEach((qz, i) => {
        const typed = qz[4] === 'typed';
        const q = {
          id: r.id + '.q' + (i + 1), type: 'reading', kind: typed ? 'typed' : 'choice', skill: 'reading', level: r.level,
          tags: lessonTags(r.tag), reading: r.id,
          instr: typed ? 'Lis le texte et écris une réponse courte en anglais.' : 'Lis le texte et réponds à la question.',
          question: qz[0], explain: qz[3], hint: 'Relis la partie du texte qui parle de cela.'
        };
        if (typed) { q.answer = qz[1]; q.accept = String(qz[1] + ';' + (qz[2] || '')).split(';').map(s => s.trim()).filter(Boolean); }
        else q.options = [{ t: qz[1] }].concat(String(qz[2]).split(';').map(s => ({ t: s.trim() })));
        add(q);
      });
    });

    return Q;
  }

  AE.questions = { buildTheme, GAMES, TYPE_GAME, wordDistractors };

  // Si des thèmes ont été enregistrés avant ce fichier
  if (AE.content && AE.content.themes) {
    Object.values(AE.content.themes).forEach(t => { if (!t.questions) t.questions = buildTheme(t); });
  }
})(window.AE);
