---
templateKey: practice-page
title: Chaos Engineering
subtitle: Chaos engineering is a practice of testing distributed software that
  deliberately introduces failure and faulty scenarios to verify its resilience
  in the face of random disruptions.
date: 2022-07-22T09:16:22.656Z
authors:
  - sebw
mobiusTag: delivery
icon: /images/chaos-engineering.png
whatIs: >-
  Chaos Engineering is a practice where an organization tries to predict the
  unpredictable. It can be used to achieve resilience against infrastructure
  failures, network failures, and application failures.


  Typically test driven development is testing for mishaps that can be predicted, such as testing that 2 + 2 = 4 or testing that a database is available before writing to it.


  With chaos engineering, we introduce failures on purpose on production systems to see how they withstand the chaos.


  Disruptions can be of different nature:


  * server shutdown such as shutting down a service, server or a whole datacenter

  * latency injection in order to simulate degradation or outages in a network

  * resource exhaustion such burning up a CPU or filling up a disk


  These disruptions can cause applications to respond in unpredictable ways.


  In case of disruption the application needs to be improved to withstand the specific failure scenario.
whyDo: >-
  * Allows developers to improve applications to withstand failure scenarios
  that are hard to replicate in a CI/CD pipeline

  * Allows operations to test failure scenarios that are hard to implement in CI/CD pipelines (such as network latency)

  * Leads to application improvement
howTo: >-
  [Chaos Mesh](<﻿https://chaos-mesh.org>) is a chaos engineering platform for
  Kubernetes.


  [Chaos Monkey](https://netflix.github.io/chaosmonkey/) randomly terminates instances in production


  [Chaos Blade](https://chaosblade.io/) is a cloud-native chaos engineering platform that supports multiple environments, clusters, and languages.
resources:
  - link: https://www.dynatrace.com/news/blog/what-is-chaos-engineering/#:~:text=Chaos%20engineering%20is%20a%20method,and%20can%20break%20under%20pressure.
    linkType: web
    description: Chaos Engineering explained by Dynatrace
  - link: https://en.wikipedia.org/wiki/Chaos_engineering
    description: Wikipedia definition of Chaos Engineering
    linkType: web
  - link: https://principlesofchaos.org/
    linkType: web
    description: Principles of chaos
participants: []
---
