---
templateKey: practice-page
title: Blameless Postmortem
subtitle: Turn incident into an investment in future reliability
date: 2022-03-22T11:10:08.413Z
authors:
  - jfilipcz
tags:
  - learn
mobiusTag: delivery
icon: /images/markus-winkler-afw1hht0nss-unsplash.jpg
whatIs: >-
  Blameless Postmortem is a post-incident practice assessing an incident or
  other types of outages, its timeline, environment conditions, and all possible
  factors that lead an incident to happen. A postmortem typically also covers
  incident timeline and all factors that in a given organization generate
  incident, and impacts operators behavior before, during and after the outage
  has happened. Practice allows participants and stakeholders to quickly form
  conclusions on what were the most important factors contributing to the
  incident. It also serves a learning purpose, both by providing in depth
  experience for participants and by producing a postmortem summary which can be
  shared with all interested parties. A postmortem can be treated as the
  evolution of a Root Cause Analysis (RCA) which is done in almost all major IT
  support organizations.


  The major difference between an RCA and Blameless Postmortem is the way both of them are run, with the later putting emphasis not only establishing the root cause but also ensuring that there’s no form of possibly harmful judgement being made along the way. Often a postmortem is also carried out in a less formalized manner, making sure that the actual story comes before documentation.


  “Our job is not to point fingers at an unlucky engineer that applied a wrong configuration file, our job is to figure out why he picked the wrong one and what we personally and as an organization can do to prevent it in the future.”
whyDo: >-
  A Blameless Postmortem serves couple of important purposes:


  * Identifying factors that lead to an incident and affected the incident timeline, both in good and bad way

  * Improves communication both within the team and across teams involved in the incident response and Postmortem itself - “if we can openly talk about failures, we can talk about anything”

  * Promote the safe culture of “it’s alright to fail”
howTo: >-
  A successful Blameless Postmortem is build on two fundations:


  * Availability of the information regarding the incident.

  * Psychological safety of all participants that promotes speaking up openly


  As much information as possible should be secured before the Postmortem meeting, and should include incident tickets, reports and most importantly, a list of actions taken during the incident remediation and resolution. Make sure that whatever the form of track of actions is, it has the information about what has been done, preferably what the outcome of the action was, along with timestamps. Tracking the order of actions and outcomes is often crucial in establishing the general “picture”. Make sure you also identify all parties involved in incident response, and ensure that all those parties are represented on Postmortem meetings. Key business stakeholders may want to participate in the blameless postmortem. It is strongly recommended they do not participate in the postmortem itself as their very presence can prevent others from speaking freely. The best time to involve stakeholders is after the postmortem has been drafted and reviewed by senior engineers for accuracy.


  Before the meeting, make sure expectations are set correctly - Postmortems are not being done with the intent to establish blame , it’s for establishing what went well and what went wrong. Conclusions of any sort should be respectful and only focus on atomic actions, psychological safety of all participants is the key to getting trustworthy results out of a Postmortem. If there’s a disagreement on an action that has been taken, make sure the subject of disagreement is explained in detail and an alternative approach is presented. A Blameless Postmortem assumes every incident participant acted with the best intentions based on the information they had at the time. It also acknowledges that things fail and human beings make mistakes. With those assumptions in mind, it is clear that it is the organization's responsibility to account for, and prepare for, failures and mistakes - the express intent of a Postmortem is to help and improve the organization.


  Given these rules are accepted by all participants, information is secured, and all parties are represented , you’re ready to run the meeting. Meeting course should be structured in a way that follows the timeline of the incident . Participants go through each item, starting with how the incident was identified, what actions have been taken etc. Consider discussing if all parties needed for incident resolution were involved in a timely manner. That doesn’t stop there as any item considered important for incident response should be also discussed. Think of role playing games, with the script being based on track of actions. Depending on granularity decided by participants, all major actions should be discussed. Be mindful of an action’s context and the information that was available at the point of time the action happened. Also, take advantage of hindsight to help choose better paths in the future. . In general, an action should be discussed in the dimensions of:


  * What led to the action being taken?

  * Is the action outcome considered positive or negative?

  * What could we do differently knowing the outcome?


  Discussion may unveil both small and large issues, and if there’s a general consensus specific thing impacted the incident response in either positive or negative way, be sure remediation is discussed. An Action Point should be raised to to track remediation, and decrease a risk level for reliability. Keep an open mind, some things may be solved by technical means, some are more procedurally based, but all come together in the end and all are important for lowering the risk of incident occurrence.




  The meeting should be closed when all participants consider the incident to be explained and well understood, and the Postmortem summary prepared and accepted by all parties present. A postmortem summary that can be shared with stakeholders and other interested parties should be brief and precise, focusing on facts and leaving all personal factors aside. A summary should be prepared with aim of helping others not to make the same mistakes. Last but not least, be sure Action Points are looked up and dealt with. There’s no better booster for the next Postmortem, than participants' knowledge that the previous one wasn’t a waste of time and really improved the way organization works. Don’t forget about another useful practice, called Wheel-of-Misfortune for which Postmortem is a great provider of scripts and content.
mediaGallery:
  - link: https://www.smartsheet.com/sites/default/files/2020-09/IC-Blameless-Post-Mortems-Five-Whys.png
  - link: https://www.smartsheet.com/sites/default/files/2020-09/IC-Blameless-Post-Mortems-Best-Practices-Infographic.png
resources:
  - link: https://openpracticelibrary.com/practice/new/
    linkType: web
    description: "Measuring Psychological Safety "
  - link: https://extfiles.etsy.com/DebriefingFacilitationGuide.pdf
    linkType: web
    description: Debriefing Facilitation Guide
  - link: https://openpracticelibrary.com/practice/wheel-of-misfortune/
    linkType: web
    description: Wheel-of-Misfortune
participants: []
---
