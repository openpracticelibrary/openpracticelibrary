---
templateKey: practice-page
title: Everything-as-Code
subtitle: Save everything as code - configuration, infrastructure and pipelines
date: 2018-08-15T09:37:16.000Z
authors:
  - springdo
  - makentenza
tags:
  - methods
mobiusTag: foundation
icon: /images/everything-as-code.jpeg
whatIs: >-
  Everything as Code is the practice of treating all parts of the system as
  code. This means, storing configuration along with Source Code in a repository
  such as git or svn. Storing the configuration from bottom to top
  (communication switches, bare metal servers, operating systems, build
  configurations, application properties and deployment configurations...) as
  code means they are tracked and can be recreated at the click of a button.



  Everything as Code includes system design, also stored as code. In old world IT, infrastructure required specialised skills and physical hardware and cables to be installed. Systems were precious or were not touched / updated often as the people who created them no longer work for the company. The dawn of cloud computing and cloud native applications has meant it is cheap and easy to spin up virtual infrastructure. By storing the configuration of virtual environments as code, they can be life-cycled and recreated whenever needed.
whyDo: >-
  1. **Traceability** - storing your config in `git` implies controls are in
  place to track who / why a config has changed. Changes can be applied and
  reverted and are tracked to a single user who made the change.

  2. **Repeatable** - moving from one cloud provider to another should be simple in modern application development. Picking a deployment target should be like shopping around for the best price that week. By storing all things as code, systems can be re-created in moments in various providers.

  3. **Tested** - Infra and code can be rolled out, validated and promoted into production environments with confidence and assurance it will behave as expected.

  4. **Phoenix server** - No more fear of a servers' configuration drifting. If a server needs to be patched or randomly dies, it's OK. Just create it again from the stored configuration.

  5. **Shared understanding** - When a cross-functional team is using 'Everything as Code' to describe all the parts of the Product they are developing together, they contribute to increase the shared understanding between Developers and Operations, they speak same language to describe the state of this Product and they use the same frameworks to accomplish their goals.
howTo: >-
  * [Martin Fowler](https://martinfowler.com/bliki/InfrastructureAsCode.html) on
  Infra as Code.

  * [Terraform](https://www.terraform.io/) is an infrastructure as code platform that can provision to AWS, Azure, Google Cloud, other clouds, or an on-premises datacenter. This infrastructure could include servers, databases, load balancers, caches, firewall settings, SSL certificates, queues, monitoring, subnet configurations, routing rules, and much more.

  * [Ansible](https://www.ansible.com/) is an infrastructure automation tool created by Red Hat, the huge enterprise open source technology provider.
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/everything%20as%20code.jpeg?raw=true
resources:
  - link: https://martinfowler.com/bliki/InfrastructureAsCode.html
    linkType: web
    description: Martin Fowler
  - link: https://www.ansible.com/
    linkType: web
    description: Ansible
people: ""
participants: []
area: foundation-technical
---
## What is it?

Everything as Code is the practice of treating all parts of the system as code. This means, storing configuration along with Source Code in a repository such as git or svn. Storing the configuration from bottom to top (communication switches, bare metal servers, operating systems, build configurations, application properties and deployment configurations...) as code means they are tracked and can be recreated at the click of a button.

Everything as Code includes system design, also stored as code. In old world IT, infrastructure required specialised skills and physical hardware and cables to be installed. Systems were precious or were not touched / updated often as the people who created them no longer work for the company. The dawn of cloud computing and cloud native applications has meant it is cheap and easy to spin up virtual infrastructure. By storing the configuration of virtual environments as code, they can be life-cycled and recreated whenever needed.

## Why store all things as code?

1. Traceability - storing your config in `git` implies controls are in place to track who / why a config has changed. Changes can be applied and reverted and are tracked to a single user who made the change.
2. Repeatable - moving from one cloud provider to another should be simple in modern application development. Picking a deployment target should be like shopping around for the best price that week. By storing all things as code, systems can be re-created in moments in various providers.
3. Tested - Infra and code can be rolled out, validated and promoted into production environments with confidence and assurance it will behave as expected.
4. Phoenix server - No more fear of a servers' configuration drifting. If a server needs to be patched or randomly dies, it's OK. Just create it again from the stored configuration.
5. Shared understanding - When a cross-functional team is using 'Everything as Code' to describe all the parts of the Product they are developing together, they contribute to increase the shared understanding between Developers and Operations, they speak same language to describe the state of this Product and they use the same frameworks to accomplish their goals.

## Further reading

* [Martin Fowler](https://martinfowler.com/bliki/InfrastructureAsCode.html) on Infra as Code.
* [Ansible](https://www.ansible.com/) is an infrastructure automation tool created by Red Hat, the huge enterprise open source technology provider.
* [Infrastructure-as-code](https://www.youtube.com/watch?v=E2KOF3AdNy0&list=PLkg9jnMh6bhd0avDugIM81BU9VkBEaMMz&index=10&t=0s) example using OpenShift.
