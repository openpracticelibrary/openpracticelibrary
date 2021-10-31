---
title: Expand and Contract Pattern
subtitle: A pattern to help in modernisation and migration projects.
date: 2020-07-23T05:12:29.611Z
authors:
  - gsampaio-rh
area: delivery-deliver
perspectives: []
jumbotron: /images/expand-contract-pattern.jpg
participants: []
templateKey: practice-page
mobiusTag: delivery
icon: /images/expand-contract-pattern.jpg
---
## What is it/Why use it?

Migration and modernization projects are just two examples where developers might need to deal with different components/versions from the same application. Refactoring is a frequent process and while using practices like A/B testing, canary releases, and blue/green deployments to deploy these distinct models, most of the time, there are other components in the architecture that communicate with them and some might require backward compatibility. It's a challenge to maintain both structures properly working and it's even more difficult to relocate old schemes to a new composition while receiving new data, and updating the one that is already in the system. The Expand and Contract pattern introduce a reliable process to do this transition, breaking the process into 3 stages where you are going to extend the interface to a new process without removing the old one, so you can transition legacy clients to the new structure without any breakouts, and then fully update the application in the absence of any major impacts to the users.

## How to do it?

### 1st phase - Expand 

The first phase is called "Expand". This is where we are going to implement our new code. Doing that the application can support both, old and new, implementations. Let's suppose that we have a table called Shirt and in this table, we use the colour's name to identify which colour the shirt has. It happens that using a name to identify the colour was causing problems during production because a couple of times the designer asked for a "blue shirt" meaning a "dark blue shirt", but received a "light blue". To resolve that problem we are going to change this process and instead of using a colour's name, we are going to use the colour's hex code from now on.

![1st phase](/images/expand-contract-pattern-1-.jpg "Expand phase")

### 2nd phase - Transition 

Now that we have our new code in place we need to expose it to our users/clients. At this point, we start the "Transition" phase, where we have both implementations working. This way we are introducing the new data in the new "correct" format while this will give us time to properly migrate the old data and integration points in our architecture. During this phase will need to deal with redundancy as the data needs to be saved in both schemes, old and new. You might introduce a trigger and just save the data in the old system, so the trigger can convert it and save it in the new scheme. Once that you feel confident you can move the data from the old database to the new one. Always have in mind to deal with the redundant data that was created during that time. Make sure about the data integrity that was migrated and then stops reading from the old structure. Now the last step from this phase would be to stop writing into the old schemes.

### 3rd phase - Contract 

As we are not using the old structure anymore, now we introduce the "Contract" phase and delete the old code completely from our structure. Let's go back to our shirt example. Now that we don't use the old structure anymore, and the old data was properly migrated, you can remove the colourName column and just use the colourCode.

![3rd phase](/images/expand-contract-pattern-2-.jpg "Contract phase")

## Related Practices



* [Blue Green Deployments](https://openpracticelibrary.com/practice/blue-green-deployments/)
* [Canary Release](https://openpracticelibrary.com/practice/canary-release/)
* [Split Testing - A/B Testing](https://openpracticelibrary.com/practice/split-testing-a-b-testing/)