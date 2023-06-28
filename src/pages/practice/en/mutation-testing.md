---
templateKey: practice-page
title: Mutation Testing
subtitle: Mutation testing is used to design new software tests and evaluate the
  quality of existing software tests.
date: 2022-07-25T12:46:12.353Z
authors:
  - sebw
mobiusTag: foundation
icon: /images/mutation-testing.png
whatIs: >-
  Mutation testing involves modifying a program in small ways.


  Each mutated version is called a mutant and tests detect and reject mutants by causing the behavior of the original version to differ from the mutant. This is called killing the mutant.
whyDo: >-
  The goals of mutation testing are multiple:


  * identify weakly tested pieces of code (those for which mutants are not killed)

  * identify weak tests (those that never kill mutants)

  * compute the mutation score, the mutation score is the number of mutants killed / total number of mutants.

  * learn about error propagation and state infection in the program
howTo: |-
  Python

  * [Mutatest](https://mutatest.readthedocs.io/en/latest/) 
  * [Mutpy](https://github.com/mutpy/mutpy)

  C#, Scala, Javascript

  * [Stryker](https://stryker-mutator.io/)
mediaGallery:
  - link: https://www.youtube.com/watch?v=Ua97prXLohk
resources:
  - link: https://ieeexplore.ieee.org/document/9524503
    linkType: web
    description: "Practical Mutation Testing at Scale: A view from Google"
  - link: https://en.wikipedia.org/wiki/Mutation_testing
    linkType: web
    description: Mutation testing definition by Wikipedia
  - link: https://opensource.com/article/19/9/mutation-testing-example-execute-test
    linkType: web
    description: "Mutation testing by example: Execute the test - by Alex Bunardzic "
participants: []
---
