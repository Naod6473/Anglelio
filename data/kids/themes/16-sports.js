/* Thème 16 — Sports & Hobbies */
AE.content.registerTheme({
  id: 'sports',
  intro: 'Au Stade des Loisirs, on parle de sports, de musique et de jeux, et de ce que l’on sait faire.',
  lessons: ['can', 'like_ing', 'present_simple'],
  words: `
football|football|n|1|⚽|I play football on Saturdays.|Je joue au football le samedi.|soccer
tennis|tennis|n|1|🎾|Can you play tennis?|Sais-tu jouer au tennis ?
basketball|basket-ball|n|1|🏀|He is very tall, he plays basketball.|Il est très grand, il joue au basket.
swimming|natation|n|1|🏊|I go swimming every Wednesday.|Je vais à la natation tous les mercredis.
dance|danser|v|1|💃|I dance to my favourite song.|Je danse sur ma chanson préférée.
sing|chanter|v|1|🎤|My sister loves to sing.|Ma sœur adore chanter.
piano|piano|n|1|🎹|I play the piano every day.|Je joue du piano tous les jours.
guitar|guitare|n|1|🎸|My brother plays the guitar in a band.|Mon frère joue de la guitare dans un groupe.
video game|jeu vidéo|n|1|🎮|I play a video game with my cousin.|Je joue à un jeu vidéo avec mon cousin.
ball|ballon, balle|n|1||Kick the ball!|Tape dans le ballon !
win|gagner|v|1|🏆|I want to win the race!|Je veux gagner la course !
music|musique|n|1|🎵|I listen to music in my bedroom.|J’écoute de la musique dans ma chambre.
running|course à pied|n|2|🏃|Running is good for your health.|La course à pied est bonne pour la santé.
cycling|cyclisme|n|2|🚴|Cycling is my dad’s hobby.|Le vélo est le passe-temps de mon papa.
skiing|ski|n|2|⛷️|We go skiing in the Alps.|Nous allons au ski dans les Alpes.
judo|judo|n|2|🥋|I have a yellow belt in judo.|J’ai la ceinture jaune au judo.
drums|batterie|n|2|🥁|The drums are very loud!|La batterie, c’est très bruyant !
violin|violon|n|2|🎻|The violin is a difficult instrument.|Le violon est un instrument difficile.
chess|échecs|n|2|♟️|Grandpa teaches me chess.|Papi m’apprend les échecs.
comic|bande dessinée|n|2||This comic is very funny.|Cette BD est très drôle.|comic book
team|équipe|n|2||Our team is the best!|Notre équipe est la meilleure !
match|match|n|2||We have a match on Sunday.|Nous avons un match dimanche.|game
lose|perdre|v|2||Don’t be sad if you lose.|Ne sois pas triste si tu perds.
goal|but|n|2|🥅|What a great goal!|Quel beau but !
club|club|n|2||I go to a drama club.|Je vais à un club de théâtre.
fishing|pêche|n|2|🎣|Grandpa and I go fishing at the lake.|Papi et moi allons à la pêche au lac.
skateboard|skateboard|n|2|🛹|I ride my skateboard in the park.|Je fais du skateboard au parc.
player|joueur, joueuse|n|2||He is the best player in the team.|C’est le meilleur joueur de l’équipe.
hobby|passe-temps, loisir|n|3||My hobby is photography.|Mon passe-temps, c’est la photographie.
practise|s’entraîner|v|3||You must practise to get better.|Il faut s’entraîner pour progresser.|practice
`,
  expressions: `
It’s my turn.|C’est mon tour.|1|pour dire que c’est à toi de jouer|Give me the dice, it’s my turn!|Donne-moi le dé, c’est mon tour !||It is my turn
Well played!|Bien joué !|2|pour féliciter quelqu’un qui a bien joué|Well played, Sara! You scored two goals!|Bien joué, Sara ! Tu as marqué deux buts !
Let’s play football!|Jouons au football !|1|pour proposer de jouer au football|It’s sunny. Let’s play football!|Il fait beau. Jouons au football !
I’m good at tennis.|Je suis bon au tennis.|3|pour dire que tu joues bien au tennis|I’m good at tennis, but I’m bad at swimming.|Je suis bon au tennis, mais je suis mauvais en natation.|On dit « good at » (bon en) et « bad at » (mauvais en).|I am good at tennis
What do you do in your free time?|Que fais-tu pendant ton temps libre ?|3|pour demander à quelqu’un quels sont ses loisirs|— What do you do in your free time? — I play the guitar.|— Que fais-tu pendant ton temps libre ? — Je joue de la guitare.
Can I play with you?|Est-ce que je peux jouer avec vous ?|1|pour demander à d’autres enfants si tu peux participer à leur jeu|Hi! Can I play with you?|Salut ! Est-ce que je peux jouer avec vous ?
Who’s winning?|Qui est en train de gagner ?|3|pour demander quelle équipe mène pendant un match|— Who’s winning? — The blue team, three to one.|— Qui est en train de gagner ? — L’équipe bleue, trois à un.||Who is winning?
Come on!|Allez !|1|pour encourager un joueur pendant un effort|Come on, Leo! You can do it!|Allez, Leo ! Tu peux le faire !|Mot à mot : « Viens dessus ». On l’utilise pour encourager.
It’s a draw.|C’est un match nul.|3|pour dire que les deux équipes ont le même score à la fin du match|Two all! It’s a draw.|Deux partout ! C’est un match nul.|Ici, « draw » ne veut pas dire « dessiner » mais « match nul ».|It is a draw
Pass me the ball!|Passe-moi le ballon !|1|pour demander à un coéquipier de t’envoyer le ballon|I’m free! Pass me the ball!|Je suis démarqué ! Passe-moi le ballon !
`,
  build: `
I play tennis on Saturday.|Je joue au tennis le samedi.|3|present_simple|On Saturday I play tennis.
She can play the violin.|Elle sait jouer du violon.|4|can
He doesn’t like swimming.|Il n’aime pas la natation.|4|negation,like_ing
My team is winning the match.|Mon équipe est en train de gagner le match.|4|present_continuous
Do you play a musical instrument?|Joues-tu d’un instrument de musique ?|4|questions
I love playing chess with Grandpa.|J’adore jouer aux échecs avec Papi.|4|like_ing
We won the match last week.|Nous avons gagné le match la semaine dernière.|5|past_simple|Last week we won the match.
I am going to learn the guitar.|Je vais apprendre la guitare.|5|going_to
`,
  gram: `
I play ___ piano.|the|to;at;of|Pour un instrument de musique, on dit « play the piano ».|4|articles|Je joue du piano.
She plays football ___ Wednesday.|on|in;at;to|Devant un jour : on Wednesday.|3||Elle joue au football le mercredi.
I ___ swim very well.|can|cans;am;do|Pour dire qu’on sait faire quelque chose : can + verbe.|4|can|Je sais très bien nager.
He ___ basketball every Friday.|plays|play;playing;is play|Une habitude, avec « he » : plays.|3|present_simple|Il joue au basket tous les vendredis.
I love ___.|dancing|dance;dances;danced|Après « love », on utilise souvent le verbe en -ing.|4|like_ing|J’adore danser.
Listen! My brother ___ the drums.|is playing|plays;play;are playing|« Listen! » : l’action est en cours → is playing.|4|present_continuous|Écoute ! Mon frère joue de la batterie.
Yesterday, our team ___ 3–0.|lost|lose;loses;will lose|« Yesterday » : passé. « Lose » est irrégulier : lost.|5|past_simple|Hier, notre équipe a perdu 3 à 0.
She is good ___ chess.|at|in;on;for|On dit « good at » (bon en).|4||Elle est forte aux échecs.
`,
  odd: `
football;tennis;basketball;piano|piano|Football, tennis et basketball sont des sports ; piano est un instrument.|2
guitar;violin;drums;chess|chess|Guitar, violin et drums sont des instruments ; chess (échecs) est un jeu.|3
swimming;running;cycling;chess|chess|Swimming, running et cycling sont des sports où l’on bouge beaucoup ; chess (échecs) se joue assis.|3
win;lose;practise;team|team|Win, lose et practise sont des verbes ; team (équipe) est un nom.|4
`,
  mystery: `
football|You play it with a ball and your feet.;There are eleven players in a team.|3|Onze joueurs et un ballon.
goal|In football, you want to score one.;The ball goes into the net.|3|Le ballon entre dans le filet.
chess|It is a game for two players.;There is a king and a queen.;The board is black and white.|4|Un jeu avec un roi et une reine.
guitar|It is a musical instrument.;It has got six strings.|4|Un instrument à six cordes.
`,
  act: `
Kick the ball.|Tape dans le ballon.|⚽|🎾;🏀;🎣|2|ballon de foot;balle de tennis;ballon de basket;canne à pêche
Play the guitar.|Joue de la guitare.|🎸|🎹;🥁;🎻|2|guitare;piano;batterie;violon
Dance!|Danse !|💃|🎤;🏊;♟️|2|danser;chanter;nager;jouer aux échecs
Sing a song.|Chante une chanson.|🎤|💃;🎮;🎣|2|chanter;danser;jeu vidéo;pêcher
Go swimming.|Va nager.|🏊|🚴;⛷️;🏃|3|nager;faire du vélo;skier;courir
`,
  dialogues: [
    {
      id: 'd-board-game', title: 'Can I play?', level: 2,
      lines: [
        ['Sam', 'Can I play with you?', 'Est-ce que je peux jouer avec vous ?'],
        ['Nora', 'Yes, of course! It’s your turn.', 'Oui, bien sûr ! C’est ton tour.'],
        ['Sam', 'Great! Six!', 'Super ! Six !'],
        ['Nora', 'Well played, Sam!', 'Bien joué, Sam !']
      ],
      gap: 1, wrong: ['I’m wearing a blue coat.', 'Turn left at the bank.'],
      quiz: [['Can Sam play with Nora?', 'Yes, he can', 'No, he can’t;Only tomorrow', '« Yes, of course! It’s your turn. »', 0]]
    },
    {
      id: 'd-free-time', title: 'Free time', level: 3,
      lines: [
        ['Ryan', 'What do you do in your free time, Isla?', 'Que fais-tu pendant ton temps libre, Isla ?'],
        ['Isla', 'I play the piano and I go swimming. And you?', 'Je joue du piano et je fais de la natation. Et toi ?'],
        ['Ryan', 'I play football. I’m in a team.', 'Je joue au football. Je suis dans une équipe.'],
        ['Isla', 'Cool! Are you good at football?', 'Cool ! Tu es bon au foot ?'],
        ['Ryan', 'Yes, I am! We have a match on Saturday. Come and watch!', 'Oui ! Nous avons un match samedi. Viens voir !']
      ],
      gap: 1, wrong: ['I’m full, thank you.', 'It’s cold and windy.'],
      quiz: [
        ['What does Isla do in her free time?', 'She plays the piano and goes swimming', 'She plays football;She plays chess', '« I play the piano and I go swimming. »', 0],
        ['When is Ryan’s match?', 'On Saturday', 'On Sunday;Today', '« We have a match on Saturday. »', 0]
      ]
    },
    {
      id: 'd-big-match', title: 'Who’s winning?', level: 4,
      lines: [
        ['Dad', 'Who’s winning?', 'Qui est en train de gagner ?'],
        ['Tom', 'The red team. It’s two–one.', 'L’équipe rouge. C’est deux à un.'],
        ['Dad', 'Oh no! Our team is losing!', 'Oh non ! Notre équipe est en train de perdre !'],
        ['Tom', 'Wait… Goal! Now it’s two all!', 'Attends… But ! Maintenant, c’est deux partout !'],
        ['Dad', 'Come on, blue team!', 'Allez, l’équipe bleue !']
      ],
      gap: 1, wrong: ['It’s my turn.', 'Pass me the salt, please.'],
      quiz: [
        ['Which team do Dad and Tom support?', 'The blue team', 'The red team;The green team', 'Papa crie « Come on, blue team! » et dit que « notre équipe » perd quand le score est à l’avantage des rouges.', 1],
        ['What is the score at the end of the dialogue?', 'Two all', 'Two–one;Three–one', '« Now it’s two all! » : deux partout.', 0]
      ]
    }
  ],
  readings: [
    {
      id: 'r-clubs', title: 'After-school clubs', level: 4, tag: 'present_simple',
      text: 'After-school clubs at Greenhill School! Monday: football club in the playground. Tuesday: chess club in the library. Wednesday: no club. Thursday: dance club in the hall — no special clothes needed. Friday: choir — come and sing with Mrs Evans! All clubs start at half past three and finish at half past four.',
      fr: 'Les clubs après l’école à Greenhill ! Lundi : club de football dans la cour. Mardi : club d’échecs à la bibliothèque. Mercredi : pas de club. Jeudi : club de danse dans la salle polyvalente — pas besoin de tenue spéciale. Vendredi : chorale — venez chanter avec Mme Evans ! Tous les clubs commencent à 15 h 30 et finissent à 16 h 30.',
      quiz: [
        ['Where is the chess club?', 'In the library', 'In the playground;In the hall', '« Tuesday: chess club in the library. »'],
        ['Which day is there no club?', 'Wednesday', 'Friday;Monday', '« Wednesday: no club. »'],
        ['What time do the clubs finish?', 'At half past four', 'At half past three;At four o’clock', '« finish at half past four » (16 h 30).']
      ]
    },
    {
      id: 'r-marathon', title: 'Mum’s marathon', level: 5, tag: 'past_simple,going_to',
      text: 'Last month, my mum ran her first marathon in London. She trained for six months: she ran three times a week, even when it was raining. On the day of the race, I waited with my dad near the finish line. She finished in four hours and ten minutes! She was very tired but very happy. Next year, she is going to run in Paris.',
      fr: 'Le mois dernier, ma maman a couru son premier marathon à Londres. Elle s’est entraînée pendant six mois : elle courait trois fois par semaine, même quand il pleuvait. Le jour de la course, j’ai attendu avec mon papa près de la ligne d’arrivée. Elle a fini en quatre heures et dix minutes ! Elle était très fatiguée mais très heureuse. L’année prochaine, elle va courir à Paris.',
      quiz: [
        ['How long did Mum train?', 'For six months', 'For six weeks;For one year', '« She trained for six months ».'],
        ['Where did the writer wait?', 'Near the finish line', 'At home;At the start', '« I waited with my dad near the finish line. »'],
        ['Where is Mum going to run next year?', 'In Paris', 'In London;In New York', '« Next year, she is going to run in Paris. »']
      ]
    }
  ]
});
