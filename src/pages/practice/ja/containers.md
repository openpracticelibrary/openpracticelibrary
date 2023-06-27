---
templateKey: practice-page
authors:
  - jamesallenred
  - Zenigata
howTo: "* [Linux コンテナについて理解する](https://www.redhat.com/ja/topics/containers) by Red Hat."
resources:
  - link: https://en.wikipedia.org/wiki/Virtual_machine
    linkType: web
    description: Wikipedia entry for Virtual Machines
  - link: https://en.wikipedia.org/wiki/Bare-metal_server
    linkType: web
    description: Wikipedia entry for Bare Metal Server
  - link: https://www.redhat.com/ja/topics/containers
    linkType: web
    description: Linux コンテナについて理解する
participants:
  - Developers
  - Operations
  - Infrastructure
area: foundation-technical
title: コンテナ
subtitle: "アプリケーション本体と、アプリケーションの実行に必要なライブラリ・依存関係など、必要最小限の要素をひとつにパッケージする"
date: 2018-09-04T06:19:38.381Z
tags: []
mobiusTag: delivery
icon: /images/containers.jpg
whatIs: >-
  Linuxコンテナは、技術的には、サンドボックス化されたプロセスもしくは[仮想マシン](https://en.wikipedia.org/wiki/Virtual_machine) や
  [ベアメタルサーバ](https://en.wikipedia.org/wiki/Bare-metal_server)から隔離されたプロセス群と説明することができます。


  これらのプロセスは、Linux Namespacing、CGroups、SELinux contextsなどの試行錯誤を経たメカニズムを使って分離されます。コンテナを想像する良い方法は、アプリケーションやサービスをパッケージ化する方法と考えることです。コンテナには、そのアプリケーションやサービスに必要なファイルやライブラリのみが含まれ、カーネルなどの基礎となるコンポーネントは、各コンテナから共有されます。ファイルとライブラリをパッケージしたものは、コンテナ・イメージとして呼ばれています。
whyDo: >-
  * **リソース効率** – コンテナにより、複数のコンテナを単一の仮想マシンやベアメタルサーバ上で実行することができ、インフラの利用率が高まります。

  * **可搬性** – イミュータブルなコンテナイメージは、適切なコンテナエンジンがある環境であれば、どのような環境でも実行可能です。これにより、ハイブリッドクラウド戦略が可能になります。

  * **スピード** – コンテナイメージの起動は非常に速く、ほとんどの場合1秒以下です。従来のシステムの起動に数分かかるのとは対照的です。

  * **DevSecOpsを可能にする** – イミュータブルなコンテナ・イメージを構築することで、開発者はアプリケーションやサービス固有のコード開発にのみ集中し、セキュリティ・チームがそのイメージをスキャンしてコンプライアンスを確保することができます。そして、アプリケーション固有の知識ではなく、コンテナの実行に関する知識のみを必要とする運用チームがコンテナ・イメージを稼働できるようになり、各チームの責任境界が明確になることで、DevSecOpsの実践が可能になります。
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/containers.jpg?raw=true
people: "1"
time: Ongoing
difficulty: moderate
---
## What is it?

Linuxコンテナは、技術的には、サンドボックス化されたプロセスもしくは[仮想マシン](https://en.wikipedia.org/wiki/Virtual_machine) や
  [ベアメタルサーバ](https://en.wikipedia.org/wiki/Bare-metal_server)から隔離されたプロセス群と説明することができます。

これらのプロセスは、Linux Namespacing、CGroups、SELinux contextsなどの試行錯誤を経たメカニズムを使って分離されます。コンテナを想像する良い方法は、アプリケーションやサービスをパッケージ化する方法と考えることです。コンテナには、そのアプリケーションやサービスに必要なファイルやライブラリのみが含まれ、カーネルなどの基礎となるコンポーネントは、各コンテナから共有されます。ファイルとライブラリをパッケージしたものは、コンテナ・イメージとして呼ばれています。

## Why use it?

* **リソース効率** – コンテナにより、複数のコンテナを単一の仮想マシンやベアメタルサーバ上で実行することができ、インフラの利用率が高まります。
* **可搬性** – イミュータブルなコンテナイメージは、適切なコンテナエンジンがある環境であれば、どのような環境でも実行可能です。これにより、ハイブリッドクラウド戦略が可能になります。
* **スピード** – コンテナイメージの起動は非常に速く、ほとんどの場合1秒以下です。従来のシステムの起動に数分かかるのとは対照的です。
* **DevSecOpsを可能にする** – イミュータブルなコンテナ・イメージを構築することで、開発者はアプリケーションやサービス固有のコードのみを開発し、セキュリティ・チームがそのイメージをスキャンしてコンプライアンスを確保することができます。そして、アプリケーション固有の知識ではなく、コンテナの実行に関する知識のみを必要とする運用チームがコンテナ・イメージを実行できるようになり、DevSecOpsの実践が可能になります。

## Further Information

* [Linux コンテナについて理解する](https://www.redhat.com/ja/topics/containers) by Red Hat.
