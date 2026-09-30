/* Badges : récompensent la régularité, la découverte et la persévérance (jamais un classement). */
(function (AE) {
  'use strict';
  const P = () => AE.progress;
  const d = () => AE.progress.data();

  const list = [
    { id: 'first-mission', icon: '🚀', name: 'Premier décollage', desc: 'Terminer ta première mission.', test: () => d().stats.missions >= 1 },
    { id: 'missions-10', icon: '🧭', name: 'Explorateur assidu', desc: 'Terminer 10 missions.', test: () => d().stats.missions >= 10 },
    { id: 'missions-30', icon: '🗺️', name: 'Grand voyageur', desc: 'Terminer 30 missions.', test: () => d().stats.missions >= 30 },
    { id: 'perfect', icon: '💎', name: 'Sans faute', desc: 'Réussir une mission entière du premier coup.', test: () => d().stats.perfect >= 1 },
    { id: 'streak-3', icon: '🔥', name: 'Trois jours de suite', desc: 'Jouer trois jours d’affilée.', test: () => P().bestStreak() >= 3 },
    { id: 'streak-7', icon: '📅', name: 'Une semaine complète', desc: 'Jouer sept jours d’affilée.', test: () => P().bestStreak() >= 7 },
    { id: 'discover-50', icon: '🔍', name: 'Curieux', desc: 'Découvrir 50 mots.', test: () => Object.keys(d().words).length >= 50 },
    { id: 'discover-200', icon: '🔭', name: 'Grand découvreur', desc: 'Découvrir 200 mots.', test: () => Object.keys(d().words).length >= 200 },
    { id: 'master-10', icon: '🌱', name: 'Premières racines', desc: 'Maîtriser 10 mots.', test: () => P().counts('w').mastered >= 10 },
    { id: 'master-50', icon: '🌳', name: 'Mémoire solide', desc: 'Maîtriser 50 mots.', test: () => P().counts('w').mastered >= 50 },
    { id: 'master-150', icon: '🏔️', name: 'Encyclopédie vivante', desc: 'Maîtriser 150 mots.', test: () => P().counts('w').mastered >= 150 },
    { id: 'expr-10', icon: '💬', name: 'Beau parleur', desc: 'Maîtriser 10 expressions.', test: () => P().counts('x').mastered >= 10 },
    { id: 'listener', icon: '👂', name: 'Grandes oreilles', desc: 'Réussir 40 questions d’écoute du premier coup.', test: () => d().stats.listenOk >= 40 },
    { id: 'speller', icon: '✏️', name: 'As de l’orthographe', desc: 'Écrire correctement 25 mots.', test: () => d().stats.spellOk >= 25 },
    { id: 'detective', icon: '🕵️', name: 'Détective des dialogues', desc: 'Réussir 15 questions de dialogue.', test: () => d().stats.dialogueOk >= 15 },
    { id: 'reader', icon: '📖', name: 'Lecteur aguerri', desc: 'Réussir 15 questions de lecture.', test: () => d().stats.readingOk >= 15 },
    { id: 'grammar', icon: '🧠', name: 'Maître des règles', desc: 'Découvrir 10 leçons de grammaire.', test: () => Object.keys(d().lessons).length >= 10 },
    { id: 'review-5', icon: '🐘', name: 'Mémoire d’éléphant', desc: 'Faire 5 séances de révision.', test: () => d().stats.reviews >= 5 },
    { id: 'daily-1', icon: '☀️', name: 'Défi du jour', desc: 'Relever un défi du jour.', test: () => Object.keys(d().stats.daily).length >= 1 },
    { id: 'daily-7', icon: '🌞', name: 'Fidèle au rendez-vous', desc: 'Relever 7 défis du jour.', test: () => Object.keys(d().stats.daily).length >= 7 },
    { id: 'mixed', icon: '🌍', name: 'Globe-trotter', desc: 'Terminer un parcours mélangé.', test: () => d().stats.mixed >= 1 },
    { id: 'timed', icon: '⚡', name: 'Éclair', desc: 'Réussir 10 réponses dans un contre-la-montre.', test: () => Object.values(d().stats.timedBest).some(v => v >= 10) },
    { id: 'compass', icon: '🧭', name: 'Boussole', desc: 'Faire le parcours de découverte.', test: () => !!d().stats.placement },
    { id: 'level-3', icon: '🗡️', name: 'Aventurier', desc: 'Terminer une mission au niveau 3.', test: () => !!d().stats.levelsDone[3] },
    { id: 'level-4', icon: '🎯', name: 'Expert', desc: 'Terminer une mission au niveau 4.', test: () => !!d().stats.levelsDone[4] },
    { id: 'level-5', icon: '🏆', name: 'Défi CM2', desc: 'Terminer une mission au niveau 5.', test: () => !!d().stats.levelsDone[5] }
  ];

  // Un badge par lieu de la carte : toutes les missions du thème terminées au moins une fois
  function themeBadges() {
    return AE.content.meta.map(m => ({
      id: 'theme-' + m.id, icon: m.icon, name: m.place, desc: 'Terminer les 7 missions de « ' + m.en + ' » (à n’importe quel niveau).',
      theme: m.id,
      test: () => AE.engine.MISSIONS.every(mi => AE.progress.missionDone(m.id, mi.id))
    }));
  }

  AE.badges = {
    all: () => list.concat(themeBadges()),
    earned: id => !!(d() && d().badges[id]),
    // Retourne les badges nouvellement obtenus
    check() {
      if (!d()) return [];
      const fresh = [];
      AE.badges.all().forEach(b => {
        if (d().badges[b.id]) return;
        let ok = false;
        try { ok = b.test(); } catch (e) { ok = false; }
        if (ok) { d().badges[b.id] = Date.now(); fresh.push(b); }
      });
      if (fresh.length) AE.progress.save();
      return fresh;
    }
  };
})(window.AE);
