---
templateKey: practice-page
title: バリュー ストリーム マッピング
subtitle: 価値の流れを見える化し、改善の意思決定に必要な情報を特定する
date: 2017-09-12T05:00:00.000Z
authors:
  - sherl0cks
  - mtakane
  - tdbeattie
  - springdo
  - eranderson921
tags:
  - methods
mobiusTag: foundation
icon: /images/vsm.jpg
whatIs: >-
  バリュー ストリーム マッピング（VSM）は、第三世代のリーンプロセス改善テクニックです。
  バリュー ストリームとは、組織が顧客のための製品やサービスを作るために作り上げた一連のプロセスのことをいいます。
  バリュー ストリームをマッピングするこの手法は、組織のエグゼクティブが、組織的なトランスフォーメーションにおいて、マクロ視点で戦略的な意思決定をするために、デザインされています。

  第一世代は、トヨタの「モノと情報の流れ図」のテクニックとして、リーン思考の中や第二世代である「見方を学ぶ」で明文化されています。
whyDo: >-
  ソフトウェアデリバリおいて、VSM は要求からインフラのプロビジョニングやアプリケーション開発までのすべてのものを含む既存の「ブラウンフィールド」を全体的に分析、最適化するための優れたツールです。

  リーン生産方式からやってきた VSM は顧客が製品やサービスの要求からそれを受け取るまでの価値の流れを見える化します。
  このプラクティスは特に以下のような場面で効果を発揮します。

  * 価値が実際どのように提供されているかについて、組織全体で共通の理解を作り上げる

  * 明確さを提供することで、コンセンサスを作り、改善に対する危機感を醸成する

  * 分断や冗長性、不要な複雑性を明らかにする

  * 具体的で、データ駆動の改善計画を策定する

  * システム思考を適用することで、全体のバリューストリームに対して、部分最適につながる「改善」を防ぐ

howTo: >-
  ## ファシリテーション用の資材
  
  ホワイトボードを好むチームもありますが、通常は紙やふせんを使用します。

  * 模造紙
  
  * 様々な色の幅広のふせん（4x6サイズなど）
  
  * マーカー
  
  * ふせん同士を線でつなぐサインペン

  ## どのようにフィットするか

  VSM は特に[メトリクス ベース プロセスマッピング](https://openpracticelibrary-ja.netlify.app/practice/metrics-based-process-mapping/) （MBPM）と一緒にやると効果的です。一緒に実施すると、VSM はシステム全体を通るマクロレベルの価値の流れを見える化することで、改善における戦略的な意思決定ができるのに対して、MBPMはミクロレベルのフローを見える化することで、戦術的な改善を行うことができます。
  
メディアギャラリー:
  - link: https://openpracticelibrary.github.io/opl-media/images/vsm.jpg
リソース:
  - link: https://vimeo.com/149407030
    linkType: video
    description: Webinar - Karen Martin's Value Stream Mapping and Process Mapping
  - link: https://www.slideshare.net/KarenMartinGroup/vsmmbpmwhenyouoptforeach
    linkType: web
    description: Slides - Karen Martin's Value Stream Mapping and Process Mapping
  - link: https://www.ksmartin.com/books/value-stream-mapping/
    linkType: book
    description: Value Stream Mapping by Karen Martin and Mike Osterling
  - link: https://www.ksmartin.com/webinar/value-stream-mapping/
    linkType: web
    description: List of Webinars by Karen Martin
  - link: https://lizkeogh.com/value-streams-are-made-of-people/
    linkType: web
    description: Value Streams are Made of People by Liz Keogh
  - link: https://www.lean.org/BookStore/ProductDetails.cfm?SelectedProductID=88
    linkType: book
    description: Lean Thinking
  - link: https://www.lean.org/Bookstore/ProductDetails.cfm?SelectedProductId=9
    linkType: book
    description: Learning to See
  - link: http://www.ikea.com/us/en/catalog/products/80324072/
    linkType: purchase
    description: Drawing Paper example
  - link: https://www.amazon.com/Post-Sticky-Janeiro-Collection-4621-SSAU/dp/B001UXFT70
    linkType: purchase
    description: 4x6 sticky notes example
  - link: https://www.amazon.com/Studio-25-Piece-Drawing-Artists-Charcoal/dp/1441310207
    linkType: purchase
    description: Charcoal Pencil and Eraser Example
  - link: https://medium.com/digital-experience-design/how-to-apply-a-design-thinking-hcd-ux-or-any-creative-process-from-scratch-b8786efbf812
    linkType: web
    description: Double Diamond design model
people: <10
difficulty: hard
participants:
  - BAs
  - Directors
  - Architects and the Team
jumbotron: /images/mbpm2.jpg
area: discovery-loop-why
time: 2 - 3 Days
jumbotronAlt: Example MBPM
---
## What is it?

Value Stream Mapping (VSM) and Metrics-Based Process Mapping (MBPM) are third generation lean process improvement techniques, optimized for an extended organizational transformation effort. They work in tandem, where VSM is designed to view the big, macro picture and make strategic decisions with executives, and MBPM is designed to view the detailed, micro picture and make tactical improvements with front line workers. The first generation of these techniques comes from Toyota's "information and material flow" (as documented in Lean Thinking[<sup>1</sup>](#footnote-1) and the second generation from Learning to See[<sup>2</sup>](#footnote-2).

## Why use VSM & MBPM?

In the context of software delivery, VSM & MBPM are excellent tools to holistically analyze and optimize "brownfield" delivery processes, including everything from requirements definition, infrastructure provisioning and application development.

Being derived from Lean Manufacturing, VSM & MBPM visually represent the way work flows through an organization, at both a macro and micro level, from the time a customer requests a good/service, until the time a customer receives the good/service. When used together, these tools are particularly effective at:

- Building shared understanding throughout the various levels of an organization on how work is actually done
- Creating the urgency for improvement
- Formulating specific, data driven improvement plans
- Preventing "improvement" work in a particular area that leads to sub-optimization for the entire value stream / process

## Facilitation Materials Needed

Some teams prefer whiteboards, but the most common approach uses paper and PostIts

- Drawing paper roll[<sup>3</sup>](#footnote-3).
- Different colored wide format sticky notes like the 4x6 sticky notes[<sup>4</sup>](#footnote-4)
- Markers for the PostIts
- Charcoal pencil and eraser[<sup>5</sup>](#footnote-5) to draw lines between PostIts
- For MBPM; chalk line can be useful, but not required

## How does it fit?

Both VSM & MBPM document a current state map, and then design a future state map for subsequent implementation.

- The current state map is typically done in the Why area of the Discovery of the Open Practice Library.
- The future state map is typically done as part of the Outcomes area of the Discoery of the Open Practice Library.

## 追加情報

### ビデオ

- [Webinar](https://vimeo.com/149407030) and [Slides](https://www.slideshare.net/KarenMartinGroup/vsmmbpmwhenyouoptforeach) from Karen Martin's Value Stream Mapping and Process Mapping: When to Use Each

### VSM のリソース

- [Book](https://www.ksmartin.com/books/value-stream-mapping/) by Karen Martin and Mike Osterling
- [List of Webinars](https://www.ksmartin.com/webinar/value-stream-mapping/) by Karen Martin
- [Value Streams are Made of People](https://lizkeogh.com/value-streams-are-made-of-people/) by Liz Keogh

### MBPM についてのリソース

- [Webinar](https://vimeo.com/54601924) and [Slides](https://www.slideshare.net/KarenMartinGroup/metricsbased-process-mapping-what-when-how) from Karen Martin's Metrics-Based Process Mapping: What, When & How
- [List of Webinars](https://www.ksmartin.com/webinar/metrics-based-process-mapping/) by Karen Martin

## 参照

1. <a name="footnote-1"></a>[Lean Thinking](https://www.lean.org/BookStore/ProductDetails.cfm?SelectedProductID=88)
2. <a name="footnote-2"></a>[Learning to See](https://www.lean.org/Bookstore/ProductDetails.cfm?SelectedProductId=9)
3. <a name="footnote-3"></a>[Drawing Paper example](http://www.ikea.com/us/en/catalog/products/80324072/)
4. <a name="footnote-4"></a>[4x6 sticky notes example](https://www.amazon.com/Post-Sticky-Janeiro-Collection-4621-SSAU/dp/B001UXFT70)
