---
title: Feature Toggles
subtitle: On/Off
date: 2018-12-18T19:02:25.307Z
authors:
  - valyonchev
area: options
perspectives:
  - product-ownership
people: 2+
time: 2+ hours
difficulty: moderate
participants:
  - DevOps Team
---
## What is it?

Feature Toggles are flags/switches which are used to change the behaviour of a product by activating or deactivating certain parts of it / features. It is a practice used in software development for allowing multiple versions of a product or additional features of the product to coexist in production, but not available to the typical users. 

Toggles allow for unfinished features to be released in production and be hidden for the typical users.  





## Why use it?

Feature Toggles provide a great way to manage the behaviour of the product in order to perform experiments or safeguard the performance when releasing fresh new features. 



Feature Toggles are used to:

\- Mange the release of new features - allow unfinished features to exist in production and be activated once ready for release to public (can be gradually. Released as well)

\- Safeguard operations - in this case toggles are used as enabler for Canary Deployments and allow operations to turn off any new feature which does not sufficient history and may still have an adverse effect on the product performance

\- Run experiments - this is how A/B Testing or Multivari Testing can be implemented with the ability to “roll-back” to the productive version

\- Implementing permissions / class of users - these toggles allow different group of users to benefit from the use of different set of features of the product, i.e. normal and premium users





## Why & How to combine it with other practices?

The Feature Toggles can greatly complement and make easier the implementation of practices like A/B Testing, Canary Deployments, Dark Launches in which the Feature Toggle is used to activate the “new” feature or version for a certain group/part of users. It is essential to the implementation of Design of experiments practice.



## Related Practices

Blue/Green Deployment

Canary Deployment 

Dark Launches

Continuous Delivery



## Further information

Feature Toggles (aka Feature Flags)

 https://martinfowler.com/articles/feature-toggles.html
