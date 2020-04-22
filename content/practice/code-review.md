---
title: Code Review
subtitle: Also a review on the developer's ego
date: 2020-04-30T10:49:53.247Z
authors:
  - mabulgu
area: foundation-culture-and-collaboration
perspectives:
  - pair-programming
  - ping-pong-programming
  - everything-as-code
participants: []
---
## What is it?

Code Review is a software quality assurance activity that someone other than the author(s) checks the relevant piece of code and considers questions like:

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

## Why use it?

The most important benefit of Code Review is [Collective Code Ownership](https://wiki.c2.com/?CollectiveCodeOwnership) which is an [eXtreme Programming (XP)](http://www.extremeprogramming.org/) practice that states the "[Code Ownership](https://martinfowler.com/bliki/CodeOwnership.html)" of any project is *nobody* individually, but the team itself[](https://martinfowler.com/bliki/CodeOwnership.html). In his book [Code Complete](https://learning.oreilly.com/library/view/code-complete-second/0735619670/), Steve McConnell mentions about this as "Collective Ownership in Construction" which is the idea that all code is owned by a group of contributors who can each equally access and modify the collectively-owned project:

> One part of managing a software-engineering process is catching problems at the "lowest-value" stage—that is, at the time at which the least investment has been made and at which problems cost the least to correct. To achieve such a goal, developers use "quality gates," periodic tests or reviews that determine whether the quality of the product at one stage is sufficient to support moving on to the next.

By this, a second important benefit is revealed: [Ego-less Programming](https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/). As Jeff Atwood states in his blog post:

> **You are not your code.** Remember that the entire point of a review is to find problems, and problems will be found. Don't take it personally when one is uncovered.

#### Efficency of Code Review Techniques

![](/images/code_review_efficency.png)

## Further Information & References