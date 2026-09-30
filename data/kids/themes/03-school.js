/* Thème 3 — School Life */
AE.content.registerTheme({
  id: 'school',
  intro: 'À l’École du Phare, on découvre le matériel scolaire, les matières et les consignes de la classe.',
  lessons: ['imperative', 'articles', 'there_is'],
  words: `
school|école|n|1|🏫|My school is near my house.|Mon école est près de chez moi.
teacher|enseignant, maîtresse|n|1|🧑‍🏫|Our teacher is very kind.|Notre maîtresse est très gentille.
pupil|élève|n|2|🧑‍🎓|Each pupil has a notebook.|Chaque élève a un carnet.|student
classroom|salle de classe|n|1||Our classroom is on the first floor.|Notre salle de classe est au premier étage.
pen|stylo|n|1|🖊️|Can I borrow your pen?|Est-ce que je peux emprunter ton stylo ?
pencil|crayon à papier|n|1|✏️|I write with a pencil.|J’écris avec un crayon à papier.
rubber|gomme|n|1||I need a rubber, please.|J’ai besoin d’une gomme, s’il te plaît.|eraser
ruler|règle|n|1|📏|Draw a line with your ruler.|Trace un trait avec ta règle.
book|livre|n|1|📖|Open your book at page ten.|Ouvre ton livre à la page dix.
schoolbag|cartable|n|1|🎒|My schoolbag is very heavy.|Mon cartable est très lourd.|school bag,backpack
desk|bureau, pupitre|n|2||My desk is next to the window.|Mon bureau est à côté de la fenêtre.
board|tableau|n|2||The teacher writes on the board.|La maîtresse écrit au tableau.
exercise book|cahier|n|1|📓|Write the date in your exercise book.|Écris la date dans ton cahier.
scissors|ciseaux|n|1|✂️|Cut the paper with scissors.|Découpe le papier avec des ciseaux.
glue|colle|n|1||I need some glue for my picture.|J’ai besoin de colle pour mon dessin.
pencil case|trousse|n|1||My pencil case is blue.|Ma trousse est bleue.
homework|devoirs|n|2|📝|I do my homework after school.|Je fais mes devoirs après l’école.
lesson|leçon, cours|n|2||The English lesson starts at ten.|Le cours d’anglais commence à dix heures.
playground|cour de récréation|n|2|🛝|We play in the playground.|Nous jouons dans la cour de récréation.
break|récréation|n|2||We eat a snack at break.|Nous mangeons un goûter à la récré.|break time,playtime
canteen|cantine|n|2|🍽️|I have lunch at the canteen.|Je déjeune à la cantine.
maths|mathématiques|n|2|➗|I like maths because I love numbers.|J’aime les maths parce que j’adore les nombres.|math
science|sciences|n|2|🔬|In science, we study plants.|En sciences, nous étudions les plantes.
history|histoire (matière)|n|2|🏛️|We learn about castles in history.|Nous étudions les châteaux en histoire.
geography|géographie|n|3|🧭|In geography, we look at maps.|En géographie, nous regardons des cartes.
read|lire|v|1|📚|I read a story every night.|Je lis une histoire tous les soirs.
write|écrire|v|1|✍️|Write your name here.|Écris ton nom ici.
learn|apprendre|v|2|🧠|We learn English at school.|Nous apprenons l’anglais à l’école.
dictionary|dictionnaire|n|3|📕|Look up the word in the dictionary.|Cherche le mot dans le dictionnaire.
timetable|emploi du temps|n|3|🗓️|Maths is on the timetable today.|Il y a des maths à l’emploi du temps aujourd’hui.
`,
  expressions: `
May I borrow your pencil?|Est-ce que je peux emprunter ton crayon ?|2|pour demander poliment à un camarade de te prêter son crayon|May I borrow your pencil, please? Mine is broken.|Est-ce que je peux emprunter ton crayon, s’il te plaît ? Le mien est cassé.|« Borrow » = emprunter (tu prends). « Lend » = prêter (tu donnes).|Can I borrow your pencil?
What does this word mean?|Que veut dire ce mot ?|2|pour demander le sens d’un mot que tu ne connais pas|Excuse me, what does this word mean?|Excusez-moi, que veut dire ce mot ?|« Mean » veut dire « signifier ». La question se construit avec « does ».
I don’t understand.|Je ne comprends pas.|1|pour dire que tu ne comprends pas|Sorry, I don’t understand. Can you explain again?|Désolé, je ne comprends pas. Pouvez-vous réexpliquer ?||I do not understand
Can I go to the toilet, please?|Est-ce que je peux aller aux toilettes, s’il vous plaît ?|1|pour demander la permission d’aller aux toilettes pendant la classe|Mrs Brown, can I go to the toilet, please?|Madame Brown, est-ce que je peux aller aux toilettes, s’il vous plaît ?||May I go to the toilet please?,Can I go to the bathroom please?
I’ve finished!|J’ai fini !|2|pour dire que tu as terminé ton travail|— Have you finished, Lucas? — Yes, I’ve finished!|— Tu as fini, Lucas ? — Oui, j’ai fini !||I have finished
How do you say “trousse” in English?|Comment dit-on « trousse » en anglais ?|2|pour demander comment on dit un mot français en anglais|— How do you say “trousse” in English? — Pencil case.|— Comment dit-on « trousse » en anglais ? — Pencil case.
Open your books, please.|Ouvrez vos livres, s’il vous plaît.|1|pour demander à toute la classe d’ouvrir les livres, comme le fait l’enseignant|Good morning, class! Open your books, please.|Bonjour, la classe ! Ouvrez vos livres, s’il vous plaît.
Put your hand up.|Lève la main.|2|pour demander à quelqu’un de lever la main avant de parler|If you know the answer, put your hand up.|Si tu connais la réponse, lève la main.|Mot à mot : « Mets ta main en haut ».
I’ve forgotten my homework.|J’ai oublié mes devoirs.|3|pour dire que tu as laissé tes devoirs à la maison|I’m sorry, Mr Jones. I’ve forgotten my homework.|Je suis désolé, Monsieur Jones. J’ai oublié mes devoirs.||I have forgotten my homework
Work in pairs.|Travaillez par deux.|3|pour demander aux élèves de travailler à deux|Now, work in pairs and ask your partner the questions.|Maintenant, travaillez par deux et posez les questions à votre partenaire.|« Pair » veut dire « paire » : deux personnes ensemble.
Well done!|Bravo !|1|pour féliciter quelqu’un qui a bien travaillé|Ten out of ten! Well done, Nina!|Dix sur dix ! Bravo, Nina !|Mot à mot : « bien fait ». On l’utilise pour féliciter.
`,
  build: `
Open your book, please.|Ouvre ton livre, s’il te plaît.|3|imperative
Don’t run in the corridor.|Ne cours pas dans le couloir.|3|imperative,negation
I have got a red pencil case.|J’ai une trousse rouge.|3|adjectives,have_got
My favourite subject is science.|Ma matière préférée, ce sont les sciences.|3||Science is my favourite subject.
There are twenty pupils in my class.|Il y a vingt élèves dans ma classe.|4|there_is
She is reading a book.|Elle est en train de lire un livre.|4|present_continuous
Can I borrow your ruler?|Est-ce que je peux emprunter ta règle ?|4|can
We didn’t have homework yesterday.|Nous n’avions pas de devoirs hier.|5|past_simple,negation|Yesterday we didn’t have homework.
`,
  gram: `
There ___ a board in the classroom.|is|are;am;be|Un seul tableau (singulier) : « there is ».|4|there_is|Il y a un tableau dans la classe.
There ___ thirty chairs in the classroom.|are|is;am;be|Trente chaises (pluriel) : « there are ».|4|there_is|Il y a trente chaises dans la classe.
I need ___ eraser.|an|a;two;many|« Eraser » commence par un son de voyelle : « an eraser ».|3|articles|J’ai besoin d’une gomme.
___ your books, please.|Open|Opens;Opening;To open|Pour une consigne, on utilise le verbe seul (impératif) : « Open ».|3|imperative|Ouvrez vos livres, s’il vous plaît.
___ talk during the test!|Don’t|Not;No;Doesn’t|L’impératif négatif se forme avec « Don’t » : Don’t talk!|3|imperative,negation|Ne parlez pas pendant le contrôle !
She ___ her homework every evening.|does|do;doing;is do|Avec « she », « do » devient « does » au présent simple.|4|present_simple|Elle fait ses devoirs tous les soirs.
Shh! The children ___ a story.|are reading|reads;is reading;read|« The children » est pluriel et l’action se passe maintenant : « are reading ».|4|present_continuous|Chut ! Les enfants sont en train de lire une histoire.
___ you help me with this exercise?|Can|Do;Are;Does|« Can you…? » = « Peux-tu… ? » On demande si quelqu’un peut faire quelque chose.|4|can|Peux-tu m’aider pour cet exercice ?
`,
  odd: `
pen;pencil;ruler;banana|banana|Pen, pencil et ruler sont du matériel scolaire ; banana est un fruit.|2
maths;science;history;playground|playground|Maths, science et history sont des matières ; playground est la cour de récréation.|3
read;write;learn;desk|desk|Read, write et learn sont des verbes ; desk est un nom (un bureau).|3
scissors;glue;ruler;canteen|canteen|Scissors, glue et ruler sont des objets ; canteen est un lieu (la cantine).|3
`,
  mystery: `
scissors|You use them to cut paper.;They have two blades.|3|On s’en sert pour découper.
ruler|It is long and flat.;You use it to draw straight lines.|3|On s’en sert pour tracer des traits droits.
dictionary|It is a big book.;It tells you what words mean.|4|Ce livre donne le sens des mots.
timetable|It tells you which lessons you have every day.;It is often on the classroom wall.|4|Il indique les cours de chaque jour.
`,
  act: `
Stand up.|Lève-toi.|🧍|🪑;✋;📖|2|se lever;s’asseoir;lever la main;ouvrir le livre
Sit down.|Assieds-toi.|🪑|🧍;✋;✏️|2|s’asseoir;se lever;lever la main;écrire
Put your hand up.|Lève la main.|✋|🧍;🪑;📖|2|lever la main;se lever;s’asseoir;ouvrir le livre
Open your book.|Ouvre ton livre.|📖|📕;✂️;✏️|2|livre ouvert;livre fermé;découper;écrire
Close your book.|Ferme ton livre.|📕|📖;✋;🧍|3|livre fermé;livre ouvert;lever la main;se lever
Cut the paper.|Découpe le papier.|✂️|✏️;📏;🖍️|2|découper;écrire;mesurer;colorier
`,
  dialogues: [
    {
      id: 'd-broken-pencil', title: 'A broken pencil', level: 2,
      lines: [
        ['Lucas', 'Oh no! My pencil is broken.', 'Oh non ! Mon crayon est cassé.'],
        ['Ana', 'Here you are. You can use my pencil.', 'Tiens. Tu peux utiliser mon crayon.'],
        ['Lucas', 'Thank you, Ana!', 'Merci, Ana !'],
        ['Ana', 'You’re welcome.', 'De rien.']
      ],
      gap: 1, wrong: ['Good night, sleep well.', 'I’m from Spain.'],
      quiz: [['What is the problem?', 'Lucas’s pencil is broken', 'Lucas has no book;Ana is late', 'Lucas dit « My pencil is broken ».', 1]]
    },
    {
      id: 'd-english-lesson', title: 'In the English lesson', level: 3,
      lines: [
        ['Mrs Clark', 'Good morning, class! Open your books at page twelve.', 'Bonjour, la classe ! Ouvrez vos livres à la page douze.'],
        ['Ella', 'Excuse me, Mrs Clark. What does “huge” mean?', 'Excusez-moi, Madame Clark. Que veut dire « huge » ?'],
        ['Mrs Clark', 'It means “very, very big”. An elephant is huge!', 'Cela veut dire « très, très grand ». Un éléphant est énorme !'],
        ['Ella', 'Oh, I understand now. Thank you!', 'Ah, je comprends maintenant. Merci !'],
        ['Mrs Clark', 'Now, work in pairs, please.', 'Maintenant, travaillez par deux, s’il vous plaît.']
      ],
      gap: 3, wrong: ['I’m an only child.', 'It’s my pencil case.'],
      quiz: [
        ['What page is it?', 'Page twelve', 'Page two;Page twenty', '« Open your books at page twelve. »', 0],
        ['What does “huge” mean?', 'Very, very big', 'Very small;Very fast', 'Mrs Clark explique : « It means very, very big ».', 1]
      ]
    },
    {
      id: 'd-homework', title: 'Where is your homework?', level: 4,
      lines: [
        ['Mr Jones', 'Where is your homework, Max?', 'Où sont tes devoirs, Max ?'],
        ['Max', 'I’m sorry, Mr Jones. I’ve forgotten it at home.', 'Je suis désolé, Monsieur Jones. Je les ai oubliés à la maison.'],
        ['Mr Jones', 'Again? That’s the second time this week!', 'Encore ? C’est la deuxième fois cette semaine !'],
        ['Max', 'I know. I’ll bring it tomorrow, I promise.', 'Je sais. Je les apporterai demain, promis.'],
        ['Mr Jones', 'OK. Don’t forget!', 'D’accord. N’oublie pas !']
      ],
      gap: 1, wrong: ['It’s in the canteen, it’s delicious.', 'Nice to meet you, Mr Jones.'],
      quiz: [
        ['Where is Max’s homework?', 'At home', 'In his schoolbag;In the classroom', '« I’ve forgotten it at home. »', 0],
        ['When will Max bring his homework?', 'Tomorrow', 'Today;Next week', '« I’ll bring it tomorrow » : « I’ll » = « I will », c’est le futur.', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-oakfield', title: 'My school', level: 4, tag: 'there_is',
      text: 'My school is called Oakfield Primary. It is quite big: there are three hundred pupils and twelve classrooms. My classroom is on the first floor. My teacher is Mr Patel. He is funny and he plays the guitar. There is a big playground with a football pitch. At lunchtime, I eat at the canteen. My favourite subject is art because I love drawing.',
      fr: 'Mon école s’appelle Oakfield Primary. Elle est assez grande : il y a trois cents élèves et douze salles de classe. Ma classe est au premier étage. Mon maître est M. Patel. Il est drôle et il joue de la guitare. Il y a une grande cour avec un terrain de football. À midi, je mange à la cantine. Ma matière préférée est l’art plastique parce que j’adore dessiner.',
      quiz: [
        ['How many pupils are there at the school?', 'Three hundred', 'Thirty;Twelve', '« There are three hundred pupils ». Douze, c’est le nombre de classes.'],
        ['What does Mr Patel play?', 'The guitar', 'Football;The piano', '« He is funny and he plays the guitar. »'],
        ['What is the writer’s favourite subject? Write one word.', 'art', '', '« My favourite subject is art because I love drawing. »', 'typed']
      ]
    },
    {
      id: 'r-school-trip', title: 'The school trip', level: 5, tag: 'past_simple,going_to',
      text: 'Last Friday, our class went on a school trip to the Science Museum. We took the bus at eight o’clock. At the museum, we saw a real rocket and a robot that can talk. I asked the robot a question in English and it answered! We had lunch in the park next to the museum. Next month, we are going to visit a castle for our history lesson.',
      fr: 'Vendredi dernier, notre classe a fait une sortie au musée des Sciences. Nous avons pris le bus à huit heures. Au musée, nous avons vu une vraie fusée et un robot qui sait parler. J’ai posé une question en anglais au robot et il a répondu ! Nous avons déjeuné dans le parc à côté du musée. Le mois prochain, nous allons visiter un château pour notre cours d’histoire.',
      quiz: [
        ['Where did the class go last Friday?', 'To the Science Museum', 'To a castle;To the swimming pool', '« Our class went on a school trip to the Science Museum. » Le château, c’est pour le mois prochain.'],
        ['What could the robot do?', 'It could talk', 'It could fly;It could swim', '« a robot that can talk » : le robot sait parler.'],
        ['Why are they going to visit a castle?', 'For their history lesson', 'For their science lesson;For a birthday party', '« we are going to visit a castle for our history lesson ».']
      ]
    }
  ]
});
