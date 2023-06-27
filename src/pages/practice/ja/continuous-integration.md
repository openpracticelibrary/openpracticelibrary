---
templateKey: practice-page
authors:
  - tdbeattie
  - rdebeasi
  - mtakane
  - springdo
  - Zenigata
  - rmarting
  - itblaked
howTo: テストとビルドのステップは、通常、[Jenkins](https://jenkins.io/) や [Travis](https://travis-ci.org/)などの自動化サーバーで実行されます。 また、[Tekton](https://tekton.dev/)のようなクラウドネイティブ/Kubernetes向けのソリューションもあります。
resources:
  - link: https://podcasts.apple.com/us/podcast/ci-cd-w-tyler-auerbeck/id1501715186?i=1000491737000
    linkType: podcast
    description: CI/CD Open Practice Podcast Episode
  - link: https://jenkins.io/
    linkType: web
    description: Jenkins
  - link: https://travis-ci.org/
    linkType: web
    description: Travis CI
  - link: https://tekton.dev/
    linkType: web
    description: Tekton
  - link: https://docs.gitlab.com/ee/ci/
    linkType: web
    description: GitLab CI/CD Documentation
participants:
  - Team Members
area: foundation-technical
title: 継続的インテグレーション
subtitle: 大きな変更を低頻度に行うのではなく、小さな変更を頻繁に行う
date: 2018-08-10T12:22:43.000Z
tags:
  - methods
mobiusTag: foundation
icon: /images/continuous-integration-1.png
whatIs: 継続的インテグレーション（CI）では、開発者は大規模で低頻度な変更ではなく、小規模で頻繁な変更をサブミットします。他の開発者がその変更を受け入れると、自動テストとビルド手順が実行され、コードが期待通りに動作することを確認します。この作業は、1日に何度も頻繁に行われ、その都度自動化が実行されるため、コードベースが _継続的に結合_ できていることが保証されます。
whyDo: >-
  * 自動化されたテストは、忙しい作業を軽減し、ソフトウェアの品質を向上させることができます。 

  * 小規模で定期的なコードコミットにより、結合時の問題数を減らすことができます。 

  * 迅速なフィードバックループにより、新しい開発者が容易に始められるようになります。 

  * これは楽しいです。機能的なソフトウェアを少しずつ出荷することは、巨大なコード変更を手動でテストする人を待つよりも楽しいことです。
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/continuous-integration-1.png?raw=true
people: 1+
time: Minutes
difficulty: moderate
jumbotronAlt: example pipeline
---
# What is it?

継続的インテグレーション（CI）では、開発者は大規模な変更ではなく、小規模で頻繁な変更をサブミットします。他の開発者がその変更を受け入れると、自動テストとビルド手順が実行され、コードが期待通りに動作することを確認します。この作業は、1日に何度も頻繁に行われ、その都度自動化が実行されるため、コードベースが _継続的に結合_ できていることが保証されます。

テストとビルドのステップは、通常、[Jenkins](https://jenkins.io/) や [Travis](https://travis-ci.org/)などの自動化サーバーで実行されます。

# Why use it?

* 自動化されたテストは、忙しい作業を軽減し、ソフトウェアの品質を向上させることができます。
* 小規模で定期的なコードコミットにより、結合時の問題数を減らすことができます。
* 迅速なフィードバックループにより、新しい開発者が容易に始められるようになります。
* これは楽しいです。機能的なソフトウェアを少しずつ出荷することは、巨大なコード変更を手動でテストする人を待つよりも楽しいことです。

# Useful links

* [Jenkins Documentation](https://jenkins.io/doc/) - Jenkinsは拡張可能な自動化サーバです。単純なCIサーバとして使うことも、プロジェクトの継続的デリバリのハブにすることもできます。
* [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) - GitLabは、使いやすい継続的インテグレーションパイプラインなどの多くの機能を提供する、人気の高いGitリポジトリマネージャーです。
