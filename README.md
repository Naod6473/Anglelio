# Anglelio — Mission English

Jeu web d’apprentissage de l’anglais pour les enfants de **CM1 et CM2**, jouable sur ordinateur, tablette et téléphone. La navigation et les explications sont en français ; les mots, phrases et dialogues à apprendre sont en anglais (britannique par défaut, variantes américaines courantes acceptées quand c’est pertinent).

Aucun compte, aucune publicité, aucun achat, aucune donnée envoyée : les profils et la progression restent dans le navigateur (`localStorage`).

## Lancer le jeu

Application statique, sans étape de compilation ni dépendance.

- **Le plus simple** : ouvrir `index.html` dans un navigateur récent (Chrome, Edge, Firefox, Safari). Tout fonctionne en `file://`, sauf si le navigateur bloque les scripts locaux.
- **Avec un petit serveur** (recommandé pour la voix et l’audio sur certains navigateurs) :
  ```bash
  npm start                    # npx http-server sur http://localhost:8080
  # ou
  python3 -m http.server 8080
  ```

Les musiques et effets MP3 ne sont **pas fournis** : voir [`assets/audio/README.md`](assets/audio/README.md) pour la liste des fichiers attendus. Sans eux, le jeu fonctionne normalement (sons de secours synthétisés pour les effets, pas de musique).

## Vérifications

```bash
npm run validate     # validation automatisée des banques de contenu (Node.js)
npm run test:e2e     # tests de bout en bout (Playwright + Chromium)
npm test             # les deux
```

## Ce que contient le jeu

### Contenu enfants (volumes réels, comptés par `tools/validate.js`)

| Élément | Volume |
|---|---|
| Thèmes / lieux de la carte | 20 (les 20 thèmes demandés) |
| Entrées de vocabulaire distinctes | **600** (30 par thème) |
| Expressions et phrases usuelles | **204** |
| Dialogues de 2 à 6 répliques | **60** (3 par thème) |
| Textes de lecture | 40 |
| Leçons de grammaire | 23 (présentées avant la première question qui les évalue) |
| Questions validées | **4 758**, dont **854 rédigées à la main** |

Chaque mot comporte : identifiant stable, mot anglais, traduction adaptée, thème, difficulté (★ à ★★★), catégorie grammaticale, phrase d’exemple et sa traduction, variantes acceptées, support visuel (émoji ou forme SVG, 390 mots sur 600) et texte à prononcer (ou enregistrement facultatif). Chaque expression a un contexte d’utilisation, un exemple traduit et, quand la traduction littérale serait trompeuse, une note explicative.

**Comment sont comptées les questions** : les 3 904 questions de vocabulaire et d’expressions sont générées de façon déterministe (identifiant stable, distracteurs tirés au hasard avec une graine fixe) à partir des données : pour chaque mot, 5 compétences distinctes (écouter, lire, retrouver le mot anglais parmi des mots proches, compléter la phrase d’exemple, écrire) ; pour chaque expression, sens, situation, écoute et remise en ordre. Ce ne sont pas des doublons : le validateur rejette toute question identique à une autre, y compris à l’ordre des réponses près. Les 854 autres (grammaire, phrases à construire, intrus, mots mystère, consignes « Listen & Act », dialogues, lectures) sont rédigées une à une.

Répartition par niveau : N1 582 · N2 1 242 · N3 1 618 · N4 1 107 · N5 209.

### Niveaux (librement sélectionnables à tout moment)

1. **Découverte** — mots fréquents, images, 3 choix, aides généreuses.
2. **Explorateur** — vocabulaire plus large, 4 choix, associations, consignes.
3. **Aventurier** — phrases à compléter ou à remettre en ordre, dialogues, négation, pluriels, pronoms, possessifs, prépositions.
4. **Expert** — saisie de mots, mots proches, present continuous, can/can’t, there is/are, moins d’indices.
5. **Défi CM2** — petits textes, réponses écrites, premières formes du passé et du futur (présentées en leçon avant d’être évaluées).

Un **parcours de découverte** facultatif (10 questions, sans note) suggère un niveau de départ. Une mission ne propose jamais de question au-dessus du niveau choisi.

### Mini-jeux (12)

Listen & Find · Match It (toucher ou glisser) · Build a Sentence (toucher ou glisser) · Missing Word · Mystery Word · Listen & Act · Dialogue Detective · Spell It · Odd One Out (avec explication) · Reading Quest · Word Quest (lire et choisir) · Say It Right (que dirais-tu ?).

### Modes

Missions de 5 à 10 questions (7 missions par thème, rejouables) · entraînement libre (thème, activité et niveau au choix, sans fin) · défi du jour (calculé localement à partir de la date) · révision · parcours mélangé · contre-la-montre facultatif (90 s).

### Pédagogie et progression

- Les nouveaux mots, expressions et notions sont **présentés avant** leur première évaluation.
- Après chaque réponse : explication courte. En cas d’erreur : **nouvel essai avec indice**, puis correction.
- Réponses écrites : casse, espaces, apostrophes typographiques et ponctuation finale normalisés ; variantes prévues acceptées ; une faute d’une lettre est signalée « presque » mais **n’est pas acceptée**.
- États d’un mot : pas vu → découvert → en cours → **maîtrisé** (au moins 3 réussites du premier coup lors de 3 séances différentes ; une erreur fait redescendre).
- Les mots ratés reviennent en révision (répétition espacée) et 1 ou 2 d’entre eux sont réintroduits dans les missions suivantes.
- 46 badges récompensent la régularité et la découverte. Pas de vies perdues, pas de classement.
- Profils locaux multiples, progression séparée par profil, remise à zéro avec confirmation.

### Mode secret « DOOM English » (défi parents — anglais avancé)

Invisible dans les menus. **Déblocage : 5 clics sur le logo en moins de 3 secondes** (ou 5 activations rapides au clavier avec Entrée/Espace). Le compteur repart à zéro si le délai est dépassé. La musique `doom.mp3` démarre dans le même geste. Interface sombre rouge/orange, sans flash ni violence, mention « Défi parents — anglais avancé », bouton « Retour au jeu enfant ». Records séparés (clé `doom.records`), sans effet sur les badges ni la maîtrise des profils enfants. Le rechargement de la page referme le mode.

| Élément | Volume |
|---|---|
| Mots avancés (faux amis, nuances, registre…) | **300** |
| Expressions idiomatiques et phrasal verbs | **155** (77 idiomes, 78 phrasal verbs) |
| Questions validées | **2 309** (dont 189 rédigées à la main : faux amis, collocations, grammaire complexe, registre, lectures avec inférence, écoute) |

Trois difficultés : **Hard** (un second essai, pas d’indice), **Nightmare** (distracteurs proches, un seul essai), **Ultra Nightmare** (compétences mélangées, réponses écrites, chronomètre de 30 s activé par défaut et désactivable). Le niveau visé B2–C2 est une **estimation éditoriale**, pas une certification. Pour les phrases à trou à distracteurs proches, la traduction française est affichée afin que la difficulté porte sur la nuance, jamais sur une ambiguïté. Corrections détaillées en français. Un lexique consultable accompagne le mode.

## Audio et voix

Gestionnaire central (`js/audio/audio.js`) : une seule musique à la fois ; lancement après une interaction autorisée ; bascule `background.mp3` ↔ `doom.mp3` ; réglages séparés musique / effets / voix mémorisés ; musique fortement atténuée pendant une consigne anglaise et baissée pendant une partie (70 % pour `background.mp3`, 30 % pour `doom.mp3`, réglable dans `js/core/config.js`) ; limitation des clics rapprochés et du nombre de sons simultanés ; pause quand l’onglet est masqué puis reprise ; réglage muet toujours respecté ; promesses de lecture rejetées gérées (nouvel essai au geste suivant) ; fichiers absents signalés dans les réglages sans erreur bloquante.

Voix (`js/audio/speech.js`) : enregistrement s’il est déclaré, sinon synthèse vocale (voix anglaise choisie automatiquement ou dans les réglages, vitesse normale ou ralentie). Jamais deux consignes parlées en même temps. Sans voix disponible (ou son coupé), les exercices d’écoute s’affichent en texte avec un message clair ; dans les exercices d’écoute, le texte anglais n’est affiché qu’à la demande (« Afficher le texte »), et n’apparaît pas dans les libellés des réponses.

## Accessibilité

Grandes zones tactiles (≥ 44 px), navigation complète au clavier (chiffres 1–9 pour répondre, Entrée pour continuer, piège de focus dans les fenêtres), alternative par clic à chaque glisser-déposer, états jamais indiqués par la seule couleur (✓ / ✗ / symboles), textes annoncés aux lecteurs d’écran, attributs `lang` sur l’anglais, réduction des animations (automatique ou forcée), contraste renforcé, taille de texte, espacement élargi. Mise en page adaptée du téléphone à l’ordinateur.

## Organisation du code

```
index.html               page unique, scripts classiques (fonctionne en file://)
css/app.css              thèmes enfants et DOOM, responsive, accessibilité
js/core/                 configuration (chemins audio), utilitaires, stockage, chargement paresseux
js/content/              registre du contenu, fabrique déterministe de questions
js/audio/                gestionnaire audio, voix
js/progress/             réglages et profils, progression / maîtrise, badges
js/engine/               missions, sélection des questions, vérification des réponses
js/ui/                   routeur, lecteur de séance, écrans
js/doom/                 banque et interface du mode DOOM
data/kids/               index des thèmes, leçons, 20 fichiers de thème (chargés à la demande)
data/doom/               mots, idiomes et phrasal verbs, questions rédigées (chargés au déblocage)
tools/validate.js        validation des données (doublons, références, bonnes réponses, volumes)
tools/e2e.js             tests de bout en bout
assets/audio/            MP3 attendus (non fournis) + voix facultatives
docs/CREDITS.md          sources et licences
```

Pour ajouter du contenu, éditer un fichier de `data/kids/themes/` (format une ligne = une entrée, décrit en tête de `js/content/registry.js`) puis lancer `npm run validate`. Les identifiants sont dérivés du mot ou de la phrase : modifier un mot anglais change son identifiant (et donc sa progression enregistrée).

## Bilan des vérifications

- `tools/validate.js` : **aucune erreur** — identifiants uniques, références existantes, une seule bonne réponse par question, propositions distinctes, pas de question dupliquée, notions de grammaire toutes documentées, exemples contenant le mot ciblé, volumes minimaux atteints (enfants et DOOM).
- `tools/e2e.js` : **56 / 56 vérifications réussies** sous Chromium : démarrage sans aucun fichier audio ; mission complète dans chacun des 5 niveaux ; 8 mini-jeux joués avec erreur, indice et correction ; normalisation des réponses écrites ; maîtrise après 3 séances et non après une réponse ; révision ; sauvegarde après rechargement ; isolation de deux profils ; clavier ; déblocage DOOM par 5 clics, expiration du compteur, clic résiduel ignoré, déblocage au clavier, accès direct refusé ; bascule background ↔ doom sans lecture simultanée ; séparation des progressions ; onglet masqué ; muet ; lecture refusée par le navigateur ; voix simulée (consigne prononcée, texte masqué, pas de superposition) ; affichage mobile 375 px sans défilement horizontal.
- Vérifié manuellement : ouverture en `file://`, rendu des écrans (carte, thème, séances, résultats, carnet, réglages, DOOM) sur ordinateur et téléphone.

## Limites connues

- Aucun fichier MP3 ni enregistrement de voix n’est fourni (à ajouter, voir `assets/audio/README.md`).
- La qualité de la voix dépend des voix installées sur l’appareil ; sans voix anglaise, l’écoute bascule en lecture.
- Le rendu des émojis dépend du système (couleur ou monochrome) ; 210 mots (souvent abstraits) n’ont pas d’image et s’appuient sur le texte.
- Les distracteurs générés sont choisis pour ne pas partager la même traduction ni le même visuel, et les phrases à trou affichent la traduction ; la pertinence pédagogique fine de chaque combinaison relève d’une relecture éditoriale humaine, que le validateur automatique ne remplace pas.
- Les tests automatisés couvrent Chromium ; Firefox et Safari n’ont pas été testés automatiquement.
- Les records DOOM sont communs à l’appareil (pas liés à un profil enfant).
