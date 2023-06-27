---
title: フィーチャートグル
subtitle: 別名：機能フラッグ／機能ビット／機能フリップ／機能コントロール
date: 2018-12-18T19:02:25.307Z
authors:
  - valyonchev
  - tenfourty
area: foundation-technical
tags: []
perspectives:
  - product-ownership
icon: /images/karim-manjra-1136416-unsplash.jpg
jumbotron: /images/karim-manjra-1136416-unsplash.jpg
jumbotronAlt: Light switches on a wall
people: 1+
time: 1+ hours
difficulty: moderate
participants:
  - Product Owner
  - Product Team
templateKey: practice-page
whatIs: >-
  フィーチャートグル（機能ビット/機能フラグ/機能フリッピング/機能コントロールとも呼ばれる。）は、 _コードを変更したり再展開したりすることなく_ ソフトウェアの機能を変更するために使用するエンジニアリング手法です。

  ソフトウェアでは、フラグは "2進数の値を格納するために使用される1つまたは複数のビット"です。つまり、真か偽のどちらかになりうるBooleanです。フラグは、if文でチェックすることができます。また、ソフトウェアにおける機能とは、ある種の価値を提供する一部のファンクションのことです。


  機能フラグ（またはトグル）は、最も単純な形では、ソフトウェアのちょっとした機能を囲った単なるif文です。
whyDo: >-
  フィーチャートグルは、エンジニアリングの基本的な手法であり、新しい機能をリリースする際に、実験やパフォーマンス保護を目的として、製品の挙動を管理するための優れた方法を提供します。
howTo: >-
  機能フラグの使用方法は以下のように様々です:

  - [カナリア リリース](/practice/canary-release/).

  - [ダーク ローンチ](/practice/dark-launches/).

  - [A/B テスト](/practice/split-testing-a-b-testing/).

  - [多変量テスト](/practice/split-testing-multivari-testing/).

  - キルスイッチによって何かを無効化する.

  - サービスを移行、もしくはアップグレードする.

  - トランクベース開発と [継続的デプロイメント](/practice/continuous-deployment/). 開発者は、長時間保持するブランチを避けるために、機能フラグを使用します。機能フラグを使うことで 開発者は、毎日自分のコードを master ブランチにマージすることができます。


  以下は疑似コードを使った簡単な例です。 ([Rollout Guide to Feature Flags](https://rollout.io/blog/ultimate-feature-flag-guide/)からの引用):

  ```

  if(configFile["IsHoliday"] == true) {
    writeGreetingMessage("Happy holidays!");
  }

  ```

  このコードは、メインプログラムのソースコードの外にある設定ファイルをチェックして `isHoliday` 変数を取得し、設定ファイルの `isHoliday` というBooleanが `true` であるときに `Happy holidays!` というメッセージとともに `writeGreetingMessage()` という関数を呼び出します。


  この例で重要なのは、コードを変更したり再展開したりすることなく、ソフトウェアの機能を変更することができるという点です。私たち は、_稼働_ 中に設定ファイルを更新するだけでよいのです。これで、`Happy holidays!` というメッセージを表示したい時は、その場で設定ファイルを更新すれば良くなりました。


  機能フラグを利用することで、コードのデプロイメントと機能のデプロイメントを分離することができます。これを実現するために、実行中のUI、あるいは現在のコンテキスト（特定のユーザーや組織など）に基づいたリクエストごとの動的なデプロイメントに対して設定ファイルを使用することができます。


  [In Martin Fowler's article on Feature
  Flags](https://www.martinfowler.com/articles/feature-toggles.html)では、機能フラグを分類するために2つの軸を示しています：_機能フラグが有効な期間はどれくらいか？_ と _トグルの決定がいかにダイナミックであるべきか？_ です。以下にしめす機能フラグの４つの分類は、Martin Fowlerによって定義されたものです：

  - **リリースフラグ** は、不完全で未テストのコードパスを、決してオンにされない潜在的なコードとして実運用に出荷することを可能にします。

  - **実験フラグ** は、多変量解析やA/Bテストを行うために使用されます。システムの各ユーザーをコホートにグルーピングして、実行時にユーザーは、特定コードパスに送られたり、別のコードパスに送られたりします。

  - **運用フラグ** は、システムの動作の運用面を制御するために使用されます。パフォーマンスへの影響が不明確な新機能をロールアウトする際に運用フラグを導入し、システムオペレータが必要に応じてその機能を本番環境で迅速に無効化もしくは低下させることができるようにすることがあります。

  - **パーミッションフラグ** は、特定のユーザーが受ける機能または製品体験を変更するために使用されます。例えば、私たちは、お金を払ってくれるお客さんだけが使える”プレミアム”な機能を設定することができます。あるいは、内部ユーザーのみが利用できる”アルファ版”機能と、内部ユーザーとベータユーザーのみが利用できる”ベータ版”機能のセットがあるかもしれません。


  これらのフラグの種類をまとめると、次のようなイメージになります。

  ![These flag types can be summarised by the following
  image.](/images/fowler_feature_toggles.png "Feature Toggles categorised by
  longevity and dynamism")

  ### なぜ、どうやって、他のプラクティスと組み合わせるか?

  フィーチャートグルは、[A/Bテスト](/practice/split-testing-a-b-testing/)、[カナリア リリース](/practice/canary-release/)、[ダーク ローンチ](/practice/dark-launches/)といった、特定のグループや一部のユーザーに対して”新しい”機能またはバージョンを有効にする際に使用されるプラクティスを大きく補完し、実施を容易にすることが可能です。これは[実験計画法](/practice/design-of-experiments/)の実践にも不可欠と言えます。
mediaGallery:
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/karim-manjra-1136416-unsplash.jpg
  - link: >-
      https://openpracticelibrary.github.io/opl-media/images/fowler_feature_toggles.png
resources:
  - link: 'https://stackoverflow.com/questions/7707383/what-is-a-feature-flag'
    linkType: web
    description: Stack Overflow on What is a "feature flag"?
  - link: 'https://en.wikipedia.org/wiki/Feature_toggle'
    linkType: web
    description: Wikipedia's article on Feature Toggles
  - link: 'https://rollout.io/blog/ultimate-feature-flag-guide/'
    linkType: web
    description: Rollout Guide to Feature Flags
  - link: 'https://www.martinfowler.com/articles/feature-toggles.html'
    linkType: web
    description: In Martin Fowler's article on Feature Flags
  - link: 'https://featureflags.io/literature/'
    linkType: web
    description: Further links to literature can be found on featureflags.io
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/canary-release/'
    linkType: web
    description: カナリア リリース
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/dark-launches/'
    linkType: web
    description: ダーク ローンチ
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-a-b-testing/'
    linkType: web
    description: スプリットテスト - A/B テスト
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/split-testing-multivari-testing/'
    linkType: web
    description: スプリットテスト - 多変量テスト
  - link: 'https://openpracticelibrary-ja.netlify.app/practice/blue-green-deployments/'
    linkType: web
    description: Blue/Greenデプロイ
mobiusTag: foundation
---
## What is it?

フィーチャートグル（機能ビット/機能フラグ/機能フリッピング/機能コントロールとも呼ばれる。）は、 _コードを変更したり再展開したりすることなく_ ソフトウェアの機能を変更するために使用するエンジニアリング手法です。

ソフトウェアでは、フラグは "2進数の値を格納するために使用される1つまたは複数のビット"です。つまり、真か偽のどちらかになりうるBooleanです。フラグは、if文でチェックすることができます。また、ソフトウェアにおける機能とは、ある種の価値を提供する一部のファンクションのことです。


機能フラグ（またはトグル）は、最も単純な形では、ソフトウェアのちょっとした機能を囲った単なるif文です。

以下は疑似コードを使った簡単な例です。 ([Rollout Guide to Feature Flags](https://rollout.io/blog/ultimate-feature-flag-guide/)からの引用):

```

if(configFile["IsHoliday"] == true) {
  writeGreetingMessage("Happy holidays!");
}

```

このコードは、メインプログラムのソースコードの外にある設定ファイルをチェックして `isHoliday` 変数を取得し、設定ファイルの `isHoliday` というBooleanが `true` であるときに `Happy holidays!` というメッセージとともに `writeGreetingMessage()` という関数を呼び出します。


この例で重要なのは、コードを変更したり再展開したりすることなく、ソフトウェアの機能を変更することができるという点です。私たち は、_稼働_ 中に設定ファイルを更新するだけでよいのです。これで、`Happy holidays!` というメッセージを表示したい時は、その場で設定ファイルを更新すれば良くなりました。


機能フラグを利用することで、コードのデプロイメントと機能のデプロイメントを分離することができます。これを実現するために、実行中のUI、あるいは現在のコンテキスト（特定のユーザーや組織など）に基づいたリクエストごとの動的なデプロイメントに対して設定ファイルを使用することができます。


[In Martin Fowler's article on Feature
Flags](https://www.martinfowler.com/articles/feature-toggles.html)では、機能フラグを分類するために2つの軸を示しています：_機能フラグが有効な期間はどれくらいか？_ と _トグルの決定がいかにダイナミックであるべきか？_ です。以下にしめす機能フラグの４つの分類は、Martin Fowlerによって定義されたものです：

- **リリースフラグ** は、不完全で未テストのコードパスを、決してオンにされない潜在的なコードとして実運用に出荷することを可能にします。

- **実験フラグ** は、多変量解析やA/Bテストを行うために使用されます。システムの各ユーザーをコホートにグルーピングして、実行時にユーザーは、特定コードパスに送られたり、別のコードパスに送られたりします。

- **運用フラグ** は、システムの動作の運用面を制御するために使用されます。パフォーマンスへの影響が不明確な新機能をロールアウトする際に運用フラグを導入し、システムオペレータが必要に応じてその機能を本番環境で迅速に無効化もしくは低下させることができるようにすることがあります。

- **パーミッションフラグ** は、特定のユーザーが受ける機能または製品体験を変更するために使用されます。例えば、私たちは、お金を払ってくれるお客さんだけが使える”プレミアム”な機能を設定することができます。あるいは、内部ユーザーのみが利用できる”アルファ版”機能と、内部ユーザーとベータユーザーのみが利用できる”ベータ版”機能のセットがあるかもしれません。


これらのフラグの種類をまとめると、次のようなイメージになります。

![These flag types can be summarised by the following image.](/images/fowler_feature_toggles.png "Feature Toggles categorised by longevity and dynamism")

  
  

## Why use it?

フィーチャートグルは、エンジニアリングの基本的な手法であり、新しい機能をリリースする際に、実験やパフォーマンス保護を目的として、製品の挙動を管理するための優れた方法を提供します。

機能フラグの使用方法は以下のように様々です:

- [カナリア リリース](/practice/canary-release/).
- [ダーク ローンチ](/practice/dark-launches/).
- [A/B テスト](/practice/split-testing-a-b-testing/).
- [多変量テスト](/practice/split-testing-multivari-testing/).
- キルスイッチによって何かを無効化する.
- サービスを移行、もしくはアップグレードする.
- トランクベース開発と [継続的デプロイメント](/practice/continuous-deployment/). 開発者は、長時間保持するブランチを避けるために、機能フラグを使用します。機能フラグを使うことで 開発者は、毎日自分のコードを master ブランチにマージすることができます。

## Why & How to combine it with other practices?

フィーチャートグルは、[A/Bテスト](/practice/split-testing-a-b-testing/)、[カナリア リリース](/practice/canary-release/)、[ダーク ローンチ](/practice/dark-launches/)といった、特定のグループや一部のユーザーに対して”新しい”機能またはバージョンを有効にする際に使用されるプラクティスを大きく補完し、実施を容易にすることが可能です。これは[実験計画法](/practice/design-of-experiments/)の実践にも不可欠と言えます。
  

## Related Practices

- [Blue/Green Deployment](/practice/blue-green-deployments/)
- [Canary Release ](/practice/canary-release/)
- [A/B Testing,  and running experiments](/practice/split-testing-a-b-testing/)
- [Multivari Testing](/practice/split-testing-multivari-testing/)
- [Design of experiments](/practice/design-of-experiments/)
- [Dark Launches](/practice/dark-launches/)
- [Continuous Delivery](/practice/continuous-delivery/)
- [Continuous Deployment](/practice/continuous-deployment/)


## Further information

The following resources provide a rich source of further reading:

- [Martin Fowler's article on Feature Toggles](https://www.martinfowler.com/articles/feature-toggles.html) is one of the original articles on the topic.
- [Wikipedia's article on Feature Toggles](https://en.wikipedia.org/wiki/Feature_toggle).
- [Stack Overflow on What is a "feature flag"?](https://stackoverflow.com/questions/7707383/what-is-a-feature-flag).
- [Further links to literature can be found on featureflags.io](https://featureflags.io/literature/).

Image credit: Photo by [Karim MANJRA](https://unsplash.com/photos/pWlM5L6PFis) on Unsplash
