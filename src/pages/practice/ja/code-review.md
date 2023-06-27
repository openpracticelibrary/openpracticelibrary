---
templateKey: practice-page
title: コードレビュー
subtitle: 開発者のエゴでレビューも実施
date: 2020-08-12T20:44:12.964Z
authors:
  - mabulgu
tags:
  - learn
mobiusTag: delivery
icon: /images/code-review.png
whatIs: >-
  コードレビューとは、作者以外の人が該当するコードをチェックし、以下のような質問を検討するソフトウェアの品質保証のためのアクティビティです:


  * **TL;DR:** コードは[clean](https://www.amazon.co.jp/Clean-Code-%E3%82%A2%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%81%94%E4%BA%BA%E3%81%AE%E6%8A%80-%E3%82%A2%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%89%E3%83%AF%E3%83%B3%E3%82%B4-%EF%BC%B2%EF%BD%8F%EF%BD%82%EF%BD%85%EF%BD%92%EF%BD%94-%EF%BC%A3%EF%BC%8E%EF%BC%AD%EF%BD%81%EF%BD%92%EF%BD%94%EF%BD%89%EF%BD%8E-ebook/dp/B078HYWY5X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1SSD3RDZLZ8FC&keywords=clean+code&qid=16641)か? :)

  * **設計(Design):** コードはよく設計され、あなたのシステムに適しているか？

  * **機能性(Functionality):** 開発者が意図したと思われる動作をするコードか？ユーザーにとって正しい動作か？要求事項を見ると、すべてのケース/機能が完全に実装されているか？

  * **複雑性(Complexity):** このコードをもっとシンプルにできないか？将来、別の開発者がこのコードに出会ったとき、簡単に理解して使うことができるだろうか？マーティン・ファウラー氏の著書[Refactoring: Improving the Design of Existing Code](https://www.amazon.co.jp/%E3%83%AA%E3%83%95%E3%82%A1%E3%82%AF%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0-%E7%AC%AC2%E7%89%88-%E6%97%A2%E5%AD%98%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E5%AE%89%E5%85%A8%E3%81%AB%E6%94%B9%E5%96%84%E3%81%99%E3%82%8B-OBJECT-TECHNOLOGY/dp/4274224546/ref=pd_lpo_1?pd_rd_i=4274224546&psc=1)の中で述べているように:

    > コンピュータが理解できるコードを書くのはどんなバカでもできる。優れたプログラマーは、人間が理解できるコードを書きます。

  * **テスト(Tests):** コードには正しく、よく設計された自動テストがあるか？新しい自動テストは新しいコードに対して十分か？コードの変更に伴い、既存の自動テストは書き直す必要があるか？

  * **命名規約(Naming):** 変数、クラス、メソッドなどの名称を明確に決めているか？

  * **コメント(Comments):** コメントは明確で有用か？

  * **スタイル(Style):** スタイルガイドに沿ったコードになっているか？

  * **ドキュメント(Documentation):** また、関連するドキュメントを更新しているか？

whyDo: >-
  コードレビューの最も重要な利点は、[Collective Code Ownership](https://wiki.c2.com/?CollectiveCodeOwnership)です。これは、あらゆるプロジェクトの"[Code Ownership](https://martinfowler.com/bliki/CodeOwnership.html)"は、個人ではなく、チームそのものに属するという[eXtreme Programming (XP)](http://www.extremeprogramming.org/) のプラクティスです。スティーブ・マコーネルは、彼の著書 "[Code
  Complete](https://learning.oreilly.com/library/view/code-complete-second/0735619670/)" の中で、このことを"Collective Ownership in Construction（構造における集団所有）"と呼んでいます。これは、すべてのコードが貢献者(contributors)のグループによって所有され、貢献者はそれぞれ平等に、集団で所有するプロジェクトにアクセスし、変更することができるという考え方です:

    > ソフトウェアエンジニアリングのプロセスを管理する方法の1つは、”最低価値"の段階、つまり、投資が最も少なく、問題の修正に最もコストがかからない段階で問題を発見することです。この目標を達成するために、開発者は”クオリティゲート"と呼ばれる定期的なテストやレビューを行い、ある段階での製品の品質が次の段階に進むのに十分であるかどうかを判断するのである。


  これによって、2つ目の重要な利点は、[Ego-less Programming](https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/)が挙げられます。ジェフ・アトウッドがブログ記事で以下のように述べています：

    > ***あなたはあなたのコードではありません。*** レビューの目的は問題を発見することであり、問題は必ず発見されることを忘れないでください。問題が発見されても、それを個人的に受け止めないでください。


  もし誰かが間違いを犯したとしても、この方法ならそれを受け入れ、修正することが容易になります。そして、***"あなたがどれだけ '空手'を知っていても"***、ジェフ・アトウッドが言うように、***"他の誰かがもっと知っている"***のです。


  また、開発者よりも知らない人がいる場合もあり、そのような場合には、敬意と忍耐の両方を示さなければなりません。コードレビューによって、開発者はこれらのことを短時間で理解することができます。


  その他の重要な利点としては、以下のようなものが挙げられます：


  * 知識の共有と新人エンジニアのメンタリング

  * より良いコード

  * 不具合の発見

  * コミッターのモチベーションを高める

  * 長期的には、より良い見積もり
howTo: >-
  コードレビューの種類は、所要時間とレビューの目的によって3つに分類されます:


  * **インスペクション:** 1時間程度かかる長時間のコードレビュー。"モデレーター"と呼ばれる第三者がこのセッションに参加し、1時間以上かかることも大いにあり得るレビューの進行をモデレートします。この場合、これ以降はパフォーマンスや細部へのこだわりが低下する傾向があります。

  * **ウォークスルー:** これは、通常、先輩開発者が新人プログラマーにコンセプトを説明するための教育機会を提供することを目的としたワーキングミーティングに変化する、より時間のかからない中堅レベルのコードのためのものです。

  * **ショートレビュー:** 小さな変更へのコードレビューであれば10分程度、特にリリースフィックスやバグフィックスは非常に短い時間で修正することができます。


  ### 効率的なコードレビュー手法


   [モブプログラミング](https://openpracticelibrary-ja.netlify.app/practice/mob-programming/)、[ペアプログラミング](https://openpracticelibrary-ja.netlify.app/practice/pair-programming/)、 -あるいは[ピンポンプログラミング](https://openpracticelibrary-ja.netlify.app/practice/ping-pong-programming/)のようなサブメソッド- は、コードレビューの利点を提供し、コードレビューの定義によく合っているので、コードレビュー技法としてカウントすることができます。ただ、"ペアプログラミング"の場合は、レビュアーと並んで座り、コードを書きながらレビューされるという違いがあります。そのため、効率性のレベルはそれぞれ異なり、効率の高いものから低いものへと以下のように分類することができます:
  


  ![](/images/code_review_efficency.png)


  *[from "10 Faulty Behaviors of Code Review"](https://speakerdeck.com/lemiorhan/10-faulty-behaviors-of-code-review?slide=7)*


  上記からわかるように、ペアでサイドバイサイドのプログラミングを行う以外に、最も効率の良いコードレビュー手法は"プルリクエスト"を開くことで、これはGitHubやGitLabなどのgitプロバイダで活発に使われている非常に効率の良い技術です。
mediaGallery:
  - link: https://openpracticelibrary-ja.netlify.app/images/code-review.png
  - link: https://openpracticelibrary-ja.netlify.app/images/code_review_efficency.png
resources:
  - link: https://www.wikiwand.com/en/Code_review
    linkType: web
    description: "Wikiwand: Code Review"
  - link: https://speakerdeck.com/lemiorhan/10-faulty-behaviors-of-code-review
    linkType: web
    description: 10 Faulty Behaviors of Code Review
  - link: https://dev.to/vaidehijoshi/crafting-better-code-reviews
    linkType: web
    description: Crafting Better Code Reviews
  - link: https://google.github.io/eng-practices/review/
    linkType: web
    description: "Google Engineering Practices: Code Review"
  - link: https://www.atlassian.com/agile/software-development/code-reviews
    linkType: web
    description: Atlassian's Code Reviews
  - link: https://www.perforce.com/blog/qac/9-best-practices-for-code-review
    linkType: web
    description: 9 Best Practices for Code Review
  - link: https://medium.com/palantir/code-review-best-practices-19e02780015f
    linkType: web
    description: Code Review Best Practices
  - link: https://blog.codinghorror.com/the-ten-commandments-of-egoless-programming/
    linkType: web
    description: The Ten Commandments of Ego-less Programming
people: 2+
time: 10-60 mins
difficulty: easy
participants:
  - Developers
---
