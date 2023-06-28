---
title: Feature Toggles
subtitle: AKA Feature Flags/Bits/Flipping/Controls
date: 2018-12-18T19:02:25.307Z
authors:
  - valyonchev
  - tenfourty
area: foundation-technical
tags: []
perspectives:
  - product-ownership
icon: /images/karim-manjra-1136416-unsplash.jpg
jumbotron: /images/karim-manjra-1136416-unsplash.jpg
jumbotronAlt: Light switches on a wall
people: 1+
time: 1+ hours
difficulty: moderate
participants:
  - Product Owner
  - Product Team
templateKey: practice-page
whatIs: >-
  Feature Flags (also known as Feature Bits/Toggles/Flipping/Controls) are an
  engineering practice that can be used to _change your software's functionality
  without changing and re-deploying your code_.


  In software, a flag is "one or more bits used to store binary values." So it's
  a Boolean that can either be true or false. A flag can be checked with an if
  statement. A feature in software is a bit of functionality that delivers some
  kind of value.


  In it's simplest form a feature flag (or toggle) is just an if statement
  surrounding a bit of functionality in your software.
whyDo: >-
  Feature Toggles are a foundational engineering practice and provide a great
  way to manage the behaviour of the product in order to perform experiments or
  safeguard performance when releasing fresh new features.
howTo: >-
  There are many ways feature flags are used:


  - [Canary Releases](/practice/canary-release/).

  - [Dark Launches](/practice/dark-launches/).

  - [A/B Testing,  and running
  experiments](/practice/split-testing-a-b-testing/).

  - [Multivari Testing](/practice/split-testing-multivari-testing/)

  - Turning things off with a kill switch.

  - Migrations or upgrades to a service.

  - Trunk Based Development and [Continuous
  Deployment](/practice/continuous-deployment/). Developers use feature flags to
  avoid long lived branches. Using a feature flag for functionality in
  development allows a developer to merge their code daily into the main
  branch.


  Here is a simple example using pseudo-code (taken from the [Rollout Guide to
  Feature Flags](https://rollout.io/blog/ultimate-feature-flag-guide/)):

  ```

  if(configFile["IsHoliday"] == true) {
    writeGreetingMessage("Happy holidays!");
  }

  ```

  Our code checks a configuration file, outside of the main program source code,
  to get the `isHoliday` variable and calls a function `writeGreetingMessage()`
  with the message `Happy holidays!` when the Boolean `isHoliday` is `true` in
  the configuration file.


  The important thing about this example is that we are able to change the
  functionality of our software without changing and re-deploying our code, we
  can simply update our configuration file during _runtime_. Now every time we
  want to display the message `Happy holidays!` we can update our configuration
  file on the fly.


  Effectively feature flags allow us to separate deployment of our code from
  feature deployment. In order to do this we might use a configuration file, a
  UI at runtime or dynamically per-request based on the current context (a
  specific user or organisation etc).


  [In Martin Fowler's article on Feature
  Flags](https://www.martinfowler.com/articles/feature-toggles.html) two major
  dimensions are identified to categorise feature flags: _how long the feature
  flag will live_ and _how dynamic the toggling decision must be_. The following
  four broad categories of feature flags are identified by Martin Fowler:

  - **Release Flags** allow incomplete and un-tested codepaths to be shipped to
  production as latent code which may never be turned on.

  - **Experiment Flags** are used to perform multivariate or A/B testing. Each
  user of the system is placed into a cohort and at runtime the user will be
  sent down one codepath or another.

  - **Ops Flags** are used to control operational aspects of our system's
  behaviour. We might introduce an Ops Flag when rolling out a new feature which
  has unclear performance implications so that system operators can disable or
  degrade that feature quickly in production if needed.

  - **Permissioning Flags** are used to change the features or product
  experience that certain users receive. For example we may have a set of
  "premium" features which we only toggle on for our paying customers. Or
  perhaps we have a set of "alpha" features which are only available to internal
  users and another set of "beta" features which are only available to internal
  users plus beta users.


  These flag types can be summarised by the following image.

  ![These flag types can be summarised by the following
  image.](/images/fowler_feature_toggles.png "Feature Toggles categorised by
  longevity and dynamism")

  ### Why & How to combine it with other practices?

  The Feature Toggles can greatly complement and make easier the implementation
  of practices like [A/B Testing](/practice/split-testing-a-b-testing/), [Canary
  Release](/practice/canary-release/), [Dark Launches](/practice/dark-launches/)
  in which the Feature Toggle is used to activate the “new” feature or version
  for a certain group/part of users. It is essential to the implementation of
  [Design of experiments](/practice/design-of-experiments/) practice.
mediaGallery:
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/karim-manjra-1136416-unsplash.jpg
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/fowler_feature_toggles.png
resources:
  - link: 'https://stackoverflow.com/questions/7707383/what-is-a-feature-flag'
    linkType: web
    description: Stack Overflow on What is a "feature flag"?
  - link: 'https://en.wikipedia.org/wiki/Feature_toggle'
    linkType: web
    description: Wikipedia's article on Feature Toggles
  - link: 'https://rollout.io/blog/ultimate-feature-flag-guide/'
    linkType: web
    description: Rollout Guide to Feature Flags
  - link: 'https://www.martinfowler.com/articles/feature-toggles.html'
    linkType: web
    description: In Martin Fowler's article on Feature Flags
  - link: 'https://featureflags.io/literature/'
    linkType: web
    description: Further links to literature can be found on featureflags.io
  - link: 'https://openpracticelibrary.com/practice/canary-release/'
    linkType: web
    description: Canary Release
  - link: 'https://openpracticelibrary.com/practice/dark-launches/'
    linkType: web
    description: Dark Launches
  - link: 'https://openpracticelibrary.com/practice/split-testing-a-b-testing/'
    linkType: web
    description: Split Testing A B Testing
  - link: 'https://openpracticelibrary.com/practice/split-testing-multivari-testing/'
    linkType: web
    description: Split Testing Multivari Testing
  - link: 'https://openpracticelibrary.com/practice/blue-green-deployments/'
    linkType: web
    description: Blue Green Deployments
mobiusTag: foundation
---
## What is it?

Feature Flags (also known as Feature Bits/Toggles/Flipping/Controls) are an engineering practice that can be used to _change your software's functionality without changing and re-deploying your code_.

In software, a flag is "one or more bits used to store binary values." So it's a Boolean that can either be true or false. A flag can be checked with an if statement. A feature in software is a bit of functionality that delivers some kind of value.

In it's simplest form a feature flag (or toggle) is just an if statement surrounding a bit of functionality in your software.

Here is a simple example using pseudo-code (taken from the [Rollout Guide to Feature Flags](https://rollout.io/blog/ultimate-feature-flag-guide/)):

```
if(configFile["IsHoliday"] == true) {
  writeGreetingMessage("Happy holidays!");
}
```

Our code checks a configuration file, outside of the main program source code, to get the `isHoliday` variable and calls a function `writeGreetingMessage()` with the message `Happy holidays!` when the Boolean `isHoliday` is `true` in the configuration file.

The important thing about this example is that we are able to change the functionality of our software without changing and re-deploying our code, we can simply update our configuration file during _runtime_. Now every time we want to display the message `Happy holidays!` we can update our configuration file on the fly.

Effectively feature flags allow us to separate deployment of our code from feature deployment. In order to do this we might use a configuration file, a UI at runtime or dynamically per-request based on the current context (a specific user or organisation etc).

[In Martin Fowler's article on Feature Flags](https://www.martinfowler.com/articles/feature-toggles.html) two major dimensions are identified to categorise feature flags: _how long the feature flag will live_ and _how dynamic the toggling decision must be_. The following four broad categories of feature flags are identified by Martin Fowler:

- **Release Flags** allow incomplete and un-tested codepaths to be shipped to production as latent code which may never be turned on.
- **Experiment Flags** are used to perform multivariate or A/B testing. Each user of the system is placed into a cohort and at runtime the user will be sent down one codepath or another.
- **Ops Flags** are used to control operational aspects of our system's behaviour. We might introduce an Ops Flag when rolling out a new feature which has unclear performance implications so that system operators can disable or degrade that feature quickly in production if needed.
- **Permissioning Flags** are used to change the features or product experience that certain users receive. For example we may have a set of "premium" features which we only toggle on for our paying customers. Or perhaps we have a set of "alpha" features which are only available to internal users and another set of "beta" features which are only available to internal users plus beta users.


These flag types can be summarised by the following image.

![These flag types can be summarised by the following image.](/images/fowler_feature_toggles.png "Feature Toggles categorised by longevity and dynamism")

## Why use it?

Feature Toggles are a foundational engineering practice and provide a great way to manage the behaviour of the product in order to perform experiments or safeguard performance when releasing fresh new features.

There are many ways feature flags are used:

- [Canary Releases](/practice/canary-release/).
- [Dark Launches](/practice/dark-launches/).
- [A/B Testing,  and running experiments](/practice/split-testing-a-b-testing/).
- [Multivari Testing](/practice/split-testing-multivari-testing/)
- Turning things off with a kill switch.
- Migrations or upgrades to a service.
- Trunk Based Development and [Continuous Deployment](/practice/continuous-deployment/). Developers use feature flags to avoid long lived branches. Using a feature flag for functionality in development allows a developer to merge their code daily into the main branch.

## Why & How to combine it with other practices?

The Feature Toggles can greatly complement and make easier the implementation of practices like [A/B Testing](/practice/split-testing-a-b-testing/), [Canary Release](/practice/canary-release/), [Dark Launches](/practice/dark-launches/) in which the Feature Toggle is used to activate the “new” feature or version for a certain group/part of users. It is essential to the implementation of [Design of experiments](/practice/design-of-experiments/) practice.

## Related Practices

- [Blue/Green Deployment](/practice/blue-green-deployments/)
- [Canary Release ](/practice/canary-release/)
- [A/B Testing,  and running experiments](/practice/split-testing-a-b-testing/)
- [Multivari Testing](/practice/split-testing-multivari-testing/)
- [Design of experiments](/practice/design-of-experiments/)
- [Dark Launches](/practice/dark-launches/)
- [Continuous Delivery](/practice/continuous-delivery/)
- [Continuous Deployment](/practice/continuous-deployment/)


## Further information

The following resources provide a rich source of further reading:

- [Martin Fowler's article on Feature Toggles](https://www.martinfowler.com/articles/feature-toggles.html) is one of the original articles on the topic.
- [Wikipedia's article on Feature Toggles](https://en.wikipedia.org/wiki/Feature_toggle).
- [Stack Overflow on What is a "feature flag"?](https://stackoverflow.com/questions/7707383/what-is-a-feature-flag).
- [Further links to literature can be found on featureflags.io](https://featureflags.io/literature/).

Image credit: Photo by [Karim MANJRA](https://unsplash.com/photos/pWlM5L6PFis) on Unsplash
