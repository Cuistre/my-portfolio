# Penalties and Game Theory: What’s the Best Strategy for the Goalkeeper?

Wednesday, March 12, 2025. Less than 24 hours after PSG’s absolutely wild qualification against Liverpool in the Champions League round of 16, the euphoria is far from fading. Our family WhatsApp group dedicated to sports (and PSG) is still buzzing. The 463 messages from last night clearly weren’t enough to cover that unforgettable evening—those long minutes of suffering, pinned back in our penalty area under Liverpool’s relentless waves, that breathless extra time, and the liberating penalty shootout.

Messages keep pouring in because, NO, we haven’t said it all. My uncle Bertrand is wondering about Gianluigi Donnarumma’s (whom we’ll call Gigi from now on) XXL performance during the shootout, and he shares a screenshot of this tweet.

![My photo](/images/nunezjones.png)

I thought this was a perfect opportunity to study penalties through the lens of **game theory**. So, let’s dive in. Can game theory help us maximize our chances of scoring a penalty or stopping one as a goalkeeper?  
SPOILER: YES!

## Introduction: An Observation That Raises Questions

My uncle notices that two Liverpool players tend to shoot their penalties to the same side most of the time. Gigi, the goalkeeper, might think: “I’ve spotted this pattern, so I can dive to that side to maximize my chances of a save.”

But my uncle wonders: “Were the players wrong to stick to their habit? Shouldn’t they have switched sides?” And Gigi, if he’s sharp, might anticipate this change and adjust his dive accordingly. But then, if the shooters know that Gigi knows… where does it end?

This observation highlights the limitations of David Wall’s reasoning in his tweet. David Wall believes Gigi knew where the shooters would aim. In reality, he didn’t know anything for sure. Nunez could easily have thought, “This is the penalty of my life, I know Gigi studies stats, so I’ll change my habit.” The fact that a player has shot 85% of their penalties to the right doesn’t mean there’s an 85% probability they’ll shoot right again in a specific situation. That 85% is a statistic, not a probability. They’re related, of course, but they’re not the same thing.

This mental back-and-forth (he knows that I know that he knows that I know…) is a classic phenomenon in game theory called **levelling**. You see it in games like rock-paper-scissors or poker: “I know you know I know you’re going to play paper…” For example, in poker, if I bluff, it’s because I think you think I’m not bluffing. Levelling is about guessing your opponent’s level of thinking to stay one step ahead. But in practice, unless you’re facing a predictable opponent (say, someone reasoning at the first level), this kind of thinking quickly spirals and relies heavily on chance.

Back to penalties. In this article, we’ll analyze the optimal strategy for the goalkeeper facing a shooter, using game theory. We’ll focus on the goalkeeper here, but the reasoning for the shooter is perfectly symmetric.

## Simplification of the Problem

To keep the analysis clear, let’s simplify the scenario:

=> The shooter chooses between shooting left or right (no center shots).  
=> The goalkeeper chooses to dive left or right.  
=> The shooter scores 100% of the time if the goalkeeper dives to the wrong side.  
=> We exclude cases where the shooter waits for the goalkeeper’s reaction to wrong-foot them (like some players, such as Neymar or Vitinha, do).

## Objectives: Finding the Optimal Strategy

=> The goalkeeper wants to dive to the side where the shooter aims.  
=> The shooter wants to shoot where the goalkeeper doesn’t dive.

### What’s a Strategy?

A strategy involves deciding the frequency with which I’ll dive left and the frequency with which I’ll dive right. By definition, these two frequencies add up to 1 (100%).  
Be careful, we’re talking about frequencies here, which is crucial. If you tell me, “My strategy is to dive left,” I interpret that as: “I’ll dive left 100% of the time and right 0% of the time.”

### What’s an Optimal Strategy?

Here’s where it gets a bit trickier, but don’t run away just yet! An optimal strategy is one that ensures that, even if the shooter picks the best possible counter-strategy, they score as rarely as possible. Let’s break it down. Suppose I choose to always dive left (strategy A). The shooter can then always shoot right and score 100% of the time. My “worst-case scenario” is thus 100% goals conceded. Now, if I dive 80% left and 20% right (strategy B), the shooter might choose to shoot right 100% of the time, but they won’t score 100% of the time anymore. Between A and B, B is better. The idea is to test all my possible strategies (A, B, C, etc.), figure out the worst the shooter can do against each one, and pick the strategy where that “worst” is the least bad. In short, I want to minimize damage, even against a shooter who adapts perfectly to my game. That’s the strategy we’re going to calculate now!

## Simple Strategies and Their Limits

Let’s explore some intuitive strategies for the goalkeeper and evaluate their effectiveness.

### Strategy 1: Dive Left 100% of the Time

=> **Effectiveness**: If the shooter often shoots left, this might work temporarily.  
=> **Problem**: As mentioned earlier, this strategy is **exploitable**. In game theory, a strategy is exploitable if the opponent can take advantage of it by adjusting their own choice. Here, the shooter can simply shoot right 100% of the time and score every time. Result: total failure for the goalkeeper.

### Strategy 2: Dive Right 100% of the Time

=> **Effectiveness**: Same logic as Strategy 1, but reversed.  
=> **Problem**: Identical. If the shooter always shoots left, the goalkeeper loses every time.

### Strategy 3: Dive 50% Left, 50% Right (Coin Flip)

=> **Effectiveness**: More promising. If the goalkeeper dives randomly with a 50% probability for each side, the shooter scores 50% of the time, no matter their strategy (100% left, 100% right, or a mix).  
=> **Analysis**: This strategy seems to achieve an **equilibrium of Nash**, a key concept in game theory. At a Nash equilibrium, no player has an incentive to unilaterally change their strategy if the other keeps theirs. Here, if the shooter adjusts their choice, they can’t do better than a 50% success rate against an unpredictable 50-50 goalkeeper.

“Wait, hold on, you wrote all this just to tell us the goalkeeper should dive 50% right and 50% left? Thanks, Sherlock!”

Alright, alright! Let’s make things a bit more interesting ;).

## A Realistic Complication: Shooter Asymmetry

In real life, shooters aren’t robots. Their shots aren’t equally effective depending on whether they shoot left or right. Generally, players are a bit more comfortable when they cross their shot—a right-footed player when shooting left, for example. Let’s assume our Liverpool shooter has a preference or better effectiveness on one side:

=> If they shoot right and the goalkeeper dives right, they score 90% of the time (their “strong side”).  
=> If they shoot left and the goalkeeper dives left, they score 60% of the time (their “weak side”).  
=> If the goalkeeper dives to the wrong side, the shooter scores 100%, as before.

Let’s revisit the 50-50 strategy:

=> If the shooter shoots 100% right (strong side):  
==> Goalkeeper dives left (50%): shooter scores 100% → 50%.  
==> Goalkeeper dives right (50%): shooter scores 90% → 45%.  
==> Total: 50% + 45% = **95% success rate**.  
=> If the shooter shoots 100% left (weak side):  
==> Goalkeeper dives left (50%): 60% → 30%.  
==> Goalkeeper dives right (50%): 100% → 50%.  
==> Total: 30% + 50% = **80% success rate**.

Problem: The shooter can exploit the 50-50 strategy by always shooting right, boosting their success rate to 95%. The Nash equilibrium is broken because the shooter has an incentive to adjust their strategy. The 50-50 approach is no longer optimal.

## Finding the Adjusted Nash Equilibrium

Since the shooter has asymmetry (90% success rate right, 60% success rate left), the goalkeeper must adapt their strategy. Intuitively, we think the shooter will favor their strong side and shoot right more often. So, the goalkeeper should dive right more often to reduce the chance of conceding. But at what exact frequency? Is there a way to find this optimal frequency, or do we just guess?

### Notations

=> Fg: frequency with which the goalkeeper dives left.  
=> Fd: frequency with which the goalkeeper dives right (Fg + Fd = 1).  
=> Mg: probability the shooter scores left if the goalkeeper dives left (60% = 0.6).  
=> Md: probability the shooter scores right if the goalkeeper dives right (90% = 0.9).

### Objective: Make the Shooter Indifferent

At a Nash equilibrium, the shooter must have the same success rate whether they shoot left or right. Otherwise, they’ll favor their better side. Let’s calculate the scoring probability in each case:

=> **Shooter shoots left 100%**:  
 Fd _ 100% + Fg _ Mg  
 (100% if the goalkeeper dives right, Mg if left).  
=> **Shooter shoots right 100%**:  
 Fg _ 100% + Fd _ Md  
 (100% if the goalkeeper dives left, Md if right).

For equilibrium, these two probabilities must be equal. So:  
Fd _ 100% + Fg _ Mg = Fg _ 100% + Fd _ Md.

### Resolution

Equation:  
Fd + Fg _ Mg = Fg + Fd _ Md  
Since Fg + Fd = 1, substitute Fd = 1 - Fg:  
(1 - Fg) + Fg _ Mg = Fg + (1 - Fg) _ Md  
Expand:  
1 - Fg + Fg _ Mg = Fg + Md - Fg _ Md  
Rearrange:  
1 - Fg + Fg _ Mg - Fg - Md + Fg _ Md = 0  
1 - Md + Fg _ (Mg - 1 - 1 + Md) = 0  
1 - Md + Fg _ (Mg + Md - 2) = 0  
Fg \* (Mg + Md - 2) = Md - 1  
Fg = (1 - Md) / (2 - Mg - Md)  
Then Fd = 1 - Fg = (1 - Mg) / (2 - Mg - Md).

### Application

With Mg = 0.6 and Md = 0.9:  
Fg = (1 - 0.9) / (2 - 0.6 - 0.9) = 0.1 / 0.5 = 0.2 (20%)  
Fd = (1 - 0.6) / (2 - 0.6 - 0.9) = 0.4 / 0.5 = 0.8 (80%).

Verification:

=> Shooter shoots left: 0.8 _ 100% + 0.2 _ 60% = 0.8 + 0.12 = 0.92 (92%).  
=> Shooter shoots right: 0.2 _ 100% + 0.8 _ 90% = 0.2 + 0.72 = 0.92 (92%).  
 Equal! The shooter scores 92% in both cases, so they’re indifferent.

## Why Is the Nash Equilibrium Crucial for the Goalkeeper?

Reaching the Nash equilibrium is essential for the goalkeeper because:

1. **Minimizing Losses**: Against a rational shooter, this strategy limits the goal concession rate to the lowest possible (here, 92%). Any deviation (e.g., 50-50) increases this rate (95% if the shooter exploits it).
2. **Controlled Unpredictability**: By adjusting frequencies (20% left, 80% right), the goalkeeper stays unpredictable while exploiting the shooter’s asymmetry.
3. **Stability**: At equilibrium, the shooter has no incentive to change their strategy, protecting the goalkeeper from systematic exploitation.

Without this equilibrium, the shooter could adapt their game and score more often, as in the 50-50 case.

## Conclusion

Against an asymmetric shooter (90% success rate right, 60% success rate left), the goalkeeper must dive 20% left and 80% right to reach the Nash equilibrium. This isn’t a simple coin flip but a calculated strategy that neutralizes the shooter’s advantage. In practice, this requires observing tendencies and using adjusted probabilities. Game theory thus turns intuition into a mathematical weapon for the goalkeeper!
