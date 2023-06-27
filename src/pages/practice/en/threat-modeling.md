---
templateKey: practice-page
title: Threat Modeling
subtitle: A practice to learn What Could Go Wrong and What Are We Going To Do About It
date: 2021-05-07T16:24:03.235Z
authors:
  - dawud
  - judyobrienie
tags:
  - value
mobiusTag: discovery
icon: /images/data-flow-diagram-elements.png
whatIs: >-
  Formally, threat modeling is a process by which potential threats are
  identified and rated for severity and possible mitigations are discussed. Less
  formally, threat modeling happens when you think about how the system you’re
  building could be broken and consider what your team can do to prevent that
  from happening.


  It is important to stress that threat modeling is a process, not a tool. While tools can help the process be more efficient (e.g., by providing visualization, tracking changes over time, or identifying changes to software that would more likely affect its threat model), tools by themselves cannot currently take the place of humans reasoning about how other humans would attack a system.


  Threat modeling is most effective when multiple stakeholders come together to look at a system from different angles: developers, architects, service engineers, designers, and end users, along with security specialists. The discussion can be as simple as walking through how the system is used, how it is supposed to work, and how it actually works. Security specialists ask questions to get a better understanding of the security controls in place, and very often, everyone leaves with a better understanding of the risks that affect the system.


  Several approaches can be used to perform the assessment, for example, a design-centric threat modeling approach focuses mainly on areas where data passes over a virtual boundary separating trusted and untrusted elements.


  **Benefits**


  Threat modeling can improve the built-in security posture of a system by theorizing spotted threats and their adequate mitigations, as well as increase user confidence in that security posture. When performed correctly, it can provide a clear line of sight across a software project, helping to justify security efforts.


  **Threat modeling has these primary benefits:**


  * More secure systems: Threat modeling done properly and early establishes a foundation for building a secure system based on a secure design. Designing a system with security in mind throughout the process reduces the chances of finding vulnerabilities and gives teams more confidence to concentrate on the features being delivered.

  * Reduced cost by finding design flaws early and before release: Threat modeling normally occurs during the system design phase and allows for early identification of security risks. If vulnerabilities are found, early detection saves valuable time and monetary resources when mitigations are required. The cost of closing a security risk increases dramatically as a system nears release, and exponentially once it has been released to the public. The resulting costs of undetected vulnerabilities to a brand could even be immeasurable.

  * Reduced exposure to weaknesses other methods may not uncover: Design and development teams use many different methods to develop systems. Code and test plan reviews help engineers evaluate a systems’ effectiveness, but may not divulge such security concerns as the need for input validation or cryptography. Threat modeling examines the relationships that exist between a component’s atomic elements, analyzes how data flows between them, and exposes potentially exploitable weak points.
whyDo: >-
  The goal of the Threat Modeling process is to help Engineering teams document
  knowable security threats to an application and make rational decisions about
  how to address them, by providing an effective way to do the following:


  * Detect problems early in the software development lifecycle — even before coding begins.

  * Propose realistic mitigations to the identified weaknesses before a release, preventing costly post-deployment re-coding.

  * Spot design flaws that traditional testing methods and code reviews may overlook.

  * Think about threats and security issues unique to the service.

  * Brainstorm as a group to evaluate new forms of attack.

  * Help target testing and code review.

  * Identify gaps in Compliance and Security Standards.

  * Highlight assets, threat agents, and controls to deduce components that attackers will target.
howTo: >-
  Basically, the Threat Modeler strives to improve the system’s built-in
  security posture by:


  * Understanding the system architecture, to the single-component level

  * Providing a basis for secure design and implementation by helping Engineering teams understand what they are securing against

  * Discovering weaknesses by comparing architecture design and configuration against industry standards

  * Understanding the threat profile of a system and its components and enumerating potential weaknesses that may lead to an attacker reaching their goal

  * Providing feedback for the application security lifecycle (e.g. a framework for penetration testing and analysis of the weaknesses)


  ### Scope: One Threat Model or Many?


  Depending on the size of a particular service, one threat model can be completed or a number of threat models per system, whereby the system is broken down by features, components or Engineering teams.


  Threat modeling by individual feature or component instead of creating a single threat model for the entire workload has a number of benefits:


  * Smaller chunks of work allow for more granular tracking of progress, which aligns well with Engineering teams that are following agile-style delivery and gives leadership a constant view of progress.

  * The resulting threat models tend to be more detailed, which results in more findings being identified.

  * The threat model potentially can be reused as a dependency for other workload features that use the same components.

  * Considering threat mitigations at the component level means that a single threat may have multiple mitigations at the overall workload level, resulting in an improved resilience against those threats.

  * Issues with a single threat model (e.g. a critical threat which is not yet mitigated) do not become launch blockers for the entire workload, but rather just for the individual feature.

  * An Engineering team may consider components built by other teams within their company as “external systems” that need to be protected against, meaning that natural inter-team communication difficulties are also well examined by the threat models.
mediaGallery:
  - link: https://i.ibb.co/nBWZVmX/Data-Flow-Diagram-Elements.png
resources:
  - link: http://securitycards.cs.washington.edu/
    description: The Security Cards, A Security Threat Brainstorming Toolkit
    linkType: purchase
  - link: https://agilestationery.com/pages/elevation-of-privilege-eop-threat-modeling-card-game
    linkType: purchase
    description: Elevation of Privilege (EoP) Threat Modeling Game
  - description: OWASP Application Threat Modeling
    link: https://owasp.org/www-community/Application_Threat_Modeling
    linkType: web
  - link: https://owasp.org/www-project-threat-model-cookbook/
    linkType: web
    description: OWASP Threat Model Cookbook
  - link: https://www.goodreads.com/book/show/18379732-threat-modeling?from_search=true&from_srp=true&qid=nMJ69XcZ8Y&rank=1
    linkType: purchase
    description: "Threat Modeling: Designing for Security"
difficulty: moderate
participants: []
---
