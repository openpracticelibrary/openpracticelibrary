---
participants:
  - DevOps Team
subtitle: 少数のユーザーへ新バージョンを公開する
resources:
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/'
    linkType: web
    description: 継続的デリバリー
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/'
    linkType: web
    description: スプリットテスト - A/Bテスト
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/dark-launches/'
    linkType: web
    description: ダーク ローンチ
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/blue-green-deployments/'
    linkType: web
    description: Blue/Greenデプロイメント
  - link: >-
      http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/
    linkType: web
    description: 'Blue-green Deployments, A/B Testing, and Canary Releases'
  - link: 'https://martinfowler.com/bliki/CanaryRelease.html'
    linkType: web
    description: カナリアリリース
templateKey: practice-page
title: カナリアリリース
date: 2018-12-18T19:00:46.071Z
authors:
  - valyonchev
tags:
  - learn
icon: /images/julia-craice-974133-unsplash.jpg
whatIs: >-
  ソフトウェア開発において、このカナリアリリースは、継続的デリバリーのプラクティスであり、製品の実ユーザーのごく一部だけに新しいバージョンを公開するものです。チームは、レグレッションやパフォーマンスの問題、その他の悪影響を監視し、問題が見つかった場合は、ユーザーを簡単に正常動作する旧バージョンへ戻すことができます。


  この言葉は、炭鉱で危険なガスの蓄積を早期に発見するために、かごに入れた鳥を使ったことに由来しています。有毒ガスによって炭鉱労働者の生命を脅かすよりも前に、鳥が先に死ぬことになります。炭鉱のカナリアと同じように、このリリース方法は、より大きな問題を避けるための早期警告メカニズムを提供します。
whyDo: >-
  これはフィードバックループの実践であり、チームは自分たちの変更が実際に使用されることで迅速なフィードバックを得ることができるようになります。[継続的デリバリー](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)を実現するプラクティスです。


  カナリアリリースは、段階的なロールアウトを可能にすることで、継続的デリバリーを行うチームに安全性を提供しながら、製品の新バージョンを使うユーザー数を徐々に増加させることができます。新バージョンのロールアウト中、チームはプラットフォームのパフォーマンスを注意深く監視し、新バージョンの影響を把握し、リグレッション、パフォーマンス、さらにはダウンタイムといった悪影響のリスクを評価します。このようなアプローチにより、悪影響が確認された場合、チームはすぐにリリースを「ロールバック」することができ、たとえ限られた時間であっても、大多数の顧客に影響を与えることはありません。
howTo: >-
  カナリアリリースは、新機能を一部の人にだけ公開するという意味では[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)と似ていますが、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)とは違って、新機能は既存の機能を少し調整するだけでなく、完全に新しい機能であることが可能であり、一般的にはそのような機能です。また、目的も違います。[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)は、ビジネス上の成果を得るという観点から製品性能を向上させようとしていますが、カナリアリリースは、技術的な性能に完全に焦点を合わせています。


  カナリアリリースは、[ダーク ローンチ](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/)とも似ていて、どちらもユーザーの一部だけに機能を公開するものです。[ダーク ローンチ](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/)は、ユーザーが新しい機能にどのように反応し、使用するかを理解することに焦点を当てます。一方、カナリアリリースは、変更したプロダクトや個々の機能（アーキテクチャで分離して使用できる場合）の技術性能に本来はフォーカスします。



  フィーチャートグルは、既存の製品にカナリアリリースを実装することを可能にする手法です。


  [フィーチャートグル](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/)


  [ダーク ローンチ](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/)


  [Blue/Green デプロイメント](https://openpracticelibrary-ja.netlify.app/practice/blue-green-deployments/)


  [継続的デリバリー](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)
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

This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes. It enables the [Continuous Delivery](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/).

The Canary Release provides continuous delivery teams with safety by enabling them to perform a phased roll-out, gradually increasing the number of users on a new version of a product. While rolling out the new version, the team will be closely monitoring the performance of the platform and try to understand the impacts of the new version and assess the risks for adverse effects as regressions, performance, even downtime. This approach allows the team to “roll-back” the release as soon as such adverse effects are observed without the majority of the customers being impacted even for a limited amount of time.

## Related Practices

Canary Release is similar to [A/B Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/) in the sense that it is only exposing a part of the population to the new feature, but unlike [A/B Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/), the new feature can and is typically a completely new feature and not just a small tweak of an existing one. The purpose is different too. [A/B Testing](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/) is looking to improve the product performance in terms of getting business outcomes, while the Canary release is focus entirely on the technical performance.

Canary Release is similar to the [Dark Launch](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/) as they both expose only part of the population to a feature. The [Dark Launch](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/) is focused on understanding the way users will react and use the new feature, while Canary Release is really focused on the technical performance of the changed product or the individual feature (if using a it can be isolated in the architecture).

Feature toggles are an enabling practice, which allows for Canary Releases to be implemented in existing products.

Feature Toggles

[Dark Launches ](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/)

[Blue/Green Deployment](https://openpracticelibrary-ja.netlify.app/practice/blue-green-deployments/)

[Continuous Delivery](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)

## Further information

[Blue-green Deployments, A/B Testing, and Canary Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/) by Christian Posta

[Canary Release](https://martinfowler.com/bliki/CanaryRelease.html) by Martin Fowler

Image credit: Photo by [Julia Craice](https://unsplash.com/photos/o0S-0Pa4F2M) on Unsplash
