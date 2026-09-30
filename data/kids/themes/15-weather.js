/* Thème 15 — Weather & Seasons */
AE.content.registerTheme({
  id: 'weather',
  intro: 'À l’Observatoire, on décrit le temps qu’il fait, les saisons, et on écoute la météo.',
  lessons: ['present_continuous', 'comparatives', 'future_will'],
  words: `
sun|soleil|n|1|☀️|The sun is shining today.|Le soleil brille aujourd’hui.
rain|pluie|n|1|🌧️|I love the sound of the rain.|J’adore le bruit de la pluie.
snow|neige|n|1|❄️|The children play in the snow.|Les enfants jouent dans la neige.
wind|vent|n|1|🌬️|The wind is very strong today.|Le vent est très fort aujourd’hui.
cloud|nuage|n|1|☁️|There is a big cloud in the sky.|Il y a un gros nuage dans le ciel.
rainbow|arc-en-ciel|n|1|🌈|Look, there is a rainbow!|Regarde, il y a un arc-en-ciel !
hot|chaud|adj|1|🥵|It’s very hot in August.|Il fait très chaud en août.
cold|froid|adj|1|🥶|It’s cold, put on your gloves.|Il fait froid, mets tes gants.
summer|été|n|1|🏖️|We go to the beach in summer.|Nous allons à la plage en été.
winter|hiver|n|1||It snows in winter.|Il neige en hiver.
sunny|ensoleillé|adj|1||It’s sunny in Nice.|Il fait beau et ensoleillé à Nice.
weather|temps (météo)|n|1||What’s the weather like?|Quel temps fait-il ?
fog|brouillard|n|2|🌫️|I can’t see the road in the fog.|Je ne vois pas la route dans le brouillard.
storm|tempête, orage|n|2|⛈️|There is a big storm tonight.|Il y a un gros orage ce soir.
thunder|tonnerre|n|2||The dog is scared of thunder.|Le chien a peur du tonnerre.
lightning|éclair, foudre|n|2|⚡|Lightning can hit tall trees.|La foudre peut frapper les grands arbres.
ice|glace, verglas|n|2|🧊|Be careful, there is ice on the road.|Attention, il y a du verglas sur la route.
snowman|bonhomme de neige|n|2|☃️|Our snowman has got a carrot nose.|Notre bonhomme de neige a un nez en carotte.
sky|ciel|n|2||The sky is grey this morning.|Le ciel est gris ce matin.
rainy|pluvieux|adj|2||It’s a rainy day.|C’est un jour de pluie.
windy|venteux, il y a du vent|adj|2||It’s windy, hold your hat!|Il y a du vent, tiens ton chapeau !
cloudy|nuageux|adj|2||It’s cloudy today.|Il fait nuageux aujourd’hui.
warm|doux, tiède|adj|2||The water is warm today.|L’eau est bonne aujourd’hui.
season|saison|n|2||Winter is my favourite season.|L’hiver est ma saison préférée.
spring|printemps|n|2|🌷|Flowers grow in spring.|Les fleurs poussent au printemps.
autumn|automne|n|2|🍂|Leaves fall in autumn.|Les feuilles tombent en automne.|fall
freezing|glacial|adj|3||It’s freezing outside!|Il fait un froid glacial dehors !
degree|degré|n|3||It’s only one degree this morning!|Il ne fait qu’un degré ce matin !
puddle|flaque|n|3||Jump in the puddle!|Saute dans la flaque !
forecast|prévisions météo|n|3||The forecast says it will rain.|La météo dit qu’il va pleuvoir.
`,
  expressions: `
What’s the weather like?|Quel temps fait-il ?|1|pour demander le temps qu’il fait|— What’s the weather like? — It’s sunny.|— Quel temps fait-il ? — Il fait beau.|Ici, « like » ne veut pas dire « aimer » : « What’s it like? » veut dire « Comment est-ce ? ».|What is the weather like?
It’s raining.|Il pleut.|1|pour dire qu’il pleut en ce moment|Take your umbrella, it’s raining.|Prends ton parapluie, il pleut.||It is raining
It’s freezing!|Il fait un froid de canard !|2|pour dire qu’il fait très, très froid|Close the window, it’s freezing!|Ferme la fenêtre, il fait un froid de canard !|Mot à mot : « Ça gèle ! »|It is freezing
What a lovely day!|Quelle belle journée !|2|pour dire que le temps est magnifique aujourd’hui|The sun is shining. What a lovely day!|Le soleil brille. Quelle belle journée !
It’s going to rain.|Il va pleuvoir.|3|pour annoncer qu’il va bientôt pleuvoir|Look at those clouds. It’s going to rain.|Regarde ces nuages. Il va pleuvoir.||It is going to rain
What’s your favourite season?|Quelle est ta saison préférée ?|1|pour demander à quelqu’un quelle saison il préfère|— What’s your favourite season? — Summer!|— Quelle est ta saison préférée ? — L’été !||What is your favourite season?,What’s your favorite season?
I’m soaking wet!|Je suis trempé !|3|pour dire que tu es complètement mouillé|I forgot my umbrella and now I’m soaking wet!|J’ai oublié mon parapluie et maintenant je suis trempé !|« Soaking » renforce « wet » : trempé jusqu’aux os.|I am soaking wet
It’s boiling today!|Il fait une chaleur étouffante aujourd’hui !|3|pour dire qu’il fait extrêmement chaud|It’s boiling today! Let’s go to the swimming pool.|Il fait une chaleur étouffante aujourd’hui ! Allons à la piscine.|Mot à mot : « Ça bout aujourd’hui ! »|It is boiling today
Let’s build a snowman!|Faisons un bonhomme de neige !|1|pour proposer de fabriquer un bonhomme de neige|Wow, look at all the snow! Let’s build a snowman!|Waouh, regarde toute cette neige ! Faisons un bonhomme de neige !
Look at the rainbow!|Regarde l’arc-en-ciel !|1|pour montrer un arc-en-ciel à quelqu’un|Look at the rainbow! It’s beautiful.|Regarde l’arc-en-ciel ! Il est magnifique.
`,
  build: `
It is sunny today.|Il fait beau aujourd’hui.|3||Today it is sunny.
It is cold in winter.|Il fait froid en hiver.|3||In winter it is cold.
It isn’t raining now.|Il ne pleut pas maintenant.|4|negation,present_continuous|Now it isn’t raining.
Look, it is snowing!|Regarde, il neige !|4|present_continuous
I like playing in the snow.|J’aime jouer dans la neige.|4|like_ing
Summer is hotter than spring.|L’été est plus chaud que le printemps.|4|comparatives
It rained all day yesterday.|Il a plu toute la journée hier.|5|past_simple|Yesterday it rained all day.
It will be windy tomorrow.|Il y aura du vent demain.|5|future_will|Tomorrow it will be windy.
`,
  gram: `
Take your umbrella, it ___.|is raining|rains;rain;are raining|L’action se passe maintenant : it is raining.|4|present_continuous|Prends ton parapluie, il pleut.
It often ___ in England.|rains|rain;raining;is rain|Une habitude, avec « it » : rains.|4|present_simple|Il pleut souvent en Angleterre.
___ winter, it snows in the mountains.|In|On;At;To|Devant une saison, on utilise « in » : in winter.|3||En hiver, il neige dans les montagnes.
Today is ___ than yesterday.|colder|more cold;coldest;cold|Adjectif court : cold → colder than.|4|comparatives|Aujourd’hui, il fait plus froid qu’hier.
What ___ the weather like today?|is|are;does;do|« The weather » est singulier : What is the weather like?|3|questions|Quel temps fait-il aujourd’hui ?
Yesterday, it ___ very windy.|was|is;were;will be|« Yesterday » : passé → it was.|5|past_simple|Hier, il y avait beaucoup de vent.
Tomorrow, it ___ sunny.|will be|was;is being;were|« Tomorrow » : futur → will be.|5|future_will|Demain, il fera beau.
Look at the black clouds! It ___ rain.|is going to|goes to;going;will going|On voit des signes : « be going to » pour une prévision évidente.|5|going_to|Regarde ces nuages noirs ! Il va pleuvoir.
`,
  odd: `
spring;summer;autumn;sunny|sunny|Spring, summer et autumn sont des saisons ; sunny veut dire « ensoleillé ».|2
rain;snow;wind;umbrella|umbrella|Rain, snow et wind sont des phénomènes météo ; umbrella est un objet.|3
sunny;rainy;cloudy;winter|winter|Sunny, rainy et cloudy sont des adjectifs de météo ; winter est une saison.|3
thunder;lightning;storm;rainbow|rainbow|Thunder, lightning et storm font partie d’un orage ; rainbow (arc-en-ciel) apparaît quand le soleil revient.|4
`,
  mystery: `
rainbow|It has got seven colours.;You can see it after the rain when the sun shines.|3|Sept couleurs dans le ciel.
cloud|It is white or grey.;It is in the sky.;Rain comes from it.|3|La pluie en tombe.
snowman|You make it in winter.;It often has got a carrot nose.|4|On le fabrique avec de la neige.
autumn|It is the season after summer.;The leaves fall from the trees.|4|La saison des feuilles mortes.
`,
  act: `
Show me the sun.|Montre-moi le soleil.|☀️|🌧️;❄️;🌫️|2|soleil;pluie;neige;brouillard
Show me the snow.|Montre-moi la neige.|❄️|☀️;🌈;⚡|2|neige;soleil;arc-en-ciel;éclair
Point to the rainbow.|Montre l’arc-en-ciel.|🌈|☁️;⛈️;🌬️|2|arc-en-ciel;nuage;orage;vent
Show me the storm.|Montre-moi l’orage.|⛈️|🌈;☀️;🌷|3|orage;arc-en-ciel;soleil;printemps
Put on something for the cold.|Mets quelque chose pour le froid.|🧣|🩳;🕶️;👙|3|écharpe;short;lunettes de soleil;maillot de bain
`,
  dialogues: [
    {
      id: 'd-beach-day', title: 'A sunny day', level: 2,
      lines: [
        ['Kim', 'What’s the weather like today?', 'Quel temps fait-il aujourd’hui ?'],
        ['Dad', 'It’s sunny and hot!', 'Il fait beau et chaud !'],
        ['Kim', 'Great! Can we go to the beach?', 'Super ! On peut aller à la plage ?'],
        ['Dad', 'Yes, let’s go!', 'Oui, allons-y !']
      ],
      gap: 1, wrong: ['It’s my ticket.', 'I’m scared of spiders.'],
      quiz: [['What’s the weather like?', 'Sunny and hot', 'Rainy and cold;Windy and cloudy', '« It’s sunny and hot! »', 0]]
    },
    {
      id: 'd-rainbow', title: 'After the rain', level: 3,
      lines: [
        ['Max', 'Oh no, it’s raining again!', 'Oh non, il pleut encore !'],
        ['Anna', 'Don’t worry. We can play inside.', 'Ne t’inquiète pas. On peut jouer à l’intérieur.'],
        ['Max', 'But I want to play football in the park.', 'Mais je veux jouer au foot au parc.'],
        ['Anna', 'Look! The rain is stopping. There’s a rainbow!', 'Regarde ! La pluie s’arrête. Il y a un arc-en-ciel !'],
        ['Max', 'Yes! Let’s go outside.', 'Oui ! Sortons.']
      ],
      gap: 1, wrong: ['Yes, it’s very hot and sunny.', 'It’s on your right.'],
      quiz: [
        ['What does Max want to do?', 'Play football in the park', 'Play inside;Watch TV', '« I want to play football in the park. »', 0],
        ['What do they see?', 'A rainbow', 'Snow;A storm', '« There’s a rainbow! »', 0]
      ]
    },
    {
      id: 'd-snow-forecast', title: 'Snow tomorrow!', level: 4,
      lines: [
        ['Grandpa', 'Did you hear the forecast? It will snow tomorrow!', 'Tu as entendu la météo ? Il va neiger demain !'],
        ['Lily', 'Really? Will there be enough snow to build a snowman?', 'C’est vrai ? Il y aura assez de neige pour faire un bonhomme de neige ?'],
        ['Grandpa', 'Maybe! They say ten centimetres.', 'Peut-être ! Ils annoncent dix centimètres.'],
        ['Lily', 'Brilliant! I’m going to look for my gloves and my boots.', 'Génial ! Je vais chercher mes gants et mes bottes.'],
        ['Grandpa', 'And don’t forget your hat. It will be freezing!', 'Et n’oublie pas ton bonnet. Il va faire glacial !']
      ],
      gap: 3, wrong: ['It’s boiling today!', 'I’m soaking wet.'],
      quiz: [
        ['What will the weather be like tomorrow?', 'Snowy', 'Sunny;Rainy', '« It will snow tomorrow! »', 0],
        ['How much snow will there be?', 'Ten centimetres', 'One metre;Two centimetres', '« They say ten centimetres. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-seasons-britain', title: 'Four seasons in Britain', level: 4, tag: 'present_simple',
      text: 'In Britain, there are four seasons. In spring, it is often rainy and warm, and the flowers come out. In summer, it can be hot and sunny, but it can also rain! In autumn, the leaves turn red and brown and it gets windy. Winter is cold, and sometimes it snows. British people talk about the weather all the time!',
      fr: 'En Grande-Bretagne, il y a quatre saisons. Au printemps, il fait souvent doux et pluvieux, et les fleurs sortent. En été, il peut faire chaud et beau, mais il peut aussi pleuvoir ! En automne, les feuilles deviennent rouges et brunes et le vent se lève. L’hiver est froid, et parfois il neige. Les Britanniques parlent tout le temps de la météo !',
      quiz: [
        ['What happens in autumn?', 'The leaves turn red and brown', 'The flowers come out;It is very hot', '« In autumn, the leaves turn red and brown ».'],
        ['Does it snow every winter?', 'No, only sometimes', 'Yes, every day;No, never', '« Winter is cold, and sometimes it snows. »'],
        ['What do British people talk about all the time?', 'The weather', 'Football;Food', '« British people talk about the weather all the time! »']
      ]
    },
    {
      id: 'r-storm-night', title: 'Stormy night', level: 5, tag: 'past_simple,future_will',
      text: 'Last night, there was a terrible storm. The wind was very strong and it rained all night. At midnight, the thunder woke me up and I saw lightning through my window. I was a bit scared, so I went into my parents’ bedroom. This morning, there were branches everywhere in the garden. Dad says he will clean the garden this weekend.',
      fr: 'Cette nuit, il y a eu une terrible tempête. Le vent était très fort et il a plu toute la nuit. À minuit, le tonnerre m’a réveillé et j’ai vu des éclairs par la fenêtre. J’avais un peu peur, alors je suis allé dans la chambre de mes parents. Ce matin, il y avait des branches partout dans le jardin. Papa dit qu’il nettoiera le jardin ce week-end.',
      quiz: [
        ['What woke the writer up?', 'The thunder', 'The rain;His parents', '« At midnight, the thunder woke me up ».'],
        ['Where did the writer go?', 'Into his parents’ bedroom', 'Into the garden;Into the kitchen', '« I went into my parents’ bedroom ».'],
        ['What will Dad do this weekend?', 'Clean the garden', 'Buy a new window;Go to the beach', '« Dad says he will clean the garden this weekend. »']
      ]
    }
  ]
});
