/* Chargement paresseux des banques de contenu (fonctionne aussi en file:// car basé sur des balises script). */
(function (AE) {
  'use strict';
  const pending = {};

  function script(src) {
    if (pending[src]) return pending[src];
    pending[src] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve(src);
      s.onerror = () => { delete pending[src]; reject(new Error('Chargement impossible : ' + src)); };
      document.head.appendChild(s);
    });
    return pending[src];
  }

  AE.loader = {
    script,
    theme(id) {
      const meta = AE.content.meta.find(m => m.id === id);
      if (!meta) return Promise.reject(new Error('Thème inconnu : ' + id));
      if (AE.content.themes[id]) return Promise.resolve(AE.content.themes[id]);
      return script('data/kids/themes/' + meta.file).then(() => AE.content.themes[id]);
    },
    allThemes() {
      return Promise.all(AE.content.meta.map(m => AE.loader.theme(m.id)));
    },
    doom() {
      if (AE.doomContent && AE.doomContent.ready) return Promise.resolve(AE.doomContent);
      return Promise.all([
        script('data/doom/words.js'),
        script('data/doom/idioms.js'),
        script('data/doom/extra.js')
      ]).then(() => script('js/doom/doom-bank.js')).then(() => AE.doomBank.build());
    }
  };
})(window.AE);
