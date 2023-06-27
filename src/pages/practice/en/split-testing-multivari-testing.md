---
templateKey: practice-page
title: Split Testing - Multivari Testing
subtitle: Quantitatively test how multiple factors influence the success of a design
date: 2018-12-17T21:55:06.953Z
authors:
  - valyonchev
area: delivery-measure-and-learn
perspectives:
  - product-ownership
icon: /images/steve-harvey-702421-unsplash.jpg
jumbotron: /images/steve-harvey-702421-unsplash.jpg
time: 2-12 weeks
difficulty: hard
participants:
  - Product Owner
  - Data Scientist
  - UX Designer
  - DevOps Team
tags:
  - validate
whatIs: >-
  Multivari, aka Multivariate or Multi-variable testing, is a product testing
  approach, which allow teams to understand influence of multiple different
  factors on the product performance.
whyDo: >-
  This practice can save significant efforts and time when assessing the impacts
  of different factors on the performance of a product/service. When multiple
  factors are at play, an A/B test becomes hard to impossible to execute and as
  pointed an A/B test will not really provide answers on the interplay fo
  factors.


  The results of the testing will ultimately provide answers to the question
  which combination of factors (e.g. features) achieves the best performance.


  This is why this practice is one of the important practices in the pivot phase
  of product development.
howTo: >-
  If you have many factors (potentially) influencing the performance of a
  product, an [A/B
  testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/)
  approach will take enormous amount of tests and time, because you can only
  test the difference of the product performance with two different values of a
  particular factor (A and B) at a time. An A/B test will also not tell you of
  potential reinforcement between factors.


  This is where Multivari testing comes in. Unlike [A/B
  testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/),
  Multivari testing will allow you to design product versions which differ from
  each other on multiple different factors. As in A/B testing all of the
  different product versions will be available in production and customers will
  be randomly redirected to different versions. The results from the customer
  interactions with the different versions will be collected as raw data.


  You can then understand the impact of each factor as well as the interplay of
  those factors using a statistical analysis of variance (ANOVA or MANOVA) over
  the collected data.


  It is important to note that multivari testing requires more
  transactions/interactions with the product in order to achieve a statistically
  significant amount of data. If the data is insufficient the results will not
  be representative of the whole population, i.e. not meaningful. 


  Several variations of Multivari Testing to consider:

  * **Full factorial testing** - testing of all possible combinations of the
  factors

  * **Fractional factorial testing** - only partial combination of the factors
  is tested

  * **Taguchi testing** - a partial combination defined with use of heuristics
  or other methods


  ## Related Practices

  [Split Testing - A/B
  Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/)

  [Design of
  Experiments](https://openpracticelibrary.com/practice/design-of-experiments/)
mediaGallery:
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/steve-harvey-702421-unsplash.jpg
resources:
  - link: >-
      https://www.smashingmagazine.com/2011/04/multivariate-testing-101-a-scientific-method-of-optimizing-design/
    linkType: web
    description: >-
      Multivariate Testing 101: A Scientific Method Of Optimizing Design, Paras
      Chopra, Smashing Magazine 
  - link: >-
      https://www.smashingmagazine.com/2010/11/multivariate-testing-in-action-five-simple-steps-to-increase-conversion-rates/
    linkType: web
    description: >-
      Multivariate Testing In Action: Five Simple Steps To Increase Conversion
      Rates, Paras Chopra, Smashing Magazine
  - link: 'https://openpracticelibrary.com/practice/split-testing-a-b-testing/'
    linkType: web
    description: Split Testing A B Testing
  - link: 'https://openpracticelibrary.com/practice/design-of-experiments/'
    linkType: web
    description: Design Of Experiments
mobiusTag: delivery
---
## What is it?

Multivari, aka Multivariate or Multi-variable testing, is a product testing approach, which allow teams to understand influence of multiple different factors on the product performance.

If you have many factors (potentially) influencing the performance of a product, an [A/B testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/) approach will take enormous amount of tests and time, because you can only test the difference of the product performance with two different values of a particular factor (A and B) at a time. An A/B test will also not tell you of potential reinforcement between factors.

This is where Multivari testing comes in. Unlike [A/B testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/), Multivari testing will allow you to design product versions which differ from each other on multiple different factors. As in A/B testing all of the different product versions will be available in production and customers will be randomly redirected to different versions. The results from the customer interactions with the different versions will be collected as raw data.

You can then understand the impact of each factor as well as the interplay of those factors using a statistical analysis of variance (ANOVA or MANOVA) over the collected data.

It is important to note that multivari testing requires more transactions/interactions with the product in order to achieve a statistically significant amount of data. If the data is insufficient the results will not be representative of the whole population, i.e. not meaningful.

Several variations of Multivari Testing to consider:

- **Full factorial testing** - testing of all possible combinations of the factors
- **Fractional factorial testing** - only partial combination of the factors is tested
- **Taguchi testing** - a partial combination defined with use of heuristics or other methods

## Why use it?

This practice can save significant efforts and time when assessing the impacts of different factors on the performance of a product/service. When multiple factors are at play, an A/B test becomes hard to impossible to execute and as pointed an A/B test will not really provide answers on the interplay fo factors.

The results of the testing will ultimately provide answers to the question which combination of factors (e.g. features) achieves the best performance.

This is why this practice is one of the important practices in the pivot phase of product development.

## Related Practices

[Split Testing - A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/)

[Design of Experiments](https://openpracticelibrary.com/practice/design-of-experiments/)

## Further information

[Multivariate Testing 101: A Scientific Method Of Optimizing Design, Paras Chopra, Smashing Magazine ](https://www.smashingmagazine.com/2011/04/multivariate-testing-101-a-scientific-method-of-optimizing-design/)

[Multivariate Testing In Action: Five Simple Steps To Increase Conversion Rates, Paras Chopra, Smashing Magazine](https://www.smashingmagazine.com/2010/11/multivariate-testing-in-action-five-simple-steps-to-increase-conversion-rates/)

Image credit: Photo by [Steve Harvey](https://unsplash.com/photos/kV7S3tyvKa8) on Unsplash
