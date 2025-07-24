---
templateKey: practice-page
title: Test Automation
subtitle: Shortening the feedback loop and increasing the quality of code.
date: 2021-04-13T00:30:23.187Z
authors:
  - syvanen
  - Zenigata
  - itblaked
  - rmarting
tags:
  - methods
mobiusTag: foundation
icon: /images/testautomation_original.png
whatIs: >-
  Test Automation allows teams to remove the slow and manual testing cycles
  related to software development. Test Automation can include such things as:


  * Static code analysis

  * Linting

  * Unit tests

  * End-to-end tests

  * Configurations and policy checks

  * Security tests (dependencies, vulnerabilities, and pen tests)
whyDo: >-
  * ﻿Improved quality: Applying patterns like Test-Driven Development or
  Behavior-Driven Development drives up shared understanding Increase code
  quality.

  * Deliver reliably at speed: As features are produced, you can confidently release without a large manual registration each time.﻿ 

  * Fewer bottlenecks: Without automated tests, queues form in front of testers.

  * Faster feedback: Identifying earlier any potential failure before promote changes into production environments.

  * Standardise approach to testing: Defining a way of working where testing is another goal and benefit for the product team.
howTo: >-
  T﻿hese tests are steps of the Continuous Integration (CI) and Continuous
  Delivery pipeline, such other main steps of the software delivery life cycle.


  Easy and quick tests can be executed right after building (compiling) an application or when code is pushed or merged in source control. End-to-End and Security tests usually are executed one the software is deployed in some non-production environment.


  Many of these tests can be run in parallel, decreasing the overall time taken to run a collection of tests.


  Tools such as [Tekton](https://tekton.dev/), [Jenkins](https://jenkins.io/) or [TravisCI](https://www.travis-ci.com/) could be used to execute these tests.


  P﻿ublishing and visualizing the execution reports of the test is another key aspect of the Test Automation, as these reports provide a rapid visualization about the status of the quality, and results of all these steps along the life cycle of the software.


  T﻿ools such as [SonarQube](https://www.sonarsource.com/products/sonarqube/), [OWASP ZAP](https://www.zaproxy.org/) provide test reporting dashboards.
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/test%20automation.jpg?raw=true
  - link: https://github.com/openpracticelibrary/openpracticelibrary/blob/main/static/images/testing-pyramid.png?raw=true
  - link: https://github.com/openpracticelibrary/openpracticelibrary/blob/main/static/images/measuring-test.png?raw=true
resources:
  - link: https://openpracticelibrary.com/practice/test-driven-development/
    linkType: web
    description: Test-Driven Development
  - link: https://openpracticelibrary.com/practice/behavior-driven-development/
    linkType: web
    description: Behavior-Driven Development
  - link: https://en.wikipedia.org/wiki/Test_automation
    linkType: web
    description: Wikipedia Article - Test automation
  - link: https://tekton.dev/
    linkType: web
    description: Tekton - Cloud Native CI/CD
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - link: https://www.travis-ci.com/
    linkType: web
    description: TravisCI
people: 1+
difficulty: moderate
participants:
  - Team members
area: foundation-technical
---
