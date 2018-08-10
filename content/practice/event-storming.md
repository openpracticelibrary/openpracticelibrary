---
title: Event Storming
subtitle: >-
  A rapid, interactive approach to business process discovery and design that
  yields high quality models
date: 2017-04-20T05:00:00.000Z
authors:
  - mtakane
  - tdbeattie
area: discovery-loop-outcomes
people: 2+
time: ~6 Hours not including breaks
difficulty: moderate
participants:
  - Facilitator
  - Product Owner
  - User Experience Design
  - Analysts
  - Developers
  - Testers (optional but recommended)
---
## What is it?

Event Storming is a rapid, interactive approach to business process discovery and design that yields high quality models. It was introduced in a blog by Alberto Brandolini[<sup>1</sup>](#footnote-1) in 2013. At the end of the event storm, you should have:

* A shared understand of the business process you are building as part of the project, including:
  * which steps should be considered in scope and which steps are out of scope
  * the users involved in the process
  * an initial inventory of UI screens for the process
  * an initial inventory of Aggregates[<sup>2</sup>](#footnote-2)
* A physical diagram with the above information, which can be transferred to a digital format

## Why use Event Storming?

* It is significantly faster, and a heck of a lot more fun, than traditional process modeling techniques. You'll be surprised how much you accomplish in a short period
* The technique is iterative, which allows facilitators to:
  * slowly adding more detail in each session as to not overwhelm participants.
  * pick and choose participants by session
  * provide cognitive breaks (participants will get tired)
* It forces important questions about the customer journey early in the ideation process
* It gives you the big picture of the solution by placing technical implementation details in context of the business process
* It is particularly effective way to kick start Domain Driven Design[<sup>3</sup>](#footnote-3)

## Related Practices

* [User Story Mapping](/practice/user-story-mapping/) is a great way to create an Agile delivery plan for a business process designed with Event Storming
* Journey Mapping[<sup>4</sup>](#footnote-4) can provide a high level overview of the business process before using Event Storming to get into the details
* Event Storming will identify key views for your user interface, which can jump start Site Mapping[<sup>5</sup>](#footnote-5) or Wireframing[<sup>6</sup>](#footnote-6)

## Facilitation Materials Needed

* Drawing paper roll[<sup>7</sup>](#footnote-7). Stickies tend to fall off walls otherwise.
* 2 different colors of wide format sticky notes like the 4x6 sticky notes[<sup>8</sup>](#footnote-8)
* 4 different colors of small square sticky notes like the 3x3 sticky notes[<sup>9</sup>](#footnote-9)
* Permanent Markers for the stickies
* Whiteboard markers if you use whiteboard roll, or charcoal pencils if you use drawing paper. Theses are useful to jot adhoc lines/arrows/annotations

## How does it fit?

* Typically done in the Outcomes area of the Discovery of the Open Practice Library

## External Resources

1. <a name="footnote-1"></a>Alberto Brandolini's [original blog](http://ziobrando.blogspot.com/2013/11/introducing-event-storming.html)
2. <a name="footnote-2"></a>[Aggregates](https://martinfowler.com/bliki/DDD_Aggregate.html) as defined by Martin Fowler
3. <a name="footnote-3"></a>Vaughn Vernon's [Domain Driven Design Distilled](https://www.amazon.com/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420). Chapter 7 is of particular interest.
4. <a name="footnote-4"></a>[Journey Mapping](http://www.designkit.org/methods/63) by Design Kit
5. <a name="footnote-5"></a>[Site Mapping](https://methods.18f.gov/decide/site-mapping/) by 18f
6. <a name="footnote-6"></a>[Wireframing](https://methods.18f.gov/make/wireframing/) by 18f
7. <a name="footnote-7"></a>[Drawing Paper example](http://www.ikea.com/us/en/catalog/products/80324072/)
8. <a name="footnote-8"></a>[4x6 sticky notes example](https://www.amazon.com/Post-Sticky-Janeiro-Collection-4621-SSAU/dp/B001UXFT70)
9. <a name="footnote-9"></a>[3x3 sticky notes example](https://www.amazon.com/dp/B01N1UE0JY?psc=1)
10. <a name="footnote-10"></a>[Double Diamond design model](https://medium.com/digital-experience-design/how-to-apply-a-design-thinking-hcd-ux-or-any-creative-process-from-scratch-b8786efbf812)
11. [Session at Red Hat Summit 2017](https://www.youtube.com/watch?v=m6h_ppEDPrU)
12. [Blog](https://blog.redelastic.com/corporate-arts-crafts-modelling-reactive-systems-with-event-storming-73c6236f5dd7) explaining how event storming, DDD and reactive systems relate
13. Alberto Brandolini's [Event Storming book](http://eventstorming.com/)
14. Alberto Brandolini's [50,000 Orange Stickies Later](https://www.youtube.com/watch?v=1i6QYvYhlYQ) from Explore DDD 2017. Great overview of how the technique has evolved, tips for running a session, and articulation of the different types of sessions to run.
