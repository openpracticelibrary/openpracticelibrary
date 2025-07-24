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
icon: /images/eventstorming_original.png
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
