/* Thème 18 — Shopping & Money */
AE.content.registerTheme({
  id: 'shopping',
  intro: 'Au Centre Commercial, on apprend à demander un prix, à payer, à comparer et à gérer son argent de poche.',
  lessons: ['some_any', 'comparatives', 'questions'],
  words: `
shop|magasin, boutique|n|1|🏪|The shop opens at nine.|Le magasin ouvre à neuf heures.|store
money|argent|n|1|💰|Money doesn’t grow on trees!|L’argent ne pousse pas sur les arbres !
coin|pièce (de monnaie)|n|1|🪙|This coin is from Spain.|Cette pièce vient d’Espagne.
price|prix|n|1|🏷️|What is the price of this book?|Quel est le prix de ce livre ?
euro|euro|n|1|💶|It costs one euro.|Ça coûte un euro.
buy|acheter|v|1||I want to buy a present for my mum.|Je veux acheter un cadeau pour ma maman.
open|ouvert|adj|1||The bakery is open on Sunday.|La boulangerie est ouverte le dimanche.
closed|fermé|adj|1||The museum is closed today.|Le musée est fermé aujourd’hui.
basket|panier|n|1|🧺|Put the apples in the basket.|Mets les pommes dans le panier.
note|billet (de banque)|n|2|💵|I have got a ten-euro note.|J’ai un billet de dix euros.|banknote,bill
pound|livre (monnaie britannique)|n|2|💷|This pen costs one pound.|Ce stylo coûte une livre.
cheap|bon marché, pas cher|adj|2||This T-shirt is very cheap.|Ce t-shirt ne coûte vraiment pas cher.
expensive|cher|adj|2||This watch is too expensive.|Cette montre est trop chère.
sell|vendre|v|2||They sell fresh fish here.|Ils vendent du poisson frais ici.
pay|payer|v|2||Can I pay by card?|Est-ce que je peux payer par carte ?
cost|coûter|v|2||How much does it cost?|Combien ça coûte ?
market|marché|n|2||We buy vegetables at the market.|Nous achetons des légumes au marché.
shopping bag|sac de courses|n|2|🛍️|Don’t forget the shopping bag.|N’oublie pas le sac de courses.
credit card|carte bancaire|n|2|💳|Dad pays with his credit card.|Papa paie avec sa carte bancaire.|bank card
wallet|portefeuille|n|2|👛|My wallet is in my bag.|Mon portefeuille est dans mon sac.|purse
spend|dépenser|v|2||Don’t spend all your money!|Ne dépense pas tout ton argent !
save|économiser, mettre de côté|v|2||I save money for a new bike.|J’économise de l’argent pour un nouveau vélo.
pocket money|argent de poche|n|2||I get pocket money every week.|J’ai de l’argent de poche chaque semaine.|allowance
change|monnaie (rendue)|n|3||Here is your change.|Voici votre monnaie.
receipt|ticket de caisse|n|3|🧾|Keep the receipt, please.|Garde le ticket de caisse, s’il te plaît.
customer|client, cliente|n|3||The customer is waiting.|Le client attend.
shop assistant|vendeur, vendeuse|n|3||The shop assistant is very helpful.|La vendeuse est très serviable.
trolley|chariot, caddie|n|3||Push the trolley, please.|Pousse le chariot, s’il te plaît.|cart
sale|soldes|n|3||The shoes are in the sale.|Les chaussures sont en soldes.
queue|file d’attente|n|3||There is a long queue at the checkout.|Il y a une longue file d’attente à la caisse.|line
`,
  expressions: `
How much is it?|Combien ça coûte ?|1|pour demander le prix d’un objet|— How much is it? — It’s two euros.|— Combien ça coûte ? — C’est deux euros.|Mot à mot : « Combien est-ce ? »|How much is this?
I’m looking for a present.|Je cherche un cadeau.|2|pour dire à un vendeur que tu cherches un cadeau|Hello! I’m looking for a present for my sister.|Bonjour ! Je cherche un cadeau pour ma sœur.||I am looking for a present
Can I help you?|Je peux vous aider ?|1|pour proposer ton aide à un client, comme le fait un vendeur|— Can I help you? — Yes, I’m looking for a red cap.|— Je peux vous aider ? — Oui, je cherche une casquette rouge.
Here you are.|Voilà. / Tiens.|1|pour tendre quelque chose à quelqu’un|— Two croissants, please. — Here you are!|— Deux croissants, s’il vous plaît. — Voilà !|Mot à mot : « Ici tu es ». On le dit en tendant quelque chose.
That’s too expensive!|C’est trop cher !|2|pour dire qu’un prix est trop élevé|Fifty euros for a T-shirt? That’s too expensive!|Cinquante euros pour un t-shirt ? C’est trop cher !||That is too expensive
Can I pay by card?|Est-ce que je peux payer par carte ?|3|pour demander si tu peux régler avec une carte bancaire|Can I pay by card, or only cash?|Est-ce que je peux payer par carte, ou seulement en espèces ?
Keep the change.|Gardez la monnaie.|3|pour dire au vendeur de garder ce qui reste de ton argent|Here is ten euros. Keep the change!|Voici dix euros. Gardez la monnaie !
I’d like two croissants, please.|Je voudrais deux croissants, s’il vous plaît.|2|pour commander des croissants à la boulangerie|Good morning! I’d like two croissants, please.|Bonjour ! Je voudrais deux croissants, s’il vous plaît.||I would like two croissants please
Is it on sale?|Est-ce que c’est en soldes ?|3|pour demander si un article a un prix réduit|This jacket is nice. Is it on sale?|Cette veste est jolie. Est-ce qu’elle est en soldes ?
What time do you close?|À quelle heure fermez-vous ?|3|pour demander à un commerçant l’heure de fermeture du magasin|Excuse me, what time do you close today?|Excusez-moi, à quelle heure fermez-vous aujourd’hui ?
`,
  build: `
How much is this pen?|Combien coûte ce stylo ?|3|questions
This bike is too expensive.|Ce vélo est trop cher.|3|
The shop is closed on Sunday.|Le magasin est fermé le dimanche.|3||On Sunday the shop is closed.
I would like some apples.|Je voudrais des pommes.|4|some_any
Books are cheaper at the market.|Les livres sont moins chers au marché.|4|comparatives
She is paying at the checkout.|Elle est en train de payer à la caisse.|4|present_continuous
I haven’t got any money.|Je n’ai pas d’argent.|4|some_any,negation
I bought a new game yesterday.|J’ai acheté un nouveau jeu hier.|5|past_simple|Yesterday I bought a new game.
`,
  gram: `
How ___ is this cap?|much|many;old;long|Pour demander un prix : How much.|3|questions|Combien coûte cette casquette ?
These shoes ___ forty euros.|cost|costs;is cost;costing|« These shoes » (pluriel) : cost, sans -s.|4|present_simple|Ces chaussures coûtent quarante euros.
This book is ___ than that one.|cheaper|more cheap;cheapest;cheap|Adjectif court : cheap → cheaper than.|4|comparatives|Ce livre est moins cher que celui-là.
The watch is ___ expensive than the ring.|more|most;much;very|Adjectif long : more expensive than.|4|comparatives|La montre est plus chère que la bague.
I would like ___ bananas, please.|some|any;a;an|Pour demander poliment une quantité : some.|4|some_any|Je voudrais des bananes, s’il vous plaît.
Sorry, we haven’t got ___ bread today.|any|some;a;many|Dans une phrase négative : any.|4|some_any|Désolé, nous n’avons pas de pain aujourd’hui.
Last week, I ___ all my pocket money.|spent|spend;spends;will spend|« Last week » : passé. « Spend » est irrégulier : spent.|5|past_simple|La semaine dernière, j’ai dépensé tout mon argent de poche.
I ___ save money for a new bike.|am going to|am going;go to;will going|Un projet décidé : be going to + verbe.|5|going_to|Je vais économiser pour un nouveau vélo.
`,
  odd: `
coin;note;euro;basket|basket|Coin, note et euro concernent l’argent ; basket est un panier.|3
buy;sell;pay;cheap|cheap|Buy, sell et pay sont des verbes ; cheap (bon marché) est un adjectif.|3
market;shop;supermarket;wallet|wallet|Market, shop et supermarket sont des lieux où l’on achète ; wallet est un portefeuille.|3
pound;euro;dollar;price|price|Pound, euro et dollar sont des monnaies ; price veut dire « prix ».|4
`,
  mystery: `
coin|It is round and made of metal.;You can put it in your piggy bank.|3|Petite, ronde, en métal.
market|It is often outside.;You can buy fruit and vegetables there.|3|On y achète des fruits et légumes, souvent dehors.
receipt|The shop assistant gives it to you after you pay.;It shows the price of everything you bought.|4|On te le donne après avoir payé.
trolley|You push it in the supermarket.;You put your shopping in it.|4|On le pousse au supermarché.
`,
  act: `
Pay with a coin.|Paie avec une pièce.|🪙|💳;🧾;🛍️|2|pièce;carte bancaire;ticket de caisse;sac de courses
Take the shopping bag.|Prends le sac de courses.|🛍️|🧺;👛;🧾|2|sac de courses;panier;portefeuille;ticket de caisse
Put it in the basket.|Mets-le dans le panier.|🧺|🛍️;🗑️;👛|2|panier;sac de courses;poubelle;portefeuille
Give me your credit card.|Donne-moi ta carte bancaire.|💳|🪙;👛;🏷️|3|carte bancaire;pièce;portefeuille;étiquette de prix
Show me the price tag.|Montre-moi l’étiquette de prix.|🏷️|🧾;💳;🪙|3|étiquette de prix;ticket de caisse;carte bancaire;pièce
`,
  dialogues: [
    {
      id: 'd-bakery', title: 'At the bakery', level: 2,
      lines: [
        ['Baker', 'Good morning! Can I help you?', 'Bonjour ! Je peux t’aider ?'],
        ['Zoe', 'I’d like two croissants, please.', 'Je voudrais deux croissants, s’il vous plaît.'],
        ['Baker', 'Here you are. That’s two euros.', 'Voilà. Ça fait deux euros.'],
        ['Zoe', 'Thank you. Goodbye!', 'Merci. Au revoir !']
      ],
      gap: 1, wrong: ['I’m looking for the bus station.', 'It’s my turn.'],
      quiz: [['How much are the croissants?', 'Two euros', 'Two pounds;Ten euros', '« That’s two euros. »', 0]]
    },
    {
      id: 'd-present-mum', title: 'A present for Mum', level: 3,
      lines: [
        ['Assistant', 'Hello! Can I help you?', 'Bonjour ! Je peux t’aider ?'],
        ['Nathan', 'Yes, I’m looking for a present for my mum.', 'Oui, je cherche un cadeau pour ma maman.'],
        ['Assistant', 'What about this scarf? It’s twelve pounds.', 'Que penses-tu de cette écharpe ? Elle coûte douze livres.'],
        ['Nathan', 'Hmm, that’s too expensive. I’ve only got ten pounds.', 'Hum, c’est trop cher. Je n’ai que dix livres.'],
        ['Assistant', 'This candle is eight pounds.', 'Cette bougie coûte huit livres.'],
        ['Nathan', 'Perfect! I’ll take it.', 'Parfait ! Je la prends.']
      ],
      gap: 1, wrong: ['Yes, I’m fine, thank you.', 'It’s on sale, keep the change.'],
      quiz: [
        ['How much money has Nathan got?', 'Ten pounds', 'Twelve pounds;Eight pounds', '« I’ve only got ten pounds. »', 0],
        ['What does Nathan buy?', 'A candle', 'A scarf;A book', 'L’écharpe est trop chère ; il prend la bougie : « I’ll take it ».', 0]
      ]
    },
    {
      id: 'd-pocket-money', title: 'Saving up', level: 4,
      lines: [
        ['Grace', 'I get five euros of pocket money every week.', 'J’ai cinq euros d’argent de poche chaque semaine.'],
        ['Hugo', 'What do you do with it?', 'Qu’est-ce que tu en fais ?'],
        ['Grace', 'I save it. I want to buy a skateboard.', 'Je le mets de côté. Je veux acheter un skateboard.'],
        ['Hugo', 'How much is it?', 'Combien il coûte ?'],
        ['Grace', 'Sixty euros. So I need to save for twelve weeks!', 'Soixante euros. Donc je dois économiser pendant douze semaines !']
      ],
      gap: 2, wrong: ['It’s closed on Sunday.', 'Here you are.'],
      quiz: [
        ['How much pocket money does Grace get?', 'Five euros a week', 'Sixty euros a week;Twelve euros a week', '« I get five euros of pocket money every week. »', 0],
        ['How many weeks does she need to save?', 'Twelve', 'Five;Sixty', '60 € ÷ 5 € = 12 semaines : « I need to save for twelve weeks! »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-market-day', title: 'Market day', level: 4, tag: 'comparatives',
      text: 'Every Saturday, there is a market in my village. My mum and I go there at nine o’clock. We buy fruit, vegetables, cheese and fresh bread. The fruit at the market is cheaper than at the supermarket, and it’s very good. My favourite stall sells honey from the mountains. We always take our own basket, so we don’t need plastic bags.',
      fr: 'Chaque samedi, il y a un marché dans mon village. Ma maman et moi y allons à neuf heures. Nous achetons des fruits, des légumes, du fromage et du pain frais. Les fruits du marché sont moins chers qu’au supermarché, et ils sont très bons. Mon stand préféré vend du miel de montagne. Nous prenons toujours notre propre panier, donc nous n’avons pas besoin de sacs en plastique.',
      quiz: [
        ['When is the market?', 'Every Saturday', 'Every Sunday;Every day', '« Every Saturday, there is a market in my village. »'],
        ['What is good about the fruit at the market?', 'It is cheaper and very good', 'It is bigger;It comes from the supermarket', '« The fruit at the market is cheaper than at the supermarket, and it’s very good. »'],
        ['Why don’t they need plastic bags?', 'They take their own basket', 'The market gives paper bags;They buy nothing', '« We always take our own basket ».']
      ]
    },
    {
      id: 'r-birthday-money', title: 'Birthday shopping', level: 5, tag: 'past_simple,future_will',
      text: 'Last Saturday, I went shopping with my grandmother for my birthday. She gave me thirty euros. First, I looked at video games, but they were too expensive. Then I found a great book about volcanoes for fifteen euros and a comic for eight euros. I paid at the checkout and the shop assistant gave me my change. I will keep the rest of the money for the cinema.',
      fr: 'Samedi dernier, je suis allé faire les magasins avec ma grand-mère pour mon anniversaire. Elle m’a donné trente euros. D’abord, j’ai regardé les jeux vidéo, mais ils étaient trop chers. Puis j’ai trouvé un super livre sur les volcans à quinze euros et une BD à huit euros. J’ai payé à la caisse et le vendeur m’a rendu la monnaie. Je garderai le reste de l’argent pour le cinéma.',
      quiz: [
        ['Why didn’t the writer buy a video game?', 'They were too expensive', 'The shop was closed;He doesn’t like games', '« they were too expensive ».'],
        ['How much did the book and the comic cost together?', 'Twenty-three euros', 'Thirty euros;Fifteen euros', '15 € + 8 € = 23 € (twenty-three euros).'],
        ['What will the writer do with the rest of the money?', 'Keep it for the cinema', 'Buy sweets;Give it back to Grandma', '« I will keep the rest of the money for the cinema. »']
      ]
    }
  ]
});
