/*
 * Enregistrements de voix facultatifs.
 * Pour utiliser un enregistrement à la place de la synthèse vocale, placer le fichier dans ce dossier
 * et l'associer à l'identifiant du mot ou de l'expression, par exemple :
 *   AE.voiceManifest = { 'animals.cat': 'animals-cat.mp3', 'greetings.x.how-are-you': 'how-are-you.mp3' };
 * Les identifiants sont visibles dans le carnet (mode détaillé) et dans data/kids/themes/*.js.
 * Aucun enregistrement n'est fourni pour l'instant : la synthèse vocale du navigateur est utilisée.
 */
AE.voiceManifest = {};
