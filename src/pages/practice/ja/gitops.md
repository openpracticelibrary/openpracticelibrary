---
templateKey: practice-page
title: GitOps
subtitle: Gitにないものは、本物ではない。
date: 2021-04-20T22:55:04.468Z
authors:
  - ckavili
tags:
  - methods
mobiusTag: foundation
icon: /images/screenshot-2021-04-21-at-01.01.49.png
whatIs: >-
  GitOpsは、開発から本番までの作業の流れをGitの運用で管理するパターンです。GitOpsのコンセプトは、以下のように非常にわかりやすいものです:


  * [Everything as Code:](https://openpracticelibrary-ja.netlify.app//practice/everything-as-code/) Gitは常に、システムで起きていることに対する、信頼できる情報源である。

  * デプロイ、テスト、ロールバックは常にGitのフローで管理される。

  * 手動でのデプロイや変更はできない：変更が必要な場合は、commit などの Git 操作を行うか、pull request を上げる必要がある。


  GitOpsは、シンプルな運用、より良い開発者体験、システム上で起きていることのより良い可視性を提供します。今日、最も人気のあるGitOpsツールは、ArgoCDとFluxです。GitOpsの採用が進むにつれて、そのアプローチとツールに関するベストプラクティスも急速に形成されつつあります。
whyDo: >-
  基本的に、GitOpsは「Gitにあるものをどうやって自分のプラットフォームに反映させるか」という問題を解決するためのものです。プラットフォームと直接やりとりする必要性をなくし、代わりにGitリポジトリとやりとりするようにします。しかし、GitOps は、特に DevOps **文化** と **プラクティス** を採用したいと考えている企業にとって、*everything as code* のアプローチを超える、それ以上の価値を組織へ提供します。
  

  GitOpsの効果:


  * 宣言的な記述とバージョン管理を強制します。開発者はアプリケーションのコードにGitを使うことに慣れていますが、GitOpsはソースコードと並んで、アプリケーションの他のリソースも保存する必要があることを意味します。もし、それらがGitになければ、本物ではないのです！

  * アプリケーションコードとインフラコードの区別を減らします。

  * DevOpsの文化とプラクティス採用を加速。GitOpsを適用することで、宣言型記述の自動デプロイメントが可能になり、リードタイムの短縮につながります。

  * トレーサビリティの向上。痕跡を残さず変更する方法はありません。

  * セキュリティの向上。コンプライアンス要件がマニフェストとして定義され、Git に保存されている場合、GitOps を通してその適用を確認することができます。さらに、Gitは変更を追跡するため、信頼できる唯一の情報源（the single source of truth）となり、大きなセキュリティ上の利点を提供します。

  * 設定ドリフトを最小化する。GitOpsツールは、Gitにあるものとシステムで適用されているものに違いがある場合に警告を出し、変更を戻す手助けもします。

  * ソフトウェアのライフサイクル全体をセルフ文書化し、可視化する。リポジトリを見れば、プラットフォーム上で何が動いているかが簡単にわかるようになります。

  * 平均修復時間（MTTR）を下げる。以前のバージョンへのロールバックは、単に過去のコミットを使用するだけです。


  上記のように、GitOps のアプローチを導入することは、Git ハッシュやPull Requestを気にするだけでなく、製品やより重要なチームについても可視化できることを意味します。ITデリバリー能力の立ち上げとスケーリングにGitOpsを適用することで、市場やグローバルな出来事への対応を大幅に加速させることができます。GitOps のアプローチは、新しいチームや既存のチームに対して、再現性のある環境とツールを作成するためのより良い体験を提供することができます。また、既存のアプリケーションを移行する場合は、生産性を向上させ、ダイナミックなチーム構造を迅速に採用することができます。
howTo: >-
  クラウドネイティブな世界では、継続的デリバリーとは、すべてのコミットが人手を介さずに自動的に本番環境に送信されるプラクティスです。したがって、GitOpsのアプローチは、CDに完璧にマッチしています。


  チームとして、実際にGitOpsとは何を意味するのかについて話し合い、合意する必要があります。Git リポジトリの構造や、どの設定ファイルをどこに保存するかを定義します。そして、ニーズに合わせて適切なツールを用意しましょう。もちろん、リポジトリを設定する方法は複数あります。 ここでは、1つの設定リポジトリと別のソースコードリポジトリを利用するCI/CDパイプラインのハイレベルなフロー例を示します:


  ![GitOps Approach with Helm and Argo CD](/images/helm-argo-cd-page-1.png)




  #### ***The Open Practice Library はGitOpsを活用しています!***


  Open Practice Libraryは、複数の[Gitリポジトリ](https://github.com/openpracticelibrary/opl-cd)に分散するマイクロサービスのコレクションとフロントエンドアプリケーションです。これらのマイクロサービスはマニフェストとして定義され、マニフェストの変更は自動的にトリガーされ、様々なコードレポのGitHub Actionsを介してOpen Practice Libraryのバージョンがリリースされます。これは ArgoCD によって監視され、Red Hat OpenShift Container Platform で実行されているアプリをマニフェストの変更で自動的に更新します。
resources:
  - link: https://github.com/rht-labs/ubiquitous-journey
    linkType: web
    description: Ubiquitous Journey - an implementation of GitOps
  - link: "https://www.openshift.com/blog/announcing-openshift-gitops "
    linkType: web
    description: Red Hat OpenShift GitOps
  - link: "https://argoproj.github.io/argo-cd/ "
    linkType: web
    description: Argo CD - a popular GitOps tool
  - link: "https://www.weave.works/technologies/gitops/ "
    linkType: web
    description: What is GitOps?
participants: []
---
