# Fichiers audio attendus

Aucun fichier MP3 n’est fourni dans le dépôt. Déposez vos fichiers dans ce dossier (`assets/audio/`) avec les noms ci-dessous. Les noms sont centralisés dans `js/core/config.js` (`AE.config.audio`) et peuvent y être modifiés.

| Fichier | Rôle | Si le fichier manque |
|---|---|---|
| `background.mp3` | Musique de fond des modes enfants (en boucle) | Pas de musique, le jeu fonctionne normalement |
| `doom.mp3` | Musique du mode secret DOOM (en boucle) | Pas de musique dans ce mode |
| `ui-1.mp3` | Clic des boutons | Son de secours synthétisé (désactivable) |
| `victory.mp3` | Fin de mission | Son de secours synthétisé |
| `correct.mp3` | Bonne réponse | Son de secours synthétisé |
| `incorrect.mp3` | Réponse incorrecte (joué discrètement, à 55 % du volume des effets) | Son de secours synthétisé |
| `badge.mp3` | Obtention d’un badge | Son de secours synthétisé |
| `transition.mp3` | Transition importante (début de séance, entrée dans le mode secret) | Son de secours synthétisé |

L’état de chaque fichier (présent, absent, en attente d’un clic) est affiché dans **Réglages → Son** (sauf `doom.mp3`, affiché uniquement dans le mode secret pour ne pas le trahir).

Utilisez uniquement des fichiers dont la licence autorise cet usage, et indiquez leur provenance dans `docs/CREDITS.md`.

## Volume de la musique

Réglages dans `js/core/config.js` (`AE.config.audio`) :

- `duckFactor: 0.12` : pendant qu’un mot ou une phrase anglaise est prononcé, la musique tombe à 12 % de son volume, puis remonte en douceur.
- `playLevel: { background: 0.7, doom: 0.3 }` : pendant une partie (séance de questions), `background.mp3` passe à 70 % et `doom.mp3` à 30 %. Le volume revient à 100 % sur les menus et l’écran de résultats. Mettre `1` pour ne pas baisser.
- Le curseur « Musique » des réglages s’applique par-dessus ces valeurs.

Conseil : préférez des musiques calmes et sans paroles, normalisées à un volume modéré, et bouclables sans coupure audible.

## Voix enregistrées (facultatif)

Par défaut, les mots et phrases anglais sont prononcés par la synthèse vocale du navigateur (voix anglaise britannique de préférence). Pour utiliser des enregistrements, placez-les dans `assets/audio/voice/` et déclarez-les dans `assets/audio/voice/manifest.js` :

```js
AE.voiceManifest = { 'animals.cat': 'animals-cat.mp3', 'greetings.x.how-are-you': 'how-are-you.mp3' };
```

Les identifiants des mots et expressions sont visibles dans la fiche d’un mot (Carnet → toucher un mot).
