/* Charge le contenu du jeu dans Node (contexte isolé) pour la validation et les statistiques. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function loadAll(opts) {
  opts = opts || {};
  const ctx = { console, Math, Date, JSON, Set, Map, Promise, String, Number, Array, Object, RegExp, Error };
  ctx.window = ctx;
  vm.createContext(ctx);
  const run = rel => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });

  ['js/core/config.js', 'js/core/util.js', 'js/content/registry.js', 'js/content/questions.js',
    'data/kids/index.js', 'data/kids/grammar.js'].forEach(run);
  ctx.AE.content.meta.forEach(m => {
    const rel = 'data/kids/themes/' + m.file;
    if (fs.existsSync(path.join(ROOT, rel))) run(rel);
    else ctx.AE.content.errors.push('Fichier de thème manquant : ' + rel);
  });
  if (opts.doom !== false) {
    ['data/doom/words.js', 'data/doom/idioms.js', 'data/doom/extra.js', 'js/doom/doom-bank.js'].forEach(rel => {
      if (fs.existsSync(path.join(ROOT, rel))) run(rel);
      else ctx.AE.content.errors.push('Fichier DOOM manquant : ' + rel);
    });
    if (ctx.AE.doomBank) ctx.AE.doomBank.build();
  }
  return ctx.AE;
}

module.exports = { loadAll, ROOT };
