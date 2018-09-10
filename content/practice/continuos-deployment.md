---
title: Continuos deployment
subtitle: Deploying changes more frequently to get faster end-user feedback
date: 2018-09-06T17:32:49.260Z
authors:
  - syvanen
area: foundation-technical
people: 1+
difficulty: moderate
participants:
  - Team members
---
## What is it?

With Continuous Deployment (CD) is a software development practice where development team maintains software so that it can be released to production at any moment. This practice builds on top of Continuous Integration and Continuous Delivery. With Continuous Deployment the softwares configuration and deployment orchestration becomes part of the development teams duty to maintain with the software.

## Why use it?

* Team maintains deployable code and configuration over new features
* Fast feedback from end users and each feature can be pushed out after completion
* Enforces everything as code practice as configuration and deployment orchestration needs to be part of the automation
* Enables fast rollbacks and recovery from failures

## How to do it?

The practice needs close collaboration of everyone involved in deployment and delivery of the software to production. Everything related to the deployment needs to me automated as much as possible. As new features are pushed to production right away also the use of "feature toggles" and "dark launches" become important.

Continuous deployment also needs a good level of monitoring of the application. These monitors should be visualised so that changes to response times or error to success rates can be quickly spotted when new deployment is rolled out.
