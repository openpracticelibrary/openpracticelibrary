---
title: Autoscaling
subtitle: Cloud native applications reacting to demand
date: 2018-08-31T15:58:12.992Z
authors:
  - syvanen
area: foundation-technical
perspectives:
  - ''
difficulty: moderate
participants: []
---
## What is it?

Autoscaling is a method of changing amount of computing resources based on the applications measured load. This load could be CPU, memory, network or some other measurable metric that can be used as the trigger of scaling. The metric could also be amount of items in a message queue or in amount of tasks waiting in your business process. It can be used with active backends and with batch job type of temporary workloads.

Autoscaling can also be used as automatic recovery for failed application instances. Because when coupled with health checks, auto scale can kill or restart the non-operational instance of the app and automatically replace it with a new working one.

Load balancing is also closely linked to autoscaling as you will need the ability to dynamically add and remove application instances from load balancing.

## Why use it?

Allows the application to only consume resources when needed. This is important especially in cloud environments where your operational costs are based on usage. It also enables other practices such as rolling upgrades or easy roll backs. Because autoscaling applications by default must have capability to operate stateless or some way to synchronise all instances automatically.

Autoscaling can be used on to spin up working nodes to process batch jobs based on tasks in a queue. This enables you to process the tasks or messages on demand much better than with static application.

This practice also enables better uptime and availability of your application via the health checks and reaction to actual load. So when you get a unexpected amount of traffic coming in or the application crashes in certain corner cases the autoscaling can react and bring more working instances of your application available.

## Further Information

* [Wikipedia definition of Autoscaling](https://en.wikipedia.org/wiki/Autoscaling)
* [AWS Auto scaling](https://aws.amazon.com/autoscaling/)
* [OpenShift Pod Autoscaling](https://docs.openshift.com/container-platform/3.10/dev_guide/pod_autoscaling.html)
