---
templateKey: practice-page
title: Architectural Decision Records (ADR)
subtitle: Open & Transparent Decision History
date: 2021-04-06T18:59:59.091Z
authors:
  - infosec812
tags:
  - culture
mobiusTag: foundation
icon: /images/decisions-1.jpg
whatIs: >-
  ## Overview


  An [Architectural Decision (AD)](https://en.wikipedia.org/wiki/Architectural_decision) is a software design choice that addresses a functional or non-functional requirement that is architecturally significant. This might, for instance, be a technology choice (e.g., Java vs. JavaScript), a choice of the IDE (e.g., IntelliJ vs. Eclipse IDE), a choice between a library (e.g., [SLF4J](https://www.slf4j.org/) vs [java.util.logging](https://docs.oracle.com/javase/8/docs/api/java/util/logging/package-summary.html)), or a decision on features (e.g., infinite undo vs. limited undo). Do not take the term “architecture” too seriously or interpret it too strongly. As the examples illustrate, any decisions that might have an impact on the architecture somehow are architectural decisions.


  It should be as easy as possible to a) write down the decisions and b) to version the decisions.


  ## What Does an ADR Look Like?


  Here's an example of an Architectural Decision Record (In Markdown format) for deciding to adopt Architectural Decision Records.


  ```markdown

  # Use Markdown Architectural Decision Records


  ## Context and Problem Statement


  We want to record architectural decisions made in this project.

  Which format and structure should these records follow?


  ## Considered Options


  * [MADR](https://adr.github.io/madr/) 2.1.2 – The Markdown Architectural Decision Records

  * [Michael Nygard's template](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) – The first incarnation of the term "ADR"

  * [Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions) – The Y-Statements

  * Other templates listed at <https://github.com/joelparkerhenderson/architecture_decision_record>

  * Formless – No conventions for file format and structure


  ## Decision Outcome


  Chosen option: "MADR 2.1.2", because


  * Implicit assumptions should be made explicit.
    Design documentation is important to enable people understanding the decisions later on.
    See also [A rational design process: How and why to fake it](https://doi.org/10.1109/TSE.1986.6312940).
  * The MADR format is lean and fits our development style.

  * The MADR structure is comprehensible and facilitates usage & maintenance.

  * The MADR project is vivid.

  * Version 2.1.2 is the latest one available when starting to document ADRs.

  ```
whyDo: |-
  We use this practice to:

  * Have a quick reference to understand what has been done in the past
  * Allow us to share our thinking and methods with our stakeholders
  * Maintain open and transparent communication inside and outside of our teams
howTo: Have a look at some of the available templates and start reading about
  them. You can choose to use one of the ones linked below or create your own
  adaptation of the template in a format which works for your team and your
  organization.
resources:
  - link: https://adr.github.io/madr/
    linkType: web
    description: Markdown Architectural Decision Records
  - link: https://www.infoq.com/articles/sustainable-architectural-design-decisions
    linkType: web
    description: Sustainable Architectural Decisions
  - link: https://github.com/joelparkerhenderson/architecture_decision_record
    description: Other templates
    linkType: web
people: 2+
difficulty: easy
participants:
  - The Team
  - Stakeholders
  - Product Owners
---
