---
templateKey: practice-page
title: 相対見積
subtitle: 作業の複雑さや価値の大きさの見積について、共通認識を促進します。
date: 2018-09-03T17:09:39.370Z
authors:
  - tdbeattie
  - Dappleyard93
  - jonathanjohnston
  - ilaria66
  - noelo
  - mvmaestri
tags:
  - methods
mobiusTag: foundation
icon: /images/final_relative-sizing.png
whatIs: >-
  * 作業や価値の大きさを見積もるためのテクニックです。見積に相対値を用います。（1人日、10人月のような見積ではなく、タスクAとBの見積工数は1:3、のように相対値で見積を行います。）

  * 相対的な大きさに対する異なる観点がある際に、メンバー間での協議を促進します。

  * ストーリーポイント、プランニングポーカー、Tシャツサイズ、ダブルフィギュアなどのテクニックが使用されます。
whyDo: >-
  * 作業の複雑さや価値の大きさについて、チームの会話を促し、チームが見積についての共通の理解を持つことを助けます。

  * 絶対的な見積もりの欠点である、感覚に頼った見積もりや余分なバッファを避けることができます。（例えば、プロジェクトの初期に最終工程までの見積を出そうとすると、後半の工程では大きめのバッファを用意するケースが多いです。バッファが大きいとは、見積に不確かさが大きいことを意味します。）

howTo: >-
  例えば、以下の果物を食べるのがどの程度難しいか見積もるように求められたとしましょう。（果物を食べるには種を取る、皮を剥くといった工程が必要になります。）

  ![](https://openpracticelibrary.github.io/opl-media/images/apple.jpg)

  相対見積の手順：

  
  1. ストーリーポイントを使用する場合、最初にやるべきことは相対見積の基準をチームで合意して設定することです。ここではぶどうを食べる難しさを基準の1ポイントとしてチームで合意します。

  2. 他の果物をぶどうと比較します。

  3. りんごは芯を避けて食べる必要があるため、ぶどうよりは若干難しいと考えられます。りんごは2ポイントとしてチームで合意できるでしょう(※)。

  4. オレンジとバナナは皮を剥く必要があるため、ぶどうやりんごよりも難しいと考えられるので、これらを3ポイントで合意できるでしょう。

  5. ココナッツを食べるには硬い殻を割る必要があり、より多くの労力が必要ですので、これを8ポイントで合意できるでしょう。

  ※ りんごを丸かじりで食べるメンバーにとって2ポイントは妥当な数値です。一方で、りんごとは皮を剥いてカットしてから食べる果物だと考えるメンバーもいるかもしれず、そのようなメンバーにとってポイントは3か5が妥当です。メンバー間で想定ポイントを話し合う際に、メンバーによって想定ポイントが大きく異なることがありますが、このときメンバー間で前提や想定する工程の認識に大きなズレが生じている可能性が高いです。自分が考える見積の根拠や前提を話し合うことで、認識がズレたまま後工程に進むことを避けることができます。皮剥きとカットの他にも、例えば下記のような背景によりポイントの修正が必要になるかもしれません。

  * 誰かがココナッツの殻を割る道具を持っているため、それほど労力が必要ではないかもしれません。

  * オレンジには種があり、バナナよりも食べるのが面倒かもしれません。

  ## 大規模な計画作りで役立つツール

  過去に見積済みのリファレンスストーリー（できれば実際に作業を完了しており見積の妥当性が検証済みであることが望ましい）を基準に見積もることで、素早く簡易な見積を得ることが可能になります。活動のサイクル（スプリント）に併せて見積を繰り返すことで、チームは見積の妥当性を学習し、より正確な見積を体得していきます。

  例：
  * チームリーダー：新しいストーリーAは過去に取り組んだストーリーBの3ポイントより大きいと思いますか？

  * メンバーの回答がYesの場合 -> チームリーダー：では、別の過去のストーリーCの8ポイントよりも大きいでしょうか、大体同じサイズでしょうか？

  * メンバーの回答がNoの場合 -> チームリーダー：では、3ポイントとします。

  ![](https://openpracticelibrary.github.io/opl-media/images/sizing.jpg)



  ## Tips for remote working

  * リモートであっても大きく異なる点はありませんが、オンラインに最適化された見積ツールや投票ツールの活用は検討すべきです。

  * ストーリーが大きすぎて実装が複数のスプリントにまたがる事は避けるべきです。ストーリーの分割を検討しましょう。

mediaGallery:
  - link: https://openpracticelibrary.github.io/opl-media/images/sizing.jpg
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/Relative%20Sizing.jpeg?raw=true
  - link: https://openpracticelibrary.github.io/opl-media/images/apple.jpg
resources:
  - link: https://www.mountaingoatsoftware.com/blog/what-are-story-points
    linkType: web
    description: Mike Cohn Blog Post about Story Points
  - link: https://www.mountaingoatsoftware.com/blog/estimating-with-tee-shirt-sizes
    linkType: web
    description: Mike Cohn Blog Post about Tee-shirt Sizing
  - link: https://openpracticelibrary.com/blog/facilitation-tips-for-remote-sessions/
    linkType: web
    description: Remote Facilitation Tips
difficulty: moderate
participants:
  - Facilitators
  - Team Members
area: foundation-culture-and-collaboration
people: 2+
time: Varies
---
## What is it?

* A mechanism for sizing different items relative to each other.
* A tool to facilitate conversations, especially where there are different views on relative sizes.
* Common techniques include use of story points, planning poker, t-shirt sizes and double figures.

## Why use it?

* Facilitates conversation.
* Helps align groups of people to reach consensus on their understanding regarding the size of complexity and/or value of an item.
* Avoids the emotion, buffering and other negative side effects of absolute estimation.

## Relative Estimation Example

Let's say for example you were asked to estimate how difficult it is to eat the fruit below?

![](/images/apple.jpg)

1. If we were using story points the first challenge here would be identifying the 1-pointer. Let's say that is the grape.
2. From there we then compare the other fruits to the grape.
3. Maybe the apple is a bit tougher as you've got to eat around the core, so let's call that a 2-pointer.
4. Then the orange and banana have to be peeled first so that might make it more difficult than both of the previous fruits. We therefore know it's harder than the grape and apple but how much harder? Is it harder than the coconut?
5. Probably not. So lets call them a 3-pointer and the coconut, which requires a lot more effort, an 8-pointer.

As we go through these estimations conversations will occur within the team and you'll discover more with understandings beginning to align. In this example this might include things like:

* Perhaps someone has a tool that makes opening coconuts easier so maybe it doesn't require as much effort as we thought?
* Maybe the orange has pips in it and also it's more difficult than the banana?

## A helpful tool for big planning

The Relative estimation line is one technique that can help with this sort of thing allowing for quick and easy estimation based on past experience. This line should contain reference stories that have already been estimated (or preferably completed) and allows the team to compare previous work.

An example:

* 'Okay we have story A, is this bigger than the 3 points we have here?'
* Assuming yes - 'Okay is it bigger than the 8 pointer? Or is it roughly the same size'
* Assuming no - 'Okay so we'll say its a 5 pointer then'

![](/images/sizing.jpg)

## Tips for remote working

* Not very different from how it is run normally but look to utilize online estimating tools and voting applications where possible.
* It is relevant to avoid stories too big that are brought into the sprint and they are carried over multiple sprint, as in face to face engagements.

## Further Information

* [Mike Cohn Blog Post about Story Points](https://www.mountaingoatsoftware.com/blog/what-are-story-points)
* [Mike Cohn Blog Post about Tee-shirt Sizing](https://www.mountaingoatsoftware.com/blog/estimating-with-tee-shirt-sizes)
