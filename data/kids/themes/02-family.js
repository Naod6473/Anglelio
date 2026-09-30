/* Thème 2 — Family & Friends */
AE.content.registerTheme({
  id: 'family',
  intro: 'Au Village des Familles, on présente ses parents, ses frères et sœurs, ses grands-parents et ses amis.',
  lessons: ['have_got', 'plural', 'possessives'],
  words: `
mum|maman|n|1|👩|My mum makes great pancakes.|Ma maman fait de super crêpes.|mom,mummy
dad|papa|n|1|👨|My dad plays the guitar.|Mon papa joue de la guitare.|daddy
mother|mère|n|2||Her mother is a nurse.|Sa mère est infirmière.
father|père|n|2||His father works in a bank.|Son père travaille dans une banque.
sister|sœur|n|1||I have got one sister.|J’ai une sœur.
brother|frère|n|1||My brother is twelve.|Mon frère a douze ans.
baby|bébé|n|1|👶|The baby is sleeping.|Le bébé dort.
grandmother|grand-mère|n|1|👵|My grandmother lives in Brittany.|Ma grand-mère habite en Bretagne.|grandma,granny
grandfather|grand-père|n|1|👴|My grandfather tells funny stories.|Mon grand-père raconte des histoires drôles.|grandpa,granddad
friend|ami, amie|n|1|🧑‍🤝‍🧑|Lucas is my friend.|Lucas est mon ami.
boy|garçon|n|1|👦|The boy next door is called Adam.|Le garçon d’à côté s’appelle Adam.
girl|fille (jeune fille)|n|1|👧|That girl is in my class.|Cette fille est dans ma classe.
child|enfant|n|2|🧒|Every child has a book.|Chaque enfant a un livre.
children|enfants|n|2||The children are playing in the garden.|Les enfants jouent dans le jardin.
uncle|oncle|n|2||My uncle has got a big dog.|Mon oncle a un gros chien.
aunt|tante|n|2||My aunt lives in Canada.|Ma tante habite au Canada.|auntie
cousin|cousin, cousine|n|2||My cousin is the same age as me.|Mon cousin a le même âge que moi.
parents|parents|n|2|👪|My parents are at work.|Mes parents sont au travail.
son|fils|n|2||They have got a son and a daughter.|Ils ont un fils et une fille.
daughter|fille (enfant de…)|n|2||Their daughter is called Rose.|Leur fille s’appelle Rose.
husband|mari|n|3||Her husband is a pilot.|Son mari est pilote.
wife|femme (épouse)|n|3||His wife is Spanish.|Sa femme est espagnole.
twins|jumeaux, jumelles|n|3||Tom and Sam are twins.|Tom et Sam sont jumeaux.
neighbour|voisin, voisine|n|2|🏘️|Our neighbour has got a cat.|Notre voisin a un chat.|neighbor
pet|animal de compagnie|n|1|🐾|Have you got a pet?|As-tu un animal de compagnie ?
tall|grand (de taille)|adj|2||My brother is very tall.|Mon frère est très grand.
short|petit (de taille)|adj|2||My grandmother is short.|Ma grand-mère est petite.
young|jeune|adj|2||My aunt is young.|Ma tante est jeune.
together|ensemble|adv|2||We eat dinner together.|Nous dînons ensemble.
love|aimer (très fort), adorer|v|1|❤️|I love my family.|J’aime ma famille.
`,
  expressions: `
Have you got any brothers or sisters?|As-tu des frères et sœurs ?|2|pour demander à quelqu’un s’il a des frères et sœurs|— Have you got any brothers or sisters? — Yes, one brother.|— As-tu des frères et sœurs ? — Oui, un frère.|En anglais britannique, on utilise souvent « have got » pour dire « avoir ».|Do you have any brothers or sisters?
I’m an only child.|Je suis enfant unique.|3|pour dire que tu n’as ni frère ni sœur|I’m an only child, but I have got lots of cousins.|Je suis enfant unique, mais j’ai beaucoup de cousins.|Ici, « only » veut dire « unique », et non « seulement ».|I am an only child
Who is this?|Qui est-ce ?|1|pour demander qui est une personne, par exemple sur une photo|— Who is this? — It’s my grandma.|— Qui est-ce ? — C’est ma mamie.||Who’s this?
She looks like her mum.|Elle ressemble à sa maman.|3|pour dire qu’une fille ressemble à sa mère|Lily looks like her mum: they both have red hair.|Lily ressemble à sa maman : elles ont toutes les deux les cheveux roux.|« Look like » veut dire « ressembler à ». « Look » tout seul veut dire « regarder ».
Let’s play together!|Jouons ensemble !|1|pour proposer à un ami de jouer avec toi|Come on, Sam! Let’s play together!|Allez, Sam ! Jouons ensemble !
Can I come to your house?|Est-ce que je peux venir chez toi ?|2|pour demander si tu peux aller chez un ami|Can I come to your house after school?|Est-ce que je peux venir chez toi après l’école ?|« Chez toi » se dit « to your house » : il n’y a pas de mot anglais pour « chez ».
You’re my best friend.|Tu es mon meilleur ami.|1|pour dire à quelqu’un qu’il est ton ami préféré|Thank you, Léa. You’re my best friend!|Merci, Léa. Tu es ma meilleure amie !||You are my best friend
I miss you.|Tu me manques.|3|pour dire à quelqu’un que tu es triste de ne pas le voir|Grandpa, I miss you! Come and visit us soon.|Papi, tu me manques ! Viens nous voir bientôt.|Piège : la phrase est « à l’envers » par rapport au français. Mot à mot, « I miss you » ressemble à « je te manque », mais cela veut dire « TU me manques ».
Say hello to your parents.|Dis bonjour à tes parents.|2|pour demander à quelqu’un de transmettre ton bonjour à ses parents|Bye, Chloé! Say hello to your parents!|Au revoir, Chloé ! Dis bonjour à tes parents !
How many people are there in your family?|Combien de personnes y a-t-il dans ta famille ?|3|pour demander combien de personnes composent la famille de quelqu’un|— How many people are there in your family? — Four.|— Combien de personnes y a-t-il dans ta famille ? — Quatre.
`,
  build: `
I have got two brothers.|J’ai deux frères.|3|have_got,plural
They are my cousins.|Ce sont mes cousins.|3|be,plural
Her brother is very tall.|Son frère (à elle) est très grand.|3|possessives
My sister has got long hair.|Ma sœur a les cheveux longs.|4|have_got
Our grandparents live by the sea.|Nos grands-parents habitent au bord de la mer.|4|possessives
Tom’s dad is a doctor.|Le papa de Tom est médecin.|4|possessives
We don’t have a pet.|Nous n’avons pas d’animal de compagnie.|4|negation
My uncle is going to visit us.|Mon oncle va nous rendre visite.|5|going_to
`,
  gram: `
I have got two ___.|sisters|sister;sisteres;sister’s|Après « two », le nom se met au pluriel : sisters.|3|plural|J’ai deux sœurs.
She ___ got a baby brother.|has|have;is;are|Avec « she », on dit « has got ».|3|have_got|Elle a un petit frère (bébé).
The ___ are playing in the garden.|children|childs;child;childrens|Le pluriel de « child » est irrégulier : « children ».|4|plural|Les enfants jouent dans le jardin.
This is Paul and ___ sister.|his|her;its;he|Paul est un garçon : « his sister » (sa sœur, à lui).|3|possessives|Voici Paul et sa sœur.
My parents ___ in Nantes.|live|lives;living;is live|Avec « my parents » (they), le verbe ne prend pas de -s.|3|present_simple|Mes parents habitent à Nantes.
My brother ___ like spinach.|doesn’t|don’t;isn’t;not|Avec « my brother » (he), la négation est « doesn’t » + verbe sans -s.|4|negation|Mon frère n’aime pas les épinards.
Look! Grandpa ___ a cake.|is making|makes;make;making|« Look! » montre une action en train de se passer : present continuous « is making ».|4|present_continuous|Regarde ! Papi est en train de faire un gâteau.
Last Sunday, we ___ my aunt.|visited|visit;visits;will visit|« Last Sunday » indique le passé : visit → visited.|5|past_simple|Dimanche dernier, nous avons rendu visite à ma tante.
`,
  odd: `
mum;dad;sister;teacher|teacher|Teacher (enseignant) n’est pas un membre de la famille.|2
uncle;aunt;cousin;neighbour|neighbour|Uncle, aunt et cousin sont de la famille ; neighbour (voisin) n’en fait pas partie.|3
tall;short;young;sister|sister|Tall, short et young sont des adjectifs ; sister est un nom.|3
son;brother;father;daughter|daughter|Daughter (fille) est féminin ; son, brother et father sont masculins.|3
`,
  mystery: `
grandmother|She is your mum’s mum or your dad’s mum.;She is often called granny.|3|C’est la mère de ton papa ou de ta maman.
cousin|This person is the child of your uncle or aunt.;It is the same word in French!|3|C’est l’enfant de ton oncle ou de ta tante.
twins|Two children with the same birthday and the same mum.;They often look alike.|4|Deux enfants nés le même jour de la même maman.
neighbour|This person lives next door.;You can say hello to them in the street.|4|Cette personne habite à côté de chez toi.
`,
  dialogues: [
    {
      id: 'd-photo', title: 'The family photo', level: 2,
      lines: [
        ['Sara', 'Who is this?', 'Qui est-ce ?'],
        ['Leo', 'It’s my grandma. She’s very nice.', 'C’est ma mamie. Elle est très gentille.'],
        ['Sara', 'And who is the baby?', 'Et qui est le bébé ?'],
        ['Leo', 'That’s me!', 'C’est moi !']
      ],
      gap: 1, wrong: ['I’m ten years old.', 'Nice to meet you.'],
      quiz: [['Who is the baby in the photo?', 'Leo', 'Sara;Leo’s grandma', 'Leo dit « That’s me! » : le bébé, c’est lui.', 1]]
    },
    {
      id: 'd-siblings', title: 'Brothers and sisters', level: 3,
      lines: [
        ['Emma', 'Have you got any brothers or sisters?', 'As-tu des frères et sœurs ?'],
        ['Noah', 'Yes, I have got one brother and two sisters.', 'Oui, j’ai un frère et deux sœurs.'],
        ['Emma', 'Wow, that’s a big family! How old is your brother?', 'Waouh, c’est une grande famille ! Quel âge a ton frère ?'],
        ['Noah', 'He’s fifteen. And you?', 'Il a quinze ans. Et toi ?'],
        ['Emma', 'I’m an only child, but I’ve got six cousins!', 'Je suis enfant unique, mais j’ai six cousins !']
      ],
      gap: 1, wrong: ['I’m fine, thank you.', 'It’s my birthday today.'],
      quiz: [
        ['How many sisters has Noah got?', 'Two', 'One;Three', 'Noah dit « one brother and two sisters ».', 0],
        ['Has Emma got any brothers or sisters?', 'No, she is an only child', 'Yes, one brother;Yes, six sisters', '« I’m an only child » = je suis enfant unique. Les six, ce sont ses cousins.', 1]
      ]
    },
    {
      id: 'd-weekend', title: 'A weekend with Grandpa', level: 4,
      lines: [
        ['Mia', 'What did you do last weekend?', 'Qu’as-tu fait le week-end dernier ?'],
        ['Jake', 'I visited my grandparents. We made a big chocolate cake.', 'J’ai rendu visite à mes grands-parents. Nous avons fait un gros gâteau au chocolat.'],
        ['Mia', 'Yum! Is your grandpa a good cook?', 'Miam ! Ton papi cuisine bien ?'],
        ['Jake', 'Yes, he is! Next weekend, my cousins are going to visit us.', 'Oui ! Le week-end prochain, mes cousins vont venir nous voir.'],
        ['Mia', 'Have fun!', 'Amuse-toi bien !']
      ],
      gap: 1, wrong: ['I’m eleven years old.', 'My cousin is very tall.'],
      quiz: [
        ['Who did Jake visit last weekend?', 'His grandparents', 'His cousins;His aunt', '« I visited my grandparents » : « visited » est au passé.', 1],
        ['What is going to happen next weekend?', 'His cousins are going to visit', 'He is going to make a cake;He is going to visit Mia', '« My cousins are going to visit us » : « be going to » annonce un projet.', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-oscar', title: 'Oscar’s family', level: 4, tag: 'have_got',
      text: 'This is my family. My name is Oscar. My dad is called Paul and my mum is called Nadia. I have got a little sister, Lina. She is six and she has got curly hair. My grandparents live in a house by the sea. Grandma is a great cook and Grandpa loves fishing. We visit them every summer. We haven’t got a pet, but our neighbour has got three cats!',
      fr: 'Voici ma famille. Je m’appelle Oscar. Mon papa s’appelle Paul et ma maman s’appelle Nadia. J’ai une petite sœur, Lina. Elle a six ans et elle a les cheveux bouclés. Mes grands-parents habitent dans une maison au bord de la mer. Mamie cuisine très bien et Papi adore la pêche. Nous leur rendons visite chaque été. Nous n’avons pas d’animal, mais notre voisin a trois chats !',
      quiz: [
        ['How old is Lina?', 'Six', 'Ten;Eight', 'Le texte dit « She is six ».'],
        ['Where do the grandparents live?', 'In a house by the sea', 'In a flat in town;In Oscar’s house', '« My grandparents live in a house by the sea ».'],
        ['Who has got three cats?', 'The neighbour', 'Oscar;Grandpa', '« We haven’t got a pet, but our neighbour has got three cats! »']
      ]
    },
    {
      id: 'r-wedding', title: 'A family wedding', level: 5, tag: 'past_simple,going_to',
      text: 'Last Saturday, my aunt Julie got married. The wedding was in a small village. All the family was there: my grandparents, my uncles, my aunts and all my cousins. I wore a blue suit and my sister wore a yellow dress. We ate a delicious meal and we danced all night. Next year, my cousin Max is going to get married too!',
      fr: 'Samedi dernier, ma tante Julie s’est mariée. Le mariage avait lieu dans un petit village. Toute la famille était là : mes grands-parents, mes oncles, mes tantes et tous mes cousins. J’ai porté un costume bleu et ma sœur une robe jaune. Nous avons mangé un délicieux repas et nous avons dansé toute la nuit. L’année prochaine, mon cousin Max va se marier lui aussi !',
      quiz: [
        ['Who got married last Saturday?', 'Aunt Julie', 'Cousin Max;The narrator’s sister', '« Last Saturday, my aunt Julie got married. » Max, lui, se mariera l’année prochaine.'],
        ['What did the family do after the meal?', 'They danced', 'They went swimming;They watched a film', '« We ate a delicious meal and we danced all night. »'],
        ['What colour was the narrator’s suit? Write one word.', 'blue', '', 'Le texte dit « I wore a blue suit ».', 'typed']
      ]
    }
  ]
});
