/* Thème 7 — Animals & Wildlife */
AE.content.registerTheme({
  id: 'animals',
  intro: 'Dans la Jungle Sauvage, on rencontre les animaux de la ferme, de la maison, de la mer et de la savane.',
  lessons: ['plural', 'can', 'prepositions'],
  words: `
cat|chat|n|1|🐱|My cat sleeps on my bed.|Mon chat dort sur mon lit.
dog|chien|n|1|🐶|The dog is barking at the postman.|Le chien aboie après le facteur.
rabbit|lapin|n|1|🐰|The rabbit eats a carrot.|Le lapin mange une carotte.
horse|cheval|n|1|🐴|I can ride a horse.|Je sais monter à cheval.
cow|vache|n|1|🐮|The cow gives milk.|La vache donne du lait.
pig|cochon|n|1|🐷|The pig is in the mud.|Le cochon est dans la boue.
duck|canard|n|1|🦆|The duck is swimming on the lake.|Le canard nage sur le lac.
mouse|souris|n|1|🐭|The mouse is very small.|La souris est toute petite.
bird|oiseau|n|1|🐦|A bird is singing in the tree.|Un oiseau chante dans l’arbre.
fish|poisson|n|1|🐟|My fish lives in a bowl.|Mon poisson vit dans un bocal.
lion|lion|n|1|🦁|The lion is the king of the jungle.|Le lion est le roi de la jungle.
elephant|éléphant|n|1|🐘|An elephant has got a long trunk.|Un éléphant a une longue trompe.
monkey|singe|n|1|🐒|The monkey is climbing a tree.|Le singe grimpe à un arbre.
sheep|mouton|n|2|🐑|A sheep has got white wool.|Un mouton a de la laine blanche.
hen|poule|n|2|🐔|The hen lays an egg every day.|La poule pond un œuf chaque jour.|chicken
tiger|tigre|n|2|🐯|A tiger has got orange and black stripes.|Un tigre a des rayures orange et noires.
giraffe|girafe|n|2|🦒|The giraffe has got a very long neck.|La girafe a un très long cou.
bear|ours|n|2|🐻|The bear likes honey.|L’ours aime le miel.
fox|renard|n|2|🦊|The fox is hiding in the forest.|Le renard se cache dans la forêt.
snake|serpent|n|2|🐍|A snake has got no legs.|Un serpent n’a pas de pattes.
frog|grenouille|n|2|🐸|The frog jumps into the pond.|La grenouille saute dans la mare.
spider|araignée|n|2|🕷️|A spider has got eight legs.|Une araignée a huit pattes.
bee|abeille|n|2|🐝|The bee is on the flower.|L’abeille est sur la fleur.
butterfly|papillon|n|2|🦋|A butterfly has got beautiful wings.|Un papillon a de belles ailes.
penguin|manchot|n|2|🐧|A penguin can swim but it can’t fly.|Un manchot sait nager mais il ne sait pas voler.
whale|baleine|n|2|🐋|The whale is the biggest animal in the sea.|La baleine est le plus grand animal de la mer.
owl|chouette, hibou|n|2|🦉|The owl hunts at night.|La chouette chasse la nuit.
tortoise|tortue|n|3|🐢|The tortoise walks very slowly.|La tortue marche très lentement.|turtle
tail|queue (d’un animal)|n|3||My dog wags its tail.|Mon chien remue la queue.
wing|aile|n|3||The bird has got a broken wing.|L’oiseau a une aile cassée.
`,
  expressions: `
What’s your favourite animal?|Quel est ton animal préféré ?|1|pour demander à quelqu’un quel animal il préfère|— What’s your favourite animal? — The dolphin!|— Quel est ton animal préféré ? — Le dauphin !||What is your favourite animal?,What’s your favorite animal?
It’s raining cats and dogs.|Il pleut des cordes.|3|pour dire qu’il pleut très, très fort|Take your umbrella, it’s raining cats and dogs!|Prends ton parapluie, il pleut des cordes !|Expression imagée : mot à mot « il pleut des chats et des chiens ». Aucun animal ne tombe du ciel !|It is raining cats and dogs
I’m scared of spiders.|J’ai peur des araignées.|2|pour dire qu’un animal te fait peur|Please take the spider outside, I’m scared of spiders!|S’il te plaît, sors l’araignée, j’ai peur des araignées !|On dit « scared of » pour « avoir peur de ».|I am scared of spiders
Can I stroke your dog?|Est-ce que je peux caresser ton chien ?|2|pour demander la permission de caresser le chien de quelqu’un|Your dog is so cute! Can I stroke your dog?|Ton chien est trop mignon ! Est-ce que je peux le caresser ?||Can I pet your dog?
Be careful, it bites!|Attention, il mord !|2|pour prévenir qu’un animal peut mordre|Be careful, it bites! Don’t put your hand in the cage.|Attention, il mord ! Ne mets pas ta main dans la cage.
Don’t feed the animals.|Ne nourrissez pas les animaux.|2|pour dire, comme un panneau du zoo, qu’il est interdit de donner à manger aux animaux|Look at the sign: “Don’t feed the animals.”|Regarde le panneau : « Ne nourrissez pas les animaux. »
What does a cow say?|Que dit la vache ?|1|pour demander quel cri fait un animal|— What does a cow say? — Moo!|— Que dit la vache ? — Meuh !|En anglais, la vache fait « moo », le chien « woof » et le chat « meow ».
As quiet as a mouse.|Silencieux comme une souris.|3|pour dire que quelqu’un est très silencieux|Shh! Be as quiet as a mouse, the baby is sleeping.|Chut ! Sois aussi silencieux qu’une souris, le bébé dort.|Le français dirait plutôt « muet comme une carpe » : l’anglais choisit la souris.
I have to walk the dog.|Je dois promener le chien.|3|pour dire que tu dois sortir le chien|I can’t play now, I have to walk the dog.|Je ne peux pas jouer maintenant, je dois promener le chien.|« Walk the dog » : mot à mot « marcher le chien », c’est-à-dire le promener.
Where do penguins live?|Où vivent les manchots ?|3|pour demander où habite un animal, ici le manchot|— Where do penguins live? — Near the South Pole.|— Où vivent les manchots ? — Près du pôle Sud.|Piège : « penguin » veut dire « manchot ». Le pingouin est un autre oiseau (« auk » en anglais).
`,
  build: `
The cat is under the table.|Le chat est sous la table.|3|prepositions
I have got a black dog.|J’ai un chien noir.|3|adjectives,have_got
Elephants are big and grey.|Les éléphants sont grands et gris.|3|plural,adjectives|Elephants are grey and big.
A spider has got eight legs.|Une araignée a huit pattes.|4|have_got
Monkeys can climb trees.|Les singes savent grimper aux arbres.|4|can
Penguins can’t fly.|Les manchots ne savent pas voler.|4|can,negation
The frog is jumping into the pond.|La grenouille est en train de sauter dans la mare.|4|present_continuous
We saw a fox in the garden.|Nous avons vu un renard dans le jardin.|5|past_simple|In the garden we saw a fox.
`,
  gram: `
I have got two ___.|mice|mouses;mouse;mices|Le pluriel de « mouse » est irrégulier : mice.|4|plural|J’ai deux souris.
There are three ___ in the field.|sheep|sheeps;sheepes;a sheep|« Sheep » ne change pas au pluriel : one sheep, three sheep.|4|plural|Il y a trois moutons dans le champ.
The cat is ___ the bed.|under|on;in;next to|Le français dit « sous » : under.|3|prepositions|Le chat est sous le lit.
A giraffe ___ a very long neck.|has got|have got;is got;are got|Avec « a giraffe » (it), on dit « has got ».|3|have_got|Une girafe a un très long cou.
Fish ___ swim, but they can’t walk.|can|can’t;cans;are|Les poissons savent nager : can + verbe (sans -s).|4|can|Les poissons savent nager, mais ils ne savent pas marcher.
A snake ___ legs.|hasn’t got|haven’t got;isn’t got;don’t got|Avec « a snake » (it), la négation est « hasn’t got ».|4|have_got,negation|Un serpent n’a pas de pattes.
Look! The birds ___ away.|are flying|is flying;flies;fly|« Look! » + pluriel (the birds) : are flying.|4|present_continuous|Regarde ! Les oiseaux s’envolent.
Last summer, we ___ a whale!|saw|see;sees;will see|« Last summer » : passé. « See » est irrégulier : saw.|5|past_simple|L’été dernier, nous avons vu une baleine !
The dog is wagging ___ tail.|its|it’s;his own;their|« Its » est le possessif pour un animal (sans apostrophe). « It’s » veut dire « it is ».|4|possessives|Le chien remue la queue.
`,
  odd: `
cat;dog;rabbit;lion|lion|Cat, dog et rabbit peuvent être des animaux de compagnie ; lion est un animal sauvage.|3
cow;pig;sheep;whale|whale|Cow, pig et sheep vivent à la ferme ; whale (baleine) vit dans la mer.|3
owl;duck;penguin;frog|frog|Owl, duck et penguin sont des oiseaux ; frog (grenouille) n’en est pas un.|4
bird;bee;butterfly;snake|snake|Bird, bee et butterfly ont des ailes ; snake (serpent) n’en a pas.|4
`,
  mystery: `
elephant|It is very big and grey.;It has got a long trunk and big ears.|3|Il est gros, gris, avec une trompe.
giraffe|It is a very tall animal.;It has got a very long neck.;It eats leaves.|3|Un animal très grand au long cou.
penguin|It is a black and white bird.;It can’t fly but it swims very well.;It lives where it is very cold.|4|Un oiseau noir et blanc qui nage.
spider|It has got eight legs.;It makes a web.|4|Il a huit pattes et tisse une toile.
`,
  act: `
Jump like a frog.|Saute comme une grenouille.|🐸|🐍;🐘;🐢|2|grenouille;serpent;éléphant;tortue
Fly like a bird.|Vole comme un oiseau.|🐦|🐟;🐍;🐢|2|oiseau;poisson;serpent;tortue
Swim like a fish.|Nage comme un poisson.|🐟|🐦;🐒;🐴|2|poisson;oiseau;singe;cheval
Walk slowly like a tortoise.|Marche lentement comme une tortue.|🐢|🐇;🐆;🐎|3|tortue;lapin;guépard;cheval au galop
Roar like a lion.|Rugis comme un lion.|🦁|🐭;🐑;🐝|3|lion;souris;mouton;abeille
`,
  dialogues: [
    {
      id: 'd-pet-shop', title: 'At the pet shop', level: 2,
      lines: [
        ['Maya', 'Look! A little rabbit!', 'Regarde ! Un petit lapin !'],
        ['Dad', 'It’s very cute. Do you like it?', 'Il est très mignon. Il te plaît ?'],
        ['Maya', 'Yes! Can we buy it, please?', 'Oui ! On peut l’acheter, s’il te plaît ?'],
        ['Dad', 'OK, but you must feed it every day.', 'D’accord, mais tu devras le nourrir tous les jours.']
      ],
      gap: 2, wrong: ['It’s half past two.', 'Goodbye, see you tomorrow!'],
      quiz: [['What animal does Maya see?', 'A rabbit', 'A cat;A mouse', 'Maya dit « Look! A little rabbit! ».', 0]]
    },
    {
      id: 'd-zoo', title: 'A day at the zoo', level: 3,
      lines: [
        ['Guide', 'Welcome to the zoo! On the left, you can see the lions.', 'Bienvenue au zoo ! Sur la gauche, vous pouvez voir les lions.'],
        ['Leo', 'Wow! What do lions eat?', 'Waouh ! Que mangent les lions ?'],
        ['Guide', 'They eat meat. Don’t feed the animals, please!', 'Ils mangent de la viande. Ne nourrissez pas les animaux, s’il vous plaît !'],
        ['Leo', 'And where are the penguins?', 'Et où sont les manchots ?'],
        ['Guide', 'They are next to the café. They’re very funny!', 'Ils sont à côté du café. Ils sont très drôles !']
      ],
      gap: 2, wrong: ['They are grey and very big.', 'Yes, I’ve got a pet.'],
      quiz: [
        ['What do lions eat?', 'Meat', 'Fish;Leaves', '« They eat meat. »', 0],
        ['Where are the penguins?', 'Next to the café', 'On the left;Behind the lions', '« They are next to the café. » Ce sont les lions qui sont sur la gauche.', 1]
      ]
    },
    {
      id: 'd-vet', title: 'At the vet’s', level: 4,
      lines: [
        ['Vet', 'Hello! What’s the problem with your dog?', 'Bonjour ! Quel est le problème avec ton chien ?'],
        ['Jack', 'He isn’t eating and he’s very tired.', 'Il ne mange pas et il est très fatigué.'],
        ['Vet', 'Let me see… Oh, he has got a small stone in his paw.', 'Voyons voir… Oh, il a un petit caillou dans la patte.'],
        ['Jack', 'Poor Max! Can you help him?', 'Pauvre Max ! Vous pouvez l’aider ?'],
        ['Vet', 'Yes, of course. He will feel better tomorrow.', 'Oui, bien sûr. Il ira mieux demain.']
      ],
      gap: 1, wrong: ['He’s got four legs and a tail.', 'It’s raining cats and dogs.'],
      quiz: [
        ['What is the dog’s name?', 'Max', 'Jack;Rex', 'Jack dit « Poor Max! » : le chien s’appelle Max. Jack est son maître.', 0],
        ['What is in the dog’s paw?', 'A small stone', 'A spider;A piece of glass', '« he has got a small stone in his paw ».', 1]
      ]
    }
  ],
  readings: [
    {
      id: 'r-penguins', title: 'Amazing penguins', level: 4, tag: 'can',
      text: 'Penguins are birds, but they can’t fly. They are excellent swimmers. They use their wings like flippers in the water. Most penguins live in the south, where it is very cold. Emperor penguins are the biggest: they can be one metre tall! A penguin dad keeps the egg warm on his feet for about two months.',
      fr: 'Les manchots sont des oiseaux, mais ils ne savent pas voler. Ce sont d’excellents nageurs. Ils utilisent leurs ailes comme des nageoires dans l’eau. La plupart des manchots vivent dans le sud, là où il fait très froid. Les manchots empereurs sont les plus grands : ils peuvent mesurer un mètre ! Le papa manchot garde l’œuf au chaud sur ses pattes pendant environ deux mois.',
      quiz: [
        ['Can penguins fly?', 'No, they can’t', 'Yes, they can;Only emperor penguins', '« they can’t fly » : ils ne savent pas voler.'],
        ['How tall can emperor penguins be?', 'One metre', 'Two metres;Ten centimetres', '« they can be one metre tall! »'],
        ['Who keeps the egg warm?', 'The penguin dad', 'The penguin mum;The baby penguin', '« A penguin dad keeps the egg warm on his feet ».']
      ]
    },
    {
      id: 'r-safari', title: 'Safari in Kenya', level: 5, tag: 'past_simple,going_to',
      text: 'Last August, my family went on a safari in Kenya. On the first day, we saw a group of elephants near a river. The baby elephant was playing in the water. The next day, we woke up very early and we saw a lion eating under a tree. It was amazing! Next year, we are going to visit Australia to see kangaroos.',
      fr: 'En août dernier, ma famille a fait un safari au Kenya. Le premier jour, nous avons vu un groupe d’éléphants près d’une rivière. Le bébé éléphant jouait dans l’eau. Le lendemain, nous nous sommes réveillés très tôt et nous avons vu un lion qui mangeait sous un arbre. C’était incroyable ! L’année prochaine, nous allons visiter l’Australie pour voir des kangourous.',
      quiz: [
        ['Where was the baby elephant playing?', 'In the water', 'Under a tree;In the car', '« The baby elephant was playing in the water. »'],
        ['What was the lion doing?', 'Eating under a tree', 'Swimming in the river;Sleeping in the car', '« we saw a lion eating under a tree ».'],
        ['Why are they going to visit Australia?', 'To see kangaroos', 'To see lions;To see penguins', '« we are going to visit Australia to see kangaroos ».']
      ]
    }
  ]
});
