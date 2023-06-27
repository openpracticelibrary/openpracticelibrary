---
templateKey: practice-page
title: オートスケール
subtitle: オンデマンドで反応するクラウドネイティブアプリケーション
date: 2018-08-31T15:58:12.992Z
authors:
  - syvanen
  - Zenigata
tags:
  - measure
mobiusTag: delivery
icon: /images/auto-scaling-1.png
whatIs: >-
  オートスケーリングは、アプリケーションの測定された負荷に基づいて、コンピューティングリソースの量を変更する方法です。この負荷とは、スケーリングのトリガーとして使用できるCPU、メモリ、ネットワーク、もしくはその他の測定可能なメトリクスのことです。またメトリクスとして、メッセージキューのアイテム数や、ビジネスプロセスで待機しているタスクの数なども使用可能です。アクティブなバックエンドやバッチジョブタイプの一時的なワークロードと合わせて使うこともできます。


  オートスケールは、障害が発生したアプリケーション・インスタンスの自動リカバリとしても使用できます。なぜなら、ヘルスチェックと組み合わせると、オートスケールは運用されていないアプリケーションのインスタンスを強制終了または再起動し、自動的に新しいインスタンスに置き換えることができるからです。


  ロードバランサーは、アプリケーションインスタンスをロードバランシング対象から動的に追加・削除する機能が必要になるため、オートスケーリングとも密接な関係があります。

whyDo: >-
  これにより、アプリケーションは必要なときだけリソースを消費することができます。これは、特に運用コストが使用量に比例するクラウド環境では重要です。また、オートスケーリング・アプリケーションは、デフォルトでステートレス動作が可能であるか、すべてのインスタンスを自動的に同期させる何らかの方法を備えていなければならないため、ローリングアップグレードや簡単なロールバックといった他の手法も実現できます。


  オートスケールは、キュー内のタスクに基づいてバッチジョブを処理するための作業ノードを起動するために使用できます。これにより、静的なアプリケーションに比べて、オンデマンドでタスクやメッセージを処理することができます。


  また、ヘルスチェックや実際の負荷への対応により、アプリケーションの稼働率や可用性を向上させることができます。つまり、予期しない量のトラフィックが流入したとき、あるいは特定のパターンの組み合わせ、条件下でアプリケーションがクラッシュしたとき、オートスケールは反応し、より多くの動作可能なアプリケーションのインスタンスを起動することができるのです。
howTo: オートスケーリングは、クラウドコンピューティングの動的スケーリング機能の実装であり、手動または自動で適用することができます。クラウドサービスプロバイダーは、クラウド機能に対する予測不可能な需要に対応するために、この機能を提供するケースが増えています。
resources:
  - link: https://en.wikipedia.org/wiki/Autoscaling
    linkType: web
    description: Wikipedia definition of Autoscaling
  - link: https://aws.amazon.com/autoscaling/
    linkType: web
    description: AWS Auto scaling
  - link: https://docs.openshift.com/container-platform/3.10/dev_guide/pod_autoscaling.html
    linkType: web
    description: OpenShift Pod Autoscaling
participants: []
area: foundation-technical
---
## What is it?

Autoscaling is a method of changing amount of computing resources based on the applications measured load. This load could be CPU, memory, network or some other measurable metric that can be used as the trigger of scaling. The metric could also be the amount of items in a message queue or the amount of tasks waiting in your business process. It can be used with active backends or batch job type of temporary workloads.

Autoscaling can also be used as an automatic recovery for failed application instances. Because when coupled with health checks, auto scale can kill or restart the non-operational instance of the app and automatically replace it with a new working one.

Load balancing is also closely linked to autoscaling as you will need the ability to dynamically add and remove application instances from load balancing.

## Why use it?

It allows the application to only consume resources when needed. This is important, especially in cloud environments where your operational costs are based on usage. It also enables other practices such as rolling upgrades or easy rollbacks because autoscaling applications by default must have the capability to operate stateless or some way to synchronise all instances automatically.

Autoscaling can be used on to spin up working nodes to process batch jobs based on tasks in a queue. This enables you to process the tasks or messages on demand much better than with static application.

This practice also enables better uptime and availability of your application via the health checks and reaction to actual load. So when you get an unexpected amount of traffic coming in, or when the application crashes in certain corner cases, the autoscaling can react and bring more working and available instances of your application.

## Further Information

* [Wikipedia definition of Autoscaling](https://en.wikipedia.org/wiki/Autoscaling)
* [AWS Auto scaling](https://aws.amazon.com/autoscaling/)
* [OpenShift Pod Autoscaling](https://docs.openshift.com/container-platform/3.10/dev_guide/pod_autoscaling.html)
