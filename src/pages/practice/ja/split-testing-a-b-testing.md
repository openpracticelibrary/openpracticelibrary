---
templateKey: practice-page
title: スプリットテスト - A/B テスト
subtitle: >-
  2つのデザインについて、どちらがより特定の目標につながるかを学ぶために、定量的にテストする
date: 2018-12-17T22:03:07.370Z
authors:
  - valyonchev
area: delivery-measure-and-learn
perspectives:
  - product-ownership
icon: /images/ab-testing.jpg
jumbotron: /images/ab-testing.jpg
people: 2+
time: Several days
difficulty: moderate
participants:
  - Product Owner
  - Data Scientist
  - UX Designer
  - DevOps Team
tags:
  - validate
whatIs: >-
  これは、ある製品の異なる二つのバージョンを一組にして、その性能を比較・評価するためのランダムな実験です。どちらの製品バージョンも本番環境（ライブ）で利用可能で、異なるユーザーにランダムに提供されます。トラフィック、相互作用、滞在時間などの指標に関するデータが収集され、ユーザーの行動の変化に基づいて2つの異なるバージョンの有効性を判断します。このテストは、あなたがターゲットとしている成果に関して、どちらのバージョンがより良いパフォーマンスをしているかを判断します。
whyDo: >-
  シンプルに適用でき、素早く実行可能であり、多くの場合、2つのバージョン間のコンバージョン/アクティビティデータを比較するだけで結論を出すことができます。2つのバージョンに大きな違いがあってならないこと、さらに製品の大幅な変更には多数のA/Bテストを実行する必要があるかもしれないといった制限があります。

  これは、[The Lean Startup by Eric Ries.](http://theleanstartup.com/)にあるように、"エンジンのチューニング"を可能にするプラクティスの一つです。

  製品のデザイン、機能、動作などに関する重要な意思決定のために客観的な基準を提供するものです。製品の性能、ユーザーエクスペリエンス、製品が組織にもたらす結果を向上させるための方法として使われるものです。
howTo: >-
  常にペアで実行する限り、アプリケーションや製品の2つ以上の異なるバージョンを比較することができます。ペアは、2つのバージョン間で異なる1つの特性を除いて、同一である必要があります。

  以下に関して、チームは注意する必要があります：

  * ユーザーを差別化すること、例えば新規ユーザーとリピーター（コホート）。

  * 結果を比較すること - 結果は必ずしもバージョン間の大きな差を指し示すものではなく、もう少し実行する必要がある場合や、違ったペアの組み合わせを試す必要がある場合もあります。

  * 複数の要因が時間によって変化し、結果に影響を与える可能性があるため、常に同時にテストを実行すること。
mediaGallery:
  - link: 'https://openpracticelibrary.github.io/opl-media/images/ab-testing.jpg'
resources:
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/'
    linkType: web
    description: スプリットテスト -　多変量テスト
  - link: >-
      https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/
    linkType: web
    description: 'The Ultimate Guide to A/B Testing, Paras Chopra, Smashing Magazine'
  - link: 'https://marketingland.com/the-abcs-of-ab-testing-42554'
    linkType: web
    description: 'The ABC of A/B Testing, Cara Olson, Marketing Land'
  - link: >-
      http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/
    linkType: web
    description: 'Blue-green Deployments, A/B Testing, and Canary Releases'
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/'
    linkType: web
    description: 実験計画法
  - link: 'http://theleanstartup.com/'
    linkType: web
    description: The Lean Startup by Eric Ries.
mobiusTag: delivery
---
## What is it?

これは、ある製品の異なる二つのバージョンを一組にして、その性能を比較・評価するためのランダムな実験です。どちらの製品バージョンも本番環境（ライブ）で利用可能で、異なるユーザーにランダムに提供されます。トラフィック、相互作用、滞在時間などの指標に関するデータが収集され、ユーザーの行動の変化に基づいて2つの異なるバージョンの有効性を判断します。このテストは、あなたがターゲットとしている成果に関して、どちらのバージョンがより良いパフォーマンスをしているかを判断します。

常にペアで実行する限り、アプリケーションや製品の2つ以上の異なるバージョンを比較することができます。ペアは、2つのバージョン間で異なる1つの特性を除いて、同一である必要があります。

以下に関して、チームは注意する必要があります：

- ユーザーを差別化すること、例えば新規ユーザーとリピーター（コホート）。
- 結果を比較すること - 結果は必ずしもバージョン間の大きな差を指し示すものではなく、もう少し実行する必要がある場合や、違ったペアの組み合わせを試す必要がある場合もあります。
- 複数の要因が時間によって変化し、結果に影響を与える可能性があるため、常に同時にテストを実行すること。

## Why use it?

シンプルに適用でき、素早く実行可能であり、多くの場合、2つのバージョン間のコンバージョン/アクティビティデータを比較するだけで結論を出すことができます。2つのバージョンに大きな違いがあってならないこと、さらに製品の大幅な変更には多数のA/Bテストを実行する必要があるかもしれないといった制限があります。

これは、[The Lean Startup by Eric Ries.](http://theleanstartup.com/)にあるように、"エンジンのチューニング"を可能にするプラクティスの一つです。

製品のデザイン、機能、動作などに関する重要な意思決定のために客観的な基準を提供するものです。製品の性能、ユーザーエクスペリエンス、製品が組織にもたらす結果を向上させるための方法として使われるものです。

## Related Practices

[スピリットテスト -　多変量テスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/)

[実験計画法](https://openpracticelibrary-ja.netlify.app/practice/design-of-experiments/)

## Further information

[The Ultimate Guide to A/B Testing, Paras Chopra, Smashing Magazine](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/)

[The ABC of A/B Testing, Cara Olson, Marketing Land](https://marketingland.com/the-abcs-of-ab-testing-42554)

[Blue-green Deployments, A/B Testing, and Canary Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/)
