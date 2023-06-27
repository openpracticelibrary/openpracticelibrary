---
templateKey: practice-page
title: コントラクトファースト開発
subtitle: 再利用可能なサービスを作る時に先に合意を取り付けておく
date: 2019-06-20T12:49:38.825Z
authors:
  - infosec812
  - jameshbarton
  - rmarting
tags: []
mobiusTag: delivery
icon: /images/contract-first-api-development.png
whatIs: >-
  コントラクトファースト開発とは、チームメンバーや外部のチーム、サードパーティのシステムとの間に自身が開発するものの意図を明確にしておくことを指します。[OpenAPI](https://swagger.io/docs/specification/about/) (同期的インタラクション用) や [AsyncAPI](https://www.asyncapi.com/) (非同期的インタラクション用) を使うことで、自分達が開発するAPIを最初に定義しておくことができます。また変更の必要が発生した時も、実際にコードで実装する前に「契約 (コントラクト)」を事前にアップデートします。この進め方には以下のメリットがあります:


  * クライアント側とサーバー側の両方で実装を同時に進めることができます

  * テストの自動化や検証ツールの使用をすることができます

  * 開発中でもサービスをモックで利用することができます

  * 関連ドキュメントを最新に保つことができます

whyDo: 一緒に動作するアプリケーション同士が適切に動く状態を担保し、それらを同時並行で生産的に開発することができます。UI開発では一般的に動作するバックエンドサービスが開発され立ち上がるのを待つため開発が待ち状態になることがありますが、コントラクトファースト開発ではUI開発者とバックエンドサービス開発者が同時並行で開発することができます。またAPIのインターフェース開発時や更新時にコントラクトを最初に定義しておくことで、明確な「Doneの定義」や「受け入れ条件」を定義することができます。
howTo: >-
  HTTPを使ったRESTエンドポイントに代表される同期的インタラクションの場合、OpenAPIが多くのリファレンスを用意しています:


  * [OpenAPI](https://swagger.io/docs/specification/about/)

  * [OpenAPI ジェネレーター](https://openapi-generator.tech/)

  * [OpenAPI ツール](https://openapi.tools/)


  イベントドリブンアーキテクチャの場合やメッセージングシステムを活用するための非同期的インタラクションの場合、AsyncAPIがリファレンスを用意しています:


  * [AsynAPI Webサイト](https://www.asyncapi.com/)

  * [AsyncAPI ジェネレーター](https://www.asyncapi.com/generator)

  * [AsyncAPI ドキュメント](https://www.asyncapi.com/docs/specifications/v2.1.0)
mediaGallery:
  - link: https://openpracticelibrary.github.io/opl-media/images/contract-first-api-development.png
  - link: https://openpracticelibrary.github.io/opl-media/images/async-api-spec.png
  - link: https://youtu.be/zQncznMLrt4
resources:
  - link: https://swagger.io/docs/specification/about/
    linkType: web
    description: OpenAPI
  - link: https://openapi.tools/
    linkType: web
    description: OpenAPI ツール
  - link: https://openapi-generator.tech/
    linkType: web
    description: OpenAPI ジェネレーター
  - link: https://www.asyncapi.com/
    linkType: web
    description: AsyncAPI 仕様
  - link: https://www.asyncapi.com/docs/getting-started
    linkType: web
    description: Getting started with AsyncAPI
  - link: https://openpracticelibrary.com/practice/definition-of-done/
    linkType: web
    description: Doneの定義
participants:
  - DevOps Team
jumbotron: /images/contract-first-api-development.png
area: delivery-deliver
people: 2+
time: 2+ hours
perspectives:
  - product-ownership
difficulty: moderate
---
