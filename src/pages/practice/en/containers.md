---
templateKey: practice-page
authors:
  - jamesallenred
  - Zenigata
howTo: "* [Understanding Linux
  containers](https://www.redhat.com/en/topics/containers) by Red Hat."
resources:
  - link: https://en.wikipedia.org/wiki/Virtual_machine
    linkType: web
    description: Wikipedia entry for Virtual Machines
  - link: https://en.wikipedia.org/wiki/Bare-metal_server
    linkType: web
    description: Wikipedia entry for Bare Metal Server
  - link: https://www.redhat.com/en/topics/containers
    linkType: web
    description: Understanding Linux containers
participants:
  - Developers
  - Operations
  - Infrastructure
area: foundation-technical
title: Container
subtitle: "A software package that contains everything the software needs to run. "
date: 2018-09-04T06:19:38.381Z
tags: []
mobiusTag: delivery
icon: /images/containers.jpg
whatIs: >-
  A technical description of a Linux container is a sandboxed process or
  processes isolated on a [VM](https://en.wikipedia.org/wiki/Virtual_machine) or
  [bare-metal server](https://en.wikipedia.org/wiki/Bare-metal_server).


  These processes are isolated using the tried and tested mechanisms of Linux Namespacing, CGroups, and SELinux contexts. A good way of imagining a container is a way of packaging up applications or services. The container will only contain the files and libraries required for that application or service and will share the underlying components such as the kernel. The package of files and libraries is known as a container image.
whyDo: >-
  * **Density** – Containers allow greater utilisation of infrastructure with
  multiple containers able to run on singular VMs or bare-metal servers.

  * **Portability** – The immutable container image can run in any environment that has the required container engine. This enables a hybrid cloud strategy.

  * **Speed** – A container image starts up very quickly, in most cases less than a second, as opposed to multiple minutes if not longer for a traditional system to boot up.

  * **DevSecOps Enabler** – Building an immutable container image allows for developers to develop only the application/service specific code while having the security team scan the image to ensure its compliance. Then the container image can be run by the operations team who will only require knowledge on running containers rather than application specific knowledge, thus enabling DevSecOps practices.
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/containers.jpg?raw=true
people: "1"
time: Ongoing
difficulty: moderate
---
## What is it?

A technical description of a Linux container is a sandboxed process or processes isolated on a [VM](https://en.wikipedia.org/wiki/Virtual_machine) or [bare-metal server](https://en.wikipedia.org/wiki/Bare-metal_server).

These processes are isolated using the tried and tested mechanisms of Linux Namespacing, CGroups, and SELinux contexts. A good way of imagining a container is a way of packaging up applications or services. The container will only contain the files and libraries required for that application or service and will share the underlying components such as the kernel. The package of files and libraries is known as a container image.

## Why use it?

* **Density** – Containers allow greater utilisation of infrastructure with multiple containers able to run on singular VMs or bare-metal servers.
* **Portability** – The immutable container image can run in any environment that has the required container engine. This enables a hybrid cloud strategy.
* **Speed** – A container image starts up very quickly, in most cases less than a second, as opposed to multiple minutes if not longer for a traditional system to boot up.
* **DevSecOps Enabler** – Building an immutable container image allows for developers to develop only the application/service specific code while having the security team scan the image to ensure its compliance. Then the container image can be run by the operations team who will only require knowledge on running containers rather than application specific knowledge, thus enabling DevSecOps practices.

## Further Information

* [Understanding Linux containers](https://www.redhat.com/en/topics/containers) by Red Hat.
