---
templateKey: practice-page
title: ストーリーキックオフ
subtitle: 開発者ペアがピックアップする直前に、ストーリーを説明するイベント
date: 2019-02-12T03:58:39.284Z
authors:
  - kartiknarayanan
tags: []
mobiusTag: delivery
icon: /images/needs-an-image.png
whatIs: >-
  * これは、開発開始前に、プロダクトオーナーとそのストーリーを担当する開発者のペアが共同でウォークスルーや説明を行うプラクティスです。


  * 開発者（とその他）はこの機会に疑問点を解消し、ストーリーをタスクアウトしたり、タスクを再確認したりします。


  * 話の範囲が変わっていないか、変わっていたらどうするか、最後のチェックポイントです。
whyDo: >
  * **タイムラグ** 

    > スプリントプランニングミーティングでは、チームは次に取り上げられそうな様々なストーリーを議論することになリマス。この議論と実際にストーリーがピックアップされる時との間にタイムラグが生じ、コンテキストが失われることがあります。これは通常、持ち越されたストーリー、重要なバグ修正、休暇などのような、現実世界の影響によるものです。

  * **ディープダイブの欠如** 

    >  また、IPM（イテレーションプランニングミーティング）では、時間の制約や未決事項など様々な理由により、ストーリーの深堀りが行われないこともあります（これはチームやプロジェクトによって異なります）。
  * **コンテキストの変化** 

    > たとえ深堀りが行われ、技術的なタスクが詳細化されたとしても、IPMと実際にストーリーが取り上げられるまでの間にコンテキスト・状況が変わっている可能性があるのです。

  ストーリーのキックオフでは、ニーズを再確認すると同時に、ストーリーをより深く分析・検証する機会を提供します。
howTo: >-
  **準備**

  * **ストーリー** 

  > プロダクトオーナーは、分析を行った上でストーリーを準備する必要があります。つまり、ストーリーの目標、ユーザー、価値が明確になっている必要があります。また、受け入れ基準（アクセプタンスクライテリア）や前提条件も必要です。さらに、プロジェクトの状況に応じて、モックアップ、データ、スクリプトなどが必要な場合もあります。


  * **参加者** 

  >理想的には、ストーリーに取り組む開発者のペアと、それをテストする品質担当者が最低限必要です。時には、ユーザーエクスペリエンスデザイナーやUI開発者、ストーリーの実現に関連する特定のスキルセットを持つ人たちを連れてくる必要があるかもしれません。もちろん、キックオフには、プロダクトオーナーやストーリーを書いた人も出席する必要があります。


  **時間**

  * **長さ** 

  > これが長編の最初のストーリーである場合、全員が同じページにいるように、チーム全員を招待する必要があるかもしれません。通常、機能の最初のストーリーは、説明のために多くの準備と時間を必要とする傾向があります。これが完了し、チームがその機能に慣れてくれば、かかる時間はかなり短縮されます。開発者が実際に作業を開始する前にキックオフを行いましょう。


  * **タイミング** 

  > よくある間違いは、キックオフを一日の終わり、昼食前、IPM前、あるいは開発者のどちらかが現在のストーリーに取り組み終わる前に行うことです。この場合、キックオフの目的、つまりストーリーに集中することが希薄になるため、キックオフの価値の一部が減少することを意味します。


  **実施**


  * **説明** 

  > 開発者と品質担当に実際のストーリーを説明し、ストーリーの背景と受け入れ基準を明確に説明します。


  * **サポート資料** 

  > アプリケーションをあるウィンドウで開き、ストーリーそのものを別のウィンドウで、シーケンスなどの補足資料を別のウィンドウで開くとよいかもしれません。筆記用具を用意するか、ホワイトボードの横に置いてください。説明のための写真を撮り、ストーリーに添付することもできます。

  * **質問** 

  > 一般的に、最もシンプルなストーリーであっても、疑問が生じるものです。これらの質問のほとんどは、分析が明確であれば、簡単に答えることができるはずです。開発者/品質担当からのインプットに基づき、ストーリーに小さな修正が加えられるかも 知れません。会話の結果は、後で参照できるようにストーリーに記録されるべきです。


  * **障害物** 

  > 時には、より詳細な分析や他のステイクホルダーとの会話が必要な質問もあるかもしれません。このような場合、チームは、質問に関連するスコープを除外しながらストーリーを進めるか、質問に答えるまでストーリー自体をパーキングするかについて、判断を下すことができます。
mediaGallery:
  - link: https://openpracticelibrary.github.io/opl-media/images/kickoff.jpg
resources: null
participants:
  - "Mandatory: Product Owner/BAs"
  - "Developer Pair Optional: Quality Analyst"
  - Others
jumbotron: /images/kickoff.jpg
area: delivery-deliver
people: 3+
time: 1-20 minutes
perspectives:
  - product-ownership
difficulty: moderate
---
## What is it?

* A joint walkthrough/explanation of the story by the product owner with the pair of developers who will be working on it; right before development starts
* The developers (and others) use this opportunity to get their questions answered and task out the story or re-validate the tasks.
* A final check-point to ensure that the scope of the story has not changed or if it has, what to do about it.

## Why use it?

* **Time Lag** - In a Sprint Planning Meeting, the team ends up discussing the various stories that are likely to be picked up next. There might be a time lag between this discussion and when the story is actually picked up which leads to a loss of context. This is usually due to real world factors like carried over stories, critical bug fixes, leaves etc. 
* **Lack of deep dive** - In addition, during an IPM, the in-depth story deep-dive may not have happened (this depends on the team and the project) due to a number of reasons like time pressure, pending decisions etc. 
* **Change in context** - Even if a deep-dive has happened and technical tasks have been detailed out, the context may have changed between the IPM and the time the story was actually picked up. 

_A story kick-off gives the opportunity to both refresh the need as well as perform a more in-depth analysis/validation of the story._

## How to do it?

**Pre-requisites**

* **Story** - The Product Owner should have the story ready with the analysis done. This means that the goals, users & value of the story should be clear. Acceptance criteria & assumptions should also be present. In addition, mock-ups, data, scripts etc may be required depending on the context of the project.
* **Participants** - Ideally, the pair of developers who is going to work on the story and the quality analyst(s) who will be testing it are required at a minimum. Sometimes, there might be the need to bring the User Experience designer or UI Developer or people with specific skill-sets relevant to delivering the story. The Product Owner or the person who has written the story should be present to do the kick-off.

**Time**

* **Duration** - If this is the first story in a feature, the whole team may need to be invited so that everyone is on the same page. Usually, the first few stories in a feature tend to require a lot more preparation and time to explain. Once this is done and the team is familiar with the feature, the time taken reduces quite a bit. Do the kick-off before the developers actually start working on it. 
* **Timing** - A common mistake is to do a kick-off at the end of the day, before lunch, before an IPM or before either of the developers have finished working on their current story. If this happens, it means that some portion of the value of the kick-off is diminished since the purpose i.e. focus on the story, is diluted.

**Execution**

* **Explanation** - Walk the developers and the QA(s) through the actual story narrative, clearly explaining the context of the story as well as the acceptance criteria
* **Supporting Artefacts** - It might be better to keep the application open in a window, the story itself in another with supporting materials like sequences etc. in another. Have pen and paper ready or be next to a whiteboard because nothing beats an explanation with writing/drawing. Pictures of your collaborative explanation can be taken and attached to the story if this is of value.
* **Questions** - Typically, there will be questions even for the most simplest of stories. Most of these questions can be answered easily if the analysis is clear. There might be minor modifications to stories based on the inputs from the developers/QA(s). Conversation outcomes should be captured in the story for later reference. 
* **Roadblocks** - Sometimes, there might be questions which require more analysis or conversations with other stakeholders. In these cases, the team can take a call on whether to proceed with the story while excluding scope related to the question or parking the story itself until the questions are answered.

##
