/* Thème 11 — Clothes & Accessories */
AE.content.registerTheme({
  id: 'clothes',
  intro: 'À la Boutique de Mode, on découvre les vêtements et les accessoires, et on apprend à dire ce que l’on porte.',
  lessons: ['present_continuous', 'plural', 'possessives'],
  words: `
T-shirt|t-shirt|n|1|👕|I’m wearing a green T-shirt.|Je porte un t-shirt vert.|tshirt,tee shirt
trousers|pantalon|n|1|👖|My trousers are too long.|Mon pantalon est trop long.|pants
dress|robe|n|1|👗|She has got a beautiful red dress.|Elle a une belle robe rouge.
skirt|jupe|n|1||Her skirt is blue and white.|Sa jupe est bleue et blanche.
shorts|short|n|1|🩳|In summer, I wear shorts.|En été, je porte un short.
coat|manteau|n|1|🧥|Don’t forget your coat!|N’oublie pas ton manteau !
shoes|chaussures|n|1|👞|Take off your shoes, please.|Enlève tes chaussures, s’il te plaît.
socks|chaussettes|n|1|🧦|My socks are different colours!|Mes chaussettes sont de couleurs différentes !
hat|chapeau|n|1|👒|Wear a hat in the sun.|Mets un chapeau au soleil.
shirt|chemise|n|2|👔|Dad wears a shirt for work.|Papa porte une chemise pour le travail.
jeans|jean|n|2||I wear jeans at the weekend.|Je porte un jean le week-end.
jumper|pull|n|2||Put on your jumper, it’s cold.|Mets ton pull, il fait froid.|sweater,pullover
jacket|veste, blouson|n|2||This jacket has got two pockets.|Cette veste a deux poches.
trainers|baskets|n|2|👟|I need new trainers for sport.|J’ai besoin de nouvelles baskets pour le sport.|sneakers
boots|bottes|n|2|🥾|Wear your boots, it’s muddy.|Mets tes bottes, c’est boueux.
cap|casquette|n|2|🧢|He wears his cap backwards.|Il porte sa casquette à l’envers.
scarf|écharpe|n|2|🧣|This scarf is very warm.|Cette écharpe est très chaude.
gloves|gants|n|2|🧤|I wear gloves in winter.|Je porte des gants en hiver.
glasses|lunettes|n|2|👓|My grandma wears glasses to read.|Ma grand-mère porte des lunettes pour lire.
sunglasses|lunettes de soleil|n|2|🕶️|Put on your sunglasses at the beach.|Mets tes lunettes de soleil à la plage.
watch|montre|n|2|⌚|My watch is waterproof.|Ma montre est étanche.
umbrella|parapluie|n|2|☂️|Take an umbrella, it’s raining.|Prends un parapluie, il pleut.
pyjamas|pyjama|n|2||I put on my pyjamas before bed.|Je mets mon pyjama avant d’aller au lit.|pajamas
wear|porter (un vêtement)|v|2||I wear a scarf when it’s windy.|Je porte une écharpe quand il y a du vent.
put on|mettre (un vêtement)|v|2||Put on your coat!|Mets ton manteau !
take off|enlever (un vêtement)|v|2||Take off your wet socks.|Enlève tes chaussettes mouillées.
handbag|sac à main|n|3|👜|Mum’s keys are in her handbag.|Les clés de maman sont dans son sac à main.|purse
uniform|uniforme|n|3||In England, many pupils wear a uniform.|En Angleterre, beaucoup d’élèves portent un uniforme.
swimsuit|maillot de bain|n|3|🩱|Don’t forget your swimsuit for the pool.|N’oublie pas ton maillot de bain pour la piscine.|swimming costume
pocket|poche|n|3||I have got a coin in my pocket.|J’ai une pièce dans ma poche.
`,
  expressions: `
What are you wearing?|Qu’est-ce que tu portes ?|2|pour demander à quelqu’un quels vêtements il a sur lui|— What are you wearing? — A blue dress and white trainers.|— Qu’est-ce que tu portes ? — Une robe bleue et des baskets blanches.
Put your coat on!|Mets ton manteau !|1|pour dire à quelqu’un de mettre son manteau|It’s cold outside. Put your coat on!|Il fait froid dehors. Mets ton manteau !||Put on your coat
It suits you.|Ça te va bien.|3|pour faire un compliment sur un vêtement que quelqu’un porte|I love your new hat. It suits you!|J’adore ton nouveau chapeau. Il te va bien !|Ici, « suit » veut dire « aller bien à quelqu’un ». Mot à mot : « Il te convient ».
Can I try it on?|Est-ce que je peux l’essayer ?|3|pour demander à essayer un vêtement dans un magasin|This jacket is nice. Can I try it on?|Cette veste est jolie. Est-ce que je peux l’essayer ?|« Try on » veut dire « essayer (un vêtement) ».
What size are you?|Quelle taille fais-tu ?|3|pour demander la taille de vêtement de quelqu’un|— What size are you? — Size ten.|— Quelle taille fais-tu ? — Taille dix.
It’s too big.|C’est trop grand.|1|pour dire qu’un vêtement est trop grand pour toi|— How is the coat? — It’s too big.|— Comment est le manteau ? — Il est trop grand.||It is too big
I love your shoes!|J’adore tes chaussures !|1|pour complimenter quelqu’un sur ses chaussures|Wow, I love your shoes! Are they new?|Waouh, j’adore tes chaussures ! Elles sont neuves ?
Don’t forget your umbrella.|N’oublie pas ton parapluie.|2|pour rappeler à quelqu’un de prendre son parapluie|It’s going to rain. Don’t forget your umbrella.|Il va pleuvoir. N’oublie pas ton parapluie.
Get dressed!|Habille-toi !|1|pour demander à quelqu’un de s’habiller|Get dressed, Tom! We’re leaving in five minutes.|Habille-toi, Tom ! Nous partons dans cinq minutes.|Mot à mot : « Deviens habillé ».
Hang up your coat.|Accroche ton manteau.|2|pour demander à quelqu’un de suspendre son manteau au portemanteau|Hang up your coat when you come in.|Accroche ton manteau quand tu rentres.|« Hang up » veut dire « accrocher, suspendre ».
`,
  build: `
I have got new trainers.|J’ai de nouvelles baskets.|3|have_got
Put on your warm gloves.|Mets tes gants chauds.|3|imperative
My socks are under the bed.|Mes chaussettes sont sous le lit.|3|prepositions
She is wearing a red dress.|Elle porte une robe rouge.|4|present_continuous
He doesn’t wear glasses.|Il ne porte pas de lunettes.|4|negation
Are these your boots?|Ce sont tes bottes ?|4|questions,plural
These jeans are too small.|Ce jean est trop petit.|4|plural
I will wear my new hat tomorrow.|Je porterai mon nouveau chapeau demain.|5|future_will|Tomorrow I will wear my new hat.
`,
  gram: `
My trousers ___ black.|are|is;am;be|En anglais, « trousers » est toujours au pluriel : my trousers are.|4|plural|Mon pantalon est noir.
She ___ a skirt today.|is wearing|wears;wear;are wearing|« Today », en ce moment : present continuous → is wearing.|4|present_continuous|Elle porte une jupe aujourd’hui.
It’s cold. ___ on your jumper!|Put|Puts;Putting;To put|Impératif : le verbe seul → Put.|3|imperative|Il fait froid. Mets ton pull !
I have got two ___ of socks.|pairs|pair;pairs of;paires|Deux paires : « pairs » au pluriel.|4|plural|J’ai deux paires de chaussettes.
___ is your cap? — It’s on the chair.|Where|What;Who;When|On demande un lieu : Where.|3|questions|Où est ta casquette ? — Elle est sur la chaise.
He ___ a uniform at his school.|wears|wear;wearing;is wear|Une habitude, avec « he » : wears.|4|present_simple|Il porte un uniforme dans son école.
Yesterday, I ___ my new trainers.|wore|wear;wears;will wear|« Yesterday » : passé. « Wear » est irrégulier : wore.|5|past_simple|Hier, j’ai porté mes nouvelles baskets.
Is this ___ scarf, Emma? — Yes, it’s mine.|your|you;yours;you’re|Devant un nom, on utilise « your » (ton, ta). « Yours » s’emploie seul.|4|possessives|C’est ton écharpe, Emma ? — Oui, c’est la mienne.
`,
  odd: `
hat;cap;scarf;trainers|trainers|Hat, cap et scarf se portent sur la tête ou autour du cou ; trainers se portent aux pieds.|3
shoes;boots;socks;gloves|gloves|Shoes, boots et socks se portent aux pieds ; gloves (gants) se portent aux mains.|3
dress;skirt;shorts;umbrella|umbrella|Dress, skirt et shorts sont des vêtements ; umbrella est un objet (parapluie).|2
wear;put on;take off;pocket|pocket|Wear, put on et take off sont des verbes ; pocket (poche) est un nom.|4
`,
  mystery: `
socks|You wear them on your feet.;You put them on before your shoes.|3|On les met avant les chaussures.
umbrella|You open it when it rains.;It keeps you dry.|3|On l’ouvre quand il pleut.
gloves|You wear them on your hands.;They keep your fingers warm in winter.|4|Ils gardent les doigts au chaud.
sunglasses|You wear them over your eyes.;They protect you from the sun.|4|Elles protègent les yeux du soleil.
`,
  act: `
Put on your hat.|Mets ton chapeau.|👒|🧦;🧤;👖|2|chapeau;chaussettes;gants;pantalon
Put on your gloves.|Mets tes gants.|🧤|🧣;🧦;👒|2|gants;écharpe;chaussettes;chapeau
Put on your boots.|Mets tes bottes.|🥾|👟;🧦;🧢|3|bottes;baskets;chaussettes;casquette
Take your umbrella.|Prends ton parapluie.|☂️|🕶️;👜;⌚|2|parapluie;lunettes de soleil;sac à main;montre
Wear your sunglasses.|Mets tes lunettes de soleil.|🕶️|👓;🧢;🧣|3|lunettes de soleil;lunettes;casquette;écharpe
`,
  dialogues: [
    {
      id: 'd-get-dressed', title: 'Get dressed!', level: 2,
      lines: [
        ['Dad', 'Get dressed, Sophie! It’s cold today.', 'Habille-toi, Sophie ! Il fait froid aujourd’hui.'],
        ['Sophie', 'Can I wear my pink dress?', 'Est-ce que je peux mettre ma robe rose ?'],
        ['Dad', 'Yes, but put on your coat and your scarf too.', 'Oui, mais mets aussi ton manteau et ton écharpe.'],
        ['Sophie', 'OK, Dad!', 'D’accord, papa !']
      ],
      gap: 2, wrong: ['Yes, it’s half past three.', 'I love pizza!'],
      quiz: [['What does Sophie want to wear?', 'Her pink dress', 'Her blue coat;Her pyjamas', '« Can I wear my pink dress? »', 0]]
    },
    {
      id: 'd-try-on', title: 'In the clothes shop', level: 3,
      lines: [
        ['Assistant', 'Can I help you?', 'Je peux vous aider ?'],
        ['Liam', 'Yes, please. Can I try on this jacket?', 'Oui, s’il vous plaît. Est-ce que je peux essayer cette veste ?'],
        ['Assistant', 'Of course. What size are you?', 'Bien sûr. Quelle taille faites-vous ?'],
        ['Liam', 'Medium, I think.', 'Moyenne, je crois.'],
        ['Assistant', 'Here you are. The changing room is on the left.', 'Voilà. La cabine d’essayage est sur la gauche.']
      ],
      gap: 3, wrong: ['I’m wearing my pyjamas.', 'It’s raining cats and dogs.'],
      quiz: [
        ['What does Liam want to try on?', 'A jacket', 'A pair of jeans;A cap', '« Can I try on this jacket? »', 0],
        ['Where is the changing room?', 'On the left', 'On the right;Upstairs', '« The changing room is on the left. »', 1]
      ]
    },
    {
      id: 'd-lost-cap', title: 'The lost cap', level: 4,
      lines: [
        ['Oscar', 'Mum, where is my blue cap? I can’t find it.', 'Maman, où est ma casquette bleue ? Je ne la trouve pas.'],
        ['Mum', 'Is it in your schoolbag?', 'Elle est dans ton cartable ?'],
        ['Oscar', 'No, it isn’t. I looked there.', 'Non. J’ai regardé.'],
        ['Mum', 'Maybe you left it at school yesterday.', 'Tu l’as peut-être laissée à l’école hier.'],
        ['Oscar', 'Oh yes! I took it off in the playground.', 'Ah oui ! Je l’ai enlevée dans la cour.']
      ],
      gap: 2, wrong: ['Yes, I love it. It suits me.', 'It’s too big for me.'],
      quiz: [
        ['What is Oscar looking for?', 'His blue cap', 'His schoolbag;His red cap', '« where is my blue cap? »', 0],
        ['Where did Oscar leave his cap?', 'In the playground', 'In his schoolbag;In the car', '« I took it off in the playground. »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-uniform', title: 'School uniform', level: 4, tag: 'present_simple',
      text: 'In many British schools, pupils wear a uniform. At my school, boys and girls wear a white shirt, a green jumper and grey trousers or a grey skirt. We wear black shoes. On Fridays, we can wear our own clothes: I usually wear jeans and my favourite T-shirt. I think uniforms are practical, but I prefer Fridays!',
      fr: 'Dans beaucoup d’écoles britanniques, les élèves portent un uniforme. Dans mon école, les garçons et les filles portent une chemise blanche, un pull vert et un pantalon gris ou une jupe grise. Nous portons des chaussures noires. Le vendredi, nous pouvons porter nos propres vêtements : je mets en général un jean et mon t-shirt préféré. Je trouve les uniformes pratiques, mais je préfère le vendredi !',
      quiz: [
        ['What colour is the jumper?', 'Green', 'Grey;White', '« a green jumper ».'],
        ['When can pupils wear their own clothes?', 'On Fridays', 'On Mondays;Every day', '« On Fridays, we can wear our own clothes ».'],
        ['What colour are the shoes? Write one word.', 'black', '', '« We wear black shoes. »', 'typed']
      ]
    },
    {
      id: 'r-suitcase', title: 'The wrong suitcase', level: 5, tag: 'past_simple,future_will',
      text: 'Last summer, I packed my suitcase for a holiday in Scotland. I put in shorts and T-shirts because I thought it was going to be hot. But when we arrived, it was cold and rainy! I had to borrow a jumper from my cousin. Next time, I will pack a coat, boots and an umbrella!',
      fr: 'L’été dernier, j’ai fait ma valise pour des vacances en Écosse. J’ai mis des shorts et des t-shirts parce que je pensais qu’il allait faire chaud. Mais quand nous sommes arrivés, il faisait froid et il pleuvait ! J’ai dû emprunter un pull à mon cousin. La prochaine fois, je mettrai un manteau, des bottes et un parapluie dans ma valise !',
      quiz: [
        ['Why did the writer pack shorts?', 'He thought it was going to be hot', 'He was going to Spain;His cousin asked him', '« because I thought it was going to be hot ».'],
        ['What was the weather like in Scotland?', 'Cold and rainy', 'Hot and sunny;Snowy', '« it was cold and rainy! »'],
        ['What will the writer pack next time?', 'A coat, boots and an umbrella', 'Shorts and T-shirts;A swimsuit', '« Next time, I will pack a coat, boots and an umbrella! »']
      ]
    }
  ]
});
