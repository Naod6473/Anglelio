/* Application : en-tête, navigation, routeur, choix du niveau, déblocage secret du mode DOOM. */
(function (AE) {
  'use strict';
  const { h, btn, modal, toast } = AE.ui;
  AE.screens = AE.screens || {};

  const NAV = [
    { hash: '#/map', icon: '🗺️', label: 'Carte' },
    { hash: '#/challenges', icon: '🎯', label: 'Défis' },
    { hash: '#/notebook', icon: '📒', label: 'Carnet' },
    { hash: '#/review', icon: '🔁', label: 'Révision' },
    { hash: '#/badges', icon: '🏅', label: 'Trophées' }
  ];
  const TITLES = {
    home: 'Accueil', profiles: 'Profils', map: 'Carte des univers', theme: 'Thème', learn: 'Découvrir les mots', challenges: 'Défis',
    practice: 'Entraînement libre', mixed: 'Parcours mélangé', notebook: 'Carnet de vocabulaire', expressions: 'Expressions',
    dialogues: 'Dialogues', badges: 'Badges', stats: 'Statistiques', review: 'Révision', settings: 'Réglages', play: 'Mission', doom: 'DOOM English', credits: 'À propos'
  };

  const app = AE.app = {};
  app.go = hash => { if (location.hash === hash) app.route(); else location.hash = hash; };
  app.homeRoute = () => (AE.profiles.active() ? '#/map' : '#/');

  // ---------------------------------------------------------------- En-tête
  const secret = { n: 0, first: 0, cooldown: 0 };
  function onLogo() {
    const now = Date.now();
    const cfg = AE.config.doomUnlock;
    if (now < secret.cooldown) return; // clics résiduels juste après un déblocage : ignorés
    if (!secret.n || now - secret.first > cfg.windowMs) { secret.n = 0; secret.first = now; }
    secret.n++;
    if (secret.n >= cfg.clicks) {
      secret.n = 0;
      secret.cooldown = now + 1500;
      app.enterDoom();
      return;
    }
    // Fonction ordinaire du logo : la mascotte salue et l'on revient à la carte (hors séance).
    // Le focus reste sur le logo pour permettre plusieurs activations rapides au clavier.
    const m = document.querySelector('#logo .mascot');
    if (m) { m.classList.remove('wave'); void m.offsetWidth; m.classList.add('wave'); }
    const inDoom = document.body.classList.contains('doom') || (location.hash || '').indexOf('#/doom') === 0;
    if (!AE.player.s && !inDoom && secret.n === 1) {
      const target = app.homeRoute();
      if (location.hash !== target) { app._keepFocus = true; location.hash = target; }
    }
  }

  app.enterDoom = function () {
    // La musique doom.mp3 démarre dans le même geste utilisateur que le 5e clic (autorisé par le navigateur).
    AE.doomUnlocked = true;
    AE.audio.setMusic('doom');
    if (AE.player.s) { AE.player.stopTimers(); AE.player.s = null; }
    AE.audio.sfx('transition');
    location.hash = '#/doom';
  };
  app.exitDoom = function () {
    AE.audio.setMusic('background');
    if (AE.player.s) { AE.player.stopTimers(); AE.player.s = null; }
    location.hash = app.homeRoute();
  };

  app.refreshHeader = function () {
    const right = document.getElementById('topbar-right');
    if (!right) return;
    right.innerHTML = '';
    const p = AE.profiles.active();
    const st = AE.settings.get();
    const doom = document.body.classList.contains('doom');
    if (p && !doom) {
      const lvl = AE.config.levels[AE.progress.level() - 1];
      right.appendChild(btn([h('span', { 'aria-hidden': 'true' }, lvl.icon + ' '), h('span', { class: 'hide-sm' }, 'Niveau '), String(lvl.n)], () => app.levelPicker(), 'chip-btn', { 'aria-label': 'Niveau ' + lvl.n + ', ' + lvl.name + '. Changer de niveau' }));
      right.appendChild(btn([h('span', { class: 'avatar', 'aria-hidden': 'true' }, p.avatar), h('span', { class: 'hide-sm' }, p.name)], () => app.go('#/profiles'), 'chip-btn', { 'aria-label': 'Profil : ' + p.name + '. Changer de profil' }));
    }
    right.appendChild(btn(st.muted ? '🔇' : '🔊', () => {
      AE.settings.set({ muted: !AE.settings.get().muted });
      if (AE.settings.get().muted) AE.speech.stop();
      app.refreshHeader();
      toast(AE.settings.get().muted ? 'Son coupé' : 'Son activé', AE.settings.get().muted ? '🔇' : '🔊');
    }, 'icon-btn', { 'aria-label': st.muted ? 'Activer le son' : 'Couper le son', 'aria-pressed': String(!!st.muted) }));
    if (!doom) right.appendChild(btn('⚙️', () => app.go('#/settings'), 'icon-btn', { 'aria-label': 'Réglages audio et accessibilité' }));
  };

  function renderNav(current) {
    const nav = document.getElementById('bottomnav');
    nav.innerHTML = '';
    const show = AE.profiles.active() && !document.body.classList.contains('doom') && current !== 'play';
    nav.hidden = !show;
    if (!show) return;
    NAV.forEach(n => {
      const active = location.hash.indexOf(n.hash) === 0 || (n.hash === '#/notebook' && ['#/expressions', '#/dialogues'].some(x => location.hash.indexOf(x) === 0)) || (n.hash === '#/badges' && location.hash.indexOf('#/stats') === 0);
      nav.appendChild(h('a', { href: n.hash, class: 'nav-item' + (active ? ' active' : ''), 'aria-current': active ? 'page' : null, on: { click: () => AE.audio.click() } },
        h('span', { class: 'nav-icon', 'aria-hidden': 'true' }, n.icon), h('span', { class: 'nav-label' }, n.label)));
    });
  }

  // ---------------------------------------------------------------- Choix du niveau
  app.levelPicker = function () {
    const cur = AE.progress.level();
    const body = h('div', { class: 'level-list' },
      h('p', null, 'Choisis librement ton niveau. Tu peux en changer à tout moment : les niveaux 4 et 5 sont des défis facultatifs.'),
      AE.config.levels.map(l => h('button', {
        type: 'button', class: 'level-opt' + (l.n === cur ? ' current' : ''), 'aria-pressed': String(l.n === cur),
        on: { click: () => { AE.audio.click(); AE.progress.setLevel(l.n); AE.ui.close(); app.refreshHeader(); toast('Niveau ' + l.n + ' — ' + l.name, l.icon); app.route(); } }
      }, h('span', { class: 'level-icon', 'aria-hidden': 'true' }, l.icon), h('span', null, h('strong', null, 'Niveau ' + l.n + ' — ' + l.name), h('span', { class: 'level-desc' }, l.desc)))));
    modal({
      title: 'Choisir mon niveau', body, cls: 'wide',
      actions: [{ label: '🧭 Parcours de découverte (10 questions)', onClick: () => startPlacement() }, { label: 'Fermer', primary: true }]
    });
  };

  function startPlacement() {
    AE.loader.allThemes().then(() => AE.player.start(AE.engine.placement())).catch(err => toast('Chargement impossible : ' + err.message, '⚠️'));
  }
  app.startPlacement = startPlacement;

  // ---------------------------------------------------------------- Routeur
  app.route = function () {
    const main = document.getElementById('main');
    const parts = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    let name = parts[0] || 'home';
    const params = parts.slice(1).map(decodeURIComponent);
    const profile = AE.profiles.active();

    if (name === 'doom' && !AE.doomUnlocked) { location.replace('#/'); name = 'home'; }
    if (!profile && !['home', 'profiles', 'settings', 'credits', 'doom'].includes(name)) { location.replace('#/'); name = 'home'; }
    if (name !== 'play' && AE.player.s && AE.player.s.phase !== 'results') { AE.player.stopTimers(); AE.player.s = null; }
    if (name !== 'play' && AE.player.s && AE.player.s.phase === 'results') AE.player.s = null;

    const doom = name === 'doom' || (name === 'play' && AE.player.s && AE.player.s.doom);
    document.body.classList.toggle('doom', !!doom);
    if (!doom && AE.audio.desiredMusic() !== 'background') AE.audio.setMusic('background');
    // Musique plus discrète pendant une partie (questions), pleine sur les menus et résultats
    const inGame = name === 'play' && AE.player.s && AE.player.s.phase !== 'results';
    if (inGame !== AE.audio.isPlaying()) AE.audio.setPlaying(inGame);

    if (name !== 'play') AE.speech.stop();
    AE.ui.close();
    app.refreshHeader();
    renderNav(name);
    const screen = AE.screens[name] || AE.screens.home;
    document.title = (doom ? 'DOOM English' : (TITLES[name] || 'Anglelio')) + ' — Anglelio';
    main.className = 'screen screen-' + name;
    main.innerHTML = '';
    if (name === 'play') { AE.player.render(main); return; }
    const res = screen(main, params);
    if (!(res && res.then)) focusHeading(main);
    else res.then(() => focusHeading(main)).catch(err => {
      main.innerHTML = '';
      main.appendChild(h('div', { class: 'card' }, h('h1', null, 'Oups…'), h('p', null, 'Un contenu n’a pas pu être chargé : ' + err.message), btn('Retour à la carte', () => app.go('#/map'), 'primary')));
    });
  };

  function focusHeading(main) {
    if (app._keepFocus) { app._keepFocus = false; window.scrollTo(0, 0); return; }
    const t = main.querySelector('h1');
    if (t) { t.setAttribute('tabindex', '-1'); try { t.focus({ preventScroll: true }); } catch (e) { t.focus(); } }
    window.scrollTo(0, 0);
  }

  // Petit écran de chargement pour les écrans qui chargent des thèmes
  app.loading = function (main, text) {
    main.appendChild(h('div', { class: 'loading', role: 'status' }, AE.ui.mascot('happy', 56), h('p', null, text || 'Chargement…')));
  };

  // ---------------------------------------------------------------- Démarrage
  app.boot = function () {
    AE.settings.apply();
    AE.audio.init();
    const p = AE.profiles.active();
    AE.progress.load(p ? p.id : null);
    const logo = document.getElementById('logo');
    logo.insertBefore(AE.ui.mascot('happy', 40), logo.firstChild);
    logo.addEventListener('click', onLogo);
    AE.audio.setMusic('background');
    window.addEventListener('hashchange', app.route);
    try {
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => AE.settings.apply());
    } catch (e) { /* ignoré */ }
    app.route();
  };
})(window.AE);
