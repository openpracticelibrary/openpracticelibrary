---
templateKey: practice-page
authors:
  - syvanen
  - Zenigata
  - itblaked
howTo: >-
  These tests are typically executed by a Continuous Integration (CI) tool, for
  example [ Jenkins ](https://jenkins.io/) or
  [TravisCI](https://www.travis-ci.com/). 


  Easy and quick tests can be executed right after building (compiling) an application or when code is pushed or merged in source control.


  Many of these tests can be run in parallel, decreasing the overall time taken to run a collection of tests.
resources:
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - link: https://en.wikipedia.org/wiki/Test_automation
    linkType: web
    description: Wikipedia Article - Test automation
  - link: https://www.travis-ci.com/
    linkType: web
    description: TravisCI
participants:
  - Team members
area: foundation-technical
title: Test automation
subtitle: Shortening the feedback loop and increasing the quality of code.
date: 2021-04-13T00:30:23.187Z
tags:
  - methods
mobiusTag: foundation
icon: /images/final_test-automation.png
whatIs: >-
  Test automation allows teams to remove the slow and manual testing cycles
  related to software development. Test automation can include such things as:

  * Static code analysis

  * Linting

  * Unit tests

  * End-to-end tests

  * Security tests
whyDo: |-
  * Increase code quality
  * Faster feedback
  * Standardise approach to testing
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/test%20automation.jpg?raw=true
people: 1+
difficulty: moderate
---
## What is it?

Test automation allows teams to remove the slow and manual testing cycles related to software development. Test automation can include such things as:

- Static code analysis
- Linting
- Unit tests
- End-to-end tests
- Security tests

These tests are typically executed by a build automation tool, for example [Jenkins](https://jenkins.io/). Easy and quick tests should be ran right after building (compiling) your application, such as unit tests and static code analysis. Also many of these tests can be run in parallel, decreasing the overall time taken to run the tests.

## Why use it?

- It increases the code quality.
- It shortens feedback loops.
- It tells if your change broke some previously working code.

## How to do it?

## Further Information

- [Wikipedia Article - Test automation](https://en.wikipedia.org/wiki/Test_automation)
