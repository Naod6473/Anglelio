/* Thème 4 — Numbers & Dates */
AE.content.registerTheme({
  id: 'numbers',
  intro: 'Dans la Tour des Nombres, on compte, on découvre les mois de l’année et les nombres ordinaux pour dire les dates.',
  lessons: ['ordinals', 'plural', 'questions'],
  words: `
one|un|num|1|1|I have one brother.|J’ai un frère.
two|deux|num|1|2|I have two cats.|J’ai deux chats.
three|trois|num|1|3|Three pupils are absent today.|Trois élèves sont absents aujourd’hui.
ten|dix|num|1|10|There are ten fingers on your hands.|Il y a dix doigts sur tes mains.
eleven|onze|num|2|11|There are eleven players in a football team.|Il y a onze joueurs dans une équipe de football.
twelve|douze|num|2|12|There are twelve eggs in the box.|Il y a douze œufs dans la boîte.
thirteen|treize|num|2|13|My sister is thirteen.|Ma sœur a treize ans.
fifteen|quinze|num|2|15|The bus comes in fifteen minutes.|Le bus arrive dans quinze minutes.
twenty|vingt|num|2|20|There are twenty desks in the classroom.|Il y a vingt pupitres dans la classe.
thirty|trente|num|2|30|September has thirty days.|Septembre a trente jours.
hundred|cent|num|3|100|There are a hundred pages in this book.|Il y a cent pages dans ce livre.
thousand|mille|num|3|1000|This castle is a thousand years old.|Ce château a mille ans.
first|premier|adj|2|1st|January is the first month of the year.|Janvier est le premier mois de l’année.
second|deuxième, second|adj|2|2nd|February is the second month.|Février est le deuxième mois.
third|troisième|adj|2|3rd|My birthday is on the third of June.|Mon anniversaire est le 3 juin.
twelfth|douzième|adj|3|12th|December is the twelfth month.|Décembre est le douzième mois.
January|janvier|n|1||My birthday is in January.|Mon anniversaire est en janvier.
February|février|n|2||February is a short month.|Février est un mois court.
March|mars|n|2||Spring starts in March.|Le printemps commence en mars.
April|avril|n|2||It often rains in April.|Il pleut souvent en avril.
May|mai|n|2||My sister was born in May.|Ma sœur est née en mai.
June|juin|n|1||The school fair is in June.|La fête de l’école a lieu en juin.
July|juillet|n|1||We go on holiday in July.|Nous partons en vacances en juillet.
August|août|n|2||August is very hot here.|Il fait très chaud ici en août.
September|septembre|n|2||School starts in September.|L’école commence en septembre.
October|octobre|n|2||Halloween is in October.|Halloween, c’est en octobre.
November|novembre|n|2||The leaves fall in November.|Les feuilles tombent en novembre.
December|décembre|n|1||Christmas is in December.|Noël est en décembre.
date|date|n|2|📅|What’s the date today?|Quelle est la date aujourd’hui ?
number|nombre, numéro|n|1|🔢|Choose a number between one and ten.|Choisis un nombre entre un et dix.
`,
  expressions: `
What’s the date today?|Quelle est la date aujourd’hui ?|2|pour demander la date du jour|— What’s the date today? — It’s the fifth of May.|— Quelle est la date aujourd’hui ? — Nous sommes le 5 mai.||What is the date today?
When is your birthday?|Quand est ton anniversaire ?|1|pour demander la date d’anniversaire de quelqu’un|— When is your birthday? — It’s in October.|— Quand est ton anniversaire ? — C’est en octobre.
My birthday is on the tenth of March.|Mon anniversaire est le 10 mars.|3|pour donner la date exacte de ton anniversaire|My birthday is on the tenth of March. I’m having a party!|Mon anniversaire est le 10 mars. J’organise une fête !|Pour les dates, l’anglais utilise l’ordinal : « the tenth » (le dixième), pas « the ten ».
How many?|Combien ?|1|pour demander une quantité de choses que l’on peut compter|— How many pencils have you got? — Three.|— Combien de crayons as-tu ? — Trois.|« How many » s’utilise pour ce qui se compte. Pour un prix, on dit « How much ».
Count to ten.|Compte jusqu’à dix.|1|pour demander à quelqu’un de compter jusqu’à dix|Close your eyes and count to ten!|Ferme les yeux et compte jusqu’à dix !
What’s nine plus three?|Combien font neuf plus trois ?|2|pour demander le résultat d’une addition|— What’s nine plus three? — Twelve!|— Combien font neuf plus trois ? — Douze !||What is nine plus three?
Ten minus four is six.|Dix moins quatre égale six.|3|pour donner le résultat d’une soustraction|Look: ten minus four is six.|Regarde : dix moins quatre égale six.||Ten minus four equals six
I came first!|Je suis arrivé premier !|3|pour dire que tu as gagné une course|I ran very fast and I came first!|J’ai couru très vite et je suis arrivé premier !|On dit « come first » (mot à mot « venir premier ») pour « arriver premier ».
Let’s count together.|Comptons ensemble.|1|pour proposer de compter avec quelqu’un|Let’s count together: one, two, three!|Comptons ensemble : un, deux, trois !
I was born in May.|Je suis né(e) en mai.|3|pour dire en quel mois tu es né|I was born in May, so I’m a spring baby!|Je suis né en mai, je suis donc un bébé du printemps !|En anglais, « naître » se dit « be born » : I was born (au passé).
`,
  build: `
My birthday is in July.|Mon anniversaire est en juillet.|3|
I have got three cousins.|J’ai trois cousins.|3|have_got,plural
Two and two make four.|Deux et deux font quatre.|3|
There are twelve months in a year.|Il y a douze mois dans une année.|4|there_is
Today is the second of May.|Aujourd’hui, nous sommes le 2 mai.|4|ordinals
How many pencils have you got?|Combien de crayons as-tu ?|4|questions
She is the third in the race.|Elle est troisième de la course.|4|ordinals
Next year, I will be eleven.|L’année prochaine, j’aurai onze ans.|5|future_will|I will be eleven next year.
`,
  gram: `
There are ___ days in a week.|seven|six;eight;ten|Une semaine compte sept jours : « seven ».|2||Il y a sept jours dans une semaine.
Christmas is ___ the twenty-fifth of December.|on|in;at;of|Devant une date précise, on utilise « on » : on the 25th of December.|4|ordinals|Noël est le 25 décembre.
My birthday is ___ June.|in|on;at;to|Devant un mois seul, on utilise « in » : in June.|3|ordinals|Mon anniversaire est en juin.
How ___ brothers have you got?|many|much;old;long|On compte les frères : « How many ».|3|questions|Combien de frères as-tu ?
He came ___ in the race: he won!|first|one;once;firstly|Pour un classement, on utilise l’ordinal : « first » (premier).|3|ordinals|Il est arrivé premier à la course : il a gagné !
There ___ thirty-one days in January.|are|is;am;has|Trente et un jours : pluriel → « there are ».|4|there_is|Il y a trente et un jours en janvier.
Last year, I ___ nine.|was|am;were;will be|« Last year » indique le passé : I am → I was.|5|past_simple|L’année dernière, j’avais neuf ans.
Next month, my sister ___ twelve.|will be|was;is being;were|« Next month » indique le futur : « will be ».|5|future_will|Le mois prochain, ma sœur aura douze ans.
`,
  odd: `
January;March;July;Monday|Monday|January, March et July sont des mois ; Monday est un jour de la semaine.|3
first;second;third;four|four|First, second et third sont des ordinaux (1er, 2e, 3e) ; four est un nombre (4).|3
twelve;twenty;thirteen;table|table|Twelve, twenty et thirteen sont des nombres ; table est un meuble.|2
hundred;thousand;ten;teacher|teacher|Hundred, thousand et ten sont des nombres ; teacher est une personne.|2
`,
  mystery: `
twelve|It is ten plus two.;There are this many months in a year.|3|Dix plus deux.
December|It is the last month of the year.;Christmas is in this month.|4|Le dernier mois de l’année.
hundred|It is ten times ten.;It has three digits: a one and two zeros.|4|Dix fois dix.
February|It is the shortest month.;It comes after January.|4|Le mois le plus court.
`,
  act: `
Show me number thirteen.|Montre-moi le nombre treize.|13|30;3;31|3|treize;trente;trois;trente et un
Show me number twelve.|Montre-moi le nombre douze.|12|20;2;21|2|douze;vingt;deux;vingt et un
Show me number fifteen.|Montre-moi le nombre quinze.|15|50;5;51|3|quinze;cinquante;cinq;cinquante et un
Point to the third one.|Montre le troisième.|3rd|1st;2nd;4th|3|troisième;premier;deuxième;quatrième
`,
  dialogues: [
    {
      id: 'd-birthday-month', title: 'Birthdays', level: 2,
      lines: [
        ['Tom', 'When is your birthday, Lily?', 'Quand est ton anniversaire, Lily ?'],
        ['Lily', 'It’s in July. And yours?', 'C’est en juillet. Et le tien ?'],
        ['Tom', 'My birthday is in December.', 'Mon anniversaire est en décembre.'],
        ['Lily', 'Oh, near Christmas!', 'Oh, près de Noël !']
      ],
      gap: 1, wrong: ['I’m fine, thank you.', 'It’s my pencil.'],
      quiz: [['When is Tom’s birthday?', 'In December', 'In July;In June', 'Tom dit « My birthday is in December ». Juillet, c’est l’anniversaire de Lily.', 1]]
    },
    {
      id: 'd-apples', title: 'Twelve apples', level: 3,
      lines: [
        ['Seller', 'Hello! How many apples do you want?', 'Bonjour ! Combien de pommes veux-tu ?'],
        ['Ruby', 'Twelve apples, please.', 'Douze pommes, s’il vous plaît.'],
        ['Seller', 'Twelve? Here you are. One, two, three… twelve!', 'Douze ? Voilà. Un, deux, trois… douze !'],
        ['Ruby', 'Thank you! And five oranges, please.', 'Merci ! Et cinq oranges, s’il vous plaît.']
      ],
      gap: 1, wrong: ['It’s the third of May.', 'I’m eleven years old.'],
      quiz: [
        ['How many apples does Ruby want?', 'Twelve', 'Two;Twenty', 'Ruby dit « Twelve apples, please ».', 0],
        ['What else does Ruby want?', 'Five oranges', 'Five apples;Nine oranges', 'Elle ajoute « And five oranges, please ».', 1]
      ]
    },
    {
      id: 'd-race', title: 'The race', level: 4,
      lines: [
        ['Coach', 'Well done, everybody! Who came first?', 'Bravo à tous ! Qui est arrivé premier ?'],
        ['Sam', 'Jade came first. She was very fast!', 'Jade est arrivée première. Elle était très rapide !'],
        ['Coach', 'And you, Sam?', 'Et toi, Sam ?'],
        ['Sam', 'I came third. Leo was second.', 'Je suis arrivé troisième. Leo était deuxième.'],
        ['Coach', 'Great! Next week, we will run again.', 'Super ! La semaine prochaine, nous courrons encore.']
      ],
      gap: 3, wrong: ['I’ve got twelve months.', 'It’s the twentieth of June.'],
      quiz: [
        ['Who came second?', 'Leo', 'Sam;Jade', '« Leo was second. »', 0],
        ['What position was Sam?', 'Third', 'First;Second', 'Sam dit « I came third ».', 0]
      ]
    }
  ],
  readings: [
    {
      id: 'r-calendar', title: 'A special birthday', level: 4, tag: 'ordinals',
      text: 'There are twelve months in a year. January is the first month and December is the twelfth. Some months have thirty days, others have thirty-one. February is special: it usually has twenty-eight days, but every four years it has twenty-nine. My birthday is on the twenty-ninth of February, so I only have a real birthday every four years!',
      fr: 'Il y a douze mois dans une année. Janvier est le premier mois et décembre le douzième. Certains mois ont trente jours, d’autres trente et un. Février est spécial : il a généralement vingt-huit jours, mais tous les quatre ans, il en a vingt-neuf. Mon anniversaire est le 29 février, donc je n’ai un vrai anniversaire que tous les quatre ans !',
      quiz: [
        ['How many days does February usually have?', 'Twenty-eight', 'Thirty;Thirty-one', '« it usually has twenty-eight days » : usually = généralement.'],
        ['Which is the twelfth month?', 'December', 'January;February', '« December is the twelfth ».'],
        ['How often does the writer have a real birthday?', 'Every four years', 'Every year;Every month', 'Né le 29 février, il n’a un vrai anniversaire que « every four years ».']
      ]
    },
    {
      id: 'r-library-count', title: 'The counting challenge', level: 5, tag: 'past_simple,future_will',
      text: 'Yesterday, our teacher gave us a challenge. We counted all the books in the school library. There were one thousand two hundred books! Then we counted the chairs: there were forty-eight. It took us two hours. Tomorrow, we will count the plants in the garden. I think there will be about fifty.',
      fr: 'Hier, notre maîtresse nous a lancé un défi. Nous avons compté tous les livres de la bibliothèque de l’école. Il y en avait mille deux cents ! Ensuite, nous avons compté les chaises : il y en avait quarante-huit. Cela nous a pris deux heures. Demain, nous compterons les plantes du jardin. Je pense qu’il y en aura environ cinquante.',
      quiz: [
        ['How many books were there in the library?', 'One thousand two hundred', 'One hundred and twenty;Forty-eight', '« There were one thousand two hundred books! » (1 200).'],
        ['How long did it take?', 'Two hours', 'Two minutes;Forty-eight minutes', '« It took us two hours. »'],
        ['What will they count tomorrow?', 'The plants in the garden', 'The chairs;The books', '« Tomorrow, we will count the plants in the garden. »']
      ]
    }
  ]
});
