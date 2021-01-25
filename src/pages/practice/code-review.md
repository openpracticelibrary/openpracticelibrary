---
templateKey: practice-page
title: Code Review
subtitle: Also a review on the developer's ego
date: 2020-08-12T20:44:12.964Z
authors:
  - mabulgu
tags:
  - learn
mobiusTag: delivery
icon: /images/code-review.png
whatIs: >-
  Code Review is a software quality assurance activity that someone other than
  the author(s) checks the relevant piece of code and considers questions like:


  * **TL;DR:** Is the code [clean](https://learning.oreilly.com/library/view/clean-code/9780136083238/)? :)

  * **Design:** Is the code well-designed and appropriate for your system?

  * **Functionality:** Does the code behave as the developer likely intended? Is it the right behavior for users? Looking at the requirements, are all cases/functions fully implemented?

  * **Complexity:** Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future? As Martin Fowler states in his book [Refactoring: Improving the Design of Existing Code](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/):

    > Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

  * **Tests:** Does the code have correct and well-designed automated tests? Are the new automated tests sufficient for the new code? Do existing automated tests need to be rewritten due to the changes in the code?

  * **Naming:** Did the developer choose clear names for variables, classes, methods, etc.?

  * **Comments:** Are the comments clear and useful?

  * **Style:** Does the code follow the existing style guides?

  * **Documentation:** Did the developer also update relevant documentation?
whyDo: >-
  The most important benefit of Code Review is [Collective Code
  Ownership](https://wiki.c2.com/?CollectiveCodeOwnership) which is an [eXtreme
  Programming (XP)](http://www.extremeprogramming.org/) practice that states the
  "[Code Ownership](https://martinfowler.com/bliki/CodeOwnership.html)" of any
  project belongs to nobody individually, but the team itself. In his book [Code
  Complete](https://learning.oreilly.com/library/view/code-complete-second/0735619670/),
  Steve McConnell mentions about this as "Collective Ownership in Construction"
  which is the idea that all code is owned by a group of contributors who can
  each equally access and modify the collectively-owned project:


  > One part of managing a software-engineering process is catching problems at the "lowest-value" stage—that is, at the time at which the least investment has been made and at which problems cost the least to correct. To achieve such a goal, developers use "quality gates," periodic tests or reviews that determine whether the quality of the product at one stage is sufficient to support moving on to the next.


  By this, a second important benefit is revealed: [Ego-less Programming](https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/). As Jeff Atwood states in his blog post:


  > **You are not your code.** Remember that the entire point of a review is to find problems, and problems will be found. Don't take it personally when one is uncovered.


  If someone does some mistakes, it will be easier to accept them and fix them with this way. And ***"no matter how much 'karate' you know"***, as Jeff Atwood stated, ***"someone else will always know more".***


  As another case, someone may know less than the developer, in that case both deference and patience has to come out. Code Reviews make the developers understand all these in a shortcut way.


  Other important benefits may be listed as follows:


  * Sharing knowledge & mentoring newer engineers

  * Better code

  * Finding defects

  * Makes committers motivated

  * Results in better estimations -in long term
howTo: >-
  Code Reviews types can be separated into 3, regarding to how long it takes and
  review's intend:


  * **Inspections:** Long code reviews which take about an hour. A third person as "the moderator" may also join this session as well, to moderate the review process which is highly possible to take more than an hour. In this case performance and attention-to-detail tend to drop off after that point.

  * **Walkthroughs:** It is for a mid-level code that takes much less time that generally transforms into a working meeting usually intended to provide teaching opportunities for senior developers to explain concepts to newer programmers.

  * **Short reviews:** Code reviews for small changes which takes around 10 mins., especially for release-fixes or bug fixes that takes a very very short time to fix.


  ### Efficiency of Code Review Techniques


  [Mob Programming](https://openpracticelibrary.com/practice/mob-programming/), [Pair Programming](https://openpracticelibrary.com/practice/pair-programming/) -or sub-methods like [Ping-Pong Programming](https://openpracticelibrary.com/practice/ping-pong-programming/)- can be counted as code review techniques, since all of them provide the benefits of the code review and suit well code review's definition. The only difference is you are sitting side-by-side with the reviewer when you are doing "Pair Programming" and your code is reviewed as you write it. That's why, the efficiency levels are different, and can be queued from the highest efficient to lowest efficient as follows:


  ![](/images/code_review_efficency.png)


  *[from "10 Faulty Behaviors of Code Review"](https://speakerdeck.com/lemiorhan/10-faulty-behaviors-of-code-review?slide=7)*


  As it can be seen from the image, apart from doing a side-by-side programming in pairs, the highest efficient code review technique is opening "pull requests", which is a very efficient technique actively used by git providers like GitHub, GitLab, etc.
mediaGallery:
  - link: https://openpracticelibrary.com/images/code-review.png
  - link: https://openpracticelibrary.com/images/code_review_efficency.png
resources:
  - link: https://www.wikiwand.com/en/Code_review
    linkType: web
    description: "Wikiwand: Code Review"
  - link: https://speakerdeck.com/lemiorhan/10-faulty-behaviors-of-code-review
    linkType: web
    description: 10 Faulty Behaviors of Code Review
  - link: https://dev.to/vaidehijoshi/crafting-better-code-reviews
    linkType: web
    description: Crafting Better Code Reviews
  - link: https://google.github.io/eng-practices/review/
    linkType: web
    description: "Google Engineering Practices: Code Review"
  - link: https://www.atlassian.com/agile/software-development/code-reviews
    linkType: web
    description: Atlassian's Code Reviews
  - link: https://www.perforce.com/blog/qac/9-best-practices-for-code-review
    linkType: web
    description: 9 Best Practices for Code Review
  - link: https://medium.com/palantir/code-review-best-practices-19e02780015f
    linkType: web
    description: Code Review Best Practices
  - link: https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/
    linkType: web
    description: The Ten Commandments of Ego-less Programming
people: 2+
time: 10-60 mins
difficulty: easy
participants:
  - Developers
---
