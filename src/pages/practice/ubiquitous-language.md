---
templateKey: practice-page
title: Ubiquitous Language
subtitle: Define the term and concepts of a business domain in an complete
  unambiguous way.
date: 2023-01-10T09:22:39.364Z
authors:
  - JorgeTudela
tags:
  - culture
  - learn
mobiusTag: foundation
icon: /images/ubiquitous_language_galaxy_stable_difussion.jpeg
whatIs: >-
  U﻿biquitous Language is a practice of building up a canonical, rigorous and
  unambigous language between everyone involved in the software development
  process. Usually a common shared language between the development team and the
  users, but not limited to that. The product owner and other stakeholders
  should adopt it as well.


  I﻿t comes from the Domain Driven Design world. I﻿t was first introduced by Eric Evans in his own book ["Domain-Driven Design: Tackling Complexity in the Heart of Software"](https://www.amazon.com/exec/obidos/ASIN/0321125215/domainlanguag-20) in 2003.
whyDo: >-
  W﻿hen the business domain is very complex, it is not rare to find situations
  where

  t﻿eam members or the users have a different understanding of the same concept. 


  The lack of a shared understanding has a deep impact in the velocity and quality of what the development team delivers and can also lead to frustation in the users because what they have in mind is not what is finally implemented.


  S﻿ome examples of complex domain concepts:


  * ﻿*"Time travelling"* in AI model development domain

  * *"M﻿erge vs Join"* in the data engineering domain.


  D﻿eveloping an Ubiquitous Language has many beneifts:


  * I﻿t helps to understand better the business domain.

  * It helps to understand better the users.

  * It helps to remove ambiguity from the development process.

  * I﻿t stablish a common language between everyone involved in the development process. Specially between developers and users.
howTo: >-
  The output of the Ubiquitous Language practice should be a glossary of terms &
  concepts and their definitions. Ideally this glossary should be available for
  reading & reviewing by everyone involved in the development process, not only
  the developers. A git repository where changes can be tracked and suggested
  could be an ideal place for it.


  D﻿on't be afraid of drawing rather than writting. There might be concepts that are better explained in a diagram than in plain words.


  I﻿n order to start developing an Ubiquitous Language:


  1. S﻿tart collecting domain concepts from other practices. [Event Storming](https://openpracticelibrary.com/practice/event-storming/) is the perfect candidate practice to start capturing concepts that are relevant for the business domain but n﻿ot equally understood by all the participants of the Event Storming. D﻿on't limit yourself to the Event Storming, other discovery practices like [Impact Mapping](https://openpracticelibrary.com/practice/impact-mapping/) or [Empathy Mapping](https://openpracticelibrary.com/practice/empathy-mapping/) are good candidates as well.

  2. D﻿evelop definitions for those concepts. 

  3. Validate those with the development team, the users, the PO, etc. Ask for feedback.

  4. I﻿terate ;)
mediaGallery:
  - link: https://www.youtube.com/watch?v=pMuiVlnGqjk&t=2978s
resources:
  - link: https://martinfowler.com/bliki/UbiquitousLanguage.html
    linkType: web
    description: Martin Fowler article on Ubiquitous Language
  - link: https://www.amazon.com/exec/obidos/ASIN/0321125215/domainlanguag-20
    linkType: purchase
    description: 'Eric Evans book: "Domain-Driven Design: Tackling Complexity in the
      Heart of Software"'
  - link: https://thedomaindrivendesign.io/developing-the-ubiquitous-language/
    linkType: web
    description: How to develop an Ubiquitous Language
  - link: https://www.youtube.com/watch?v=pMuiVlnGqjk&t=2978s
    linkType: video
    description: What is DDD - Eric Evans - DDD Europe 2019
difficulty: easy
participants:
  - Team
  - ProductOwner
  - Stakeholders
  - Users
---
