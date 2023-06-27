---
templateKey: practice-page
title: Contract-First Development
subtitle: Get agreement upfront when creating reusable services
date: 2019-06-20T12:49:38.825Z
authors:
  - infosec812
  - jameshbarton
  - rmarting
tags: []
mobiusTag: delivery
icon: /images/contract-first-api-development.png
whatIs: >-
  Contract-First Development is about making your intent clear across team
  members, external teams or 3-party systems. By using tools like
  [OpenAPI](https://swagger.io/docs/specification/about/) (for synchronous
  interactions) or [AsyncAPI](https://www.asyncapi.com/) (for asynchronous
  interactions), we can define our programming API clearly at the outset. We
  also update the "contract" before we implement changes to the code. Further
  benefits include:


  * Code generation for both clients and servers

  * Automated testing and validation tools

  * Simple mocking of the service under development

  * More relevant and current documentation
whyDo: So that everyone can be productive in parallel AND we can have strong
  guarantees of the resulting applications working together properly. Instead of
  UI development being blocked awaiting a working service to code against, UI
  and Service developers can work in parallel. Also, if you define the contract
  first when developing or changing API interfaces, you have a clearer
  "Definition of Done" and "Acceptance Criteria" for the work.
howTo: >-
  In case of synchronous interactions, basically HTTP and REST endpoints,
  OpenAPI provides many references:


  * [OpenAPI](https://swagger.io/docs/specification/about/)

  * [OpenAPI Generator](https://openapi-generator.tech/)

  * [OpenAPI Tools](https://openapi.tools/)


  In case of asynchronous interactions, very typical in Event-Driven Architectures or Messaging systems, AsyncAPI provides many references:


  * [AsynAPI WebSite](https://www.asyncapi.com/)

  * [AsyncAPI Generators](https://www.asyncapi.com/generator)

  * [AsyncAPI Documentation](https://www.asyncapi.com/docs/specifications/v2.1.0)
mediaGallery:
  - link: https://openpracticelibrary.github.io/opl-media/images/contract-first-api-development.png
  - link: https://openpracticelibrary.github.io/opl-media/images/async-api-spec.png
  - link: https://youtu.be/zQncznMLrt4
resources:
  - link: https://swagger.io/docs/specification/about/
    linkType: web
    description: OpenAPI
  - link: https://openapi.tools/
    linkType: web
    description: OpenAPI Tools
  - link: https://openapi-generator.tech/
    linkType: web
    description: OpenAPI Generator
  - link: https://www.asyncapi.com/
    linkType: web
    description: AsyncAPI Spec
  - link: https://www.asyncapi.com/docs/getting-started
    linkType: web
    description: Getting started with AsyncAPI
  - link: https://openpracticelibrary.com/practice/definition-of-done/
    linkType: web
    description: Definition Of Done
participants:
  - DevOps Team
jumbotron: /images/contract-first-api-development.png
area: delivery-deliver
people: 2+
time: 2+ hours
perspectives:
  - product-ownership
difficulty: moderate
---
## What is it?

Contract-First Development is about making your intent clear across team members and external teams. By using a tool like [OpenAPI](https://swagger.io/docs/specification/about/), we can define our programming API clearly at the outset. We also update the "contract" before we implement changes to the code.

![Contract-First Development](/images/contract-first-api-development.png "Contract-First Development")

## Why use it?

So that everyone can be productive in parallel AND we can have strong guarantees of the resulting applications working together properly. Instead of UI development being blocked awaiting a working service to code against, UI and Service developers can work in parallel. Also, if you define the contract first when developing or changing API interfaces, you have a clearer "Definition Of Done" and "Acceptance Criteria" for the work.

Here's a quick intro video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zQncznMLrt4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Further benefits include:

- Code generation for both clients and servers
- Automated testing and validation tools
- Simple mocking of the service under development
- More relevant and current documentation

More tooling around OpenAPI can be found [HERE](https://openapi.tools/)


## Related Practices

- [Definition Of Done](https://openpracticelibrary.com/practice/definition-of-done/)

## Further Information

- [OpenAPI](https://swagger.io/docs/specification/about/)
- [OpenAPI Generator](https://openapi-generator.tech/)
- [OpenAPI Tools](https://openapi.tools/)
