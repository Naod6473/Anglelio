/* Aides partagées par les tests de bout en bout (Playwright). */
'use strict';

// Répond à la question courante. mode : 'right' (bonne réponse) ou 'wrong' (mauvaise réponse).
async function answer(page, mode) {
  const info = await page.evaluate(() => {
    const s = AE.player.s;
    const q = s.questions[s.index];
    const v = s.view;
    const r = { kind: q.kind, type: q.type, id: q.id };
    if (q.kind === 'choice') {
      const off = s.disabledOpts || [];
      r.right = v.options.findIndex(o => o.ok);
      r.wrong = v.options.findIndex((o, i) => !o.ok && !off.includes(i));
    }
    if (q.kind === 'typed') r.answer = q.answer;
    if (q.kind === 'build') r.order = q.tokens.map((w, i) => v.tokens.findIndex(t => t.i === i));
    if (q.kind === 'match') r.pairs = v.left.map(l => ({ l: l.i }));
    return r;
  });
  if (info.kind === 'choice') {
    await page.click('.choice[data-i="' + (mode === 'right' ? info.right : info.wrong) + '"]');
  } else if (info.kind === 'typed') {
    await page.fill('input.typed', mode === 'right' ? info.answer : 'zzzz');
    await page.click('.typed-row .btn.primary');
  } else if (info.kind === 'build') {
    const order = mode === 'right' ? info.order : info.order.slice().reverse();
    // les jetons libres sont redessinés à chaque clic : on clique par libellé dans l'ordre voulu
    const words = await page.evaluate(ord => { const v = AE.player.s.view; return ord.map(k => v.tokens[k].w); }, order);
    for (const w of words) {
      const btns = await page.$$('.build-bank .token');
      for (const b of btns) { if ((await b.textContent()) === w) { await b.click(); break; } }
    }
    await page.click('.answer-area .btn.primary');
  } else if (info.kind === 'match') {
    for (const p of info.pairs) {
      await page.click('.match-col >> nth=0 >> [data-i="' + p.l + '"]');
      if (mode === 'wrong') {
        const other = await page.$('.match-col >> nth=1 >> button:not([data-i="' + p.l + '"]):not(:disabled)');
        if (other) { await other.click(); await page.click('.match-col >> nth=0 >> [data-i="' + p.l + '"]'); }
      }
      await page.click('.match-col >> nth=1 >> [data-i="' + p.l + '"]');
    }
  }
  return info;
}

// Termine la question en cours (y compris après un nouvel essai) et passe à la suivante.
async function finishQuestion(page, mode) {
  const info = await answer(page, mode);
  if (mode === 'wrong' && info.kind !== 'match') {
    const answered = await page.evaluate(() => !!AE.player.s.answered);
    if (!answered) await answer(page, 'wrong');
    const answered2 = await page.evaluate(() => !!AE.player.s.answered);
    if (!answered2) await answer(page, 'right');
  }
  await page.waitForSelector('#next-btn');
  await page.click('#next-btn');
  return info;
}

async function skipIntro(page) {
  await page.waitForSelector('#intro-next, .q-card');
  const hasIntro = await page.$('#intro-next');
  if (hasIntro) {
    const skip = await page.$('text=Passer l’introduction');
    if (skip) await skip.click(); else await page.click('#intro-next');
    await page.waitForSelector('.q-card');
  }
}

async function playSession(page, pattern) {
  await skipIntro(page);
  const seen = [];
  for (let i = 0; i < 40; i++) {
    const phase = await page.evaluate(() => AE.player.s && AE.player.s.phase);
    if (phase !== 'question') break;
    const mode = typeof pattern === 'function' ? pattern(i) : (pattern || 'right');
    const info = await finishQuestion(page, mode);
    seen.push(info);
  }
  return seen;
}

module.exports = { answer, finishQuestion, skipIntro, playSession };
