/* Thème 13 — Town & Directions */
AE.content.registerTheme({
  id: 'town',
  intro: 'Dans le Quartier du Centre, on découvre les lieux de la ville et on apprend à demander et à indiquer son chemin.',
  lessons: ['prepositions', 'imperative', 'there_is'],
  words: `
street|rue|n|1||My school is in this street.|Mon école est dans cette rue.
park|parc|n|1|🏞️|Let’s play football in the park.|Allons jouer au foot au parc.
bank|banque|n|1|🏦|The bank is next to the café.|La banque est à côté du café.
cinema|cinéma|n|1|🎬|We watch a film at the cinema.|Nous regardons un film au cinéma.|movie theater
bakery|boulangerie|n|1|🥐|The bakery sells fresh bread.|La boulangerie vend du pain frais.
supermarket|supermarché|n|1|🛒|We buy food at the supermarket.|Nous achetons de la nourriture au supermarché.
castle|château|n|1|🏰|The castle is on a hill.|Le château est sur une colline.
left|à gauche|adv|1|⬅️|Turn left at the church.|Tourne à gauche à l’église.
right|à droite|adv|1|➡️|The bakery is on your right.|La boulangerie est sur ta droite.
zoo|zoo|n|1|🦓|The zoo has got two lions.|Le zoo a deux lions.
map|plan, carte|n|1|🗺️|Look at the map!|Regarde le plan !
town|ville|n|2||Our town has got a big market.|Notre ville a un grand marché.
post office|poste|n|2|🏤|I send a letter at the post office.|J’envoie une lettre à la poste.
library|bibliothèque|n|2||I borrow books from the library.|J’emprunte des livres à la bibliothèque.
museum|musée|n|2|🏛️|The museum is closed on Monday.|Le musée est fermé le lundi.
restaurant|restaurant|n|2|🍽️|We eat at a restaurant on Sundays.|Nous mangeons au restaurant le dimanche.
police station|commissariat|n|2|🚓|The police station is opposite the bank.|Le commissariat est en face de la banque.
church|église|n|2|⛪|The church has got a tall tower.|L’église a une haute tour.
bridge|pont|n|2|🌉|Cross the bridge and turn left.|Traverse le pont et tourne à gauche.
traffic lights|feu de circulation|n|2|🚦|Stop at the traffic lights.|Arrête-toi au feu.
straight on|tout droit|adv|2|⬆️|Go straight on to the park.|Va tout droit jusqu’au parc.|straight ahead
turn|tourner|v|2|↪️|Turn at the second street.|Tourne à la deuxième rue.
cross|traverser|v|2||Cross the road carefully.|Traverse la route prudemment.
near|près de|prep|2||The station is near my house.|La gare est près de chez moi.
far|loin|adv|2||The beach is far from here.|La plage est loin d’ici.
swimming pool|piscine|n|2|🏊|The swimming pool opens at nine.|La piscine ouvre à neuf heures.
building|bâtiment, immeuble|n|2|🏢|This building is very tall.|Ce bâtiment est très haut.
corner|coin|n|3||The café is on the corner.|Le café est au coin de la rue.
opposite|en face de|prep|3||The bank is opposite the school.|La banque est en face de l’école.
next to|à côté de|prep|3||The café is next to the cinema.|Le café est à côté du cinéma.
`,
  expressions: `
Excuse me, where is the station?|Excusez-moi, où est la gare ?|2|pour demander poliment où se trouve la gare|Excuse me, where is the station, please?|Excusez-moi, où est la gare, s’il vous plaît ?||Excuse me where’s the station
I’m looking for the museum.|Je cherche le musée.|2|pour dire à quelqu’un que tu cherches le musée|Excuse me, I’m looking for the museum.|Excusez-moi, je cherche le musée.|« Look for » veut dire « chercher ». « Look at » veut dire « regarder ».|I am looking for the museum
Go straight on.|Va tout droit.|1|pour indiquer à quelqu’un de continuer tout droit|Go straight on and the park is on your left.|Va tout droit et le parc est sur ta gauche.||Go straight ahead
Turn left.|Tourne à gauche.|1|pour indiquer à quelqu’un de tourner à gauche|Turn left at the traffic lights.|Tourne à gauche au feu.
It’s on your right.|C’est sur ta droite.|2|pour dire que le lieu cherché est du côté droit|Walk for two minutes. It’s on your right.|Marche deux minutes. C’est sur ta droite.||It is on your right
Is it far?|C’est loin ?|1|pour demander si un endroit est à une grande distance|— The castle? Is it far? — No, it’s five minutes away.|— Le château ? C’est loin ? — Non, c’est à cinq minutes.
It’s just around the corner.|C’est juste au coin de la rue.|3|pour dire qu’un endroit est tout près|Don’t worry, the bakery is just around the corner.|Ne t’inquiète pas, la boulangerie est juste au coin de la rue.|Mot à mot : « juste autour du coin ».|It is just around the corner
Can you show me on the map?|Pouvez-vous me montrer sur le plan ?|3|pour demander à quelqu’un de t’indiquer un lieu sur un plan|I don’t understand. Can you show me on the map?|Je ne comprends pas. Pouvez-vous me montrer sur le plan ?
Cross the road at the zebra crossing.|Traverse au passage piéton.|3|pour dire où traverser la rue en sécurité|Be careful! Cross the road at the zebra crossing.|Attention ! Traverse au passage piéton.|« Zebra crossing » : le passage piéton ressemble aux rayures d’un zèbre !
How do I get to the library?|Comment je vais à la bibliothèque ?|3|pour demander le chemin pour aller à la bibliothèque|Excuse me, how do I get to the library?|Excusez-moi, comment je vais à la bibliothèque ?|« Get to » veut dire ici « se rendre à ».
`,
  build: `
The bank is next to the park.|La banque est à côté du parc.|3|prepositions
Turn right at the church.|Tourne à droite à l’église.|3|imperative
Don’t cross the road here.|Ne traverse pas la route ici.|3|imperative,negation
The cinema is opposite the library.|Le cinéma est en face de la bibliothèque.|4|prepositions
Is there a bakery near here?|Y a-t-il une boulangerie près d’ici ?|4|there_is,questions
There isn’t a museum in my town.|Il n’y a pas de musée dans ma ville.|4|there_is,negation
We are walking to the swimming pool.|Nous marchons jusqu’à la piscine.|4|present_continuous
We visited the castle last Sunday.|Nous avons visité le château dimanche dernier.|5|past_simple|Last Sunday we visited the castle.
`,
  gram: `
The café is ___ the bank and the cinema.|between|next;opposite of;under|Entre deux lieux : between.|4|prepositions|Le café est entre la banque et le cinéma.
The post office is ___ the station.|opposite|opposite of;in front;between|« En face de » se dit « opposite », sans « of ».|4|prepositions|La poste est en face de la gare.
Go straight ___ and turn left.|on|in;to;at|« Tout droit » : go straight on.|3||Va tout droit puis tourne à gauche.
There ___ two parks in my town.|are|is;am;be|Deux parcs : there are.|4|there_is|Il y a deux parcs dans ma ville.
___ is the library? — It’s next to the school.|Where|What;When;Who|On demande un lieu : Where.|3|questions|Où est la bibliothèque ? — À côté de l’école.
Excuse me, I’m looking ___ the castle.|for|at;to;after|« Chercher » se dit « look for ».|4||Excusez-moi, je cherche le château.
Tomorrow, we ___ the new museum.|will visit|visited;visit;visits|« Tomorrow » : futur → will visit.|5|future_will|Demain, nous visiterons le nouveau musée.
Look! The children ___ the road.|are crossing|cross;crosses;is crossing|« Look! » + pluriel : are crossing.|4|present_continuous|Regarde ! Les enfants traversent la route.
`,
  odd: `
bank;library;museum;left|left|Bank, library et museum sont des bâtiments ; left veut dire « à gauche ».|2
left;right;straight on;castle|castle|Left, right et straight on indiquent une direction ; castle est un bâtiment.|3
near;opposite;next to;cinema|cinema|Near, opposite et next to situent un lieu ; cinema est un bâtiment.|3
bakery;supermarket;restaurant;church|church|À la bakery, au supermarket et au restaurant, on trouve à manger ; church (église) n’est pas un commerce.|4
`,
  mystery: `
library|You can borrow books here.;You must be quiet in it.|3|On y emprunte des livres.
bridge|It goes over a river.;You can cross it on foot or by car.|3|Il passe au-dessus d’une rivière.
bakery|You buy bread and croissants here.;It smells good in the morning.|4|On y achète du pain.
castle|A king or a queen lived in it.;It has got towers and thick walls.|4|Un roi y habitait autrefois.
`,
  act: `
Turn left.|Tourne à gauche.|⬅️|➡️;⬆️;⬇️|2|flèche vers la gauche;flèche vers la droite;flèche tout droit;flèche vers le bas
Turn right.|Tourne à droite.|➡️|⬅️;⬆️;↩️|2|flèche vers la droite;flèche vers la gauche;flèche tout droit;demi-tour
Go straight on.|Va tout droit.|⬆️|⬅️;➡️;🔄|2|flèche tout droit;flèche vers la gauche;flèche vers la droite;tourner en rond
Stop at the traffic lights.|Arrête-toi au feu.|🚦|🌉;🏰;⛪|3|feu tricolore;pont;château;église
Go to the bakery.|Va à la boulangerie.|🥐|🏦;🏤;🎬|3|boulangerie;banque;poste;cinéma
`,
  dialogues: [
    {
      id: 'd-where-park', title: 'Where is the park?', level: 2,
      lines: [
        ['Tourist', 'Excuse me, where is the park?', 'Excusez-moi, où est le parc ?'],
        ['Mila', 'Go straight on and turn left.', 'Allez tout droit et tournez à gauche.'],
        ['Tourist', 'Is it far?', 'C’est loin ?'],
        ['Mila', 'No, it’s near. Five minutes.', 'Non, c’est près. Cinq minutes.'],
        ['Tourist', 'Thank you very much!', 'Merci beaucoup !']
      ],
      gap: 1, wrong: ['I’m fine, thank you.', 'It’s my birthday.'],
      quiz: [['Is the park far?', 'No, it’s near', 'Yes, very far;Yes, one hour away', '« No, it’s near. Five minutes. »', 0]]
    },
    {
      id: 'd-museum-way', title: 'The way to the museum', level: 3,
      lines: [
        ['Jake', 'Excuse me, I’m looking for the museum.', 'Excusez-moi, je cherche le musée.'],
        ['Woman', 'The museum? Cross the bridge and turn right.', 'Le musée ? Traversez le pont et tournez à droite.'],
        ['Jake', 'Is it opposite the castle?', 'Il est en face du château ?'],
        ['Woman', 'No, it’s next to the library.', 'Non, il est à côté de la bibliothèque.'],
        ['Jake', 'Great, thank you!', 'Super, merci !']
      ],
      gap: 1, wrong: ['Yes, I love museums.', 'Turn off the light, please.'],
      quiz: [
        ['What must Jake cross?', 'The bridge', 'The road;The park', '« Cross the bridge and turn right. »', 0],
        ['Where is the museum?', 'Next to the library', 'Opposite the castle;Near the station', '« No, it’s next to the library. »', 1]
      ]
    },
    {
      id: 'd-oxford', title: 'A tour of Oxford', level: 4,
      lines: [
        ['Guide', 'Welcome to Oxford! This morning, we are going to visit the old library.', 'Bienvenue à Oxford ! Ce matin, nous allons visiter la vieille bibliothèque.'],
        ['Ella', 'Is it far from here?', 'C’est loin d’ici ?'],
        ['Guide', 'No, it’s just around the corner. After that, we will have lunch in a restaurant.', 'Non, c’est juste au coin de la rue. Ensuite, nous déjeunerons au restaurant.'],
        ['Ella', 'And in the afternoon?', 'Et l’après-midi ?'],
        ['Guide', 'We will walk by the river to the castle.', 'Nous marcherons le long de la rivière jusqu’au château.']
      ],
      gap: 2, wrong: ['I’m looking for the post office.', 'It’s a quarter past two.'],
      quiz: [
        ['What will they visit this morning?', 'The old library', 'The castle;The museum', '« This morning, we are going to visit the old library. »', 0],
        ['How will they go to the castle?', 'They will walk by the river', 'By bus;They will take a boat', '« We will walk by the river to the castle. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-my-town', title: 'My town', level: 4, tag: 'there_is',
      text: 'My town is small but there are lots of things to do. In the town centre, there is a cinema, a library and a big park with a lake. The swimming pool is near the station. My favourite place is the bakery on the corner of my street: their chocolate croissants are delicious! There isn’t a museum, but there is an old castle on the hill.',
      fr: 'Ma ville est petite, mais il y a beaucoup de choses à faire. Dans le centre-ville, il y a un cinéma, une bibliothèque et un grand parc avec un lac. La piscine est près de la gare. Mon endroit préféré, c’est la boulangerie au coin de ma rue : leurs pains au chocolat sont délicieux ! Il n’y a pas de musée, mais il y a un vieux château sur la colline.',
      quiz: [
        ['Where is the swimming pool?', 'Near the station', 'In the park;On the hill', '« The swimming pool is near the station. »'],
        ['What is the writer’s favourite place?', 'The bakery', 'The cinema;The castle', '« My favourite place is the bakery on the corner of my street ».'],
        ['Is there a museum in the town?', 'No, there isn’t', 'Yes, there is;Yes, near the lake', '« There isn’t a museum ».']
      ]
    },
    {
      id: 'r-treasure-hunt', title: 'The treasure hunt', level: 5, tag: 'past_simple,future_will',
      text: 'Last Saturday, our class did a treasure hunt in town. We had a map and some clues. First, we went to the church and turned left. Then we crossed the bridge and found the second clue at the post office. The last clue was in the library, under a big book about castles. We found the treasure: a box of sweets! Next time, the teacher will hide it in the park.',
      fr: 'Samedi dernier, notre classe a fait une chasse au trésor en ville. Nous avions un plan et des indices. D’abord, nous sommes allés à l’église et nous avons tourné à gauche. Puis nous avons traversé le pont et trouvé le deuxième indice à la poste. Le dernier indice était à la bibliothèque, sous un gros livre sur les châteaux. Nous avons trouvé le trésor : une boîte de bonbons ! La prochaine fois, la maîtresse le cachera dans le parc.',
      quiz: [
        ['What did the class have?', 'A map and some clues', 'A phone and a camera;Some bikes', '« We had a map and some clues. »'],
        ['Where was the last clue?', 'In the library', 'At the post office;In the church', '« The last clue was in the library ».'],
        ['What was the treasure?', 'A box of sweets', 'A big book;A map', '« We found the treasure: a box of sweets! »']
      ]
    }
  ]
});
