---
templateKey: practice-page
title: Continuous Deployment
subtitle: Deploying changes more frequently to get faster end-user feedback.
date: 2018-09-10T08:38:12.013Z
authors:
  - syvanen
  - Zenigata
tags:
  - methods
mobiusTag: foundation
icon: /images/continuous-deployment.png
whatIs: With Continuous Deployment (CD), the development team maintains software
  so that it can be released to production at any moment, specifically on
  demand. This practice builds on top of [Continuous
  Integration](https://openpracticelibrary.com/practice/continuous-integration/)
  and [Continuous
  Delivery](https://openpracticelibrary.com/practice/continuous-delivery/). As a
  result, the software configuration and deployment orchestration becomes part
  of the development team's duty.
whyDo: >-
  * The development team maintains deployable code and configuration over new
  features.

  * It enables fast feedback from end users.

  * Each feature can be pushed out after completion.

  * It enforces everything as code practices as configuration and deployment orchestration needs to be part of the automation.

  * It enables fast rollbacks and recovery from failures.
howTo: >-
  The practice needs close collaboration of everyone involved in deployment and
  delivery of the software to production. Everything related to the deployment
  needs to me automated as much as possible. As new features are pushed to
  production right away, the use of [feature
  toggles](https://martinfowler.com/articles/feature-toggles.html) and [dark
  launches](https://openpracticelibrary.com/practice/dark-launches/) becomes
  important.

  Continuous Deployment also needs a good level of monitoring of the application. These monitors should be visualised so that changes to response times or error to success rates can be quickly spotted when new deployment is rolled out.
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/continuous%20deployment.png?raw=true
resources:
  - link: https://anchor.fm/openpracticelibrary/episodes/CICD-w-Tyler-Auerbeck-ejr13l
    linkType: podcast
    description: CI/CD Open Practice Podcast Episode
  - link: https://openpracticelibrary.com/practice/continuous-integration/
    linkType: web
    description: Continuous Integration
  - link: https://openpracticelibrary.com/practice/continuous-delivery/
    linkType: web
    description: Continuous Delivery
  - link: https://martinfowler.com/articles/feature-toggles.html
    linkType: web
    description: feature toggles
  - link: https://openpracticelibrary.com/practice/dark-launches/
    linkType: web
    description: Dark Launches
people: 1+
difficulty: moderate
participants:
  - Team members
area: foundation-technical
---
## What is it?

With Continuous Deployment (CD), the development team maintains software so that it can be released to production at any moment, specifically on demand. This practice builds on top of [Continuous Integration](https://openpracticelibrary.com/practice/continuous-integration/) and [Continuous Delivery](https://openpracticelibrary.com/practice/continuous-delivery/). As a result, the software configuration and deployment orchestration becomes part of the development team's duty.

## Why use it?

* The development team maintains deployable code and configuration over new features.
* It enables fast feedback from end users.
* Each feature can be pushed out after completion.
* It enforces everything as code practices as configuration and deployment orchestration needs to be part of the automation.
* It enables fast rollbacks and recovery from failures.

## How to do it?

The practice needs close collaboration of everyone involved in deployment and delivery of the software to production. Everything related to the deployment needs to me automated as much as possible. As new features are pushed to production right away, the use of [feature toggles](https://martinfowler.com/articles/feature-toggles.html) and [dark launches](https://openpracticelibrary.com/practice/dark-launches/) becomes important.

Continuous Deployment also needs a good level of monitoring of the application. These monitors should be visualised so that changes to response times or error to success rates can be quickly spotted when new deployment is rolled out.
