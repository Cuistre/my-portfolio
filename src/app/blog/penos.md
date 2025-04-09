# Les penaltys et la théorie des jeux : quelle stratégie pour le gardien ?

Mercredi 12 Mars 2025. Moins de 24 heures après la qualification complètement folle du PSG contre Liverpool en 1/8 de finale de la Ligue des Champions, l’euphorie est loin d’être retombée. Et le groupe WhatsApp familial consacré au sport (et au PSG) est toujours en ébullition. Les 463 messages de la veille n’ont manifestement pas suffi à faire le tour de cette soirée inoubliable, de ces longues minutes de souffrance, acculés dans notre surface de réparation à subir les vagues incessantes de Liverpool, de cette prolongation irrespirable et de cette séance de tirs au but libératrice.

Les messages continuent de fuser, car NON, tout n’a pas été dit. Mon oncle Bertrand s’interroge sur la performance XXL de Gianluigi Donnarumma (que nous appellerons Gigi dans la suite de cet article) lors de la séance de tirs au but, et nous partage le screenshot de ce tweet.

![Ma photo](/images/nunezjones.png)

Je me suis dit que c’était une bonne occasion d’étudier les penaltys du point de vue de la **théorie des jeux**. Alors, allons-y. La théorie des jeux peut-elle nous aider à maximiser notre chance de marquer un penalty, ou d’en arrêter un, si on est un gardien ?
SPOILER : OUI !

## Introduction : une observation qui pose question

Mon oncle observe que deux joueurs de Liverpool tirent leurs penaltys très souvent du même côté. Gigi, le gardien, peut avoir le raisonnement suivant : « Je remarque cette tendance, je peux donc plonger de ce côté pour maximiser mes chances d’arrêt. »

Mon oncle se demande alors : « Les joueurs ont-ils eu tort de persister dans leur habitude ? N’auraient-ils pas dû changer de côté ? » Mais Gigi, alors, pourrait anticiper ce changement et ajuster son plongeon en conséquence. Oui, mais si les tireurs savent que Gigi sait… où cela s’arrête-t-il ?

La remarque montre bien les limites du raisonnement de David Wall exposé dans son tweet. David Wall croit que Gigi savait où les tireurs allaient tirer. En réalité, il n'en savait rien. Nunez aurait très bien pu se dire "Allez, c'est le peno de ma vie, je sais que Gigi regarde les stats, je vais décider de changer mes habitudes." Le fait qu'un joueur ait tiré 85% de ses penaltys à droite ne signifie pas qu'il y a 85% de probabilités qu'il tire encore à droite dans une situation précise. Les 85% de penaltys tirés à droite, c'est une statistique. Pas une probabilité. Ce n'est pas la même chose. C'est lié, évidemment, mais ce n'est pas la même chose.

Ce va-et-vient mental (il sait que je sais qu'il sait que je sais...) est un phénomène classique en théorie des jeux, appelé **levelling** . On le retrouve dans des jeux comme pierre-feuille-ciseaux ou le poker : « Je sais que tu sais que je sais que tu sais que tu vas jouer feuille… » Par exemple, au poker, si je bluffe, c’est parce que je pense que tu penses que je ne bluffe pas. Le levelling consiste à deviner le niveau de réflexion de l’adversaire pour se placer juste au-dessus. Mais en pratique, sauf face à un adversaire prévisible (par exemple, quelqu’un qui raisonne au premier degré), ce raisonnement tourne vite en boucle et dépend beaucoup du hasard.

Revenons aux penaltys. Dans cet article, nous allons analyser la stratégie optimale du gardien face à un tireur, en utilisant la théorie des jeux. Nous nous concentrerons ici sur le gardien, mais le raisonnement pour le tireur est parfaitement symétrique.

## Simplification du problème

Pour rendre l’analyse claire, simplifions le scénario :

=> Le tireur choisit entre tirer à gauche ou à droite (pas au centre).\
=> Le gardien choisit de plonger à gauche ou à droite.\
=> Le tireur marque à 100% si le gardien plonge du mauvais côté.\
=> Excluons les cas où le tireur attend la réaction du gardien pour le prendre à contre-pied (ce que font certains joueurs comme Neymar ou Vitinha).

## Objectifs : recherche de la stratégie optimale

=> Le gardien veut plonger du côté où le tireur tire.\
=> Le tireur veut tirer là où le gardien ne plonge pas.

### C'est quoi, une stratégie ?

Une stratégie consiste à établir la fréquence à laquelle je vais plonger à gauche, et la fréquence à laquelle je vais plonger à droite. Par définition, la somme de ces deux fréquences est égale à 1 (100%)
Attention, on parle bien ici de fréquence, c'est très important. Si vous me dites "Ma stratégie est de plonger à gauche", je traduis ça par : "je vais plonger 100% à gauche et 0% à droite".

### C'est quoi une stratégie optimale ?

Attention, ça se corse légèrement ici, mais ne fuyez pas tout de suite ! Une stratégie optimale, c’est celle qui fait que, même si le tireur choisit la meilleure réponse possible contre moi, il marque le moins souvent possible. Imaginons : si je choisis de plonger toujours à gauche (stratégie A), le tireur peut tirer toujours à droite et marquer 100% du temps. Mon "pire scénario" est donc 100% de buts encaissés. Maintenant, si je plonge 80% à gauche et 20% à droite (stratégie B), le tireur peut choisir de tirer à droite 100% du temps, mais il ne marquera pas 100% du temps cette fois. Entre A et B, B est donc meilleure. L’idée, c’est de tester toutes mes stratégies possibles (A, B, C, etc.), de voir à chaque fois ce que le tireur peut faire de pire contre moi, et de choisir la stratégie où ce "pire" est le moins grave. En gros, je veux limiter les dégâts au maximum, même face à un tireur qui s’adapte parfaitement à mon jeu. C’est cette stratégie qu’on va calculer maintenant !

## Stratégies simples et leurs limites

Explorons d’abord quelques stratégies intuitives pour le gardien et évaluons leur efficacité.

### Stratégie 1 : Plonger à gauche 100% du temps

=> **Efficacité** : Si le tireur tire souvent à gauche, cela peut marcher temporairement.\
=> **Problème** : Comme vu plus haut, cette stratégie est **exploitable**. En théorie des jeux, une stratégie est exploitable si l’adversaire peut l’utiliser à son avantage en adaptant son propre choix. Ici, le tireur peut simplement tirer à droite 100% du temps et marquer à chaque coup. Résultat : échec total pour le gardien.

### Stratégie 2 : Plonger à droite 100% du temps

=> **Efficacité** : Même logique que la stratégie 1, inversée.\
=> **Problème** : Identique. Si le tireur tire toujours à gauche, le gardien perd systématiquement.

### Stratégie 3 : Plonger 50% à gauche, 50% à droite (pile ou face)

=> **Efficacité** : Plus prometteur. Si le gardien plonge aléatoirement avec une probabilité de 50% de chaque côté, le tireur marque 50% du temps, peu importe sa stratégie (100% à gauche, 100% à droite, ou un mélange).

=> **Analyse** : Cette stratégie semble atteindre un **équilibre de Nash**, un concept clé en théorie des jeux. À l’équilibre de Nash, aucun joueur n’a intérêt à changer sa stratégie unilatéralement si l’autre maintient la sienne. Ici, si le tireur ajuste son choix, il ne peut pas faire mieux que 50% de réussite face à un gardien imprévisible à 50-50.

"Heu, attends, tu as écrit tout ça pour nous expliquer que le gardien a intérêt à plonger 50% à droite et 50% à gauche ? Merci Sherlock !"

Ok, ok ! On va compliquer un peu les choses ;).

## Une complication réaliste : l’asymétrie des tireurs

Dans la vraie vie, les tireurs ne sont pas des robots. Leurs frappes n'ont pas nécessairement la même efficacité selon qu'ils tirent à droite ou à gauche. En général, les joueurs sont un peu plus à l'aise lorsqu'ils croisent leur tir, un droitier lorsqu'il frappe à gauche. Supposons que notre tireur de Liverpool ait une préférence ou une meilleure efficacité d’un côté :

=> S’il tire à droite et que le gardien plonge à droite, il marque 90% du temps (son « bon côté »).\
=> S’il tire à gauche et que le gardien plonge à gauche, il marque 60% du temps (son « mauvais côté »).\
=> Si le gardien plonge du mauvais côté, le tireur marque 100%, comme avant.

Reprenons la stratégie 50-50 :

=> Si le tireur tire 100% à droite (son bon côté) :\
==> Gardien à gauche (50%) : tireur marque 100% → 50%.\
==> Gardien à droite (50%) : tireur marque 90% → 45%.\
==> Total : 50% + 45% = **95% de réussite**.

=> Si le tireur tire 100% à gauche (mauvais côté) :\
==> Gardien à gauche (50%) : 60% → 30%.\
==> Gardien à droite (50%) : 100% → 50%.\
==> Total : 30% + 50% = **80% de réussite**.

Problème : le tireur peut exploiter la stratégie 50-50 en tirant toujours à droite, augmentant sa réussite à 95%. L’équilibre de Nash est rompu, car le tireur a intérêt à ajuster sa stratégie. Le 50-50 n’est plus optimal.

## Trouver l’équilibre de Nash ajusté

Puisque le tireur a une asymétrie (90% de réussite à droite, 60% de réussite à gauche), le gardien doit adapter sa stratégie. Intuitivement, on se dit que le tireur va privilégier son bon côté, et donc tirer plus souvent à droite. Aussi le gardien devrait-il plonger plus souvent à droite pour réduire les chances de but. Mais à quelle fréquence exacte ? Existe-t-il un moyen de trouver cette fréquence optimale, ou doit-on y aller au doigt mouillé ?

### Notations

=> Fg : fréquence où le gardien plonge à gauche.\
=> Fd : fréquence où le gardien plonge à droite (Fg + Fd = 1).\
=> Mg : probabilité que le tireur marque à gauche si le gardien est à gauche (60% = 0.6).\
=> Md : probabilité que le tireur marque à droite si le gardien est à droite (90% = 0.9).

### Objectif : rendre le tireur indifférent

À l’équilibre de Nash, le tireur doit avoir le même taux de réussite qu’il tire à gauche ou à droite. Sinon, il favorisera son meilleur côté. Calculons la probabilité de marquer dans chaque cas :

=> **Tireur tire à gauche 100%** :\
 Fd _ 100% + Fg _ Mg\
 (100% si le gardien est à droite, Mg si à gauche).\
=> **Tireur tire à droite 100%** :\
 Fg _ 100% + Fd _ Md\  
 (100% si le gardien est à gauche, Md si à droite).

Pour l’équilibre, ces deux probabilités doivent être égales. On a donc :
Fd _ 100% + Fg _ Mg = Fg _ 100% + Fd _ Md.

### Résolution

Équation :  
Fd + Fg _ Mg = Fg + Fd _ Md  
Avec Fg + Fd = 1, substituons Fd = 1 - Fg :  
(1 - Fg) + Fg _ Mg = Fg + (1 - Fg) _ Md  
Développons :  
1 - Fg + Fg _ Mg = Fg + Md - Fg _ Md  
Réarrangeons :  
1 - Fg + Fg _ Mg - Fg - Md + Fg _ Md = 0  
1 - Md + Fg _ (Mg - 1 - 1 + Md) = 0  
1 - Md + Fg _ (Mg + Md - 2) = 0  
Fg \* (Mg + Md - 2) = Md - 1  
Fg = (1 - Md) / (2 - Mg - Md)  
Puis Fd = 1 - Fg = (1 - Mg) / (2 - Mg - Md).

### Application

Avec Mg = 0.6 et Md = 0.9 :  
Fg = (1 - 0.9) / (2 - 0.6 - 0.9) = 0.1 / 0.5 = 0.2 (20%)  
Fd = (1 - 0.6) / (2 - 0.6 - 0.9) = 0.4 / 0.5 = 0.8 (80%).

Vérification :

=> Tireur à gauche : 0.8 _ 100% + 0.2 _ 60% = 0.8 + 0.12 = 0.92 (92%).\
=> Tireur à droite : 0.2 _ 100% + 0.8 _ 90% = 0.2 + 0.72 = 0.92 (92%).  
 Égalité ! Le tireur marque 92% dans les deux cas, donc il est indifférent.

## Pourquoi l’équilibre de Nash est crucial pour le gardien ?

Atteindre l’équilibre de Nash est essentiel pour le gardien car :

1. **Minimisation des pertes** : Face à un tireur rationnel, c’est la stratégie qui limite au maximum le taux de buts encaissés (ici, 92%). Toute déviation (ex. 50-50) augmente ce taux (95% si le tireur exploite).
2. **Imprévisibilité contrôlée** : En ajustant ses fréquences (20% gauche, 80% droite), le gardien reste imprévisible tout en exploitant l’asymétrie du tireur.
3. **Stabilité** : À l’équilibre, le tireur n’a pas d’incitation à changer de stratégie, ce qui protège le gardien d’une exploitation systématique.

Sans cet équilibre, le tireur pourrait adapter son jeu et marquer plus souvent, comme dans le cas 50-50.

## Conclusion

Face à un tireur asymétrique (90% de réussite à droite, 60% de réussite à gauche), le gardien doit plonger 20% à gauche et 80% à droite pour atteindre l’équilibre de Nash. Ce n’est pas un simple pile ou face, mais une stratégie calculée qui neutralise l’avantage du tireur. En pratique, cela nécessite d’observer les tendances et d’utiliser des probabilités ajustées. La théorie des jeux transforme ainsi une intuition en une arme mathématique pour le gardien !
