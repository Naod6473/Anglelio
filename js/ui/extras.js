/* Badges, statistiques, réglages (audio, accessibilité, données) et page « À propos ». */
(function (AE) {
  'use strict';
  const { h, btn, toast, mascot } = AE.ui;
  const S = AE.screens;
  const C = () => AE.content;

  function tabs(active) {
    return h('nav', { class: 'tabs', 'aria-label': 'Trophées et statistiques' },
      [['#/badges', '🏅 Badges'], ['#/stats', '📊 Statistiques']].map(([href, label]) =>
        h('a', { href, class: 'tab' + (href === active ? ' active' : ''), 'aria-current': href === active ? 'page' : null }, label)));
  }

  // ---------------------------------------------------------------- BADGES
  S.badges = function (main) {
    AE.badges.check();
    const all = AE.badges.all();
    const earned = all.filter(b => AE.badges.earned(b.id));
    main.appendChild(h('h1', null, '🏅 Mes badges'));
    main.appendChild(tabs('#/badges'));
    main.appendChild(h('p', { class: 'muted' }, earned.length + ' badge' + (earned.length > 1 ? 's' : '') + ' obtenu' + (earned.length > 1 ? 's' : '') + ' sur ' + all.length + '. Les badges récompensent la régularité et la découverte.'));
    const section = (title, list) => h('section', null, h('h2', null, title), h('ul', { class: 'badge-grid' }, list.map(b => {
      const ok = AE.badges.earned(b.id);
      return h('li', { class: 'badge ' + (ok ? 'earned' : 'locked') },
        h('span', { class: 'badge-icon', 'aria-hidden': 'true' }, ok ? b.icon : '🔒'),
        h('strong', null, b.name), h('span', null, b.desc),
        h('span', { class: 'sr-only' }, ok ? 'Obtenu.' : 'Pas encore obtenu.'));
    })));
    main.appendChild(section('Parcours', all.filter(b => !b.theme)));
    main.appendChild(section('Lieux de la carte', all.filter(b => b.theme)));
  };

  // ---------------------------------------------------------------- STATISTIQUES
  S.stats = function (main) {
    const d = AE.progress.data();
    const st = d.stats;
    main.appendChild(h('h1', null, '📊 Ma progression'));
    main.appendChild(tabs('#/stats'));
    const w = AE.progress.counts('w'), x = AE.progress.counts('x');
    const pct = (a, b) => (b ? Math.round(a / b * 100) : 0);
    main.appendChild(h('div', { class: 'stat-tiles' },
      tile('📒', w.mastered, 'mots maîtrisés'),
      tile('◑', w.learning, 'mots en cours'),
      tile('◔', w.seen + w.learning + w.mastered, 'mots découverts'),
      tile('💬', x.mastered, 'expressions maîtrisées'),
      tile('🚀', st.missions, 'missions terminées'),
      tile('🔥', AE.progress.streak(), 'jours de suite'),
      tile('✅', pct(st.firstTry, st.answered) + ' %', 'réussite du premier coup'),
      tile('📝', st.answered, 'réponses données')));

    const skills = { listen: 'Écoute', read: 'Lecture de mots', vocab: 'Vocabulaire', write: 'Orthographe', grammar: 'Grammaire', sentence: 'Construction de phrases', expression: 'Expressions', dialogue: 'Dialogues', reading: 'Lecture de textes' };
    main.appendChild(h('section', { class: 'card' }, h('h2', null, 'Par compétence'),
      h('ul', { class: 'bars' }, Object.keys(skills).map(k => {
        const v = st.bySkill[k] || [0, 0];
        return h('li', null, h('span', { class: 'bar-label' }, skills[k]),
          h('span', { class: 'bar', role: 'img', 'aria-label': skills[k] + ' : ' + v[0] + ' réussites du premier coup sur ' + v[1] }, h('span', { style: { width: pct(v[0], v[1]) + '%' } })),
          h('span', { class: 'bar-val' }, v[1] ? pct(v[0], v[1]) + ' % (' + v[1] + ')' : '—'));
      }))));
    main.appendChild(h('section', { class: 'card' }, h('h2', null, 'Mots maîtrisés par lieu'),
      h('ul', { class: 'bars' }, C().meta.map(m => {
        const c = AE.progress.themeCounts(m.id);
        return h('li', null, h('span', { class: 'bar-label' }, m.icon + ' ' + m.en),
          h('span', { class: 'bar', role: 'img', 'aria-label': m.en + ' : ' + c.mastered + ' mots maîtrisés sur 30' }, h('span', { style: { width: pct(c.mastered, 30) + '%', background: m.color } })),
          h('span', { class: 'bar-val' }, c.mastered + ' / 30'));
      }))));
    const days = Object.keys(st.daily).sort().slice(-10).reverse();
    main.appendChild(h('section', { class: 'card' }, h('h2', null, 'Défis du jour récents'),
      days.length ? h('ul', { class: 'plain' }, days.map(k => h('li', null, '☀️ ' + k.split('-').reverse().join('/') + ' : ' + st.daily[k] + ' / 8 du premier coup'))) : h('p', { class: 'muted' }, 'Aucun défi du jour pour l’instant.'),
      h('p', { class: 'small muted' }, 'Meilleure série : ' + AE.progress.bestStreak() + ' jour(s) · révisions : ' + st.reviews + ' · parcours mélangés : ' + st.mixed + ' · records contre-la-montre : ' +
        ([1, 2, 3, 4, 5].map(l => 'N' + l + ' ' + (st.timedBest[l] || 0)).join(', ')))));
  };
  function tile(icon, val, label) {
    return h('div', { class: 'stat-tile' }, h('span', { class: 'st-icon', 'aria-hidden': 'true' }, icon), h('strong', null, String(val)), h('span', null, label));
  }

  // ---------------------------------------------------------------- RÉGLAGES
  S.settings = function (main) {
    const st = AE.settings.get();
    main.appendChild(h('h1', null, '⚙️ Réglages'));

    const slider = (key, label) => {
      const id = 'set-' + key;
      const out = h('output', { for: id }, Math.round(st[key] * 100) + ' %');
      const input = h('input', { type: 'range', id, min: '0', max: '1', step: '0.05', value: String(st[key]),
        on: { input: e => { out.textContent = Math.round(e.target.value * 100) + ' %'; AE.settings.set({ [key]: Number(e.target.value) }); } } });
      return h('div', { class: 'field' }, h('label', { for: id }, label), input, out);
    };
    const toggle = (key, label, after) => {
      const id = 'set-' + key;
      return h('div', { class: 'field check-field' }, h('input', { type: 'checkbox', id, checked: !!st[key] || null,
        on: { change: e => { AE.settings.set({ [key]: e.target.checked }); if (after) after(); } } }), h('label', { for: id }, label));
    };
    const select = (key, label, options, after) => {
      const id = 'set-' + key;
      return h('div', { class: 'field' }, h('label', { for: id }, label),
        h('select', { id, on: { change: e => { const v = e.target.value; AE.settings.set({ [key]: /^\d+$/.test(v) ? Number(v) : v }); if (after) after(); } } },
          options.map(([v, l]) => h('option', { value: v, selected: String(st[key]) === String(v) || null }, l))));
    };

    // Audio
    const voiceField = h('div', { class: 'field' });
    const drawVoices = () => {
      voiceField.innerHTML = '';
      const vs = AE.speech.voices();
      voiceField.appendChild(h('label', { for: 'set-voice-name' }, 'Voix anglaise'));
      if (!vs.length) { voiceField.appendChild(h('p', { class: 'notice' }, '🔇 Aucune voix anglaise n’est disponible dans ce navigateur. Les exercices d’écoute s’affichent alors en texte.')); return; }
      voiceField.appendChild(h('select', { id: 'set-voice-name', on: { change: e => AE.settings.set({ voiceName: e.target.value }) } },
        h('option', { value: '' }, 'Automatique (anglais britannique de préférence)'),
        vs.map(v => h('option', { value: v.name, selected: v.name === st.voiceName || null }, v.name + ' (' + v.lang + ')'))));
    };
    drawVoices();
    AE.speech.ready().then(drawVoices);

    main.appendChild(h('section', { class: 'card form' }, h('h2', null, '🔊 Son'),
      toggle('muted', 'Couper tous les sons (musique, effets et voix)', () => { AE.speech.stop(); AE.app.refreshHeader(); }),
      slider('music', 'Musique'), slider('sfx', 'Effets sonores'), slider('voice', 'Voix anglaise'),
      select('rate', 'Vitesse de la voix', [['normal', 'Normale'], ['slow', 'Ralentie']]),
      voiceField,
      h('div', { class: 'row gap' },
        AE.ui.speakBtn('Hello! Welcome to Anglelio. Let’s learn English together!', { label: 'Tester la voix' }),
        btn('Tester un effet', () => AE.audio.sfx('correct'), 'ghost')),
      toggle('synthSfx', 'Sons de secours synthétiques quand un fichier d’effet manque'),
      audioStatus()));

    // Accessibilité
    main.appendChild(h('section', { class: 'card form' }, h('h2', null, '♿ Affichage et accessibilité'),
      select('textSize', 'Taille du texte', [['normal', 'Normale'], ['large', 'Grande'], ['xlarge', 'Très grande']]),
      select('reduceMotion', 'Animations', [['auto', 'Automatique (réglage de l’appareil)'], ['on', 'Réduire les animations'], ['off', 'Animations normales']]),
      toggle('contrast', 'Contraste renforcé'),
      toggle('spacing', 'Espacement du texte plus large (aide à la lecture)'),
      toggle('showFrench', 'Afficher les aides en français dans les exercices (niveaux 4 et 5)'),
      select('missionLength', 'Nombre de questions par mission', [5, 6, 7, 8, 9, 10].map(n => [n, n + ' questions']))));

    // Données
    const p = AE.profiles.active();
    main.appendChild(h('section', { class: 'card form' }, h('h2', null, '💾 Données'),
      h('p', { class: 'muted' }, 'Tout est enregistré uniquement dans ce navigateur' + (AE.store.persistent ? '.' : ' (stockage indisponible : la progression sera perdue à la fermeture).')),
      p ? btn('Remettre à zéro la progression de ' + p.name, () => AE.ui.confirm('Remettre à zéro ?', 'Tous les mots, missions, badges et statistiques de ' + p.name + ' seront effacés. Cette action est définitive.', 'Tout effacer', () => { AE.progress.reset(); toast('Progression remise à zéro', '🧹'); AE.app.route(); }, true), 'danger') : null,
      btn('Gérer les profils', () => AE.app.go('#/profiles'), 'ghost'),
      btn('Effacer toutes les données de l’appareil', () => AE.ui.confirm('Tout effacer ?', 'Tous les profils, progressions et réglages seront supprimés de cet appareil. Cette action est définitive.', 'Tout effacer', () => { AE.store.clearAll(); location.hash = '#/'; location.reload(); }, true), 'danger'),
      btn('Réglages par défaut', () => { AE.settings.reset(); AE.app.route(); toast('Réglages réinitialisés', '⚙️'); }, 'ghost'),
      h('p', null, h('a', { href: '#/credits' }, 'À propos, sources et licences'))));
  };

  function audioStatus() {
    const box = h('div', { class: 'audio-status' });
    const draw = () => {
      box.innerHTML = '';
      const labels = { ok: '✅ présent', missing: '❌ absent', blocked: '⏸ en attente d’un clic', unknown: '… vérification' };
      box.appendChild(h('p', { class: 'label' }, 'Fichiers audio (dossier assets/audio/)'));
      box.appendChild(h('ul', { class: 'plain small' }, AE.audio.status().filter(s => s.file !== AE.config.audio.music.doom).map(s => h('li', null, h('code', null, s.file), ' — ', labels[s.state] || s.state))));
      if (AE.audio.status().some(s => s.state === 'missing' && s.file !== AE.config.audio.music.doom)) box.appendChild(h('p', { class: 'small muted' }, 'Les fichiers absents sont simplement ignorés : le jeu fonctionne normalement (voir assets/audio/README.md).'));
    };
    draw();
    AE.audio.onChange(() => { if (document.contains(box)) draw(); });
    return box;
  }

  // ---------------------------------------------------------------- À PROPOS
  S.credits = function (main) {
    main.appendChild(h('h1', null, 'ℹ️ À propos d’Anglelio'));
    main.appendChild(h('section', { class: 'card' }, mascot('happy', 64),
      h('p', null, 'Anglelio — Mission English est un jeu d’apprentissage de l’anglais pour le CM1 et le CM2. Aucun compte, aucune publicité, aucun achat, aucune donnée envoyée : tout reste sur l’appareil.'),
      h('h2', null, 'Contenu'),
      h('p', null, 'Mots, phrases, dialogues, textes et questions ont été rédigés spécialement pour ce jeu (anglais britannique par défaut, variantes américaines acceptées quand c’est pertinent).'),
      h('h2', null, 'Images et sons'),
      h('ul', { class: 'plain' },
        h('li', null, 'Illustrations : émojis Unicode affichés par la police de l’appareil, formes dessinées en SVG dans le jeu, mascotte « Lio » dessinée en SVG pour ce projet.'),
        h('li', null, 'Voix : synthèse vocale du navigateur (aucun enregistrement fourni). Des enregistrements peuvent être ajoutés, voir assets/audio/voice/manifest.js.'),
        h('li', null, 'Musiques et effets : fichiers MP3 à fournir dans assets/audio/ (voir la liste dans assets/audio/README.md). Sons de secours générés par le navigateur (Web Audio).')),
      h('h2', null, 'Niveaux'),
      h('p', null, 'Les cinq niveaux sont des repères éditoriaux, pas une certification ni une exigence scolaire.'),
      btn('← Retour', () => history.back(), 'ghost')));
  };
})(window.AE);
