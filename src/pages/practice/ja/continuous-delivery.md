---
templateKey: practice-page
title: 継続的デリバリー
subtitle: ソフトウェアのテストとリリースの自動化
date: 2018-09-04T06:44:12.545Z
authors:
  - syvanen
  - Zenigata
  - rmarting
tags:
  - methods
mobiusTag: foundation
icon: /images/continuous-delivery.png
whatIs: 継続的デリバリー（CD）は、各変更を本番稼働可能な状態のリリースにするためのエンジニアリングプラクティスです。このプラクティスは、継続的インテグレーションを出発点として、最後にユーザーが使える状態まで成果物をリリースするステップを追加したものです。ここでの成果物は、ソフトウェアパッケージ、コンテナイメージ、仮想マシンイメージのいずれかになります。
whyDo: >-
  * 自動化により、次のようなリリースに必要な手作業が軽減されます。デプロイのために成果物を必要な場所に公開すること、バージョンコントロールのコミットメッセージから、変更履歴をリリースすること。

  * 本番環境にデプロイするソフトウェアの各変更に対して、顧客からのフィードバックサイクルが早くなります。

  * 本番環境に導入できる状態のテスト済みソフトウェアがリリースされるため、より充実した運用を実現します。

  * プッシュボタンデプロイメントを行うための準備になります。これは次のレベルである [継続的デプロイメント](https://openpracticelibrary-ja.netlify.app/practice/continuous-deployment/)にもつながります。
howTo: このプラクティスは、通常、[Jenkins](https://jenkins.io/) や [Tekton](https://tekton.dev/)のようなサーバで実行される自動化が必要となります。
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/continuous%20delivery.png?raw=true
resources:
  - link: https://podcasts.apple.com/us/podcast/ci-cd-w-tyler-auerbeck/id1501715186?i=1000491737000
    linkType: podcast
    description: CI/CD Open Practice Podcast Episode
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - linkType: web
    link: https://tekton.dev/
    description: Tekton
  - link: https://openpracticelibrary.com/practice/continuous-deployment/
    linkType: web
    description: Continuous Deployment
  - link: https://en.wikipedia.org/wiki/Continuous_delivery
    linkType: web
    description: Wikipedia definition of Continuous delivery
participants:
  - Team members
area: foundation-technical
people: 1+
time: Minutes
perspectives:
  - ""
difficulty: moderate
---
## What is it?

継続的デリバリー（CD）は、各変更を本番稼働可能な状態のリリースにするためのエンジニアリングプラクティスです。このプラクティスは、継続的インテグレーションを出発点として、最後にユーザーが使える状態まで成果物をリリースするステップを追加したものです。ここでの成果物は、ソフトウェアパッケージ、コンテナイメージ、仮想マシンイメージのいずれかになります。

このプラクティスは、通常、[Jenkins](https://jenkins.io/) や [Tekton](https://tekton.dev/)のようなサーバで実行される自動化が必要となります。

## Why use it?

* 自動化により、次のようなリリースに必要な手作業が軽減されます。デプロイのために成果物を必要な場所に公開すること、バージョンコントロールのコミットメッセージから、変更履歴をリリースすること。
* 本番環境にデプロイするソフトウェアの各変更に対して、顧客からのフィードバックサイクルが早くなります。
* 本番環境に導入できる状態のテスト済みソフトウェアがリリースされるため、より充実した運用を実現します。
* プッシュボタンデプロイメントを行うための準備になります。これは次のレベルである [継続的デプロイメント](https://openpracticelibrary-ja.netlify.app/practice/continuous-deployment/)にもつながります。


## Further Information

* [Wikipedia definition](https://en.wikipedia.org/wiki/Continuous_delivery) for Continuous Delivery.
