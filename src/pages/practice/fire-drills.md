---
templateKey: practice-page
title: Fire Drills
subtitle: Increase the confidence of your Team by gamifying Incident Management.
date: 2025-01-07T10:07:17.966Z
authors:
  - joriscram
  - zeidh
mobiusTag: foundation
icon: https://github.com/openpracticelibrary/opl-media/blob/master/images/Needs%20an%20Image.png?raw=true
whatIs: >-
  Fire Drills is a fun and safe way to practice Incident Management and Response
  in practice. It’s an extension of Chaos Engineering, which is a discipline for
  increasing the confidence of your systems. Fire Drills focuses on the People
  aspect of engineering and aims to increase the confidence of your Team. 


  The journey to cloud native applications changes more than code and deployments. It also transforms an organization’s roles and processes. A Fire drill consists of incident simulations arranged like a quest game, to help their teams adapt and to unite the whole business around successfully build and run software on the cloud. 


  The fire drill framework is a structured set of patterns around the rulebook,  role-play, and game setup. Fire drills immerse teams in simulated incidents in real-world environments. They teach teams to Detect, Identify, Communicate, and Resolve a variety of scenarios, building the skills they need to keep services running on cloud platforms as the standard deployment target. Game moderators assess players’ actions, skills, and collaboration in technical and non-technical incidents where it is professionally and psychologically safe to fail.
whyDo: Incidents fortunately don’t occur too often, but when they do, it’s a
  crucial time to give a good response. Particularly in large changes in product
  architecture or changes in team topology it is good to run a Fire Drill with a
  team. This gets the team to identify gaps in their communication, missing
  metrics and alerts in their systems and most importantly strengthen
  collaboration so everyone works together to proactively address SRE Related
  issues.
howTo: >-
  The Fire Drill itself, which we call Game Days, is essentially just the Game
  Moderator triggering incidents on a production replica which the Engineering
  team has to Detect - Identify - Communicate - Resolve. That’s the basic loop
  of a Fire Drill and if the Moderator knows the team well, that’s really all
  you need to get a feel for it. The way the Engineering team reports each phase
  in the loop is using a shared channel on a communication platform like Slack
  or Teams. That’s also where the team communicates escalations, talks to the
  vendor, submitting bug reports and sharing post-mortems etc.




  A Fire Drill can be active parts of the day or for full days. The idea is for the Players to experience an incident in the most realistic manner possible. It is therefore encouraged to just schedule the Fire Drills for a few days and have the scenarios run at some moments within the day. A recommended guideline is 1 Day per Player.  


  To facilitate the Fire Drills well we recommend setting up two roles: 


  * The Game Council 

  * The Game Moderators 


  The role of the Game Council is minimal, it’s there as an independent party to govern so that the Product Owner’s wishes align with the Scenarios that will be executed during the Fire Drill.  


  The Game Moderator is an expert in the field of Cloud with the ability and creativity to make and execute Scenarios. It is recommended that the Game Moderator also has Didactic skills to handle the aftermath and communication with the Players.
resources:
  - description: Wheel-of-Misfortune
    link: https://openpracticelibrary.com/practice/wheel-of-misfortune/
    linkType: web
  - link: https://github.com/Ortec-Finance/fire-drill-template
    linkType: web
    description: Fire Drill Template Repository
  - description: Planning · 🔥Fire Drills Moderator Template
    link: https://github.com/orgs/Ortec-Finance/projects/17
    linkType: web
people: 5+ (2 Persons to facilitate and at least a team of 3+ to experience the
  Fire Drill.)
time: 3 days (minimum)
difficulty: hard
participants:
  - For both Game Council and Game Moderator roles only one person is needed at
    a minimum
  - however two is recommended.
---
