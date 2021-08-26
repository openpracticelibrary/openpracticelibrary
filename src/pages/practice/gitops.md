---
templateKey: practice-page
title: GitOps
subtitle: If it’s not in Git, it’s not real.
date: 2021-04-20T22:55:04.468Z
authors:
  - ckavili
tags:
  - methods
mobiusTag: foundation
icon: /images/screenshot-2021-04-21-at-01.01.49.png
whatIs: >-
  GitOps is a pattern to manage the flow of work from development to production
  through Git operations. The concept behind GitOps is quite straightforward:


  * [Everything as Code:](https://openpracticelibrary.com/practice/everything-as-code/) Git is always the source of truth on what happens in the system

  * Deployments, tests, and rollbacks always controlled through Git flow

  * No manual deployments/changes: If you need to make a change, you need to make a Git operation such as commit, or raise a pull request.


  GitOps offers simplified operations, better developer experience, and better visibility of what is happening on the system. The most popular GitOps tools today are ArgoCD and Flux. As the adoption of GitOps is increasing, best practices around the approach and the tools are also forming rapidly.
whyDo: >-
  Basically, GitOps is here to solve the “how do I make my platform reflect what
  I have in Git'' problem. It removes the need to interact with the platform
  directly and put the interaction with Git repositories instead. However, there
  is more than GitOps can offer for an organization beyond *everything as code*
  approach, especially that would like to adopt DevOps **culture** and
  **practices**.


  Benefits of GitOps:


  * Enforces declarative descriptions and version control. Even though developers are familiar with using Git for application code, GitOps means that alongside the source code, you need to store other resources of the application as well. If they are not in Git, then they are not real!

  * Less distinction between application code and infra code.

  * Accelerate adoption of DevOps culture and practices. Applying GitOps provides automated deployments of declarative descriptions which leads to faster lead time.

  * Increased traceability. There is no way to make a change without leaving a trace.

  * Improved security. If your compliance requirements are defined as manifests and stored in Git, you can make sure they are applied through GitOps. Plus, Git provides big security advantages by being the single source of truth as it keeps track of changes.

  * Minimize config drift. GitOps tools alert if there is a difference between what is in Git and what is applied in the system, and even help to revert the change.

  * Self-documentation and visibility on the whole software lifecycle. Easy to see what is running on the platform by looking at repositories.

  * Lower Mean Time To Recovery. Rollback to a previous version is simply using a past commit.


  As listed above, having a GitOps approach in place means not only that you care about Git hashes and pull requests but also have visibility on the products and more importantly the teams too. Applying GitOps to onboarding and scaling your IT Delivery capability can massively accelerate your responsiveness to the market or global events. A GitOps approach can provide a better experience for creating repeatable environments and tooling for new teams as well as existing ones. It can also deliver a better production experience for migrating existing applications and quick adoption for dynamic team structures.
howTo: >-
  In the Cloud Native world, Continuous Delivery is the practice where every
  commit is automatically sent to production without any human intervention.
  Therefore GitOps approach is the perfect match for CD.


  As a team, you should discuss and agree on what you mean by GitOps in practice. Define the structure of Git repositories and where to store which configuration files. Then have the right tool in place for your needs. Of course, there are multiple ways to set repositories. Here is a high-level example flow for a CI/CD pipeline utilizing one configuration repository and a separate source code repository:


  ![GitOps Approach with Helm and Argo CD](/images/helm-argo-cd-page-1.png)




  #### ***The Open Practice Library benefits from it!***


  The Open Practice Library is a collection of microservices and a front-end application, spread across multiple [Git repositories](https://github.com/openpracticelibrary/opl-cd). These microservices are defined as manifests and manifest changes are automatically triggered to release versions of the Open Practice Library via GitHub Actions in the various code repos. It is watched by ArgoCD, automatically updating apps running in Red Hat OpenShift Container Platform with any manifest changes.
resources:
  - link: https://github.com/rht-labs/ubiquitous-journey
    linkType: web
    description: Ubiquitous Journey - an implementation of GitOps
  - link: "https://www.openshift.com/blog/announcing-openshift-gitops "
    linkType: web
    description: Red Hat OpenShift GitOps
  - link: "https://argoproj.github.io/argo-cd/ "
    linkType: web
    description: Argo CD - a popular GitOps tool
  - link: "https://www.weave.works/technologies/gitops/ "
    linkType: web
    description: What is GitOps?
participants: []
---
