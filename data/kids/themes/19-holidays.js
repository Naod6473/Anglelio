/* Thème 19 — Holidays & Celebrations */
AE.content.registerTheme({
  id: 'holidays',
  intro: 'Sur l’Île des Fêtes, on célèbre les anniversaires, Noël, Halloween, et on raconte ses vacances.',
  lessons: ['past_simple', 'going_to', 'future_will'],
  words: `
holiday|vacances|n|1||We are on holiday in Spain.|Nous sommes en vacances en Espagne.|vacation
birthday|anniversaire|n|1|🎂|Happy birthday, Tom!|Joyeux anniversaire, Tom !
party|fête|n|1|🎉|Come to my party on Saturday!|Viens à ma fête samedi !
present|cadeau|n|1|🎁|Thank you for the present!|Merci pour le cadeau !|gift
Christmas|Noël|n|1|🎄|We decorate the tree at Christmas.|Nous décorons le sapin à Noël.
Easter|Pâques|n|1|🐣|We look for chocolate eggs at Easter.|Nous cherchons des œufs en chocolat à Pâques.
Halloween|Halloween|n|1|👻|At Halloween, children wear costumes.|À Halloween, les enfants portent des déguisements.
balloon|ballon de baudruche|n|1|🎈|The red balloon flies away.|Le ballon rouge s’envole.
beach|plage|n|1|🏖️|We play volleyball on the beach.|Nous jouons au volley sur la plage.
Santa Claus|père Noël|n|1|🎅|Santa Claus brings presents.|Le père Noël apporte des cadeaux.|Father Christmas,Santa
candle|bougie|n|2|🕯️|Blow out the candle!|Souffle la bougie !
New Year|Nouvel An|n|2||We watch fireworks at New Year.|Nous regardons des feux d’artifice au Nouvel An.
card|carte (de vœux)|n|2||I write a birthday card for Grandma.|J’écris une carte d’anniversaire pour Mamie.
fireworks|feu d’artifice|n|2|🎆|The fireworks are beautiful.|Le feu d’artifice est magnifique.
costume|déguisement|n|2||I have got a pirate costume.|J’ai un déguisement de pirate.
mask|masque|n|2|🎭|He is wearing a lion mask.|Il porte un masque de lion.
tent|tente|n|2|⛺|We sleep in a tent.|Nous dormons sous une tente.
hotel|hôtel|n|2|🏨|Our hotel is near the sea.|Notre hôtel est près de la mer.
postcard|carte postale|n|2||Send me a postcard!|Envoie-moi une carte postale !
camping|camping|n|2|🏕️|We go camping in the mountains.|Nous allons faire du camping à la montagne.
pumpkin|citrouille|n|2|🎃|We make a lantern with a pumpkin.|Nous fabriquons une lanterne avec une citrouille.
Easter egg|œuf de Pâques|n|2|🥚|The Easter egg is hidden in the garden.|L’œuf de Pâques est caché dans le jardin.
invitation|invitation|n|2|✉️|Thank you for the invitation!|Merci pour l’invitation !
sandcastle|château de sable|n|2||Our sandcastle has got four towers.|Notre château de sable a quatre tours.
celebrate|fêter, célébrer|v|3|🥳|We celebrate my birthday with a cake.|Nous fêtons mon anniversaire avec un gâteau.
invite|inviter|v|3||I invite all my class to my party.|J’invite toute ma classe à ma fête.
decorate|décorer|v|3||Let’s decorate the classroom!|Décorons la classe !
guest|invité, invitée|n|3||Each guest has a party hat.|Chaque invité a un chapeau de fête.
wedding|mariage|n|3|💒|My aunt’s wedding is in June.|Le mariage de ma tante est en juin.
souvenir|souvenir (objet)|n|3||I bought a souvenir for my friend.|J’ai acheté un souvenir pour mon ami.
`,
  expressions: `
Happy birthday!|Joyeux anniversaire !|1|pour souhaiter un bon anniversaire à quelqu’un|Happy birthday, Lily! You are ten today!|Joyeux anniversaire, Lily ! Tu as dix ans aujourd’hui !
Merry Christmas!|Joyeux Noël !|1|pour souhaiter un joyeux Noël|Merry Christmas, everybody!|Joyeux Noël à tous !||Happy Christmas
Happy New Year!|Bonne année !|1|pour souhaiter une bonne année le premier janvier|Happy New Year! Let’s watch the fireworks.|Bonne année ! Regardons le feu d’artifice.
Would you like to come to my party?|Veux-tu venir à ma fête ?|2|pour inviter quelqu’un à ta fête|Would you like to come to my party on Saturday?|Veux-tu venir à ma fête samedi ?|« Would you like…? » est la façon polie d’inviter ou de proposer.
Trick or treat!|Des bonbons ou un sort !|2|pour demander des bonbons en frappant aux portes le soir d’Halloween|Knock, knock! Trick or treat!|Toc, toc ! Des bonbons ou un sort !|Mot à mot : « Farce ou friandise ! »
Make a wish!|Fais un vœu !|2|pour dire à quelqu’un de faire un vœu avant de souffler ses bougies|Close your eyes and make a wish!|Ferme les yeux et fais un vœu !
It’s for you.|C’est pour toi.|1|pour offrir un cadeau à quelqu’un|Here’s a present. It’s for you!|Voici un cadeau. C’est pour toi !||It is for you
What did you do on holiday?|Qu’as-tu fait pendant les vacances ?|4|pour demander à quelqu’un de raconter ses vacances|— What did you do on holiday? — I went to the beach.|— Qu’as-tu fait pendant les vacances ? — Je suis allé à la plage.|On dit « on holiday » (en vacances). « Did » indique une question au passé.
Have fun!|Amuse-toi bien !|1|pour souhaiter à quelqu’un de passer un bon moment|You’re going to the party? Have fun!|Tu vas à la fête ? Amuse-toi bien !
Congratulations!|Félicitations !|2|pour féliciter quelqu’un pour une réussite ou un grand événement|You won the prize? Congratulations!|Tu as gagné le prix ? Félicitations !
`,
  build: `
My birthday party is on Saturday.|Ma fête d’anniversaire est samedi.|3|
We go to the beach in summer.|Nous allons à la plage en été.|3||In summer we go to the beach.
I wear a costume at Halloween.|Je porte un déguisement à Halloween.|3||At Halloween I wear a costume.
We are decorating the Christmas tree.|Nous sommes en train de décorer le sapin de Noël.|4|present_continuous
There are ten candles on the cake.|Il y a dix bougies sur le gâteau.|4|there_is
Can I open my presents now?|Est-ce que je peux ouvrir mes cadeaux maintenant ?|4|can
Last summer we went camping.|L’été dernier, nous sommes allés camper.|5|past_simple|We went camping last summer.
We are going to visit Rome at Easter.|Nous allons visiter Rome à Pâques.|5|going_to|At Easter we are going to visit Rome.
`,
  gram: `
Christmas is ___ December.|in|on;at;to|Devant un mois : in December.|3||Noël est en décembre.
My party is ___ Saturday.|on|in;at;to|Devant un jour : on Saturday.|3||Ma fête a lieu samedi.
We ___ camping every summer.|go|goes;going;are go|Une habitude avec « we » : go.|3|present_simple|Nous allons camper chaque été.
Look! Mum ___ the balloons.|is blowing up|blows up;blow up;are blowing up|« Look! » : l’action est en cours → is blowing up.|4|present_continuous|Regarde ! Maman gonfle les ballons.
___ you like to come to my party?|Would|Do;Are;Will|« Would you like…? » sert à inviter poliment.|4||Voudrais-tu venir à ma fête ?
Last year, we ___ in a hotel.|stayed|stay;stays;will stay|« Last year » : passé → stayed.|5|past_simple|L’année dernière, nous avons séjourné à l’hôtel.
What ___ you do last holiday?|did|do;does;were|Question au passé : What did you do…?|5|past_simple,questions|Qu’as-tu fait pendant les dernières vacances ?
Next week, I ___ ten!|will be|was;am being;were|« Next week » : futur → will be.|5|future_will|La semaine prochaine, j’aurai dix ans !
`,
  odd: `
Christmas;Easter;Halloween;beach|beach|Christmas, Easter et Halloween sont des fêtes ; beach est un lieu (la plage).|2
balloon;candle;present;tent|tent|Balloon, candle et present font penser à un anniversaire ; tent sert au camping.|3
costume;mask;pumpkin;postcard|postcard|Costume, mask et pumpkin font penser à Halloween ; postcard est une carte postale.|3
invite;decorate;celebrate;guest|guest|Invite, decorate et celebrate sont des verbes ; guest (invité) est un nom.|4
`,
  mystery: `
birthday|It comes once a year.;You get presents and a cake with candles.|3|Il revient une fois par an, avec un gâteau.
tent|You sleep in it when you go camping.;You put it up in a field.|3|On dort dedans en camping.
Santa Claus|He has got a white beard and a red suit.;He brings presents at Christmas.|4|Il apporte les cadeaux à Noël.
pumpkin|It is big and orange.;You make a lantern with it at Halloween.|4|Grosse, orange, on en fait une lanterne.
`,
  act: `
Blow out the candles.|Souffle les bougies.|🕯️|🎈;🎁;🎉|2|bougie;ballon;cadeau;fête
Open your present.|Ouvre ton cadeau.|🎁|🎂;🎈;🎅|2|cadeau;gâteau;ballon;père Noël
Go to the beach.|Va à la plage.|🏖️|⛺;🏨;💒|2|plage;tente;hôtel;mariage
Look at the fireworks.|Regarde le feu d’artifice.|🎆|🎈;🕯️;🎄|2|feu d’artifice;ballon;bougie;sapin
Put on your mask.|Mets ton masque.|🎭|🎃;👻;🎄|3|masque;citrouille;fantôme;sapin
`,
  dialogues: [
    {
      id: 'd-invite', title: 'An invitation', level: 2,
      lines: [
        ['Lily', 'Would you like to come to my party?', 'Veux-tu venir à ma fête ?'],
        ['Max', 'Yes, please! When is it?', 'Oui, avec plaisir ! C’est quand ?'],
        ['Lily', 'On Saturday, at three o’clock.', 'Samedi, à trois heures.'],
        ['Max', 'Great! Thank you!', 'Super ! Merci !']
      ],
      gap: 1, wrong: ['I’m fine, thank you.', 'Turn left.'],
      quiz: [['When is the party?', 'On Saturday', 'On Sunday;On Friday', '« On Saturday, at three o’clock. »', 0]]
    },
    {
      id: 'd-birthday-cake', title: 'Make a wish!', level: 3,
      lines: [
        ['Friends', 'Happy birthday, Emma!', 'Joyeux anniversaire, Emma !'],
        ['Emma', 'Thank you! Wow, what a big cake!', 'Merci ! Waouh, quel gros gâteau !'],
        ['Dad', 'There are ten candles. Make a wish!', 'Il y a dix bougies. Fais un vœu !'],
        ['Emma', 'OK… Done! Can I open my presents now?', 'D’accord… C’est fait ! Est-ce que je peux ouvrir mes cadeaux maintenant ?'],
        ['Mum', 'Yes, of course. This one is from Grandma.', 'Oui, bien sûr. Celui-ci vient de Mamie.']
      ],
      gap: 2, wrong: ['It’s raining cats and dogs.', 'Keep the change.'],
      quiz: [
        ['How old is Emma today?', 'Ten', 'Nine;Eleven', '« There are ten candles » : elle a dix ans.', 0],
        ['Who is the first present from?', 'Grandma', 'Dad;Emma’s friend', '« This one is from Grandma. »', 1]
      ]
    },
    {
      id: 'd-back-to-school', title: 'Back to school', level: 4,
      lines: [
        ['Teacher', 'Welcome back! What did you do in the summer holidays, Sam?', 'Bon retour ! Qu’as-tu fait pendant les vacances d’été, Sam ?'],
        ['Sam', 'I went camping in Scotland with my family. We slept in a tent!', 'Je suis allé camper en Écosse avec ma famille. Nous avons dormi sous une tente !'],
        ['Teacher', 'How exciting! Was it cold?', 'Comme c’est chouette ! Il faisait froid ?'],
        ['Sam', 'Yes, at night it was quite cold, but it didn’t rain.', 'Oui, la nuit il faisait assez froid, mais il n’a pas plu.'],
        ['Teacher', 'And what are you going to do next summer?', 'Et que vas-tu faire l’été prochain ?'],
        ['Sam', 'We are going to visit my cousins in Italy.', 'Nous allons rendre visite à mes cousins en Italie.']
      ],
      gap: 3, wrong: ['Yes, I’m going to the party.', 'Happy New Year!'],
      quiz: [
        ['Where did Sam go camping?', 'In Scotland', 'In Italy;In France', '« I went camping in Scotland ».', 0],
        ['What is Sam going to do next summer?', 'Visit his cousins in Italy', 'Go camping in Scotland;Stay at home', '« We are going to visit my cousins in Italy. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-halloween', title: 'Halloween', level: 4, tag: 'present_simple',
      text: 'Halloween is on the thirty-first of October. In the UK and the USA, children wear costumes: ghosts, witches, vampires or superheroes. They go from house to house and say “Trick or treat!”. People give them sweets. Families also make lanterns with pumpkins. Inside the pumpkin, they put a candle. It is spooky but fun!',
      fr: 'Halloween a lieu le 31 octobre. Au Royaume-Uni et aux États-Unis, les enfants portent des déguisements : fantômes, sorcières, vampires ou super-héros. Ils vont de maison en maison et disent « Des bonbons ou un sort ! ». Les gens leur donnent des bonbons. Les familles fabriquent aussi des lanternes avec des citrouilles. À l’intérieur de la citrouille, elles mettent une bougie. C’est effrayant mais amusant !',
      quiz: [
        ['When is Halloween?', 'On the thirty-first of October', 'On the first of November;On the twenty-fifth of December', '« Halloween is on the thirty-first of October. »'],
        ['What do people give the children?', 'Sweets', 'Money;Pumpkins', '« People give them sweets. »'],
        ['What do families put inside the pumpkin?', 'A candle', 'Sweets;A costume', '« Inside the pumpkin, they put a candle. »']
      ]
    },
    {
      id: 'r-chinese-new-year', title: 'Chinese New Year in London', level: 5, tag: 'past_simple,future_will',
      text: 'Last year, my family celebrated Chinese New Year in London with our Chinese neighbours. The streets were full of red lanterns. We watched a dragon dance and we ate delicious dumplings. The children received red envelopes with money inside: it is a tradition for good luck! This year, we will invite our neighbours to celebrate Christmas with us.',
      fr: 'L’année dernière, ma famille a fêté le Nouvel An chinois à Londres avec nos voisins chinois. Les rues étaient pleines de lanternes rouges. Nous avons regardé une danse du dragon et mangé de délicieux raviolis. Les enfants ont reçu des enveloppes rouges avec de l’argent dedans : c’est une tradition porte-bonheur ! Cette année, nous inviterons nos voisins à fêter Noël avec nous.',
      quiz: [
        ['What colour were the lanterns?', 'Red', 'Gold;Green', '« The streets were full of red lanterns. »'],
        ['What was inside the red envelopes?', 'Money', 'Sweets;Letters', '« red envelopes with money inside ».'],
        ['What will the family do this year?', 'Invite the neighbours for Christmas', 'Go to China;Watch a dragon dance', '« This year, we will invite our neighbours to celebrate Christmas with us. »']
      ]
    }
  ]
});
