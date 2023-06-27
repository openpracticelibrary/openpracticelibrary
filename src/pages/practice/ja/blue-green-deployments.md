---
participants:
  - DevOps Team
subtitle: 常にロールバックできる状態にする
resources:
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/'
    linkType: web
    description: 継続的デリバリー
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/'
    linkType: web
    description: フィーチャートグル
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/canary-release/'
    linkType: web
    description: カナリアリリース
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/dark-launches/'
    linkType: web
    description: ダークローンチ
  - link: >-
      http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/
    linkType: web
    description: 'Blue-green Deployments, A/B Testing, and Canary Releases'
  - link: 'https://martinfowler.com/bliki/BlueGreenDeployment.html'
    linkType: web
    description: BlueGreen Deployments
templateKey: practice-page
title: Blue/Greenデプロイメント
date: 2018-12-18T18:56:38.846Z
authors:
  - valyonchev
tags: []
icon: /images/blue-green.jpg
whatIs: >-
  Blue/Greenデプロイメントとは、ソフトウェア開発において、チームが2つの本番環境を利用できることに基づくテクニックです。そのうちの1つは”Green”と呼び、リバースプロキシ（ロードバランサ/ルータ）から負荷を受ける本番環境です。もう1つの環境は、"Blue"と呼び、新しいバージョンにアップグレードされたコピー環境です。

  ![Blue Green Deployment](/images/blue-green.jpg "Blue Green Deployment")


  チームは、ダウンタイムに慌てることなく、"Blue"環境上で製品バージョンのアップグレードに必要なすべてのタスクを実行することができます。一度"Blue"環境の準備ができたら、あらゆる種類のスモークテストとチェックを経て、チームはリバースプロキシ（ロードバランサ/ルーター）を"Blue"環境を指すようにリダイレクトするだけです。


  もし"Blue"環境ですべてがうまくいけば、今度は古くなった"Green"環境を次のリリースの"Blue"として使用することができます。もしトラブルが起きた場合は、リバースプロキシ/ロードバランサー/ルーターを使って、即座に安定した環境に戻すことができます。
howTo: >-
  手順などは、以下のリンク先をご覧ください:


  [Blue-green Deployments, A/B Testing, and Canary
  Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/)
  by Christian Posta


  [BlueGreen
  Deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html) by
  Martin Fowler
area: delivery-deliver
time: 2+ hours
mediaGallery:
  - link: 'https://openpracticelibrary.github.io/opl-media/images/blue-green.jpg'
people: 2+
whyDo: >-
  これはフィードバックループのプラクティスです。これにより、自分たちの変更が実際に使用されたときのフィードバックを迅速に得ることができるようになります。つまり[継続的デリバリー](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)の実現手段です。


  このプラクティスは、複雑なリリースを実行するための安全性を提供します。時間的なプレッシャーがなくなり、ダウンタイムをほとんどゼロにすることができます。これは、技術チームにとっても、顧客にとっても有益です。顧客は、新バージョンが同等に機能していれば、サービスや製品の不具合や利用不能に気づくことはありません。万が一、悪影響が出た場合でも、即座にロールバックすることができ、顧客への影響を最小限に抑えることができます。
perspectives:
  - product-ownership
difficulty: moderate
mobiusTag: delivery
---
## What is it?

Blue Green Deployment is a technique in software development which relies on two productive environments being available to the team. One of them, let’s call it “green” is operational and takes load from the reverse proxy (load balancer/router). The other environment, let’s call it “blue” is a copy upgraded to a new version.

![Blue Green Deployment](/images/blue-green.jpg "Blue Green Deployment")

The team can perform all required task for an upgrade of the product version on the “blue” environment without the rush of downtime. Once the “blue” environment is ready, past all kind of smoke tests and checks, the team simply redirects the reverse proxy (load balancer/router) to point to the “blue” environment.

If everything works fine with the “blue” environment, the now outdated “green” can be used to serve as the “blue” for the next release. If things go bad the team can switch back to a stable environment instantly using the reverse proxy/load balancer/router.

## Why use it?

This is a feedback loop practice, which allows the team to get prompt feedback from real life use of their changes. It enables [Continuous Delivery.](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)

The practice provides safety for performing complex releases. It removes the time pressure and reduces the downtime to practically zero. This is beneficial for both technical team as for the customers, who will not notice glitches or unavailability of the service/product, provided that the new version is performing at par. In case of adverse effects, it allows the teams to have an instant roll back alternative and limit the negative impact on customers.

## Related Practices

[Feature Toggles](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/)

[Canary Deployment ](https://openpracticelibrary-ja.netlify.app/practice/canary-release/)

[Dark Launches](https://openpracticelibrary-ja.netlify.app/practice/dark-launches/)

[Continuous Delivery](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)

## Further information

[Blue-green Deployments, A/B Testing, and Canary Releases](http://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/) by Christian Posta

[BlueGreen Deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html) by Martin Fowler
