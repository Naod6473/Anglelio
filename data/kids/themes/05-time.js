/* Thème 5 — Time & Daily Routine */
AE.content.registerTheme({
  id: 'time',
  intro: 'À l’Horloge Géante, on apprend à dire l’heure, les jours de la semaine et à raconter sa journée.',
  lessons: ['time', 'present_simple', 'present_continuous'],
  words: `
Monday|lundi|n|1||On Monday, I have swimming.|Le lundi, j’ai piscine.
Tuesday|mardi|n|1||I go to music club on Tuesday.|Je vais au club de musique le mardi.
Wednesday|mercredi|n|1||There is no school on Wednesday afternoon.|Il n’y a pas école le mercredi après-midi.
Thursday|jeudi|n|2||We have art on Thursday.|Nous avons arts plastiques le jeudi.
Friday|vendredi|n|1||Friday is my favourite day.|Le vendredi est mon jour préféré.
Saturday|samedi|n|1||On Saturday, I play football.|Le samedi, je joue au football.
Sunday|dimanche|n|1||We visit Grandma on Sunday.|Nous rendons visite à Mamie le dimanche.
week|semaine|n|1||I have English twice a week.|J’ai anglais deux fois par semaine.
weekend|week-end|n|1||What do you do at the weekend?|Que fais-tu le week-end ?
today|aujourd’hui|adv|1||Today is Monday.|Aujourd’hui, c’est lundi.
tomorrow|demain|adv|1||See you tomorrow!|À demain !
yesterday|hier|adv|2||Yesterday was Sunday.|Hier, c’était dimanche.
clock|horloge, pendule|n|1|🕰️|The clock is on the wall.|L’horloge est au mur.
hour|heure (durée)|n|2|⏳|The film lasts one hour.|Le film dure une heure.
minute|minute|n|2|⏱️|Wait a minute, please.|Attends une minute, s’il te plaît.
o’clock|heure pile|adv|2|🕗|I go to school at eight o’clock.|Je vais à l’école à huit heures.|oclock
half past|et demie|phr|2|🕢|It’s half past seven.|Il est sept heures et demie.
quarter|quart|n|3||It’s a quarter to eight.|Il est huit heures moins le quart.
get up|se lever|v|1||I get up at seven.|Je me lève à sept heures.
wake up|se réveiller|v|2|⏰|I wake up before my alarm.|Je me réveille avant mon réveil.
breakfast|petit déjeuner|n|1|🥣|I have breakfast in the kitchen.|Je prends mon petit déjeuner dans la cuisine.
lunch|déjeuner|n|1|🥪|We have lunch at noon.|Nous déjeunons à midi.
dinner|dîner|n|1|🍝|We have dinner at eight.|Nous dînons à huit heures.
shower|douche|n|2|🚿|I take a shower in the morning.|Je prends une douche le matin.
get dressed|s’habiller|v|2|👕|I get dressed after breakfast.|Je m’habille après le petit déjeuner.
brush|brosser|v|2|🪥|I brush my teeth twice a day.|Je me brosse les dents deux fois par jour.
always|toujours|adv|2||I always walk to school.|Je vais toujours à l’école à pied.
never|jamais|adv|2||I never go to bed late.|Je ne me couche jamais tard.
sometimes|parfois|adv|2||Sometimes I read comics in bed.|Parfois, je lis des BD au lit.
late|en retard, tard|adj|3||Hurry up, we are late!|Dépêche-toi, nous sommes en retard !
`,
  expressions: `
What time is it?|Quelle heure est-il ?|1|pour demander l’heure|— What time is it? — It’s ten o’clock.|— Quelle heure est-il ? — Il est dix heures.|Ici, « time » veut dire « heure », pas « temps ».
It’s time for bed.|C’est l’heure d’aller au lit.|2|pour dire qu’il est l’heure d’aller dormir|Come on, Tim! It’s time for bed.|Allez, Tim ! C’est l’heure d’aller au lit.||It is time for bed
Hurry up!|Dépêche-toi !|1|pour demander à quelqu’un d’aller plus vite|Hurry up! The bus is coming!|Dépêche-toi ! Le bus arrive !
What day is it today?|Quel jour sommes-nous ?|2|pour demander quel jour de la semaine on est|— What day is it today? — It’s Friday!|— Quel jour sommes-nous ? — C’est vendredi !
I’m late!|Je suis en retard !|1|pour dire que tu n’es pas à l’heure|Oh no, I’m late for school!|Oh non, je suis en retard pour l’école !||I am late
What do you do in the morning?|Que fais-tu le matin ?|3|pour demander à quelqu’un ce qu’il fait le matin|— What do you do in the morning? — I get up and have breakfast.|— Que fais-tu le matin ? — Je me lève et je prends mon petit déjeuner.
What time do you go to bed?|À quelle heure te couches-tu ?|3|pour demander à quelle heure quelqu’un va se coucher|— What time do you go to bed? — At nine o’clock.|— À quelle heure te couches-tu ? — À neuf heures.|En anglais courant, on commence par « What time… ? » et non par « At what time… ? ».
Wait a minute!|Attends une minute !|2|pour demander à quelqu’un d’attendre un peu|Wait a minute! I’m putting my shoes on.|Attends une minute ! Je mets mes chaussures.
Good night!|Bonne nuit !|1|pour souhaiter une bonne nuit avant d’aller dormir|Good night, Mum! See you in the morning.|Bonne nuit, maman ! À demain matin.
Every day.|Tous les jours.|2|pour dire qu’une chose arrive chaque jour|I read a story every day.|Je lis une histoire tous les jours.|Mot à mot : « chaque jour ».
I’m always on time.|Je suis toujours à l’heure.|3|pour dire que tu n’es jamais en retard|I’m always on time for school.|Je suis toujours à l’heure à l’école.|« On time » = à l’heure. « In time » = à temps.|I am always on time
`,
  build: `
I get up at seven o’clock.|Je me lève à sept heures.|3|present_simple,time
It is half past six.|Il est six heures et demie.|3|time
We go to school on Monday.|Nous allons à l’école le lundi.|3||On Monday we go to school.
She has breakfast at eight.|Elle prend son petit déjeuner à huit heures.|4|present_simple
He brushes his teeth every evening.|Il se brosse les dents tous les soirs.|4|present_simple|Every evening he brushes his teeth.
I never go to bed late.|Je ne me couche jamais tard.|4|present_simple
What time do you get up?|À quelle heure te lèves-tu ?|4|questions,time
Tomorrow I will get up early.|Demain, je me lèverai tôt.|5|future_will|I will get up early tomorrow.
`,
  gram: `
She ___ up at seven every day.|gets|get;getting;is get|Avec « she » au présent simple, on ajoute -s : she gets up.|4|present_simple|Elle se lève à sept heures tous les jours.
He ___ his teeth after breakfast.|brushes|brush;brushs;brushing|Après -sh, on ajoute -es à la 3e personne : he brushes.|4|present_simple|Il se brosse les dents après le petit déjeuner.
School starts ___ half past eight.|at|on;in;to|Devant une heure, on utilise « at » : at half past eight.|3|time|L’école commence à huit heures et demie.
I play football ___ Saturday.|on|in;at;to|Devant un jour de la semaine, on utilise « on » : on Saturday.|3||Je joue au football le samedi.
We ___ go to school on Sunday.|don’t|doesn’t;aren’t;not|Avec « we », la négation au présent simple est « don’t ».|4|negation|Nous n’allons pas à l’école le dimanche.
Be quiet! The baby ___.|is sleeping|sleeps;sleep;are sleeping|L’action se passe maintenant : present continuous « is sleeping ».|4|present_continuous|Silence ! Le bébé dort.
Yesterday, I ___ up very late.|got|get;gets;will get|« Yesterday » indique le passé. « Get » est irrégulier : got.|5|past_simple|Hier, je me suis levé très tard.
It’s seven fifteen: it’s quarter ___ seven.|past|to;half;at|7 h 15 se dit « quarter past seven ». « Quarter to » veut dire « moins le quart ».|4|time|Il est sept heures et quart.
`,
  odd: `
Monday;Friday;Sunday;March|March|Monday, Friday et Sunday sont des jours ; March est un mois.|2
breakfast;lunch;dinner;shower|shower|Breakfast, lunch et dinner sont des repas ; shower est une douche.|3
always;never;sometimes;tomorrow|tomorrow|Always, never et sometimes disent à quelle fréquence on fait quelque chose ; tomorrow veut dire « demain ».|4
hour;minute;week;clock|clock|Hour, minute et week sont des durées ; clock est un objet (une horloge).|3
`,
  mystery: `
breakfast|It is the first meal of the day.;You have it in the morning.|3|C’est le premier repas de la journée.
Sunday|It is the day after Saturday.;There is no school on this day.|3|C’est le jour après samedi.
clock|It has two hands but no fingers.;It tells you the time.|4|Il a des aiguilles et donne l’heure.
yesterday|It is the day before today.;The opposite is tomorrow.|4|C’est le jour avant aujourd’hui.
`,
  act: `
Show me seven o’clock.|Montre sept heures.|🕖|🕗;🕢;🕚|3|sept heures;huit heures;sept heures et demie;onze heures
Show me half past two.|Montre deux heures et demie.|🕝|🕑;🕜;🕟|4|deux heures et demie;deux heures;une heure et demie;quatre heures et demie
Brush your teeth.|Brosse-toi les dents.|🪥|🚿;🥣;🛏️|2|se brosser les dents;prendre une douche;prendre le petit déjeuner;aller au lit
Go to bed.|Va au lit.|🛏️|🪥;🚿;🥣|2|aller au lit;se brosser les dents;prendre une douche;prendre le petit déjeuner
`,
  dialogues: [
    {
      id: 'd-wake-up', title: 'Wake up!', level: 2,
      lines: [
        ['Mum', 'Wake up, Lucy! It’s seven o’clock.', 'Réveille-toi, Lucy ! Il est sept heures.'],
        ['Lucy', 'Oh no! I’m late!', 'Oh non ! Je suis en retard !'],
        ['Mum', 'Hurry up! Your breakfast is ready.', 'Dépêche-toi ! Ton petit déjeuner est prêt.'],
        ['Lucy', 'OK, Mum. I’m coming!', 'D’accord, maman. J’arrive !']
      ],
      gap: 1, wrong: ['Good night, Mum!', 'Happy birthday!'],
      quiz: [['What time is it?', 'Seven o’clock', 'Eight o’clock;Half past seven', 'Maman dit « It’s seven o’clock ».', 0]]
    },
    {
      id: 'd-routine', title: 'Nora’s morning', level: 3,
      lines: [
        ['Kai', 'What time do you get up, Nora?', 'À quelle heure te lèves-tu, Nora ?'],
        ['Nora', 'I get up at half past six.', 'Je me lève à six heures et demie.'],
        ['Kai', 'That’s early! What do you do then?', 'C’est tôt ! Qu’est-ce que tu fais ensuite ?'],
        ['Nora', 'I take a shower, I get dressed and I have breakfast.', 'Je prends une douche, je m’habille et je prends mon petit déjeuner.'],
        ['Kai', 'And what time do you go to school?', 'Et à quelle heure vas-tu à l’école ?'],
        ['Nora', 'At eight o’clock. I always walk.', 'À huit heures. J’y vais toujours à pied.']
      ],
      gap: 3, wrong: ['It’s Wednesday today.', 'Nice to meet you, Kai.'],
      quiz: [
        ['What time does Nora get up?', 'At half past six', 'At six o’clock;At eight o’clock', '« I get up at half past six » (6 h 30).', 0],
        ['How does Nora go to school?', 'She walks', 'By bus;By car', '« I always walk » : elle y va toujours à pied.', 1]
      ]
    },
    {
      id: 'd-saturday-plans', title: 'Plans for the weekend', level: 4,
      lines: [
        ['Ethan', 'What are you going to do on Saturday?', 'Qu’est-ce que tu vas faire samedi ?'],
        ['Maya', 'I’m going to sleep late! And you?', 'Je vais faire la grasse matinée ! Et toi ?'],
        ['Ethan', 'I have football at ten, and then lunch with my grandparents.', 'J’ai football à dix heures, puis je déjeune avec mes grands-parents.'],
        ['Maya', 'Sounds fun! On Sunday, do you want to come to the park?', 'Sympa ! Dimanche, tu veux venir au parc ?'],
        ['Ethan', 'Yes, great idea! See you on Sunday.', 'Oui, super idée ! À dimanche.']
      ],
      gap: 2, wrong: ['It’s a quarter past nine.', 'Yes, I’m late.'],
      quiz: [
        ['What is Maya going to do on Saturday?', 'Sleep late', 'Play football;Visit her grandparents', '« I’m going to sleep late! » C’est Ethan qui joue au football.', 1],
        ['When will they go to the park?', 'On Sunday', 'On Saturday;On Friday', '« On Sunday, do you want to come to the park? » — « See you on Sunday. »', 0]
      ]
    }
  ],
  readings: [
    {
      id: 'r-kenji', title: 'A day in Tokyo', level: 4, tag: 'present_simple,time',
      text: 'My name is Kenji and I live in Tokyo. On school days, I get up at six o’clock. I have rice and soup for breakfast. School starts at half past eight and finishes at three. After school, I go to my judo club on Monday and Thursday. In the evening, I do my homework, have a bath and go to bed at nine. On Sunday, I sleep late!',
      fr: 'Je m’appelle Kenji et j’habite à Tokyo. Les jours d’école, je me lève à six heures. Je mange du riz et de la soupe au petit déjeuner. L’école commence à huit heures et demie et finit à trois heures. Après l’école, je vais au club de judo le lundi et le jeudi. Le soir, je fais mes devoirs, je prends un bain et je me couche à neuf heures. Le dimanche, je fais la grasse matinée !',
      quiz: [
        ['What does Kenji have for breakfast?', 'Rice and soup', 'Bread and jam;Cereal and milk', '« I have rice and soup for breakfast. »'],
        ['When does Kenji go to judo?', 'On Monday and Thursday', 'Every day;On Sunday', '« I go to my judo club on Monday and Thursday. »'],
        ['What time does school finish? Write the number in letters.', 'three', 'three o’clock;3', '« School … finishes at three. »', 'typed']
      ]
    },
    {
      id: 'r-crazy-monday', title: 'A crazy Monday', level: 5, tag: 'past_simple,future_will',
      text: 'Last Monday was a crazy day! My alarm clock didn’t ring, so I woke up at eight o’clock. I didn’t have time for breakfast. I ran to school and I arrived at a quarter past eight, just in time. At lunchtime, I was very hungry! Tonight, I will check my alarm clock before I go to bed.',
      fr: 'Lundi dernier a été une journée de folie ! Mon réveil n’a pas sonné, alors je me suis réveillé à huit heures. Je n’ai pas eu le temps de prendre mon petit déjeuner. J’ai couru jusqu’à l’école et je suis arrivé à huit heures et quart, juste à temps. À midi, j’avais très faim ! Ce soir, je vérifierai mon réveil avant d’aller me coucher.',
      quiz: [
        ['Why did the writer wake up late?', 'The alarm clock didn’t ring', 'He was ill;It was Sunday', '« My alarm clock didn’t ring » : le réveil n’a pas sonné.'],
        ['What time did he arrive at school?', 'At a quarter past eight', 'At eight o’clock;At half past eight', '« I arrived at a quarter past eight » (8 h 15).'],
        ['What will he do tonight?', 'Check his alarm clock', 'Go to bed late;Have a big breakfast', '« Tonight, I will check my alarm clock » : will = futur.']
      ]
    }
  ]
});
