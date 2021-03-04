---
templateKey: practice-page
title: Continuous Integration
subtitle: Submit small, frequent changes instead of large, infrequent changes
date: 2018-08-10T12:22:43.000Z
authors:
  - tdbeattie
  - rdebeasi
  - mtakane
  - springdo
  - Zenigata
  - rmarting
tags:
  - methods
mobiusTag: foundation
icon: /images/continuous-integration-1.png
whatIs: With Continuous Integration (CI), developers submit small, frequent
  changes instead of large, infrequent changes. When another developer accepts
  the changes, automated tests and build steps run to ensure that the code works
  as expected. This action is completed frequently, many times a day with
  automation running each time thus insuring the code base can C_ontinuously
  Integrate._
whyDo: "* Automated testing reduces busy work and improves software quality. *
  Small, regular code commits reduce the number of integration problems. * Rapid
  feedback loops make it easier for new contributors to get started. * It's fun!
  Shipping of functional software in small increments is more enjoyable than
  waiting for someone to manually test a giant code change."
howTo: The tests and build steps are typically run in an automation server such
  as [Jenkins](https://jenkins.io/) or [Travis](https://travis-ci.org/).
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/continuous-integration-1.png?raw=true
resources:
  - link: https://podcasts.apple.com/us/podcast/ci-cd-w-tyler-auerbeck/id1501715186?i=1000491737000
    linkType: podcast
    description: CI/CD Open Practice Podcast Episode
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - link: https://travis-ci.org/
    linkType: web
    description: Travis CI
  - link: https://docs.gitlab.com/ee/ci/
    linkType: web
    description: GitLab CI/CD Documentation
difficulty: moderate
participants:
  - Team Members
area: foundation-technical
people: 1+
time: Minutes
jumbotronAlt: example pipeline
---
# What is it?

With Continuous Integration (CI), developers submit small, frequent changes instead of large, infrequent changes. When another developer accepts the changes, automated tests and build steps run to ensure that the code works as expected. This action is completed frequently, many times a day with automation running each time thus insuring the code base can C_ontinuously Integrate._

The tests and build steps are typically run in an automation server such as [Jenkins](https://jenkins.io/) or [Travis](https://travis-ci.org/).

# Why use it?

* Automated testing reduces busy work and improves software quality.
* Small, regular code commits reduce the number of integration problems.
* Rapid feedback loops make it easier for new contributors to get started.
* It's fun! Shipping of functional software in small increments is more enjoyable than waiting for someone to manually test a giant code change.

# Useful links

* [Jenkins Documentation](https://jenkins.io/doc/) - Jenkins is an extensible automation server. It can be used as a simple CI server or turned into the continuous delivery hub for any project.
* [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) - GitLab is a popular Git-repository manager which provides many features such as an easy-to-use Continuous Integration pipeline.
