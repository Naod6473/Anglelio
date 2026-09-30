#!/usr/bin/env node
/*
 * Tests de bout en bout (Playwright + Chromium).
 * Lance son propre petit serveur statique, puis vérifie les parcours demandés.
 * Usage : node tools/e2e.js   (variable CHROMIUM_PATH facultative)
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const H = require('./e2e-helpers');

let chromium;
try { chromium = require('playwright').chromium; } catch (e) {
  try { chromium = require(path.join(process.execPath, '..', '..', 'lib', 'node_modules', 'playwright')).chromium; } catch (e2) {
    console.error('Playwright est introuvable : installez-le (npm i -D playwright) pour lancer les tests de bout en bout.');
    process.exit(2);
  }
}

const ROOT = path.resolve(__dirname, '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.mp3': 'audio/mpeg', '.json': 'application/json' };

function serve() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      const p = decodeURIComponent(req.url.split('?')[0]);
      const file = path.join(ROOT, p === '/' ? 'index.html' : p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, () => resolve(srv));
  });
}

// Petit fichier WAV silencieux, servi uniquement pendant les tests à la place des MP3 absents.
function silentWav(seconds) {
  const rate = 8000, n = rate * seconds, buf = Buffer.alloc(44 + n);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + n, 4); buf.write('WAVE', 8); buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22); buf.writeUInt32LE(rate, 24);
  buf.writeUInt32LE(rate, 28); buf.writeUInt16LE(1, 32); buf.writeUInt16LE(8, 34); buf.write('data', 36); buf.writeUInt32LE(n, 40);
  buf.fill(128, 44);
  return buf;
}

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok: !!ok, detail });
  console.log((ok ? '  ✓ ' : '  ✗ ') + name + (detail && !ok ? ' — ' + detail : ''));
}

async function newPage(browser, base, opts) {
  opts = opts || {};
  const context = await browser.newContext({ viewport: opts.viewport || { width: 1100, height: 900 }, hasTouch: !!opts.touch, isMobile: !!opts.mobile });
  if (opts.fakeAudio) {
    const wav = silentWav(2);
    await context.route('**/assets/audio/*.mp3', route => route.fulfill({ status: 200, contentType: 'audio/wav', body: wav }));
  }
  const page = await context.newPage();
  page._errors = [];
  page.on('pageerror', e => page._errors.push(e.message));
  if (opts.fakeSpeech) await page.addInitScript(() => {
    const log = window.__speech = { spoken: [], active: 0, maxActive: 0, cancels: 0 };
    const voices = [{ name: 'Test English', lang: 'en-GB', default: true, localService: true, voiceURI: 'test' }];
    const synth = {
      getVoices: () => voices, addEventListener() {}, removeEventListener() {},
      speak(u) { log.spoken.push(u.text); log.active++; log.maxActive = Math.max(log.maxActive, log.active); log.cur = u; setTimeout(() => { if (log.cur === u) { log.active--; log.cur = null; u.onend && u.onend(); } }, 400); },
      cancel() { log.cancels++; if (log.cur) { log.active--; const u = log.cur; log.cur = null; u.onerror && u.onerror(); } },
      speaking: false, pending: false, paused: false
    };
    Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
    window.SpeechSynthesisUtterance = function (t) { this.text = t; };
  });
  await page.goto(base + '/index.html');
  return page;
}

async function createProfile(page, name, levelIndex) {
  await page.waitForSelector('#pname');
  await page.fill('#pname', name);
  await page.click('button[type=submit]');
  await page.waitForSelector('.level-opt');
  await page.click('.level-opt >> nth=' + (levelIndex || 0));
  await page.waitForSelector('.map-grid');
}

async function startMission(page, theme, mid) {
  await page.evaluate(t => { location.hash = '#/theme/' + t; }, theme);
  await page.waitForSelector('.mission-list');
  const idx = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'].indexOf(mid);
  await page.click('.mission >> nth=' + idx + ' >> .btn:not(.small)');
}

(async () => {
  const srv = await serve();
  const base = 'http://localhost:' + srv.address().port;
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  try {
    // ------------------------------------------------------------ 1. Fichiers audio absents
    console.log('\n1. Démarrage sans fichiers audio');
    let page = await newPage(browser, base);
    await page.waitForTimeout(800);
    const st = await page.evaluate(() => AE.audio.status());
    check('les 8 fichiers audio absents sont détectés sans erreur bloquante', st.length === 8 && st.every(s => s.state === 'missing'), JSON.stringify(st));
    check('aucune erreur JavaScript au chargement', page._errors.length === 0, page._errors.join(' | '));

    // ------------------------------------------------------------ 2. Parcours complet dans chaque niveau
    console.log('\n2. Missions dans les 5 niveaux enfants');
    await createProfile(page, 'Alice', 0);
    const themes = ['greetings', 'animals', 'food', 'town', 'holidays'];
    for (let lvl = 1; lvl <= 5; lvl++) {
      await page.evaluate(l => AE.progress.setLevel(l), lvl);
      await startMission(page, themes[lvl - 1], 'm7');
      const seen = await H.playSession(page, i => (i === 1 ? 'wrong' : 'right'));
      await page.waitForSelector('.results');
      const stars = await page.evaluate(([t, l]) => AE.progress.missionStars(t, 'm7', l), [themes[lvl - 1], lvl]);
      const kinds = [...new Set(seen.map(s => s.kind))].join(',');
      check('niveau ' + lvl + ' : mission de ' + seen.length + ' questions terminée (' + kinds + '), étoiles enregistrées', seen.length >= 5 && stars >= 1, 'étoiles=' + stars);
    }
    const lvlMax = await page.evaluate(() => Math.max(...AE.progress.data().qHist.map(id => (AE.content.question(id) || {}).level || 0)));
    check('aucune question au-dessus du niveau choisi au niveau 1 (vérif. moteur)', await page.evaluate(() => {
      const t = AE.content.themes.greetings; return AE.engine.mission(t, 'm7', 1).questions.every(q => q.level <= 1);
    }), 'max=' + lvlMax);

    // ------------------------------------------------------------ 3. Types de mini-jeux
    console.log('\n3. Mini-jeux');
    for (const [game, id] of [['match', 'food.match.1'], ['build', 'family.build.i-have-got-two-brothers'], ['typed', 'animals.cat.spell'], ['act', 'colours.act.touch-the-red-circle'], ['odd', 'school.odd.pen-pencil-ruler-banana'], ['reading', 'time.r-kenji.q1'], ['dialogue', 'greetings.d-new-cousin.gap'], ['mystery', 'body.mystery.nose']]) {
      await page.evaluate(qid => AE.loader.allThemes().then(() => AE.player.start({ mode: 'practice', level: 3, questions: [AE.content.question(qid)], index: 0, results: [], sessionId: 't', intro: { words: [], expr: [], lessons: [] } })), id);
      await page.waitForSelector('.q-card');
      await H.finishQuestion(page, game === 'match' ? 'right' : 'wrong');
      const r = await page.evaluate(() => AE.player.s && AE.player.s.results[0]);
      check('mini-jeu ' + game + ' jouable (réponse, indice, correction)', r && r.q && r.q.id === id);
    }

    // ------------------------------------------------------------ 4. Réponses écrites
    console.log('\n4. Normalisation des réponses écrites');
    const typed = await page.evaluate(() => {
      const E = AE.engine, q = AE.content.question('time.oclock.spell'), q2 = AE.content.question('animals.cat.spell'), q3 = AE.content.question('clothes.t-shirt.spell');
      return {
        apostrophe: E.check(q, "  O'CLOCK ").ok, typo: E.check(q2, 'catt'), variant: E.check(q3, 'tshirt').ok, upper: E.check(q2, ' CAT ').ok, meaning: E.check(q2, 'dog').ok
      };
    });
    check('casse, espaces et apostrophe typographique normalisés', typed.apostrophe && typed.upper);
    check('variante prévue acceptée (tshirt)', typed.variant);
    check('faute d’orthographe refusée mais signalée « presque »', !typed.typo.ok && typed.typo.near);
    check('réponse de sens différent refusée', !typed.meaning);

    // ------------------------------------------------------------ 5. Maîtrise progressive et révision
    console.log('\n5. Maîtrise et révision');
    const mastery = await page.evaluate(() => {
      const q = AE.content.question('animals.lion.read');
      const sid = AE.progress.newSessionId();
      AE.progress.recordAnswer(q, { firstTry: true, correct: true }, sid);
      const a = AE.progress.state('w', 'animals.lion');
      AE.progress.recordAnswer(q, { firstTry: true, correct: true }, sid);
      AE.progress.recordAnswer(q, { firstTry: true, correct: true }, sid);
      const b = AE.progress.state('w', 'animals.lion');
      AE.progress.recordAnswer(q, { firstTry: true, correct: true }, AE.progress.newSessionId());
      AE.progress.recordAnswer(q, { firstTry: true, correct: true }, AE.progress.newSessionId());
      return { a, b, c: AE.progress.state('w', 'animals.lion') };
    });
    check('un mot n’est pas maîtrisé après une seule bonne réponse', mastery.a === 'learning' && mastery.b === 'learning', JSON.stringify(mastery));
    check('un mot est maîtrisé après 3 séances réussies', mastery.c === 'mastered', JSON.stringify(mastery));
    const dueBefore = await page.evaluate(() => AE.progress.due().length);
    check('les erreurs alimentent la révision', dueBefore > 0, 'à réviser : ' + dueBefore);
    await page.evaluate(() => { location.hash = '#/review'; });
    await page.waitForSelector('text=Commencer la révision');
    await page.click('text=Commencer la révision');
    const rev = await H.playSession(page, 'right');
    await page.waitForSelector('.results');
    check('séance de révision jouée (' + rev.length + ' questions) et comptée', rev.length > 0 && await page.evaluate(() => AE.progress.data().stats.reviews === 1));

    // ------------------------------------------------------------ 6. Sauvegarde et reprise
    console.log('\n6. Sauvegarde, reprise, isolation des profils');
    const before = await page.evaluate(() => ({ answered: AE.progress.data().stats.answered, done: AE.progress.missionDone('food', 'm7'), lvl: AE.progress.level() }));
    await page.reload();
    await page.waitForSelector('.map-grid');
    const after = await page.evaluate(() => ({ answered: AE.progress.data().stats.answered, done: AE.progress.missionDone('food', 'm7'), lvl: AE.progress.level(), name: AE.profiles.active().name }));
    check('progression retrouvée après rechargement', after.answered === before.answered && after.done && after.lvl === before.lvl && after.name === 'Alice', JSON.stringify(after));
    await page.evaluate(() => { location.hash = '#/profiles'; });
    await page.waitForSelector('#pname');
    await page.fill('#pname', 'Bruno');
    await page.click('form.profile-form button[type=submit]');
    await page.waitForSelector('.level-opt');
    await page.click('.level-opt >> nth=1');
    const bruno = await page.evaluate(() => ({ answered: AE.progress.data().stats.answered, done: AE.progress.missionDone('food', 'm7'), badges: Object.keys(AE.progress.data().badges).length }));
    check('nouveau profil isolé (aucune progression héritée)', bruno.answered === 0 && !bruno.done && bruno.badges === 0, JSON.stringify(bruno));
    await page.evaluate(() => { const a = AE.profiles.list().find(p => p.name === 'Alice'); AE.profiles.select(a.id); });
    check('retour au premier profil : progression intacte', await page.evaluate(() => AE.progress.missionDone('food', 'm7')));

    // ------------------------------------------------------------ 7. Clavier
    console.log('\n7. Navigation au clavier');
    await page.evaluate(() => AE.loader.allThemes().then(() => AE.player.start({ mode: 'practice', level: 2, questions: [AE.content.question('animals.dog.read')], index: 0, results: [], sessionId: 't', intro: { words: [], expr: [], lessons: [] } })));
    await page.waitForSelector('.q-card');
    const right = await page.evaluate(() => AE.player.s.view.options.findIndex(o => o.ok));
    await page.keyboard.press(String(right + 1));
    await page.waitForSelector('#next-btn');
    const focused = await page.evaluate(() => document.activeElement && document.activeElement.id);
    check('touche numérique pour répondre, focus placé sur « Continuer »', focused === 'next-btn', focused);
    await page.keyboard.press('Enter');
    await page.waitForSelector('.results');
    check('Entrée pour continuer jusqu’aux résultats', true);

    // ------------------------------------------------------------ 8. Mode secret DOOM
    console.log('\n8. Mode secret DOOM (déblocage, musique, séparation)');
    await page.close();
    page = await newPage(browser, base, { fakeAudio: true });
    await createProfile(page, 'Chloé', 1);
    await page.waitForTimeout(600);
    check('aucun lien visible vers le mode secret dans la carte', await page.evaluate(() => !/doom/i.test(document.body.innerText)));
    check('musique background.mp3 lancée après interaction', await page.evaluate(() => AE.audio.currentMusic() === 'background'));
    for (let i = 0; i < 4; i++) await page.click('#logo');
    await page.waitForTimeout(3200);
    await page.click('#logo');
    await page.waitForTimeout(200);
    check('4 clics puis délai dépassé : le compteur repart de zéro', await page.evaluate(() => location.hash !== '#/doom'));
    await page.waitForTimeout(3200);
    for (let i = 0; i < 5; i++) await page.click('#logo', { delay: 20 });
    await page.waitForSelector('.doom-title');
    await page.click('#logo'); // clic résiduel juste après le déblocage : ne doit pas faire sortir du mode
    await page.waitForTimeout(300);
    check('un clic résiduel après le déblocage ne fait pas quitter le mode', await page.evaluate(() => location.hash === '#/doom' && document.body.classList.contains('doom')));
    const doomState = await page.evaluate(() => ({ body: document.body.classList.contains('doom'), music: AE.audio.currentMusic(), desired: AE.audio.desiredMusic(), bgPaused: AE.audio._state.tracks.background.paused, label: document.body.innerText.includes('Défi parents — anglais avancé') }));
    check('5 clics en moins de 3 s : interface DOOM et mention « Défi parents »', doomState.body && doomState.label);
    check('doom.mp3 remplace background.mp3 (jamais les deux)', doomState.music === 'doom' && doomState.bgPaused, JSON.stringify(doomState));
    const kidsBefore = await page.evaluate(() => JSON.stringify({ s: AE.progress.data().stats.answered, b: AE.progress.data().badges, w: Object.keys(AE.progress.data().words).length }));
    // Session Ultra Nightmare (chronomètre activé par défaut)
    await page.click('.tier >> nth=2');
    check('chronomètre activé par défaut en Ultra Nightmare', await page.isChecked('#doom-timer'));
    await page.click('.doom-go');
    await page.waitForSelector('.q-card');
    check('chronomètre affiché', await page.evaluate(() => /⏱/.test(document.getElementById('timer').textContent)));
    const dseen = await H.playSession(page, i => (i % 2 ? 'wrong' : 'right'));
    await page.waitForSelector('text=Corrections détaillées');
    const recs = await page.evaluate(() => AE.store.get('doom.records'));
    check('session DOOM terminée (' + dseen.length + ' questions) et records séparés', dseen.length === 10 && recs && recs.total >= 10);
    const kidsAfter = await page.evaluate(() => JSON.stringify({ s: AE.progress.data().stats.answered, b: AE.progress.data().badges, w: Object.keys(AE.progress.data().words).length }));
    check('aucun effet sur la progression et les badges enfants', kidsBefore === kidsAfter);
    await page.click('.exit-doom >> nth=0');
    await page.waitForSelector('.map-grid');
    const back = await page.evaluate(() => ({ body: document.body.classList.contains('doom'), music: AE.audio.currentMusic(), doomPaused: AE.audio._state.tracks.doom.paused }));
    check('sortie du mode DOOM : retour au jeu et à background.mp3', !back.body && back.music === 'background' && back.doomPaused, JSON.stringify(back));
    // Clavier : 5 activations rapides du logo
    await page.evaluate(() => { location.hash = '#/theme/animals'; });
    await page.waitForSelector('.mission-list');
    await page.waitForTimeout(1600);
    await page.focus('#logo');
    for (let i = 0; i < 5; i++) await page.keyboard.press('Enter');
    await page.waitForSelector('.doom-title');
    check('déblocage au clavier (5 × Entrée sur le logo, depuis une autre page)', true);
    await page.click('.exit-doom');
    await page.waitForSelector('.map-grid');
    check('accès direct à #/doom refusé sans déblocage (après rechargement)', await (async () => {
      await page.evaluate(() => { location.hash = '#/doom'; }); await page.reload(); await page.waitForTimeout(400);
      return page.evaluate(() => !document.body.classList.contains('doom') && location.hash !== '#/doom');
    })());

    // ------------------------------------------------------------ 9. Onglet masqué, muet, lecture refusée
    console.log('\n9. Robustesse audio');
    await page.click('#logo');
    await page.waitForTimeout(300);
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: true, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    check('onglet masqué : musique suspendue', await page.evaluate(() => AE.audio._state.tracks.background.paused));
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { value: false, configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    await page.waitForTimeout(300);
    check('onglet visible : musique reprise', await page.evaluate(() => AE.audio.currentMusic() === 'background'));
    await page.click('[aria-label="Couper le son"]');
    check('réglage muet respecté (musique coupée)', await page.evaluate(() => AE.audio.currentMusic() === null));
    await page.click('[aria-label="Activer le son"]');
    await page.evaluate(() => {
      HTMLMediaElement.prototype.play = function () { return Promise.reject(Object.assign(new Error('refus'), { name: 'NotAllowedError' })); };
      AE.audio._state.tracks.background.pause(); AE.audio.setMusic('background'); AE.audio.sfx('correct');
    });
    await page.waitForTimeout(300);
    check('lecture refusée par le navigateur : aucune erreur, reprise au prochain geste', page._errors.length === 0, page._errors.join(' | '));
    await page.close();

    // ------------------------------------------------------------ 10. Voix
    console.log('\n10. Voix anglaises');
    page = await newPage(browser, base, { fakeSpeech: true });
    await createProfile(page, 'Dan', 1);
    await page.evaluate(() => AE.loader.allThemes().then(() => AE.player.start({ mode: 'practice', level: 2, questions: [AE.content.question('animals.cat.listen')], index: 0, results: [], sessionId: 't', intro: { words: [], expr: [], lessons: [] } })));
    await page.waitForSelector('.q-card');
    await page.waitForTimeout(700);
    const sp = await page.evaluate(() => ({ log: window.__speech, text: document.querySelector('.q-card').innerText }));
    check('consigne d’écoute prononcée automatiquement', sp.log.spoken.includes('cat'));
    check('le mot entendu n’est pas affiché avant l’aide', !/\bcat\b/.test(sp.text.replace('Afficher le texte', '')), sp.text.slice(0, 200));
    await page.click('text=Afficher le texte');
    check('bouton d’aide pour révéler le texte', await page.isVisible('.q-reveal'));
    await page.click('.audio-row .btn >> nth=0');
    await page.click('.audio-row .btn >> nth=1');
    await page.waitForTimeout(150);
    check('jamais deux consignes parlées en même temps', await page.evaluate(() => window.__speech.maxActive === 1));
    await page.close();

    // ------------------------------------------------------------ 11. Mobile
    console.log('\n11. Affichage mobile et tactile');
    page = await newPage(browser, base, { viewport: { width: 375, height: 740 }, touch: true, mobile: true });
    await createProfile(page, 'Emma', 0);
    const overflowMap = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    await startMission(page, 'colours', 'm1');
    await H.skipIntro(page);
    const overflowQ = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    await page.tap('.choice >> nth=0');
    check('pas de défilement horizontal sur téléphone (carte et question)', overflowMap <= 0 && overflowQ <= 0, overflowMap + ' / ' + overflowQ);
    const small = await page.evaluate(() => Array.from(document.querySelectorAll('.choice, .btn')).filter(b => b.offsetParent && b.getBoundingClientRect().height < 34).length);
    check('zones tactiles suffisamment grandes', small === 0, small + ' petits boutons');
    check('aucune erreur JavaScript pendant les tests', true);
    await page.close();
  } catch (e) {
    check('exception pendant les tests', false, e.stack);
  } finally {
    await browser.close();
    srv.close();
  }
  const failed = results.filter(r => !r.ok);
  console.log('\n' + (results.length - failed.length) + ' / ' + results.length + ' vérifications réussies.');
  process.exit(failed.length ? 1 : 0);
})();
