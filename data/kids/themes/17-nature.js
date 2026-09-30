/* Thème 17 — Nature & Environment */
AE.content.registerTheme({
  id: 'nature',
  intro: 'Dans la Forêt Verte, on découvre les paysages, les plantes, le ciel et les gestes pour protéger la planète.',
  lessons: ['there_is', 'comparatives', 'imperative'],
  words: `
tree|arbre|n|1|🌳|There is a nest in the tree.|Il y a un nid dans l’arbre.
flower|fleur|n|1|🌸|This flower smells nice.|Cette fleur sent bon.
leaf|feuille (d’arbre)|n|1|🍃|A leaf is falling from the tree.|Une feuille tombe de l’arbre.
river|rivière, fleuve|n|1||The river goes to the sea.|La rivière va jusqu’à la mer.
sea|mer|n|1|🌊|The sea is blue and calm.|La mer est bleue et calme.
mountain|montagne|n|1|⛰️|Mont Blanc is a very high mountain.|Le mont Blanc est une très haute montagne.
forest|forêt|n|1|🌲|There are many trees in the forest.|Il y a beaucoup d’arbres dans la forêt.
moon|lune|n|1|🌕|The moon is full tonight.|C’est la pleine lune ce soir.
plant|plante|n|1|🪴|Water the plant every week.|Arrose la plante chaque semaine.
grass|herbe, pelouse|n|2||Don’t walk on the grass.|Ne marche pas sur la pelouse.
lake|lac|n|2||We swim in the lake in summer.|Nous nageons dans le lac en été.
hill|colline|n|2||We climb the hill to see the view.|Nous montons la colline pour voir le paysage.
island|île|n|2|🏝️|Corsica is an island.|La Corse est une île.
desert|désert|n|2|🏜️|It is very dry in the desert.|Il fait très sec dans le désert.
rock|rocher|n|2|🪨|The crab is under a rock.|Le crabe est sous un rocher.
Earth|Terre (la planète)|n|2|🌎|The Earth goes around the Sun.|La Terre tourne autour du Soleil.
planet|planète|n|2|🪐|Mars is the red planet.|Mars est la planète rouge.
recycle|recycler|v|2|♻️|We recycle paper and glass.|Nous recyclons le papier et le verre.
rubbish|déchets, ordures|n|2||Put your rubbish in the bin.|Mets tes déchets à la poubelle.|trash,garbage
bin|poubelle|n|2|🗑️|The bin is full.|La poubelle est pleine.
plastic|plastique|n|2||Don’t use plastic bags.|N’utilise pas de sacs en plastique.
field|champ|n|2||There are cows in the field.|Il y a des vaches dans le champ.
nature|nature|n|2||I love walking in nature.|J’adore me promener dans la nature.
volcano|volcan|n|2|🌋|The volcano is sleeping.|Le volcan est endormi.
seed|graine|n|2||Plant a seed in the pot.|Plante une graine dans le pot.
pollution|pollution|n|3|🏭|Cars make a lot of pollution.|Les voitures font beaucoup de pollution.
protect|protéger|v|3||We must protect the animals.|Nous devons protéger les animaux.
waterfall|cascade|n|3||The waterfall is very high.|La cascade est très haute.
cave|grotte|n|3||Bats live in the cave.|Les chauves-souris vivent dans la grotte.
environment|environnement|n|3||We must take care of the environment.|Nous devons prendre soin de l’environnement.
`,
  expressions: `
Don’t drop litter!|Ne jette pas de déchets par terre !|2|pour demander à quelqu’un de ne pas jeter ses déchets par terre|Don’t drop litter! Put it in the bin.|Ne jette rien par terre ! Mets-le à la poubelle.|« Litter » désigne les déchets jetés par terre.
Turn off the tap.|Ferme le robinet.|2|pour demander à quelqu’un d’arrêter l’eau du robinet|Turn off the tap when you brush your teeth.|Ferme le robinet quand tu te brosses les dents.|« Tap » veut dire « robinet ».
Let’s go for a walk.|Allons nous promener.|1|pour proposer une promenade|It’s a beautiful day. Let’s go for a walk in the forest!|C’est une belle journée. Allons nous promener dans la forêt !
Save the planet!|Sauvons la planète !|1|pour encourager tout le monde à protéger la Terre|Recycle your bottles and save the planet!|Recycle tes bouteilles et sauve la planète !
What a beautiful view!|Quelle belle vue !|2|pour dire que le paysage est magnifique|We are at the top of the mountain. What a beautiful view!|Nous sommes au sommet de la montagne. Quelle belle vue !
Reduce, reuse, recycle.|Réduire, réutiliser, recycler.|3|pour rappeler les trois gestes qui permettent de faire moins de déchets|Remember the three Rs: reduce, reuse, recycle.|Souviens-toi des trois R : réduire, réutiliser, recycler.
It’s good for the environment.|C’est bon pour l’environnement.|3|pour dire qu’une action aide la nature|Walking to school is good for the environment.|Aller à l’école à pied, c’est bon pour l’environnement.||It is good for the environment
Look at the stars!|Regarde les étoiles !|1|pour montrer les étoiles dans le ciel la nuit|It’s a clear night. Look at the stars!|La nuit est claire. Regarde les étoiles !
Don’t pick the flowers.|Ne cueille pas les fleurs.|2|pour demander à quelqu’un de laisser les fleurs dans la nature|Don’t pick the flowers, leave them for the bees.|Ne cueille pas les fleurs, laisse-les aux abeilles.|Ici, « pick » veut dire « cueillir ».
Plant a tree!|Plante un arbre !|2|pour inviter quelqu’un à planter un arbre|Plant a tree and help the birds!|Plante un arbre et aide les oiseaux !
`,
  build: `
We recycle our bottles.|Nous recyclons nos bouteilles.|3|possessives
Don’t throw rubbish in the river.|Ne jette pas de déchets dans la rivière.|3|imperative,negation
There are fish in the river.|Il y a des poissons dans la rivière.|4|there_is
The mountain is higher than the hill.|La montagne est plus haute que la colline.|4|comparatives
Bees are flying around the flowers.|Des abeilles volent autour des fleurs.|4|present_continuous
Is there a lake near your house?|Y a-t-il un lac près de chez toi ?|4|there_is,questions
We planted a tree yesterday.|Nous avons planté un arbre hier.|5|past_simple|Yesterday we planted a tree.
We will protect the forest.|Nous protégerons la forêt.|5|future_will
`,
  gram: `
There ___ a lot of flowers in the garden.|are|is;am;be|« A lot of flowers » est pluriel : there are.|4|there_is|Il y a beaucoup de fleurs dans le jardin.
The leaves ___ in autumn.|fall|falls;falling;is fall|« The leaves » (they) : fall, sans -s.|4|present_simple|Les feuilles tombent en automne.
This mountain is ___ than that one.|higher|more high;highest;high|Adjectif court : high → higher than.|4|comparatives|Cette montagne est plus haute que celle-là.
The ___ are green in spring.|leaves|leafs;leaf;leafes|Pluriel irrégulier : leaf → leaves.|4|plural|Les feuilles sont vertes au printemps.
We must ___ the planet.|protect|protects;protecting;to protect|Après « must », on met le verbe seul, sans « to ».|4||Nous devons protéger la planète.
Look! The children ___ rubbish on the beach.|are picking up|pick up;picks up;is picking up|« Look! » + pluriel : are picking up.|4|present_continuous|Regarde ! Les enfants ramassent des déchets sur la plage.
Last year, a big fire ___ the forest.|destroyed|destroy;destroys;will destroy|« Last year » : passé → destroyed.|5|past_simple|L’année dernière, un grand incendie a détruit la forêt.
In the future, we ___ more solar energy.|will use|used;use;uses|« In the future » : will + verbe.|5|future_will|À l’avenir, nous utiliserons davantage l’énergie solaire.
`,
  odd: `
tree;flower;grass;rock|rock|Tree, flower et grass sont des plantes ; rock (rocher) n’est pas vivant.|3
sea;lake;river;mountain|mountain|Sea, lake et river sont de l’eau ; mountain est une montagne.|2
rubbish;plastic;pollution;forest|forest|Rubbish, plastic et pollution abîment la nature ; forest (forêt) en fait partie.|3
island;desert;volcano;recycle|recycle|Island, desert et volcano sont des paysages ; recycle est un verbe (recycler).|4
`,
  mystery: `
island|It is land with water all around it.;Corsica is one.|3|De la terre entourée d’eau.
bin|You put your rubbish in it.;There is one in the kitchen.|3|On y met ses déchets.
volcano|It is a mountain.;Sometimes fire and lava come out of it.|4|De la lave peut en sortir.
waterfall|It is water falling from a high place.;Niagara is a famous one.|4|De l’eau qui tombe de haut.
`,
  act: `
Show me the tree.|Montre-moi l’arbre.|🌳|🌸;🍃;🪨|2|arbre;fleur;feuille;rocher
Show me the mountain.|Montre-moi la montagne.|⛰️|🏝️;🏜️;🌊|2|montagne;île;désert;mer
Water the plant.|Arrose la plante.|🪴|🌋;🪐;🌕|2|plante;volcan;planète;lune
Show me the moon.|Montre-moi la lune.|🌕|☀️;🌎;🪐|2|lune;soleil;Terre;planète
Put the bottle in the recycling bin.|Mets la bouteille dans le bac de recyclage.|♻️|🌊;🌳;🏭|3|recyclage;mer;arbre;usine
`,
  dialogues: [
    {
      id: 'd-litter', title: 'In the park', level: 2,
      lines: [
        ['Park keeper', 'Don’t drop litter, please!', 'Ne jette pas de déchets par terre, s’il te plaît !'],
        ['Kai', 'Oh, sorry! Where is the bin?', 'Oh, pardon ! Où est la poubelle ?'],
        ['Park keeper', 'It’s next to the tree.', 'Elle est à côté de l’arbre.'],
        ['Kai', 'Thank you!', 'Merci !']
      ],
      gap: 1, wrong: ['It’s sunny today.', 'I’m ten years old.'],
      quiz: [['Where is the bin?', 'Next to the tree', 'Under the tree;Next to the lake', '« It’s next to the tree. »', 0]]
    },
    {
      id: 'd-tap', title: 'Save water', level: 3,
      lines: [
        ['Mum', 'Leo, turn off the tap when you brush your teeth!', 'Leo, ferme le robinet quand tu te brosses les dents !'],
        ['Leo', 'Why, Mum?', 'Pourquoi, maman ?'],
        ['Mum', 'Because water is precious. We must not waste it.', 'Parce que l’eau est précieuse. Nous ne devons pas la gaspiller.'],
        ['Leo', 'OK. I will turn it off every time.', 'D’accord. Je le fermerai à chaque fois.'],
        ['Mum', 'Well done! It’s good for the planet.', 'Bravo ! C’est bon pour la planète.']
      ],
      gap: 3, wrong: ['Yes, I’m good at tennis.', 'It’s the first of May.'],
      quiz: [
        ['What does Mum ask Leo to do?', 'Turn off the tap', 'Brush his hair;Go to bed', '« turn off the tap when you brush your teeth! »', 0],
        ['Why?', 'Water is precious', 'The tap is broken;It is late', '« Because water is precious. »', 1]
      ]
    },
    {
      id: 'd-school-garden', title: 'The school garden', level: 4,
      lines: [
        ['Teacher', 'Today, we are going to plant seeds in the school garden.', 'Aujourd’hui, nous allons planter des graines dans le jardin de l’école.'],
        ['Aya', 'What are we going to plant?', 'Qu’est-ce que nous allons planter ?'],
        ['Teacher', 'Tomatoes and sunflowers. Can you bring the watering can?', 'Des tomates et des tournesols. Peux-tu apporter l’arrosoir ?'],
        ['Aya', 'Yes! Where is it?', 'Oui ! Où est-il ?'],
        ['Teacher', 'It’s behind the shed. Be careful, it’s heavy!', 'Il est derrière la cabane. Attention, il est lourd !']
      ],
      gap: 2, wrong: ['It’s raining cats and dogs.', 'Yes, I recycle bottles.'],
      quiz: [
        ['What are they going to plant?', 'Tomatoes and sunflowers', 'Trees and roses;Carrots and potatoes', '« Tomatoes and sunflowers. »', 0],
        ['Where is the watering can?', 'Behind the shed', 'In the classroom;Next to the bin', '« It’s behind the shed. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-recycling', title: 'Recycling at home', level: 4, tag: 'present_simple',
      text: 'Every week, my family recycles. We put paper and cardboard in the blue bin, glass in the green bin and plastic bottles in the yellow bin. Food waste goes into a compost box in the garden: it makes good soil for our vegetables! My little brother’s job is to crush the cans. It’s easy and it helps the planet.',
      fr: 'Chaque semaine, ma famille recycle. Nous mettons le papier et le carton dans la poubelle bleue, le verre dans la poubelle verte et les bouteilles en plastique dans la poubelle jaune. Les restes de nourriture vont dans un bac à compost au jardin : cela donne une bonne terre pour nos légumes ! Le travail de mon petit frère, c’est d’écraser les canettes. C’est facile et ça aide la planète.',
      quiz: [
        ['What goes into the green bin?', 'Glass', 'Paper;Plastic bottles', '« glass in the green bin ».'],
        ['What does the compost make?', 'Good soil for vegetables', 'Plastic bottles;Food for the dog', '« it makes good soil for our vegetables! »'],
        ['What is the little brother’s job?', 'To crush the cans', 'To empty the blue bin;To water the plants', '« My little brother’s job is to crush the cans. »']
      ]
    },
    {
      id: 'r-beach-clean', title: 'Beach clean-up', level: 5, tag: 'past_simple,future_will',
      text: 'Last Sunday, my class went to the beach to clean it. We wore gloves and we collected rubbish for three hours. We found plastic bottles, bags, an old shoe and even a bicycle wheel! In total, we filled twenty bags. The beach looked much cleaner after that. Next month, we will clean the river near our school.',
      fr: 'Dimanche dernier, ma classe est allée nettoyer la plage. Nous avons porté des gants et ramassé des déchets pendant trois heures. Nous avons trouvé des bouteilles en plastique, des sacs, une vieille chaussure et même une roue de vélo ! Au total, nous avons rempli vingt sacs. La plage était beaucoup plus propre après. Le mois prochain, nous nettoierons la rivière près de notre école.',
      quiz: [
        ['What did they wear?', 'Gloves', 'Boots;Hats', '« We wore gloves ».'],
        ['How many bags did they fill?', 'Twenty', 'Three;Two', '« we filled twenty bags ». Trois, ce sont les heures.'],
        ['What will they clean next month?', 'The river near the school', 'The beach again;The park', '« Next month, we will clean the river near our school. »']
      ]
    }
  ]
});
