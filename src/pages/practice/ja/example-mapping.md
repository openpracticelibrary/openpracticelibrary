---
title: 実例マッピング
subtitle: ステークホルダを巻き込み受入基準を決める
date: 2019-09-23T00:25:52.711Z
authors:
  - jacobsee
area: options
tags: []
perspectives: []
icon: /images/example-mapping-2-.png
people: 2+
time: up to 30 minutes per story
difficulty: easy
participants:
  - The Team
  - Product Owner
  - Stakeholders
templateKey: practice-page
whatIs: >-
  実例マッピング（Example Mapping）は、ユーザーストーリーの受入基準を詳細化し、明確にするための手法です。これは、ストーリーを概念のまま抽象的に扱うよりも、具体的なケースを複数例示した方が意図や情報をより良く伝えられるという考えに基づいています。
whyDo: >-
  実例マッピングは、ビジネスルールや事例シナリオを説明できる適切な人（例えばプロダクトオーナー）と、それらのルールに関する適切な質問ができる技術チーム（開発者）が話し合い、ストーリーを詳細化・明確化する際に使います。実例マッピングは、チームがストーリーを正しく理解しているかを確認するために使われる他、受入基準づくりにステークホルダーを巻き込むことにも使われます。また、ビジネスルールの具体的な例を議論することで、誤解や検討漏れを明らかにすることができます。

howTo: >-
  実例マッピングでは４色の付箋を使います。

  * 黄：ユーザーストーリー
  
  * 青：ストーリーに紐づくビジネスルール
  
  * 緑：ビジネスルールに対する具体例（実例）
  
  * 赤：議論の中で生じた疑問点


  まず議論するストーリーを１つ選び、ストーリーを黄色の付箋に書き出し、これから実例マップを作る場所（壁面やオンラインホワイトボード）の一番上にストーリーの付箋を貼ります。次に、ストーリーの下に青い付箋で書いたビジネスルールを水平に貼ります。青のビジネスルールの下に、緑の付箋で書いたビジネスルールの具体例（実例）を縦に並べます。緑の実例の書き方は「〇〇の状況では〇〇となる」といった感じの砕けた文体やGherkin記法（受入テスト自動化のための記法の１つ）で書くことができ、決まった書式はありません。（実施例セクションのYouTube動画(英語)が参考になるでしょう。）


  実例やビジネスルールに関する誤解や不明点が生じた場合はメンバーで議論してこれを解消しますが、解消できない場合はそれを赤の付箋に書き、後で適切な人（ステークホルダ）に確認します。


  議論を重ね、ストーリーが求める仕様について全員が十分に理解できるだけの実例が揃うと、それらは自動テストと受入基準として書き直すことができるはずです。

mediaGallery:
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/example-mapping-2-.png
  - link: 'https://www.youtube.com/watch?v=VwvrGfWmG_U'
resources:
  - link: 'https://cucumber.io/blog/example-mapping-introduction/'
    linkType: web
    description: Example Mapping Introduction from Cucumber.io
  - link: 'https://xebia.com/blog/example-mapping-steering-the-conversation/'
    linkType: web
    description: Steering the Conversation with Example Mapping
mobiusTag: options
---
## What is it?

Example mapping is a technique for fleshing out and gaining clarity around the acceptance criteria for a given story. It is based on the idea that multiple examples of specific cases convey information better than a single bad abstraction of a concept.

## When to use it?

Example mapping should be used when you have the right people in the room to be able to explain business rules and example scenarios, and a technical team that can ask the right questions about those rules. It should be used as a tool to ensure that the team appropriately understands what is expected of the story, and to get the stakeholders involved in the development of acceptance criteria. It also brings to light misunderstandings while discussing specific examples of business rules.

## How to do it?

Example mapping uses four different colors of sticky notes, which are:

1. Yellow - for the story itself (as a header for the example map)
2. Blue - for specific rules associated with the story
3. Green - for examples of rules
4. Red - for questions that arise during the discussion

Begin by selecting a story and write it on a yellow sticky note. Place it at the top of your example map as a header. In a horizontal row underneath that, begin writing business rules on blue sticky notes. Beneath the blue business rules, create columns of green sticky notes with individual examples of those business rules. These could be relatively unstructured, Friends-style "The one where..." examples, or full blown Gherkin criteria.

As misunderstandings arise surrounding individual examples or entire business rules, add red stickies with questions written on them if the right people to answer the question or resolve the misunderstanding are not in the room.

When there are enough examples that everyone is comfortable with what is being asked in the story, they can be rewritten as both automated tests and acceptance criteria.

![](/images/example-mapping-2-.png "Example Map")

## Further Information

<https://cucumber.io/blog/example-mapping-introduction/>

<https://xebia.com/blog/example-mapping-steering-the-conversation/>

<https://www.youtube.com/watch?v=VwvrGfWmG_U>
