/* Thème 14 — Transport & Travel */
AE.content.registerTheme({
  id: 'transport',
  intro: 'À la Grande Gare, on découvre les moyens de transport et on apprend à voyager : billets, quais, valises…',
  lessons: ['comparatives', 'can', 'present_continuous'],
  words: `
car|voiture|n|1|🚗|My dad drives an electric car.|Mon papa conduit une voiture électrique.
bus|bus|n|1|🚌|I go to school by bus.|Je vais à l’école en bus.
train|train|n|1|🚆|The train leaves at ten.|Le train part à dix heures.
plane|avion|n|1|✈️|The plane lands at the airport.|L’avion atterrit à l’aéroport.|airplane,aeroplane
boat|bateau|n|1|⛵|We take a boat to the island.|Nous prenons un bateau pour aller sur l’île.
bike|vélo|n|1|🚲|I ride my bike in the park.|Je fais du vélo dans le parc.|bicycle
taxi|taxi|n|1|🚕|Let’s take a taxi to the hotel.|Prenons un taxi jusqu’à l’hôtel.|cab
helicopter|hélicoptère|n|1|🚁|The helicopter flies over the city.|L’hélicoptère survole la ville.
rocket|fusée|n|1|🚀|The rocket goes to the Moon.|La fusée va sur la Lune.
ticket|billet, ticket|n|1|🎫|I need a ticket for the train.|J’ai besoin d’un billet pour le train.
walk|marcher, aller à pied|v|1|🚶|I walk to school with my friends.|Je vais à l’école à pied avec mes amis.
ship|navire, paquebot|n|2|🚢|A big ship is in the port.|Un grand navire est dans le port.
underground|métro|n|2|🚇|In London, the underground is called the Tube.|À Londres, le métro s’appelle « the Tube ».|subway,metro
tram|tramway|n|2|🚊|The tram stops in front of the museum.|Le tramway s’arrête devant le musée.
lorry|camion|n|2|🚚|The lorry carries fruit and vegetables.|Le camion transporte des fruits et des légumes.|truck
motorbike|moto|n|2|🏍️|My uncle rides a red motorbike.|Mon oncle conduit une moto rouge.|motorcycle
station|gare|n|2|🚉|Meet me at the station.|Retrouve-moi à la gare.
airport|aéroport|n|2|🛫|The airport is far from the city.|L’aéroport est loin de la ville.
suitcase|valise|n|2|🧳|My suitcase is very heavy.|Ma valise est très lourde.
passport|passeport|n|2|🛂|Don’t forget your passport!|N’oublie pas ton passeport !
travel|voyager|v|2||I love to travel by train.|J’adore voyager en train.
drive|conduire|v|2||My mum can drive a bus.|Ma maman sait conduire un bus.
ride|faire du vélo, monter (à cheval, à vélo)|v|2||Let’s ride our bikes to the beach.|Allons à la plage à vélo.
fly|voler, prendre l’avion|v|2||I want to fly to New York.|Je veux aller à New York en avion.
fast|rapide|adj|2||This train is very fast.|Ce train est très rapide.
slow|lent|adj|2|🐌|The old bus is slow.|Le vieux bus est lent.
seat|siège, place|n|2|💺|Is this seat free?|Cette place est-elle libre ?
driver|conducteur, chauffeur|n|2||The bus driver says hello.|Le chauffeur de bus dit bonjour.
journey|trajet, voyage|n|3||The journey takes three hours.|Le trajet dure trois heures.
platform|quai (de gare)|n|3||The train leaves from platform two.|Le train part du quai numéro deux.
`,
  expressions: `
How do you go to school?|Comment vas-tu à l’école ?|1|pour demander à quelqu’un quel moyen de transport il prend pour l’école|— How do you go to school? — By bus.|— Comment vas-tu à l’école ? — En bus.
I go by bike.|J’y vais à vélo.|1|pour dire que tu te déplaces à vélo|I go by bike. It’s fast and good for the planet.|J’y vais à vélo. C’est rapide et bon pour la planète.|On dit « by bike, by car, by train », mais « on foot » (à pied).
A return ticket to London, please.|Un aller-retour pour Londres, s’il vous plaît.|3|pour acheter un billet aller-retour pour Londres|A return ticket to London, please. — That’s twenty pounds.|Un aller-retour pour Londres, s’il vous plaît. — Ça fait vingt livres.|Ici, « return » veut dire « aller-retour ». « Single » veut dire « aller simple ».
What time does the train leave?|À quelle heure part le train ?|2|pour demander l’heure de départ du train|Excuse me, what time does the train leave?|Excusez-moi, à quelle heure part le train ?
Have a good trip!|Bon voyage !|1|pour souhaiter un bon voyage à quelqu’un|Have a good trip! Send me a postcard.|Bon voyage ! Envoie-moi une carte postale.||Have a nice trip
Fasten your seat belt.|Attache ta ceinture.|2|pour demander à quelqu’un d’attacher sa ceinture de sécurité|The car is starting. Fasten your seat belt!|La voiture démarre. Attache ta ceinture !|« Seat belt » : mot à mot « ceinture de siège ».
Which platform is it?|C’est quel quai ?|3|pour demander de quel quai part le train|Excuse me, which platform is it for Paris?|Excusez-moi, c’est quel quai pour Paris ?
We’re nearly there.|On est presque arrivés.|3|pour dire que la fin du trajet est proche|Don’t worry, we’re nearly there!|Ne t’inquiète pas, on est presque arrivés !|« Nearly » veut dire « presque ».|We are nearly there
Are we there yet?|On est arrivés ?|2|pour demander, souvent avec impatience, si le voyage est terminé|Mum, are we there yet? I’m bored!|Maman, on est arrivés ? Je m’ennuie !|Mot à mot : « Sommes-nous déjà là ? » C’est la question préférée des enfants en voiture !
I get carsick.|J’ai mal au cœur en voiture.|3|pour dire que tu es malade en voiture|Can I sit in the front? I get carsick.|Est-ce que je peux m’asseoir devant ? J’ai mal au cœur en voiture.|« Carsick » = malade en voiture ; « seasick » = mal de mer.
`,
  build: `
I go to school by bus.|Je vais à l’école en bus.|3|
Where is my suitcase?|Où est ma valise ?|3|questions
We are waiting for the train.|Nous attendons le train.|4|present_continuous
Can you ride a bike?|Sais-tu faire du vélo ?|4|can
The plane is faster than the train.|L’avion est plus rapide que le train.|4|comparatives
My dad doesn’t drive a car.|Mon papa ne conduit pas de voiture.|4|negation
We took the boat to Ireland.|Nous avons pris le bateau pour l’Irlande.|5|past_simple
Next summer we will fly to Canada.|L’été prochain, nous irons au Canada en avion.|5|future_will|We will fly to Canada next summer.
`,
  gram: `
I go to school ___ bike.|by|on;with;in|Pour un moyen de transport, on utilise « by » : by bike, by bus.|3||Je vais à l’école à vélo.
I go to school ___ foot.|on|by;with;at|Exception : « à pied » se dit « on foot ».|4||Je vais à l’école à pied.
A plane is ___ than a car.|faster|fast;more fast;fastest|Adjectif court : fast → faster than.|4|comparatives|Un avion est plus rapide qu’une voiture.
The train is ___ expensive than the bus.|more|much;most;very|Adjectif long : more expensive than.|4|comparatives|Le train est plus cher que le bus.
___ you drive a lorry?|Can|Do;Are;Is|Pour demander si quelqu’un sait faire quelque chose : Can you…?|4|can|Sais-tu conduire un camion ?
Look! The helicopter ___ over the school.|is flying|flies;fly;are flying|« Look! » : l’action est en cours → is flying.|4|present_continuous|Regarde ! L’hélicoptère survole l’école.
Last year, we ___ to Spain by train.|went|go;goes;will go|« Last year » : passé. « Go » est irrégulier : went.|5|past_simple|L’année dernière, nous sommes allés en Espagne en train.
The bus ___ at 8:15 every morning.|leaves|leave;leaving;is leave|Horaire régulier avec « the bus » (it) : leaves.|4|present_simple|Le bus part à 8 h 15 tous les matins.
`,
  odd: `
car;bus;train;ticket|ticket|Car, bus et train sont des véhicules ; ticket est un billet.|2
plane;helicopter;rocket;boat|boat|Plane, helicopter et rocket volent ; boat (bateau) va sur l’eau.|3
suitcase;passport;ticket;lorry|lorry|Suitcase, passport et ticket s’emportent en voyage ; lorry (camion) est un véhicule.|3
drive;ride;fly;slow|slow|Drive, ride et fly sont des verbes ; slow (lent) est un adjectif.|4
`,
  mystery: `
bike|It has got two wheels.;You ride it and pedal.|3|Deux roues et des pédales.
plane|It flies in the sky.;You take it at the airport.|3|On le prend à l’aéroport.
passport|You need it to travel to another country.;It has got your photo in it.|4|Il faut l’avoir pour aller à l’étranger.
suitcase|You put your clothes in it for a trip.;It sometimes has wheels.|4|On y range ses vêtements pour partir.
`,
  act: `
Take the bus.|Prends le bus.|🚌|🚗;🚆;🚲|2|bus;voiture;train;vélo
Take the plane.|Prends l’avion.|✈️|🚢;🚁;🚀|2|avion;navire;hélicoptère;fusée
Ride your bike.|Fais du vélo.|🚲|🏍️;🚗;🛴|2|vélo;moto;voiture;trottinette
Show me your ticket.|Montre-moi ton billet.|🎫|🛂;🧳;💺|3|billet;passeport;valise;siège
Get on the train.|Monte dans le train.|🚆|🚌;🚕;⛵|2|train;bus;taxi;bateau
`,
  dialogues: [
    {
      id: 'd-ticket-office', title: 'At the ticket office', level: 2,
      lines: [
        ['Clerk', 'Hello! Where are you going?', 'Bonjour ! Où allez-vous ?'],
        ['Ben', 'To Brighton, please.', 'À Brighton, s’il vous plaît.'],
        ['Clerk', 'Single or return?', 'Aller simple ou aller-retour ?'],
        ['Ben', 'Return, please.', 'Aller-retour, s’il vous plaît.'],
        ['Clerk', 'That’s fifteen pounds.', 'Ça fait quinze livres.']
      ],
      gap: 1, wrong: ['I’m ten years old.', 'Nice to meet you.'],
      quiz: [['Where is Ben going?', 'To Brighton', 'To London;To Paris', '« To Brighton, please. »', 0]]
    },
    {
      id: 'd-york-train', title: 'The train to York', level: 3,
      lines: [
        ['Grandma', 'Excuse me, what time does the train to York leave?', 'Excusez-moi, à quelle heure part le train pour York ?'],
        ['Man', 'At half past eleven, from platform three.', 'À onze heures et demie, du quai numéro trois.'],
        ['Grandma', 'Platform three? Thank you. Is it far?', 'Quai trois ? Merci. C’est loin ?'],
        ['Man', 'No, it’s just over there, next to the café.', 'Non, c’est juste là-bas, à côté du café.']
      ],
      gap: 1, wrong: ['By bike, it’s faster.', 'Have a good trip!'],
      quiz: [
        ['What time does the train leave?', 'At half past eleven', 'At eleven o’clock;At half past three', '« At half past eleven » (11 h 30).', 0],
        ['Which platform does the train leave from?', 'Platform three', 'Platform eleven;Platform two', '« from platform three ».', 0]
      ]
    },
    {
      id: 'd-road-trip', title: 'Are we there yet?', level: 4,
      lines: [
        ['Lucas', 'Mum, are we there yet?', 'Maman, on est arrivés ?'],
        ['Mum', 'Not yet, Lucas. We’re nearly there. Only twenty minutes.', 'Pas encore, Lucas. On est presque arrivés. Plus que vingt minutes.'],
        ['Lucas', 'I’m bored! Can we stop for a snack?', 'Je m’ennuie ! On peut s’arrêter pour goûter ?'],
        ['Mum', 'OK, there’s a service station in five kilometres.', 'D’accord, il y a une aire d’autoroute dans cinq kilomètres.'],
        ['Lucas', 'Yay! Thank you, Mum.', 'Youpi ! Merci, maman.']
      ],
      gap: 1, wrong: ['Yes, it’s my ticket.', 'I get up at seven.'],
      quiz: [
        ['How long is the rest of the journey?', 'Twenty minutes', 'Five minutes;Two hours', '« Only twenty minutes. » Les cinq kilomètres, c’est la distance jusqu’à l’aire.', 0],
        ['Why do they stop?', 'For a snack', 'To buy a ticket;To sleep', '« Can we stop for a snack? »', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-to-school-world', title: 'Going to school around the world', level: 4, tag: 'present_simple',
      text: 'How do children go to school around the world? In the Netherlands, many children ride their bikes. In London, some pupils take the underground or a red double-decker bus. In the mountains of Switzerland, some children take a cable car! In some parts of Canada, children go by yellow school bus. And me? I walk to school with my neighbour: it takes ten minutes.',
      fr: 'Comment les enfants vont-ils à l’école dans le monde ? Aux Pays-Bas, beaucoup d’enfants y vont à vélo. À Londres, certains élèves prennent le métro ou un bus rouge à impériale. Dans les montagnes suisses, certains enfants prennent un téléphérique ! Dans certaines régions du Canada, les enfants prennent un bus scolaire jaune. Et moi ? Je vais à l’école à pied avec ma voisine : ça prend dix minutes.',
      quiz: [
        ['How do many children go to school in the Netherlands?', 'By bike', 'By boat;By cable car', '« In the Netherlands, many children ride their bikes. »'],
        ['What colour are the buses in London?', 'Red', 'Yellow;Blue', '« a red double-decker bus ». Les bus jaunes sont au Canada.'],
        ['How long does it take the writer to walk to school?', 'Ten minutes', 'Two minutes;One hour', '« it takes ten minutes ».']
      ]
    },
    {
      id: 'r-first-flight', title: 'My first flight', level: 5, tag: 'past_simple,future_will',
      text: 'Last summer, I took a plane for the first time. We flew from Paris to Montreal. The journey was seven hours long! I sat next to the window and I saw the clouds under the plane. I watched two films and I ate a strange sandwich. When we arrived, my cousins were waiting for us at the airport. Next year, I will take the plane again to visit them.',
      fr: 'L’été dernier, j’ai pris l’avion pour la première fois. Nous avons volé de Paris à Montréal. Le trajet a duré sept heures ! J’étais assis à côté du hublot et j’ai vu les nuages sous l’avion. J’ai regardé deux films et j’ai mangé un sandwich bizarre. Quand nous sommes arrivés, mes cousins nous attendaient à l’aéroport. L’année prochaine, je reprendrai l’avion pour leur rendre visite.',
      quiz: [
        ['Where did they fly to?', 'Montreal', 'Paris;London', '« We flew from Paris to Montreal. »'],
        ['What did the writer see from the window?', 'The clouds under the plane', 'The sea;His cousins', '« I saw the clouds under the plane ».'],
        ['Who was waiting at the airport?', 'The writer’s cousins', 'The pilot;The teacher', '« my cousins were waiting for us at the airport ».']
      ]
    }
  ]
});
