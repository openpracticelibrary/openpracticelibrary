---
participants:
  - DevOps Team
subtitle: Exposing a small number of real users to a new version
resources:
  - link: 'https://openpracticelibrary.com/practice/continuous-delivery/'
    linkType: web
    description: Continuous Delivery
  - link: 'https://openpracticelibrary.com/practice/split-testing-a-b-testing/'
    linkType: web
    description: Split Testing A B Testing
  - link: 'https://openpracticelibrary.com/practice/dark-launches/'
    linkType: web
    description: Dark Launches
  - link: 'https://openpracticelibrary.com/practice/blue-green-deployments/'
    linkType: web
    description: Blue Green Deployments
  - link: >-
      http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/
    linkType: web
    description: 'Blue-green Deployments, A/B Testing, and Canary Releases'
  - link: 'https://martinfowler.com/bliki/CanaryRelease.html'
    linkType: web
    description: Canary Release
templateKey: practice-page
title: Canary Release
date: 2018-12-18T19:00:46.071Z
authors:
  - valyonchev
tags:
  - learn
icon: /images/julia-craice-974133-unsplash.jpg
whatIs: >-
  In software development, this is a form of Continuous Delivery in which only a
  small part of the real users of a product will be exposed to the new version
  of the product. The team would monitor for regressions, performance issues and
  other adverse effects and can easily move users back to the working old
  version if issues are spotted.


  The term comes from the use of caged birds in coal mines to discover the build
  up of dangerous gases early on. The gases would kill the bird long before they
  become life threatening for the miners. As with the canary in the mine, this
  release practice provides an early warning mechanism for avoiding bigger
  issues.
whyDo: >-
  This is a feedback loop practice, which allows the team to get prompt feedback
  from real life use of their changes. It enables the [Continuous
  Delivery](https://openpracticelibrary.com/practice/continuous-delivery/).


  The Canary Release provides continuous delivery teams with safety by enabling
  them to perform a phased roll-out, gradually increasing the number of users on
  a new version of a product. While rolling out the new version, the team will
  be closely monitoring the performance of the platform and try to understand
  the impacts of the new version and assess the risks for adverse effects as
  regressions, performance, even downtime. This approach allows the team to
  “roll-back” the release as soon as such adverse effects are observed without
  the majority of the customers being impacted even for a limited amount of
  time.
howTo: >-
  Canary Release is similar to [A/B
  Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/)
  in the sense that it is only exposing a part of the population to the new
  feature, but unlike [A/B
  Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/),
  the new feature can and is typically a completely new feature and not just a
  small tweak of an existing one. The purpose is different too. [A/B
  Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/)
  is looking to improve the product performance in terms of getting business
  outcomes, while the Canary release is focus entirely on the technical
  performance.


  Canary Release is similar to the [Dark
  Launch](https://openpracticelibrary.com/practice/dark-launches/) as they both
  expose only part of the population to a feature. The [Dark
  Launch](https://openpracticelibrary.com/practice/dark-launches/) is focused on
  understanding the way users will react and use the new feature, while Canary
  Release is really focused on the technical performance of the changed product
  or the individual feature (if using a it can be isolated in the architecture).


  Feature toggles are an enabling practice, which allows for Canary Releases to
  be implemented in existing products.


  ### Feature Toggles


  [Dark Launches ](https://openpracticelibrary.com/practice/dark-launches/)


  [Blue/Green
  Deployment](https://openpracticelibrary.com/practice/blue-green-deployments/)


  [Continuous
  Delivery](https://openpracticelibrary.com/practice/continuous-delivery/)
jumbotron: /images/julia-craice-974133-unsplash.jpg
area: delivery-measure-and-learn
time: 2+ hours
mediaGallery:
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/julia-craice-974133-unsplash.jpg
  - link: 'https://www.youtube.com/watch?v=FT2O-qLj9Hc'
people: 2+
perspectives:
  - product-ownership
difficulty: moderate
jumbotronAlt: Canary
mobiusTag: delivery
---
## What is it?

In software development, this is a form of Continuous Delivery in which only a small part of the real users of a product will be exposed to the new version of the product. The team would monitor for regressions, performance issues and other adverse effects and can easily move users back to the working old version if issues are spotted.

The term comes from the use of caged birds in coal mines to discover the build up of dangerous gases early on. The gases would kill the bird long before they become life threatening for the miners. As with the canary in the mine, this release practice provides an early warning mechanism for avoiding bigger issues.

## Why use it?

This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes. It enables the [Continuous Delivery](https://openpracticelibrary.com/practice/continuous-delivery/).

The Canary Release provides continuous delivery teams with safety by enabling them to perform a phased roll-out, gradually increasing the number of users on a new version of a product. While rolling out the new version, the team will be closely monitoring the performance of the platform and try to understand the impacts of the new version and assess the risks for adverse effects as regressions, performance, even downtime. This approach allows the team to “roll-back” the release as soon as such adverse effects are observed without the majority of the customers being impacted even for a limited amount of time.

## Related Practices

Canary Release is similar to [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) in the sense that it is only exposing a part of the population to the new feature, but unlike [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/), the new feature can and is typically a completely new feature and not just a small tweak of an existing one. The purpose is different too. [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) is looking to improve the product performance in terms of getting business outcomes, while the Canary release is focus entirely on the technical performance.

Canary Release is similar to the [Dark Launch](https://openpracticelibrary.com/practice/dark-launches/) as they both expose only part of the population to a feature. The [Dark Launch](https://openpracticelibrary.com/practice/dark-launches/) is focused on understanding the way users will react and use the new feature, while Canary Release is really focused on the technical performance of the changed product or the individual feature (if using a it can be isolated in the architecture).

Feature toggles are an enabling practice, which allows for Canary Releases to be implemented in existing products.

Feature Toggles

[Dark Launches ](https://openpracticelibrary.com/practice/dark-launches/)

[Blue/Green Deployment](https://openpracticelibrary.com/practice/blue-green-deployments/)

[Continuous Delivery](https://openpracticelibrary.com/practice/continuous-delivery/)

## Further information

[Blue-green Deployments, A/B Testing, and Canary Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/) by Christian Posta

[Canary Release](https://martinfowler.com/bliki/CanaryRelease.html) by Martin Fowler

Image credit: Photo by [Julia Craice](https://unsplash.com/photos/o0S-0Pa4F2M) on Unsplash
