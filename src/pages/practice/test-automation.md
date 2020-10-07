---
templateKey: practice-page
title: Test automation
subtitle: Shortening the feedback loop and increasing the quality of code.
date: 2018-09-04T15:33:52.049Z
authors:
  - syvanen
  - Zenigata
area: foundation-technical
icon: /images/final_test-automation.png
people: 1+
difficulty: moderate
participants:
  - Team members
tags:
  - methods
whatIs: >-
  Test automation allows teams to remove the slow and manual testing cycles
  related to software development. Test automation can include such things as:

  * Static code analysis

  * Linting

  * Unit tests

  * End-to-end tests

  * Security tests
whyDo: |-
  * It increases the code quality.

  * It shortens feedback loops.

  * It tells if your change broke some previously working code.
howTo: >-
  These tests are typically executed by a build automation tool, for example
  [Jenkins](https://jenkins.io/). Easy and quick tests should be ran right after
  building (compiling) your application, such as unit tests and static code
  analysis. Also many of these tests can be run in parallel, decreasing the
  overall time taken to run the tests.
mediaGallery:
  - link: >-
      https://github.com/openpracticelibrary/opl-media/blob/master/images/test%20automation.jpg?raw=true
resources:
  - link: 'https://jenkins.io/'
    linkType: web
    description: Jenkins
  - link: 'https://en.wikipedia.org/wiki/Test_automation'
    linkType: web
    description: Wikipedia Article - Test automation
mobiusTag: foundation
primaryElement: development
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
