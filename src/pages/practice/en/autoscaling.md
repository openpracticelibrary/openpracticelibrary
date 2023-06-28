---
templateKey: practice-page
title: Autoscaling
subtitle: Cloud native applications reacting to demand.
date: 2018-08-31T15:58:12.992Z
authors:
  - syvanen
  - Zenigata
tags:
  - measure
mobiusTag: delivery
icon: /images/auto-scaling-1.png
whatIs: >-
  Autoscaling is a method of changing amount of computing resources based on the
  applications measured load. This load could be CPU, memory, network or some
  other measurable metric that can be used as the trigger of scaling. The metric
  could also be the amount of items in a message queue or the amount of tasks
  waiting in your business process. It can be used with active backends or batch
  job type of temporary workloads.


  Autoscaling can also be used as an automatic recovery for failed application instances. Because when coupled with health checks, auto scale can kill or restart the non-operational instance of the app and automatically replace it with a new working one.


  Load balancing is also closely linked to autoscaling as you will need the ability to dynamically add and remove application instances from load balancing.
whyDo: >-
  It allows the application to only consume resources when needed. This is
  important, especially in cloud environments where your operational costs are
  based on usage. It also enables other practices such as rolling upgrades or
  easy rollbacks because autoscaling applications by default must have the
  capability to operate stateless or some way to synchronise all instances
  automatically.


  Autoscaling can be used on to spin up working nodes to process batch jobs based on tasks in a queue. This enables you to process the tasks or messages on demand much better than with static application.


  This practice also enables better uptime and availability of your application via the health checks and reaction to actual load. So when you get an unexpected amount of traffic coming in, or when the application crashes in certain corner cases, the autoscaling can react and bring more working and available instances of your application.
howTo: Auto scaling is an implementation of the dynamic scaling feature of cloud
  computing, which can be applied manually or automatically. Increasingly, cloud
  service providers are offering this feature due to the unpredictable demand
  for cloud capabilities.
mediaGallery:
  - link: https://docs.aws.amazon.com/autoscaling/ec2/userguide/images/as-basic-diagram.png
  - link: https://www.youtube.com/watch?v=L03EHIH-T2E
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
