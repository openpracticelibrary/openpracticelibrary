---
title: Domain Driven Design
subtitle: Tackling Complexity in the Heart of Software
date: 2018-11-06T19:14:43.638Z
authors:
  - sherl0cks
  - rdebeasi
jumbotron: /images/kandinsky.jpg
---
## What is it?

A set of guiding principles that together form a mindset about building software, often abbreviated as DDD. The concept was introduced by Eric Evans, and the original textbook was published in 2003[<sup>2</sup>](#footnote-2). The Domain Driven Design perspective is not reductionist, but rather embraces the notion that software development is part of a much larger and complex socio-technical system. As a result, many practices for managing the complexities of software development, like [Event Storming](https://openpracticelibrary.com/practice/event-storming), [Behavior Driven Development](https://github.com/openpracticelibrary/openpracticelibrary/issues/464), and [Domain Story Telling](https://github.com/openpracticelibrary/openpracticelibrary/issues/465), have their roots in the DDD community. The stated principles of Domain Driven Design are principles are:

* Focus effort around the core complexity and opportunity in a **_domain_**.
* Explore **_models_** in a collaboration of domain experts and software experts.
* Write software that expresses those **_models_** explicitly.
* Speak a **_ubiquitous language_** within a **_bounded context_**.

The words in bolded, italic text above is part of the DDD terminology, which while central to understanding the mindset, is often an times is an Achilles heel[<sup>3</sup>](#footnote-3).

## Why use it?

Domain Driven Design:

* Helps us understand the way [Conway's Law](http://www.melconway.com/Home/Conways_Law.html) materializes in the software development process.
* Provides strategies for harnessing Conway's Law to achieve better outcomes.
* Introduces proven and repeatable patterns for modelling complex business logic in software.

The corollary to the above is the Domain Driven Design is overkill when working on simple domains or simple pieces of software. Only use it if you have complexity to manage.

## Further Information

1. <a name="footnote-1"></a>This article is largely a synopsis of [Eric Evans' keynote at Explore DDD 2017](https://www.youtube.com/watch?v=kIKwPNKXaLU), which is an excellent talk
2. <a name="footnote-2"></a>[The original book](https://domainlanguage.com/ddd/), by Eric Evans
3. <a name="footnote-3"></a>To disambiguate the DDD terminology, see [Understanding DDD and Microservices](https://medium.com/@jholmes_37566/microservices-and-the-bounded-context-part-1-5a3337b6b9de)
