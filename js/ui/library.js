/* Carnet de vocabulaire (recherche, filtres), collection d'expressions, bibliothèque de dialogues. */
(function (AE) {
  'use strict';
  const { h, btn, speakBtn, modal } = AE.ui;
  const S = AE.screens;
  const C = () => AE.content;
  const U = AE.util;

  function tabs(active) {
    const items = [['#/notebook', '📒 Mots'], ['#/expressions', '💬 Expressions'], ['#/dialogues', '🎭 Dialogues']];
    return h('nav', { class: 'tabs', 'aria-label': 'Sections du carnet' }, items.map(([href, label]) =>
      h('a', { href, class: 'tab' + (href === active ? ' active' : ''), 'aria-current': href === active ? 'page' : null }, label)));
  }

  const fold = s => U.normalize(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
  function themeSelect(id, value) {
    return h('select', { id }, h('option', { value: '' }, 'Tous les thèmes'), C().meta.map(m => h('option', { value: m.id, selected: m.id === value || null }, m.num + '. ' + m.en)));
  }

  // ---------------------------------------------------------------- MOTS
  const wf = { q: '', theme: '', state: '', diff: '', limit: 60 };
  S.notebook = function (main) {
    AE.app.loading(main, 'Ouverture du carnet…');
    return AE.loader.allThemes().then(() => {
      main.innerHTML = '';
      main.appendChild(h('h1', null, '📒 Mon carnet d’anglais'));
      main.appendChild(tabs('#/notebook'));
      const counts = AE.progress.counts('w');
      main.appendChild(h('p', { class: 'muted' }, C().allWords().length + ' mots · ' + counts.mastered + ' maîtrisés ● · ' + counts.learning + ' en cours ◑ · ' + counts.seen + ' découverts ◔'));
      const search = h('input', { id: 'nb-q', type: 'search', placeholder: 'Chercher un mot (anglais ou français)', value: wf.q, autocomplete: 'off' });
      const theme = themeSelect('nb-theme', wf.theme);
      const state = h('select', { id: 'nb-state' }, [['', 'Tous les états'], ['new', 'Pas encore vus ○'], ['seen', 'Découverts ◔'], ['learning', 'En cours ◑'], ['mastered', 'Maîtrisés ●']].map(([v, l]) => h('option', { value: v, selected: v === wf.state || null }, l)));
      const diff = h('select', { id: 'nb-diff' }, [['', 'Toutes difficultés'], ['1', '★ Facile'], ['2', '★★ Moyen'], ['3', '★★★ Difficile']].map(([v, l]) => h('option', { value: v, selected: v === wf.diff || null }, l)));
      const result = h('div', { 'aria-live': 'polite' });
      const draw = () => {
        wf.q = search.value; wf.theme = theme.value; wf.state = state.value; wf.diff = diff.value;
        const q = fold(wf.q);
        const list = C().allWords().filter(w => (!wf.theme || w.theme === wf.theme) && (!wf.diff || String(w.diff) === wf.diff) &&
          (!wf.state || AE.progress.state('w', w.id) === wf.state) && (!q || fold(w.en).includes(q) || fold(w.fr).includes(q) || w.variants.some(v => fold(v).includes(q))));
        result.innerHTML = '';
        result.appendChild(h('p', { class: 'small muted' }, list.length + ' résultat' + (list.length > 1 ? 's' : '')));
        const grid = h('ul', { class: 'word-grid' });
        list.slice(0, wf.limit).forEach(w => grid.appendChild(h('li', null, AE.ui.wordTile(w))));
        result.appendChild(grid);
        if (list.length > wf.limit) result.appendChild(btn('Afficher plus de mots', () => { wf.limit += 60; draw(); }, 'ghost'));
      };
      [search].forEach(el => el.addEventListener('input', () => { wf.limit = 60; draw(); }));
      [theme, state, diff].forEach(el => el.addEventListener('change', () => { wf.limit = 60; draw(); }));
      main.appendChild(h('div', { class: 'filters card' },
        h('label', { for: 'nb-q', class: 'sr-only' }, 'Recherche'), search,
        h('label', { for: 'nb-theme', class: 'sr-only' }, 'Thème'), theme,
        h('label', { for: 'nb-state', class: 'sr-only' }, 'État'), state,
        h('label', { for: 'nb-diff', class: 'sr-only' }, 'Difficulté'), diff));
      main.appendChild(result);
      draw();
    });
  };

  // ---------------------------------------------------------------- EXPRESSIONS
  const xf = { q: '', theme: '' };
  S.expressions = function (main) {
    AE.app.loading(main);
    return AE.loader.allThemes().then(() => {
      main.innerHTML = '';
      main.appendChild(h('h1', null, '💬 Collection d’expressions'));
      main.appendChild(tabs('#/expressions'));
      const search = h('input', { id: 'ex-q', type: 'search', placeholder: 'Chercher une expression', value: xf.q, autocomplete: 'off' });
      const theme = themeSelect('ex-theme', xf.theme);
      const only = h('input', { type: 'checkbox', id: 'ex-note' });
      const result = h('div', { 'aria-live': 'polite' });
      const draw = () => {
        xf.q = search.value; xf.theme = theme.value;
        const q = fold(xf.q);
        const list = C().allExpressions().filter(x => (!xf.theme || x.theme === xf.theme) && (!only.checked || x.note) &&
          (!q || fold(x.en).includes(q) || fold(x.fr).includes(q) || fold(x.context).includes(q)));
        result.innerHTML = '';
        result.appendChild(h('p', { class: 'small muted' }, list.length + ' expression' + (list.length > 1 ? 's' : '')));
        result.appendChild(h('ul', { class: 'expr-list' }, list.map(x => h('li', null, AE.ui.exprTile(x)))));
      };
      search.addEventListener('input', draw); theme.addEventListener('change', draw); only.addEventListener('change', draw);
      main.appendChild(h('div', { class: 'filters card' },
        h('label', { for: 'ex-q', class: 'sr-only' }, 'Recherche'), search,
        h('label', { for: 'ex-theme', class: 'sr-only' }, 'Thème'), theme,
        h('label', { for: 'ex-note', class: 'check' }, only, ' Seulement les pièges de traduction ⚠️')));
      main.appendChild(result);
      draw();
    });
  };

  // ---------------------------------------------------------------- DIALOGUES
  S.dialogues = function (main, params) {
    AE.app.loading(main);
    return AE.loader.allThemes().then(() => {
      main.innerHTML = '';
      if (params[0]) { renderDialogue(main, C().dialogues[params.join('/')] || C().dialogues[params[0]]); return; }
      main.appendChild(h('h1', null, '🎭 Bibliothèque de dialogues'));
      main.appendChild(tabs('#/dialogues'));
      main.appendChild(h('p', { class: 'muted' }, C().allDialogues().length + ' courts dialogues à lire et à écouter.'));
      C().meta.forEach(m => {
        const t = C().themes[m.id];
        main.appendChild(h('section', { class: 'dlg-group' }, h('h2', null, m.icon + ' ', h('span', { lang: 'en' }, m.en)),
          h('ul', { class: 'dlg-list' }, t.dialogues.map(d => h('li', null,
            h('a', { href: '#/dialogues/' + encodeURIComponent(d.id), class: 'dlg-link' }, h('span', { lang: 'en' }, d.title), h('span', { class: 'chip small' }, 'Niveau ' + d.level), h('span', { class: 'small muted' }, d.lines.length + ' répliques')))))));
      });
    });
  };

  function renderDialogue(main, d) {
    if (!d) { AE.app.go('#/dialogues'); return; }
    main.appendChild(h('div', { class: 'row gap space' }, h('h1', { lang: 'en' }, '🎭 ' + d.title), btn('← Tous les dialogues', () => AE.app.go('#/dialogues'), 'ghost')));
    let showFr = false;
    const box = h('div', { class: 'dialogue big' });
    const draw = () => {
      box.innerHTML = '';
      const speakers = [];
      d.lines.forEach(l => {
        if (!speakers.includes(l[0])) speakers.push(l[0]);
        const side = speakers.indexOf(l[0]) % 2 ? 'right' : 'left';
        box.appendChild(h('div', { class: 'bubble ' + side },
          h('span', { class: 'who' }, l[0]), h('span', { class: 'said', lang: 'en' }, l[1]),
          showFr ? h('span', { class: 'fr' }, l[2]) : null,
          speakBtn(l[1], { label: 'Écouter', cls: 'tiny', aria: 'Écouter la réplique de ' + l[0] })));
      });
    };
    draw();
    let playing = false;
    const playAll = async () => {
      if (!AE.speech.available()) { AE.ui.toast(AE.speech.reason(), '🔇'); return; }
      playing = true;
      for (const l of d.lines) {
        if (!playing || !document.contains(box)) break;
        const ok = await AE.speech.speak(l[1]);
        if (!ok) break;
      }
      playing = false;
    };
    main.appendChild(h('div', { class: 'row gap' },
      btn('▶ Écouter tout le dialogue', playAll, 'primary'),
      btn('■ Arrêter', () => { playing = false; AE.speech.stop(); }, 'ghost'),
      btn('Afficher / masquer la traduction', () => { showFr = !showFr; draw(); }, 'ghost', { 'aria-pressed': 'false' })));
    main.appendChild(box);
    main.appendChild(h('p', { class: 'small muted' }, 'Thème : ' + C().themes[d.theme].meta.en + ' · niveau ' + d.level + '. Ce dialogue est aussi utilisé dans la mission « Dialogues et lecture ».'));
  }
})(window.AE);
