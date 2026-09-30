/* Thème 6 — Colours & Shapes (les formes sont dessinées en SVG : jeton « @forme:couleur[:taille] ») */
AE.content.registerTheme({
  id: 'colours',
  intro: 'Dans l’Atelier des Couleurs, on nomme les couleurs et les formes, on dessine et on suit des consignes.',
  lessons: ['adjectives', 'articles', 'there_is'],
  words: `
red|rouge|adj|1|🔴|The fire engine is red.|Le camion de pompiers est rouge.
blue|bleu|adj|1|🔵|The sky is blue today.|Le ciel est bleu aujourd’hui.
green|vert|adj|1|🟢|The grass is green.|L’herbe est verte.
yellow|jaune|adj|1|🟡|My raincoat is yellow.|Mon imperméable est jaune.
orange|orange (couleur)|adj|1|🟠|Carrots are orange.|Les carottes sont orange.
purple|violet|adj|1|🟣|My favourite colour is purple.|Ma couleur préférée est le violet.
black|noir|adj|1|⚫|My shoes are black.|Mes chaussures sont noires.
white|blanc|adj|1|⚪|Snow is white.|La neige est blanche.
brown|marron|adj|1|🟤|Chocolate is brown.|Le chocolat est marron.
pink|rose (couleur)|adj|1||The pig is pink.|Le cochon est rose.
grey|gris|adj|2||Elephants are grey.|Les éléphants sont gris.|gray
colour|couleur|n|1|🎨|What colour is your bike?|De quelle couleur est ton vélo ?|color
circle|cercle|n|1|@circle:blue|Draw a circle with a pen.|Dessine un cercle avec un stylo.
square|carré|n|1|@square:blue|A square has four equal sides.|Un carré a quatre côtés égaux.
triangle|triangle|n|1|@triangle:blue|A triangle has three sides.|Un triangle a trois côtés.
rectangle|rectangle|n|2|@rectangle:blue|The door is a rectangle.|La porte est un rectangle.
star|étoile|n|1|@star:blue|There is a star on my T-shirt.|Il y a une étoile sur mon t-shirt.
heart|cœur|n|1|@heart:blue|Draw a heart on the card.|Dessine un cœur sur la carte.
oval|ovale|n|3|@oval:blue|Draw an oval for the face.|Dessine un ovale pour le visage.
diamond|losange|n|3|@diamond:blue|The kite is a diamond.|Le cerf-volant est un losange.
dot|point|n|3|@dot:blue|Put a dot on the letter i.|Mets un point sur la lettre i.
stripe|rayure|n|3|@stripes:blue|My T-shirt has a blue stripe.|Mon t-shirt a une rayure bleue.
shape|forme|n|2|🔷|A star is a shape with five points.|Une étoile est une forme à cinq branches.
dark|foncé|adj|2||My coat is dark blue.|Mon manteau est bleu foncé.
light|clair (couleur)|adj|2||Her bedroom is light green.|Sa chambre est vert clair.
big|grand, gros|adj|1||I have got a big red ball.|J’ai un gros ballon rouge.
small|petit|adj|1||Draw a small circle.|Dessine un petit cercle.
paint|peindre|v|2|🖌️|Let’s paint the sky blue.|Peignons le ciel en bleu.
draw|dessiner|v|1|✏️|I like to draw animals.|J’aime dessiner des animaux.
colour in|colorier|v|2|🖍️|Colour in the star with a yellow pencil.|Colorie l’étoile avec un crayon jaune.|color in
`,
  expressions: `
What colour is it?|De quelle couleur est-ce ?|1|pour demander la couleur d’un objet|— What colour is it? — It’s green.|— De quelle couleur est-ce ? — C’est vert.||What color is it?
What’s your favourite colour?|Quelle est ta couleur préférée ?|1|pour demander à quelqu’un quelle couleur il préfère|— What’s your favourite colour? — Purple!|— Quelle est ta couleur préférée ? — Le violet !||What is your favourite colour?,What’s your favorite color?
What shape is it?|Quelle est cette forme ?|2|pour demander la forme d’un objet|— What shape is it? — It’s a triangle.|— Quelle est cette forme ? — C’est un triangle.
Can I have the red pencil, please?|Est-ce que je peux avoir le crayon rouge, s’il te plaît ?|2|pour demander un crayon d’une couleur précise|Can I have the red pencil, please? I want to colour the apple.|Est-ce que je peux avoir le crayon rouge, s’il te plaît ? Je veux colorier la pomme.
It’s dark blue.|C’est bleu foncé.|2|pour dire qu’une chose est d’un bleu sombre|— What colour is your coat? — It’s dark blue.|— De quelle couleur est ton manteau ? — Il est bleu foncé.|En anglais, « dark » (foncé) ou « light » (clair) se place AVANT la couleur.|It is dark blue
Mix blue and yellow.|Mélange le bleu et le jaune.|2|pour dire de mélanger deux couleurs de peinture|Mix blue and yellow: you get green!|Mélange le bleu et le jaune : tu obtiens du vert !
It’s my favourite!|C’est mon préféré !|1|pour dire que tu préfères une chose à toutes les autres|I love this green T-shirt. It’s my favourite!|J’adore ce t-shirt vert. C’est mon préféré !||It is my favourite,It’s my favorite
Don’t forget to colour it in.|N’oublie pas de le colorier.|3|pour rappeler à quelqu’un de mettre des couleurs sur son dessin|Nice drawing! Don’t forget to colour it in.|Joli dessin ! N’oublie pas de le colorier.|« Colour in » veut dire « colorier », c’est-à-dire remplir de couleur.
What a beautiful picture!|Quel beau dessin !|2|pour faire un compliment sur un dessin|Wow, what a beautiful picture! Is it a rainbow?|Waouh, quel beau dessin ! C’est un arc-en-ciel ?|« Picture » peut vouloir dire « image », « dessin » ou « photo ».
The colours of the rainbow|Les couleurs de l’arc-en-ciel|3|pour parler des sept couleurs que l’on voit dans le ciel après la pluie|Red, orange, yellow, green, blue, indigo and violet are the colours of the rainbow.|Rouge, orange, jaune, vert, bleu, indigo et violet sont les couleurs de l’arc-en-ciel.
`,
  build: `
The sky is blue.|Le ciel est bleu.|3|be
I have got a green bike.|J’ai un vélo vert.|3|adjectives,have_got
Draw a big yellow star.|Dessine une grande étoile jaune.|3|imperative,adjectives
She likes pink and purple.|Elle aime le rose et le violet.|4|present_simple|She likes purple and pink.
A triangle has three sides.|Un triangle a trois côtés.|4|present_simple
There are two red circles.|Il y a deux cercles rouges.|4|there_is,plural
My T-shirt isn’t black.|Mon t-shirt n’est pas noir.|4|negation
Yesterday I painted a rainbow.|Hier, j’ai peint un arc-en-ciel.|5|past_simple|I painted a rainbow yesterday.
`,
  gram: `
I have got a ___.|red bike|bike red;reds bike;bike reds|En anglais, l’adjectif se place avant le nom et ne prend pas de -s : a red bike.|3|adjectives|J’ai un vélo rouge.
She has got two ___ balls.|blue|blues;bluees;blueish|Les adjectifs ne prennent jamais de -s : two blue balls.|3|adjectives|Elle a deux ballons bleus.
It’s ___ orange.|an|a;two;many|« Orange » commence par un son de voyelle : an orange.|3|articles|C’est une orange.
There ___ three triangles on the board.|are|is;be;am|Trois triangles, c’est pluriel : there are.|4|there_is|Il y a trois triangles au tableau.
A square ___ four sides.|has|have;is;are|Avec « a square » (it), on dit « has ».|4|have_got|Un carré a quatre côtés.
Look! Tom ___ a red heart.|is painting|paints;paint;are painting|« Look! » : l’action se passe maintenant → is painting.|4|present_continuous|Regarde ! Tom est en train de peindre un cœur rouge.
Blue and yellow ___ green.|make|makes;making;is make|« Blue and yellow » est pluriel (they) : make, sans -s.|4|present_simple|Le bleu et le jaune donnent du vert.
Last week, we ___ a big rainbow.|drew|draw;draws;will draw|« Last week » indique le passé. « Draw » est irrégulier : drew.|5|past_simple|La semaine dernière, nous avons dessiné un grand arc-en-ciel.
`,
  odd: `
red;blue;green;circle|circle|Red, blue et green sont des couleurs ; circle est une forme.|2
square;triangle;rectangle;yellow|yellow|Square, triangle et rectangle sont des formes ; yellow est une couleur.|2
paint;draw;colour in;star|star|Paint, draw et colour in sont des verbes (des actions) ; star est un nom.|3
circle;oval;dot;square|square|Circle, oval et dot sont des formes rondes ; square (carré) a quatre coins.|4
`,
  mystery: `
triangle|It is a shape.;It has three sides.|3|Une forme à trois côtés.
green|It is a colour.;Grass and frogs are this colour.;Mix blue and yellow to get it.|3|La couleur de l’herbe.
rectangle|It has four sides.;Two sides are long and two sides are short.;A door has this shape.|4|Quatre côtés : deux longs et deux courts.
star|You can see it in the sky at night.;It is a shape with five points.|4|On la voit dans le ciel la nuit.
`,
  act: `
Touch the red circle.|Touche le cercle rouge.|@circle:red|@circle:blue;@square:red;@triangle:green|2|cercle rouge;cercle bleu;carré rouge;triangle vert
Touch the blue square.|Touche le carré bleu.|@square:blue|@square:yellow;@circle:blue;@star:blue|2|carré bleu;carré jaune;cercle bleu;étoile bleue
Touch the yellow star.|Touche l’étoile jaune.|@star:yellow|@star:orange;@heart:yellow;@circle:yellow|2|étoile jaune;étoile orange;cœur jaune;cercle jaune
Touch the green triangle.|Touche le triangle vert.|@triangle:green|@triangle:purple;@square:green;@diamond:green|3|triangle vert;triangle violet;carré vert;losange vert
Touch the purple oval.|Touche l’ovale violet.|@oval:purple|@oval:pink;@circle:purple;@rectangle:purple|3|ovale violet;ovale rose;cercle violet;rectangle violet
Touch the small pink heart.|Touche le petit cœur rose.|@heart:pink:s|@heart:pink:l;@heart:red:s;@star:pink:s|3|petit cœur rose;grand cœur rose;petit cœur rouge;petite étoile rose
Touch the big black diamond.|Touche le grand losange noir.|@diamond:black:l|@diamond:black:s;@diamond:brown:l;@oval:black:l|4|grand losange noir;petit losange noir;grand losange marron;grand ovale noir
`,
  dialogues: [
    {
      id: 'd-red-pencil', title: 'In the art class', level: 2,
      lines: [
        ['Zoe', 'Can I have the red pencil, please?', 'Est-ce que je peux avoir le crayon rouge, s’il te plaît ?'],
        ['Ben', 'Here you are. What are you drawing?', 'Tiens. Qu’est-ce que tu dessines ?'],
        ['Zoe', 'A big red apple!', 'Une grosse pomme rouge !'],
        ['Ben', 'Nice!', 'Joli !']
      ],
      gap: 1, wrong: ['I’m from London.', 'Good night!'],
      quiz: [['What is Zoe drawing?', 'A red apple', 'A red car;A green apple', 'Zoe dit « A big red apple! ».', 1]]
    },
    {
      id: 'd-fav-colour', title: 'Favourite colours', level: 3,
      lines: [
        ['Amir', 'What’s your favourite colour, Chloe?', 'Quelle est ta couleur préférée, Chloe ?'],
        ['Chloe', 'Purple! My bedroom is purple and white. And you?', 'Le violet ! Ma chambre est violette et blanche. Et toi ?'],
        ['Amir', 'I love green. It’s the colour of my football team.', 'J’adore le vert. C’est la couleur de mon équipe de foot.'],
        ['Chloe', 'Cool! What shape is your team logo?', 'Cool ! Quelle est la forme du logo de ton équipe ?'],
        ['Amir', 'It’s a green star in a white circle.', 'C’est une étoile verte dans un cercle blanc.']
      ],
      gap: 1, wrong: ['It’s a quarter past three.', 'I have got a brother.'],
      quiz: [
        ['What colours is Chloe’s bedroom?', 'Purple and white', 'Green and white;Pink and purple', '« My bedroom is purple and white. »', 0],
        ['What is the team logo?', 'A green star in a white circle', 'A white star in a green circle;A green circle in a white star', 'Attention à l’ordre : « a green star in a white circle ».', 1]
      ]
    },
    {
      id: 'd-mixing', title: 'Mixing colours', level: 4,
      lines: [
        ['Mr Lee', 'Today, we are going to mix colours. What do blue and yellow make?', 'Aujourd’hui, nous allons mélanger des couleurs. Que donnent le bleu et le jaune ?'],
        ['Lily', 'They make green!', 'Ils donnent du vert !'],
        ['Mr Lee', 'Correct! And red and white?', 'Exact ! Et le rouge et le blanc ?'],
        ['Sam', 'Pink! Can we paint a pink flamingo?', 'Du rose ! Est-ce qu’on peut peindre un flamant rose ?'],
        ['Mr Lee', 'Yes, but don’t forget your aprons!', 'Oui, mais n’oubliez pas vos tabliers !']
      ],
      gap: 3, wrong: ['It’s a triangle.', 'I’m wearing black shoes.'],
      quiz: [
        ['What do red and white make?', 'Pink', 'Orange;Purple', 'Sam répond « Pink! » : rouge + blanc = rose.', 0],
        ['What does Sam want to paint?', 'A pink flamingo', 'A green frog;A yellow star', '« Can we paint a pink flamingo? »', 0]
      ]
    }
  ],
  readings: [
    {
      id: 'r-flags', title: 'Flags of the world', level: 4, tag: 'have_got',
      text: 'Flags have many colours and shapes. The French flag has three vertical stripes: blue, white and red. The Japanese flag is white with a red circle in the middle. The flag of Brazil is green with a yellow diamond and a blue circle. Can you draw the flag of your country? Use your ruler for the straight lines!',
      fr: 'Les drapeaux ont beaucoup de couleurs et de formes. Le drapeau français a trois bandes verticales : bleu, blanc et rouge. Le drapeau japonais est blanc avec un cercle rouge au milieu. Le drapeau du Brésil est vert avec un losange jaune et un cercle bleu. Sais-tu dessiner le drapeau de ton pays ? Utilise ta règle pour les lignes droites !',
      quiz: [
        ['What colour is the circle on the Japanese flag?', 'Red', 'White;Blue', '« white with a red circle in the middle ».'],
        ['Which flag has a yellow diamond?', 'The flag of Brazil', 'The French flag;The Japanese flag', '« The flag of Brazil is green with a yellow diamond… »'],
        ['How many stripes are there on the French flag? Write the number in letters.', 'three', '3', '« The French flag has three vertical stripes. »', 'typed']
      ]
    },
    {
      id: 'r-giant-rainbow', title: 'The giant rainbow', level: 5, tag: 'past_simple,going_to',
      text: 'Last week, our class made a giant rainbow for the school hall. First, we painted seven long stripes: red, orange, yellow, green, blue, indigo and violet. Then we cut out white clouds and glued them at the ends. It took three days! Next week, we are going to add a golden sun in the corner.',
      fr: 'La semaine dernière, notre classe a fabriqué un arc-en-ciel géant pour le hall de l’école. D’abord, nous avons peint sept longues bandes : rouge, orange, jaune, vert, bleu, indigo et violet. Ensuite, nous avons découpé des nuages blancs et nous les avons collés aux extrémités. Cela a pris trois jours ! La semaine prochaine, nous allons ajouter un soleil doré dans le coin.',
      quiz: [
        ['How many stripes did they paint?', 'Seven', 'Three;Five', '« we painted seven long stripes ».'],
        ['What did they glue at the ends?', 'White clouds', 'Golden suns;Blue stars', '« we cut out white clouds and glued them at the ends ».'],
        ['What are they going to add next week?', 'A golden sun', 'A white cloud;A green stripe', '« Next week, we are going to add a golden sun in the corner. »']
      ]
    }
  ]
});
