# Les penaltys et la théorie des jeux : quelle stratégie pour le gardien ?

## Introduction : une observation qui pose question

![Ma photo](/images/nunezjones.png)

Bertrand observe que deux joueurs de Liverpool tirent leurs penaltys très souvent du même côté. Gigi, le gardien, réfléchit : « Si je remarque cette tendance, je peux plonger de ce côté pour maximiser mes chances d’arrêt. » Mais Bertrand se demande : « Les joueurs ont-ils eu tort de persister dans leur habitude ? N’auraient-ils pas dû changer de côté ? » Et Gigi, s’il est malin, pourrait anticiper ce changement et ajuster son plongeon en conséquence. Mais alors, si les tireurs savent que Gigi sait… où cela s’arrête-t-il ?

Ce va-et-vient mental est un phénomène classique en théorie des jeux, appelé **levelling** (ou nivellement). On le retrouve dans des jeux comme pierre-feuille-ciseaux ou le poker : « Je sais que tu sais que je sais que tu sais… » Par exemple, au poker, si je bluffe, c’est parce que je pense que tu penses que je ne bluffe pas. Le levelling consiste à deviner le niveau de réflexion de l’adversaire pour se placer juste au-dessus. Mais en pratique, sauf face à un adversaire prévisible (par exemple, quelqu’un qui raisonne au premier degré), ce raisonnement tourne vite en boucle et dépend beaucoup du hasard.

Revenons aux penaltys. Dans cet article, nous allons analyser la stratégie optimale du gardien face à un tireur, en utilisant la théorie des jeux. Le raisonnement pour le tireur est symétrique, mais nous nous concentrerons ici sur le gardien.

## Simplification du problème

Pour rendre l’analyse claire, simplifions le scénario :

- Le tireur choisit entre tirer à gauche ou à droite (pas au centre).
- Le gardien choisit de plonger à gauche ou à droite.
- Le tireur marque à 100% si le gardien plonge du mauvais côté.
- Excluons les cas où le tireur attend la réaction du gardien (comme Neymar ou Vitinha).

Objectifs :

- Le gardien veut plonger du côté où le tireur tire.
- Le tireur veut tirer là où le gardien ne plonge pas.

C’est un jeu à somme nulle : le gain de l’un (marquer) est la perte de l’autre (encaisser).

## Stratégies simples et leurs limites

Explorons d’abord quelques stratégies intuitives pour le gardien et évaluons leur efficacité.

### Stratégie 1 : Plonger à gauche 100% du temps

- **Efficacité** : Si le tireur tire souvent à gauche, cela peut marcher temporairement.
- **Problème** : Cette stratégie est **exploitable**. En théorie des jeux, une stratégie est exploitable si l’adversaire peut l’utiliser à son avantage en adaptant son propre choix. Ici, le tireur peut simplement tirer à droite 100% du temps et marquer à chaque coup. Résultat : échec total pour le gardien.

### Stratégie 2 : Plonger à droite 100% du temps

- **Efficacité** : Même logique que la stratégie 1, inversée.
- **Problème** : Identique. Si le tireur tire toujours à gauche, le gardien perd systématiquement.

### Stratégie 3 : Plonger 50% à gauche, 50% à droite (pile ou face)

- **Efficacité** : Plus prometteur. Si le gardien plonge aléatoirement avec une probabilité de 50% de chaque côté, le tireur marque 50% du temps, peu importe sa stratégie (100% à gauche, 100% à droite, ou un mélange).
- **Analyse** : Cette stratégie semble atteindre un **équilibre de Nash**, un concept clé en théorie des jeux. À l’équilibre de Nash, aucun joueur n’a intérêt à changer sa stratégie unilatéralement si l’autre maintient la sienne. Ici, si le tireur ajuste son choix, il ne peut pas faire mieux que 50% de réussite face à un gardien imprévisible à 50-50.

Mais est-ce vraiment optimal ? Pas si vite.

## Une complication réaliste : l’asymétrie des tireurs

Dans la vraie vie, les tireurs ne sont pas parfaitement équilibrés. Supposons que notre tireur de Liverpool ait une préférence ou une meilleure efficacité d’un côté :

- S’il tire à droite et que le gardien plonge à droite, il marque 90% du temps (son « bon côté »).
- S’il tire à gauche et que le gardien plonge à gauche, il marque 60% du temps (son « mauvais côté »).
- Si le gardien plonge du mauvais côté, le tireur marque 100%, comme avant.

Reprenons la stratégie 50-50 :

- Si le tireur tire 100% à droite (son bon côté) :
  - Gardien à gauche (50%) : tireur marque 100% → 50%.
  - Gardien à droite (50%) : tireur marque 90% → 45%.
  - Total : 50% + 45% = **95% de réussite**.
- Si le tireur tire 100% à gauche (mauvais côté) :
  - Gardien à gauche (50%) : 60% → 30%.
  - Gardien à droite (50%) : 100% → 50%.
  - Total : 30% + 50% = **80% de réussite**.

Problème : le tireur peut exploiter la stratégie 50-50 en tirant toujours à droite, augmentant sa réussite à 95%. L’équilibre de Nash est rompu, car le tireur a intérêt à ajuster sa stratégie. Le 50-50 n’est plus optimal.

## Trouver l’équilibre de Nash ajusté

Puisque le tireur a une asymétrie (90% à droite, 60% à gauche), le gardien doit adapter sa stratégie. Intuitivement, il devrait plonger plus souvent à droite (le bon côté du tireur) pour réduire les chances de but. Mais à quelle fréquence exacte ?

### Notations

- Fg : fréquence où le gardien plonge à gauche.
- Fd : fréquence où le gardien plonge à droite (Fg + Fd = 1).
- Mg : probabilité que le tireur marque à gauche si le gardien est à gauche (60% = 0.6).
- Md : probabilité que le tireur marque à droite si le gardien est à droite (90% = 0.9).

### Objectif : rendre le tireur indifférent

À l’équilibre de Nash, le tireur doit avoir le même taux de réussite qu’il tire à gauche ou à droite. Sinon, il favorisera son meilleur côté. Calculons la probabilité de marquer dans chaque cas :

- **Tireur tire à gauche 100%** :  
  Fd _ 100% + Fg _ Mg  
  (100% si le gardien est à droite, Mg si à gauche).
- **Tireur tire à droite 100%** :  
  Fg _ 100% + Fd _ Md  
  (100% si le gardien est à gauche, Md si à droite).

Pour l’équilibre :  
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
Fg = (1 - 0.9) / (2 - 0.6 - 0.9) = 0.1 / 0.5 = 0.25 (25%)  
Fd = (1 - 0.6) / (2 - 0.6 - 0.9) = 0.4 / 0.5 = 0.75 (75%).

Vérification :

- Tireur à gauche : 0.75 _ 100% + 0.25 _ 60% = 0.75 + 0.15 = 0.9 (90%).
- Tireur à droite : 0.25 _ 100% + 0.75 _ 90% = 0.25 + 0.675 = 0.9 (90%).  
  Égalité ! Le tireur marque 90% dans les deux cas, donc il est indifférent.

## Pourquoi l’équilibre de Nash est crucial pour le gardien ?

Atteindre l’équilibre de Nash est essentiel pour le gardien car :

1. **Minimisation des pertes** : Face à un tireur rationnel, c’est la stratégie qui limite au maximum le taux de buts encaissés (ici, 90%). Toute déviation (ex. 50-50) augmente ce taux (95% si le tireur exploite).
2. **Imprévisibilité contrôlée** : En ajustant ses fréquences (25% gauche, 75% droite), le gardien reste imprévisible tout en exploitant l’asymétrie du tireur.
3. **Stabilité** : À l’équilibre, le tireur n’a pas d’incitation à changer de stratégie, ce qui protège le gardien d’une exploitation systématique.

Sans cet équilibre, le tireur pourrait adapter son jeu et marquer plus souvent, comme dans le cas 50-50.

## Conclusion

Face à un tireur asymétrique (90% à droite, 60% à gauche), le gardien doit plonger 25% à gauche et 75% à droite pour atteindre l’équilibre de Nash. Ce n’est pas un simple pile ou face, mais une stratégie calculée qui neutralise l’avantage du tireur. En pratique, cela nécessite d’observer les tendances (comme Bertrand avec Liverpool) et d’utiliser des probabilités ajustées. La théorie des jeux transforme ainsi une intuition en une arme mathématique pour le gardien !
