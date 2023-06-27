---
templateKey: practice-page
title: Security checklist
subtitle: "Shift left security by running through a checklist during code review. "
date: 2021-04-24T00:19:05.345Z
authors:
  - ladynerd
tags:
  - learn
mobiusTag: delivery
icon: /images/glenn-carstens-peters-rlw-uc03gwc-unsplash.jpg
whatIs: >-
  This Security Checklist from the team at [SafeStack.io](https://safestack.io)
  was created to improve security culture in dev teams and help them
  consistently check their code for common security risks. 


  The earlier that vulnerabilities are discovered, the cheaper and easier they are to fix. The tool is intended for use as part of a software team’s code review process to improve security posture, and the quality of the code they release.


  ### Introducing the Security Checklist


  * Identify a core group of people who are enthusiastic about improving their code review culture. 

  * Start with a single system and expand incrementally. 

  * Identify key quality metrics and measure them. 

  * Integrate the checklist directly into your build-test-release workflow.


  The security checklist has three phases 


  * Before code is pushed

  * During the code review 

  * Before the code review is marked complete


  ### Code Review Security Checklist


  #### Before pushing code to the team repository


  * Have all secrets been removed from the committed code?

    * Yes/No

  #### Before completing the code review


  * Have unresolved risks been raised and documented?

    * Yes/No

  #### During a review of the code (with author, reviewers, tester)


  * Have the right people been engaged to review the code?

    * Yes/No
  * Is the purpose of the change stated and understood by the reviewers?

    * Yes/No
  * Is there debug functionality in the code?

    * No
    * Yes, and it can only run in test environments.
  * Is user-supplied data:

    * Validated before it is used or stored? 
    * Escaped when it is passed to an interpreter?
  * Do log entries:

    * Cover all key events and states?
    * Include enough information to uniquely identify the event?
    * Exclude secrets and customers’ PII?
  * For frameworks, libraries, tools and other dependencies:

    * Are they being used effectively?
    * Have new dependencies been vetted?
    * Are they up-to-date?
  * Do response messages:

    * Make use of appropriate status codes? 
    * Exclude information that should remain internal to the
      system?
    * Limit information to the correct level of authorization?
  * To testers:

    * Is the test coverage sufficient?
    * Are misuse cases represented?

  See the [Code Review Security Checklist Implementation Manual](https://academy.safestack.io/wp-content/uploads/2022/03/secure_code_checklist_and_implementation_guide.pdf) for details.
whyDo: >
  Improve code review culture by consistently applying secure coding practices. 


  It is a good starting point for building better security practices in to the software development process. Additions and modifications to fit local practice are encouraged.


  It is not comprehensive. It is not intended as a standalone teaching tool, an accountability mechanism, or as a complete guide to secure development.  
howTo: >-
  The security checklist itself can be included as a template in a code review
  request and the review tools configured to require its completion. It may
  still be helpful to have physical copies visible around teams’ workstations. 


  The first phase takes place before the original author shares their code with the team and consists of the author verifying they haven’t included any real passwords, keys, tokens, or other secrets in their code. 


  The next phase happens during review and each item may be completed by any of the reviewers besides the original author. The reviewers confirm the right people have been tagged in and that they all understand the intended change. 


  They then check for the presence of debug code, the handling of untrusted data and response information, the correct use of tools, and that there is sufficient log and test coverage.


  Finally, if the code review has raised risks beyond the scope of the review to fix, the reviewers raise the risk to their team and ensure it is logged somewhere it will be reviewed. This can also be completed by any of the reviewers.


  ### Modifying the security checklist 


  Teams should modify the checklist to suit their needs. They shouldn’t remove safety steps because they are unable or unwilling to perform them. The entire team should be involved in decisions to modify the checklist, and the modified checklist tested on a single system to ensure it works as intended. Changes should result in a checklist that is focused, brief, actionable, collaborative, tested, and integrated. 


  Cover photo by [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/checklist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
mediaGallery:
  - link: https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80
resources:
  - link: https://www.amazon.com.au/Agile-Application-Security-Rich-Smith/dp/1491938846
    linkType: purchase
    description: "Book: Agile Application Security: Enabling Security in a
      Continuous Delivery Pipeline"
  - link: https://academy.safestack.io/wp-content/uploads/2022/03/secure_code_checklist_and_implementation_guide.pdf
    linkType: web
    description: PDF - Secure code checklist & implementation guide
participants: []
---
