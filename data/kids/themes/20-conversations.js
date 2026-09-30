/* Thème 20 — Everyday Conversations */
AE.content.registerTheme({
  id: 'conversations',
  intro: 'Au Café des Bavardages, on apprend les petites phrases qui servent tous les jours : demander de l’aide, faire répéter, donner son avis.',
  lessons: ['questions', 'can', 'negation'],
  words: `
question|question|n|1|❓|Can I ask a question?|Est-ce que je peux poser une question ?
answer|réponse|n|1||I know the answer!|Je connais la réponse !
word|mot|n|1||“Hello” is an English word.|« Hello » est un mot anglais.
phone|téléphone|n|1|📱|My phone is ringing.|Mon téléphone sonne.
letter|lettre (courrier)|n|1|✉️|Grandma sends me a letter every month.|Mamie m’envoie une lettre chaque mois.
speak|parler (une langue)|v|1|🗣️|Do you speak Spanish?|Parles-tu espagnol ?
listen|écouter|v|1|👂|Listen to the song.|Écoute la chanson.
help|aider|v|1|🆘|Can you help me?|Peux-tu m’aider ?
idea|idée|n|1||I have got an idea!|J’ai une idée !
call|appeler, téléphoner|v|1|📞|I call my grandpa on Sunday.|J’appelle mon papi le dimanche.
wait|attendre|v|1||Wait for me!|Attends-moi !
think|penser|v|1|🤔|I think it’s a good idea.|Je pense que c’est une bonne idée.
sentence|phrase|n|2||Read the first sentence.|Lis la première phrase.
language|langue (parlée)|n|2||English is an international language.|L’anglais est une langue internationale.
message|message|n|2|💬|I have got a message from Léa.|J’ai un message de Léa.
email|e-mail, courriel|n|2|📧|I write an email to my penfriend.|J’écris un e-mail à mon correspondant.|e-mail
talk|discuter, bavarder|v|2||Don’t talk during the film.|Ne bavarde pas pendant le film.
say|dire|v|2||What did you say?|Qu’est-ce que tu as dit ?
tell|raconter|v|2||Tell me a story, please.|Raconte-moi une histoire, s’il te plaît.
ask|demander|v|2|🙋|Ask your teacher for help.|Demande de l’aide à ta maîtresse.
understand|comprendre|v|2||I understand English a little.|Je comprends un peu l’anglais.
repeat|répéter|v|2|🔁|Repeat after me.|Répète après moi.
know|savoir, connaître|v|2||I don’t know her name.|Je ne connais pas son prénom.
maybe|peut-être|adv|2|🤷|Maybe it will rain.|Peut-être qu’il va pleuvoir.
really|vraiment|adv|2||Really? That’s amazing!|Vraiment ? C’est génial !
of course|bien sûr|adv|2||Of course you can come!|Bien sûr que tu peux venir !
problem|problème|n|2||What’s the problem?|Quel est le problème ?
joke|blague|n|2||Tell me a joke!|Raconte-moi une blague !
explain|expliquer|v|3||Can you explain this exercise?|Peux-tu expliquer cet exercice ?
agree|être d’accord|v|3|👍|I agree with you.|Je suis d’accord avec toi.
`,
  expressions: `
Can you repeat that, please?|Peux-tu répéter, s’il te plaît ?|1|pour demander à quelqu’un de redire ce qu’il vient de dire|Sorry, can you repeat that, please?|Pardon, peux-tu répéter, s’il te plaît ?|Mot à mot : « Peux-tu répéter cela ? »|Could you repeat that please?
Could you help me, please?|Pourriez-vous m’aider, s’il vous plaît ?|2|pour demander de l’aide très poliment à un adulte|Excuse me, could you help me, please? I’m lost.|Excusez-moi, pourriez-vous m’aider, s’il vous plaît ? Je suis perdu.|« Could » est plus poli que « can ».|Can you help me please?
Excuse me.|Excusez-moi.|1|pour attirer poliment l’attention de quelqu’un|Excuse me, is this seat free?|Excusez-moi, cette place est-elle libre ?|« Excuse me » sert à attirer l’attention ; « Sorry » sert à s’excuser d’une erreur.
Speak more slowly, please.|Parle plus lentement, s’il te plaît.|2|pour demander à quelqu’un de parler moins vite|Speak more slowly, please. I’m learning English.|Parle plus lentement, s’il te plaît. J’apprends l’anglais.
I don’t know.|Je ne sais pas.|1|pour dire que tu n’as pas la réponse|— Where is Tom? — I don’t know.|— Où est Tom ? — Je ne sais pas.||I do not know
What do you think?|Qu’en penses-tu ?|2|pour demander son avis à quelqu’un|I want to paint my room blue. What do you think?|Je veux peindre ma chambre en bleu. Qu’en penses-tu ?
I agree with you.|Je suis d’accord avec toi.|2|pour dire que tu as le même avis que quelqu’un sur une question|You’re right, I agree with you.|Tu as raison, je suis d’accord avec toi.|Piège : on ne dit pas « I am agree ». En anglais, « agree » est un verbe.
No problem!|Pas de problème !|1|pour accepter volontiers de rendre un service|— Can you close the window? — No problem!|— Tu peux fermer la fenêtre ? — Pas de problème !
Just a moment, please.|Un instant, s’il vous plaît.|2|pour demander à quelqu’un de patienter un peu|Just a moment, please. I’m on the phone.|Un instant, s’il vous plaît. Je suis au téléphone.
You’re welcome.|De rien.|1|pour répondre quand quelqu’un te dit merci|— Thank you for your help! — You’re welcome.|— Merci pour ton aide ! — De rien.|Mot à mot : « Tu es bienvenu ». Ce n’est pas une formule d’accueil ici !|You are welcome
Me too!|Moi aussi !|1|pour répondre que tu aimes la même chose, juste après « I love… »|— I love chocolate! — Me too!|— J’adore le chocolat ! — Moi aussi !
What’s up?|Quoi de neuf ?|3|pour saluer un ami de façon familière|Hey, Jake! What’s up?|Salut, Jake ! Quoi de neuf ?|Expression familière entre amis : on ne la dit pas à un adulte qu’on ne connaît pas.|What is up?
`,
  build: `
Do you speak English?|Parles-tu anglais ?|3|questions
I don’t understand this word.|Je ne comprends pas ce mot.|3|negation
Tell me a funny story.|Raconte-moi une histoire drôle.|3|imperative
Can you speak more slowly?|Peux-tu parler plus lentement ?|4|can
What does “huge” mean?|Que veut dire « huge » ?|4|questions
She is talking on the phone.|Elle parle au téléphone.|4|present_continuous
I think it is a good idea.|Je pense que c’est une bonne idée.|4|
I called my cousin yesterday.|J’ai appelé mon cousin hier.|5|past_simple|Yesterday I called my cousin.
`,
  gram: `
Can you ___ that, please?|repeat|repeats;repeating;to repeat|Après « can », le verbe est seul : repeat.|3|can|Peux-tu répéter, s’il te plaît ?
I ___ agree with you.|don’t|am not;doesn’t;not|« Agree » est un verbe : on dit « I don’t agree » et non « I am not agree ».|4|negation|Je ne suis pas d’accord avec toi.
___ me a story, Grandpa!|Tell|Say;Speak;Talk|On « raconte » une histoire : tell a story.|4|imperative|Raconte-moi une histoire, Papi !
She ___ three languages.|speaks|speak;speaking;is speak|Avec « she » au présent simple : speaks.|4|present_simple|Elle parle trois langues.
What ___ this word mean?|does|do;is;are|« This word » est singulier : What does… mean?|4|questions|Que veut dire ce mot ?
Shh! I ___ on the phone.|am talking|talk;talks;is talking|Action en cours avec « I » : am talking.|4|present_continuous|Chut ! Je suis au téléphone.
Yesterday, I ___ an email to my penfriend.|wrote|write;writes;will write|« Yesterday » : passé. « Write » est irrégulier : wrote.|5|past_simple|Hier, j’ai écrit un e-mail à mon correspondant.
Don’t worry, I ___ you tomorrow.|will call|called;call;calls|« Tomorrow » : futur → will call.|5|future_will|Ne t’inquiète pas, je t’appellerai demain.
`,
  odd: `
speak;talk;say;phone|phone|Speak, talk et say sont des verbes pour parler ; phone est un objet.|3
question;answer;word;listen|listen|Question, answer et word sont des noms ; listen (écouter) est un verbe.|3
phone;email;letter;idea|idea|Phone, email et letter servent à communiquer ; idea (idée) n’en fait pas partie.|3
maybe;really;of course;joke|joke|Maybe, really et of course servent à réagir dans une conversation ; joke (blague) est un nom.|4
`,
  mystery: `
phone|You can call your friends with it.;It rings.|3|Il sonne et on appelle avec.
question|You ask it when you want to know something.;It ends with a question mark.|3|Elle finit par un point d’interrogation.
joke|It is funny.;You tell it to make people laugh.|4|Elle fait rire.
letter|You write it on paper.;You put it in an envelope and post it.|4|On la met dans une enveloppe.
`,
  act: `
Listen carefully.|Écoute attentivement.|👂|🗣️;✍️;📖|2|écouter;parler;écrire;lire
Call your friend.|Appelle ton ami.|📞|✉️;📧;📖|2|téléphoner;lettre;e-mail;livre
Think about it.|Réfléchis.|🤔|😴;😂;🗣️|3|réfléchir;dormir;rire;parler
Say yes with your thumb.|Dis oui avec le pouce.|👍|👎;✋;👋|3|pouce levé;pouce baissé;main levée;faire coucou
Ask a question.|Pose une question.|❓|❗;💤;🔁|3|point d’interrogation;point d’exclamation;sommeil;répétition
`,
  dialogues: [
    {
      id: 'd-phone-call', title: 'A phone call', level: 2,
      lines: [
        ['Tom', 'Hello?', 'Allô ?'],
        ['Anna', 'Hi, Tom! It’s Anna. How are you?', 'Salut, Tom ! C’est Anna. Comment vas-tu ?'],
        ['Tom', 'I’m fine, thanks. What’s up?', 'Bien, merci. Quoi de neuf ?'],
        ['Anna', 'Can you come to the park?', 'Tu peux venir au parc ?'],
        ['Tom', 'Yes, of course! See you soon.', 'Oui, bien sûr ! À tout à l’heure.']
      ],
      gap: 4, wrong: ['It’s half past seven.', 'I don’t know this word.'],
      quiz: [['Where does Anna want to go?', 'To the park', 'To the cinema;To school', '« Can you come to the park? »', 0]]
    },
    {
      id: 'd-repeat', title: 'Can you repeat that?', level: 3,
      lines: [
        ['Tourist', 'Excuse me, could you help me, please? I’m looking for the train station.', 'Excuse-moi, pourrais-tu m’aider, s’il te plaît ? Je cherche la gare.'],
        ['Julie', 'Sorry, can you repeat that, please?', 'Pardon, pouvez-vous répéter, s’il vous plaît ?'],
        ['Tourist', 'The train station. Where is it?', 'La gare. Où est-elle ?'],
        ['Julie', 'Ah! Go straight on. It’s next to the big hotel.', 'Ah ! Allez tout droit. C’est à côté du grand hôtel.'],
        ['Tourist', 'Thank you so much!', 'Merci beaucoup !'],
        ['Julie', 'You’re welcome!', 'De rien !']
      ],
      gap: 5, wrong: ['Me too!', 'Nice to meet you!'],
      quiz: [
        ['What is the tourist looking for?', 'The train station', 'The big hotel;The park', '« I’m looking for the train station. »', 0],
        ['Why does Julie ask the tourist to repeat?', 'She didn’t understand', 'She was on the phone;She was late', 'Elle dit « Sorry, can you repeat that, please? » parce qu’elle n’a pas compris.', 1]
      ]
    },
    {
      id: 'd-cinema-beach', title: 'What do you think?', level: 4,
      lines: [
        ['Mia', 'I think we should go to the cinema this afternoon.', 'Je pense que nous devrions aller au cinéma cet après-midi.'],
        ['Leo', 'Hmm, I don’t agree. It’s sunny! Let’s go to the beach.', 'Hum, je ne suis pas d’accord. Il fait beau ! Allons à la plage.'],
        ['Mia', 'Maybe… but it’s very windy.', 'Peut-être… mais il y a beaucoup de vent.'],
        ['Leo', 'Really? OK, what about the cinema and then an ice cream?', 'Vraiment ? D’accord, et si on allait au cinéma, puis manger une glace ?'],
        ['Mia', 'That’s a good idea! I agree.', 'C’est une bonne idée ! Je suis d’accord.']
      ],
      gap: 4, wrong: ['Excuse me, where is the bank?', 'You’re welcome.'],
      quiz: [
        ['Why doesn’t Mia want to go to the beach?', 'It’s very windy', 'It’s raining;It’s too far', '« Maybe… but it’s very windy. »', 0],
        ['What do they decide to do?', 'Go to the cinema and then have an ice cream', 'Go to the beach;Stay at home', 'Leo propose « the cinema and then an ice cream » et Mia répond « I agree ».', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-penfriend', title: 'A letter from a penfriend', level: 4, tag: 'present_simple',
      text: 'Hi Lucas! My name is Oliver and I’m your new penfriend. I live in Manchester, in England. I’m ten years old. I speak English and a little French. My French is not very good, so I’m writing in English! Do you speak English well? I think it’s fun to have a penfriend. Please write back and tell me about your family and your hobbies. Bye for now, Oliver.',
      fr: 'Salut Lucas ! Je m’appelle Oliver et je suis ton nouveau correspondant. J’habite à Manchester, en Angleterre. J’ai dix ans. Je parle anglais et un peu français. Mon français n’est pas très bon, alors j’écris en anglais ! Tu parles bien anglais ? Je trouve que c’est amusant d’avoir un correspondant. Réponds-moi, s’il te plaît, et parle-moi de ta famille et de tes loisirs. À bientôt, Oliver.',
      quiz: [
        ['Where does Oliver live?', 'In Manchester', 'In London;In France', '« I live in Manchester, in England. »'],
        ['Why is Oliver writing in English?', 'His French is not very good', 'Lucas asked him;He doesn’t like French', '« My French is not very good, so I’m writing in English! »'],
        ['What does Oliver want Lucas to tell him about?', 'His family and his hobbies', 'His school and his town;His pets', '« tell me about your family and your hobbies ».']
      ]
    },
    {
      id: 'r-video-call', title: 'A call to Australia', level: 5, tag: 'past_simple,future_will',
      text: 'Last Sunday, I had a video call with my cousin in Australia. It was morning in France, but it was evening in Sydney! At first, the connection was bad and I said “Can you repeat that, please?” many times. Then it was better. She told me about her new school and I showed her my cat. We laughed a lot. We will call each other again next month.',
      fr: 'Dimanche dernier, j’ai fait un appel vidéo avec ma cousine en Australie. C’était le matin en France, mais le soir à Sydney ! Au début, la connexion était mauvaise et j’ai dit « Peux-tu répéter, s’il te plaît ? » plein de fois. Ensuite, c’était mieux. Elle m’a parlé de sa nouvelle école et je lui ai montré mon chat. Nous avons beaucoup ri. Nous nous rappellerons le mois prochain.',
      quiz: [
        ['What time of day was it in Sydney?', 'Evening', 'Morning;Midnight', '« It was morning in France, but it was evening in Sydney! »'],
        ['Why did the writer often say “Can you repeat that, please?”', 'The connection was bad', 'His cousin spoke Chinese;He was tired', '« At first, the connection was bad ».'],
        ['When will they call each other again?', 'Next month', 'Tomorrow;Next year', '« We will call each other again next month. »']
      ]
    }
  ]
});
