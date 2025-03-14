Première observation de Bertrand : deux joueurs de Liverpool ont tendance à tirer leurs penaltys très souvent du même côté.
Réflexion logique de Gigi : "Je prends acte de cette tendance et décide donc de plonger de ce côté". 
Question de Bertrand :
"Les joueurs de Liverpool ont-ils eu tort de persister dans leur tendance ? Fallait-il changer de côté ?" 
Mais Gigi, s'il est intelligent, ne peut-il pas se douter que les joueurs de Liverpool vont décider de changer de côté ? Il faut donc mieux continuer à tirer du même côté ? Oui, mais si Gigi sait que les joueurs de Liverpool savent qu'il sait ?

Ce phénomène est classique en théorie des jeux, on appelle ça le levelling. C'est notamment très courant au jeu du pierre/feuille/ciseau et au poker. Je sais que tu sais que je sais que tu sais que je ne vais pas bluffer. Donc je bluff. On appelle ça le levelling car on essaie de deviner à quel niveau de réflexion se situe notre adversaire, pour se situer soi-même au niveau juste au dessus.
En réalité, cette manière de raisonner n'amène pas à grand chose. A moins d'avoir affaire à un adversaire dont on sait qu'il est stupide et raisonne au premier niveau, le fait de réussir à se situer au niveau de réflexion juste au dessus de celui de son adversaire relève surtout du hasard.

Revenons au sujet des penaltys. 
Nous avons deux joueurs, un gardien et un tireur. Simplifions le problème et excluons les cas où le tireur attend que le gardien plonge d'un côté pour le prendre à contre-pieds (les tireurs comme Neymar ou Vitinha). Excluons également la possibilité pour le tireur puisse tirer au centre. Supposons donc que chacun choisisse un côté, le gauche ou le droit. Le gardien veut partir du côté où le tireur tire. Le tireur veut tirer du côté où le gardien ne plonge pas.

Je propose dans cet article de me concentrer sur la stratégie adoptée par le gardien. Le raisonnement concernant la stratégie du joueur est parfaitement symétrique. 
Explorons tout d'abord quelques stratégies possibles très simples et intuitives et jugeons de leur efficacité.

Stratégie 1 : plonger à gauche 100% du temps.
Efficace si le tireur tire à gauche une bonne partie du temps. Problème, cette stratégie est très fortement exploitable. En théorie des jeux une stratégie est dite exploitable lorsque l'adversaire peut lui-même adapter sa propre stratégie pour améliorer son résultat. Dans le cas qui nous concerne, il est évident que le tireur n'aura qu'a décider de tirer 100% du temps à droite pour tirer 100% du temps du côté opposé au choix du gardien.

Stratégie 2 : plonger à droite 100% du temps.
Même problème que la Stratégie 1.

Stratégie 3 : plonger 50% du temps à gauche et 50% du temps à droite.
C'est déjà plus intéressant. Cette stratégie semble à première vue moins exploitable. En effet, le tireur peut adopter la stratégie qu'il veut, il tirera toujours 50% du temps du côté du gardien.
Avec cette stratégie, il semble que l'on atteigne ce qu'on appelle en théorie des jeux l'équilibre de Nash. Une situation dans laquelle notre adversaire n'a aucun intérêt à modifier sa stratégie. 

C'est le moment où vous vous dites que j'ai écrit tout ça juste pour en conclure qu'un gardien n'a finalement qu'à prendre une pièce de monnaie et faire un coin flip : face je plonge à gauche, pile je plonge à droite.
Non, on va compliquer un peu les choses.

Si les joueurs ont parfois une tendance à tirer plus souvent d'un côté que de l'autre, il y a sans doutes une raison. 
Peut-être sont ils plus à l'aise, peut-être que leur technique/gestuelle est plus efficace pour un côté que pour l'autre. Souvent, des joueurs ont plus de puissance lorsqu'ils tirent côté fermé (à droite pour un gaucher, à gauche pour un droitier).
Supposons qu'un joueur, lorsqu'il tire à droite et que le gardien plonge également à droite, marque 90% du temps. Côté gauche, supposons qu'il soit moins à l'aise, avec un taux de réussite de seulement 60% quand le gardien est également parti à gauche.
On se rend compte que notre stratégie de plonger 50% à gauche et 50% à droite n'est plus si bonne que ça. En effet, dans ce cas, le tireur pourra adapter sa stratégie en choisissant de tirer 100% de son bon côté, le droit. 
Il marquera alors 95% du temps. 50%*100%=50% (cas où le gardien part du côté gauche) + 50%*90%=45% (cas où le gardien part du côté droit)
S'il choisissait de tirer 100% de son mauvais côté à gauche, son taux de réussite descendrait à 80%. 50%*100% + 50%*60%.

Il n'y a plus d'équilibre de Nash. Le tireur, face à notre stratégie, peut adopter une stratégie plus efficace qu'une autre, il peut donc exploiter notre stratégie. 
Que faire alors ? 50-50, c'est pas bon. 100% à droite, 0% à gauche, c'est pas bon non plus. Intuitivement, on imagine que le gardien doive plonger un pourcentage du temps à droite compris entre 50 et 100%. (Spoiler, oui)
Mais à quelle fréquence exactement ?

Résolution du problème :
Fg : fréquence à laquelle le gardien va plonger à gauche
Fd : fréquence à laquelle le gardien va plonger à droite

Ce sont les deux valeurs que l'on cherche, puisque ces deux valeurs définissent la stratégie du gardien.

Mg : probabilité que le joueur marque lorsqu'il tire à gauche ET que le gardien plonge à gauche (60% dans mon exemple plus haut)
Md : probabilité que le joueur marque lorsqu'il tire à droite ET que le gardien plonge à droite (90% dans mon exemple plus haut)

Rappel :  on cherche Fg et Fd tels que le tireur n'a aucun intérêt à changer de stratégie.

Si le tireur tire à gauche 100% du temps, il marque avec une probabilité de :
Fd*100% + Fg*Mg

Si le tireur tire à droite 100% du temps, il marque avec une probabilité de :
Fg*100% + Fd*Md

Le tireur n'a aucun intérêt à changer de stratégie si ces deux probabilités sont égales.
Donc si :
Fd*100% + Fg*Mg = Fg*100% + Fd*Md

De plus on sait que :
Fg + Fd = 1

On peut donc résoudre ce système de deux équations à deux inconnues pour trouver les valeurs de Fg et Fd qui forment un équilibre de Nash.

Je vous épargne le calcul, mais on obtient :
Fd = (1-Mg)/(2-Mg-Md)
Fg = (1-Md)/(2-Mg-Md)

Dans mon exemple, avec Mg=0.6 et Md=0.9, on obtient Fg=0.25 et Fd=0.75.

