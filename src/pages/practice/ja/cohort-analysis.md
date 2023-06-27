---
participants:
  - Product Owner
  - Data Scientist/Analyst
  - DevOps Team
subtitle: あなたはどのグループに所属していますか？
resources:
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/'
    linkType: web
    description: Design Of Experiments
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/funnel-analysis/'
    linkType: web
    description: Funnel Analysis
  - link: >-
      https://medium.com/analytics-for-humans/a-beginners-guide-to-cohort-analysis-the-most-actionable-and-underrated-report-on-google-c0797d826bf4
    linkType: web
    description: >-
      A Beginner’s Guide to Cohort Analysis: the Most Actionable (and
      Underrated) Report on Google Analytics
templateKey: practice-page
title: コホート分析
date: 2018-12-18T18:46:49.760Z
authors:
  - valyonchev
tags:
  - learn
icon: /images/cohort-analysis.jpg
whatIs: >-
  コホート分析とは、行動分析のサブセットで、異なるグループ（顧客／ユーザー）間の行動の違いを研究するもので、単に「コホート」とも呼ばれます。


  コホート分析では、すべてのユーザーを1つの集団として扱うのではなく、共通の特徴を持つコホートで集団をセグメント化し、その行動パターンを探索します。


  識別する特性は、メインペルソナ（スキルレベルなど）、もしくは製品に関連するイベントや時系列（新規ユーザー、リピーター、x月からのユーザーなど）から導き出せます。
  
howTo: >-
  * アノテーションを使用する：マーケティング活動やキャンペーンを追跡するために、Google Analyticsのアノテーションやマーケティングカレンダーを使い始めましょう。これにより、コホート分析レポートを含むGoogle Analyticsレポートで、マーケティング施策の影響を確認することができます。


  * マーケティング活動をテストする: 週ごと/月ごとに、オーディエンス、チャネル、ウェブサイトのデザインをテストする実験を始めます（例：1ヶ月に1つのマーケティングチャネルをテストする）。そして、毎週1日30分、コホート分析レポートを見て、これらのテストの結果を確認する時間を設けます。


  * 異常なコホートを掘り下げる: あるコホートにおいて、ユーザーリテンション（定着率、継続率）などの指標に大幅な増減が見られる場合、マーケティングカレンダーを確認し、どのような変化が指標の変化を促しているのかを特定します。これらのコホートをカスタムセグメント化し、彼らの行動をより深く掘り下げます。

area: delivery-measure-and-learn
time: 2-4 hours
mediaGallery:
  - link: 'https://openpracticelibrary.github.io/opl-media/images/cohort-analysis.jpg'
people: 2+
whyDo: >-
  これはフィードバックループの実践であり、チームは自分たちの変更が実際に使用されることで迅速なフィードバックを得ることができるのです。


  コーホート分析の目的は、直感的な判断に頼らず、より良い製品決定を行うための実用的な洞察を得ることです。


  この手法により、製品/機能の改善、改良、分解、廃止の意思決定が可能になります。[実験計画法](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)から始まる一連のプラクティスの中で重要なプラクティスであり、ビジネス成果の観点から製品性能を向上させることを目的としています。


  コホート分析では、比較可能なデータセット（新規登録ユーザーなど）間でパフォーマンスを比較することにより、製品/機能の変更の影響を理解することができます。具体的で測定可能な目標を達成し、その達成によってユーザーの行動を変化させるために、改善を促進することができます。
perspectives:
  - product-ownership
difficulty: moderate
mobiusTag: delivery
---
## What is it?

Cohort analysis is a subset of behaviour analytics which studies the difference in behaviour between different groups of people (customers / users), aka cohorts.

Instead of treating all users as part of one population, cohort analysis is segmenting the population in cohorts which share a common characteristic and then search for patterns in their behaviours.

The discriminating characteristic can be derived from the main personas (e.g. skill level) or from the events and timeline relative to the product (new users, returning users, users from month x, etc.)

![Cohort Analysis](/images/cohort-analysis.jpg "Cohort Analysis")

## Why use it?

This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes.

The Cohort Analysis aims to produce actionable insights, which can inform better product decisions instead of using gut feel.

This practice enables product decisions for improvement, enhancement, overhaul or discontinuing of products/features. It is key practice in the sequence of practices which start with [Design of experiments](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/) and aims to improve the product performance in terms of business outcomes.

The cohort analysis helps the team understand the impact of product/feature changes by comparing performance across comparable data sets (e.g. newly signed up users). It can help drive improvements towards a achieving a concrete and measurable goal, the pursuit of which results in change of user behaviour.

## Related Practices

Personas

[Design of Experiments](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)

[Funnel Analysis](https://openpracticelibrary-ja.netlify.app/practice/funnel-analysis/)

## Further information

[A Beginner’s Guide to Cohort Analysis: the Most Actionable (and Underrated) Report on Google Analytics](https://medium.com/analytics-for-humans/a-beginners-guide-to-cohort-analysis-the-most-actionable-and-underrated-report-on-google-c0797d826bf4) by Patrick Han
