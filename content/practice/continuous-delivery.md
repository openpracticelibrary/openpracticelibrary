---
title: Continuous Delivery
subtitle: Automated testing and releasing of software.
date: 2018-09-04T06:44:12.545Z
authors:
  - syvanen
  - Zenigata
area: foundation-technical
icon: /images/final_continuous-delivery.png
people: 1+
time: Minutes
difficulty: moderate
participants:
  - Team members
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