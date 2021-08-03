---
templateKey: practice-page
title: Wheel-of-Misfortune
subtitle: A game that aims to build confidence via simulated outage scenarios.
date: 2021-08-03T10:33:49.317Z
authors:
  - msanecki
tags:
  - learn
  - culture
  - methods
mobiusTag: foundation
icon: /images/fposter-small-wall_texture-product-750x1000.u5.jpg
whatIs: >-
  Wheel of Misfortune is a game that aims to build confidence to on-call
  engineers via simulated outage scenarios. 


  With the game:


  * you practice problem debugging and solving under stress

  * the understanding of the incident management protocol

  * effective communication with other engineers of your team and organization


  Many thanks to:


  * [dastergon](https://github.com/dastergon) for creating&publishing tooling for the game

  * [jfilipcz](https://github.com/jfilipcz) & [dastergon](https://github.com/dastergon) for discussion about the idea and how to extend it for other purposes
whyDo: It is a great way to train new hires, interns, and seasoned engineers to
  become well-rounded on-call engineers.
howTo: >-
  #### Terminology


  * Scenario: A past or fictional incident case.

  * Game Master: The host-coordinator of the session.

  * Volunteer: The trainee oncall engineer.

    **Game Master** 

  1. Choose a volunteer to be the primary oncall engineer in front of the group.

  2. Find a balance between volunteer's experience and incident's difficulty.

  3. Assist volunteer by answering questions that may arise in each theoretical action or dashboard observation. Engage with the rest of the team and ask for different ways to debug the problem following the volunteer's explanation.Team members may be made available over time for assistance in various topics.

  4. At the end, have a debrief on the learnings of the session.

     **Volunteer**  
  5. Spin the wheel and attempt to fix the theoretical outage scenario.

  6. Explain to the Game Master and the rest of the group what actions you would take (lookup queries, checks in dashboards, etc.) to find the root causes, and eventually solve the incident.

  7. Always keep an eye on the time, since it is simulated incident response scenario and not a routine troubleshooting process. During a real incident you might have an SLA or SLO breach and therefore you should take timing into account.

  8. Engage with the rest of the group. Keep them in the loop. Ask questions to different members depending on their expertise.

   **Tooling** 

  You can use this nice tool for your team/organization: https://dastergon.gr/wheel-of-misfortune/


  Instruction: https://dastergon.gr/wheel-of-misfortune/instructions.html


  ![Game](/images/screenshot-from-2021-08-03-12-53-35.png)




  Most importantly, **have fun**!


  You can read a comprehensive example on how to conduct the exercise [here](https://landing.google.com/sre/book/chapters/accelerating-sre-on-call.html#xref_training_disaster-rpg).
time: 2+
difficulty: easy
participants:
  - The team
---
