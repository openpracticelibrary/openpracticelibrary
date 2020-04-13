---
title: Contract-First Development
subtitle: Make it clear for everyone
date: 2019-06-20T12:49:38.825Z
authors:
  - infosec812
area: delivery-deliver
perspectives:
  - product-ownership
icon: /images/contract-first-api-development.png
jumbotron: /images/contract-first-api-development.png
people: 2+
time: 2+ hours
difficulty: moderate
participants:
  - DevOps Team
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