---
templateKey: practice-page
title: ビッグピクチャー
subtitle: 複雑な空間で共通理解を得るためのシンプルなワークショップ
date: 2020-08-02T12:04:58.410Z
authors:
  - springdo
mobiusTag: discovery
icon: /images/big-pic.png
whatIs: Open Techのプラクティスの中で、制作費はほとんどかからないが、システムの一部についての理解を共有するのに最適なものに、ビッグピクチャーワークショップがあります。これは、ソースコード（例：git）からコンパイル、テスト、そしてハッピーユーザーの手に渡るまで、ソフトウェアパイプラインが通過するすべてのステップを可視化するために使用されるシンプルなプラクティスです。このパイプラインを共同で構築することは、技術者とビジネスマンの間のギャップを埋めるのに役立つので、チームが行うには素晴らしい活動です。継続的デリバリーの重要性と、時にはその複雑さを明確に説明するのにも最適です。付箋を何枚か貼り、透明なボードやスペースがあれば、簡単にビッグピクチャーを作成することができます。もちろん、もっと芸術的な気分なら、落書きすることもできます。
whyDo: >-
  これを読んで、「ふわふわした感じだなー、なんでわざわざ作る必要があるんだろう」と思っている人もいるでしょう。

  * 共有された理解 - ああ、黄金の夢である共有された理解です。チーム全体がビッグピクチャーを作るために協力すると、パイプラインがどのようにコードとエンドユーザーを結びつけるかについて、共通の感覚を得ることができるのです。

  * 素早くプロトタイプを作る - 1行のコードを実装する前に、書いたり描いたりする方が安上がりです。シャープペンシルとポストイットで迅速にプロトタイプを作成し、ラップトップを開かずにペンと紙でパイプラインのステージを移動します。

  * 複雑さを簡素化 - ビッグピクチャーは、ソフトウェアのライフサイクルを管理するために必要なコンポーネントを示すことで、技術者ではない人たちを巻き込むのに役立ちます。一度に1つのステップを構築し、シンプルなビジュアルフローで複雑さを示すことができます。

  * 情報ラジエーター - これらすべてのプラクティスと同様に、ビッグピクチャーは進化する成果物です。ソフトウェアデリバリーパイプラインの複雑さが増すにつれて、ビッグピクチャーはこれを反映するように更新されるべきです。これは、すべての人に表示することができるグラフィックであり、隠すべきではありません。
howTo: >-
  付箋とペインターテープ、そして広いスペースが必要です。サーバーの図面  テープでサーバーやプレイフォームを描き、全体像を縁取る。例えば、大きな赤い箱ははOpenShiftクラスターを表すことができます。

  この状態で、クラスタ内の各プロジェクトやネームスペースを表現するために、ボックスをセグメントで切り分けます。これらは、CI/CDネームスペース、開発環境、テスト環境を表すことができます。ラベルを付けてキーを作成し、付箋をいくつか使用します。一行のコードを書くより、付箋を使って足場を作る方がずっと簡単です :)

  次のステップは、ローカル環境を追加することです。ラップトップがある場合はクラスタの外に描き、ない場合はクラスタの中に入れてください。ローカル環境には、チームが必要とするローカル開発ツールを入れてください。例えば、AnsibleやNodeJSをインストールする必要があるかもしれませんし、その両方が必要かもしれません。それらを落書きして、ビッグピクチャーに貼り付けます。

  ラベルとプロジェクトを配置したら、CI/CDツールをネームスペースに追加します。JenkinsやTektonなど、あなたが使っているものを描き、新しいチームメンバーがオンボーディングするときに役立つように、それぞれの説明を1行で書きましょう。

  すべての構成要素が揃ったところで、パイプラインを作成します。ステージを描き、ステップの下位レベルの詳細を追加します。この低レベルの詳細は、技術者チームにとってより役立つ可能性が高いですが、デザイナーやプロダクトオーナー、その他興味のある人とこの詳細を共有する素晴らしい機会を提供します。これらの部品をキーに追加し、ソースからビルドを経て環境へ移行するコードのストーリーを伝えましょう
mediaGallery:
  - link: https://www.youtube.com/watch?v=qXb1naW0zdY
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/big-pic.png?raw=true
resources:
  - link: https://podcasts.apple.com/us/podcast/the-big-picture-w-haitham-shahin/id1501715186?i=1000488772813
    linkType: podcast
    description: Big Picture Open Practice Podcast Episode
participants:
  - The Dev Team
  - The PO & Designers
jumbotron: /images/big-pic.png
area: foundation-technical
people: 3+
time: 60mins
perspectives: []
difficulty: easy
jumbotronAlt: example-big-picture
---
## What is it?

An Open Tech practice that costs little to produce but is great in creating a shared understanding of part of a system is the Big Picture Workshop. It is a simple practice used to visualise all the steps that a software pipeline goes through in moving code from source (eg git), through compile and test then into the hands of our Happy Users. Building it collaboratively is a great activity for a team to do as it helps to bridge the gap between the techies and the business folks. It’s great for articulating the importance and sometimes the complexity of continuous delivery.  A Big Picture can easily be created with just some Stickies and a clear board or space. Of course - if you’re feeling more artistic it can also be doodled!



## Why use it?

You’re probably reading this and thinking ‘Sounds fluffy to me - why should I bother to make one?’
Shared understanding - ahhh the golden dream of Shared Understanding! When the whole team collaborates around making the Big Picture they get a shared sense of how their pipelines connect code to end users.
Prototype quickly - It’s cheaper to write and draw before implementing a single line of code! Rapidly prototype with some sharpies and postits, moving stages of your pen and paper pipeline
Complexity Simplified - Big Picture helps bring the non techies into the mix by showing them the components required to manage the softwares lifecycle. Build it up one step at a time to demonstrate the complexity in a simple visual flow.
Information Radiator - Like all these practices, the Big Picture is an evolving artifact. As the complexity of a software delivery pipeline grows, the Big Picture should be updated to reflect this. It is a graphic which can be displayed to all and should not be hidden.



<iframe width="1200" height="528" src="https://www.youtube.com/embed/qXb1naW0zdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## How do I create one?

Get some Stickies and painters tape and a lot of space! Draw up your servers or playforms in tape to frame the big picture. For example, a big red box could represent an OpenShift Cluster.

With this in place, carve out the box into segments to represent each project or namespace within your cluster. These could represent your CI/CD namespace, dev and test environments. Label them and create a key, again using a few stickies! It's much easier to scaffold things out using stickies than writing a sinlge line of code :)

Next step is to add our Local Environment, if that's your laptop draw it outside the cluster, if not include it inside! Fill your local environment with the local dev tools required by the team. For example perhaps the team needs Ansible or NodeJS installed or even both! Draw a doodle of them and pop them in the Big Picture.

With the labels and projects in place, add in your CI/CD tooling to the namespace. Draw up Jenkins or Tekton or whatever else you're using and write a one line description of each to help new team members when onboarding them.

With all the compenents in place, create your pipeline. Draw the stages and add the lower level details ie the steps. This lower level detail is probable more helpful for the techie team, but it provides a great oportunity for the team to share this detail with the designers, product owners and anyone else who is interested! Add these pieces to the key and tell the story of code moving from source through builds and into an environment!



## Further Information
