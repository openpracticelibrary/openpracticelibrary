---
templateKey: practice-page
title: Event Storming
subtitle: A rapid, interactive approach to business process discovery and design
  that yields high quality models
date: 2017-04-20T05:00:00.000Z
authors:
  - mtakane
  - tdbeattie
  - sudhakarau1
  - sandraarps
  - adamclark
tags:
  - value
mobiusTag: discovery
icon: /images/eventstormtile.jpeg
whatIs: >-
  Event Storming is a rapid, interactive approach to business process discovery
  and design that yields high quality models. It was introduced in a blog by
  Alberto Brandolini in 2013. At the end of the event storm, you should have:

  * A shared understanding of the business process you are building as part of the project, including:

    * which steps should be considered in scope and which steps are out of scope

    * the users involved in the process

    * an initial inventory of UI screens for the process

    * an initial inventory of Aggregates

  * A physical diagram with the above information, which can be transferred to a digital format


  **Learn more by listening to the [Open Practice Podcast episode](https://anchor.fm/openpracticelibrary/embed/episodes/Event-Storming-w-Patrick-Carney-eamad6/a-a1e5659)!** 🎙️🌠
whyDo: >-
  * It is significantly faster, and a heck of a lot more fun, than traditional
  process modeling techniques. You'll be surprised how much you accomplish in a
  short period

  * It establishes a common and shared language between Business & IT

  * It sets focus in terms of scope and boundaries

  * The technique is iterative, which allows facilitators to:

    * slowly adding more detail in each session as to not overwhelm participants.

    * pick and choose participants by session

    * provide cognitive breaks (participants will get tired)

  * It forces important questions about the customer journey early in the ideation process

  * It gives you the big picture of the solution by placing technical implementation details in context of the business process

  * It is particularly effective way to kick start Domain Driven Design
howTo: >-
  * Business Team maps out the Business Process from a Users perspective

  * The Best way is to start with the 'happy scenario', where the User successful reaches their goal (eg Student buys movie tickets online)

  * In addition, the Business Team identifies which data is required in order to make the business flow successful (eg Movie Name, Session Time, Student discounted price)

  * Once the Business Process has been defined, the IT team will join to provide additional information in forms of Events, Data and User Interfaces. This will establish a shared understanding of what is required

  * The architect will start grouping common objects in order to define the microservices to be developed

    ### Facilitation Materials Needed

    * Drawing paper roll. Stickies tend to fall off walls otherwise.

    * 2 different colors of wide format sticky notes like the 4x6 sticky notes

    * 4 different colors of small square sticky notes like the 3x3 sticky notes

    * Permanent Markers for the stickies

    * Whiteboard markers if you use whiteboard roll, or charcoal pencils if you use drawing paper. Theses are useful to jot adhoc lines/arrows/annotations

    ### Tips for Remote Sessions

    * All the usual pre-requisites about having the right participants representing different areas of expertise still apply. However, consider the overall number of participants for a remote session as too many can be hard for conversation flow and for everyone to be able to contribute.

    * Event Storms can take time to create (depending on the complexity of the scenario). Plan for multiple remote sessions with virtual breaks in each session and set this expectation with participants.

    * If participants are new to Event Storming, provide reference information (such as this page) and examples of complete Event Storms prior to the session. Consider holding a short Event Storming introduction session prior to the main session if this is feasible.

    * Prepare an online collaboration board with an Event Storm key and space set out to create the Event Storm. Place an example picture of a completed Event Storm on the board so that participants can visualise what they are working towards.

    * If enough is known about the scenario before the session, consider preparing an event spine beforehand to save time and provide a skeleton to start with. This can also help to orientate participants not familiar with the practice. Explain that this is just a starting point and anything can be changed during the session.

    * Ensure cameras are switched on where possible as this encourages participants to stay engaged and makes conversation easier. You want active participation to provide as much information and questions as possible.

    * The facilitator(s) should ask open questions and leave a silence if required to encourage participation.

    * The facilitator(s) should make extra effort to engage all participants. It is easy for participants of remote Event Storming to disengage or go into view only mode so active prompts are likely to be required.

    * Ideally you want everyone involved in the Event Storm to be able to interact with the board. However, if Event Storming is a new technique for participants and doing it remotely isn’t easy, consider to start interaction among facilitators (at least until participants have basic familiarity with the practice).

    * Make sure you walk through the Event Storm (forwards and backwards) regularly, perhaps more regularly then normal, to make sure everyone shares understanding and to prompt for input.

    * For large Event Storms consider breaking into groups using more than one remote session where each session works on a different part of the Event Storm. Make sure to check in as a whole group regularly in order to sync on progress and rotate groups and areas worked on.



    **Want to run this practice remotely? [Here’s some help](https://app.mural.co/template/5cf73c69-1709-4c8f-b2d4-d9dcc7142694/f1708695-c17b-4f38-a301-fcb25da81afa) to jump start your session 💻🙏**
mediaGallery:
  - link: https://youtu.be/N8fxzeZh4Kc
  - link: https://openpracticelibrary.github.io/opl-media/images/eventstorm.jpeg
  - link: https://openpracticelibrary.github.io/opl-media/images/eventstorm-key.jpg
resources:
  - link: http://ziobrando.blogspot.com/2013/11/introducing-event-storming.html
    linkType: web
    description: Alberto Brandolini's Original Blog
  - link: https://martinfowler.com/bliki/DDD_Aggregate.html
    linkType: web
    description: Aggregates as Defined by Martin Fowler
  - link: https://anchor.fm/openpracticelibrary/embed/episodes/Event-Storming-w-Patrick-Carney-eamad6/a-a1e5659
    linkType: podcast
    description: Event Storming with Patrick Carney
  - link: https://www.youtube.com/watch?v=m6h_ppEDPrU
    linkType: video
    description: Red Hat Summit 2017 Session
  - link: https://blog.redelastic.com/corporate-arts-crafts-modelling-reactive-systems-with-event-storming-73c6236f5dd7
    linkType: web
    description: Blog Explaining How Event Storming, DDD and Reactive Systems Relate
  - link: https://www.amazon.com/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420
    linkType: web
    description: Vaughn Vernon's Domain Driven Design Distilled (Chapter 7)
  - link: http://www.designkit.org/methods/63
    linkType: web
    description: Journey Mapping by Design Kit
  - link: https://methods.18f.gov/decide/site-mapping/
    linkType: web
    description: Site Mapping by 18f
  - link: https://methods.18f.gov/make/wireframing/
    linkType: web
    description: Wireframing by 18f
  - link: http://www.ikea.com/us/en/catalog/products/80324072/
    linkType: purchase
    description: Drawing Paper Example
  - link: https://www.amazon.com/Post-Sticky-Janeiro-Collection-4621-SSAU/dp/B001UXFT70
    linkType: purchase
    description: 4x6 Sticky Notes
  - link: https://www.amazon.com/dp/B01N1UE0JY?psc=1
    linkType: purchase
    description: 3x3 Sticky Notes
  - link: http://eventstorming.com/
    linkType: book
    description: Alberto Brandolini's Book
  - link: https://www.youtube.com/watch?v=1i6QYvYhlYQ
    linkType: video
    description: Alberto Brandolini's 50,000 Orange Stickies Later from Explore DDD 2017
  - link: https://www.linkedin.com/pulse/using-event-storming-practice-heritage-bank-sandra-arps/
    linkType: web
    description: Using 'Event Storming Practice' @ Heritage Bank (Red Hat Open
      Innovation Labs)
  - link: https://medium.com/@springdo/a-facilitators-recipe-for-event-storming-941dcb38db0d
    linkType: web
    description: A Facilitator's Recipe for Event Storming
  - link: https://openpracticelibrary.com/blog/facilitation-tips-for-remote-sessions/
    linkType: web
    description: Remote Facilitation Tips
participants:
  - Facilitator
  - Product Owner
  - User Experience Design
  - Analysts
  - Developers
  - Testers
  - Security
  - Operations / Infrastructure
jumbotron: /images/eventstorm.jpeg
area: discovery-loop-outcomes
people: 5+
time: ~6 Hours not including breaks
perspectives:
  - domain-driven-design
  - facilitation-tips-for-remote-sessions
difficulty: hard
jumbotronAlt: An example event storm
---
## What is Event Storming?

Event Storming is a rapid, interactive approach to business process discovery and design that yields high quality models. It was introduced in a blog by Alberto Brandolini[<sup>1</sup>](#footnote-1) in 2013. At the end of the event storm, you should have:

* A shared understanding of the business process you are building as part of the project, including:

  * which steps should be considered in scope and which steps are out of scope
  * the users involved in the process
  * an initial inventory of UI screens for the process
  * an initial inventory of Aggregates[<sup>2</sup>](#footnote-2)
* A physical diagram with the above information, which can be transferred to a digital format

**<div align="center">Learn more by listening to the Open Practice Podcast episode! 🎙️🌠</div>**

<div align="center"><iframe src="https://anchor.fm/openpracticelibrary/embed/episodes/Event-Storming-w-Patrick-Carney-eamad6/a-a1e5659" height="102px" width="400px" frameborder="0" scrolling="no"></iframe></div>

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

## Tips for Remote Sessions

* All the usual pre-requisites about having the right participants representing different areas of expertise still apply. However, consider the overall number of participants for a remote session as too many can be hard for conversation flow and for everyone to be able to contribute.
* Event Storms can take time to create (depending on the complexity of the scenario). Plan for multiple remote sessions with virtual breaks in each session and set this expectation with participants.
* If participants are new to Event Storming, provide reference information (such as this page) and examples of complete Event Storms prior to the session. Consider holding a short Event Storming introduction session prior to the main session if this is feasible.
* Prepare an online collaboration board with an Event Storm key and space set out to create the Event Storm. Place an example picture of a completed Event Storm on the board so that participants can visualise what they are working towards.
* If enough is known about the scenario before the session, consider preparing an event spine beforehand to save time and provide a skeleton to start with. This can also help to orientate participants not familiar with the practice. Explain that this is just a starting point and anything can be changed during the session.
* Ensure cameras are switched on where possible as this encourages participants to stay engaged and makes conversation easier. You want active participation to provide as much information and questions as possible.
* The facilitator(s) should ask open questions and leave a silence if required to encourage participation.
* The facilitator(s) should make extra effort to engage all participants. It is easy for participants of remote Event Storming to disengage or go into view only mode so active prompts are likely to be required.
* Ideally you want everyone involved in the Event Storm to be able to interact with the board. However, if Event Storming is a new technique for participants and doing it remotely isn’t easy, consider to start interaction among facilitators (at least until participants have basic familiarity with the practice).
* Make sure you walk through the Event Storm (forwards and backwards) regularly, perhaps more regularly then normal, to make sure everyone shares understanding and to prompt for input.
* For large Event Storms consider breaking into groups using more than one remote session where each session works on a different part of the Event Storm. Make sure to check in as a whole group regularly in order to sync on progress and rotate groups and areas worked on.



**Want to run this practice remotely? Here’s some help to jump start your session 💻🙏**





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
17. Alberto Brandolini's [Remote Event Storming](https://blog.avanscoperta.it/it/2020/03/26/remote-eventstorming/) guide
