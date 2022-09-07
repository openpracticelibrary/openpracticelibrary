---
templateKey: practice-page
title: Split Testing - A/B Testing
subtitle: Quantitative testing of two alternative designs to learn which better
  leads to a specific goal
date: 2018-12-17T22:03:07.370Z
authors:
  - valyonchev
tags:
  - validate
mobiusTag: delivery
icon: /images/ab-testing.jpg
whatIs: This is a randomised experiment in which we compare and evaluate the
  performance of different versions of a product in pairs. Both product versions
  are available in production (live) and randomly provided to different users.
  Data is being collected about the traffic, interaction, time spent and other
  relevant metrics, which will be used to judge the effectiveness of the two
  different versions based on the change in user’s behaviour. The test
  determines which version is performing better in terms of the target outcomes
  you have started with.
whyDo: >-
  Simple to apply, fast to execute and often conclusions can be made simply by
  comparing the conversion/activity data between the two versions. It can be
  limiting as the two versions should not differ too much and more significant
  changes in the product may require a large number of A/B tests to be
  performed.


  This is one of the practices that allow you to “tune the engine” as per [The Lean Startup by Eric Ries.](http://theleanstartup.com/)


  The practice provides an objective criteria for important decisions on the product design, features, behaviour, etc. It is used as a way to enhance the product performance, the user experience and the results the product produce for your organization.
howTo: >-
  You can compare two or more different versions of an application/product as
  long as you always do that in pairs. The pairs need to be identical except for
  a single characteristic which will vary between the two versions.


  The team should take care with regards to:

  * Differentiating the users, e.g. new users from returning users (cohorts).

  * Comparing results - the results may not always point a significant difference between the versions and may either need to be run longer or different combinations of pairs should be used.

  * Running the test always simultaneously as multiple factors may vary with time and influence the results.
mediaGallery:
  - link: https://diggintravel.com/wp-content/uploads/2018/10/Airline-AB-testing-in-action.jpg
  - link: https://images.ctfassets.net/uqnk3k6tiu47/5tmv7B9rD7AXHhNFmkmanI/db02e3c92b6def26a624a0d8a9a0e19a/https___b2bquotes.com_sn_uploads_ab-testing.png
  - link: https://www.youtube.com/watch?v=zFMgpxG-chM
resources:
  - link: https://openpracticelibrary.com/practice/split-testing-multivari-testing/
    linkType: web
    description: Split Testing Multivari Testing
  - link: https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/
    linkType: web
    description: The Ultimate Guide to A/B Testing, Paras Chopra, Smashing Magazine
  - link: https://marketingland.com/the-abcs-of-ab-testing-42554
    linkType: web
    description: The ABC of A/B Testing, Cara Olson, Marketing Land
  - link: http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/
    linkType: web
    description: Blue-green Deployments, A/B Testing, and Canary Releases
  - link: https://openpracticelibrary.com/practice/design-of-experiments/
    linkType: web
    description: Design Of Experiments
  - link: http://theleanstartup.com/
    linkType: web
    description: The Lean Startup by Eric Ries.
participants:
  - Product Owner
  - Data Scientist
  - UX Designer
  - DevOps Team
jumbotron: /images/ab-testing.jpg
area: delivery-measure-and-learn
people: 2+
time: Several days
perspectives:
  - product-ownership
difficulty: moderate
---
## What is it?

This is a randomised experiment in which we compare and evaluate the performance of different versions of a product in pairs. Both product versions are available in production (live) and randomly provided to different users. Data is being collected about the traffic, interaction, time spent and other relevant metrics, which will be used to judge the effectiveness of the two different versions based on the change in user’s behaviour. The test determines which version is performing better in terms of the target outcomes you have started with.

You can compare two or more different versions of an application/product as long as you always do that in pairs. The pairs need to be identical except for a single characteristic which will vary between the two versions.

The team should take care with regards to:

- Differentiating the users, e.g. new users from returning users (cohorts).
- Comparing results - the results may not always point a significant difference between the versions and may either need to be run longer or different combinations of pairs should be used
- Running the test always simultaneously as multiple factors may vary with time and influence the results

## Why use it?

Simple to apply, fast to execute and often conclusions can be made simply by comparing the conversion/activity data between the two versions. It can be limiting as the two versions should not differ too much and more significant changes in the product may require a large number of A/B tests to be performed.

This is one of the practices that allow you to “tune the engine” as per [The Lean Startup by Eric Ries.](http://theleanstartup.com/)

The practice provides an objective criteria for important decisions on the product design, features, behaviour, etc. It is used as a way to enhance the product performance, the user experience and the results the product produce for your organization.

## Related Practices

[Split Testing - Multivari Testing](https://openpracticelibrary.com/practice/split-testing-multivari-testing/)

[Design of Experiments](https://openpracticelibrary.com/practice/design-of-experiments/)

## Further information

[The Ultimate Guide to A/B Testing, Paras Chopra, Smashing Magazine](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/)

[The ABC of A/B Testing, Cara Olson, Marketing Land](https://marketingland.com/the-abcs-of-ab-testing-42554)

[Blue-green Deployments, A/B Testing, and Canary Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/)
