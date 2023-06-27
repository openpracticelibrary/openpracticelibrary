---
templateKey: practice-page
title: Dark Launches
subtitle: Letting a small group of interested users test features before others
date: 2018-12-18T18:54:44.225Z
authors:
  - valyonchev
  - trncb
tags:
  - measure
  - learn
mobiusTag: delivery
icon: /images/dark-launches-2.jpg
whatIs: "Dark Launches are a continuous delivery practice, which releases new
  features to a subset of your end-users and then capture their behaviors and
  feedback. \r

  They enable the team to understand the real-life impact of these new
  features, which may be unexpected for users in the sense that no users asked
  for them. \r

  It is one of the last steps for validating a product/market fit for new
  features.\r

  Rather than launch the features to your entire group of users at once, this
  method allows you to test the waters to make sure your application works as
  planned before you go live.\r\n"
whyDo: "This is a feedback loop practice, which allows the team to get prompt
  feedback from real-life use of their changes.\r

  Dark launches provide safety by limiting the impact of new features to only
  a subset of the users. \r

  It allows the team to build a better understanding of the impact created by
  the new feature and the ways the users would interact with it. \r

  Often novel ways of interaction can surface, ways which were not initially
  envisioned by the team. \r

  This can be both positive and negative and the limited availability allows
  the team to draw conclusions from the real-life use and decide if the feature
  will be made widely available, further developed or discontinued.\r\n"
howTo: >-
  The biggest risk to consider before going live is how your users will react to
  and navigate through your application. Before you launch, ask yourself three
  questions: 


  1. Are your users able to find the new feature? 

  2. *Are they aware of the change?*

  3. Do they even need to know about it?


  Once you’ve answered these questions and decided it’s time to go live, it should be a walk in the park — assuming all your findings during the first steps were positive. In most cases, all you have to do to go live is simply disable the old functionality of the feature you wrote. This can either be done by removing the old code or by disabling it in the configuration.


  After you’ve gone live, monitor the behavioral changes of your application and your users to see whether the deployment was a success. If everything is going well, give yourself a pat on the back! Most of the time, though, it’s not quite that simple. You’re never 100 percent positive the application is working correctly, so you’ll want to keep the old code available or running for a few days or weeks to ensure there are no bugs that pop up.


  ### Related Practices


  - [Feature toggles](https://openpracticelibrary.com/practice/feature-toggles/) are an enabling practice, which allows for Dark Launches to be implemented in existing products. 

  - Dark Launch is similar to [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) in the sense that it is only exposing a part of the population to the new feature, but unlike [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/), the new feature can and is typically a completely new feature and not just a small tweak of an existing one. Additionally, [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) improves the product performance in terms of getting business outcomes from an existing feature, while Dark Launches explore the possibility to extend the market by adding new features.

  - Dark Launch is similar to the [Canary Release](https://openpracticelibrary.com/practice/canary-release/) as they both expose only part of the population to a feature. The Dark Launch is focused on understanding the way users will react and use the new feature, while [Canary Release](https://openpracticelibrary.com/practice/canary-release/) is really focused on the technical performance of the changed product or the individual feature (if using it can be isolated in the architecture).
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/dark%20launches%202.jpg?raw=true
resources:
  - link: https://blog.leaseweb.com/2017/11/17/dark-launching/
    linkType: web
    description: "Dark Launching: A Way to Test New Features Before Going Live"
  - link: https://openpracticelibrary.com/practice/split-testing-a-b-testing/
    linkType: web
    description: Split Testing A B Testing
  - link: https://openpracticelibrary.com/practice/canary-release/
    linkType: web
    description: Canary Release
  - link: https://openpracticelibrary.com/practice/blue-green-deployments/
    linkType: web
    description: Blue Green Deployments
  - link: https://openpracticelibrary.com/practice/continuous-delivery/
    linkType: web
    description: Continuous Delivery
participants:
  - Product Owner
  - DevOps Team
jumbotron: /images/ben-white-178537-unsplash.jpg
area: delivery-measure-and-learn
people: 2+
time: 2-10 weeks
perspectives:
  - product-ownership
difficulty: moderate
---
## What is it?

A continuous delivery practice, which allows you to release new features only to a group of users and invisible to others. The Dark Launch enables the team to understand the real life impact of new features, which may be unexpected for users in the sense that no users asked for them. These type of release allows the team to only expose a part of the user population to the new feature and carefully observe and measure the user interaction. It is one of the last steps for validating a product/market fit for new features.

## Why use it?

This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes.

The Dark Launch provides safety by limiting the impact of new features to only a subset of the users. It allows the team to build better understanding of the impact created by the new feature and the ways the users would interact with it. Often novel ways of interaction can surface, ways which were not initially envisioned by the team. This can be both positive and negative and the limited availability allows the team to draw conclusions from the real life use and make a decision on if the feature will be made widely available, further developed or discontinued.

## Related Practices

Feature toggles are an enabling practice, which allows for Dark Launches to be implemented in existing products.

Dark Launch is similar to [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) in the sense that it is only exposing a part of the population to the new feature, but unlike [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/), the new feature can and is typically a completely new feature and not just a small tweak of an existing one. The purpose is different too as [A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) is looking to improve the product performance in terms of getting business outcomes from an existing feature, while the Dark Launch is often exploring the possibility to extend the market by adding new features.

Dark Launch is similar to the [Canary Release](https://openpracticelibrary.com/practice/canary-release/) as they both expose only part of the population to a feature. The Dark Launch is focused on understanding the way users will react and use the new feature, while [Canary Release](https://openpracticelibrary.com/practice/canary-release/) is really focused on the technical performance of the changed product or the individual feature (if using it can be isolated in the architecture).

[Canary Deployment ](https://openpracticelibrary.com/practice/canary-release/)

[Blue/Green Deployment](https://openpracticelibrary.com/practice/blue-green-deployments/)

[Continuous Delivery](https://openpracticelibrary.com/practice/continuous-delivery/)

## Further information



## _**Improve this article:** We lack links to good explanations of the practice._



Image credit: Photo by [Ben White](https://unsplash.com/photos/4Bs9kSDJsdc) on Unsplash
