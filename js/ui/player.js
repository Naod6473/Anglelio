/*
 * Lecteur de séance : introduction (nouveaux mots, expressions, notions), questions de tous
 * les mini-jeux, indices et nouvel essai, corrections expliquées, écran de résultats.
 * Utilisé par les modes enfants et par le mode DOOM (options.doom).
 */
(function (AE) {
  'use strict';
  const U = AE.util;
  const { h, btn, visual, mascot, stars, speakBtn, announce, toast } = AE.ui;
  const C = () => AE.content;
  const GAMES = () => AE.questions.GAMES;

  const P = AE.player = { s: null };

  const PRAISE = ['Bravo !', 'Excellent !', 'Super !', 'Bien joué !', 'Parfait !', 'Génial !'];
  const DOOM_PRAISE = ['Correct.', 'Exact.', 'Impeccable.', 'Bien vu.'];

  P.start = function (session) {
    P.s = session;
    session.phase = 'intro';
    session.introCards = buildIntroCards(session);
    session.introIndex = 0;
    session.score = 0;
    session.maxScore = 0;
    AE.audio.sfx('transition');
    if (location.hash !== '#/play') location.hash = '#/play';
    else AE.app.route();
  };

  function buildIntroCards(s) {
    const cards = [];
    if (!s.intro) return cards;
    s.intro.lessons.forEach(t => cards.push({ kind: 'lesson', tag: t }));
    s.intro.words.forEach(w => { if (C().words[w]) cards.push({ kind: 'word', id: w }); });
    s.intro.expr.forEach(x => { if (C().expr[x]) cards.push({ kind: 'expr', id: x }); });
    return cards;
  }

  P.render = function (main) {
    const s = P.s;
    if (!s) { location.hash = AE.app.homeRoute(); return; }
    main.innerHTML = '';
    main.className = 'screen screen-play' + (s.doom ? ' doom-play' : '');
    if (s.phase === 'intro' && s.introIndex < s.introCards.length) renderIntro(main);
    else if (s.phase === 'results') renderResults(main);
    else { if (s.phase === 'intro') finishIntro(); s.phase = 'question'; renderQuestion(main); }
  };

  // ------------------------------------------------------------------ INTRODUCTION
  function finishIntro() {
    const s = P.s;
    AE.progress.present('w', s.intro.words);
    AE.progress.present('x', s.intro.expr);
    s.intro.lessons.forEach(t => AE.progress.markLesson(t));
  }

  function lessonCard(tag) {
    const l = C().lessons[tag];
    return h('div', { class: 'card intro-card lesson-card' },
      h('p', { class: 'eyebrow' }, '🧠 Nouvelle notion'),
      h('h2', { tabindex: '-1', class: 'focus-target' }, l.title),
      h('p', { class: 'lesson-text' }, l.text),
      h('ul', { class: 'examples' }, l.examples.map(ex => h('li', null,
        h('span', { class: 'en', lang: 'en' }, ex[0]), h('span', { class: 'fr' }, ex[1]), speakBtn(ex[0], { label: 'Écouter', cls: 'small' })))));
  }

  function wordCard(w) {
    return h('div', { class: 'card intro-card word-card' },
      h('p', { class: 'eyebrow' }, '✨ Nouveau mot'),
      w.emoji ? h('div', { class: 'big-visual' }, visual(w.emoji)) : null,
      h('h2', { class: 'word-en focus-target', lang: 'en', tabindex: '-1' }, w.en),
      h('p', { class: 'word-fr' }, w.fr + ' · ' + (C().POS[w.pos] || w.pos)),
      h('div', { class: 'row gap' }, speakBtn(w.say, { id: w.id }), speakBtn(w.say, { id: w.id, slow: true, label: 'Lentement' })),
      h('div', { class: 'example' }, h('p', { class: 'en', lang: 'en' }, w.example), h('p', { class: 'fr' }, w.exampleFr), speakBtn(w.example, { label: 'Écouter la phrase', cls: 'small' })));
  }

  function exprCard(x) {
    return h('div', { class: 'card intro-card expr-card' },
      h('p', { class: 'eyebrow' }, '💬 Nouvelle expression'),
      h('h2', { class: 'word-en focus-target', lang: 'en', tabindex: '-1' }, x.en),
      h('p', { class: 'word-fr' }, x.fr),
      h('p', { class: 'context' }, 'On l’utilise ' + x.context + '.'),
      x.note ? h('p', { class: 'note' }, '⚠️ ' + x.note) : null,
      h('div', { class: 'row gap' }, speakBtn(x.say, { id: x.id }), speakBtn(x.say, { id: x.id, slow: true, label: 'Lentement' })),
      h('div', { class: 'example' }, h('p', { class: 'en', lang: 'en' }, x.example), h('p', { class: 'fr' }, x.exampleFr)));
  }

  function renderIntro(main) {
    const s = P.s;
    const card = s.introCards[s.introIndex];
    const total = s.introCards.length;
    const next = () => { s.introIndex++; if (s.introIndex >= total) { finishIntro(); s.phase = 'question'; } AE.app.route(); };
    let body;
    if (card.kind === 'lesson') body = lessonCard(card.tag);
    else if (card.kind === 'word') body = wordCard(C().words[card.id]);
    else body = exprCard(C().expr[card.id]);
    main.appendChild(h('div', { class: 'play-top' },
      btn('✕ Quitter', quit, 'ghost small', { 'aria-label': 'Quitter la séance' }),
      h('p', { class: 'play-count' }, 'Avant de jouer : ' + (s.introIndex + 1) + ' / ' + total)));
    main.appendChild(h('div', { class: 'intro-wrap' },
      h('div', { class: 'intro-head' }, mascot('happy', 56), h('p', null, 'Découvre d’abord ces nouveautés. Elles serviront pendant la mission !')),
      body,
      h('div', { class: 'row gap center' },
        btn(s.introIndex + 1 < total ? 'Suivant →' : 'C’est parti ! →', next, 'primary big', { id: 'intro-next' }),
        total > 1 ? btn('Passer l’introduction', () => { s.introIndex = total; finishIntro(); s.phase = 'question'; AE.app.route(); }, 'ghost') : null)));
    focusFirst(main);
  }

  // ------------------------------------------------------------------ QUESTION
  function currentQ() { return P.s.questions[P.s.index]; }

  function attemptsAllowed() {
    const s = P.s;
    if (s.mode === 'timed' || s.mode === 'placement') return 1;
    if (s.doom) return s.tier === 'hard' ? 2 : 1;
    return 2;
  }

  function header(main) {
    const s = P.s;
    const q = currentQ();
    const g = GAMES()[q.game] || { icon: '❔', name: q.cat || '', fr: '' };
    const total = s.endless ? null : s.questions.length;
    const pct = total ? Math.round((s.index / total) * 100) : 0;
    const top = h('div', { class: 'play-top' },
      btn(s.endless ? '■ Terminer' : '✕ Quitter', s.endless ? () => finish() : quit, 'ghost small', { 'aria-label': s.endless ? 'Terminer l’entraînement' : 'Quitter la séance' }),
      h('p', { class: 'play-count' }, total ? 'Question ' + (s.index + 1) + ' / ' + total : 'Question ' + (s.index + 1) + ' · score ' + fmt(s.score)),
      s.doom ? h('span', { class: 'chip' }, (AE.doomBank.CATS[q.cat] || '')) :
        h('span', { class: 'chip game-chip', title: g.fr }, h('span', { 'aria-hidden': 'true' }, g.icon + ' '), g.name),
      h('span', { id: 'timer', class: 'timer', 'aria-live': 'off' }));
    main.appendChild(top);
    if (total) main.appendChild(h('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(total), 'aria-valuenow': String(s.index), 'aria-label': 'Progression de la séance' }, h('span', { style: { width: pct + '%' } })));
  }

  function fmt(n) { return Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ','); }

  function renderQuestion(main) {
    const s = P.s;
    if (s.index >= s.questions.length) {
      if (s.endless && s.mode === 'practice') { if (!AE.engine.morePractice(s).length) { finish(); return; } }
      else { finish(); return; }
    }
    const q = currentQ();
    const level = s.doom ? 5 : s.level;
    const v = s.view && s.view.q === q ? s.view : (s.view = AE.engine.view(q, level, { keepAll: s.doom }));
    s.attempt = s.attempt || 0;
    header(main);
    startTimers();

    const card = h('section', { class: 'card q-card', 'aria-labelledby': 'q-instr' });
    card.appendChild(h('h2', { id: 'q-instr', class: 'q-instr focus-target', tabindex: '-1' }, q.instr));

    // Supports : texte, dialogue, indices
    const passage = q.passage || (q.reading && C().readings[q.reading]);
    if (passage) card.appendChild(passageBlock(passage, q));
    if (q.dialogue) card.appendChild(dialogueBlock(C().dialogues[q.dialogue], q, s.answered));
    if (q.clues) card.appendChild(h('ul', { class: 'clues' }, q.clues.map((c, i) => h('li', { lang: 'en' }, h('span', { class: 'clue-n', 'aria-hidden': 'true' }, '🔎 ' + (i + 1)), ' ' + c))));
    if (q.question) card.appendChild(h('p', { class: 'q-question', lang: /[a-z]/i.test(q.question) && !/[éèàùç«]/.test(q.question) ? 'en' : 'fr' }, q.question));
    if (q.visual && !(q.hideText && q.type === 'listen')) card.appendChild(h('div', { class: 'big-visual' }, visual(q.visual)));
    if (q.en) card.appendChild(h('p', { class: 'q-en' + (q.en.length > 60 ? ' long' : ''), lang: 'en' }, highlightBlank(q.en)));
    if (q.fr && showFrenchSupport(q)) card.appendChild(h('p', { class: 'q-fr' }, h('span', { class: 'label' }, 'En français : '), q.fr));

    // Consigne orale
    if (q.say && !q.sayAfter) {
      if (v.textFallback) {
        card.appendChild(h('div', { class: 'notice', role: 'note' }, '🔇 ' + AE.speech.reason()));
        // Pour une réponse écrite, afficher le texte donnerait la réponse : la traduction suffit.
        if (q.kind !== 'typed') card.appendChild(h('p', { class: 'q-en', lang: 'en' }, q.say));
      } else {
        const rev = h('p', { class: 'q-reveal', lang: 'en', hidden: true }, q.reveal || q.say);
        card.appendChild(h('div', { class: 'row gap audio-row' },
          speakBtn(q.say, { id: v.recId, label: 'Écouter', cls: 'primary', aria: 'Écouter la consigne en anglais' }),
          speakBtn(q.say, { id: v.recId, slow: true, label: 'Lentement' }),
          q.hideText ? btn('👁 Afficher le texte', e => { rev.hidden = false; e.currentTarget.disabled = true; s.revealed = true; }, 'ghost small') : null));
        card.appendChild(rev);
        if (!s.autoPlayed) { s.autoPlayed = true; setTimeout(() => { if (P.s === s && currentQ() === q && !s.answered) AE.speech.speak(q.say, { id: v.recId, rate: s.doom ? AE.config.speech.doomRate : undefined }); }, 350); }
      }
    }

    const area = h('div', { class: 'answer-area' });
    card.appendChild(area);
    if (q.kind === 'choice') renderChoice(area, q, v);
    else if (q.kind === 'typed') renderTyped(area, q, v);
    else if (q.kind === 'build') renderBuild(area, q, v);
    else if (q.kind === 'match') renderMatch(area, q, v);

    card.appendChild(h('div', { id: 'feedback', class: 'feedback', role: 'status', 'aria-live': 'polite' }));
    main.appendChild(card);
    if (s.lastFeedback) showFeedback(s.lastFeedback);
    focusFirst(main);
  }

  function showFrenchSupport(q) {
    if (P.s.doom) return true;                 // DOOM : la traduction lève l'ambiguïté des phrases à trou
    if (q.type === 'gram' || q.type === 'cloze') return true;
    return AE.settings.get().showFrench || P.s.level <= 3;
  }

  function highlightBlank(text) {
    const parts = String(text).split('____');
    const out = [];
    parts.forEach((p, i) => { out.push(p); if (i < parts.length - 1) out.push(h('span', { class: 'blank', 'aria-label': 'mot manquant' }, '_____')); });
    return out;
  }

  function passageBlock(p, q) {
    const tr = h('p', { class: 'passage-fr', hidden: true }, p.fr || '');
    return h('div', { class: 'passage' },
      h('h3', { lang: 'en' }, p.title),
      h('p', { class: 'passage-text', lang: 'en' }, p.text),
      h('div', { class: 'row gap' }, speakBtn(p.text, { label: 'Écouter le texte', cls: 'small' }),
        p.fr ? btn('Voir la traduction', e => {
          if (!P.s.answered) { toast('La traduction sera disponible après ta réponse.', '📖'); return; }
          tr.hidden = !tr.hidden; e.currentTarget.textContent = tr.hidden ? 'Voir la traduction' : 'Masquer la traduction';
        }, 'ghost small') : null),
      tr);
  }

  function dialogueBlock(d, q, answered) {
    const box = h('div', { class: 'dialogue' }, h('h3', { lang: 'en' }, '💬 ' + d.title));
    const speakers = [];
    d.lines.forEach((l, i) => {
      if (!speakers.includes(l[0])) speakers.push(l[0]);
      const side = speakers.indexOf(l[0]) % 2 ? 'right' : 'left';
      const hidden = q.gap === i && !answered;
      box.appendChild(h('div', { class: 'bubble ' + side + (hidden ? ' gap' : '') },
        h('span', { class: 'who' }, l[0]),
        h('span', { class: 'said', lang: 'en' }, hidden ? '… ? …' : l[1])));
    });
    const text = d.lines.filter((l, i) => q.gap !== i || answered).map(l => l[1]).join(' ');
    box.appendChild(h('div', { class: 'row gap' }, speakBtn(text, { label: 'Écouter le dialogue', cls: 'small' })));
    return box;
  }

  // ---------- Choix multiples (et Listen & Act, Odd One Out…) ----------
  function renderChoice(area, q, v) {
    const s = P.s;
    const grid = h('div', { class: 'choices' + (v.options.some(o => o.v) ? ' with-visuals' : '') + (q.visualOnly ? ' visual-only' : '') + (v.options.some(o => o.t.length > 40) ? ' long' : ''), role: 'group', 'aria-label': 'Propositions' });
    v.options.forEach((o, i) => {
      const isEn = /^[\x00-\x7F’‘“”—–…]*$/.test(o.t) && !['xmeaning', 'listen', 'read', 'xlisten'].includes(q.type);
      const b = h('button', {
        type: 'button', class: 'choice', 'data-i': String(i),
        'aria-label': (i + 1) + '. ' + o.t,
        on: { click: () => answerChoice(o, b) }
      },
        h('span', { class: 'kbd', 'aria-hidden': 'true' }, String(i + 1)),
        o.v ? visual(o.v) : null,
        q.visualOnly ? null : h('span', { class: 'choice-t', lang: isEn ? 'en' : 'fr' }, o.t));
      if (s.disabledOpts && s.disabledOpts.includes(i)) { b.disabled = true; b.classList.add('wrong'); }
      if (s.answered) { b.disabled = true; if (o.ok) b.classList.add('right'); }
      grid.appendChild(b);
    });
    area.appendChild(grid);
  }

  function answerChoice(o, b) {
    const s = P.s;
    if (s.answered) return;
    const q = currentQ();
    const res = AE.engine.check(q, o);
    if (res.ok) { b.classList.add('right'); return resolve(true); }
    b.classList.add('wrong'); b.disabled = true;
    s.disabledOpts = (s.disabledOpts || []).concat([Number(b.dataset.i)]);
    wrongAttempt(q);
  }

  // ---------- Réponse écrite (Spell It, Mystery Word, lecture…) ----------
  function renderTyped(area, q) {
    const s = P.s;
    const id = 'typed-' + q.id.replace(/[^a-z0-9]/gi, '');
    const input = h('input', {
      id, type: 'text', class: 'typed', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false',
      lang: 'en', 'aria-describedby': 'feedback', inputmode: 'text', enterkeyhint: 'done'
    });
    if (s.typedValue) input.value = s.typedValue;
    if (s.answered) input.disabled = true;
    const submit = () => {
      if (s.answered) return;
      const val = input.value;
      s.typedValue = val;
      const res = AE.engine.check(q, val);
      if (res.empty) { toast('Écris ta réponse avant de valider.', '✏️'); input.focus(); return; }
      if (res.ok) return resolve(true);
      wrongAttempt(q, res.near ? 'Presque ! Vérifie bien l’orthographe : une lettre ne va pas.' : null);
      if (!P.s.answered) setTimeout(() => { const el = document.getElementById(id); if (el) { el.focus(); el.select(); } }, 30);
    };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
    area.appendChild(h('label', { for: id, class: 'label' }, 'Ta réponse en anglais :'));
    area.appendChild(h('div', { class: 'row gap typed-row' }, input,
      btn('Valider', submit, 'primary', { disabled: s.answered || null }),
      btn('Je ne sais pas', () => { if (!s.answered) { s.attempt = attemptsAllowed(); resolve(false); } }, 'ghost', { disabled: s.answered || null })));
  }

  // ---------- Build a Sentence : toucher ou glisser-déposer ----------
  function renderBuild(area, q, v) {
    const s = P.s;
    s.built = s.built || [];
    const target = h('div', { class: 'build-target', role: 'list', 'aria-label': 'Ta phrase' });
    const bank = h('div', { class: 'build-bank', role: 'list', 'aria-label': 'Mots disponibles' });
    const redraw = () => {
      target.innerHTML = ''; bank.innerHTML = '';
      if (!s.built.length) target.appendChild(h('span', { class: 'placeholder' }, 'Touche les mots dans l’ordre (ou fais-les glisser ici).'));
      s.built.forEach((t, k) => target.appendChild(tokenBtn(t, 'placed', () => { if (s.answered) return; s.built.splice(k, 1); redraw(); }, k)));
      v.tokens.filter(t => !s.built.includes(t)).forEach(t => bank.appendChild(tokenBtn(t, 'free', () => { if (s.answered) return; s.built.push(t); redraw(); })));
      if (q.end && s.built.length) target.appendChild(h('span', { class: 'end-punct', 'aria-hidden': 'true' }, q.end));
    };
    function tokenBtn(t, state, onClick, k) {
      const b = h('button', { type: 'button', class: 'token ' + state, role: 'listitem', draggable: s.answered ? 'false' : 'true', lang: 'en',
        'aria-label': t.w + (state === 'placed' ? ' (retirer)' : ' (ajouter)'), disabled: s.answered || null,
        on: { click: () => { AE.audio.click(); onClick(); } } }, t.w);
      b.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', String(t.i)); e.dataTransfer.effectAllowed = 'move'; b.classList.add('dragging'); });
      b.addEventListener('dragend', () => b.classList.remove('dragging'));
      if (state === 'placed') {
        b.addEventListener('dragover', e => e.preventDefault());
        b.addEventListener('drop', e => {
          e.preventDefault(); e.stopPropagation();
          const tok = v.tokens.find(x => String(x.i) === e.dataTransfer.getData('text/plain'));
          if (!tok || s.answered) return;
          const from = s.built.indexOf(tok);
          if (from >= 0) s.built.splice(from, 1);
          s.built.splice(s.built.indexOf(t) >= 0 ? s.built.indexOf(t) : k, 0, tok);
          redraw();
        });
      }
      return b;
    }
    [target, bank].forEach(zone => {
      zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('over'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('over'));
      zone.addEventListener('drop', e => {
        e.preventDefault(); zone.classList.remove('over');
        const tok = v.tokens.find(x => String(x.i) === e.dataTransfer.getData('text/plain'));
        if (!tok || s.answered) return;
        const from = s.built.indexOf(tok);
        if (from >= 0) s.built.splice(from, 1);
        if (zone === target) s.built.push(tok);
        redraw();
      });
    });
    redraw();
    area.appendChild(target);
    area.appendChild(bank);
    area.appendChild(h('div', { class: 'row gap' },
      btn('Effacer', () => { if (!s.answered) { s.built = []; redraw(); } }, 'ghost', { disabled: s.answered || null }),
      btn('Valider ma phrase', () => {
        if (s.answered) return;
        if (s.built.length !== v.tokens.length) { toast('Utilise tous les mots avant de valider.', '🧱'); return; }
        const res = AE.engine.check(q, s.built.map(t => t.w));
        if (res.ok) resolve(true); else wrongAttempt(q);
      }, 'primary', { disabled: s.answered || null })));
  }

  // ---------- Match It : toucher un mot puis sa traduction (ou glisser) ----------
  function renderMatch(area, q, v) {
    const s = P.s;
    s.matched = s.matched || [];
    s.mistakes = s.mistakes || 0;
    const left = h('div', { class: 'match-col', role: 'group', 'aria-label': 'Mots anglais' });
    const right = h('div', { class: 'match-col', role: 'group', 'aria-label': 'Traductions' });
    let sel = null;
    const tryPair = (li, ri, rb) => {
      const lb = left.querySelector('[data-i="' + li + '"]');
      if (li === ri) {
        s.matched.push(li);
        [lb, rb].forEach(b => { b.classList.add('matched'); b.disabled = true; b.classList.remove('selected'); });
        AE.audio.sfx('correct');
        announce('Bonne paire !');
        if (s.matched.length === v.left.length) resolve(s.mistakes === 0, { mistakes: s.mistakes });
      } else {
        s.mistakes++;
        rb.classList.add('shake'); setTimeout(() => rb.classList.remove('shake'), 500);
        AE.audio.sfx('incorrect');
        announce('Ce n’est pas la bonne paire, essaie encore.');
      }
    };
    v.left.forEach(l => {
      const b = h('button', { type: 'button', class: 'match-item', 'data-i': String(l.i), lang: 'en', draggable: 'true',
        on: { click: () => { AE.audio.click(); left.querySelectorAll('.selected').forEach(x => x.classList.remove('selected')); sel = l.i; b.classList.add('selected'); } } }, l.t);
      b.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', String(l.i)); sel = l.i; });
      if (s.matched.includes(l.i)) { b.classList.add('matched'); b.disabled = true; }
      left.appendChild(b);
    });
    v.right.forEach(r => {
      const b = h('button', { type: 'button', class: 'match-item', 'data-i': String(r.i),
        on: { click: () => { if (sel == null) { toast('Choisis d’abord un mot anglais à gauche.', '👈'); return; } tryPair(sel, r.i, b); sel = null; } } },
        r.v ? visual(r.v) : null, h('span', null, r.t));
      b.addEventListener('dragover', e => e.preventDefault());
      b.addEventListener('drop', e => { e.preventDefault(); const li = Number(e.dataTransfer.getData('text/plain')); if (!isNaN(li)) tryPair(li, r.i, b); sel = null; });
      if (s.matched.includes(r.i)) { b.classList.add('matched'); b.disabled = true; }
      right.appendChild(b);
    });
    area.appendChild(h('p', { class: 'hint-inline' }, 'Touche un mot anglais, puis sa traduction. Tu peux aussi faire glisser le mot sur sa traduction.'));
    area.appendChild(h('div', { class: 'match' }, left, right));
  }

  // ---------- Essais, indices, corrections ----------
  function wrongAttempt(q, extra) {
    const s = P.s;
    s.attempt = (s.attempt || 0) + 1;
    AE.audio.sfx('incorrect');
    if (s.attempt < attemptsAllowed()) {
      const hint = s.doom ? 'Ce n’est pas ça. Un seul nouvel essai.' : (q.hint || 'Relis bien la consigne.');
      showFeedback({ type: 'retry', text: extra || 'Pas tout à fait… Essaie encore !', hint });
      s.lastFeedback = { type: 'retry', text: extra || 'Pas tout à fait… Essaie encore !', hint };
      announce((extra || 'Pas tout à fait. Essaie encore.') + ' Indice : ' + hint);
    } else resolve(false);
  }

  function correctText(q) {
    if (q.kind === 'choice') return q.options[0].t;
    if (q.kind === 'build') return q.answer;
    if (q.kind === 'typed') return q.answer;
    if (q.kind === 'match') return q.pairs.map(p => p.en + ' = ' + p.fr).join(' · ');
    return '';
  }

  function resolve(correct, extra) {
    const s = P.s;
    if (s.answered) return;
    stopQuestionTimer();
    const q = currentQ();
    s.answered = true;
    AE.speech.stop();
    const firstTry = correct && (q.kind === 'match' ? (extra && extra.mistakes === 0) : (s.attempt || 0) === 0);
    const matchedLate = q.kind === 'match' && !correct && s.matched && s.matched.length === (s.view.left || []).length;
    const eventually = correct || matchedLate;
    const pts = firstTry ? 1 : (eventually ? 0.5 : 0);
    s.score += pts; s.maxScore += 1;
    s.results.push({ q, firstTry, correct: eventually, given: givenText(q) });
    if (s.doom) AE.doomUI.record(q, firstTry);
    else if (s.mode !== 'placement') AE.progress.recordAnswer(q, { firstTry, correct: eventually }, s.sessionId);
    AE.audio.sfx(eventually ? 'correct' : 'incorrect');
    const pool = s.doom ? DOOM_PRAISE : PRAISE;
    const fb = {
      type: firstTry ? 'right' : (eventually ? 'late' : 'wrong'),
      text: firstTry ? pool[Math.floor(Math.random() * pool.length)] : (eventually ? 'C’est ça, bien rattrapé !' : 'La bonne réponse était : « ' + correctText(q) + ' »'),
      explain: q.explain
    };
    s.lastFeedback = fb;
    announce(fb.text + (fb.explain ? ' ' + fb.explain : ''));
    // redessiner pour afficher l'état final (bonne réponse surlignée, dialogue complet…)
    AE.app.route();
    if (s.mode === 'timed') { setTimeout(() => { if (P.s === s && s.answered) next(); }, firstTry ? 700 : 1500); }
  }

  function givenText(q) {
    const s = P.s;
    if (q.kind === 'typed') return s.typedValue || '';
    if (q.kind === 'build') return (s.built || []).map(t => t.w).join(' ');
    return '';
  }

  function showFeedback(fb) {
    const el = document.getElementById('feedback');
    if (!el) return;
    el.innerHTML = '';
    el.className = 'feedback show ' + fb.type;
    const s = P.s;
    const q = currentQ();
    const mood = fb.type === 'right' ? 'happy' : fb.type === 'retry' ? 'wow' : fb.type === 'late' ? 'happy' : 'sad';
    el.appendChild(h('div', { class: 'fb-head' }, s.doom ? h('span', { class: 'fb-icon', 'aria-hidden': 'true' }, fb.type === 'right' ? '✔' : fb.type === 'retry' ? '⚠' : '✖') : mascot(mood, 44),
      h('p', { class: 'fb-title' }, (fb.type === 'right' || fb.type === 'late' ? '✓ ' : fb.type === 'retry' ? '↻ ' : '✗ ') + fb.text)));
    if (fb.hint) el.appendChild(h('p', { class: 'fb-hint' }, h('strong', null, 'Indice : '), fb.hint));
    if (fb.explain && fb.type !== 'retry') el.appendChild(h('p', { class: 'fb-explain' }, fb.explain));
    if (fb.type !== 'retry') {
      const row = h('div', { class: 'row gap' });
      if (q.say && (q.sayAfter || q.hideText)) row.appendChild(speakBtn(q.say, { label: 'Réécouter', cls: 'small' }));
      if (s.mode !== 'timed') row.appendChild(btn(isLast() ? 'Voir mes résultats →' : 'Continuer →', next, 'primary big', { id: 'next-btn' }));
      el.appendChild(row);
      if (q.sayAfter && q.say && AE.speech.available() && !s.doom && fb.type !== 'wrong') setTimeout(() => { if (P.s === s && s.answered && currentQ() === q) AE.speech.speak(q.say); }, 500);
    }
  }

  function isLast() { const s = P.s; return !s.endless && s.index >= s.questions.length - 1; }

  function next() {
    const s = P.s;
    AE.speech.stop();
    s.index++;
    ['answered', 'attempt', 'disabledOpts', 'typedValue', 'built', 'matched', 'mistakes', 'lastFeedback', 'view', 'autoPlayed', 'revealed'].forEach(k => { delete s[k]; });
    if (!s.endless && s.index >= s.questions.length) finish();
    else AE.app.route();
  }

  function quit() {
    const s = P.s;
    const answered = s.results.length;
    const leave = () => { stopAllTimers(); AE.speech.stop(); P.s = null; location.hash = s.doom ? '#/doom' : (s.theme ? '#/theme/' + s.theme : '#/map'); };
    if (!answered) { leave(); return; }
    AE.ui.confirm('Quitter la séance ?', 'Tes réponses déjà données sont enregistrées, mais la mission ne sera pas comptée comme terminée.', 'Quitter', leave);
  }

  // ---------- Chronomètres ----------
  function startTimers() {
    const s = P.s;
    const el = () => document.getElementById('timer');
    if (s.timeLimit) {
      if (!s.deadline) s.deadline = Date.now() + s.timeLimit * 1000;
      clearInterval(s.globalTimer);
      const tick = () => {
        const left = Math.max(0, Math.ceil((s.deadline - Date.now()) / 1000));
        if (el()) { el().textContent = '⏱ ' + left + ' s'; el().classList.toggle('low', left <= 10); }
        if (left <= 0) { clearInterval(s.globalTimer); finish(); }
      };
      tick();
      s.globalTimer = setInterval(tick, 250);
    }
    if (s.perQuestion && !s.answered) {
      if (!s.qDeadline) s.qDeadline = Date.now() + s.perQuestion * 1000;
      clearInterval(s.qTimer);
      const tick = () => {
        const left = Math.max(0, Math.ceil((s.qDeadline - Date.now()) / 1000));
        if (el()) { el().textContent = '⏱ ' + left + ' s'; el().classList.toggle('low', left <= 7); }
        if (left <= 0) { clearInterval(s.qTimer); if (!s.answered) { s.attempt = attemptsAllowed(); announce('Temps écoulé.'); resolve(false); } }
      };
      tick();
      s.qTimer = setInterval(tick, 250);
    }
  }
  function stopQuestionTimer() { const s = P.s; if (s) { clearInterval(s.qTimer); delete s.qDeadline; } }
  function stopAllTimers() { const s = P.s; if (s) { clearInterval(s.qTimer); clearInterval(s.globalTimer); } }
  P.stopTimers = stopAllTimers;

  // ------------------------------------------------------------------ RÉSULTATS
  function finish() {
    const s = P.s;
    if (!s || s.phase === 'results') return;
    stopAllTimers();
    AE.speech.stop();
    s.phase = 'results';
    const n = s.results.length;
    const firstTry = s.results.filter(r => r.firstTry).length;
    const ratio = n ? s.score / n : 0;
    s.stars = AE.engine.stars(ratio);
    s.newBadges = [];
    if (s.doom) { AE.doomUI.finish(s); }
    else {
      const st = AE.progress.data().stats;
      if (n && firstTry === n && ['mission', 'daily', 'mixed'].includes(s.mode) && n >= 5) st.perfect++;
      if (s.mode === 'mission' && n) AE.progress.saveMission(s.theme, s.missionId, s.level, s.stars, s.score);
      if (s.mode === 'daily' && n && st.daily[s.date] == null) st.daily[s.date] = firstTry;
      if (s.mode === 'review' && n) st.reviews++;
      if (s.mode === 'mixed' && n) st.mixed++;
      if (s.mode === 'practice' && n) st.practice++;
      if (s.mode === 'timed') st.timedBest[s.level] = Math.max(st.timedBest[s.level] || 0, s.results.filter(r => r.correct).length);
      if (s.mode === 'placement') s.suggested = placementLevel(s);
      AE.progress.save();
      s.newBadges = AE.badges.check();
    }
    AE.audio.sfx('victory');
    if (s.newBadges.length) setTimeout(() => AE.audio.sfx('badge'), 900);
    location.hash = '#/play';
    AE.app.route();
  }
  P.finish = finish;

  function placementLevel(s) {
    const byLevel = {};
    s.results.forEach(r => { const l = r.q.level; byLevel[l] = byLevel[l] || [0, 0]; byLevel[l][1]++; if (r.firstTry) byLevel[l][0]++; });
    let lvl = 1;
    for (let l = 1; l <= 5; l++) {
      const b = byLevel[l];
      if (b && b[0] >= 1) lvl = l; else break;
    }
    AE.progress.data().stats.placement = { level: lvl, date: U.today() };
    return lvl;
  }

  function renderResults(main) {
    const s = P.s;
    if (s.doom) { AE.doomUI.results(main, s); return; }
    const n = s.results.length;
    const ok = s.results.filter(r => r.firstTry).length;
    const wrap = h('div', { class: 'results' });
    const titleTxt = s.mode === 'placement' ? 'Parcours de découverte terminé !' : s.mode === 'timed' ? 'Temps écoulé !' : 'Mission accomplie !';
    wrap.appendChild(h('div', { class: 'card results-head' },
      mascot('happy', 80),
      h('h1', { class: 'focus-target', tabindex: '-1' }, titleTxt),
      s.mode === 'placement' ? null : stars(s.stars),
      h('p', { class: 'big-score' }, s.mode === 'timed'
        ? s.results.filter(r => r.correct).length + ' bonne' + (s.results.filter(r => r.correct).length > 1 ? 's' : '') + ' réponse' + (s.results.filter(r => r.correct).length > 1 ? 's' : '') + ' en ' + AE.config.timedSeconds + ' secondes'
        : ok + ' / ' + n + ' réussie' + (ok > 1 ? 's' : '') + ' du premier coup'),
      h('p', null, encourage(s, n ? ok / n : 0))));

    if (s.mode === 'placement') {
      const lvl = AE.config.levels[s.suggested - 1];
      wrap.appendChild(h('div', { class: 'card' },
        h('h2', null, 'Ton point de départ conseillé'),
        h('p', { class: 'level-suggest' }, lvl.icon + ' Niveau ' + lvl.n + ' — ' + lvl.name),
        h('p', null, 'Ce n’est qu’une suggestion : tu peux changer de niveau quand tu veux, dans un sens comme dans l’autre.'),
        h('div', { class: 'row gap' }, btn('Choisir ce niveau', () => { AE.progress.setLevel(lvl.n); AE.app.refreshHeader(); location.hash = '#/map'; }, 'primary'),
          btn('Choisir un autre niveau', () => AE.app.levelPicker(), 'ghost'))));
    }

    if (s.newBadges && s.newBadges.length) {
      wrap.appendChild(h('div', { class: 'card badges-new', role: 'status' },
        h('h2', null, '🏅 Nouveau' + (s.newBadges.length > 1 ? 'x badges' : ' badge') + ' !'),
        h('div', { class: 'badge-grid' }, s.newBadges.map(b => h('div', { class: 'badge earned' }, h('span', { class: 'badge-icon', 'aria-hidden': 'true' }, b.icon), h('strong', null, b.name), h('span', null, b.desc))))));
    }

    // Mots travaillés : état d'apprentissage
    const refs = [];
    s.results.forEach(r => r.q.refs.w.concat(r.q.refs.x).forEach(id => { if (!refs.includes(id)) refs.push(id); }));
    if (refs.length && s.mode !== 'placement') {
      const lab = { new: 'nouveau', seen: 'découvert', learning: 'en cours', mastered: 'maîtrisé ✓' };
      wrap.appendChild(h('div', { class: 'card' },
        h('h2', null, '📒 Ton carnet'),
        h('ul', { class: 'chips' }, refs.slice(0, 24).map(id => {
          const kind = C().expr[id] ? 'x' : 'w';
          const item = kind === 'x' ? C().expr[id] : C().words[id];
          const st = AE.progress.state(kind, id);
          return h('li', { class: 'chip state-' + st }, h('span', { lang: 'en' }, item ? item.en : id), ' · ', lab[st]);
        })),
        h('p', { class: 'muted' }, 'Un mot devient « maîtrisé » après au moins trois bonnes réponses données lors de séances différentes.')));
    }

    // Corrections détaillées
    wrap.appendChild(h('div', { class: 'card' },
      h('h2', null, '🔎 Corrections'),
      h('ol', { class: 'corrections' }, s.results.map(r => h('li', { class: r.firstTry ? 'ok' : (r.correct ? 'late' : 'ko') },
        h('p', { class: 'corr-q' }, h('span', { class: 'corr-mark', 'aria-hidden': 'true' }, r.firstTry ? '✓' : r.correct ? '↻' : '✗'),
          h('span', { class: 'sr-only' }, r.firstTry ? 'Réussi du premier coup. ' : r.correct ? 'Réussi au second essai. ' : 'À revoir. '),
          summaryOf(r.q)),
        h('p', { class: 'corr-a' }, 'Réponse : ', h('strong', { lang: 'en' }, correctText(r.q)), r.given && !r.correct ? h('span', { class: 'muted' }, ' (tu as écrit : « ' + r.given + ' »)') : null),
        h('details', null, h('summary', null, 'Explication'), h('p', null, r.q.explain)))))));

    const actions = h('div', { class: 'row gap center' });
    if (s.mode === 'mission') actions.appendChild(btn('↻ Rejouer la mission', () => P.start(AE.engine.mission(C().themes[s.theme], s.missionId, AE.progress.level())), 'primary'));
    if (s.mode === 'review') actions.appendChild(btn('↻ Continuer à réviser', () => AE.app.go('#/review'), 'primary'));
    if (s.mode === 'timed') actions.appendChild(btn('↻ Rejouer', () => P.start(AE.engine.timed(AE.progress.level())), 'primary'));
    if (s.mode === 'mixed') actions.appendChild(btn('↻ Nouveau parcours', () => AE.app.go('#/challenges'), 'primary'));
    if (s.mode === 'practice') actions.appendChild(btn('↻ Recommencer', () => P.start(AE.engine.practice(s.themes, s.game, s.level)), 'primary'));
    if (s.theme) actions.appendChild(btn('Choisir une autre mission', () => AE.app.go('#/theme/' + s.theme), 'ghost'));
    actions.appendChild(btn('🗺️ Retour à la carte', () => AE.app.go('#/map'), 'ghost'));
    wrap.appendChild(actions);
    main.appendChild(wrap);
    focusFirst(main);
  }

  function encourage(s, ratio) {
    if (s.mode === 'placement') return 'Merci ! Ces quelques questions servent seulement à te proposer un niveau de départ.';
    if (ratio >= 0.9) return 'Impressionnant ! Tu peux essayer le niveau au-dessus quand tu veux.';
    if (ratio >= 0.65) return 'Très bon travail ! Continue comme ça.';
    if (ratio >= 0.4) return 'Beau travail : chaque essai te fait progresser. Les mots difficiles reviendront en révision.';
    return 'Tu as osé, c’est le plus important ! Les mots difficiles reviendront bientôt pour t’entraîner.';
  }

  function summaryOf(q) {
    const t = q.question || q.en || (q.clues && q.clues[0]) || q.instr;
    const g = GAMES()[q.game];
    return (g ? g.icon + ' ' : '') + (q.hideText ? q.instr + ' (' + (q.reveal || q.say) + ')' : t);
  }

  function focusFirst(main) {
    setTimeout(() => {
      const s = P.s;
      if (s && s.lastFeedback && s.answered) { const b = document.getElementById('next-btn'); if (b) { b.focus(); return; } }
      const t = main.querySelector('.focus-target');
      if (t) t.focus({ preventScroll: false });
    }, 30);
  }

  // Raccourcis clavier : chiffres pour choisir, Entrée pour continuer
  document.addEventListener('keydown', e => {
    const s = P.s;
    if (!s || s.phase !== 'question' || document.body.classList.contains('has-modal')) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;
    if (/^[1-9]$/.test(e.key) && !s.answered) {
      const b = document.querySelector('.choice[data-i="' + (Number(e.key) - 1) + '"]');
      if (b && !b.disabled) { e.preventDefault(); b.click(); }
    }
  });
})(window.AE);
