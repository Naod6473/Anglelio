/* Thème 12 — Home & Furniture */
AE.content.registerTheme({
  id: 'home',
  intro: 'Dans la Maison Douce, on visite les pièces, on nomme les meubles et on dit où sont les objets.',
  lessons: ['prepositions', 'there_is', 'possessives'],
  words: `
house|maison|n|1|🏠|We live in a big house.|Nous habitons dans une grande maison.
bedroom|chambre|n|1||My bedroom is blue.|Ma chambre est bleue.
kitchen|cuisine (la pièce)|n|1||Dad is cooking in the kitchen.|Papa cuisine dans la cuisine.
bathroom|salle de bains|n|1||The bathroom is next to my bedroom.|La salle de bains est à côté de ma chambre.
garden|jardin|n|1||There are flowers in the garden.|Il y a des fleurs dans le jardin.
door|porte|n|1|🚪|Close the door, please.|Ferme la porte, s’il te plaît.
window|fenêtre|n|1|🪟|Open the window, it’s hot.|Ouvre la fenêtre, il fait chaud.
table|table|n|1||The plates are on the table.|Les assiettes sont sur la table.
chair|chaise|n|1|🪑|Sit on this chair.|Assieds-toi sur cette chaise.
bed|lit|n|1|🛏️|My bed is very comfortable.|Mon lit est très confortable.
sofa|canapé|n|1|🛋️|The dog is sleeping on the sofa.|Le chien dort sur le canapé.|couch
lamp|lampe|n|1|💡|Switch on the lamp, please.|Allume la lampe, s’il te plaît.
key|clé|n|1|🔑|I can’t find the key!|Je ne trouve pas la clé !
flat|appartement|n|2|🏢|My cousin lives in a flat in Paris.|Mon cousin habite dans un appartement à Paris.|apartment
living room|salon|n|2||We watch TV in the living room.|Nous regardons la télé dans le salon.|lounge,sitting room
garage|garage|n|2||The car is in the garage.|La voiture est dans le garage.
stairs|escalier|n|2||Don’t run on the stairs!|Ne cours pas dans l’escalier !
wall|mur|n|2|🧱|There is a poster on the wall.|Il y a une affiche sur le mur.
floor|sol, étage|n|2||Your clothes are on the floor!|Tes vêtements sont par terre !
roof|toit|n|2||There is a cat on the roof.|Il y a un chat sur le toit.
cupboard|placard|n|2||The glasses are in the cupboard.|Les verres sont dans le placard.
fridge|réfrigérateur, frigo|n|2||Put the milk in the fridge.|Mets le lait dans le frigo.|refrigerator
bath|baignoire, bain|n|2|🛁|The baby is in the bath.|Le bébé est dans le bain.
toilet|toilettes|n|2|🚽|Where is the toilet, please?|Où sont les toilettes, s’il vous plaît ?
mirror|miroir|n|2|🪞|Look at yourself in the mirror.|Regarde-toi dans le miroir.
television|télévision|n|2|📺|We have got a big television.|Nous avons une grande télévision.|TV
clean|nettoyer|v|2|🧹|I clean my bedroom on Saturday.|Je nettoie ma chambre le samedi.
shelf|étagère|n|3||My books are on the shelf.|Mes livres sont sur l’étagère.
carpet|tapis, moquette|n|3||The carpet is soft.|Le tapis est doux.|rug
upstairs|à l’étage, en haut|adv|3||My bedroom is upstairs.|Ma chambre est à l’étage.
`,
  expressions: `
Welcome to my house!|Bienvenue chez moi !|1|pour accueillir quelqu’un qui vient chez toi|Come in! Welcome to my house!|Entre ! Bienvenue chez moi !|L’anglais n’a pas de mot pour « chez » : on dit « to my house » (à ma maison).
Make yourself at home.|Fais comme chez toi.|3|pour dire à un invité de se sentir à l’aise|Take off your coat and make yourself at home.|Enlève ton manteau et fais comme chez toi.|Mot à mot : « Fais-toi à la maison ».
Tidy your room!|Range ta chambre !|1|pour demander à quelqu’un de ranger sa chambre|Your clothes are everywhere. Tidy your room!|Tes vêtements sont partout. Range ta chambre !
Where is the bathroom?|Où est la salle de bains ?|1|pour demander où se trouve la salle de bains|Excuse me, where is the bathroom?|Excusez-moi, où est la salle de bains ?
Switch off the light.|Éteins la lumière.|2|pour demander à quelqu’un d’éteindre la lumière|Switch off the light when you leave the room.|Éteins la lumière quand tu quittes la pièce.||Turn off the light
Can you open the window?|Peux-tu ouvrir la fenêtre ?|1|pour demander à quelqu’un d’ouvrir la fenêtre|It’s hot in here. Can you open the window?|Il fait chaud ici. Peux-tu ouvrir la fenêtre ?
Come in!|Entre !|1|pour dire à quelqu’un d’entrer dans la pièce|— Knock, knock! — Come in!|— Toc, toc ! — Entre !
I share my bedroom with my brother.|Je partage ma chambre avec mon frère.|3|pour dire que tu dors dans la même chambre que ton frère|I share my bedroom with my brother. We have got bunk beds.|Je partage ma chambre avec mon frère. Nous avons des lits superposés.
Home sweet home!|On est bien chez soi !|3|pour dire que tu es content de rentrer chez toi|After two weeks of holiday, we are back. Home sweet home!|Après deux semaines de vacances, nous sommes de retour. On est bien chez soi !|Mot à mot : « Maison douce maison ».
Wipe your feet, please.|Essuie tes pieds, s’il te plaît.|2|pour demander à quelqu’un de s’essuyer les pieds avant d’entrer|It’s muddy outside. Wipe your feet, please.|C’est boueux dehors. Essuie tes pieds, s’il te plaît.|« Wipe » veut dire « essuyer ».
`,
  build: `
The cat is on the sofa.|Le chat est sur le canapé.|3|prepositions
I don’t live in a flat.|Je n’habite pas dans un appartement.|3|negation
My bedroom is next to the bathroom.|Ma chambre est à côté de la salle de bains.|4|prepositions
There is a lamp on my desk.|Il y a une lampe sur mon bureau.|4|there_is
There are three bedrooms in our house.|Il y a trois chambres dans notre maison.|4|there_is,possessives
Is there a garden behind your house?|Y a-t-il un jardin derrière ta maison ?|4|there_is,questions
Dad is cleaning the kitchen.|Papa est en train de nettoyer la cuisine.|4|present_continuous
We are going to paint the walls.|Nous allons peindre les murs.|5|going_to
`,
  gram: `
The keys are ___ the table.|on|in;under;between|Le français dit « sur la table » : on.|3|prepositions|Les clés sont sur la table.
The ball is ___ the sofa.|behind|in;on;between|« Derrière » se dit behind.|3|prepositions|Le ballon est derrière le canapé.
The lamp is ___ the bed and the window.|between|next;under;behind|« Entre deux choses » : between.|4|prepositions|La lampe est entre le lit et la fenêtre.
There ___ two bathrooms in the house.|are|is;be;am|Deux salles de bains (pluriel) : there are.|4|there_is|Il y a deux salles de bains dans la maison.
___ there a garage? — No, there isn’t.|Is|Are;Does;Has|Question au singulier : Is there…?|4|there_is,questions|Y a-t-il un garage ? — Non.
My parents’ bedroom is ___.|upstairs|up stair;on stairs;upstair|« À l’étage » se dit « upstairs » : un seul mot, avec un -s.|3||La chambre de mes parents est à l’étage.
Last weekend, we ___ the whole house.|cleaned|clean;cleans;will clean|« Last weekend » : passé. clean → cleaned.|5|past_simple|Le week-end dernier, nous avons nettoyé toute la maison.
This is ___ house. We live here.|our|we;us;ours|Devant un nom, on utilise le possessif « our » (notre).|3|possessives|C’est notre maison. Nous habitons ici.
`,
  odd: `
kitchen;bedroom;bathroom;sofa|sofa|Kitchen, bedroom et bathroom sont des pièces ; sofa est un meuble.|3
chair;table;bed;garden|garden|Chair, table et bed sont des meubles ; garden (jardin) est dehors.|2
door;window;roof;cupboard|cupboard|Door, window et roof sont des parties de la maison ; cupboard (placard) est un meuble.|4
sofa;bed;chair;key|key|On s’assoit ou on se couche sur sofa, bed et chair ; key (clé) sert à ouvrir.|3
`,
  mystery: `
kitchen|It is a room in the house.;You cook in it.;There is a fridge in it.|3|On y prépare les repas.
key|It is small and made of metal.;You use it to open the door.|3|Elle sert à ouvrir la porte.
mirror|You look at yourself in it.;It is often in the bathroom.|4|On s’y regarde.
stairs|You go up and down them.;They take you to the first floor.|4|On les monte et on les descend.
`,
  act: `
Open the door.|Ouvre la porte.|🚪|🪟;🔑;🛋️|2|porte;fenêtre;clé;canapé
Switch on the lamp.|Allume la lampe.|💡|📺;🪞;🚿|2|lampe;télévision;miroir;douche
Sit on the chair.|Assieds-toi sur la chaise.|🪑|🛏️;🛁;🚽|2|chaise;lit;baignoire;toilettes
Take the key.|Prends la clé.|🔑|🚪;💡;🪞|2|clé;porte;lampe;miroir
Watch TV.|Regarde la télé.|📺|💡;🪟;🛋️|2|télévision;lampe;fenêtre;canapé
`,
  dialogues: [
    {
      id: 'd-welcome-home', title: 'Welcome!', level: 2,
      lines: [
        ['Hannah', 'Welcome to my house! Come in.', 'Bienvenue chez moi ! Entre.'],
        ['Omar', 'Thank you! Your house is very nice.', 'Merci ! Ta maison est très jolie.'],
        ['Hannah', 'This is the living room, and the kitchen is here.', 'Voici le salon, et la cuisine est ici.'],
        ['Omar', 'Wow, it’s big!', 'Waouh, c’est grand !']
      ],
      gap: 1, wrong: ['I’ve got a headache.', 'It’s Monday today.'],
      quiz: [['Which rooms does Hannah show?', 'The living room and the kitchen', 'The bedroom and the bathroom;The garden and the garage', '« This is the living room, and the kitchen is here. »', 0]]
    },
    {
      id: 'd-tidy', title: 'Tidy your room!', level: 3,
      lines: [
        ['Mum', 'Tom, your bedroom is a mess! Tidy your room, please.', 'Tom, ta chambre est en désordre ! Range-la, s’il te plaît.'],
        ['Tom', 'But Mum, I’m playing a game!', 'Mais maman, je suis en train de jouer !'],
        ['Mum', 'Your clothes are on the floor and your books are under the bed.', 'Tes vêtements sont par terre et tes livres sont sous le lit.'],
        ['Tom', 'OK, OK. I’ll do it now.', 'D’accord, d’accord. Je le fais maintenant.'],
        ['Mum', 'Thank you. And switch off the TV!', 'Merci. Et éteins la télé !']
      ],
      gap: 3, wrong: ['Welcome to my house!', 'It’s a quarter to eight.'],
      quiz: [
        ['Where are Tom’s books?', 'Under the bed', 'On the floor;On the shelf', '« your books are under the bed ». Ce sont ses vêtements qui sont par terre.', 0],
        ['What is Tom doing?', 'Playing a game', 'Reading a book;Cleaning the kitchen', '« I’m playing a game! »', 0]
      ]
    },
    {
      id: 'd-new-flat', title: 'A new flat', level: 4,
      lines: [
        ['Chloe', 'We’re moving to a new flat next month!', 'Nous déménageons dans un nouvel appartement le mois prochain !'],
        ['Adam', 'Cool! What’s it like?', 'Cool ! Il est comment ?'],
        ['Chloe', 'It’s on the fifth floor. There are three bedrooms and a big balcony.', 'Il est au cinquième étage. Il y a trois chambres et un grand balcon.'],
        ['Adam', 'Is there a lift?', 'Il y a un ascenseur ?'],
        ['Chloe', 'Yes, there is. I’m going to have my own bedroom!', 'Oui. Je vais avoir ma propre chambre !']
      ],
      gap: 4, wrong: ['Yes, there are.', 'It’s on the table.'],
      gapExplain: 'On répond « Yes, there is » parce que « a lift » (un ascenseur) est au singulier.',
      quiz: [
        ['What floor is the flat on?', 'The fifth floor', 'The first floor;The third floor', '« It’s on the fifth floor. »', 0],
        ['How many bedrooms are there?', 'Three', 'Two;Five', '« There are three bedrooms ».', 0]
      ]
    }
  ],
  readings: [
    {
      id: 'r-house-sea', title: 'A house by the sea', level: 4, tag: 'there_is',
      text: 'I live in a small house near the sea. Downstairs, there is a kitchen, a living room and a toilet. Upstairs, there are two bedrooms and a bathroom. My bedroom is small but I love it: there is a bed, a desk and a shelf with all my books. From my window, I can see the sea! There isn’t a garage, but there is a little garden with a tree.',
      fr: 'J’habite dans une petite maison près de la mer. Au rez-de-chaussée, il y a une cuisine, un salon et des toilettes. À l’étage, il y a deux chambres et une salle de bains. Ma chambre est petite mais je l’adore : il y a un lit, un bureau et une étagère avec tous mes livres. De ma fenêtre, je vois la mer ! Il n’y a pas de garage, mais il y a un petit jardin avec un arbre.',
      quiz: [
        ['Where is the house?', 'Near the sea', 'In a big city;In the mountains', '« I live in a small house near the sea. »'],
        ['What can the writer see from the window?', 'The sea', 'The garage;A big city', '« From my window, I can see the sea! »'],
        ['Is there a garage?', 'No, there isn’t', 'Yes, there is;Yes, there are two', '« There isn’t a garage » : il n’y a pas de garage.']
      ]
    },
    {
      id: 'r-moving-day', title: 'Moving day', level: 5, tag: 'past_simple,going_to',
      text: 'Last month, we moved to a new house. On moving day, the lorry arrived at eight o’clock. My dad and my uncle carried the sofa, the beds and the heavy boxes. I carried my toys. In the evening, everyone was very tired, so we ate pizza on the floor because the table wasn’t there yet! Next weekend, we are going to paint my bedroom green.',
      fr: 'Le mois dernier, nous avons emménagé dans une nouvelle maison. Le jour du déménagement, le camion est arrivé à huit heures. Mon papa et mon oncle ont porté le canapé, les lits et les cartons lourds. Moi, j’ai porté mes jouets. Le soir, tout le monde était très fatigué, alors nous avons mangé une pizza par terre parce que la table n’était pas encore là ! Le week-end prochain, nous allons peindre ma chambre en vert.',
      quiz: [
        ['When did the family move?', 'Last month', 'Last year;Next weekend', '« Last month, we moved to a new house. »'],
        ['Why did they eat on the floor?', 'The table wasn’t there yet', 'The floor was clean;They like picnics', '« because the table wasn’t there yet! »'],
        ['What colour will the bedroom be?', 'Green', 'Blue;White', '« we are going to paint my bedroom green ».']
      ]
    }
  ]
});
