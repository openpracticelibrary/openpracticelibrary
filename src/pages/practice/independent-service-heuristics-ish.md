---
templateKey: practice-page
title: Independent Service Heuristics (ISH)
subtitle: Sparking collaborative conversations to identify software boundaries
  that facilitate fast flow.
date: 2023-10-23T22:55:43.067Z
authors:
  - matthewskelton
  - manupaisable
  - kattekrab
mobiusTag: discovery
icon: /images/opl-tt-ish.png
whatIs: >-
  Independent Service Heuristics (ISH) is a set of questions teams can use to
  find where to set team and software boundaries that will enable Fast Flow of
  value. T﻿his technique was invented by the authors of *Team Topologies*,
  Matthew Skelton and Manuel Pais, and subsequently refined by other members of
  the wider Domain Driven Design community.


  You'll find more information via the [Independent Service Heuristics GitHub Repository](https://github.com/TeamTopologies/Independent-Service-Heuristics) which is openly provided via the CC BY-SA license.
whyDo: >-
  ***C﻿hoosing an area of focus***


  T﻿his practice helps teams to get started and avoid analysis paralysis by using a series of questions to help identify where to focus attention, or quickly decide an area of focus is not suitable for further discovery after all.


  > "When designing organizations for fast flow of change, we need to find effective boundaries between different streams of change… The ISH approach covers many typical situations in modern software but not all. It's designed to stimulate conversation and provide a frame for thinking, not as a perfect "catch-all" tool."
howTo: >-
  S﻿tart by asking “Could this thing be run as a cloud-hosted (SaaS) service or
  product?”


  * A﻿sk the team to think about, and write down aspects of the business, relevant tasks, software applications, and customer journeys which could become an independent domain, service, or value stream.

  * Remove duplicates and cluster similar ideas.

  * Use this checklist to confirm, or discard areas of focus.


  1. **Sense-check**: \
     Could it make any logical sense to offer this thing "as a service"?

     * Is this thing independent enough?
     * Would consumers understand or value it?
     * Would it simplify execution?
  2. **Brand**: \
     Could you imagine this thing branded as a public cloud service (like *AvocadoOnline.com* 🥑)?

     * Would it be a viable business (or "micro-business") or service?
     * Would it be a compelling offering?
     * Could a marketing campaign be convincing?
  3. **Revenue/Customers**: \
     Could this thing be managed as a viable cloud service in terms of revenue and customers?

     * Would it be viable service with a paid offering?
     * Would it bring recurring revenue with subscription plans?
     * Is there a clearly-defined customer base or segment?
  4. **Cost tracking**: \
     Could the organisation currently track costs and investment in this thing separately from similar things?

     * Are the full costs of running this thing transparent or possible to discover considering infrastructure costs, data storage costs, data transfer costs, licence costs, etc.?
     * Is this thing fairly separate, disconnected from other things in the organisation?
     * Does the organisation track this separately?
  5. **Data**: \
     Is it possible to define clearly the input data (from other sources) that this thing needs?

     * Is the thing fairly independent from any data sources?
     * Are the sources internal (under our control, not external)?
     * Is the input data clean (not messy)?
     * Is the input data provided in a self-service way? Can the team consume the input data "as a service"?
  6. **User Personas**: \
     Could this thing have a small/well-defined set of user types or customers (user personas)?

     * Is the thing meeting specific user needs?
     * Do we know (or can we easily articulate) these user types and their needs?
  7. **Teams**: \
     Could a team or set of teams effectively build and operate a service based on this thing?

     * Would the cognitive load (breadth of topics/context switching) be bounded to help the team focus and succeed?
     * Would significant infrastructure or other platform abstractions be unnecessary?
  8. **Dependencies**: \
     Would this team be able to act independently of other teams for the majority of the time to achieve their objectives?

     * Is this thing logically independent from other things?
     * Could the team "self-serve" dependencies in a non-blocking manner from a platform?
  9. **Impact/Value**: \
     Would the scope of this thing provide a team with an impactful and engaging challenge?

     * Is the scope big enough to provide an impact? Would the scope be engaging for talented people?
     * Is there sufficient value to customers and the organization that the value would be clearly recognized?
  10. **Product Decisions**: \
      Would the team working on this thing be able to "own" their own product roadmap and the product direction?

      * Does this thing provide discrete value in a well-defined sphere of execution?
      * Can the team define their own roadmap based on what they discover is best for the product and its users (so that the team is not driven by the requirements and priorities of other teams)?
mediaGallery:
  - link: https://www.youtube.com/watch?v=q8hwkDyL6Zs
resources:
  - link: https://github.com/TeamTopologies/Independent-Service-Heuristics
    linkType: web
    description: GitHub repo for Team Topologies ISH
  - link: https://teamtopologies.com/key-concepts-content/finding-good-stream-boundaries-with-independent-service-heuristics
    linkType: web
    description: Finding good stream boundaries with Independent Service Heuristics
people: 2+
time: 1-2 hours
difficulty: easy
participants:
  - TheTeam
  - ProductOwner
  - Architect
---
