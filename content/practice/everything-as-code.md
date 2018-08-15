---
title: Everything-as-Code
subtitle: 'Save everything as code - configuration, infrastructure and pipelines'
date: '2018-08-15T10:37:16+01:00'
authors:
  - springdo
area: foundation-technical
icon: /images/ansible-example.png
people: ''
participants: []
---
## What is it?
Configuration-as-Code is the practice of treating all parts of the system as code. This means, storing configuration along with Source Code in a repository such as git or svn. Storing build configurations, application properties and deployment configurations as code means they are tracked and can be recreated at the click of a button.

Infrastructure-as-Code includes system design, also stored as code. In old world IT, infrastructure required specialised skills and physical hardware and cables to be installed. Systems were precious or were not touched / updated often as the people who created them no longer work for the company. The dawn of cloud computing and cloud native applications has meant it is cheap and easy to spin up virtual infrastructure. By storing the configuration of virtual environments as code, they can be life-cycled and recreated whenever needed.


## Why store all things as code?
1. Traceability - storing your config in `git` implies controls are in place to track who / why a config has changed. Changes can be applied and reverted and are tracked to a single user who made the change.
1. Repeatable - moving from one cloud provider to another should be simple in modern application development. Picking a deployment target should be like shopping around for the best price that week. By storing all things as code, infrastructure can be re-created in moments in various providers.
1. Tested - Infra and code can be rolled out, validated and promoted into production environments with confidence and assurance it will behave as expected. No more patches in production
1. Phoenix server - No more fear of a servers' configuration drifting. If a server needs to be patched or randomly dies, it's OK. Just create it again from the stored configuration.

## Further reading
 - [Martin Fowler](https://martinfowler.com/bliki/InfrastructureAsCode.html) on Infra as Code.
 - [Ansible](https://www.ansible.com/) is an infrastructure automation tool created by Red Hat, the huge enterprise open source technology provider.
