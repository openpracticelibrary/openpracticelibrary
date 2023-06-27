---
title: ファネル分析
subtitle: 徹底的に......ファネルを通して
date: 2018-12-18T18:44:11.338Z
authors:
  - valyonchev
area: delivery-measure-and-learn
tags: []
perspectives:
  - product-ownership
icon: /images/funnel-analysis.jpg
people: 2+
time: 2-10 days
difficulty: moderate
participants:
  - Product Owner
  - Data Scientist/Analyst
  - DevOps Team
templateKey: practice-page
whatIs: >-
  ファネル分析とは、ユーザージャーニーにおけるイベントまたはステップのルート上の変化を探求する分析手法です。特定のゴールを達成するためのアプリケーション内のフローを追うことが多いです。例えば、eコマースサイトで商品を購入する場合、ファネル分析では、何人のユーザーがステップの全フローを通過して購入を完了し、何人がどのステップで停止（脱落）するかを示します（脱落率とも言う）。


  ファネル分析は、アプリケーションにおけるコンバージョンやフォールアウトを分析するのに有効な方法です。ウェブショップなど、類似プロダクトのパフォーマンスを測定する方法としてよく使用されます。
whyDo: >-
  * これはフィードバックループの実践であり、チームは自分たちの変更点が実際に使用されることで迅速なフィードバックを得ることができます。

  * ファネル分析は、類似プロダクトのベンチマークを行う方法を提供します。

  * プロダクトチームにおける客観的でデータに基づいた意思決定を可能にします。

  * 時間をかけて注意深く追跡調査すれば、プロダクト/機能の変更がもたらす実際の影響を、プラスとマイナスの両面から明らかにすることができます。

  * これは、[The Lean Startup by Eric Ries](https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%BB%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A2%E3%83%83%E3%83%97-%E3%82%A8%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%83%AA%E3%83%BC%E3%82%B9/dp/4822248976)における、“成長エンジンのチューニング（tune the engine）”と、“革新的会計（innovation accounting）”を可能にするプラクティスの一つです。

  * この手法は、プロダクトの設計、機能、動作などに関する重要な意思決定のための客観的な基準を提供するものです。製品の性能、ユーザーエクスペリエンス、製品が組織にもたらすビジネス成果を向上させるための方法として使用されます。

howTo: >-
  このプラクティスは、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)、[多変量テスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/)からデータを供給され、[実験計画法](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)で始まった実験の最終ステップの1つになることができます。
  [フィーチャートグル](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/)は、データのライブフィードに基づいてアプリケーションを微調整し、特定の変更がアウトカムに影響を与えるかどうかを示すために使用することができ、分析に大きな成果をもたらします。


  分析は、意思決定の前の最終段階です。製品の性能をさらに向上させる方法と、過去の変更の影響について、実行可能な洞察を得ることを目的としています。


  [フィーチャートグル](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/)


  [コホート分析](https://openpracticelibrary-ja.netlify.app/practice/cohort-analysis/)


  [A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)


  [多変量テスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/)


  [実験計画法](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)
mediaGallery:
  - link: 'https://openpracticelibrary.github.io/opl-media/images/funnel-analysis.jpg'
resources:
  - link: 'https://en.wikipedia.org/wiki/Funnel_analysis'
    linkType: web
    description: Funnel Analysis as per Wikipedia
  - link: 'http://theleanstartup.com/'
    linkType: web
    description: The Lean Startup by Eric Ries
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/'
    linkType: web
    description: スプリットテスト - A/B テスト
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/'
    linkType: web
    description: スプリットテスト - 多変量テスト
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/'
    linkType: web
    description: 実験計画法
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/'
    linkType: web
    description: フィーチャートグル
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/cohort-analysis/'
    linkType: web
    description: コホート分析
mobiusTag: delivery
---
## What is it?

Funnel Analysis is an analytical practice studying the changes over a course of events or steps in a user journey. It frequently follows the flow inside an application towards achieving a specific goal. For example the purchasing of an item on an ecommerce site: the funnel analysis will show how many users go through the full flow of steps to complete a purchase and how many stop (drop off) at which step (aka fallout rates).

![Funnel Analysis](/images/funnel-analysis.jpg "Funnel Analysis")

The Funnel Analysis is an effective way to analyse conversion and fallout in applications. It is often used as a way to measure performance of similar products, e.g. web shops.

## Why use it?

* This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes
* Funnel Analysis provides a way for benchmarking of similar products
* It enables objective, data-informed decision-making in product teams
* When carefully followed over time, the analysis can reveal the real impact of product/feature changes, both positive and negative
* This is one of the practices that allow you to “tune the engine” and carry “innovation accounting” ( [The Lean Startup by Eric Ries](http://theleanstartup.com/))
* The practice provides an objective criteria for important decisions on the product design, features, behaviour, etc. It is used as a way to enhance the product performance, the user experience and the business outcomes the product produces for your organization

## Related Practices

This practice is fed with data from [A/B Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/), [Multi-vari Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/), and can be one of the final steps for running experiments which started with the [Design of Experiments](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/). [Feature Toggles](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/) can greatly benefit the analysis as they can be used to tweak the application based on live feed of data and show if certain changes would influence the outcome.

The analysis is the final step before decision-making. It aims to produce actionable insight on how the team can further improve the performance of the product and the impact of past changes.

[Feature Toggles](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/)

[Cohort Analysis](https://openpracticelibrary-ja.netlify.app/practice/cohort-analysis/)

[A/B Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)

[Multi-vari Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/)

[Design of Experiments](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)

User Journey Mapping

## Further information

[Funnel Analysis as per Wikipedia](https://en.wikipedia.org/wiki/Funnel_analysis)

## _**Improve this article:** We lack links to good explanations of the practice._
