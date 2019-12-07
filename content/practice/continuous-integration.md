---
title: Continuous Integration
subtitle: Automated code merge and build upon a team member's contribution.
date: '2018-08-10T13:22:43+01:00'
authors:
  - tdbeattie
  - rdebeasi
  - mtakane
  - springdo
  - Zenigata
area: foundation-technical
icon: ''
jumbotronAlt: example pipeline
people: 1+
time: Minutes
difficulty: moderate
participants:
  - Team Members
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
