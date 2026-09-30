/* Thème 1 — Greetings & Introductions */
AE.content.registerTheme({
  id: 'greetings',
  intro: 'Sur la Place des Bonjours, on apprend à saluer, à se présenter et à parler de soi : son prénom, son âge, son pays.',
  lessons: ['be', 'possessives', 'questions'],
  words: `
hello|bonjour, salut|interj|1|👋|Hello, I’m Lucy.|Bonjour, je suis Lucy.|hi
goodbye|au revoir|interj|1||Goodbye, see you soon!|Au revoir, à bientôt !|bye,good-bye
morning|matin|n|1|🌅|I go to school in the morning.|Je vais à l’école le matin.
afternoon|après-midi|n|1||We play outside in the afternoon.|Nous jouons dehors l’après-midi.
evening|soir|n|1|🌆|I read a book in the evening.|Je lis un livre le soir.
night|nuit|n|1|🌙|Good night, sleep well!|Bonne nuit, dors bien !
please|s’il te plaît|adv|1|🙏|Can I have some water, please?|Est-ce que je peux avoir de l’eau, s’il te plaît ?
thanks|merci|interj|1||Thanks for your help!|Merci pour ton aide !|thank you
sorry|désolé, pardon|adj|1|😔|Sorry, I’m late.|Désolé, je suis en retard.
yes|oui|adv|1|✅|Yes, I like it.|Oui, ça me plaît.
no|non|adv|1|❌|No, thank you.|Non, merci.
name|nom, prénom|n|1|📛|My name is Leo.|Je m’appelle Leo.
English|anglais|adj|1|🇬🇧|I speak English at school.|Je parle anglais à l’école.
French|français|adj|2|🇫🇷|My friend is French.|Mon ami est français.
Mr|Monsieur (M.)|n|2|👨|Good morning, Mr Brown!|Bonjour, Monsieur Brown !|mister
Mrs|Madame (Mme)|n|2|👩|Mrs Smith is our teacher.|Mme Smith est notre maîtresse.
welcome|bienvenue|interj|2|🤗|Welcome to our school!|Bienvenue dans notre école !
age|âge|n|2|🎂|I am the same age as my cousin.|J’ai le même âge que mon cousin.
country|pays|n|2|🌍|What country are you from?|De quel pays viens-tu ?
city|grande ville|n|2|🏙️|I live in a big city.|J’habite dans une grande ville.
live|habiter, vivre|v|2|🏡|I live in Lyon.|J’habite à Lyon.
meet|rencontrer|v|2|🤝|I want to meet your brother.|Je veux rencontrer ton frère.
from|de (origine)|prep|2||I am from France.|Je viens de France.
old|âgé, vieux|adj|2|👴|I am nine years old.|J’ai neuf ans.
year|année, an|n|2|📅|Happy New Year!|Bonne année !
address|adresse|n|3|📮|What is your address?|Quelle est ton adresse ?
surname|nom de famille|n|3||My surname is Martin.|Mon nom de famille est Martin.|last name,family name
introduce|présenter|v|3||Let me introduce my friend Sam.|Je te présente mon ami Sam.
spell|épeler|v|3|🔤|Can you spell your name?|Peux-tu épeler ton nom ?
nationality|nationalité|n|3||What is your nationality?|Quelle est ta nationalité ?
`,
  expressions: `
How are you?|Comment vas-tu ?|1|pour demander à quelqu’un comment il va|— How are you? — I’m fine, thanks.|— Comment vas-tu ? — Je vais bien, merci.
I’m fine, thank you.|Je vais bien, merci.|1|pour répondre que tu vas bien|— How are you, Tom? — I’m fine, thank you.|— Comment vas-tu, Tom ? — Je vais bien, merci.||I am fine thank you,I’m fine thanks,I am fine thanks
Nice to meet you.|Enchanté(e).|1|pour dire que tu es content de rencontrer quelqu’un pour la première fois|— This is my cousin Emma. — Nice to meet you, Emma!|— Voici ma cousine Emma. — Enchanté, Emma !|Mot à mot : « agréable de te rencontrer ». On ne le dit qu’à la première rencontre.
What’s your name?|Comment t’appelles-tu ?|1|pour demander le prénom de quelqu’un|— What’s your name? — My name is Nina.|— Comment t’appelles-tu ? — Je m’appelle Nina.|Mot à mot : « Quel est ton nom ? ». On ne traduit pas « t’appelles » par « call ».|What is your name?
How old are you?|Quel âge as-tu ?|1|pour demander l’âge de quelqu’un|— How old are you? — I’m ten.|— Quel âge as-tu ? — J’ai dix ans.|Mot à mot : « À quel point es-tu vieux ? ». En anglais, on utilise « be » (être) pour l’âge, pas « have ».
Where are you from?|D’où viens-tu ?|2|pour demander à quelqu’un de quel pays ou de quelle ville il vient|— Where are you from? — I’m from Marseille.|— D’où viens-tu ? — Je viens de Marseille.
See you tomorrow.|À demain.|1|pour dire au revoir à quelqu’un que tu reverras le lendemain|Bye, Lily! See you tomorrow!|Salut, Lily ! À demain !|Mot à mot : « Je te vois demain ».
Have a nice day!|Bonne journée !|2|pour souhaiter une bonne journée à quelqu’un|Thank you, Mrs Green. Have a nice day!|Merci, Madame Green. Bonne journée !
This is my friend Tom.|Voici mon ami Tom.|2|pour présenter quelqu’un à une autre personne|Mum, this is my friend Tom.|Maman, voici mon ami Tom.|Pour présenter quelqu’un, on dit « This is… » (c’est…), pas « He is… ».
How do you spell it?|Comment ça s’écrit ?|3|pour demander comment on écrit un mot ou un nom|— My name is Siobhan. — How do you spell it?|— Je m’appelle Siobhan. — Comment ça s’écrit ?|Mot à mot : « Comment l’épelles-tu ? ».
`,
  build: `
My name is Leo.|Je m’appelle Leo.|3|be
I am ten years old.|J’ai dix ans.|3|be
She is from Italy.|Elle vient d’Italie.|3|be
This is my best friend.|Voici mon meilleur ami.|3|possessives
Where do you live?|Où habites-tu ?|4|questions
I live in a small town.|J’habite dans une petite ville.|4|adjectives
He isn’t from Spain.|Il ne vient pas d’Espagne.|4|negation
We are in the same class.|Nous sommes dans la même classe.|4|be
`,
  gram: `
I ___ ten years old.|am|is;are;have|Avec « I », on utilise « am ». Pour l’âge, l’anglais utilise « be » : I am ten.|3|be|J’ai dix ans.
She ___ from Scotland.|is|am;are|Avec « she », le verbe « be » devient « is ».|3|be|Elle vient d’Écosse.
They ___ my friends.|are|is;am|Avec « they », on utilise « are ».|3|be|Ce sont mes amis.
This is my brother. ___ name is Tom.|His|Her;Its;Their|On parle d’un garçon : « his ». « Her » serait pour une fille.|3|possessives|Voici mon frère. Il s’appelle Tom.
This is my sister. ___ name is Julia.|Her|His;Its;Their|On parle d’une fille : « her » (son, à elle).|3|possessives|Voici ma sœur. Elle s’appelle Julia.
Where ___ you from?|are|is;do;am|Avec « you », « be » devient « are » : Where are you from?|3|be,questions|D’où viens-tu ?
He ___ from Paris, he’s from Lyon.|isn’t|aren’t;don’t;not|Négation de « he is » : « he isn’t » (he is not).|4|negation|Il ne vient pas de Paris, il vient de Lyon.
___ you spell your name, please?|Can|Do;Are;Is|« Can you…? » sert à demander si quelqu’un peut faire quelque chose.|4|can|Peux-tu épeler ton nom, s’il te plaît ?
`,
  odd: `
morning;afternoon;evening;hello|hello|Morning, afternoon et evening sont des moments de la journée ; hello est une salutation.|2
French;English;Spanish;London|London|London est une ville ; les autres mots sont des langues.|3
Mr;Mrs;Miss;Tom|Tom|Mr, Mrs et Miss sont des titres de politesse ; Tom est un prénom.|3
thanks;sorry;please;night|night|Thanks, sorry et please sont des mots de politesse ; night veut dire « nuit ».|3
`,
  mystery: `
goodbye|You say it when you leave.;It is the opposite of hello.;It has seven letters.|3|On le dit quand on s’en va.
morning|It is the start of the day.;You have breakfast in the…;The opposite is evening.|3|C’est le début de la journée.
welcome|You say it to a new person in your house or at your school.;It starts with W.|4|On le dit pour accueillir quelqu’un.
surname|It is part of your name.;Your family has the same one.;Martin, Smith and Brown are examples.|4|C’est le nom que toute ta famille partage.
`,
  act: `
Wave goodbye.|Fais au revoir de la main.|👋|🤝;👏;🙌|2|faire au revoir de la main;serrer la main;applaudir;lever les deux mains
Shake hands.|Serre la main.|🤝|👋;👏;🙌|2|serrer la main;faire signe de la main;applaudir;lever les deux mains
`,
  dialogues: [
    {
      id: 'd-first-day', title: 'The first day', level: 2,
      lines: [
        ['Ben', 'Hello! What’s your name?', 'Bonjour ! Comment t’appelles-tu ?'],
        ['Mia', 'Hi! My name is Mia. And you?', 'Salut ! Je m’appelle Mia. Et toi ?'],
        ['Ben', 'I’m Ben. Nice to meet you, Mia!', 'Je suis Ben. Enchanté, Mia !'],
        ['Mia', 'Nice to meet you too!', 'Enchantée aussi !']
      ],
      gap: 1, wrong: ['I’m fine, thank you.', 'See you tomorrow!'],
      quiz: [['What is the girl’s name?', 'Mia', 'Ben;Emma', 'Elle dit « My name is Mia ».', 0]]
    },
    {
      id: 'd-new-cousin', title: 'A cousin from Canada', level: 3,
      lines: [
        ['Mrs Lee', 'Good morning, Tom. How are you today?', 'Bonjour, Tom. Comment vas-tu aujourd’hui ?'],
        ['Tom', 'I’m fine, thank you, Mrs Lee. And you?', 'Je vais bien, merci, Madame Lee. Et vous ?'],
        ['Mrs Lee', 'I’m very well, thanks. Who is this?', 'Très bien, merci. Qui est-ce ?'],
        ['Tom', 'This is my cousin, Hugo. He’s from Canada.', 'Voici mon cousin, Hugo. Il vient du Canada.'],
        ['Mrs Lee', 'Welcome to our school, Hugo!', 'Bienvenue dans notre école, Hugo !'],
        ['Hugo', 'Thank you!', 'Merci !']
      ],
      gap: 3, wrong: ['Goodbye, see you tomorrow.', 'I’m ten years old.'],
      quiz: [
        ['Where is Hugo from?', 'Canada', 'France;England', 'Tom dit « He’s from Canada ».', 0],
        ['Who is Hugo?', 'Tom’s cousin', 'Tom’s brother;Tom’s teacher', 'Tom dit « This is my cousin, Hugo ».', 1]
      ]
    },
    {
      id: 'd-new-member', title: 'At the club', level: 4,
      lines: [
        ['Coach', 'Hello! Are you new here?', 'Bonjour ! Tu es nouvelle ici ?'],
        ['Zoe', 'Yes, I am. My name is Zoe Knight.', 'Oui. Je m’appelle Zoe Knight.'],
        ['Coach', 'How do you spell your surname?', 'Comment s’écrit ton nom de famille ?'],
        ['Zoe', 'K-N-I-G-H-T. The K is silent.', 'K-N-I-G-H-T. Le K ne se prononce pas.'],
        ['Coach', 'Thank you. How old are you, Zoe?', 'Merci. Quel âge as-tu, Zoe ?'],
        ['Zoe', 'I’m eleven. I moved here last month.', 'J’ai onze ans. J’ai déménagé ici le mois dernier.']
      ],
      gap: 3, wrong: ['I’m very well, thank you.', 'Nice to meet you too.'],
      quiz: [
        ['How old is Zoe?', 'Eleven', 'Ten;Twelve', 'Elle dit « I’m eleven ».', 0],
        ['Which letter is silent in her surname?', 'K', 'N;T', '« The K is silent » : le K ne se prononce pas.', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-amelia', title: 'Hello from London', level: 4, tag: 'be,have_got',
      text: 'Hi! My name is Amelia and I’m ten years old. I live in London, in England. I have got a brother called Jack. He is eight. My best friend is Priya. She is from India, but she lives in London too. We go to the same school. Goodbye!',
      fr: 'Salut ! Je m’appelle Amelia et j’ai dix ans. J’habite à Londres, en Angleterre. J’ai un frère qui s’appelle Jack. Il a huit ans. Ma meilleure amie s’appelle Priya. Elle vient d’Inde, mais elle habite aussi à Londres. Nous allons à la même école. Au revoir !',
      quiz: [
        ['How old is Amelia?', 'Ten', 'Eight;Eleven', 'Amelia écrit « I’m ten years old ». Jack, lui, a huit ans.'],
        ['Where is Priya from?', 'India', 'England;London', 'Le texte dit « She is from India » : elle vient d’Inde mais habite à Londres.'],
        ['What is the name of Amelia’s brother?', 'Jack', '', 'Le texte dit « a brother called Jack ».', 'typed']
      ]
    },
    {
      id: 'r-diego', title: 'A new pupil', level: 5, tag: 'past_simple,future_will',
      text: 'Yesterday, a new pupil arrived in our class. His name is Diego and he comes from Spain. Our teacher introduced him to the class. Diego said: “Hello, everybody! Nice to meet you!” He speaks Spanish and a little English. At break time, we played football together. Tomorrow, I will help him with his English homework.',
      fr: 'Hier, un nouvel élève est arrivé dans notre classe. Il s’appelle Diego et il vient d’Espagne. Notre maîtresse l’a présenté à la classe. Diego a dit : « Bonjour tout le monde ! Enchanté ! » Il parle espagnol et un peu anglais. À la récréation, nous avons joué au football ensemble. Demain, je l’aiderai pour ses devoirs d’anglais.',
      quiz: [
        ['When did Diego arrive?', 'Yesterday', 'Today;Tomorrow', '« Yesterday, a new pupil arrived » : « arrived » est au passé (past simple).'],
        ['Which languages does Diego speak?', 'Spanish and a little English', 'Only English;French and Spanish', 'Le texte dit « He speaks Spanish and a little English ».'],
        ['What will the narrator do tomorrow?', 'Help Diego with his homework', 'Play football with Diego;Go to Spain', '« Tomorrow, I will help him… » : « will » annonce une action future.']
      ]
    }
  ]
});
