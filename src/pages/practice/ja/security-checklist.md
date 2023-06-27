---
templateKey: practice-page
title: (コードレビュープロセスにおける)セキュリティチェックリスト
subtitle: "コードレビュー時にチェックリストを実行することで、セキュリティをシフトレフトする。 "
date: 2021-04-24T00:19:05.345Z
authors:
  - ladynerd
tags:
  - learn
mobiusTag: delivery
icon: /images/glenn-carstens-peters-rlw-uc03gwc-unsplash.jpg
whatIs: >-
  [SafeStack.io](https://safestack.io)のチームによるこのセキュリティチェックリストは、開発チームのセキュリティ文化を向上させ、一般的なセキュリティリスクについてコードを一貫してチェックできるようにするために作成されました。


  脆弱性の発見が早ければ早いほど、その修正にかかるコストは低くなり、また修正も容易になります。このツールは、ソフトウェアチームのコードレビュープロセスの一部として使用され、セキュリティ姿勢とリリースするコードの品質を向上させることを目的としています。


  ### セキュリティチェックリストの導入


  * コードレビュー文化の向上に熱心なコアグループを特定する。

  * まずは1つのシステムから始め、段階的に拡張していく。

  * 主要な品質指標を特定し、それを測定する。

  * チェックリストをビルド-テスト-リリースのワークフローに直接組み込むことができます。



  セキュリティチェックリストは、3つのフェーズで構成されています 


  * コードがプッシュされる前

  * コードレビュー時  

  * コードレビューが完了と判定される前


  ### コードレビューセキュリティチェックリスト


  #### チームリポジトリにコードをプッシュする前に


  * コミットされたコードからすべてのシークレット情報が取り除かれたのか？

    * Yes/No

  #### コードレビュー完了前


  * 未解決のリスクは提起され、文書化されているか？

    * Yes/No

  #### コードレビュー時（コーダー、レビュアー、テスターと共に）


  * コードのレビューに適切な人が参加しているか？

    * Yes/No
  * 変更の目的は明記され、レビュアーに理解されているか？

    * Yes/No
  * コードにデバッグ機能はあるか？

    * No
    * Yes、そしてテスト環境でのみ実行可能。
  * ユーザー提供のデータか:

    * 使用または保存される前に検証されているか？
    * インタープリタに渡されるときにエスケープされるか？
  * ログを記録する:

    * 主要なイベントや 状態をすべてカバーしているか？
    * イベントを一意に特定するのに十分な情報を含んでいるか？
    * 機密情報や顧客の個人情報を除外しているか？
  * フレームワーク、ライブラリ、ツール、その他の依存関係に対して:

    * 効果的に使われているか？
    * 新しい依存関係は検証されたか？
    * 最新版か?
  * レスポンスメッセージ:

    * 適切なステータスコードを使用しているか？
    * システム内部に残すべき情報を除外しているか？
    * 情報を適切なレベルの権限に限定しているか？
  * テスター向け:

    * テストカバレッジは十分か？
    * 誤用のケースは表現されているか？

  詳細はこちら[Code Review Security Checklist Implementation Manual](https://academy.safestack.io/wp-content/uploads/2021/01/code_review_security_checklist_implementation_manual_2020-02-20.pdf) 。
whyDo: >
  セキュアコーディングのプラクティスを一貫して行うことにより、コードレビュー文化を改善できます。


  これは、ソフトウェアの開発プロセスにおいて、より良いセキュリティの実践を構築するための良い出発点です。ローカルのプラクティスに合わせて追加・修正することが推奨されます。


  包括的なものではありません。また、独立した教材、説明責任の仕組み、安全な開発への完全なガイドとして意図されているわけでもありません。  
howTo: >-
  セキュリティチェックリスト自体をコードレビューリクエストのテンプレートとし て含め、レビューツールでその完了を要求するように設定することができます。また、チームのワークステーションの周囲に物理的なコピーを置いておくと便利でかもしれません。


  最初のフェーズは、コードを作成した人がチームと共有する前に、実際のパスワード、キー、トークン、その他の秘密事項がコードに含まれていないことを確認するところからです。


  次の段階はレビューで、各項目は開発者以外のレビュアーの誰でも完成させることができます。レビュアーは、正しい人がタグ付けされ、全員が意図した変更を理解していることを確認します。


  そして、デバッグコードの有無、信頼できないデータやレスポンス情報の扱い、ツールの正しい使い方、十分なログとテストの網羅性などをチェックします。


  最後に、コードレビューの結果、レビューの範囲を超えたリスクが摘出された場合、レビュアーはそのリスクをチームに提起し、レビューされる場所にログが残るようにします。これは、レビュアーのだれでも完了することができます。


  ### セキュリティチェックリストの修正


  チームは、自分たちのニーズに合わせてチェックリストを修正する必要があります。自分たちができないから、やりたくないからという理由で、安全対策を削除してはいけません。チェックリストの変更の決定にはチーム全体が参加し、変更後のチェックリストは1つのシステムでテストし、意図したとおりに機能することを確認する必要があります。変更の結果、焦点の定まった、簡潔で実行可能な、協力的で、テストされ、統合されたチェックリストが得られるはずです。


  Cover photo by [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/checklist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
mediaGallery: []
resources:
  - link: https://academy.safestack.io/wp-content/uploads/2021/01/code_review_security_checklist_2020-02-20.pdf
    linkType: web
    description: Download Security Checklist as a PDF from SafeStack.io
  - link: https://academy.safestack.io/wp-content/uploads/2021/01/code_review_security_checklist_implementation_manual_2020-02-20.pdf
    linkType: web
    description: PDF - Download the Implementation Manual
  - link: https://www.amazon.com.au/Agile-Application-Security-Rich-Smith/dp/1491938846
    linkType: purchase
    description: "Book: Agile Application Security: Enabling Security in a
      Continuous Delivery Pipeline"
participants: []
---
