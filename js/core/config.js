/*
 * Anglelio — Mission English
 * Configuration centrale. Modifier ici les noms des fichiers audio si besoin.
 */
window.AE = window.AE || {};

AE.config = {
  version: '1.0.0',
  storagePrefix: 'anglelio.v1',

  audio: {
    basePath: 'assets/audio/',
    // Musiques (lecture en boucle, une seule à la fois)
    music: {
      background: 'background.mp3', // modes enfants
      doom: 'doom.mp3'              // mode secret DOOM English
    },
    // Effets sonores
    sfx: {
      click: 'ui-1.mp3',
      victory: 'victory.mp3',
      correct: 'correct.mp3',
      incorrect: 'incorrect.mp3',
      badge: 'badge.mp3',
      transition: 'transition.mp3'
    },
    // Enregistrements de voix facultatifs : voir assets/audio/voice/manifest.js
    voiceDir: 'assets/audio/voice/',
    duckFactor: 0.12,        // part du volume de musique conservée pendant une consigne anglaise
    // Part du volume de musique conservée pendant une partie (séance de questions).
    // 1 = pas de baisse. La baisse pendant la voix s'ajoute par-dessus.
    playLevel: { background: 0.7, doom: 0.3 },
    playFadeMs: 900,
    clickMinInterval: 90,    // ms minimum entre deux sons de clic
    maxSimultaneousSfx: 4,   // nombre maximal d'effets joués en même temps
    fadeMs: 350
  },

  speech: {
    rateNormal: 0.92,
    rateSlow: 0.62,
    doomRate: 1.0,
    preferLang: ['en-GB', 'en-IE', 'en-AU', 'en-US', 'en']
  },

  mission: { defaultLength: 8, min: 5, max: 10 },
  timedSeconds: 90,

  doomUnlock: { clicks: 5, windowMs: 3000 },

  levels: [
    { n: 1, name: 'Découverte', icon: '🌱', desc: 'Mots fréquents, images, 2 ou 3 choix, beaucoup d’aides.' },
    { n: 2, name: 'Explorateur', icon: '🧭', desc: 'Plus de mots, phrases simples, 4 choix, associations.' },
    { n: 3, name: 'Aventurier', icon: '🗺️', desc: 'Phrases à compléter ou à remettre en ordre, courts dialogues, grammaire de base.' },
    { n: 4, name: 'Expert', icon: '🎯', desc: 'Saisie de mots, mots proches, present continuous, can, there is/are.' },
    { n: 5, name: 'Défi CM2', icon: '🏔️', desc: 'Petits textes, dialogues, réponses écrites, premières formes du passé et du futur.' }
  ],

  doomTiers: [
    { id: 'hard', name: 'Hard', desc: 'Anglais avancé, indices limités.', timer: false, typed: false },
    { id: 'nightmare', name: 'Nightmare', desc: 'Questions plus complexes, distracteurs proches.', timer: false, typed: false },
    { id: 'ultra', name: 'Ultra Nightmare', desc: 'Toutes compétences mélangées, réponses écrites, chronomètre (désactivable).', timer: true, typed: true, seconds: 30 }
  ]
};
