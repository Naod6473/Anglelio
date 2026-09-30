/* Thème 9 — Feelings & Personality */
AE.content.registerTheme({
  id: 'feelings',
  intro: 'Dans le Jardin des Émotions, on apprend à dire ce que l’on ressent et à décrire le caractère des gens.',
  lessons: ['be', 'negation', 'like_ing'],
  words: `
happy|heureux, content|adj|1|😀|I’m happy because it’s my birthday.|Je suis content parce que c’est mon anniversaire.
sad|triste|adj|1|😢|Emma is sad because her cat is lost.|Emma est triste parce que son chat est perdu.
angry|en colère|adj|1|😠|My brother is angry with me.|Mon frère est en colère contre moi.
tired|fatigué|adj|1|😴|I’m tired after the match.|Je suis fatigué après le match.
funny|drôle|adj|1|😂|My uncle tells funny jokes.|Mon oncle raconte des blagues drôles.
smile|sourire|v|1|😊|Smile for the photo!|Souris pour la photo !
scared|effrayé, qui a peur|adj|2|😨|I’m scared of the dark.|J’ai peur du noir.
bored|qui s’ennuie|adj|2|🥱|I’m bored, there is nothing to do.|Je m’ennuie, il n’y a rien à faire.
excited|tout excité, impatient|adj|2|🤩|We are excited about the holidays.|Nous avons hâte d’être en vacances.
surprised|surpris|adj|2|😮|She is surprised by the present.|Elle est surprise par le cadeau.
calm|calme|adj|2|😌|Stay calm and breathe slowly.|Reste calme et respire lentement.
shy|timide|adj|2|🙈|Leo is shy: he doesn’t talk a lot.|Leo est timide : il ne parle pas beaucoup.
kind|gentil|adj|2|🤗|Thank you, you are very kind.|Merci, tu es très gentil.
friendly|sympathique, amical|adj|2||Our new neighbours are very friendly.|Nos nouveaux voisins sont très sympathiques.
lazy|paresseux|adj|2|🦥|My cat is lazy: it sleeps all day.|Mon chat est paresseux : il dort toute la journée.
clever|intelligent, malin|adj|2|🧠|My sister is very clever.|Ma sœur est très intelligente.|smart
brave|courageux|adj|2|🦸|The firefighter is very brave.|Le pompier est très courageux.
laugh|rire|v|2|😆|My dad makes me laugh.|Mon papa me fait rire.
cry|pleurer|v|2|😭|Don’t cry, it’s OK.|Ne pleure pas, ce n’est pas grave.
feel|se sentir, ressentir|v|2||How do you feel today?|Comment te sens-tu aujourd’hui ?
hate|détester|v|2|💔|I hate getting up early.|Je déteste me lever tôt.
worried|inquiet|adj|3|😟|Mum is worried because I’m late.|Maman est inquiète parce que je suis en retard.
nervous|nerveux, stressé|adj|3|😬|I’m nervous before the test.|Je suis stressé avant le contrôle.
proud|fier|adj|3||My parents are proud of me.|Mes parents sont fiers de moi.
polite|poli|adj|3||Be polite and say thank you.|Sois poli et dis merci.
rude|impoli|adj|3||It’s rude to shout at people.|C’est impoli de crier sur les gens.
naughty|désobéissant, vilain|adj|3||The puppy is naughty: it bites my shoes.|Le chiot est vilain : il mordille mes chaussures.
generous|généreux|adj|3|🎁|Grandpa is generous: he shares everything.|Papi est généreux : il partage tout.
selfish|égoïste|adj|3||Don’t be selfish, share your sweets!|Ne sois pas égoïste, partage tes bonbons !
patient|patient|adj|3||A good teacher is patient.|Un bon enseignant est patient.
`,
  expressions: `
How do you feel?|Comment te sens-tu ?|1|pour demander à quelqu’un comment il se sent|— How do you feel? — I feel great!|— Comment te sens-tu ? — Je me sens super bien !
I’m in a good mood.|Je suis de bonne humeur.|3|pour dire que tu es de bonne humeur|The sun is shining and I’m in a good mood.|Le soleil brille et je suis de bonne humeur.|« Mood » veut dire « humeur », pas « mode ».|I am in a good mood
Don’t worry!|Ne t’inquiète pas !|1|pour rassurer quelqu’un qui a peur que quelque chose se passe mal|Don’t worry, everything will be fine.|Ne t’inquiète pas, tout ira bien.||Do not worry
Cheer up!|Garde le moral !|2|pour encourager quelqu’un qui est triste|Cheer up, Sam! We can play again tomorrow.|Garde le moral, Sam ! On pourra rejouer demain.|Mot à mot : « Remonte ! » C’est une façon de dire à quelqu’un d’être moins triste.
That’s a good idea!|C’est une bonne idée !|1|pour dire que tu es d’accord avec une proposition|— Let’s make a cake! — That’s a good idea!|— Faisons un gâteau ! — C’est une bonne idée !||That is a good idea
I’m so proud of you!|Je suis si fier de toi !|2|pour féliciter quelqu’un qui a réussi quelque chose de difficile|You swam fifty metres? I’m so proud of you!|Tu as nagé cinquante mètres ? Je suis si fier de toi !||I am so proud of you
It makes me happy.|Ça me rend heureux.|3|pour dire qu’une chose te rend heureux|Playing with my dog makes me happy.|Jouer avec mon chien me rend heureux.|Mot à mot : « Ça me fait heureux ». En anglais, « make » peut vouloir dire « rendre ».
I’m fed up!|J’en ai assez !|3|pour dire que tu en as assez d’une situation|I’m fed up! It’s raining again.|J’en ai assez ! Il pleut encore.|Mot à mot : « Je suis nourri jusqu’en haut » : cela veut dire « j’en ai marre ».|I am fed up
Calm down!|Calme-toi !|2|pour demander à quelqu’un de se calmer|Calm down, Max! It’s only a game.|Calme-toi, Max ! Ce n’est qu’un jeu.
Good luck!|Bonne chance !|1|pour souhaiter à quelqu’un de réussir|Good luck for your test tomorrow!|Bonne chance pour ton contrôle demain !
`,
  build: `
I am happy today.|Je suis content aujourd’hui.|3|be|Today I am happy.
She is scared of the dark.|Elle a peur du noir.|3|be
Why are you sad?|Pourquoi es-tu triste ?|3|questions
My brother isn’t shy.|Mon frère n’est pas timide.|4|negation
He always makes me laugh.|Il me fait toujours rire.|4|present_simple
They are laughing at a joke.|Ils sont en train de rire d’une blague.|4|present_continuous
I like playing with friendly dogs.|J’aime jouer avec des chiens gentils.|4|like_ing
I was very nervous yesterday.|J’étais très stressé hier.|5|past_simple|Yesterday I was very nervous.
`,
  gram: `
I ___ tired.|am|is;are;be|Avec « I », on utilise « am ».|3|be|Je suis fatigué.
My friends ___ very kind.|are|is;am;be|« My friends » (they) : are.|3|be|Mes amis sont très gentils.
She ___ angry, she is calm.|isn’t|aren’t;don’t;doesn’t|Négation de « she is » : she isn’t.|4|negation|Elle n’est pas en colère, elle est calme.
I love ___ jokes.|telling|tell;tells;told|Après « love », on utilise souvent le verbe en -ing : telling.|4|like_ing|J’adore raconter des blagues.
Why ___ the baby crying?|is|are;does;do|Present continuous avec « the baby » (it) : is… crying.|4|present_continuous,questions|Pourquoi le bébé pleure-t-il ?
He ___ very happy at his party last Saturday.|was|is;were;will be|« Last Saturday » : passé. He is → he was.|5|past_simple|Il était très content à sa fête samedi dernier.
Don’t worry, it ___ be fine!|will|was;is;were|On parle de l’avenir : it will be fine.|5|future_will|Ne t’inquiète pas, tout ira bien !
She is proud ___ her drawing.|of|on;at;for|On dit « proud of » : fier de.|4||Elle est fière de son dessin.
`,
  odd: `
happy;sad;angry;table|table|Happy, sad et angry sont des émotions ; table est un meuble.|2
smile;laugh;cry;shy|shy|Smile, laugh et cry sont des verbes ; shy (timide) est un adjectif.|3
kind;generous;polite;rude|rude|Kind, generous et polite sont des qualités ; rude (impoli) est un défaut.|4
brave;clever;friendly;lazy|lazy|Brave, clever et friendly sont des qualités ; lazy (paresseux) est un défaut.|4
`,
  mystery: `
happy|You feel like this on your birthday.;You smile a lot.;The opposite is sad.|3|Le contraire de triste.
bored|You feel like this when there is nothing to do.;You yawn.|4|Quand il n’y a rien à faire.
brave|A firefighter is like this.;This person is not scared.|4|Quelqu’un qui n’a pas peur.
shy|This person doesn’t talk a lot with new people.;They sometimes go red.|4|Quelqu’un qui parle peu aux inconnus.
`,
  act: `
Show me a happy face.|Montre-moi un visage joyeux.|😀|😢;😠;😴|2|joyeux;triste;en colère;endormi
Show me a sad face.|Montre-moi un visage triste.|😢|😀;😮;😂|2|triste;joyeux;surpris;mort de rire
Show me an angry face.|Montre-moi un visage en colère.|😠|😀;😴;😮|2|en colère;joyeux;endormi;surpris
Show me a surprised face.|Montre-moi un visage surpris.|😮|😠;😢;😴|3|surpris;en colère;triste;endormi
Look scared.|Prends un air effrayé.|😨|😂;😌;😠|3|effrayé;mort de rire;calme;en colère
`,
  dialogues: [
    {
      id: 'd-cheer-up', title: 'Cheer up, Sam!', level: 2,
      lines: [
        ['Amy', 'What’s wrong, Sam? You look sad.', 'Qu’est-ce qui ne va pas, Sam ? Tu as l’air triste.'],
        ['Sam', 'My best friend is moving to Canada.', 'Mon meilleur ami déménage au Canada.'],
        ['Amy', 'Oh no! Cheer up, you can call him every week.', 'Oh non ! Garde le moral, tu peux l’appeler chaque semaine.'],
        ['Sam', 'That’s a good idea. Thanks, Amy.', 'C’est une bonne idée. Merci, Amy.']
      ],
      gap: 2, wrong: ['Happy birthday, Sam!', 'I’m tired, good night.'],
      quiz: [['Why is Sam sad?', 'His best friend is moving away', 'He is ill;He lost his dog', 'Sam dit « My best friend is moving to Canada ».', 1]]
    },
    {
      id: 'd-nervous', title: 'Before the test', level: 3,
      lines: [
        ['Mum', 'You look worried, Nina. What’s the matter?', 'Tu as l’air inquiète, Nina. Qu’est-ce qui ne va pas ?'],
        ['Nina', 'I’ve got a maths test tomorrow and I’m nervous.', 'J’ai un contrôle de maths demain et je suis stressée.'],
        ['Mum', 'Don’t worry! You worked hard. Let’s revise together.', 'Ne t’inquiète pas ! Tu as bien travaillé. Révisons ensemble.'],
        ['Nina', 'Thanks, Mum. I feel better now.', 'Merci, maman. Je me sens mieux maintenant.']
      ],
      gap: 2, wrong: ['I’m in the canteen.', 'Yes, it’s raining cats and dogs.'],
      quiz: [
        ['Why is Nina nervous?', 'She has a maths test tomorrow', 'She lost her book;She is late', '« I’ve got a maths test tomorrow and I’m nervous. »', 0],
        ['What does Mum suggest?', 'To revise together', 'To go to bed;To watch TV', '« Let’s revise together. »', 1]
      ]
    },
    {
      id: 'd-yusuf', title: 'The new boy', level: 4,
      lines: [
        ['Tom', 'What do you think of the new boy, Yusuf?', 'Que penses-tu du nouveau, Yusuf ?'],
        ['Lea', 'He’s very shy, but he’s really friendly when you talk to him.', 'Il est très timide, mais il est vraiment sympa quand on lui parle.'],
        ['Tom', 'Is he funny?', 'Est-ce qu’il est drôle ?'],
        ['Lea', 'Yes! Yesterday, he told a joke and everybody laughed.', 'Oui ! Hier, il a raconté une blague et tout le monde a ri.'],
        ['Tom', 'Great. Let’s invite him to play football.', 'Super. Invitons-le à jouer au foot.']
      ],
      gap: 3, wrong: ['No, he is my uncle.', 'I’ve got a headache.'],
      quiz: [
        ['What is Yusuf like with new people?', 'Shy', 'Rude;Angry', '« He’s very shy » : il est timide.', 0],
        ['What happened yesterday?', 'Yusuf told a joke', 'Yusuf cried;Yusuf played football', '« Yesterday, he told a joke and everybody laughed. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-three-friends', title: 'My three friends', level: 4, tag: 'present_simple',
      text: 'I have got three good friends. Jade is very funny: she always tells jokes. Omar is quiet and a bit shy, but he is very kind. He always helps me with my homework. Chloé is brave: she isn’t scared of spiders or of the dark! Sometimes we are angry with each other, but we always say sorry.',
      fr: 'J’ai trois bons amis. Jade est très drôle : elle raconte toujours des blagues. Omar est calme et un peu timide, mais il est très gentil. Il m’aide toujours à faire mes devoirs. Chloé est courageuse : elle n’a peur ni des araignées ni du noir ! Parfois, nous sommes fâchés les uns contre les autres, mais nous nous excusons toujours.',
      quiz: [
        ['Who tells jokes?', 'Jade', 'Omar;Chloé', '« Jade is very funny: she always tells jokes. »'],
        ['How does Omar help?', 'He helps with homework', 'He tells jokes;He catches spiders', '« He always helps me with my homework. »'],
        ['Why is Chloé brave?', 'She isn’t scared of spiders or the dark', 'She tells jokes;She is shy', '« she isn’t scared of spiders or of the dark! »']
      ]
    },
    {
      id: 'r-diary', title: 'Dear diary', level: 5, tag: 'past_simple,going_to',
      text: 'Dear diary, today was a day full of feelings! In the morning, I was nervous because I had a spelling test. At break, I was happy: my friend Ali shared his chocolate with me. He is so generous! In the afternoon, I was a bit bored in history. But tonight I’m excited: tomorrow we are going to the zoo!',
      fr: 'Cher journal, aujourd’hui a été une journée pleine d’émotions ! Le matin, j’étais stressé parce que j’avais une dictée. À la récré, j’étais content : mon ami Ali a partagé son chocolat avec moi. Il est tellement généreux ! L’après-midi, je me suis un peu ennuyé en histoire. Mais ce soir, je suis tout excité : demain, nous allons au zoo !',
      quiz: [
        ['Why was the writer nervous in the morning?', 'There was a spelling test', 'There was a football match;Ali was ill', '« I was nervous because I had a spelling test. »'],
        ['What did Ali do?', 'He shared his chocolate', 'He told a joke;He was bored', '« my friend Ali shared his chocolate with me ».'],
        ['Why is the writer excited tonight?', 'They are going to the zoo tomorrow', 'It’s his birthday;He has no homework', '« tomorrow we are going to the zoo! »']
      ]
    }
  ]
});
