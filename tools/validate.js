#!/usr/bin/env node
/*
 * Validation automatisée des banques de contenu.
 * Détecte : identifiants dupliqués, références manquantes, questions sans bonne réponse,
 * options en double, doublons de contenu, champs manquants et volumes insuffisants.
 * Usage : node tools/validate.js [--quiet]
 */
'use strict';
const { loadAll } = require('./load-content');

const AE = loadAll();
const U = AE.util;
const N = s => U.normalize(s);
const C = AE.content;
const errors = C.errors.slice();
const warnings = [];
const quiet = process.argv.includes('--quiet');

const REQUIRED = {
  words: 600, wordsPerTheme: 28, expressions: 200, dialogues: 60, questions: 1200,
  doomWords: 300, doomIdioms: 150, doomQuestions: 500
};

function checkQuestion(q, where, known) {
  const tag = where + ' ' + q.id;
  if (!q.id) errors.push(where + ' : question sans identifiant');
  if (!q.instr) errors.push(tag + ' : consigne manquante');
  if (!q.explain) errors.push(tag + ' : explication manquante');
  if (!(q.level >= 1 && q.level <= 5) && !q.tiers) errors.push(tag + ' : niveau invalide');
  if (q.kind === 'choice') {
    if (!Array.isArray(q.options) || q.options.length < 3) errors.push(tag + ' : moins de 3 propositions');
    else {
      const labels = q.options.map(o => N(o.t));
      if (labels.some(l => !l)) errors.push(tag + ' : proposition vide');
      if (new Set(labels).size !== labels.length) errors.push(tag + ' : propositions en double (' + labels.join(' / ') + ')');
      const vis = q.options.map(o => o.v).filter(Boolean);
      if (vis.length && vis.length !== q.options.length) errors.push(tag + ' : images manquantes sur certaines propositions');
      if (vis.length && new Set(vis).size !== vis.length) errors.push(tag + ' : images en double');
    }
  } else if (q.kind === 'typed') {
    if (!q.answer) errors.push(tag + ' : réponse attendue manquante');
    if (!q.accept || !q.accept.map(N).includes(N(q.answer))) errors.push(tag + ' : la réponse attendue n’est pas dans les réponses acceptées');
  } else if (q.kind === 'build') {
    if (!q.tokens || q.tokens.length < 3) errors.push(tag + ' : moins de 3 mots à ordonner');
    if (N(q.tokens.join(' ') + (q.end || '')) !== N(q.answer)) errors.push(tag + ' : les mots ne reconstituent pas la réponse');
    if (new Set(q.tokens.map(N)).size === 1) errors.push(tag + ' : mots tous identiques');
    (q.alt || []).forEach(a => {
      const t = U.tokens(a).words.map(N).sort().join(' ');
      if (t !== q.tokens.map(N).sort().join(' ')) errors.push(tag + ' : ordre alternatif « ' + a + ' » n’utilise pas les mêmes mots');
    });
  } else if (q.kind === 'match') {
    if (!q.pairs || q.pairs.length < 3) errors.push(tag + ' : moins de 3 paires');
    else {
      if (new Set(q.pairs.map(p => N(p.en))).size !== q.pairs.length) errors.push(tag + ' : paires EN en double');
      if (new Set(q.pairs.map(p => N(p.fr))).size !== q.pairs.length) errors.push(tag + ' : paires FR en double');
    }
  } else errors.push(tag + ' : type de réponse inconnu ' + q.kind);
  if (known) {
    (q.refs && q.refs.w || []).forEach(id => { if (!known.words[id]) errors.push(tag + ' : mot référencé inconnu ' + id); });
    (q.refs && q.refs.x || []).forEach(id => { if (!known.expr[id]) errors.push(tag + ' : expression référencée inconnue ' + id); });
    (q.tags || []).forEach(t => { if (!C.lessons[t]) errors.push(tag + ' : notion de grammaire sans leçon « ' + t + ' »'); });
    if (q.dialogue && !C.dialogues[q.dialogue]) errors.push(tag + ' : dialogue introuvable');
    if (q.reading && !C.readings[q.reading]) errors.push(tag + ' : texte introuvable');
  }
  if (q.hideText && q.kind === 'choice' && q.say) {
    // Dans un exercice d'écoute, le texte anglais ne doit pas apparaître dans les propositions ni la consigne
    const s = N(q.say);
    const re = new RegExp('(^|[^a-z])' + s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[^a-z])');
    if (re.test(N(q.instr))) errors.push(tag + ' : la consigne d’écoute révèle le texte');
    if (N(q.options[0].t) === s) warnings.push(tag + ' : mot transparent (identique en français)');
    else if (q.options.some(o => N(o.t) === s)) errors.push(tag + ' : une proposition révèle le texte entendu');
  }
}

function signature(q) {
  const opts = (q.options || []).map(o => N(o.t)).sort().join('|');
  const body = [q.type, N(q.instr || ''), N(q.en || ''), N(q.say || ''), N(q.question || ''), (q.clues || []).join(' '), opts,
    N(q.answer || ''), (q.pairs || []).map(p => p.en).sort().join('|')].join('#');
  return body;
}

// ------------------------- MODES ENFANTS -------------------------
const themes = C.loadedThemes();
if (themes.length !== 20) errors.push('Nombre de thèmes chargés : ' + themes.length + ' (20 attendus)');
const known = { words: C.words, expr: C.expr };
const globalEn = new Map();
const globalExpr = new Map();
const ids = new Set();
const sigs = new Map();
const rows = [];
let totalQ = 0;
const byType = {}, byLevel = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, byGame = {};
const POS = Object.keys(C.POS);

themes.forEach(t => {
  const where = '[' + t.id + ']';
  if (t.words.length < REQUIRED.wordsPerTheme) errors.push(where + ' : seulement ' + t.words.length + ' mots');
  const frSeen = new Map();
  t.words.forEach(w => {
    const k = N(w.en);
    if (globalEn.has(k)) errors.push(where + ' : mot en double « ' + w.en + ' » (déjà dans ' + globalEn.get(k) + ')');
    globalEn.set(k, t.id);
    if (!w.fr || !w.example || !w.exampleFr) errors.push(where + ' : champs manquants pour ' + w.id);
    if (!POS.includes(w.pos)) errors.push(where + ' : catégorie grammaticale inconnue « ' + w.pos + ' » pour ' + w.id);
    if (!(w.diff >= 1 && w.diff <= 3)) errors.push(where + ' : difficulté invalide pour ' + w.id);
    const f = N(w.fr);
    if (frSeen.has(f)) errors.push(where + ' : traduction identique pour « ' + w.en + ' » et « ' + frSeen.get(f) + ' »');
    frSeen.set(f, w.en);
    if (!U.blankWord(w.example, w.en)) warnings.push(where + ' : l’exemple de « ' + w.en + ' » ne contient pas le mot exact (pas de question à trou)');
  });
  const xfr = new Set();
  t.expressions.forEach(e => {
    const k = N(e.en);
    if (globalExpr.has(k)) errors.push(where + ' : expression en double « ' + e.en + ' »');
    globalExpr.set(k, t.id);
    if (!e.context || !e.example || !e.exampleFr) errors.push(where + ' : champs manquants pour l’expression ' + e.id);
    if (!/^pour /.test(e.context)) warnings.push(where + ' : contexte à formuler « pour … » : ' + e.id);
    if (xfr.has(N(e.fr))) errors.push(where + ' : traduction d’expression en double ' + e.fr);
    xfr.add(N(e.fr));
  });
  t.dialogues.forEach(d => {
    if (!d.lines || d.lines.length < 2 || d.lines.length > 6) errors.push(where + ' : le dialogue ' + d.id + ' doit avoir 2 à 6 répliques');
    (d.lines || []).forEach((l, i) => { if (!l[0] || !l[1] || !l[2]) errors.push(where + ' : réplique incomplète ' + d.id + '#' + i); });
    if (d.gap != null && !(d.gap >= 0 && d.gap < d.lines.length)) errors.push(where + ' : trou invalide dans ' + d.id);
  });
  t.readings.forEach(r => { if (!r.text || !r.fr || !r.quiz || !r.quiz.length) errors.push(where + ' : texte incomplet ' + r.id); });

  const levels = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  t.questions.forEach(q => {
    if (ids.has(q.id)) errors.push(where + ' : identifiant de question dupliqué ' + q.id);
    ids.add(q.id);
    checkQuestion(q, where, known);
    const s = signature(q);
    if (sigs.has(s)) errors.push(where + ' : question identique à ' + sigs.get(s) + ' : ' + q.id);
    sigs.set(s, q.id);
    levels[q.level]++; byLevel[q.level]++;
    byType[q.type] = (byType[q.type] || 0) + 1;
    byGame[q.game] = (byGame[q.game] || 0) + 1;
  });
  Object.keys(levels).forEach(l => { if (levels[l] < 8) warnings.push(where + ' : peu de questions au niveau ' + l + ' (' + levels[l] + ')'); });
  totalQ += t.questions.length;
  rows.push([t.meta.num, t.id, t.words.length, t.expressions.length, t.dialogues.length, t.readings.length, t.questions.length,
    levels[1], levels[2], levels[3], levels[4], levels[5]]);
});

const totalWords = themes.reduce((a, t) => a + t.words.length, 0);
const totalExpr = themes.reduce((a, t) => a + t.expressions.length, 0);
const totalDlg = themes.reduce((a, t) => a + t.dialogues.length, 0);
const handAuthored = themes.reduce((a, t) => a + t.questions.filter(q => ['build', 'gram', 'odd', 'mystery', 'act', 'dialogue', 'reading'].includes(q.type) && !(q.refs.x || []).length).length, 0);
if (globalEn.size < REQUIRED.words) errors.push('Vocabulaire insuffisant : ' + globalEn.size + ' / ' + REQUIRED.words);
if (globalExpr.size < REQUIRED.expressions) errors.push('Expressions insuffisantes : ' + globalExpr.size + ' / ' + REQUIRED.expressions);
if (totalDlg < REQUIRED.dialogues) errors.push('Dialogues insuffisants : ' + totalDlg + ' / ' + REQUIRED.dialogues);
if (totalQ < REQUIRED.questions) errors.push('Questions insuffisantes : ' + totalQ + ' / ' + REQUIRED.questions);
Object.keys(C.lessons).forEach(k => { const l = C.lessons[k]; if (!l.title || !l.text || !l.examples || !l.examples.length) errors.push('Leçon incomplète : ' + k); });

// ------------------------- MODE DOOM -------------------------
let doomSummary = null;
const D = AE.doomContent;
if (D && D.ready) {
  const dIds = new Set(), dSig = new Map(), dEn = new Set(), dIdioms = new Set();
  D.words.forEach(w => {
    if (dEn.has(N(w.en))) errors.push('[doom] mot en double : ' + w.en);
    dEn.add(N(w.en));
    if (!w.def || !w.fr || !w.example || !w.exampleFr) errors.push('[doom] champs manquants : ' + w.id);
    if (!U.blankWord(w.example, w.form || w.en)) errors.push('[doom] l’exemple ne contient pas « ' + (w.form || w.en) + ' » : ' + w.id);
  });
  D.idioms.forEach(x => {
    if (dIdioms.has(N(x.en))) errors.push('[doom] expression en double : ' + x.en);
    dIdioms.add(N(x.en));
    if (!x.fr || !x.explain || !x.example || !x.exampleFr || !x.key) errors.push('[doom] champs manquants : ' + x.id);
    if (!U.blankWord(x.example, x.key)) errors.push('[doom] mot-clé « ' + x.key + ' » absent de l’exemple : ' + x.id);
  });
  const tiers = { hard: 0, nightmare: 0, ultra: 0 }, cats = {};
  D.questions.forEach(q => {
    if (dIds.has(q.id)) errors.push('[doom] identifiant dupliqué ' + q.id);
    dIds.add(q.id);
    checkQuestion(q, '[doom]', null);
    if (!q.tiers || !q.tiers.length) errors.push('[doom] ' + q.id + ' : aucune difficulté');
    (q.tiers || []).forEach(t => tiers[t]++);
    cats[q.cat] = (cats[q.cat] || 0) + 1;
    const s = signature(q);
    if (dSig.has(s)) errors.push('[doom] question identique à ' + dSig.get(s) + ' : ' + q.id);
    dSig.set(s, q.id);
  });
  if (dEn.size < REQUIRED.doomWords) errors.push('[doom] mots avancés insuffisants : ' + dEn.size + ' / ' + REQUIRED.doomWords);
  if (dIdioms.size < REQUIRED.doomIdioms) errors.push('[doom] expressions insuffisantes : ' + dIdioms.size + ' / ' + REQUIRED.doomIdioms);
  if (D.questions.length < REQUIRED.doomQuestions) errors.push('[doom] questions insuffisantes : ' + D.questions.length + ' / ' + REQUIRED.doomQuestions);
  // aucun recouvrement d'identifiants avec les modes enfants
  D.questions.forEach(q => { if (ids.has(q.id)) errors.push('[doom] identifiant partagé avec les modes enfants : ' + q.id); });
  doomSummary = { words: dEn.size, idioms: dIdioms.size, phrasal: D.idioms.filter(x => x.type === 'phrasal').length, questions: D.questions.length, tiers, cats };
} else {
  errors.push('[doom] banque DOOM non construite');
}

// ------------------------- RAPPORT -------------------------
const pad = (s, n) => String(s).padEnd(n);
console.log('\nAnglelio — validation du contenu\n');
console.log(pad('#', 4) + pad('thème', 15) + pad('mots', 6) + pad('expr', 6) + pad('dial', 6) + pad('txt', 5) + pad('quest', 7) + 'N1   N2   N3   N4   N5');
rows.forEach(r => console.log(pad(r[0], 4) + pad(r[1], 15) + pad(r[2], 6) + pad(r[3], 6) + pad(r[4], 6) + pad(r[5], 5) + pad(r[6], 7) + r.slice(7).map(x => pad(x, 5)).join('')));
console.log('\nModes enfants : ' + globalEn.size + ' mots distincts, ' + globalExpr.size + ' expressions, ' + totalDlg + ' dialogues, ' +
  themes.reduce((a, t) => a + t.readings.length, 0) + ' textes, ' + Object.keys(C.lessons).length + ' leçons de grammaire.');
console.log('Questions enfants : ' + totalQ + ' (dont ' + handAuthored + ' rédigées à la main : phrases, grammaire, intrus, mots mystère, consignes, dialogues, lectures).');
console.log('  par type : ' + JSON.stringify(byType));
console.log('  par mini-jeu : ' + JSON.stringify(byGame));
console.log('  par niveau : ' + JSON.stringify(byLevel));
if (doomSummary) {
  console.log('\nDOOM English : ' + doomSummary.words + ' mots avancés, ' + doomSummary.idioms + ' expressions idiomatiques et verbes à particule (dont ' + doomSummary.phrasal + ' phrasal verbs), ' + doomSummary.questions + ' questions.');
  console.log('  par difficulté : ' + JSON.stringify(doomSummary.tiers));
  console.log('  par catégorie : ' + JSON.stringify(doomSummary.cats));
}
if (warnings.length && !quiet) {
  console.log('\nAvertissements (' + warnings.length + ') :');
  warnings.slice(0, 60).forEach(w => console.log('  - ' + w));
  if (warnings.length > 60) console.log('  … ' + (warnings.length - 60) + ' de plus');
}
if (errors.length) {
  console.log('\nERREURS (' + errors.length + ') :');
  errors.slice(0, 120).forEach(e => console.log('  ✗ ' + e));
  if (errors.length > 120) console.log('  … ' + (errors.length - 120) + ' de plus');
  process.exit(1);
}
console.log('\n✓ Validation réussie : aucune erreur.');
