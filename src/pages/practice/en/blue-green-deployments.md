---
participants:
  - DevOps Team
subtitle: Always have a fall back solution
resources:
  - link: 'https://openpracticelibrary.com/practice/continuous-delivery/'
    linkType: web
    description: Continuous Delivery
  - link: 'https://openpracticelibrary.com/practice/feature-toggles/'
    linkType: web
    description: Feature Toggles
  - link: 'https://openpracticelibrary.com/practice/canary-release/'
    linkType: web
    description: Canary Release
  - link: 'https://openpracticelibrary.com/practice/dark-launches/'
    linkType: web
    description: Dark Launches
  - link: >-
      http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/
    linkType: web
    description: 'Blue-green Deployments, A/B Testing, and Canary Releases'
  - link: 'https://martinfowler.com/bliki/BlueGreenDeployment.html'
    linkType: web
    description: BlueGreen Deployments
templateKey: practice-page
title: Blue Green Deployments
date: 2018-12-18T18:56:38.846Z
authors:
  - valyonchev
tags: []
icon: /images/blue-green.jpg
whatIs: >-
  Blue Green Deployment is a technique in software development which relies on
  two productive environments being available to the team. One of them, let’s
  call it “green” is operational and takes load from the reverse proxy (load
  balancer/router). The other environment, let’s call it “blue” is a copy
  upgraded to a new version.


  ![Blue Green Deployment](/images/blue-green.jpg "Blue Green Deployment")


  The team can perform all required task for an upgrade of the product version
  on the “blue” environment without the rush of downtime. Once the “blue”
  environment is ready, past all kind of smoke tests and checks, the team simply
  redirects the reverse proxy (load balancer/router) to point to the “blue”
  environment.


  If everything works fine with the “blue” environment, the now outdated “green”
  can be used to serve as the “blue” for the next release. If things go bad the
  team can switch back to a stable environment instantly using the reverse
  proxy/load balancer/router.
howTo: >-
  Check out the following links for steps and more:


  [Blue-green Deployments, A/B Testing, and Canary
  Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/)
  by Christian Posta


  [BlueGreen
  Deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html) by
  Martin Fowler
area: delivery-deliver
time: 2+ hours
mediaGallery:
  - link: 'https://openpracticelibrary.github.io/opl-media/images/blue-green.jpg'
people: 2+
whyDo: >-
  This is a feedback loop practice, which allows the team to get prompt feedback
  from real life use of their changes. It enables [Continuous
  Delivery.](https://openpracticelibrary.com/practice/continuous-delivery/)


  The practice provides safety for performing complex releases. It removes the
  time pressure and reduces the downtime to practically zero. This is beneficial
  for both technical team as for the customers, who will not notice glitches or
  unavailability of the service/product, provided that the new version is
  performing at par. In case of adverse effects, it allows the teams to have an
  instant roll back alternative and limit the negative impact on customers.
perspectives:
  - product-ownership
difficulty: moderate
mobiusTag: delivery
---
## What is it?

Blue Green Deployment is a technique in software development which relies on two productive environments being available to the team. One of them, let’s call it “green” is operational and takes load from the reverse proxy (load balancer/router). The other environment, let’s call it “blue” is a copy upgraded to a new version.

![Blue Green Deployment](/images/blue-green.jpg "Blue Green Deployment")

The team can perform all required task for an upgrade of the product version on the “blue” environment without the rush of downtime. Once the “blue” environment is ready, past all kind of smoke tests and checks, the team simply redirects the reverse proxy (load balancer/router) to point to the “blue” environment.

If everything works fine with the “blue” environment, the now outdated “green” can be used to serve as the “blue” for the next release. If things go bad the team can switch back to a stable environment instantly using the reverse proxy/load balancer/router.

## Why use it?

This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes. It enables [Continuous Delivery.](https://openpracticelibrary.com/practice/continuous-delivery/)

The practice provides safety for performing complex releases. It removes the time pressure and reduces the downtime to practically zero. This is beneficial for both technical team as for the customers, who will not notice glitches or unavailability of the service/product, provided that the new version is performing at par. In case of adverse effects, it allows the teams to have an instant roll back alternative and limit the negative impact on customers.

## Related Practices

[Feature Toggles](https://openpracticelibrary.com/practice/feature-toggles/)

[Canary Deployment ](https://openpracticelibrary.com/practice/canary-release/)

[Dark Launches](https://openpracticelibrary.com/practice/dark-launches/)

[Continuous Delivery](https://openpracticelibrary.com/practice/continuous-delivery/)

## Further information

[Blue-green Deployments, A/B Testing, and Canary Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/) by Christian Posta

[BlueGreen Deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html) by Martin Fowler
