---
templateKey: practice-page
title: テスト駆動開発
subtitle: 短い開発サイクルでソフトウェアを改善する
date: 2018-09-10T11:36:21.873Z
authors:
  - syvanen
  - Zenigata
tags:
  - methods
mobiusTag: foundation
icon: /images/test_tube_truck.jpg
whatIs: テスト駆動開発 (TDD) は非常に短い開発サイクルによってソフトウェアを開発するプロセスです。
  要求をテストケースに落とし込み、そのテストを通るように開発することが求められます。
  つまり、開発者の課題やバグに向き合わせ、開発者が効率的にリファクタできるようにする
  セーフティネットを作りだすのです。このやり方は、ソフトウェアが要求を満たすか
  わからないままコードを追加することを許すソフトウェア開発とは真逆の方法です。
whyDo: >-
  * 開発者がテストを通るだけを狙った、より小さい単位のコードの改善ができるようになる。


  * より小さい独立した単位でコードが開発されるため、よりモジュール化された柔軟なコードにつながる。


  * 例えば、最後に行った変更（またはリファクタリング）が、以前動作していたコードを壊してしまったかどうかを伝えることで、より迅速なフィードバックが得られます。


  * 詳細な仕様を作成する
howTo: >-
  ## Further Information

  * Wikipedia definition of [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development).

  * [Programmer Test Principles](https://medium.com/@kentbeck_7670/programmer-test-principles-d01c064d7934) by Kent Beck.
mediaGallery:
  - link: https://live.staticflickr.com/65535/51041898047_fb088b41a9_4k.jpg
resources:
  - link: https://en.wikipedia.org/wiki/Test-driven_development
    linkType: web
    description: Test Driven Development
  - link: https://medium.com/@kentbeck_7670/programmer-test-principles-d01c064d7934
    linkType: web
    description: Programmer Test Principles
people: 1+
difficulty: moderate
participants:
  - Team members
area: foundation-technical
---
## What is it?

Test Driven Development (TDD) is a software development process that relies on the repetition of a very short development cycle. Requirements are turned into test cases, then the software is developed to pass the tests. In other words, it creates a safety net that serves to keep the developer's problems or bugs at bay while enabling the developer to refactor efficiently. This is opposed to software development that allows software to be added that is not proven to meet requirements.

## Why use it?

- Allows developers to create smaller units of improvement as initially code should only aim to pass the tests.
- Leads to more modular and flexible code as it will be developed in smaller independent units.
- Generates faster feedback, for example by telling you whether your last change (or refactoring) has broken some previously working code.
- Creates a detailed specification.

## Further Information

- Wikipedia definition of [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development).
- [Programmer Test Principles](https://medium.com/@kentbeck_7670/programmer-test-principles-d01c064d7934) by Kent Beck.
