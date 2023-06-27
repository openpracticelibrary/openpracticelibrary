---
templateKey: practice-page
title: Readyの定義
subtitle: 作業(スプリント)が着手可能かを判断する基準
date: 2018-08-16T03:38:19.000Z
authors:
  - mtakane
  - ilaria66
tags:
  - culture
mobiusTag: foundation
icon: /images/dor.jpg
whatIs: >-
  * Readyの定義（Definition of Ready, DoR、準備完了の定義）は、プロダクトバックログアイテム(PBI)をスプリントバックログに移してスプリント（開発/コーディング）を開始するための準備が整っているかを判定する基準です。INVEST基準がよく使われます。

  * チームが共同で作成し、維持し、遵守する基準です。
whyDo: |-
  * 進行中の作業がスコープを逸脱してしまうことを防ぎます。
  * 作業（スプリント）を開始する際に作業項目(PBI)に関する理解を深めることができます。
howTo: >-
  ### 例


  Readyの定義はチームの特性に応じてチーム毎に定めるべきものですが、他のチームのReadyの定義を知ることも役に立つでしょう。以下に、現在AXA PPP Healthcareで使用されている例を示します。


  **READYの定義** : ユーザーストーリーは下記のINVEST基準を満たしていること。

  * Independent（独立）：ユーザーストーリーが互いに独立していること。

  * Negotiable（交渉可能）：特定の機能に対する約束事でないこと。（日本語訳注：ユーザーストーリーはWhat(どんな機能を作るか)とWhy(なぜそれが必要なのか)に焦点を当て、How(どうやってそれを実現するのか)はスプリントプランニングで開発者を中心に議論(交渉)できる状態にしておくことを「交渉可能」と言う）

  * Valuable（価値があること）：タスク/コーディングの単位などでストーリーを定義するのではなく、価値が創出できる単位でストーリーを定義する。

  * Estimable（見積可能）：見積には前提となる情報をチームで共有していることが必要。

  * Small（小さい）：イテレーション（スプリント）に収まるサイズであること。

  * Testable（テスト可能）："受入基準"が定まっていること。

  ### リモートワークのヒント
  
  
  * Readyの定義とDoneの定義はリモートでも比較的容易に合意することができます。

  * 一人がファシリテーターとして、みんなの意見に基づいて記述するか、みんなで共同編集することができます。

  * 仮想ホワイトボードツールを使用し、Roman Voting(親指サインを使ったGood/Badの意思表示で行う投票)や名前入り付箋を使って合意を得るなどのテクニックを活用してください。
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/DoR.jpg?raw=true
resources:
  - link: https://openpracticelibrary.com/blog/facilitation-tips-for-remote-sessions/
    linkType: web
    description: Remote Facilitation Tips
participants:
  - Product Owner
  - The Team
area: foundation-culture-and-collaboration
people: 2+
time: 15 minutes
perspectives:
  - facilitation-tips-for-remote-sessions
difficulty: easy
---
# What is it?

* Criteria that is used to identify any work item as ready to be be taken by a team member and worked on
* Collaboratively created, maintained and enforced criteria by the team

# Why use it?

* Reduce scope creep on "in-flight" work items
* Increase understanding of the work item when pulling it to be worked on

## Tips for Remote Working

* It is reasonable easy to find an agreement on both definition of ready and done remotely
* One person can be a facilitator writing it based on everyone input or everyone can co-edit
* Use virtual white boarding  tool and use techniques such as “roman voting’ or adding a sticky w/name to gain consensus.

## An Example

Whilst Definitions of Ready should be specific to the teams using them, it helps to have an idea of what others teams are using. Included below is just one example current in use in AXA PPP Healthcare:

> DEFINITION OF READY
>
> \
>
> User Stories meet INVEST criteria
>
> \    Independent (of all others)
>
> \    Negotiable (not a specific contract for features)
>
> \    Valuable
>
> \    Estimable (to a good approximation)
>
> \    Small (so as to fit within an iteration)
>
> \    Testable (in principle, even if there isn’t a test for it yet)
>
> Must have Acceptance Criteria
