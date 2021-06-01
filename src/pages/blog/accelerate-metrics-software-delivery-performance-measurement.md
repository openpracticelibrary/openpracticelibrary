---
templateKey: blog-page
title: Accelerate Metrics - Software Delivery Performance Measurement
subtitle: Measurements that demonstrate software delivery capability
date: 2021-04-14T09:19:48.343Z
authors:
  - tom-geraghty
jumbotron: /images/1_wro4ylkc8rnayiikowgudq.png
---
**What are the Accelerate Metrics?**

The DORA/Accelerate metrics were devised by Nicole Forsgren, Jez Humble and Gene Kim, using data and evidence from the annual State Of DevOps reports, and codified in the book “Accelerate”, published in 2018

The four metrics reflect core capability categories that they identified as essential to software delivery performance:

* Continuous Delivery
* Architecture
* Product and Process
* Lean Management and Monitoring
* Cultural

**The four Accelerate metrics are:**

* **Lead time to change**
* **Deployment frequency**
* **Mean time to restore (MTTR)**
* **Change failure rate**

The first two lean towards the typically Development-oriented goal of making changes, whilst the second two lean towards the typically Operations-oriented goal of stability.

The metrics are powerful and useful whether you’re running in Agile or Waterfall mode, whether your workloads are in the public cloud or on dedicated hardware in a datacentre, and whether your runtime is a monolithic mainframe or containerised microservices. They’re technology agnostic, and are equally useful for a small startup technology team, or multiple value-stream oriented teams in large complex enterprises.

The data from the Accelerate research shows that high performing technology organisations have the following capabilities:

* Highly frequent software deployments
* Short lead times from commit to deploy
* Short times to recover from downtime
* Lower change failure rate

**Why would we use them?**

Whether your organisation is highly focussed on reliability and stability, or on rapid product iterations and speed-to-market of new features, all these metrics matter.

These are “outcome-based” metrics, not input or output based. I.e. they measure what \*happens\*, not what someone put in (hours worked, for example), or what they put out (e.g. lines of code written). Outcome metrics describe a desired state of the world, such as “high reliability” (measured by MTTR) or “rapid value is delivered” (measured by lead time to change).

These metrics reflect desired outcomes that are commonly shared as aspirational for all teams across an organisation. One of the dangers of metrics is that they can incentivise teams to compete against each other; if teams have different metrics, it can result in an antagonistic relationship where the success of one team harms another. An example of this is demonstrated by siloed dev and ops teams, where developers push as many features as possible (because their metric is delivering new features), without regard to maintainability (because that’s the ops team’s metric, not theirs), and the ops team struggle to keep services running reliably under the onslaught of new changes and hard-to-maintain code.

When these four metrics are in tension with each other, they’re powerful drivers of performance. Teams cannot consciously or unconsciously game their metrics by raising one whilst another suffers. Teams need to be able to optimise themselves, but an over-emphasis on localised optimisation can result in a poorly performing organisation where one team’s performance means another team suffers.

It is essential to use them in combination. Using any single metric in isolation may not provide any benefit, and may even cause harm. For example, measuring change rate without measuring change failure rate could result in highly frequent, poor quality changes that impact on service levels and customer experience. Measuring only mean time between failures without mean time to restore could result in infrequent but high-impact downtime through encouraging “big bang” deployment strategies.

Let’s dive in to each metric, what they mean, and how teams can improve them:

**Metric: Lead Time to Change**

*Answers: “How long does it take for a commit to be running in production?”*

This is described as “the time it takes to go from code committed to code successfully running in production”, and is a measure of the technical capability of getting code running and delivering value - since it is only when code is running in production that value is being delivered - at all other prior stages, “work” is only generating inventory. This is a measure that is strongly bound to the technological capability of the team and the technological strength of the platform and architecture of systems. Good system design, CI/CD pipelines, and small batch sizes improve this metric.

In terms of measurement, you need to know and record both when the commit happened, and when the corresponding deploy happened. The expired time between these two events is your lead time to change.

Note: Some teams may measure total cycle time instead of time from commit to deploy, however the total cycle time (from the time a requirement is identified and work is started) may depend on confounding factors outside the team’s control and thus may not be such a strong metric.

**Metric: Deployment Frequency**

*Answers: “How often do we deploy to production?”*

Deployment frequency is effectively a proxy for batch size. Smaller batches (deployments) made more often, are an indicator and a foundation for higher performance. Smaller batch sizes are faster to deploy, lower risk, and easier to roll back than larger batch sizes. Techniques such as feature flags, canary deployments, and well designed CI/CD pipelines improve this metric.

This metric also encourages the adoption of an experimental mindset, using multiple small deployments to test hypotheses and release the most valuable features to customers.

This is one of the easiest metrics to measure, because deployments are usually well recorded, wherever methods or systems you use. Be careful to define a deployment appropriately though: in your context, does a single line of code change count as a deployment? Does a multi-line of code change count if it’s to a system that receives very low traffic?

**Metric: Mean Time To Restore (MTTR)**

Answers: “How long does it take us to restore from a failure in production?”

Failures are inevitable. From the unforeseen consequences of changes, which can result in partial or complete failure of services, to capacity issues, malicious or accidental threats, expiring certificates or, as usual, DNS, system failure is a fact of life.

The faster that changes can be rolled back, or systems can be manually or automatically adapted to restore services, the higher the performance of the team and the better the customer experience and value delivered. Improving the mean time to restore requires lower batch size of changes, building and utilising more resilient and distributed systems, allowing graceful component failures through appropriate decoupling and queuing, alongside effective monitoring and alerting.

In terms of measurement, you need to know when the incident occured (not just when it was first observed or recorded), and when it was resolved. Ensure you define what “resolved” means: can “resolved” mean the system running in a degraded state but available, or is there an optimum “desired” state of the system? If the latter, you’re likely to require some degree of Service Level Indicators (SLI’s) to ensure that everyone agrees on the desired state.

**Metric: Change Failure Rate (CFR)**

*Answers: “How often do our deployments result in a failure in production?”*

Various estimates have been made to show how many changes to production result in system failures, and they range from 5% to 50% or more. Failures as a result of changes impact the customer experience and enforce a team switch from delivering planned value to unplanned firefighting work. Unplanned work always takes priority over planned work.

With larger, complicated systems that possess tightly bound components, the chances of failure increase. Likewise if development processes do not include appropriate unit or integration tests and static code analysis, and the development team practices do not include pair programming or peer review, the chances of failure are higher. Reducing change failure rate requires higher capability in building in quality earlier into the software development lifecycle.

To measure this, we must know the volume of deployments and the volume of incidents. We should also be able to link and demonstrate causality between the deployment and the incident, which may only be evident some time after the fact, and may be weeks or months after the original change.

Note: it might not be desirable to aim to reduce CFR to zero. Since all deployments carry a non-zero degree of risk, a CFR of zero over a long period of time may indicate that the team could improve other metrics by increasing the risk tolerance of deployments. Of course, this will depend on the risk appetite of the business, and whether the business is highly focussed on reliability and security, or speed-to-market.

**Use all four metrics together**

In aggregate, these measures reflect a team’s DevOps capability over time. It’s important to remember that metrics can go the other way to which you intend, but by utilising effective feedback loops, good leadership and management practices, a team can be empowered to improve these four metrics and achieve high performance.





**Additional information and links**

Accelerate, by Nicole Forsgren, Jez Humble and Gene Kim

<https://itrevolution.com/book/accelerate/>

Measure Software Delivery Performance With Four Key Metrics

<https://itrevolution.com/measure-software-delivery-performance-four-key-metrics/>

The State of DevOps report 2019

<https://services.google.com/fh/files/misc/state-of-devops-2019.pdf>

Summary of The State of DevOps 2020:

<https://tomgeraghty.co.uk/index.php/the-state-of-devops-report-2020/>

Holistics.io:

<https://www.holistics.io/blog/accelerate-measure-software-development/>

Goodhart’s Law

<https://towardsdatascience.com/unintended-consequences-and-goodharts-law-68d60a94705c>

Game Theory:

<https://plato.stanford.edu/entries/game-theory/>

Pelorus

<https://github.com/konveyor/pelorus>

Canary releases

<https://martinfowler.com/bliki/CanaryRelease.html>

Feature Flags

<https://launchdarkly.com/blog/what-are-feature-flags/>

Working in small batches

<https://cloud.google.com/architecture/devops/devops-process-working-in-small-batches>

CI/CD

<https://www.redhat.com/en/topics/devops/what-cicd-pipeline>