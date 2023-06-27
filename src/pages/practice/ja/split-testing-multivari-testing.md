---
templateKey: practice-page
title: スプリットテスト - 多変量テスト
subtitle: 複数の要因が設計の成功にどのように影響するかを定量的に検証する
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
  多変量解析、別名多変量テストは、製品のパフォーマンスに対する複数の異なる要因の影響を知るための製品テストアプローチです。
whyDo: >-
  この方法は、製品/サービスのパフォーマンスに対する様々な要因の影響を評価する際に、多大な労力と時間を節約することができます。複数の要因が絡むと、A/Bテストの実行は難しいか不可能になり、A/Bテストでは要因の相互作用について本当の意味で答えを出すことはできません。


  テストの結果は、最終的に、どの要素（例えば、機能）の組み合わせが最高のパフォーマンスを達成するのかという問いに対する答えを提供するでしょう。


  そのため、このプラクティスは製品開発のピボットフェーズにおいて重要なプラクティスの一つとなっています。
howTo: >-
  製品のパフォーマンスに影響を与える（潜在的な）要因が多数ある場合、[A/Bテスト](https://https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)のアプローチでは、一度に特定の要因（AとB）の2つの異なる値でしか製品性能の違いをテストできないため、膨大なテストと時間が必要になります。また、A/Bテストでは、要因間の相互強化の可能性を知ることはできません。


  そこで登場するのが、多変量解析テストです。[A/Bテスト](https://https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)とは異なり、多変量解析テストでは、複数の異なる要因ごとに複数の異なる製品バージョンを設計することができます。A/Bテストと同様に、すべての異なる製品バージョンが本番環境で稼働し、顧客はランダムに異なるバージョンにリダイレクトされます。異なるバージョンでの顧客とのやりとりの結果は、生データとして収集されます。


  そして、収集したデータに対して統計的分散分析（ANOVAまたはMANOVA）を行うことで、各要因の影響や、それらの要因の相互作用を理解することができます。


  多変量解析テストでは、統計的に有意な量のデータを得るために、製品とのトランザクションやインタラクションを増やす必要性に注意することが重要です。データが不十分な場合、結果は母集団全体を代表するものではなく、すなわち意味のないものとなります。


  多変量解析テストのバリエーション考慮点:

  * **要因実験(Full factorial testing)** - 要因のすべての可能な組み合わせのテスト

  * **一部要因テスト(Fractional factorial testing)** - 要因の部分的な組み合わせのみをテスト

  * **[タグチメソッド](https://ja.wikipedia.org/wiki/%E5%93%81%E8%B3%AA%E5%B7%A5%E5%AD%A6)(Taguchi testing)** - ヒューリスティックや他の方法を用いて定義された部分的な組み合わせ


  ## 関連プラクティス

  [スプリットテスト - A/B テスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)


  [実験計画法](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)
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
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/'
    linkType: web
    description: スプリットテスト - A/Bテスト
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/'
    linkType: web
    description: 実験計画法
mobiusTag: delivery
---
## What is it?

Multivari, aka Multivariate or Multi-variable testing, is a product testing approach, which allow teams to understand influence of multiple different factors on the product performance.

If you have many factors (potentially) influencing the performance of a product, an [A/B testing](https://https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/) approach will take enormous amount of tests and time, because you can only test the difference of the product performance with two different values of a particular factor (A and B) at a time. An A/B test will also not tell you of potential reinforcement between factors.

This is where Multivari testing comes in. Unlike [A/B testing](https://https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/), Multivari testing will allow you to design product versions which differ from each other on multiple different factors. As in A/B testing all of the different product versions will be available in production and customers will be randomly redirected to different versions. The results from the customer interactions with the different versions will be collected as raw data.

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

[Split Testing - A/B Testing](https://https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)

[Design of Experiments](https://https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)

## Further information

[Multivariate Testing 101: A Scientific Method Of Optimizing Design, Paras Chopra, Smashing Magazine ](https://www.smashingmagazine.com/2011/04/multivariate-testing-101-a-scientific-method-of-optimizing-design/)

[Multivariate Testing In Action: Five Simple Steps To Increase Conversion Rates, Paras Chopra, Smashing Magazine](https://www.smashingmagazine.com/2010/11/multivariate-testing-in-action-five-simple-steps-to-increase-conversion-rates/)

Image credit: Photo by [Steve Harvey](https://unsplash.com/photos/kV7S3tyvKa8) on Unsplash
