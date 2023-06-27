---
templateKey: practice-page
title: 継続的デプロイメント
subtitle: エンドユーザーからのフィードバックを迅速に得るために、変更を頻繁にデプロイする.
date: 2018-09-10T08:38:12.013Z
authors:
  - syvanen
  - Zenigata
tags:
  - methods
mobiusTag: foundation
icon: /images/continuous-deployment.png
whatIs: 継続的デプロイメント(CD)により、開発チームは、いつでも本番環境に、特にオンデマンドで、リリースできるようにソフトウェアをメンテナンスすることができます。 このプラクティスは、[Continuous Integration](https://openpracticelibrary-ja.netlify.app/practice/continuous-integration/) と [Continuous Delivery](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)の上で構築されます。結果として、ソフトウェアの設定とデプロイのオーケストレーションは、開発チームの義務の一部となります。
whyDo: >-
  * 開発チームは、新しい機能のためのデプロイ可能なコードと設定のメンテナンスに注力できます。

  * エンドユーザーからの迅速なフィードバックが可能になります。

  * 各機能は、完了後に次々公開されていきます。

  * 設定とデプロイオーケストレーションが自動化の一部となるように、全てをコード化プラクティスとして強制されていきます。

  * 高速なロールバックと障害復旧が可能となります。
howTo: >-
  この実践には、ソフトウェアのデプロイメントと本番環境への配信に関わるすべての人の密接な協力が必要です。デプロイメントに関わる全てのことは、可能な限り自動化する必要があります。新機能をすぐに本番環境に投入するため、[feature toggles](https://martinfowler.com/articles/feature-toggles.html) と [dark launches](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/) の活用も重要になります。  


  また、継続的デプロイメントには、アプリケーションの適切なレベルのモニタリングも必要です。これらのモニターは、新しいデプロイメントが展開されたときに、応答時間やエラーから成功率への変化を素早く発見できるように可視化されている必要があります。

mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/continuous%20deployment.png?raw=true
resources:
  - link: https://podcasts.apple.com/us/podcast/ci-cd-w-tyler-auerbeck/id1501715186?i=1000491737000
    linkType: podcast
    description: CI/CD Open Practice Podcast Episode
  - link: https://openpracticelibrary-ja.netlify.app/practice/continuous-integration/
    linkType: web
    description: Continuous Integration
  - link: https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/
    linkType: web
    description: Continuous Delivery
  - link: https://martinfowler.com/articles/feature-toggles.html
    linkType: web
    description: feature toggles
  - link: https://openpracticelibrary-ja.netlify.app/practice/dark-launches/
    linkType: web
    description: Dark Launches
people: 1+
difficulty: moderate
participants:
  - Team members
area: foundation-technical
---
## What is it?

With Continuous Deployment (CD), the development team maintains software so that it can be released to production at any moment, specifically on demand. This practice builds on top of [Continuous Integration](https://openpracticelibrary.com/practice/continuous-integration/) and [Continuous Delivery](https://openpracticelibrary.com/practice/continuous-delivery/). As a result, the software configuration and deployment orchestration becomes part of the development team's duty.

## Why use it?

* The development team maintains deployable code and configuration over new features.
* It enables fast feedback from end users.
* Each feature can be pushed out after completion.
* It enforces everything as code practices as configuration and deployment orchestration needs to be part of the automation.
* It enables fast rollbacks and recovery from failures.

## How to do it?

The practice needs close collaboration of everyone involved in deployment and delivery of the software to production. Everything related to the deployment needs to me automated as much as possible. As new features are pushed to production right away, the use of [feature toggles](https://martinfowler.com/articles/feature-toggles.html) and [dark launches](https://openpracticelibrary.com/practice/dark-launches/) becomes important.

Continuous Deployment also needs a good level of monitoring of the application. These monitors should be visualised so that changes to response times or error to success rates can be quickly spotted when new deployment is rolled out.
