/* Écrans principaux : accueil, profils, carte, thème, découverte des mots, défis, révision. */
(function (AE) {
  'use strict';
  const { h, btn, mascot, stars, ring, toast, visual, speakBtn, modal } = AE.ui;
  const S = AE.screens;
  const C = () => AE.content;

  // ---------------------------------------------------------------- ACCUEIL
  S.home = function (main) {
    const profiles = AE.profiles.list();
    const hero = h('section', { class: 'hero card' },
      mascot('happy', 96),
      h('div', null,
        h('h1', null, 'Anglelio — Mission English'),
        h('p', { class: 'lead' }, 'Explore la carte, réussis des missions et remplis ton carnet d’anglais !'),
        h('p', { class: 'muted' }, 'Tout est enregistré sur cet appareil : aucun compte, aucune publicité.')));
    main.appendChild(hero);
    if (profiles.length) {
      main.appendChild(h('section', { class: 'card' },
        h('h2', null, 'Qui joue aujourd’hui ?'),
        h('div', { class: 'profile-grid' }, profiles.map(p => h('button', {
          type: 'button', class: 'profile-card' + (AE.profiles.activeId() === p.id ? ' current' : ''),
          on: { click: () => { AE.audio.click(); AE.profiles.select(p.id); afterProfile(); } }
        }, h('span', { class: 'avatar big', 'aria-hidden': 'true' }, p.avatar), h('span', { class: 'pname' }, p.name)))),
        h('div', { class: 'row gap' }, btn('＋ Nouveau profil', () => AE.app.go('#/profiles'), 'ghost'))));
    } else {
      main.appendChild(h('section', { class: 'card' }, h('h2', null, 'Crée ton profil pour commencer'), profileForm(null)));
    }
  };

  function afterProfile() {
    AE.app.refreshHeader();
    const d = AE.progress.data();
    if (d && !d.levelChosen) {
      AE.app.go('#/map');
      setTimeout(() => AE.app.levelPicker(), 60);
    } else AE.app.go('#/map');
  }

  function profileForm(existing, onDone) {
    let avatar = existing ? existing.avatar : AE.profiles.AVATARS[Math.floor(Math.random() * AE.profiles.AVATARS.length)];
    const input = h('input', { id: 'pname', type: 'text', maxlength: '20', autocomplete: 'off', value: existing ? existing.name : '', placeholder: 'Prénom ou pseudo' });
    const grid = h('div', { class: 'avatar-grid', role: 'radiogroup', 'aria-label': 'Choisis ton avatar' });
    const draw = () => {
      grid.innerHTML = '';
      AE.profiles.AVATARS.forEach(a => grid.appendChild(h('button', {
        type: 'button', role: 'radio', 'aria-checked': String(a === avatar), class: 'avatar-opt' + (a === avatar ? ' on' : ''), 'aria-label': 'Avatar ' + a,
        on: { click: () => { AE.audio.click(); avatar = a; draw(); } }
      }, a)));
    };
    draw();
    const submit = e => {
      if (e) e.preventDefault();
      const name = input.value.trim();
      if (!name) { toast('Écris un prénom ou un pseudo.', '✏️'); input.focus(); return; }
      if (existing) { AE.profiles.rename(existing.id, name, avatar); AE.app.refreshHeader(); onDone && onDone(); }
      else { AE.profiles.create(name, avatar); afterProfile(); }
    };
    return h('form', { class: 'profile-form', on: { submit } },
      h('label', { for: 'pname' }, 'Ton prénom ou un pseudo'), input,
      h('p', { class: 'muted small' }, 'Conseil : un pseudo suffit. Le nom reste uniquement sur cet appareil.'),
      h('p', { class: 'label' }, 'Ton avatar'), grid,
      h('button', { type: 'submit', class: 'btn primary big' }, existing ? 'Enregistrer' : 'Créer mon profil'));
  }

  // ---------------------------------------------------------------- PROFILS
  S.profiles = function (main) {
    main.appendChild(h('h1', null, '👤 Profils'));
    const list = AE.profiles.list();
    const cur = AE.profiles.activeId();
    if (list.length) {
      main.appendChild(h('section', { class: 'card' }, h('h2', null, 'Profils de cet appareil'),
        h('ul', { class: 'profile-list' }, list.map(p => h('li', { class: p.id === cur ? 'current' : '' },
          h('span', { class: 'avatar big', 'aria-hidden': 'true' }, p.avatar),
          h('span', { class: 'pname' }, p.name, p.id === cur ? h('span', { class: 'chip small' }, 'actif') : null),
          h('span', { class: 'row gap' },
            p.id !== cur ? btn('Jouer', () => { AE.profiles.select(p.id); afterProfile(); }, 'primary small') : null,
            btn('Modifier', () => modal({ title: 'Modifier le profil', body: profileForm(p, () => { AE.ui.close(); AE.app.route(); }), actions: [{ label: 'Annuler' }] }), 'ghost small'),
            btn('Supprimer', () => AE.ui.confirm('Supprimer « ' + p.name + ' » ?', 'Toute la progression de ce profil sera effacée. Cette action est définitive.', 'Supprimer', () => { AE.profiles.remove(p.id); AE.app.route(); toast('Profil supprimé', '🗑️'); }, true), 'danger small')))))));
    }
    main.appendChild(h('section', { class: 'card' }, h('h2', null, 'Nouveau profil'), profileForm(null)));
  };

  // ---------------------------------------------------------------- CARTE
  S.map = function (main) {
    const p = AE.profiles.active();
    const lvl = AE.config.levels[AE.progress.level() - 1];
    const due = AE.progress.due(50).length;
    const streak = AE.progress.streak();
    const daily = AE.progress.data().stats.daily[AE.util.today()];
    main.appendChild(h('div', { class: 'map-head' },
      h('div', null, h('h1', null, 'Salut ' + p.name + ' ! ' + p.avatar), h('p', { class: 'muted' }, 'Niveau ' + lvl.n + ' — ' + lvl.name + (streak > 1 ? ' · 🔥 ' + streak + ' jours de suite' : ''))),
      h('div', { class: 'row gap wrap' },
        btn(daily != null ? '☀️ Défi du jour ✓' : '☀️ Défi du jour', () => startDaily(), daily != null ? 'ghost' : 'primary'),
        btn('🔁 Révision' + (due ? ' (' + due + ')' : ''), () => AE.app.go('#/review'), 'ghost'))));
    const grid = h('ol', { class: 'map-grid', 'aria-label': 'Les 20 lieux de la carte' });
    AE.content.meta.forEach((m, i) => {
      const c = AE.progress.themeCounts(m.id);
      const done = AE.engine.MISSIONS.filter(mi => AE.progress.missionDone(m.id, mi.id)).length;
      const earned = AE.badges.earned('theme-' + m.id);
      grid.appendChild(h('li', { class: 'map-cell ' + (i % 2 ? 'odd' : 'even') },
        h('a', { href: '#/theme/' + m.id, class: 'place', style: { '--c': m.color }, on: { click: () => AE.audio.click() },
          'aria-label': m.num + '. ' + m.place + ' : ' + m.en + '. ' + c.mastered + ' mots maîtrisés sur 30, ' + done + ' missions sur 7.' },
        h('span', { class: 'place-num', 'aria-hidden': 'true' }, m.num),
        h('span', { class: 'place-icon', 'aria-hidden': 'true' }, m.icon),
        h('span', { class: 'place-name' }, m.place),
        h('span', { class: 'place-theme', lang: 'en' }, m.en),
        h('span', { class: 'place-foot', 'aria-hidden': 'true' },
          h('span', { class: 'mini-bar' }, h('span', { style: { width: Math.round(c.mastered / 30 * 100) + '%' } })),
          h('span', { class: 'place-stat' }, (earned ? '🏅 ' : '') + done + '/7')))));
    });
    main.appendChild(grid);
  };

  function startDaily() {
    AE.loader.allThemes().then(() => AE.player.start(AE.engine.daily(AE.progress.level())));
  }
  AE.app.startDaily = startDaily;

  // ---------------------------------------------------------------- THÈME
  S.theme = function (main, params) {
    const meta = C().meta.find(m => m.id === params[0]);
    if (!meta) { AE.app.go('#/map'); return; }
    AE.app.loading(main, 'Chargement de ' + meta.place + '…');
    return AE.loader.theme(meta.id).then(t => {
      main.innerHTML = '';
      const level = AE.progress.level();
      const c = AE.progress.themeCounts(t.id);
      main.appendChild(h('section', { class: 'card theme-head', style: { '--c': meta.color } },
        h('span', { class: 'theme-icon', 'aria-hidden': 'true' }, meta.icon),
        h('div', null,
          h('p', { class: 'eyebrow' }, 'Lieu ' + meta.num + ' · ' + meta.place),
          h('h1', { lang: 'en' }, meta.en),
          h('p', { class: 'muted' }, meta.fr),
          h('p', null, t.intro),
          h('p', { class: 'small' }, '📒 ' + c.mastered + ' mots maîtrisés · ' + c.learning + ' en cours · ' + c.seen + ' découverts (sur ' + t.words.length + ')')),
        ring(c.mastered / t.words.length, c.mastered + ' mots maîtrisés sur ' + t.words.length)));
      main.appendChild(h('div', { class: 'row gap wrap' },
        btn('📒 Découvrir les mots', () => AE.app.go('#/learn/' + t.id), 'ghost'),
        btn('🧠 Leçons de grammaire', () => lessonsModal(t), 'ghost'),
        btn('🎯 Entraînement libre', () => AE.app.go('#/practice/' + t.id), 'ghost')));
      const lvl = AE.config.levels[level - 1];
      main.appendChild(h('h2', null, 'Missions — ', h('button', { type: 'button', class: 'link', on: { click: () => AE.app.levelPicker() } }, lvl.icon + ' Niveau ' + level + ' (' + lvl.name + ')')));
      const list = h('ul', { class: 'mission-list' });
      AE.engine.MISSIONS.forEach(m => {
        const avail = AE.engine.missionAvailable(t, m.id, level);
        const st = AE.progress.missionStars(t.id, m.id, level);
        const minL = AE.engine.missionMinLevel(t, m.id);
        list.appendChild(h('li', { class: 'mission' + (avail ? '' : ' locked') },
          h('span', { class: 'mission-icon', 'aria-hidden': 'true' }, m.icon),
          h('div', { class: 'mission-body' }, h('h3', null, m.title), h('p', { class: 'muted small' }, m.desc),
            avail ? stars(st) : h('p', { class: 'small' }, 'Cette mission commence au niveau ' + minL + '.')),
          avail ? btn(st ? '↻ Rejouer' : '▶ Jouer', () => AE.player.start(AE.engine.mission(t, m.id, level)), st ? 'ghost' : 'primary', { 'aria-label': (st ? 'Rejouer ' : 'Jouer ') + m.title })
            : btn('Passer au niveau ' + minL, () => { AE.progress.setLevel(minL); AE.app.refreshHeader(); AE.app.route(); toast('Niveau ' + minL + ' choisi', AE.config.levels[minL - 1].icon); }, 'ghost small')));
      });
      main.appendChild(list);
    });
  };

  function lessonsModal(t) {
    const tags = [];
    t.lessons.forEach(x => { if (!tags.includes(x)) tags.push(x); });
    t.questions.forEach(q => (q.tags || []).forEach(x => { if (!tags.includes(x) && C().lessons[x]) tags.push(x); }));
    modal({
      title: '🧠 Les notions de ce thème', cls: 'wide',
      body: h('div', { class: 'lessons' }, tags.map(tag => {
        const l = C().lessons[tag];
        return h('details', { class: 'lesson', open: tag === tags[0] || null, on: { toggle: e => { if (e.target.open) AE.progress.markLesson(tag); } } },
          h('summary', null, (AE.progress.lessonSeen(tag) ? '✓ ' : '• ') + l.title),
          h('p', null, l.text),
          h('ul', { class: 'examples' }, l.examples.map(ex => h('li', null, h('span', { class: 'en', lang: 'en' }, ex[0]), ' — ', h('span', { class: 'fr' }, ex[1]), ' ', speakBtn(ex[0], { label: 'Écouter', cls: 'small' })))));
      }))
    });
  }

  // ---------------------------------------------------------------- DÉCOUVRIR LES MOTS D'UN THÈME
  S.learn = function (main, params) {
    AE.app.loading(main);
    return AE.loader.theme(params[0]).then(t => {
      main.innerHTML = '';
      main.appendChild(h('div', { class: 'row gap space' }, h('h1', null, t.meta.icon + ' Les mots : ', h('span', { lang: 'en' }, t.meta.en)), btn('← Retour au thème', () => AE.app.go('#/theme/' + t.id), 'ghost')));
      main.appendChild(h('p', { class: 'muted' }, 'Touche une carte pour voir l’exemple et écouter le mot. Les mots consultés sont marqués comme « découverts ».'));
      const grid = h('ul', { class: 'word-grid' });
      t.words.forEach(w => grid.appendChild(h('li', null, wordTile(w))));
      main.appendChild(grid);
      main.appendChild(h('h2', null, '💬 Les expressions'));
      main.appendChild(h('ul', { class: 'expr-list' }, t.expressions.map(x => h('li', null, exprTile(x)))));
    });
  };

  function wordTile(w) {
    const st = AE.progress.state('w', w.id);
    return h('button', { type: 'button', class: 'word-tile state-' + st, on: { click: () => { AE.audio.click(); wordDetail(w); } }, 'aria-label': w.en + ', ' + w.fr + ', ' + stateLabel(st) },
      w.emoji ? visual(w.emoji) : h('span', { class: 'vis vis-text', 'aria-hidden': 'true' }, w.en.charAt(0).toUpperCase()),
      h('span', { class: 'wt-en', lang: 'en' }, w.en), h('span', { class: 'wt-fr' }, w.fr),
      h('span', { class: 'wt-state', 'aria-hidden': 'true' }, stateIcon(st)));
  }
  function exprTile(x) {
    const st = AE.progress.state('x', x.id);
    return h('div', { class: 'expr-tile state-' + st },
      h('p', { class: 'et-en', lang: 'en' }, x.en, ' ', h('span', { class: 'wt-state', title: stateLabel(st) }, stateIcon(st))),
      h('p', { class: 'et-fr' }, x.fr),
      h('p', { class: 'small muted' }, 'On l’utilise ' + x.context + '.'),
      x.note ? h('p', { class: 'note small' }, '⚠️ ' + x.note) : null,
      h('p', { class: 'small', lang: 'en' }, h('em', null, x.example)), h('p', { class: 'small muted' }, x.exampleFr),
      h('div', { class: 'row gap' }, speakBtn(x.say, { id: x.id, cls: 'small' }), speakBtn(x.say, { id: x.id, slow: true, label: 'Lentement', cls: 'small' })));
  }
  function stateIcon(st) { return { new: '○', seen: '◔', learning: '◑', mastered: '●' }[st]; }
  function stateLabel(st) { return { new: 'pas encore vu', seen: 'découvert', learning: 'en cours d’apprentissage', mastered: 'maîtrisé' }[st]; }

  function wordDetail(w) {
    AE.progress.present('w', [w.id]);
    modal({
      title: w.en, cls: 'word-modal',
      body: h('div', { class: 'word-detail' },
        w.emoji ? h('div', { class: 'big-visual' }, visual(w.emoji)) : null,
        h('p', { class: 'word-fr' }, w.fr + ' · ' + (C().POS[w.pos] || w.pos) + ' · ' + '★'.repeat(w.diff)),
        h('div', { class: 'row gap' }, speakBtn(w.say, { id: w.id }), speakBtn(w.say, { id: w.id, slow: true, label: 'Lentement' })),
        h('div', { class: 'example' }, h('p', { class: 'en', lang: 'en' }, w.example), h('p', { class: 'fr' }, w.exampleFr), speakBtn(w.example, { label: 'Écouter la phrase', cls: 'small' })),
        w.variants.length ? h('p', { class: 'small' }, 'Variantes acceptées : ', h('span', { lang: 'en' }, w.variants.join(', '))) : null,
        h('p', { class: 'small muted' }, 'État : ' + stateLabel(AE.progress.state('w', w.id)) + ' · identifiant : ' + w.id))
    });
  }
  AE.ui.wordTile = wordTile; AE.ui.exprTile = exprTile; AE.ui.wordDetail = wordDetail; AE.ui.stateLabel = stateLabel; AE.ui.stateIcon = stateIcon;

  // ---------------------------------------------------------------- DÉFIS
  S.challenges = function (main) {
    const st = AE.progress.data().stats;
    const today = AE.util.today();
    const lvl = AE.progress.level();
    main.appendChild(h('h1', null, '🎯 Défis et entraînement'));
    const cards = h('div', { class: 'cards' });
    cards.appendChild(challengeCard('☀️', 'Défi du jour', 'Huit questions choisies pour aujourd’hui, les mêmes pour tous les profils de ce niveau. Il change chaque jour.',
      st.daily[today] != null ? 'Déjà relevé aujourd’hui : ' + st.daily[today] + ' réussite(s) du premier coup. Tu peux rejouer pour t’entraîner.' : 'Pas encore relevé aujourd’hui.',
      'Relever le défi', startDaily));
    cards.appendChild(challengeCard('🌍', 'Parcours mélangé', 'Dix questions tirées de plusieurs thèmes.', '', 'Choisir les thèmes', () => AE.app.go('#/mixed')));
    cards.appendChild(challengeCard('⚡', 'Contre-la-montre', 'Réponds à un maximum de questions en ' + AE.config.timedSeconds + ' secondes. Facultatif, sans pénalité.',
      'Record au niveau ' + lvl + ' : ' + (st.timedBest[lvl] || 0), 'Lancer le chrono', () => AE.loader.allThemes().then(() => AE.player.start(AE.engine.timed(lvl)))));
    cards.appendChild(challengeCard('🧪', 'Entraînement libre', 'Choisis un thème et un type d’activité, et entraîne-toi autant que tu veux.', '', 'Configurer', () => AE.app.go('#/practice')));
    cards.appendChild(challengeCard('🧭', 'Parcours de découverte', 'Dix questions de difficulté croissante pour te suggérer un niveau de départ. Aucune note.',
      st.placement ? 'Dernière suggestion : niveau ' + st.placement.level : '', 'Commencer', () => AE.app.startPlacement()));
    main.appendChild(cards);
  };
  function challengeCard(icon, title, desc, status, label, action) {
    return h('section', { class: 'card challenge' },
      h('h2', null, h('span', { 'aria-hidden': 'true' }, icon + ' '), title), h('p', null, desc), status ? h('p', { class: 'small muted' }, status) : null,
      btn(label, action, 'primary'));
  }

  // ---------------------------------------------------------------- ENTRAÎNEMENT LIBRE
  S.practice = function (main, params) {
    main.appendChild(h('h1', null, '🧪 Entraînement libre'));
    const themeSel = h('select', { id: 'pr-theme' }, h('option', { value: '' }, 'Tous les thèmes'), C().meta.map(m => h('option', { value: m.id, selected: params[0] === m.id || null }, m.num + '. ' + m.en)));
    const games = AE.questions.GAMES;
    const gameSel = h('select', { id: 'pr-game' }, h('option', { value: '' }, 'Toutes les activités'), Object.keys(games).map(k => h('option', { value: k }, games[k].icon + ' ' + games[k].name + ' — ' + games[k].fr)));
    const levelSel = h('select', { id: 'pr-level' }, AE.config.levels.map(l => h('option', { value: l.n, selected: l.n === AE.progress.level() || null }, 'Niveau ' + l.n + ' — ' + l.name)));
    const start = () => {
      const themes = themeSel.value ? [themeSel.value] : C().meta.map(m => m.id);
      const lvl = Number(levelSel.value);
      (themeSel.value ? AE.loader.theme(themeSel.value) : AE.loader.allThemes()).then(() => {
        const s = AE.engine.practice(themes, gameSel.value || null, lvl);
        if (!s.questions.length) { toast('Pas de question de ce type à ce niveau : essaie un niveau plus élevé ou une autre activité.', 'ℹ️'); return; }
        AE.player.start(s);
      });
    };
    main.appendChild(h('section', { class: 'card form' },
      h('label', { for: 'pr-theme' }, 'Thème'), themeSel,
      h('label', { for: 'pr-game' }, 'Activité'), gameSel,
      h('label', { for: 'pr-level' }, 'Niveau des questions'), levelSel,
      h('p', { class: 'muted small' }, 'L’entraînement continue tant que tu veux : touche « Terminer » pour voir tes résultats.'),
      btn('▶ Commencer', start, 'primary big')));
  };

  // ---------------------------------------------------------------- PARCOURS MÉLANGÉ
  S.mixed = function (main) {
    main.appendChild(h('h1', null, '🌍 Parcours mélangé'));
    const chosen = new Set();
    const list = h('div', { class: 'check-grid', role: 'group', 'aria-label': 'Thèmes du parcours' });
    C().meta.forEach(m => {
      const id = 'mx-' + m.id;
      const cb = h('input', { type: 'checkbox', id, on: { change: e => { if (e.target.checked) chosen.add(m.id); else chosen.delete(m.id); } } });
      list.appendChild(h('label', { for: id, class: 'check' }, cb, h('span', { 'aria-hidden': 'true' }, m.icon + ' '), m.en));
    });
    const go = ids => AE.loader.allThemes().then(() => AE.player.start(AE.engine.mixed(ids, AE.progress.level())));
    main.appendChild(h('section', { class: 'card' },
      h('p', null, 'Coche de 2 à 5 thèmes, ou laisse le hasard choisir.'), list,
      h('div', { class: 'row gap' },
        btn('▶ Parcours avec mes thèmes', () => {
          if (chosen.size < 2 || chosen.size > 5) { toast('Choisis entre 2 et 5 thèmes.', 'ℹ️'); return; }
          go(Array.from(chosen));
        }, 'primary'),
        btn('🎲 Trois thèmes au hasard', () => go(AE.util.shuffle(C().meta.map(m => m.id)).slice(0, 3)), 'ghost'))));
  };

  // ---------------------------------------------------------------- RÉVISION
  S.review = function (main) {
    AE.app.loading(main, 'Préparation de ta révision…');
    return AE.loader.allThemes().then(() => {
      main.innerHTML = '';
      const due = AE.progress.due();
      const errs = due.filter(d => (AE.progress.item(d.kind, d.id) || {}).err).length;
      main.appendChild(h('h1', null, '🔁 Révision'));
      if (!due.length) {
        main.appendChild(h('section', { class: 'card center' }, mascot('happy', 72),
          h('p', { class: 'lead' }, 'Rien à réviser pour le moment !'),
          h('p', null, 'Les mots que tu as rencontrés reviendront ici au bon moment, surtout ceux qui t’ont posé problème.'),
          btn('🗺️ Aller à la carte', () => AE.app.go('#/map'), 'primary')));
        return;
      }
      main.appendChild(h('section', { class: 'card' },
        h('p', { class: 'lead' }, due.length + ' élément' + (due.length > 1 ? 's' : '') + ' à revoir, dont ' + errs + ' qui t’ont posé problème.'),
        h('ul', { class: 'chips' }, due.slice(0, 30).map(d => {
          const it = d.kind === 'x' ? C().expr[d.id] : C().words[d.id];
          return it ? h('li', { class: 'chip' }, h('span', { lang: 'en' }, it.en)) : null;
        })),
        h('p', { class: 'muted small' }, 'Chaque révision propose au plus ' + (AE.settings.get().missionLength || 8) + ' questions adaptées à ton niveau.'),
        btn('▶ Commencer la révision', () => {
          const s = AE.engine.review(AE.progress.level());
          if (!s.questions.length) { toast('Aucune question disponible à ce niveau pour ces mots.', 'ℹ️'); return; }
          AE.player.start(s);
        }, 'primary big')));
    });
  };
})(window.AE);
