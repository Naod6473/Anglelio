/* Thème 8 — Body & Health */
AE.content.registerTheme({
  id: 'body',
  intro: 'Au Centre de Santé, on nomme les parties du corps et on apprend à dire où l’on a mal.',
  lessons: ['plural', 'have_got', 'imperative'],
  words: `
head|tête|n|1||Put your hands on your head.|Mets tes mains sur ta tête.
face|visage|n|1|🙂|Wash your face, please.|Lave-toi le visage, s’il te plaît.
eye|œil|n|1|👁️|Close one eye.|Ferme un œil.
ear|oreille|n|1|👂|My ear hurts.|J’ai mal à l’oreille.
nose|nez|n|1|👃|Clowns have got a red nose.|Les clowns ont un nez rouge.
mouth|bouche|n|1|👄|Open your mouth, please.|Ouvre la bouche, s’il te plaît.
tooth|dent|n|2|🦷|I have got a wobbly tooth.|J’ai une dent qui bouge.
hair|cheveux|n|1|💇|She has got long hair.|Elle a les cheveux longs.
hand|main|n|1|✋|Give me your hand.|Donne-moi la main.
arm|bras|n|1|💪|Raise your right arm.|Lève le bras droit.
leg|jambe|n|1|🦵|My leg is tired after the race.|J’ai la jambe fatiguée après la course.
foot|pied|n|1|🦶|I kick the ball with my left foot.|Je tape dans le ballon avec le pied gauche.
finger|doigt|n|2|☝️|Point with your finger.|Montre avec ton doigt.
knee|genou|n|2||My knee is dirty.|Mon genou est sale.
back|dos|n|2||Sit with your back straight.|Tiens-toi le dos droit.
shoulder|épaule|n|3||Put your bag on your shoulder.|Mets ton sac sur l’épaule.
tummy|ventre|n|2||My tummy is full.|J’ai le ventre plein.|stomach,belly
neck|cou|n|2||Wear a scarf around your neck.|Mets une écharpe autour du cou.
doctor|médecin, docteur|n|1|🧑‍⚕️|The doctor is very nice.|Le médecin est très gentil.
nurse|infirmier, infirmière|n|2||The school nurse gives me a plaster.|L’infirmière scolaire me donne un pansement.
hospital|hôpital|n|2|🏥|My aunt works at the hospital.|Ma tante travaille à l’hôpital.
medicine|médicament|n|2|💊|Take this medicine twice a day.|Prends ce médicament deux fois par jour.
ill|malade|adj|2|🤒|I’m ill, I can’t go to school.|Je suis malade, je ne peux pas aller à l’école.|sick
sneeze|éternuer|v|3|🤧|Pepper makes me sneeze.|Le poivre me fait éternuer.
cough|tousser|v|3|😷|I cough a lot at night.|Je tousse beaucoup la nuit.
headache|mal de tête|n|2|🤕|I have got a headache.|J’ai mal à la tête.
hurt|faire mal|v|2||Does it hurt?|Est-ce que ça fait mal ?
healthy|en bonne santé, sain|adj|3|🥦|Fruit and vegetables are healthy.|Les fruits et les légumes sont bons pour la santé.
temperature|température, fièvre|n|3|🌡️|You have got a temperature.|Tu as de la fièvre.
plaster|pansement|n|3|🩹|Put a plaster on your finger.|Mets un pansement sur ton doigt.|band-aid,bandaid
`,
  expressions: `
What’s the matter?|Qu’est-ce qui ne va pas ?|2|pour demander à quelqu’un ce qui ne va pas|What’s the matter, Tom? You look sad.|Qu’est-ce qui ne va pas, Tom ? Tu as l’air triste.|Mot à mot : « Quelle est la matière ? » Cela n’a rien à voir : c’est une façon de demander ce qui ne va pas.|What is the matter?
I’ve got a headache.|J’ai mal à la tête.|2|pour dire que tu as mal à la tête|I’ve got a headache. Can I have some water?|J’ai mal à la tête. Est-ce que je peux avoir de l’eau ?|En anglais, on « a » un mal de tête : « I’ve got a headache ».|I have got a headache,I have a headache
My tummy hurts.|J’ai mal au ventre.|1|pour dire que tu as mal au ventre|Mum, my tummy hurts. I ate too many sweets!|Maman, j’ai mal au ventre. J’ai mangé trop de bonbons !|Mot à mot : « Mon ventre fait mal ».|My stomach hurts
Get well soon!|Bon rétablissement !|2|pour souhaiter à quelqu’un de guérir vite|Get well soon, Grandma! We love you.|Bon rétablissement, Mamie ! On t’aime.|Mot à mot : « Deviens bien bientôt ».
Bless you!|À tes souhaits !|2|pour répondre poliment quand quelqu’un éternue|— Atchoo! — Bless you!|— Atchoum ! — À tes souhaits !|Mot à mot : « Que Dieu te bénisse ». On le dit simplement par politesse.
I feel better now.|Je me sens mieux maintenant.|3|pour dire que tu vas mieux après avoir été malade|Thanks for the medicine, I feel better now.|Merci pour le médicament, je me sens mieux maintenant.
Wash your hands.|Lave-toi les mains.|1|pour demander à quelqu’un de se laver les mains|Wash your hands before lunch!|Lave-toi les mains avant le déjeuner !
I need to see a doctor.|J’ai besoin de voir un médecin.|3|pour dire que tu dois consulter un médecin|I’ve got a temperature. I need to see a doctor.|J’ai de la fièvre. J’ai besoin de voir un médecin.
Where does it hurt?|Où as-tu mal ?|2|pour demander à quelqu’un à quel endroit il a mal|— Where does it hurt? — Here, on my knee.|— Où as-tu mal ? — Ici, au genou.|Mot à mot : « Où est-ce que ça fait mal ? »
Stay in bed.|Reste au lit.|2|pour conseiller à un malade de rester couché|You’ve got a temperature. Stay in bed today.|Tu as de la fièvre. Reste au lit aujourd’hui.
`,
  build: `
She has got blue eyes.|Elle a les yeux bleus.|3|have_got,adjectives
I have got a headache.|J’ai mal à la tête.|3|have_got
Wash your hands before dinner.|Lave-toi les mains avant le dîner.|3|imperative
My feet are cold.|J’ai froid aux pieds.|4|plural
He doesn’t feel well today.|Il ne se sent pas bien aujourd’hui.|4|negation|Today he doesn’t feel well.
The nurse is looking at my knee.|L’infirmière est en train de regarder mon genou.|4|present_continuous
You can’t go to school today.|Tu ne peux pas aller à l’école aujourd’hui.|4|can,negation|Today you can’t go to school.
I will feel better tomorrow.|J’irai mieux demain.|5|future_will|Tomorrow I will feel better.
`,
  gram: `
I have got two ___.|feet|foots;feets;foot|Le pluriel de « foot » est irrégulier : feet.|4|plural|J’ai deux pieds.
Brush your ___ every day.|teeth|tooths;tooth;teeths|Le pluriel de « tooth » est irrégulier : teeth.|4|plural|Brosse-toi les dents tous les jours.
She ___ got long black hair.|has|have;is;are|Avec « she » : has got.|3|have_got|Elle a de longs cheveux noirs.
My legs ___ tired.|are|is;am;be|« My legs » est pluriel : are.|3|be,plural|Mes jambes sont fatiguées.
He ___ go to school because he is ill.|can’t|can;doesn’t can;cans|Il est malade, donc il ne peut pas : can’t.|4|can,negation|Il ne peut pas aller à l’école parce qu’il est malade.
Tom ___ his arm yesterday.|broke|breaks;break;will break|« Yesterday » : passé. « Break » est irrégulier : broke.|5|past_simple|Tom s’est cassé le bras hier.
Shh, the patient ___.|is sleeping|sleeps;sleep;are sleeping|L’action se passe maintenant : is sleeping.|4|present_continuous|Chut, le patient dort.
Put your hands ___ your head.|on|in;under;at|« Sur la tête » se dit « on your head ».|3|prepositions|Mets tes mains sur ta tête.
`,
  odd: `
eye;ear;nose;foot|foot|Eye, ear et nose sont sur le visage ; foot (pied) est au bout de la jambe.|3
arm;leg;hand;doctor|doctor|Arm, leg et hand sont des parties du corps ; doctor est une personne.|2
headache;temperature;cough;plaster|plaster|Headache, temperature et cough sont des signes de maladie ; plaster (pansement) sert à soigner.|4
hair;neck;shoulder;medicine|medicine|Hair, neck et shoulder sont des parties du corps ; medicine est un médicament.|3
`,
  mystery: `
nose|It is in the middle of your face.;You smell with it.|3|Il est au milieu du visage, il sert à sentir.
knee|It is in the middle of your leg.;You bend it to sit down.|3|Il est au milieu de la jambe.
tooth|It is white and hard.;It is in your mouth.;You brush it.|4|Elle est blanche, dure, dans ta bouche.
hospital|It is a big building.;Doctors and nurses work there.;An ambulance goes there.|4|Un grand bâtiment où travaillent les médecins.
`,
  act: `
Touch your nose.|Touche ton nez.|👃|👂;👁️;👄|2|nez;oreille;œil;bouche
Touch your ear.|Touche ton oreille.|👂|👃;👄;🦶|2|oreille;nez;bouche;pied
Show me your foot.|Montre-moi ton pied.|🦶|✋;🦵;💪|2|pied;main;jambe;bras
Show me your arm.|Montre-moi ton bras.|💪|🦵;🦶;👂|2|bras;jambe;pied;oreille
Open your mouth.|Ouvre la bouche.|👄|👁️;👃;✋|2|bouche;œil;nez;main
`,
  dialogues: [
    {
      id: 'd-tummy', title: 'A tummy ache', level: 2,
      lines: [
        ['Mum', 'What’s the matter, Leo?', 'Qu’est-ce qui ne va pas, Leo ?'],
        ['Leo', 'My tummy hurts.', 'J’ai mal au ventre.'],
        ['Mum', 'Oh dear! Go and lie down.', 'Oh là là ! Va t’allonger.'],
        ['Leo', 'OK, Mum.', 'D’accord, maman.']
      ],
      gap: 1, wrong: ['I’m ten years old.', 'It’s my favourite colour.'],
      quiz: [['What is the problem?', 'Leo’s tummy hurts', 'Leo’s foot hurts;Mum is ill', 'Leo dit « My tummy hurts ».', 0]]
    },
    {
      id: 'd-school-nurse', title: 'The school nurse', level: 3,
      lines: [
        ['Nurse', 'Hello, Emily. Where does it hurt?', 'Bonjour, Emily. Où as-tu mal ?'],
        ['Emily', 'Here, on my knee. I fell in the playground.', 'Ici, au genou. Je suis tombée dans la cour.'],
        ['Nurse', 'Let me see. It’s not serious. I’ll put a plaster on it.', 'Fais voir. Ce n’est pas grave. Je vais mettre un pansement.'],
        ['Emily', 'Thank you. Can I go back to class?', 'Merci. Est-ce que je peux retourner en classe ?'],
        ['Nurse', 'Yes, you can. Be careful!', 'Oui, tu peux. Fais attention !']
      ],
      gap: 1, wrong: ['Bless you!', 'I’ve got blue eyes.'],
      quiz: [
        ['Where does Emily hurt?', 'On her knee', 'On her arm;On her head', '« Here, on my knee. »', 0],
        ['What does the nurse do?', 'She puts a plaster on it', 'She calls the doctor;She sends Emily home', '« I’ll put a plaster on it. »', 1]
      ]
    },
    {
      id: 'd-flu', title: 'At the doctor’s', level: 4,
      lines: [
        ['Doctor', 'Good morning. What’s the matter?', 'Bonjour. Qu’est-ce qui ne va pas ?'],
        ['Mr Hill', 'I’ve got a headache and a temperature.', 'J’ai mal à la tête et de la fièvre.'],
        ['Doctor', 'When did it start?', 'Quand est-ce que ça a commencé ?'],
        ['Mr Hill', 'Yesterday evening. I also cough a lot.', 'Hier soir. Je tousse aussi beaucoup.'],
        ['Doctor', 'You’ve got the flu. Stay in bed and drink lots of water.', 'Vous avez la grippe. Restez au lit et buvez beaucoup d’eau.']
      ],
      gap: 1, wrong: ['Get well soon!', 'I’m going to the park.'],
      quiz: [
        ['When did it start?', 'Yesterday evening', 'This morning;Last week', '« Yesterday evening. »', 1],
        ['What does the doctor say?', 'Stay in bed and drink water', 'Go to school;Eat lots of sweets', '« Stay in bed and drink lots of water. »', 0]
      ]
    }
  ],
  readings: [
    {
      id: 'r-healthy', title: 'Stay healthy!', level: 4, tag: 'imperative',
      text: 'How can you stay healthy? First, eat fruit and vegetables every day. Drink water, not fizzy drinks. Sleep for about ten hours every night: children need a lot of sleep! Play outside and do sport for an hour a day. Wash your hands before you eat. And don’t forget to brush your teeth twice a day!',
      fr: 'Comment rester en bonne santé ? D’abord, mange des fruits et des légumes tous les jours. Bois de l’eau, pas de sodas. Dors environ dix heures chaque nuit : les enfants ont besoin de beaucoup de sommeil ! Joue dehors et fais du sport une heure par jour. Lave-toi les mains avant de manger. Et n’oublie pas de te brosser les dents deux fois par jour !',
      quiz: [
        ['How many hours do children need to sleep?', 'About ten hours', 'About five hours;About fifteen hours', '« Sleep for about ten hours every night ».'],
        ['What is the best drink?', 'Water', 'Fizzy drinks;Coffee', '« Drink water, not fizzy drinks. »'],
        ['When must you wash your hands?', 'Before you eat', 'After you sleep;Before you play', '« Wash your hands before you eat. »']
      ]
    },
    {
      id: 'r-ski', title: 'A broken arm', level: 5, tag: 'past_simple,future_will',
      text: 'Last winter, I went skiing with my family. On the third day, I fell and I broke my arm. It really hurt! We went to the hospital and a doctor put my arm in a cast. I couldn’t write for six weeks, so my friends wrote their names on my cast. Next winter, I will take skiing lessons!',
      fr: 'L’hiver dernier, je suis allé skier avec ma famille. Le troisième jour, je suis tombé et je me suis cassé le bras. Ça faisait vraiment mal ! Nous sommes allés à l’hôpital et un médecin m’a mis un plâtre. Je n’ai pas pu écrire pendant six semaines, alors mes amis ont écrit leurs noms sur mon plâtre. L’hiver prochain, je prendrai des cours de ski !',
      quiz: [
        ['What happened on the third day?', 'The writer broke an arm', 'The writer lost a ski;It snowed a lot', '« On the third day, I fell and I broke my arm. »'],
        ['For how long couldn’t the writer write?', 'Six weeks', 'Three days;Six months', '« I couldn’t write for six weeks ».'],
        ['What did the friends do?', 'They wrote their names on the cast', 'They went skiing;They brought medicine', '« my friends wrote their names on my cast ».']
      ]
    }
  ]
});
