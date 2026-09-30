/* Thème 10 — Food & Drinks */
AE.content.registerTheme({
  id: 'food',
  intro: 'Au Marché Gourmand, on nomme les fruits, les légumes et les plats, et on apprend à commander poliment.',
  lessons: ['some_any', 'articles', 'questions'],
  words: `
apple|pomme|n|1|🍎|I eat an apple every day.|Je mange une pomme tous les jours.
banana|banane|n|1|🍌|This banana is yellow.|Cette banane est jaune.
strawberry|fraise|n|1|🍓|I love strawberry ice cream.|J’adore la glace à la fraise.
carrot|carotte|n|1|🥕|I put a carrot in the soup.|Je mets une carotte dans la soupe.
tomato|tomate|n|1|🍅|I would like a tomato salad.|Je voudrais une salade de tomates.
bread|pain|n|1|🍞|Can you buy some bread, please?|Peux-tu acheter du pain, s’il te plaît ?
cheese|fromage|n|1|🧀|France has got hundreds of kinds of cheese.|La France a des centaines de sortes de fromages.
egg|œuf|n|1|🥚|I have an egg for breakfast.|Je mange un œuf au petit déjeuner.
milk|lait|n|1|🥛|I drink a glass of milk.|Je bois un verre de lait.
water|eau|n|1|💧|Drink water when you are thirsty.|Bois de l’eau quand tu as soif.
pizza|pizza|n|1|🍕|Let’s order a pizza!|Commandons une pizza !
cake|gâteau|n|1|🍰|Mum is making a birthday cake.|Maman prépare un gâteau d’anniversaire.
ice cream|glace|n|1|🍦|I want a chocolate ice cream.|Je veux une glace au chocolat.
chocolate|chocolat|n|1|🍫|Dark chocolate is bitter.|Le chocolat noir est amer.
sandwich|sandwich|n|1|🥪|I have a cheese sandwich for lunch.|J’ai un sandwich au fromage pour le déjeuner.
pear|poire|n|2|🍐|This pear is very sweet.|Cette poire est très sucrée.
grapes|raisin|n|2|🍇|We have grapes for dessert.|Nous avons du raisin au dessert.
lemon|citron|n|2|🍋|A lemon is sour.|Un citron est acide.
cherry|cerise|n|2|🍒|There is a cherry on the cake.|Il y a une cerise sur le gâteau.
potato|pomme de terre|n|2|🥔|A potato grows under the ground.|Une pomme de terre pousse sous la terre.
juice|jus|n|2|🧃|I drink orange juice at breakfast.|Je bois du jus d’orange au petit déjeuner.
soup|soupe|n|2|🍲|The soup is too hot.|La soupe est trop chaude.
rice|riz|n|2|🍚|In Japan, people eat a lot of rice.|Au Japon, les gens mangent beaucoup de riz.
meat|viande|n|2|🥩|Vegetarians don’t eat meat.|Les végétariens ne mangent pas de viande.
chicken|poulet|n|2|🍗|We have roast chicken on Sunday.|Nous mangeons du poulet rôti le dimanche.
biscuit|biscuit, gâteau sec|n|2|🍪|Can I have a biscuit?|Est-ce que je peux avoir un biscuit ?|cookie
honey|miel|n|2|🍯|Bees make honey.|Les abeilles fabriquent le miel.
hungry|affamé, qui a faim|adj|2|😋|I’m hungry! What’s for lunch?|J’ai faim ! Qu’est-ce qu’on mange ?
thirsty|assoiffé, qui a soif|adj|2||I’m thirsty after the race.|J’ai soif après la course.
delicious|délicieux|adj|3||This cake is delicious!|Ce gâteau est délicieux !
`,
  expressions: `
I would like a sandwich, please.|Je voudrais un sandwich, s’il vous plaît.|2|pour commander poliment quelque chose à manger|I would like a sandwich, please. With cheese!|Je voudrais un sandwich, s’il vous plaît. Au fromage !|« I would like » (I’d like) est plus poli que « I want ».|I’d like a sandwich please
Can I have some water, please?|Est-ce que je peux avoir de l’eau, s’il te plaît ?|1|pour demander poliment de l’eau à boire|Can I have some water, please? I’m thirsty.|Est-ce que je peux avoir de l’eau, s’il te plaît ? J’ai soif.||May I have some water please?
I’m hungry.|J’ai faim.|1|pour dire que tu as envie de manger|Mum, I’m hungry! When is lunch?|Maman, j’ai faim ! C’est quand, le déjeuner ?|En anglais, on dit « I am hungry » (je suis affamé) : on ne dit pas « I have hunger ».|I am hungry
What’s for dinner?|Qu’est-ce qu’on mange ce soir ?|2|pour demander ce qu’il y a au repas du soir|Mmm, it smells good! What’s for dinner?|Mmm, ça sent bon ! Qu’est-ce qu’on mange ce soir ?|Mot à mot : « Qu’est-ce qui est pour le dîner ? »|What is for dinner?
Enjoy your meal!|Bon appétit !|2|pour souhaiter un bon repas à quelqu’un|Here is your pizza. Enjoy your meal!|Voici ta pizza. Bon appétit !|L’anglais n’a pas d’expression toute faite comme « bon appétit » : on dit souvent « Enjoy your meal! » (Profite de ton repas !).
It’s delicious!|C’est délicieux !|1|pour dire que tu trouves un plat très bon|Mmm! Your soup is delicious!|Mmm ! Ta soupe est délicieuse !||It is delicious
I don’t like mushrooms.|Je n’aime pas les champignons.|2|pour dire qu’un aliment ne te plaît pas|No, thank you. I don’t like mushrooms.|Non merci. Je n’aime pas les champignons.||I do not like mushrooms
Would you like some more?|En veux-tu encore ?|3|pour proposer à quelqu’un de se resservir|— Would you like some more? — Yes, please!|— En veux-tu encore ? — Oui, s’il te plaît !|« Would you like…? » est une façon polie de proposer quelque chose.
Can you pass the salt, please?|Peux-tu me passer le sel, s’il te plaît ?|2|pour demander à quelqu’un de te donner le sel à table|Can you pass the salt, please? Thanks!|Peux-tu me passer le sel, s’il te plaît ? Merci !
I’m full.|J’ai assez mangé.|3|pour dire que tu n’as plus faim à la fin du repas|No more cake for me, thanks. I’m full!|Plus de gâteau pour moi, merci. J’ai assez mangé !|Mot à mot : « Je suis plein ». C’est tout à fait poli en anglais !|I am full
`,
  build: `
Can I have a glass of water?|Est-ce que je peux avoir un verre d’eau ?|3|can
I like apples and bananas.|J’aime les pommes et les bananes.|3|plural|I like bananas and apples.
She doesn’t like carrots.|Elle n’aime pas les carottes.|4|negation
Would you like some juice?|Veux-tu du jus ?|4|some_any
There is some milk in the fridge.|Il y a du lait dans le frigo.|4|there_is,some_any
We haven’t got any bread.|Nous n’avons pas de pain.|4|some_any,negation
I am eating a strawberry ice cream.|Je suis en train de manger une glace à la fraise.|4|present_continuous
We ate pizza last night.|Nous avons mangé une pizza hier soir.|5|past_simple|Last night we ate pizza.
`,
  gram: `
I eat ___ apple every day.|an|a;two;many|« Apple » commence par un son de voyelle : an apple.|3|articles|Je mange une pomme chaque jour.
Would you like ___ tea?|some|any;a;many|Pour proposer quelque chose, on utilise « some » : Would you like some tea?|4|some_any|Voudrais-tu du thé ?
There isn’t ___ milk left.|any|some;many;a|Dans une phrase négative, on utilise « any ».|4|some_any|Il ne reste plus de lait.
How ___ sugar do you want?|much|many;old;long|Le sucre ne se compte pas : How much.|4|questions|Combien de sucre veux-tu ?
How ___ eggs do we need?|many|much;old;big|Les œufs se comptent : How many.|3|questions|Combien d’œufs nous faut-il ?
My brother ___ fish.|doesn’t eat|don’t eat;doesn’t eats;not eat|Avec « he » : doesn’t + verbe sans -s.|4|negation,present_simple|Mon frère ne mange pas de poisson.
Mum ___ a cake right now.|is making|makes;make;made|« Right now » : l’action est en cours → is making.|4|present_continuous|Maman prépare un gâteau en ce moment.
Tomorrow, I ___ a chocolate cake.|am going to make|made;make;makes|Pour un projet décidé : be going to + verbe.|5|going_to|Demain, je vais faire un gâteau au chocolat.
`,
  odd: `
apple;banana;pear;carrot|carrot|Apple, banana et pear sont des fruits ; carrot est un légume.|2
milk;juice;water;bread|bread|Milk, juice et water sont des boissons ; bread est un aliment solide.|2
cake;biscuit;ice cream;soup|soup|Cake, biscuit et ice cream sont des desserts sucrés ; soup est un plat salé.|3
hungry;thirsty;tired;cheese|cheese|Hungry, thirsty et tired décrivent comment on se sent ; cheese est un aliment.|3
`,
  mystery: `
banana|It is a long yellow fruit.;Monkeys love it.|3|Un long fruit jaune.
egg|A hen lays it.;You can boil it or fry it.|3|La poule le pond.
cheese|It is made from milk.;Mice love it.;France has got hundreds of kinds.|4|Il est fait avec du lait.
honey|It is sweet and golden.;Bees make it.|4|Les abeilles le fabriquent.
`,
  act: `
Give me the banana.|Donne-moi la banane.|🍌|🍎;🍐;🍋|2|banane;pomme;poire;citron
Take the cheese.|Prends le fromage.|🧀|🍞;🥚;🍰|2|fromage;pain;œuf;gâteau
Show me the strawberry.|Montre-moi la fraise.|🍓|🍒;🍅;🍇|2|fraise;cerises;tomate;raisin
Pick the ice cream.|Choisis la glace.|🍦|🍰;🍫;🍪|2|glace;gâteau;chocolat;biscuit
Show me something to drink.|Montre-moi quelque chose à boire.|🥛|🍞;🥕;🧀|3|lait;pain;carotte;fromage
`,
  dialogues: [
    {
      id: 'd-cafe', title: 'At the café', level: 2,
      lines: [
        ['Waiter', 'Hello! What would you like?', 'Bonjour ! Que désires-tu ?'],
        ['Eva', 'I would like a sandwich, please.', 'Je voudrais un sandwich, s’il vous plaît.'],
        ['Waiter', 'And to drink?', 'Et comme boisson ?'],
        ['Eva', 'An apple juice, please.', 'Un jus de pomme, s’il vous plaît.']
      ],
      gap: 1, wrong: ['I’m eleven years old.', 'Good night, see you tomorrow.'],
      quiz: [['What does Eva want to drink?', 'An apple juice', 'A milkshake;Some water', '« An apple juice, please. »', 0]]
    },
    {
      id: 'd-dinner', title: 'Dinner time', level: 3,
      lines: [
        ['Dad', 'Dinner is ready! We’ve got chicken, rice and carrots.', 'Le dîner est prêt ! Il y a du poulet, du riz et des carottes.'],
        ['Lila', 'Mmm, it smells delicious!', 'Mmm, ça sent délicieusement bon !'],
        ['Dad', 'Would you like some more rice, Lila?', 'Tu veux encore du riz, Lila ?'],
        ['Lila', 'No, thank you. I’m full.', 'Non merci. J’ai assez mangé.'],
        ['Dad', 'OK. What about some ice cream for dessert?', 'D’accord. Et une glace pour le dessert ?'],
        ['Lila', 'Yes, please!', 'Oui, s’il te plaît !']
      ],
      gap: 3, wrong: ['Yes, it’s raining.', 'It’s half past nine.'],
      quiz: [
        ['What is for dinner?', 'Chicken, rice and carrots', 'Pizza and salad;Soup and bread', '« We’ve got chicken, rice and carrots. »', 0],
        ['Does Lila want some ice cream?', 'Yes, she does', 'No, she is full;No, she doesn’t like it', 'Elle refuse le riz, mais pour la glace elle répond « Yes, please! ».', 1]
      ]
    },
    {
      id: 'd-picnic', title: 'Preparing a picnic', level: 4,
      lines: [
        ['Ben', 'What can we take for the picnic?', 'Qu’est-ce qu’on peut emporter pour le pique-nique ?'],
        ['Kate', 'Let’s make some sandwiches. Have we got any cheese?', 'Faisons des sandwichs. Est-ce qu’on a du fromage ?'],
        ['Ben', 'Yes, but we haven’t got any bread.', 'Oui, mais on n’a pas de pain.'],
        ['Kate', 'No problem, I’ll buy some at the bakery.', 'Pas de problème, j’en achèterai à la boulangerie.'],
        ['Ben', 'Great! I’ll bring some strawberries and a bottle of water.', 'Super ! J’apporterai des fraises et une bouteille d’eau.']
      ],
      gap: 2, wrong: ['Yes, I’m very hungry and thirsty.', 'It’s my birthday on Friday.'],
      quiz: [
        ['What is missing for the sandwiches?', 'Bread', 'Cheese;Water', '« we haven’t got any bread ».', 0],
        ['What will Ben bring?', 'Strawberries and water', 'Bread and cheese;Sandwiches', '« I’ll bring some strawberries and a bottle of water. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-breakfasts', title: 'Breakfasts around the world', level: 4, tag: 'present_simple',
      text: 'People eat different breakfasts around the world. In England, some people eat eggs, beans and toast. In France, children often have bread with butter and jam, and a bowl of hot chocolate. In Japan, breakfast can be rice, fish and soup. What do you have for breakfast? I have cereal with milk and a glass of orange juice.',
      fr: 'Dans le monde, les gens mangent des petits déjeuners différents. En Angleterre, certains mangent des œufs, des haricots et des toasts. En France, les enfants prennent souvent du pain avec du beurre et de la confiture, et un bol de chocolat chaud. Au Japon, le petit déjeuner peut être du riz, du poisson et de la soupe. Et toi, que prends-tu au petit déjeuner ? Moi, je prends des céréales avec du lait et un verre de jus d’orange.',
      quiz: [
        ['What do some English people eat for breakfast?', 'Eggs, beans and toast', 'Rice and fish;Bread and jam', '« In England, some people eat eggs, beans and toast. »'],
        ['Where can breakfast be rice, fish and soup?', 'In Japan', 'In France;In England', '« In Japan, breakfast can be rice, fish and soup. »'],
        ['What does the writer drink? Write two words.', 'orange juice', 'a glass of orange juice', '« a glass of orange juice ».', 'typed']
      ]
    },
    {
      id: 'r-cooking', title: 'The cooking class', level: 5, tag: 'past_simple,going_to',
      text: 'Last Saturday, I went to a cooking class with my dad. We made a pizza from the beginning! First, we made the dough with flour, water and yeast. Then we put tomato sauce, cheese and mushrooms on it. We waited twenty minutes, and it was ready. It was delicious! Next week, we are going to make a chocolate cake.',
      fr: 'Samedi dernier, je suis allé à un cours de cuisine avec mon papa. Nous avons fait une pizza de A à Z ! D’abord, nous avons fait la pâte avec de la farine, de l’eau et de la levure. Ensuite, nous avons mis de la sauce tomate, du fromage et des champignons dessus. Nous avons attendu vingt minutes, et elle était prête. C’était délicieux ! La semaine prochaine, nous allons faire un gâteau au chocolat.',
      quiz: [
        ['Who did the writer go with?', 'With his dad', 'With his mum;With his friend', '« I went to a cooking class with my dad ».'],
        ['What did they put on the pizza?', 'Tomato sauce, cheese and mushrooms', 'Chicken and rice;Strawberries and honey', '« we put tomato sauce, cheese and mushrooms on it ».'],
        ['What are they going to make next week?', 'A chocolate cake', 'A pizza;A soup', '« Next week, we are going to make a chocolate cake. »']
      ]
    }
  ]
});
