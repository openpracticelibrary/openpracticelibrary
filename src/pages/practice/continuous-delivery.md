---
templateKey: practice-page
title: Continuous Delivery
subtitle: Automated testing and releasing of software.
date: 2018-09-04T06:44:12.545Z
authors:
  - syvanen
  - Zenigata
  - rmarting
tags:
  - methods
mobiusTag: foundation
icon: /images/continuous-delivery.png
whatIs: Continuous Delivery (CD) is an engineering practice where each change
  could be a potential release ready for production. This practice builds on top
  of the Continuous Integration practice as its starting point and adds to the
  end a step that releases artifacts for anyone to use. These artifacts could be
  software packages, container images or virtual machine images.
whyDo: >-
  * Automation reduces the manual work required to do the release, such as
  publishing the artifact to required locations for deployment and releasing of
  change notes that can now be taken from version control commit messages.

  * Faster feedback cycles from customers as each change to software can be deployed to production.

  * Happier operations as released software is tested to be ready for production deployment.

  * Readiness to do push button deployments. This can also be taken to the next level which is [Continuous Deployment](https://openpracticelibrary.com/practice/continuous-deployment/).
howTo: This practice typically requires automation that is run on a server such
  as [Jenkins](https://jenkins.io/) or [Tekton](https://tekton.dev/).
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/continuous%20delivery.png?raw=true
resources:
  - link: https://anchor.fm/openpracticelibrary/episodes/CICD-w-Tyler-Auerbeck-ejr13l
    linkType: podcast
    description: CI/CD Open Practice Podcast Episode
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - linkType: web
    link: https://tekton.dev/
    description: Tekton
  - link: https://openpracticelibrary.com/practice/continuous-deployment/
    linkType: web
    description: Continuous Deployment
  - link: https://en.wikipedia.org/wiki/Continuous_delivery
    linkType: web
    description: Wikipedia definition of Continuous delivery
participants:
  - Team members
area: foundation-technical
people: 1+
time: Minutes
perspectives:
  - ""
difficulty: moderate
---
## What is it?

Continuous Delivery (CD) is an engineering practice where each change could be a potential release ready for production. This practice builds on top of the Continuous Integration practice as its starting point and adds to the end a step that releases artifacts for anyone to use. These artifacts could be software packages, container images or virtual machine images.

This practice typically requires automation that is run on a server such as [Jenkins](https://jenkins.io/).

## Why use it?

* Automation reduces the manual work required to do the release, such as publishing the artifact to required locations for deployment and releasing of change notes that can now be taken from version control commit messages.
* Faster feedback cycles from customers as each change to software can be deployed to production.
* Happier operations as released software is tested to be ready for production deployment.
* Readiness to do push button deployments. This can also be taken to the next level which is [Continuous Deployment](https://openpracticelibrary.com/practice/continuous-deployment/).

## Further Information

* [Wikipedia definition](https://en.wikipedia.org/wiki/Continuous_delivery) for Continuous Delivery.
