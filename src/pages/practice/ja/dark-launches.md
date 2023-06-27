---
templateKey: practice-page
title: ダーク ローンチ
subtitle: 興味のある少人数のユーザーに、他のユーザーより先に機能を試してもらう
date: 2018-12-18T18:54:44.225Z
authors:
  - valyonchev
  - trncb
tags:
  - measure
  - learn
mobiusTag: delivery
icon: /images/dark-launches-2.jpg
whatIs: "ダークローンチとは、継続的デリバリーのプラクティスで、新しい機能を一部のエンドユーザーだけにリリースし、その振る舞いやフィードバック情報を収集します。これにより、チームはこれらの新機能が現実に与える影響を理解することができます。これら新機能はユーザーから要求されなかったという意味で、ユーザーにとって予期せぬものであるかもしれません。製品/マーケットに新機能がフィットするかを検証するための最後のステップのひとつです。一度に全ユーザーを対象に機能を開始するより、この方法では、本番前にアプリケーションが計画通りに動作するかどうかを確認するためのテストを行うことができます。"
whyDo: "これは、フィードバック・ループのプラクティスで、実際に変更した機能を使ってもらうことでチームは迅速にフィードバックを得ることができます。ダークローンチは、新機能の影響を一部のユーザーに限定することで、安全性を確保するものです。これにより、新機能が生み出すインパクトや、ユーザーとの関わり方について、より深く理解することができるようになります。チームが当初想定していなかったような新しい気づきが表面化することもよくあります。これはプラスにもマイナスにもなり、限定的な公開により、チームは実際の使用状況から結論を導き出し、その機能を広く利用可能にするか、さらに開発するか、中止するかを決定することができます。"
howTo: >-
  本番前に考慮すべき最大のリスクは、ユーザーがアプリケーションに対してどのように反応し、どのように操作するかということです。本番前に、次の3つを自問自答してください。


  questions: 


  1. ユーザーは新機能を見つけることができますか？ 

  2. *彼らはこの変化に気づいていますか？*

  3. 彼らはそれを知る必要があるのでしょうか？


  これらの質問に答え、本稼働の時期が来たと判断したら、（最初のステップでの発見がすべてポジティブであったと仮定して）あとは朝飯前になるはずです（簡単なはずです）。ほとんどの場合、本番稼動するためにしなければならないことは、あなたが書いた機能の古い機能を無効にするだけです。 これは、古いコードを削除するか、あるいは設定で無効にすることによって行うことができます。

  本番稼動後は、アプリケーションとユーザーの行動変化を監視し、デプロイが成功したかどうかを確認します。すべてがうまくいっているのなら、自分をほめてあげてください。しかし、たいていの場合、そんなに簡単にはいかないものです。アプリケーションが正しく動作していることを100％保証することはできません。そのため、数日から数週間は古いコードを利用したり実行したりして、バグが発生していないことを確認することになります。


  ### 関連プラクティス


  - [Feature toggles](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/) は、既存のプロダクトの中にダークローンチを実装可能にするプラクティスです。 

  - ダークローンチは、新機能を一部の人にだけ公開するという意味では、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)と似ていますが、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)とは異なり、新機能は既存のものを少し調整しただけのものではなく、新機能、通常は全く新しい機能に適用することが可能です。また、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)は、既存の機能からビジネス上の成果を得るという意味で製品のパフォーマンスを向上させますが、ダークローンチは、新しい機能を追加して市場を拡張する可能性を探ります。

  - ダークローンチは[カナリアリリース](https://openpracticelibrary-ja.netlify.app/practice/canary-release/)と似ていて、どちらも一部のユーザーだけにある機能に公開するというものです。ダークローンチは、ユーザーが新しい機能にどのように反応し、使用するかを理解することに焦点を当てます。一方で、[カナリアリリース](https://openpracticelibrary-ja.netlify.app/practice/canary-release/)は、変更したプロダクトや個々の機能（アーキテクチャで分離して使用できる場合）の技術性能に本来はフォーカスします。
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/dark%20launches%202.jpg?raw=true
resources:
  - link: https://blog.leaseweb.com/2017/11/17/dark-launching/
    linkType: web
    description: "Dark Launching: A Way to Test New Features Before Going Live"
  - link: https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/
    linkType: web
    description:  A/Bテスト
  - link: https://openpracticelibrary-ja.netlify.app/practice/canary-release/
    linkType: web
    description: カナリアリリース
  - link: https://openpracticelibrary-ja.netlify.app/practice/blue-green-deployments/
    linkType: web
    description: Blue/Greenデプロイメント
  - link: https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/
    linkType: web
    description: 継続的デリバリー
participants:
  - Product Owner
  - DevOps Team
jumbotron: /images/ben-white-178537-unsplash.jpg
area: delivery-measure-and-learn
people: 2+
time: 2-10 weeks
perspectives:
  - product-ownership
difficulty: moderate
---
## What is it?

ダークローンチとは、継続的デリバリーのプラクティスで、新しい機能を一部のエンドユーザーだけにリリースし、その振る舞いやフィードバック情報を収集します。これにより、チームはこれらの新機能が現実に与える影響を理解することができます。これら新機能はユーザーから要求されなかったという意味で、ユーザーにとって予期せぬものであるかもしれません。製品/マーケットに新機能がフィットするかを検証するための最後のステップのひとつです。一度に全ユーザーを対象に機能を開始するより、この方法では、本番前にアプリケーションが計画通りに動作するかどうかを確認するためのテストを行うことができます。


## Why use it?

これは、フィードバック・ループのプラクティスで、実際に変更した機能を使ってもらうことでチームは迅速にフィードバックを得ることができます。


ダークローンチは、新機能の影響を一部のユーザーに限定することで、安全性を確保するものです。これにより、新機能が生み出すインパクトや、ユーザーとの関わり方について、より深く理解することができるようになります。チームが当初想定していなかったような新しい気づきが表面化することもよくあります。これはプラスにもマイナスにもなり、限定的な公開により、チームは実際の使用状況から結論を導き出し、その機能を広く利用可能にするか、さらに開発するか、中止するかを決定することができます。

## Related Practices

[Feature toggles](https://openpracticelibrary-ja.netlify.app/practice/feature-toggles/) は、既存のプロダクトの中にダークローンチを実装可能にするプラクティスです。 

ダークローンチは、新機能を一部の人にだけ公開するという意味では、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)と似ていますが、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)とは異なり、新機能は既存のものを少し調整しただけのものではなく、新機能、通常は全く新しい機能に適用することが可能です。また、[A/Bテスト](https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/)は、既存の機能からビジネス上の成果を得るという意味で製品のパフォーマンスを向上させますが、ダークローンチは、新しい機能を追加して市場を拡張する可能性を探ります。

ダークローンチは[カナリアリリース](https://openpracticelibrary-ja.netlify.app/practice/canary-release/)と似ていて、どちらも一部のユーザだけにある機能に公開するというものです。ダークローンチは、ユーザーが新しい機能にどのように反応し、使用するかを理解することに焦点を当てます。一方で、[カナリアリリース](https://openpracticelibrary-ja.netlify.app/practice/canary-release/)は、変更したプロダクトや個々の機能（アーキテクチャで分離して使用できる場合）の技術性能に本来はフォーカスします。


[カナリアリリース ](https://openpracticelibrary-ja.netlify.app/practice/canary-release/)

[Blue/Green デプロイメント](https://openpracticelibrary-ja.netlify.app/practice/blue-green-deployments/)

[継続的デリバリー](https://openpracticelibrary-ja.netlify.app/practice/continuous-delivery/)

## Further information



## _**Improve this article:** We lack links to good explanations of the practice._



Image credit: Photo by [Ben White](https://unsplash.com/photos/4Bs9kSDJsdc) on Unsplash
