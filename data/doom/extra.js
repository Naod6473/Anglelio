/*
 * DOOM English — questions rédigées à la main : faux amis, collocations, grammaire complexe,
 * registre, lecture avec inférence et écoute exigeante.
 * Format des listes : [énoncé, bonne réponse, mauvaises réponses séparées par « ; », correction détaillée, difficultés]
 * Difficultés : h = Hard, n = Nightmare, u = Ultra Nightmare (combinables, ex. « hn »).
 */
AE.doomData = AE.doomData || {};
AE.doomData.extra = {
  falsefriend: [
    ['Traduisez : « Actuellement, je travaille à Londres. »', 'Currently, I work in London.', 'Actually, I work in London.;Eventually, I work in London.;Actively, I work in London.', '« Actuellement » = currently / at the moment. « Actually » veut dire « en fait », « eventually » veut dire « finalement ».', 'hn'],
    ['Traduisez : « Nous pourrions éventuellement partir demain. » → We could ___ leave tomorrow.', 'possibly', 'eventually;actually;lastly', '« Éventuellement » (peut-être) = possibly. « Eventually » veut dire « finalement, au bout du compte ».', 'hnu'],
    ['« She is a very sensible person. » Cela signifie qu’elle est…', 'raisonnable', 'sensible (émotive);sensuelle;susceptible', '« Sensible » = raisonnable, sensé. Pour dire « sensible » (émotif), on utilise « sensitive ».', 'h'],
    ['Traduisez : « Quelle déception ! »', 'What a disappointment!', 'What a deception!;What a delusion!;What a deceit!', '« Déception » = disappointment. « Deception » et « deceit » signifient « tromperie » ; « delusion » veut dire « illusion, idée délirante ».', 'hn'],
    ['Traduisez : « Il est très sympathique. »', 'He is very nice.', 'He is very sympathetic.;He is very sympathic.;He is very pathetic.', '« Sympathique » = nice ou friendly. « Sympathetic » veut dire « compatissant, compréhensif » ; « pathetic » veut dire « pitoyable ».', 'h'],
    ['« The library is closed on Mondays. » Où ne peut-on pas aller le lundi ?', 'À la bibliothèque', 'À la librairie;À la papeterie;Au kiosque à journaux', '« Library » = bibliothèque. Une librairie se dit « bookshop » (GB) ou « bookstore » (US).', 'h'],
    ['Traduisez : « J’ai assisté au concert. »', 'I attended the concert.', 'I assisted the concert.;I attended to the concert.;I waited the concert.', '« Assister à » = attend. « Assist » veut dire « aider » et « attend to » veut dire « s’occuper de ».', 'hn'],
    ['« He finally achieved his goal. » Que signifie « achieved » ?', 'atteint', 'achevé (terminé);acheté;abandonné', '« Achieve » = atteindre, réussir. « Achever » (terminer) se dit « finish » ou « complete ».', 'h'],
    ['Traduisez : « Je ne me suis pas rendu compte de l’erreur. »', 'I didn’t realise the mistake.', 'I didn’t render account of the mistake.;I didn’t realise me of the mistake.;I didn’t give me account of the mistake.', '« Se rendre compte de » = realise (ou notice). Le verbe « realise » n’est jamais pronominal en anglais.', 'hn'],
    ['« She pretends to be ill. » Que fait-elle ?', 'Elle fait semblant d’être malade.', 'Elle affirme être malade (et l’est peut-être).;Elle prévoit d’être malade.;Elle regrette d’être malade.', '« Pretend » = faire semblant. « Prétendre » (affirmer) se dit « claim ».', 'hn'],
    ['« The first point on the agenda is the budget. » Ici, « agenda » signifie…', 'l’ordre du jour', 'le carnet de rendez-vous;le calendrier scolaire;le planning des vacances', '« Agenda » = ordre du jour (d’une réunion). Un agenda (carnet) se dit « diary » (GB) ou « planner ».', 'hn'],
    ['Traduisez « Il s’est blessé au genou » en choisissant le bon nom : He has a knee ___.', 'injury', 'injure;insult;offence', '« Injury » = blessure. « Insult » = injure (insulte). « Injure » est un verbe (blesser) et « offence » veut dire « délit » ou « offense ».', 'nu'],
    ['Traduisez : « un préjugé »', 'a prejudice', 'a detriment;a damage;a prejudging', '« Prejudice » = préjugé. Le français « préjudice » (dommage) se traduit par « harm », « damage » ou « detriment ».', 'n'],
    ['« The professor gave a fascinating lecture. » Qu’a fait le professeur ?', 'Il a donné une conférence.', 'Il a lu un texte à voix haute.;Il a recommandé une lecture.;Il a corrigé des copies.', '« Lecture » = conférence, cours magistral. « La lecture » se dit « reading ».', 'h'],
    ['Traduisez : « Ce tissu est très doux. »', 'This fabric is very soft.', 'This factory is very soft.;This fabric is very sweet.;This tissue is very soft.', '« Fabric » = tissu (étoffe). « Tissue » = mouchoir en papier ou tissu biologique. « Doux » au toucher = soft ; « sweet » = sucré ou gentil.', 'n'],
    ['« They had a terrible argument last night. » Que s’est-il passé ?', 'Ils se sont violemment disputés.', 'Ils ont trouvé un mauvais argument.;Ils ont eu un terrible accident.;Ils ont reçu un terrible avertissement.', '« Have an argument » = se disputer. Le sens « argument (raison) » existe, mais pas avec « have ».', 'hn'],
    ['« The report is comprehensive. » Cela signifie qu’il est…', 'complet', 'compréhensible;compréhensif;compressé', '« Comprehensive » = complet, exhaustif. « Compréhensible » = understandable ; « compréhensif » = understanding.', 'hn'],
    ['Traduisez : « Mon patron est très compréhensif. »', 'My boss is very understanding.', 'My boss is very comprehensive.;My boss is very comprehensible.;My boss is very compressive.', '« Compréhensif » = understanding. « Comprehensive » veut dire « complet ».', 'hn'],
    ['« Her grades have been consistent all year. » Ses notes ont été…', 'régulières', 'consistantes (épaisses);contestées;insuffisantes', '« Consistent » = constant, régulier, cohérent. « Consistant » (épais, substantiel) se dit « thick » ou « substantial ».', 'hn'],
    ['Traduisez, en parlant d’un ami : « Il est génial ! »', 'He’s brilliant!', 'He’s genial!;He’s gentle!;He’s generous!', '« Génial » = brilliant, great, amazing. « Genial » veut dire « cordial, affable ».', 'hn'],
    ['Traduisez : « une grande surface » (le magasin)', 'a supermarket', 'a large surface;a great surface;a big area', '« Une grande surface » = a supermarket ou a hypermarket. « Surface » ne désigne jamais un magasin en anglais.', 'h'],
    ['« I’m going to the chemist’s. » Où va cette personne (anglais britannique) ?', 'À la pharmacie', 'Au laboratoire de chimie;À la droguerie;Chez le médecin', 'En anglais britannique, « the chemist’s » = la pharmacie. En anglais américain : « drugstore » ou « pharmacy ».', 'hn'],
    ['Traduisez : « Il a une grande expérience professionnelle. » → He has a lot of professional ___.', 'experience', 'experiment;experimentation;expert', '« Expérience » (vécu, savoir-faire) = experience. « Experiment » = expérience scientifique.', 'hnu'],
    ['« The scientists conducted an experiment. » Qu’ont-ils fait ?', 'Une expérience scientifique', 'Une expérience de vie;Un stage;Un examen', '« Experiment » = expérience scientifique ; « conduct » = mener. « Experience » serait l’expérience vécue.', 'h'],
    ['Traduisez : « Je suis désolé, je suis en retard. » → I’m ___, I’m late.', 'sorry', 'desolate;desolated;sad', '« Désolé » (pour s’excuser) = sorry. « Desolate » veut dire « désert » (lieu) ou « profondément malheureux ».', 'h'],
    ['« The rent is due on Monday. » Qu’est-ce qui doit être payé lundi ?', 'Le loyer', 'La rente;Le revenu;La taxe', '« Rent » = loyer. « Une rente » se dit « an annuity » ou « a pension ».', 'hn'],
    ['Traduisez : « un car scolaire »', 'a school coach', 'a school car;a school cart;a school carriage', '« Un car » = a coach (GB) ou a bus. « Car » veut dire « voiture ».', 'hn'],
    ['« He’s very versatile. » Cela veut dire qu’il est…', 'polyvalent', 'versatile (qui change d’avis);bavard;instable', '« Versatile » (anglais) = polyvalent, aux multiples talents. « Versatile » (français, changeant) se dit « fickle ».', 'n'],
    ['Traduisez : « Il a raté son bus. »', 'He missed his bus.', 'He failed his bus.;He lost his bus.;He mistook his bus.', '« Rater (un transport, une occasion) » = miss. « Fail » s’utilise pour un examen raté.', 'h'],
    ['Traduisez : « Le contrôleur vérifie les billets. » → The inspector ___ the tickets.', 'checks', 'controls;commands;conducts', '« Contrôler » (vérifier) = check. « Control » veut dire « maîtriser, diriger ».', 'hnu'],
    ['« My grandmother is very mean. » Que veut dire « mean » ici ?', 'avare ou méchante', 'moyenne;pauvre;malade', '« Mean » (adjectif) = avare (GB) ou méchant. « Moyen » se dit « average ».', 'n'],
    ['Traduisez : « Il est très susceptible (il se vexe facilement). »', 'He is very touchy.', 'He is very susceptible.;He is very suspicious.;He is very sensible.', '« Susceptible » (qui se vexe) = touchy. « Susceptible to » signifie « sujet à » (une maladie) ; « suspicious » = méfiant ; « sensible » = raisonnable.', 'n'],
    ['Traduisez : « Je vais tenter ma chance. »', 'I’m going to try my luck.', 'I’m going to tempt my chance.;I’m going to attempt my chance.;I’m going to tent my luck.', '« Tenter sa chance » = try one’s luck. « Tempt » signifie « tenter » au sens de « faire envie, séduire ».', 'hn'],
    ['« The event was postponed. » Que s’est-il passé ?', 'Il a été reporté.', 'Il a été posté.;Il a été annulé.;Il a été avancé.', '« Postpone » = reporter à plus tard. « Annuler » = cancel ; « avancer » = bring forward.', 'h']
  ],
  collocation: [
    ['Collocation : ___ your homework (faire ses devoirs)', 'do', 'make;take;have', 'On dit « do your homework ». « Do » s’emploie pour les tâches et le travail ; « make » pour ce que l’on crée.', 'h'],
    ['Collocation : ___ a mistake (faire une erreur)', 'make', 'do;take;have', 'On dit « make a mistake ». « Do a mistake » est une erreur typique des francophones.', 'h'],
    ['Collocation : ___ a photo (prendre une photo)', 'take', 'make;do;have', 'On dit « take a photo » (ou « take a picture »).', 'h'],
    ['Collocation : ___ attention (faire attention)', 'pay', 'take;make;do', 'On dit « pay attention » : mot à mot « payer attention ».', 'hn'],
    ['Collocation : ___ a promise (faire une promesse)', 'make', 'do;take;have', 'On dit « make a promise » ; on la tient : « keep a promise ».', 'h'],
    ['Collocation : ___ an effort (faire un effort)', 'make', 'do;take;have', 'On dit « make an effort ».', 'h'],
    ['Collocation : ___ the washing-up (faire la vaisselle)', 'do', 'make;take;have', 'On dit « do the washing-up » : « do » pour les tâches ménagères.', 'h'],
    ['Collocation : ___ a nap (faire une sieste)', 'take', 'make;do;put', 'On dit « take a nap » (ou « have a nap »).', 'hn'],
    ['Collocation : ___ a complaint (déposer une réclamation)', 'make', 'do;take;put', 'On dit « make a complaint » (plus formel : « file » ou « lodge a complaint »).', 'n'],
    ['Collocation : ___ someone a favour (rendre service à quelqu’un)', 'do', 'make;take;give', 'On dit « do someone a favour » : « Can you do me a favour? ».', 'hn'],
    ['Collocation : ___ a lecture (donner une conférence)', 'give', 'make;do;have', 'On dit « give a lecture » (ou « deliver a lecture »).', 'n'],
    ['Collocation : ___ a risk (prendre un risque)', 'take', 'make;do;give', 'On dit « take a risk » (ou « run a risk »).', 'hn'],
    ['Collocation : ___ progress (faire des progrès)', 'make', 'do;take;have', 'On dit « make progress » (indénombrable, sans « a »).', 'hn'],
    ['Collocation : ___ business with someone (faire des affaires avec quelqu’un)', 'do', 'make;take;have', 'On dit « do business with ».', 'n'],
    ['Collocation : There was ___ rain all night (une forte pluie).', 'heavy', 'strong;big;fat', 'On dit « heavy rain » (forte pluie) : « strong rain » ne se dit pas.', 'hn'],
    ['Collocation : a ___ coffee (un café serré, fort)', 'strong', 'heavy;hard;fat', 'On dit « strong coffee » ou « strong tea ».', 'hn'],
    ['Collocation : ___ the bed (faire son lit)', 'make', 'do;take;have', 'On dit « make the bed ».', 'h'],
    ['Collocation : ___ a shower (prendre une douche)', 'take', 'make;do;pass', 'On dit « take a shower » (ou « have a shower » en anglais britannique).', 'h'],
    ['Collocation : ___ a break (faire une pause)', 'take', 'make;do;put', 'On dit « take a break » (ou « have a break »).', 'h'],
    ['Collocation : bitterly ___ (profondément déçu)', 'disappointed', 'happy;tired;hungry', 'On dit « bitterly disappointed ». « Bitterly » s’associe aussi à « cold » (un froid mordant).', 'n'],
    ['Collocation : ___ asleep (profondément endormi)', 'fast', 'heavy;hard;strong', 'On dit « fast asleep » (ou « sound asleep »). Ici, « fast » ne veut pas dire « rapide ».', 'nu'],
    ['Collocation : ___ the truth (dire la vérité)', 'tell', 'say;talk;make', 'On dit « tell the truth » et « tell a lie ». « Say » s’emploie avec les paroles rapportées.', 'h'],
    ['Collocation : ___ a joke (raconter une blague)', 'tell', 'say;speak;talk', 'On dit « tell a joke » : « tell » pour raconter.', 'h'],
    ['Collocation : ___ a question (poser une question)', 'ask', 'make;do;say', 'On dit « ask a question ». « Poser » ne se traduit pas par « put » ici.', 'h'],
    ['Collocation : ___ a difference (faire une différence)', 'make', 'do;take;have', 'On dit « make a difference ».', 'hn'],
    ['Collocation : ___ an exam (passer un examen)', 'take', 'pass;make;give', 'Piège : « pass an exam » = réussir un examen. « Passer » (se présenter à) = take (ou « sit » en anglais britannique).', 'nu'],
    ['Collocation : ___ fun of someone (se moquer de quelqu’un)', 'make', 'do;take;have', 'On dit « make fun of ». « Have fun » veut dire « s’amuser ».', 'hn'],
    ['Collocation : ___ your best (faire de son mieux)', 'do', 'make;take;have', 'On dit « do your best ».', 'h'],
    ['Collocation : ___ a conclusion (tirer une conclusion)', 'draw', 'pull;take;extract', 'On dit « draw a conclusion » (ou « reach a conclusion »).', 'nu'],
    ['Collocation : ___ a crime (commettre un crime)', 'commit', 'make;do;perform', 'On dit « commit a crime ».', 'hn'],
    ['Collocation : ___ a rule (enfreindre une règle)', 'break', 'cross;pass;jump', 'On dit « break a rule » (ou « break the law »).', 'hn'],
    ['Collocation : ___ a goal (atteindre un objectif)', 'achieve', 'arrive;succeed;finish', 'On dit « achieve a goal » (ou « reach a goal »). « Succeed » se construit avec « in ».', 'n'],
    ['Collocation : ___ a record (battre un record)', 'break', 'hit;win;fight', 'On dit « break a record » (ou « beat a record »).', 'hn'],
    ['Collocation : ___ an appointment (prendre rendez-vous)', 'make', 'take;do;put', 'On dit « make an appointment ». « Take an appointment » est un calque du français.', 'nu'],
    ['Collocation : ___ a deal (conclure un marché)', 'strike', 'hit;beat;knock', 'On dit « strike a deal » (ou « make a deal »).', 'nu'],
    ['Collocation : ___ someone’s patience (mettre la patience de quelqu’un à l’épreuve)', 'try', 'taste;attempt;probe', 'On dit « try someone’s patience » (ou « test someone’s patience »).', 'u'],
    ['Collocation : a ___ smoker (un gros fumeur)', 'heavy', 'big;strong;fat', 'On dit « a heavy smoker » ou « a heavy drinker ».', 'hn'],
    ['Collocation : ___ a living (gagner sa vie)', 'earn', 'win;gain;take', 'On dit « earn a living » (ou « make a living »). « Win » s’emploie pour une compétition.', 'n'],
    ['Collocation : ___ a bill (payer une facture)', 'pay', 'do;make;give', 'On dit « pay a bill ».', 'h'],
    ['Collocation : ___ damage (causer des dégâts)', 'cause', 'make;take;give', 'On dit « cause damage » (ou « do damage »). « Damage » est indénombrable.', 'nu'],
    ['Collocation : ___ an excuse (trouver une excuse)', 'make', 'do;take;have', 'On dit « make an excuse » (inventer une excuse).', 'n'],
    ['Collocation : ___ the habit of (prendre l’habitude de)', 'get into', 'take;do;catch', 'On dit « get into the habit of doing something ». « Take the habit » est un calque du français.', 'nu']
  ],
  grammar: [
    ['Hardly ___ arrived when it started to rain.', 'had we', 'we had;did we;we have', 'Après « Hardly » en tête de phrase, on inverse sujet et auxiliaire : « Hardly had we arrived when… » (à peine étions-nous arrivés que…).', 'nu'],
    ['If I ___ you, I would accept the offer.', 'were', 'am;would be;had been', 'Conditionnel irréel du présent : If + prétérit (« were » à toutes les personnes dans ce registre), would + verbe.', 'h'],
    ['If she had left earlier, she ___ the train.', 'would have caught', 'would catch;will have caught;had caught', 'Irréel du passé : If + past perfect, would have + participe passé.', 'h'],
    ['I wish I ___ more time yesterday.', 'had had', 'had;have;would have', 'Regret concernant le passé : wish + past perfect (« had had »).', 'n'],
    ['It’s high time we ___ home.', 'went', 'go;will go;going', '« It’s high time » + prétérit : il est grand temps que nous partions.', 'n'],
    ['Not only ___ late, but he also forgot the tickets.', 'was he', 'he was;he is;did he be', 'Après « Not only » en tête de phrase, on inverse : « Not only was he late… ».', 'nu'],
    ['She suggested that he ___ a doctor.', 'see', 'to see;seeing;will see', 'Subjonctif après « suggest that » : base verbale (« see »). On peut aussi dire « should see ».', 'nu'],
    ['The man ___ car was stolen called the police.', 'whose', 'who;which;whom', '« Whose » exprime la possession : l’homme dont la voiture a été volée.', 'h'],
    ['By the time we arrive, the film ___.', 'will have started', 'will start;has started;started', 'Futur antérieur : l’action sera terminée avant un moment futur → « will have started ».', 'n'],
    ['I’m not used to ___ up so early.', 'getting', 'get;got;be getting', '« Be used to » (être habitué à) : « to » est une préposition, suivie du verbe en -ing.', 'h'],
    ['He used to ___ in Paris, but now he lives in Rome.', 'live', 'living;lived;lives', '« Used to » + base verbale pour une habitude passée révolue.', 'h'],
    ['The report must ___ by Friday.', 'be finished', 'finish;have finish;finished', 'Passif avec un modal : must + be + participe passé.', 'h'],
    ['She asked me where I ___.', 'lived', 'did I live;do I live;have I lived', 'Discours indirect : pas d’inversion dans la question rapportée, et concordance des temps (« lived »).', 'n'],
    ['You ___ have told me! I would have helped you.', 'should', 'must;would;can', '« Should have + participe passé » exprime un reproche : tu aurais dû me le dire.', 'n'],
    ['He ___ have stolen the money: he was with me all day.', 'can’t', 'mustn’t;shouldn’t;needn’t', 'Déduction négative sur le passé : « can’t have + participe passé » (il est impossible qu’il ait volé).', 'nu'],
    ['Neither my brother nor my sisters ___ coming.', 'are', 'is;be;am', 'Avec « neither… nor », le verbe s’accorde avec le sujet le plus proche : « my sisters » → are.', 'nu'],
    ['I’d rather you ___ smoke in here.', 'didn’t', 'don’t;wouldn’t;not', '« I’d rather + sujet + prétérit » pour exprimer une préférence sur l’action d’autrui.', 'nu'],
    ['No sooner had I sat down ___ the phone rang.', 'than', 'when;then;that', '« No sooner… than » (à peine… que). « Hardly » et « scarcely » se construisent, eux, avec « when ».', 'nu'],
    ['The more you practise, ___ you become.', 'the better', 'better;the best;more better', 'Structure comparative double : « the more…, the better… » (plus…, plus…).', 'h'],
    ['I look forward to ___ from you.', 'hearing', 'hear;heard;be hearing', 'Dans « look forward to », « to » est une préposition : verbe en -ing.', 'h'],
    ['Had I known about the strike, I ___ by car.', 'would have come', 'would come;will have come;had come', 'Inversion de « If I had known » : irréel du passé → « would have come ».', 'n'],
    ['It is essential that every student ___ the form.', 'complete', 'completing;to complete;completed', 'Subjonctif après « It is essential that » : base verbale, même à la 3e personne.', 'u'],
    ['Little ___ that he was being watched.', 'did he know', 'he knew;he did know;knew he', 'Après « Little » (sens négatif) en tête de phrase, on inverse avec l’auxiliaire « did ».', 'nu'],
    ['She denied ___ the vase.', 'breaking', 'to break;break;broke', '« Deny » est suivi du verbe en -ing (ou de « having broken »).', 'h'],
    ['Je me suis arrêté pour acheter un café : I stopped ___ a coffee on the way to work.', 'to buy', 'buying;buy;bought', '« Stop to do » = s’arrêter pour faire. « Stop doing » = arrêter de faire.', 'n'],
    ['Je me souviens d’avoir fermé la porte : I remember ___ the door, but now it’s open!', 'locking', 'to lock;lock;locked', '« Remember doing » = se souvenir d’avoir fait. « Remember to do » = penser à faire.', 'n'],
    ['Scarcely ___ the room when the lights went out.', 'had she entered', 'she had entered;did she enter;she entered', 'Après « Scarcely » en tête de phrase : inversion au past perfect, puis « when ».', 'u'],
    ['Had it not been for your help, I ___ failed.', 'would have', 'will have;had;would', 'Inversion de « If it hadn’t been for » (sans ton aide) + irréel du passé : would have failed.', 'u'],
    ['The house, ___ roof was damaged, has been repaired.', 'whose', 'which;that;its', 'Relative non déterminative (entre virgules) exprimant la possession : « whose roof ». « That » est impossible après une virgule.', 'hn'],
    ['Such ___ the noise that nobody could sleep.', 'was', 'were;is being;had', 'Inversion emphatique : « Such was the noise that… » (le bruit était tel que…).', 'u'],
    ['She speaks English as if she ___ British.', 'were', 'will be;has been;be', '« As if » + prétérit (ici « were ») pour une comparaison irréelle : elle n’est pas britannique.', 'n'],
    ['We have a dishwasher, so you needn’t ___ the dishes.', 'wash', 'to wash;washing;washed', '« Needn’t » est ici un modal : il est suivi de la base verbale, sans « to ».', 'h'],
    ['You needn’t have ___ a cake — we already had one!', 'bought', 'buy;buying;to buy', '« Needn’t have + participe passé » : tu l’as fait, mais c’était inutile.', 'n'],
    ['He is said ___ very rich.', 'to be', 'being;be;that he is', 'Tournure passive « He is said to be… » : on dit qu’il est…', 'n'],
    ['I have my hair ___ every month.', 'cut', 'cutting;to cut;cuts', '« Have something done » : se faire faire quelque chose (« cut » est le participe passé).', 'h'],
    ['What I need ___ a long holiday.', 'is', 'are;am;being', 'Phrase clivée « What I need is… » : le verbe s’accorde au singulier.', 'n'],
    ['Only after the meeting ___ the truth.', 'did she discover', 'she discovered;she did discover;discovered she', 'Après « Only after… » en tête de phrase, on inverse avec l’auxiliaire.', 'u'],
    ['Unless you ___ harder, you will fail.', 'work', 'don’t work;will work;worked', '« Unless » signifie déjà « if not » : pas de négation supplémentaire, et présent après la conjonction.', 'h'],
    ['Despite ___ tired, she kept running.', 'being', 'she was;to be;be', '« Despite » est une préposition : suivie d’un nom ou d’un verbe en -ing.', 'h'],
    ['She has been working here ___ 2019.', 'since', 'for;from;during', '« Since » + point de départ ; « for » + durée.', 'h'],
    ['It’s the first time I ___ sushi.', 'have eaten', 'eat;am eating;ate', '« It’s the first time » est suivi du present perfect.', 'n'],
    ['I’d sooner die ___ apologise to him!', 'than', 'that;then;as', '« I’d sooner… than… » : je préférerais… plutôt que…', 'u'],
    ['Rarely ___ such a beautiful sunset.', 'have I seen', 'I have seen;I saw;saw I', 'Après « Rarely » en tête de phrase, inversion avec l’auxiliaire : « Rarely have I seen… ».', 'u'],
    ['The problem ___ we are discussing is serious.', 'that', 'what;who;whose', 'Relative déterminative sur une chose : « that » (ou « which »). « What » ne peut pas suivre un nom.', 'h'],
    ['By next June, I ___ here for ten years.', 'will have been working', 'will work;am working;have worked', 'Futur antérieur progressif : durée qui se prolonge jusqu’à un moment futur.', 'u']
  ],
  register: [
    ['Dans une lettre de motivation, quelle formule finale est la plus appropriée ?', 'I look forward to hearing from you.', 'Can’t wait to hear from you!;Write back soon, OK?;Talk soon!', 'Une lettre de motivation exige un registre soutenu. Les trois autres formules sont familières.', 'h'],
    ['Quelle phrase est la plus formelle pour demander des informations à une entreprise ?', 'I would be grateful if you could send me further details.', 'Send me more info, please.;Can you tell me more stuff?;Give me the details, would you?', '« I would be grateful if you could… » est la formule soutenue de référence.', 'h'],
    ['Quel mot est le plus familier ?', 'kids', 'children;offspring;minors', '« Kids » est familier. « Offspring » est soutenu ou scientifique, « minors » est juridique.', 'h'],
    ['Quel verbe est le plus soutenu pour dire « acheter » ?', 'purchase', 'buy;get;pick up', '« Purchase » appartient au registre soutenu ou commercial.', 'h'],
    ['Quel verbe est l’équivalent très formel de « find out » ?', 'ascertain', 'work out;look up;figure out', '« Ascertain » (établir, s’assurer de) est très formel. Les autres sont des verbes à particule courants.', 'nu'],
    ['Quelle phrase conviendrait dans un message à un ami proche ?', 'Hey! Fancy grabbing a coffee later?', 'I should be delighted to meet for coffee.;Would you be available for a coffee meeting?;We request your presence for coffee.', '« Fancy…? » et « grab a coffee » sont familiers et chaleureux, parfaits entre amis.', 'h'],
    ['Quelle formule ouvre une lettre formelle quand on ne connaît pas le nom du destinataire (anglais britannique) ?', 'Dear Sir or Madam,', 'Hi there,;Hello you,;Dear Friend,', 'On écrit « Dear Sir or Madam, » et l’on termine alors par « Yours faithfully, ».', 'h'],
    ['Une lettre qui commence par « Dear Mr Smith, » se termine en anglais britannique par…', 'Yours sincerely,', 'Yours faithfully,;Cheers,;Love,', 'Nom connu → « Yours sincerely ». Nom inconnu (« Dear Sir or Madam ») → « Yours faithfully ».', 'nu'],
    ['Quel connecteur est le plus adapté à un texte formel pour exprimer une opposition ?', 'however', 'anyway;plus;so', '« However » convient à l’écrit formel. « Anyway » et « plus » sont familiers ; « so » exprime une conséquence.', 'h'],
    ['Quelle phrase est la plus polie pour interrompre quelqu’un en réunion ?', 'Sorry to interrupt, but may I add something?', 'Hold on, let me talk.;Wait, I’m speaking now.;Stop, listen to me.', 'Formule polie : excuse + demande de permission avec « may ».', 'h'],
    ['Quel terme est l’expression polie et neutre pour « old people » ?', 'senior citizens', 'oldies;old-timers;wrinklies', '« Senior citizens » est poli. Les autres termes sont familiers, voire péjoratifs.', 'n'],
    ['Quel verbe est le plus soutenu pour dire « partir » ?', 'to depart', 'to leave;to head off;to take off', '« Depart » est formel (horaires, annonces). « Leave » est neutre ; « head off » et « take off » sont familiers dans ce sens.', 'h'],
    ['Dans un rapport officiel, quelle phrase est la plus appropriée ?', 'The results indicate a significant increase.', 'The results show things went up a lot.;Loads more people came, apparently.;It’s kind of gone up heaps.', 'Registre de rapport : vocabulaire précis (« indicate », « significant »), sans familiarités.', 'h'],
    ['Quel mot est de l’argot britannique pour « argent » ?', 'dosh', 'funds;capital;currency', '« Dosh » est familier (GB). Les autres sont neutres ou techniques.', 'n'],
    ['« Gonna » et « wanna » sont…', 'des formes orales familières de « going to » et « want to »', 'des fautes toujours interdites à l’oral;des formes soutenues de l’écrit;de l’anglais médiéval', 'Très courantes à l’oral, elles sont à éviter à l’écrit formel.', 'h'],
    ['Quelle phrase exprime un désaccord de la façon la plus diplomatique ?', 'I see your point, but I’m not entirely convinced.', 'You’re totally wrong.;That’s a stupid idea.;No way!', 'On reconnaît le point de vue de l’autre avant de nuancer : c’est la stratégie diplomatique.', 'h'],
    ['Quelle formulation est la plus soutenue : « We have ___ funds to complete the project. »', 'sufficient', 'loads of;heaps of;tons of', '« Sufficient » est soutenu. « Loads of », « heaps of » et « tons of » sont familiers.', 'n'],
    ['Quel verbe est le plus soutenu pour dire « commencer » ?', 'commence', 'kick off;start;get going', '« Commence » est très formel (cérémonies, textes officiels).', 'n'],
    ['Quelle phrase est typique d’un contrat ?', 'The aforementioned party shall comply with these terms.', 'The guy we talked about has to do it.;That person should maybe do it.;They’ll sort it out.', 'Langue juridique : « aforementioned » (susmentionné), « shall » (obligation).', 'nu'],
    ['Quel verbe soutenu remplace « help » dans une lettre officielle ?', 'assist', 'give a hand;pitch in;chip in', '« Assist » est formel. Les autres expressions sont familières.', 'h'],
    ['Quelle expression familière signifie « s’ennuyer à mourir » ?', 'to be bored stiff', 'to be weary;to be jaded;to be ennuied', '« Bored stiff » (ou « bored to death ») est familier. « Weary » = las, « jaded » = blasé ; « ennuied » n’existe pas.', 'n'],
    ['Dans une lettre formelle : « We ___ your letter of 3 May. »', 'received', 'got;grabbed;picked up', '« Receive » est l’équivalent soutenu de « get ».', 'h']
  ],
  reading: [
    {
      title: 'The interview', tiers: 'hnu',
      text: 'When Clara walked out of the interview, she was smiling, but by the time she reached the car park the smile had faded. She replayed every answer in her head. The panel had nodded politely, yet nobody had asked a single follow-up question. “They didn’t even ask about my portfolio,” she muttered, throwing her bag onto the passenger seat.',
      quiz: [
        ['How does Clara probably feel about the interview?', 'She doubts it went well', 'She is sure she got the job;She is angry because the panel was rude;She regrets applying for any job', 'Son sourire s’efface, elle repasse ses réponses et remarque l’absence de questions de relance : elle doute de sa prestation. Le jury a été poli, donc pas « rude ».'],
        ['Why does the lack of follow-up questions worry her?', 'It may suggest the panel was not really interested', 'It means the interview was too long;It proves she answered badly;It shows the panel was impolite', 'Des questions de relance montrent de l’intérêt ; leur absence le suggère sans le prouver (« proves » est trop fort).']
      ]
    },
    {
      title: 'The bakery', tiers: 'hn',
      text: 'The sign in the bakery window read: “Bread baked fresh every morning.” Underneath, in smaller letters, someone had added: “Yesterday’s loaves half price.” Mr Patel, who had run the shop for thirty years, liked to say that nothing in his bakery was ever wasted — not even his mistakes.',
      quiz: [
        ['What can we infer about the bakery?', 'It sells unsold bread from the previous day at a discount', 'It never has any bread left at the end of the day;It only bakes bread once a week;It throws away old bread every evening', '« Yesterday’s loaves half price » : les pains de la veille sont vendus à moitié prix.'],
        ['What does Mr Patel’s saying suggest about him?', 'He has a practical, slightly humorous attitude', 'He never makes mistakes;He is ashamed of his bakery;He wants to close the shop', '« Not even his mistakes » est une pointe d’humour : il reconnaît ses erreurs et en tire parti.']
      ]
    },
    {
      title: 'An email from Joanna', tiers: 'hn',
      text: 'Dear team, as you know, the deadline for the Hartley project has been moved forward by a week. I appreciate that this is far from ideal. I would therefore ask that all non-essential meetings be postponed until further notice. Coffee and biscuits will, of course, remain essential. Best, Joanna',
      quiz: [
        ['What is the main purpose of the email?', 'To free up time because the deadline is now earlier', 'To cancel the Hartley project;To organise a coffee break;To complain about the team’s work', 'La date limite est avancée (« moved forward ») ; les réunions non essentielles sont reportées pour gagner du temps.'],
        ['What is the tone of the last sentence?', 'Light-hearted', 'Threatening;Sarcastic about the team’s laziness;Strictly formal', 'Joanna ajoute une touche d’humour pour adoucir une mauvaise nouvelle.']
      ]
    },
    {
      title: 'Full of character', tiers: 'hnu',
      text: 'The estate agent described the cottage as “full of character” and “ideal for someone with vision”. When we arrived, we understood why: the roof sagged, several windows were boarded up, and a tree was growing through what had once been the kitchen.',
      quiz: [
        ['What do the agent’s phrases actually mean?', 'The house needs a lot of repair work', 'The house is modern and luxurious;The house is haunted;The house is too small', 'Ces formules sont des euphémismes d’agent immobilier pour une maison en très mauvais état.'],
        ['What is the writer’s attitude?', 'Ironic', 'Enthusiastic;Frightened;Indifferent', 'Le narrateur souligne l’écart entre les formules flatteuses et la réalité : le ton est ironique.']
      ]
    },
    {
      title: 'The volunteer', tiers: 'nu',
      text: 'Every Saturday for ten years, Mrs Okafor had run the town’s reading club for children. She never asked for payment, and she rarely mentioned it to anyone. So when the council announced it was naming the new library after her, she was the only person in town who seemed genuinely surprised.',
      quiz: [
        ['Why was Mrs Okafor surprised?', 'She was modest and did not seek recognition', 'She had never visited the library;She disliked children;She wanted to be paid', 'Elle ne demandait rien et en parlait rarement : elle est modeste et n’attendait aucune reconnaissance.'],
        ['What does the sentence suggest about the other people in town?', 'They were not surprised because they thought she deserved it', 'They were also shocked;They were angry;They did not know her', '« The only person who seemed genuinely surprised » : les autres trouvaient l’hommage naturel.']
      ]
    },
    {
      title: 'Scattered showers', tiers: 'hnu',
      text: 'Forecasters had promised “a few scattered showers”. By noon, the high street was a river, the football match had been abandoned, and the town’s only umbrella shop had sold out. “Scattered,” muttered the shop owner, counting his takings, “is not the word I would use.”',
      quiz: [
        ['What does the shop owner imply?', 'The rain was much heavier than forecast', 'The forecast was accurate;The rain had not started yet;He was unhappy about selling umbrellas', 'Il conteste le mot « scattered » (éparses) : la pluie a été bien plus forte.'],
        ['How did the day go for his business?', 'Very well, as he sold all his umbrellas', 'Badly, as nobody came;He had to close because of the flood;Nothing changed', '« Had sold out » et « counting his takings » : il a tout vendu.']
      ]
    },
    {
      title: 'Grandpa’s letter', tiers: 'nu',
      text: 'Grandpa’s letters were always short. This one said only: “Garden’s fine. Tomatoes early this year. Your grandmother would have loved them.” Anna read it three times before folding it carefully and putting it in the drawer with the others.',
      quiz: [
        ['What can we infer about Anna’s grandmother?', 'She has probably died', 'She is on holiday;She dislikes tomatoes;She wrote the letter', '« Would have loved them » (conditionnel passé) laisse entendre qu’elle n’est plus là.'],
        ['Why does Anna read the letter three times?', 'It moves her emotionally', 'It is hard to read;She does not understand English;It is very long', 'La lettre est très courte : si elle la relit, c’est qu’elle est émue. Elle la garde précieusement avec les autres.']
      ]
    },
    {
      title: 'A company announcement', tiers: 'nu',
      text: 'Following a comprehensive review, the board has decided to “streamline” the customer service department. Staff affected by the changes will be contacted individually. The company remains committed to its employees.',
      quiz: [
        ['What is “streamline” most likely a euphemism for here?', 'Cutting jobs', 'Hiring more staff;Painting the offices;Giving everyone a pay rise', '« Staff affected… will be contacted individually » : on annonce des suppressions de postes sans le dire.'],
        ['Why does the announcement say the company “remains committed to its employees”?', 'To soften bad news', 'To announce a party;To introduce a new director;To explain a technical problem', 'Formule rassurante typique pour atténuer une mauvaise nouvelle.']
      ]
    },
    {
      title: 'Just to be safe', tiers: 'hn',
      text: 'Tom had cycled to work every day for five years and had never once been late. On the morning of his big presentation, however, he took the car “to be safe”. He spent forty minutes in a traffic jam and walked into the meeting room just as his boss was apologising for his absence.',
      quiz: [
        ['What is ironic about the situation?', 'The “safe” choice made him late', 'He was late on his bike;He forgot his presentation;His boss was also late', 'Il prend la voiture pour être sûr d’être à l’heure… et c’est justement ce qui le met en retard.'],
        ['What had his boss probably assumed?', 'That Tom was not coming', 'That Tom was already in the room;That Tom had been promoted;That the meeting was cancelled', 'Le patron s’excusait de son absence : il pensait que Tom ne viendrait pas.']
      ]
    },
    {
      title: 'A book review', tiers: 'nu',
      text: 'The author clearly did an enormous amount of research, and it shows — on every single one of the novel’s 800 pages. Readers who enjoy lengthy descriptions of seventeenth-century shipbuilding will be in heaven. Others may find their attention drifting somewhere around chapter four.',
      quiz: [
        ['What is the reviewer’s overall opinion?', 'The book is well researched but too detailed for most readers', 'It is the best novel of the year;The author did no research;The book is too short', 'Le compliment sur les recherches est suivi d’une critique : trop de détails pour la plupart des lecteurs.'],
        ['“It shows — on every single one of the novel’s 800 pages” is…', 'a polite criticism of excessive detail', 'pure praise;a complaint about the price;a description of the cover', 'Ironie : la recherche « se voit » partout, c’est-à-dire qu’elle alourdit tout le livre.']
      ]
    },
    {
      title: 'The neighbour', tiers: 'hnu',
      text: 'Mrs Hughes watered her plants at exactly seven every evening. So when her curtains were still closed at noon and the milk bottles were piling up on her doorstep, the neighbours exchanged worried glances. Mr Davies, who hadn’t spoken to her in years, was the first to knock.',
      quiz: [
        ['Why were the neighbours worried?', 'Mrs Hughes’s routine had been broken', 'Her plants were dying;She had moved house;She had complained about the noise', 'Rideaux fermés à midi et bouteilles de lait accumulées : sa routine si régulière est rompue.'],
        ['What does Mr Davies’s action suggest?', 'His concern was stronger than their past disagreement', 'He wanted to borrow milk;He was angry with her;He did not know her', 'Ils ne se parlaient plus depuis des années, mais c’est lui qui frappe le premier.']
      ]
    },
    {
      title: 'A museum sign', tiers: 'hn',
      text: 'Visitors are kindly reminded that the paintings are over three hundred years old and have survived two wars, a flood and a fire. They are unlikely to survive your fingers.',
      quiz: [
        ['What is the purpose of the sign?', 'To stop visitors touching the paintings', 'To describe the history of the museum;To ask for donations;To warn visitors about a fire', 'La chute « unlikely to survive your fingers » demande de ne pas toucher les tableaux.'],
        ['What is the tone of the sign?', 'Humorous but firm', 'Angry and insulting;Sad;Neutral and technical', 'Le panneau utilise l’humour pour faire passer une consigne ferme.']
      ]
    },
    {
      title: 'A train announcement', tiers: 'hn',
      text: 'We apologise for the delay to this service. This is due to leaves on the line. We expect to arrive in London approximately forty minutes late. Passengers with connecting trains are advised to speak to a member of staff.',
      quiz: [
        ['Who should talk to a member of staff?', 'People who need to catch another train', 'Everyone on the train;People travelling without tickets;People who want a refund for food', '« Passengers with connecting trains » = les voyageurs qui ont une correspondance.'],
        ['What can be inferred from the announcement?', 'Some passengers may miss their next train', 'The train will be cancelled;The train will arrive early;There are no staff on the train', 'Avec quarante minutes de retard, certaines correspondances risquent d’être manquées.']
      ]
    },
    {
      title: 'A job advert', tiers: 'hnu',
      text: 'We are looking for a dynamic team player who thrives under pressure and is comfortable working flexible hours, including some weekends. A competitive salary is offered.',
      quiz: [
        ['What does “thrives under pressure” suggest about the job?', 'It can be stressful', 'It is very relaxing;It is part-time;It involves diving', 'Si l’on cherche quelqu’un qui s’épanouit sous pression, c’est que le poste comporte de la pression.'],
        ['“Flexible hours, including some weekends” probably means…', 'the employee may have to work at irregular times', 'the employee can choose never to work;the office is closed at weekends;the job is only at weekends', '« Flexible » du point de vue de l’employeur : horaires variables, y compris certains week-ends.']
      ]
    },
    {
      title: 'Camping diary', tiers: 'nu',
      text: 'Day 12. The novelty of camping has well and truly worn off. It has rained for nine of the twelve days. My sleeping bag has not been dry since Tuesday. Dad insists this is “character-building”. My character, I feel, is now fully built.',
      quiz: [
        ['How does the writer feel about the camping trip?', 'Fed up', 'Delighted;Frightened;Proud', '« The novelty has worn off », pluie, sac de couchage mouillé : il en a assez.'],
        ['What does “My character, I feel, is now fully built” imply?', 'The writer has had enough and wants the trip to end', 'The writer wants to stay longer;The writer is happy to have improved;The writer is building a shelter', 'Ironie : il reprend la formule du père pour dire qu’il en a assez « vécu ».']
      ]
    }
  ],
  listening: [
    ['I would have come to your party if I hadn’t had to work late.', 'Did the speaker go to the party?', 'No, because they had to work', 'Yes, but late;Yes, after work;No, because they forgot', 'Irréel du passé : « would have come… if I hadn’t had to work » → la personne n’est pas venue à cause du travail.', 'hnu'],
    ['Hardly anyone turned up to the meeting, which was a shame given how much effort went into organising it.', 'How many people came to the meeting?', 'Very few', 'Nobody at all;Almost everyone;Too many', '« Hardly anyone » = presque personne, c’est-à-dire très peu de monde (mais pas zéro).', 'hn'],
    ['Frankly, I’d rather walk than take that bus again.', 'What does the speaker think of the bus?', 'They had a bad experience with it', 'It is faster than walking;They have never taken it;It is their favourite way to travel', '« Again » montre qu’ils l’ont déjà pris ; « I’d rather walk » exprime leur mécontentement.', 'hn'],
    ['She’s not exactly the most punctual person I know.', 'What does the speaker mean?', 'She is often late', 'She is always on time;She is the most punctual person;She never comes', 'Litote (understatement) : « not exactly the most punctual » = elle est souvent en retard.', 'hnu'],
    ['Had the ambulance arrived five minutes later, things could have turned out very differently.', 'What happened?', 'The ambulance arrived in time', 'The ambulance was five minutes late;Nobody called an ambulance;The ambulance never arrived', 'Inversion conditionnelle (« Had the ambulance arrived later ») : hypothèse irréelle, donc l’ambulance est arrivée à temps.', 'nu'],
    ['I’m afraid the position has already been filled, but we’ll keep your CV on file.', 'Did the candidate get the job?', 'No, someone else got it', 'Yes, they start soon;Not yet, there is another interview;Yes, but part-time', '« The position has already been filled » = le poste est déjà pourvu.', 'hn'],
    ['It’s not that I don’t like him; I just don’t trust him with money.', 'What is the speaker’s view of him?', 'They like him but don’t trust him with money', 'They dislike him completely;They trust him totally;They often lend him money', '« It’s not that I don’t like him » = je l’aime bien ; la réserve porte seulement sur l’argent.', 'hn'],
    ['You couldn’t have picked a worse day to go to the beach.', 'What does the speaker imply?', 'It was a very bad day for the beach', 'It was the perfect day;The beach was closed forever;They wanted to come too', '« Couldn’t have picked a worse day » = impossible de choisir un plus mauvais jour.', 'hnu'],
    ['The concert was supposed to start at eight, but by nine the band still hadn’t come on stage.', 'When did the band come on stage?', 'After nine', 'At eight;Before nine;At half past eight', '« By nine the band still hadn’t come on stage » : ils sont montés sur scène après neuf heures.', 'hn'],
    ['Mind you, the food wasn’t bad — it’s just that we waited over an hour for it.', 'What was the main problem at the restaurant?', 'The slow service', 'The terrible food;The high prices;The rude waiter', '« The food wasn’t bad » ; le problème, c’est l’attente de plus d’une heure.', 'hn'],
    ['If it weren’t for the traffic, I’d cycle to work every day.', 'Does the speaker cycle to work every day?', 'No, because of the traffic', 'Yes, every day;Yes, but only when there is no traffic;No, because they don’t have a bike', 'Irréel du présent : « If it weren’t for the traffic » → à cause de la circulation, la personne ne le fait pas.', 'nu'],
    ['Needless to say, the second meeting was even longer than the first.', 'What was the first meeting like?', 'Long', 'Short;Cancelled;Enjoyable', '« Even longer than the first » implique que la première réunion était déjà longue.', 'nu'],
    ['I’d have lent you the money, had you only asked.', 'Why didn’t the speaker lend the money?', 'Because the person didn’t ask', 'Because they had no money;Because they don’t trust the person;Because the person refused', '« Had you only asked » (si seulement tu avais demandé) : la personne n’a pas demandé.', 'nu'],
    ['He’s been meaning to fix that leaking tap for months.', 'Has he fixed the tap?', 'No, not yet', 'Yes, months ago;Yes, today;The tap doesn’t leak', '« Been meaning to » = avoir l’intention de faire depuis longtemps, sans l’avoir fait.', 'nu'],
    ['By all means borrow my car, but bring it back with a full tank.', 'What is the speaker’s attitude?', 'Happy to lend the car, with a condition', 'Refuses to lend the car;Wants to sell the car;Asks to borrow a car', '« By all means » = bien sûr, volontiers ; « but… full tank » ajoute une condition.', 'hn'],
    ['The film was so predictable that I guessed the ending within the first ten minutes.', 'What did the speaker think of the film?', 'It was predictable', 'It was full of surprises;It was too short;It had no ending', '« So predictable that I guessed the ending » : aucune surprise.', 'h']
  ]
};
