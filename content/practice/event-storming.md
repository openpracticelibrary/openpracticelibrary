---
title: Event Storming
subtitle: >-
  A rapid, interactive approach to business process discovery and design that
  yields high quality models
date: 2017-04-20T05:00:00.000Z
authors:
  - mtakane
  - tdbeattie
  - sudhakarau1
  - sandraarps
area: discovery-loop-outcomes
perspectives:
  - domain-driven-design
icon: /images/eventstormtile.jpeg
jumbotron: /images/eventstorm.jpeg
jumbotronAlt: An example event storm
people: 5+
time: ~6 Hours not including breaks
difficulty: hard
participants:
  - Facilitator
  - Product Owner
  - User Experience Design
  - Analysts
  - Developers
  - Testers
  - Security
  - Operations / Infrastructure
---
## What is Event Storming?

Event Storming is a rapid, interactive approach to business process discovery and design that yields high quality models. It was introduced in a blog by Alberto Brandolini[<sup>1</sup>](#footnote-1) in 2013. At the end of the event storm, you should have:

* A shared understanding of the business process you are building as part of the project, including:

  * which steps should be considered in scope and which steps are out of scope
  * the users involved in the process
  * an initial inventory of UI screens for the process
  * an initial inventory of Aggregates[<sup>2</sup>](#footnote-2)
* A physical diagram with the above information, which can be transferred to a digital format

## Why use Event Storming?

* It is significantly faster, and a heck of a lot more fun, than traditional process modeling techniques. You'll be surprised how much you accomplish in a short period
* It establishes a common and shared language between Business & IT
* It sets focus in terms of scope and boundaries
* The technique is iterative, which allows facilitators to:

  * slowly adding more detail in each session as to not overwhelm participants.
  * pick and choose participants by session
  * provide cognitive breaks (participants will get tired)
* It forces important questions about the customer journey early in the ideation process
* It gives you the big picture of the solution by placing technical implementation details in context of the business process
* It is particularly effective way to kick start Domain Driven Design[<sup>3</sup>](#footnote-3)

## How to do Event Storming?

* Business Team maps out the Business Process from a Users perspective
* The Best way is to start with the 'happy scenario', where the User successful reaches their goal (eg Student buys movie tickets online)
* In addition, the Business Team identifies which data is required in order to make the business flow successful (eg Movie Name, Session Time, Student discounted price)
* Once the Business Process has been defined, the IT team will join to provide additional information in forms of Events, Data and User Interfaces. This will establish a shared understanding of what is required
* The architect will start grouping common objects in order to define the microservices to be developed

## Related Practices

* [User Story Mapping](/practice/user-story-mapping/) is a great way to create an Agile delivery plan for a business process designed with Event Storming
* Journey Mapping[<sup>4</sup>](#footnote-4) can provide a high level overview of the business process before using Event Storming to get into the details
* Event Storming will identify key views for your user interface, which can jump start Site Mapping[<sup>5</sup>](#footnote-5) or Wireframing[<sup>6</sup>](#footnote-6)

<iframe width="560" height="315" src="https://www.youtube.com/embed/N8fxzeZh4Kc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Facilitation Materials Needed

* Drawing paper roll[<sup>7</sup>](#footnote-7). Stickies tend to fall off walls otherwise.
* 2 different colors of wide format sticky notes like the 4x6 sticky notes[<sup>8</sup>](#footnote-8)
* 4 different colors of small square sticky notes like the 3x3 sticky notes[<sup>9</sup>](#footnote-9)
* Permanent Markers for the stickies
* Whiteboard markers if you use whiteboard roll, or charcoal pencils if you use drawing paper. Theses are useful to jot adhoc lines/arrows/annotations

If facilitating a remote session, jump start things by using this Mural template 👯

<div style="width: 600px;"> <h1 style="position: relative;vertical-align: middle;display: inline-block; font-size: 24px; line-height:28px; color: #393939;margin-bottom: 14px; font-weight: 300;font-family: Proxima Nova, sans-serif;"> <img src="https://app.mural.co/static/images/samples-avatar.png" style="position: absolute; border-radius: 50%;width: 36px;height: 36px;margin-right: 14px; display: inline-block; margin-top: -6px;margin-right: 10px; vertical-align: middle;"> <span style="padding-left: 46px; display: inline-block;"> Event Storming Template <span style="font-size: 16px; color: #393939; font-weight: 300;"> by MURAL </span> </span> </h1> <div style="position: relative;padding-bottom: 56.25%;height: 0; overflow: hidden; max-width: 800px; min-width: 320px; border-width: 1px; border-style: solid; border-color: #d8d8d8;"> <div style="position: absolute;top: 0;left: 0;z-index: 10; width: 100%; height: 100%;background: url(https://murally.blob.core.windows.net/thumbnails/warhw2023/templates/5cf73c69-1709-4c8f-b2d4-d9dcc7142694.png?v=b69cb34f-c778-4857-a572-9036a2229de6) no-repeat center center; background-size: cover;"> <div style="position: absolute;top: 0;left: 0;z-index: 20;width: 100%; height: 100%;background-color: white;-webkit-filter: opacity(.4);"> </div> <a href="https://app.mural.co/template/5cf73c69-1709-4c8f-b2d4-d9dcc7142694/f1708695-c17b-4f38-a301-fcb25da81afa" target="_blank" style="transform: translate(-50%, -50%);top: 50%;left: 50%; position: absolute; z-index: 30; border: none; background: transparent;"> <img src="https://app.mural.co/static/images/button-template-large.png" alt="GET STARTED FROM TEMPLATE" width="347" height="50" style="width: 347px !important; height: 50px !important"> </a> </div> </div> <p style="margin-top: 7px;margin-bottom: 60px;line-height: 18px; font-size: 14px;font-family: Proxima Nova, sans-serif;font-weight: 400; color: #888888;"> Open to create a mural from this template in your workspace. <span style="color: #393939;"> Powered by </span> <a href="https://mural.co/" target="_blank" style="text-decoration: none;"> <span style="color: #ff0065;">MURAL</span> </a> </p></div>

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
15. An excellent example of Event Storming during a Red Hat Open Innovation lab "[Using 'Event Storming Practice' @ Heritage Bank](https://www.linkedin.com/pulse/using-event-storming-practice-heritage-bank-sandra-arps/)"
16. [A facilitators recipe for Event Storming](https://medium.com/@springdo/a-facilitators-recipe-for-event-storming-941dcb38db0d)