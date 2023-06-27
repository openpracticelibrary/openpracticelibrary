---
participants: []
title: Everything-as-Code
resources:
  - link: 'https://martinfowler.com/bliki/InfrastructureAsCode.html'
    linkType: web
    description: Martin Fowler
  - link: 'https://www.ansible.com/'
    linkType: web
    description: Ansible
templateKey: practice-page
subtitle: '全てをコードとして保存する - 設定、インフラストラクチャ、パイプライン'
date: 2018-08-15T09:37:16.000Z
authors:
  - springdo
  - makentenza
tags:
  - methods
icon: /images/everything-as-code.jpeg
whyDo: >-
  1. トレーサビリティ - 設定を `git` に保存することで、誰が、なぜ、設定を変更したかを追跡するためのコントロールが可能となります。変更は、適用したり戻したりすることができ、変更を行った一人のユーザーまで追跡することができます。

  2. 繰り返し利用可能 - モダンなアプリケーション開発では、あるクラウドプロバイダーから別のプロバイダーへの移動は簡単であるべきです。デプロイメント先を選ぶのは、その週のベストプライスを探すショッピングのようなものであるべきです。すべてのものをコードとして保存することで、さまざまなプロバイダーでシステムを瞬時に再作成することができます。

  3. テスト済み - インフラとコードは、期待通りの動作をすることを確信してから、本番環境にロールアウトし、検証し、プロモートすることができます。

  4. フェニックス サーバー - サーバーの設定にずれが生じる心配はもうありません。パッチの適用が必要になっても、ランダムにサーバーが死んでも大丈夫です。保存された設定から再度作成するだけです。

  5. 理解の共有 - 機能横断的なチームが、一緒に開発している製品のすべての部分を記述するために「Everything as Code」を使用している場合、開発者と運用者の間の理解の共有に役立ち、そのプロダクトの状態を記述するために同じ言語で話し、目標を達成するために同じフレームワークを使用できます。
howTo: >-
  * [Martin Fowler](https://martinfowler.com/bliki/InfrastructureAsCode.html) on
  Infra as Code.

  * [Ansible](https://www.ansible.com/) は、巨大なエンタープライズ・オープンソース・テクノロジーを提供するRed Hatが開発したインフラ自動化ツールです。
area: foundation-technical
whatIs: >-
  Everything as Codeとは、システムのすべての要素をコードとして扱うことです。つまり、ソースコードと一緒に設定をgitやsvnなどのリポジトリに格納することです。下位レイヤーから上位レイヤーまでの構成（NWスイッチ、ベアメタルサーバー、OS、ビルド設定、アプリケーションのプロパティ、デプロイ設定など）をコードとして保存することは、それらが追跡可能で、ボタンをクリックするだけで再作成できることを意味します。



  Everything as Codeにはシステム設計も含まれ、これもコードとして保存されます。旧来のITでは、インフラには専門的な技術が必要で、物理的なハードウェアやケーブルの設置が必要でした。システムが高価であったり、それを作った人がもうその会社にいなかったりなどの理由で、頻繁に触ったり更新することはありませんでした。しかし、クラウドコンピューティングとクラウドネイティブアプリケーションの登場により、仮想インフラを安価で簡単に構築できるようになりました。仮想環境の設定をコードとして保存しておけば、必要なときにいつでもライフサイクルとして再作成することができます。
mediaGallery:
  - link: >-
      https://github.com/openpracticelibrary/opl-media/blob/master/images/everything%20as%20code.jpeg?raw=true
people: ''
mobiusTag: foundation
---
## What is it?

Everything as Code is the practice of treating all parts of the system as code. This means, storing configuration along with Source Code in a repository such as git or svn. Storing the configuration from bottom to top (communication switches, bare metal servers, operating systems, build configurations, application properties and deployment configurations...) as code means they are tracked and can be recreated at the click of a button.

Everything as Code includes system design, also stored as code. In old world IT, infrastructure required specialised skills and physical hardware and cables to be installed. Systems were precious or were not touched / updated often as the people who created them no longer work for the company. The dawn of cloud computing and cloud native applications has meant it is cheap and easy to spin up virtual infrastructure. By storing the configuration of virtual environments as code, they can be life-cycled and recreated whenever needed.

## Why store all things as code?

1. Traceability - storing your config in `git` implies controls are in place to track who / why a config has changed. Changes can be applied and reverted and are tracked to a single user who made the change.
2. Repeatable - moving from one cloud provider to another should be simple in modern application development. Picking a deployment target should be like shopping around for the best price that week. By storing all things as code, systems can be re-created in moments in various providers.
3. Tested - Infra and code can be rolled out, validated and promoted into production environments with confidence and assurance it will behave as expected.
4. Phoenix server - No more fear of a servers' configuration drifting. If a server needs to be patched or randomly dies, it's OK. Just create it again from the stored configuration.
5. Shared understanding - When a cross-functional team is using 'Everything as Code' to describe all the parts of the Product they are developing together, they contribute to increase the shared understanding between Developers and Operations, they speak same language to describe the state of this Product and they use the same frameworks to accomplish their goals.

## Further reading

* [Martin Fowler](https://martinfowler.com/bliki/InfrastructureAsCode.html) on Infra as Code.
* [Ansible](https://www.ansible.com/) is an infrastructure automation tool created by Red Hat, the huge enterprise open source technology provider.
* [Infrastructure-as-code](https://www.youtube.com/watch?v=E2KOF3AdNy0&list=PLkg9jnMh6bhd0avDugIM81BU9VkBEaMMz&index=10&t=0s) example using OpenShift.
