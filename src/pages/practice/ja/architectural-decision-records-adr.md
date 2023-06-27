---
templateKey: practice-page
title: アーキテクチャディシジョンレコード (ADR)
subtitle: 決定履歴の見える化
date: 2021-04-06T18:59:59.091Z
authors:
  - infosec812
tags:
  - culture
mobiusTag: foundation
icon: /images/decisions-1.jpg
whatIs: >-
  ## 概要


  ソフトウェアを設計する際、機能要件や非機能要件に対応する上でアーキテクチャ観点で重要な設計の判断をすることがあります。このアーキテクチャ観点で重要な判断を[アーキテクチャディシジョン (Architectural Decision, AD)](https://en.wikipedia.org/wiki/Architectural_decision) と呼びます。
  例えばJavaかJavaScriptかといった技術の選択であったり、IntelliJかEclipse IDEかといったIDEの選択であったり、[SLF4J](https://www.slf4j.org/) か [java.util.logging](https://docs.oracle.com/javase/8/docs/api/java/util/logging/package-summary.html) かといったライブラリの選択であったり、Undoを何度実行できるようにしておくかといった機能実装上の判断などです。厳密に「アーキテクチャ」に関する決定と捉えがちですが、それより意味は広く、上記の例に挙げたような、何らかの形でアーキテクチャへの影響の可能性がある決定はアーキテクチャディシジョンと呼びます。

  アーキテクチャディシジョンレコードはアーキテクチャディシジョンの履歴を取るために行われます。できるだけ簡単に実施できるべきもので、a) 決定を記録する b) 決定のバージョンを管理する ことができるようにします。


  ## ADRはどのようなフォーマットか


  以下にアーキテクチャディシジョンレコードのサンプルを、「アーキテクチャディシジョンレコードをマークダウンで記録することを決定する」シナリオで記述してみます。


  ```markdown

  # マークダウン形式のアーキテクチャディシジョンレコードを使用する


  ## コンテキストと課題


  このプロジェクトで決定されたアーキテクチャディシジョンを記録することにしたい。

  どのようなフォーマットと構造で記録するべきか。


  ## 検討した選択肢


  * [MADR](https://adr.github.io/madr/) 2.1.2 – マークダウンアーキテクチャディシジョンレコード

  * [Michael Nygard's template](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) – "ADR" の用語が初めて使われたのはこちら

  * [Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions) – The Y-Statements

  * その他のテンプレートはこちらにリストされています <https://github.com/joelparkerhenderson/architecture_decision_record>

  * 型式の指定なし – ファイルフォーマットや構造の指定なし


  ## 決定事項


  採用した選択肢: "MADR 2.1.2"
  理由:


  * 暗黙の前提は明確にする必要がある
    設計ドキュメントは後日になっても決定事項を理解できるようにするために重要である
    [A rational design process: How and why to fake it](https://doi.org/10.1109/TSE.1986.6312940) も参照のこと。
  * MADRのフォーマットは無駄がなく、我々の開発スタイルにあっている

  * MADRの構造は理解しやすく、利用やメンテナンスが容易

  * MADRプロジェクトは活発である

  * 我々がADRを記録し始めた時にバージョン 2.1.2が利用可能な最新である

  ```
whyDo: |-
  このプラクティスを使う理由:

  * 過去に何を実施したかがわかるクイックリファレンスとなる
  * どのような考えに基づいて何をしたのかをステークホルダーと共有できる
  * オープンで透明性の高いコミュニケーションをチーム内外で実現することができる

howTo: まずは利用可能なテンプレートを読んでみてください。以下のリンクにある既存のテンプレートを使うか、あるいは組織やチームが使いやすいテンプレートを自分で作ることもできます。
resources:
  - link: https://adr.github.io/madr/
    linkType: web
    description: Markdown Architectural Decision Records
  - link: https://www.infoq.com/articles/sustainable-architectural-design-decisions
    linkType: web
    description: Sustainable Architectural Decisions
  - link: https://github.com/joelparkerhenderson/architecture_decision_record
    description: Other templates
    linkType: web
people: 2+
difficulty: easy
participants:
  - The Team
  - Stakeholders
  - Product Owners
---
