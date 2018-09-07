---
title: Containers
subtitle: 'A software package that contains everything the software needs to run. '
date: 2018-09-04T06:19:38.381Z
authors:
  - jamesallenred
area: foundation-technical
icon: /images/containers.jpg
jumbotron: /images/containers.jpg
people: '1'
time: Ongoing
difficulty: moderate
participants:
  - Developers
  - Operations
  - Infrastructure
---
## What is it?

A technical description of a Linux container is a sandboxed process or processes, isolated on a VM or bare metal server. They are isolated using the tried and tested mechanisms of Linux Namespacing, CGroups, and SELinux contexts. A good way of  imagining a container is a way of packaging up applications or services, the container will only contain the files and libraries required for that application or service and will share the underlying components such as the kernel. The package of files and libraries is known as a container image.



## Why use it?

* Density – Containers allow greater utilisation of infrastructure with multiple containers able to run on singular VMs or bare metal servers.
* Portability – The immutable container image can run in any environment that has the required container engine, this enables a hybrid cloud strategy.
* Speed – A container image starts up very quickly in most cases less than a second as opposed to multiple minutes if not longer for a traditional system to boot up.
* DevSecOps Enabler – Building an immutable container image allows for developers to develop only the application/service specific code while having the security team scan the image to ensure its compliant and finally hand that container image to the operations team, the operations team will only require knowledge on running containers rather than application specific knowledge thus enabling DevSecOps practises.



## Further Information

* https://www.redhat.com/en/topics/containers
