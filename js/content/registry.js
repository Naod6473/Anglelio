/*
 * Registre du contenu pédagogique des modes enfants.
 * Les fichiers data/kids/themes/*.js appellent AE.content.registerTheme().
 * Les formats compacts (une entrée par ligne, champs séparés par « | ») sont analysés ici.
 */
(function (AE) {
  'use strict';
  const U = AE.util;

  const POS = {
    n: 'nom', v: 'verbe', adj: 'adjectif', adv: 'adverbe', prep: 'préposition', pron: 'pronom',
    interj: 'interjection', num: 'nombre', det: 'déterminant', phr: 'groupe de mots', conj: 'conjonction'
  };

  const C = AE.content = AE.content || {};
  C.meta = C.meta || [];
  C.themes = C.themes || {};
  C.lessons = C.lessons || {};
  C.words = C.words || {};
  C.expr = C.expr || {};
  C.dialogues = C.dialogues || {};
  C.readings = C.readings || {};
  C.POS = POS;
  C.errors = C.errors || [];

  function lines(text) {
    return String(text || '').split('\n').map(s => s.trim()).filter(s => s && s[0] !== '#');
  }
  function list(s, sep) {
    return String(s || '').split(sep || ';').map(x => x.trim()).filter(Boolean);
  }

  function parseWords(theme, text) {
    return lines(text).map((ln, i) => {
      const f = ln.split('|').map(s => s.trim());
      const w = {
        id: theme + '.' + U.slug(f[0]),
        en: f[0], fr: f[1], pos: f[2], diff: Number(f[3]) || 1, emoji: f[4] || '',
        example: f[5] || '', exampleFr: f[6] || '',
        variants: list(f[7], ','),
        theme, order: i
      };
      w.say = w.en;
      if (f.length < 7) C.errors.push('Mot incomplet (' + theme + ') : ' + ln);
      return w;
    });
  }

  // en|fr|niveau|contexte (« pour … »)|exemple EN|exemple FR|note|variantes
  function parseExpr(theme, text) {
    return lines(text).map((ln, i) => {
      const f = ln.split('|').map(s => s.trim());
      const e = {
        id: theme + '.x.' + U.slug(f[0]),
        en: f[0], fr: f[1], level: Number(f[2]) || 1, context: f[3] || '',
        example: f[4] || '', exampleFr: f[5] || '', note: f[6] || '',
        variants: list(f[7], ','), theme, order: i
      };
      e.say = e.en;
      if (f.length < 6) C.errors.push('Expression incomplète (' + theme + ') : ' + ln);
      return e;
    });
  }

  // phrase EN|traduction FR|niveau|notion|ordres alternatifs acceptés (séparés par ;)
  function parseBuild(theme, text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      return { en: f[0], fr: f[1], level: Number(f[2]) || 3, tag: f[3] || '', alt: list(f[4]) };
    });
  }

  // phrase avec ___|réponse|mauvaises réponses (;)|explication|niveau|notion|traduction FR
  function parseGram(theme, text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      return { en: f[0], answer: f[1], wrong: list(f[2]), explain: f[3] || '', level: Number(f[4]) || 3, tag: f[5] || '', fr: f[6] || '' };
    });
  }

  // mots (;)|intrus|explication|niveau
  function parseOdd(theme, text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      return { items: list(f[0]), odd: f[1], explain: f[2] || '', level: Number(f[3]) || 3 };
    });
  }

  // mot anglais du thème|indices en anglais (;)|niveau|indice FR
  function parseMystery(theme, text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      return { word: f[0], clues: list(f[1]), level: Number(f[2]) || 4, hintFr: f[3] || '' };
    });
  }

  // consigne EN|traduction FR|cible|distracteurs (;)|niveau|libellés FR des images (cible;d1;d2…)
  function parseAct(theme, text) {
    return lines(text).map(ln => {
      const f = ln.split('|').map(s => s.trim());
      return { en: f[0], fr: f[1], target: f[2], wrong: list(f[3]), level: Number(f[4]) || 2, labels: list(f[5]) };
    });
  }

  C.registerTheme = function (def) {
    const id = def.id;
    const meta = C.meta.find(m => m.id === id) || { id };
    const t = {
      id, meta,
      intro: def.intro || '',
      lessons: def.lessons || [],
      words: parseWords(id, def.words),
      expressions: parseExpr(id, def.expressions),
      build: parseBuild(id, def.build),
      gram: parseGram(id, def.gram),
      odd: parseOdd(id, def.odd),
      mystery: parseMystery(id, def.mystery),
      act: parseAct(id, def.act),
      dialogues: (def.dialogues || []).map(d => Object.assign({ theme: id }, d, { id: id + '.' + d.id })),
      readings: (def.readings || []).map(r => Object.assign({ theme: id }, r, { id: id + '.' + r.id }))
    };
    t.words.forEach(w => { if (C.words[w.id]) C.errors.push('Identifiant de mot dupliqué : ' + w.id); C.words[w.id] = w; });
    t.expressions.forEach(e => { if (C.expr[e.id]) C.errors.push('Identifiant d’expression dupliqué : ' + e.id); C.expr[e.id] = e; });
    t.dialogues.forEach(d => { C.dialogues[d.id] = d; });
    t.readings.forEach(r => { C.readings[r.id] = r; });
    C.themes[id] = t;
    if (AE.questions) t.questions = AE.questions.buildTheme(t);
    return t;
  };

  C.registerLessons = function (obj) { Object.assign(C.lessons, obj); };
  C.setMeta = function (arr) { C.meta = arr; };

  C.loadedThemes = () => C.meta.map(m => C.themes[m.id]).filter(Boolean);
  C.allWords = () => C.loadedThemes().reduce((a, t) => a.concat(t.words), []);
  C.allExpressions = () => C.loadedThemes().reduce((a, t) => a.concat(t.expressions), []);
  C.allDialogues = () => C.loadedThemes().reduce((a, t) => a.concat(t.dialogues), []);
  C.allQuestions = () => C.loadedThemes().reduce((a, t) => a.concat(t.questions || []), []);
  C.question = function (id) {
    for (const t of C.loadedThemes()) {
      if (!t._qIndex) { t._qIndex = {}; (t.questions || []).forEach(q => { t._qIndex[q.id] = q; }); }
      if (t._qIndex[id]) return t._qIndex[id];
    }
    return null;
  };
})(window.AE);
