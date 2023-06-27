---
templateKey: practice-page
title: The Big Picture
subtitle: A simple workshop for getting shared understanding in a complex space
date: 2020-08-02T12:04:58.410Z
authors:
  - springdo
  - joishika
mobiusTag: discovery
icon: /images/big-pic.png
whatIs: An Open Tech practice that costs little to produce but is great in
  creating a shared understanding of part of a system is the Big Picture
  Workshop. It is a simple practice used to visualise all the steps that a
  software pipeline goes through in moving code from source (eg git), through
  compile and test then into the hands of our Happy Users. Building it
  collaboratively is a great activity for a team to do as it helps to bridge the
  gap between the techies and the business folks. It’s great for articulating
  the importance and sometimes the complexity of continuous delivery. A Big
  Picture can easily be created with just some Stickies and a clear board or
  space. Of course - if you’re feeling more artistic it can also be doodled!
whyDo: >-
  You’re probably reading this and thinking ‘Sounds fluffy to me - why should I
  bother to make one?’ 


  * Shared Understanding - ahhh the golden dream of Shared Understanding! When the whole team collaborates around making the Big Picture they get a shared sense of how their pipelines connect code to end users. 

  * Prototype Quickly - It’s cheaper to write and draw before implementing a single line of code! Rapidly prototype with some sharpies and postits, moving stages of your pen and paper pipeline without opening your laptop. 

  * Complexity Simplified - Big Picture helps bring the non techies into the mix by showing them the components required to manage the softwares lifecycle. Build it up one step at a time to demonstrate the complexity in a simple visual flow. 

  * Information Radiator - Like all these practices, the Big Picture is an evolving artifact. As the complexity of a software delivery pipeline grows, the Big Picture should be updated to reflect this. It is a graphic which can be displayed to all and should not be hidden.
howTo: >-
  Get some Stickies and painters tape and a lot of space! Draw up your servers
  or playforms in tape to frame the big picture. For example, a big red box
  could represent an OpenShift Cluster.


  With this in place, carve out the box into segments to represent each project or namespace within your cluster. These could represent your CI/CD namespace, dev and test environments. Label them and create a key, again using a few stickies! It's much easier to scaffold things out using stickies than writing a sinlge line of code :)


  Next step is to add our Local Environment, if that's your laptop draw it outside the cluster, if not include it inside! Fill your local environment with the local dev tools required by the team. For example perhaps the team needs Ansible or NodeJS installed or even both! Draw a doodle of them and pop them in the Big Picture.


  With the labels and projects in place, add in your CI/CD tooling to the namespace. Draw up Jenkins or Tekton or whatever else you're using and write a one line description of each to help new team members when onboarding them.


  With all the compenents in place, create your pipeline. Draw the stages and add the lower level details ie the steps. This lower level detail is probable more helpful for the techie team, but it provides a great oportunity for the team to share this detail with the designers, product owners and anyone else who is interested! Add these pieces to the key and tell the story of code moving from source through builds and into an environment!
mediaGallery:
  - link: https://www.youtube.com/watch?v=qXb1naW0zdY
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/big-pic.png?raw=true
  - link: https://youtu.be/8fDkmnshIJg
resources:
  - link: https://anchor.fm/openpracticelibrary/episodes/The-Big-Picture-w-Haitham-Shahin-ehg7d6
    linkType: podcast
    description: Big Picture Open Practice Podcast Episode
  - link: " https://landscape.cncf.io/"
    description: CNCF Cloud Native Interactive Landscape
    linkType: web
participants:
  - The Dev Team
  - The PO & Designers
jumbotron: /images/big-pic.png
area: foundation-technical
people: 3+
time: 60mins
perspectives: []
difficulty: easy
jumbotronAlt: example-big-picture
---
## What is it?

An Open Tech practice that costs little to produce but is great in creating a shared understanding of part of a system is the Big Picture Workshop. It is a simple practice used to visualise all the steps that a software pipeline goes through in moving code from source (eg git), through compile and test then into the hands of our Happy Users. Building it collaboratively is a great activity for a team to do as it helps to bridge the gap between the techies and the business folks. It’s great for articulating the importance and sometimes the complexity of continuous delivery.  A Big Picture can easily be created with just some Stickies and a clear board or space. Of course - if you’re feeling more artistic it can also be doodled!



## Why use it?

You’re probably reading this and thinking ‘Sounds fluffy to me - why should I bother to make one?’
Shared understanding - ahhh the golden dream of Shared Understanding! When the whole team collaborates around making the Big Picture they get a shared sense of how their pipelines connect code to end users.
Prototype quickly - It’s cheaper to write and draw before implementing a single line of code! Rapidly prototype with some sharpies and postits, moving stages of your pen and paper pipeline
Complexity Simplified - Big Picture helps bring the non techies into the mix by showing them the components required to manage the softwares lifecycle. Build it up one step at a time to demonstrate the complexity in a simple visual flow.
Information Radiator - Like all these practices, the Big Picture is an evolving artifact. As the complexity of a software delivery pipeline grows, the Big Picture should be updated to reflect this. It is a graphic which can be displayed to all and should not be hidden.



<iframe width="1200" height="528" src="https://www.youtube.com/embed/qXb1naW0zdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## How do I create one?

Get some Stickies and painters tape and a lot of space! Draw up your servers or playforms in tape to frame the big picture. For example, a big red box could represent an OpenShift Cluster.

With this in place, carve out the box into segments to represent each project or namespace within your cluster. These could represent your CI/CD namespace, dev and test environments. Label them and create a key, again using a few stickies! It's much easier to scaffold things out using stickies than writing a sinlge line of code :)

Next step is to add our Local Environment, if that's your laptop draw it outside the cluster, if not include it inside! Fill your local environment with the local dev tools required by the team. For example perhaps the team needs Ansible or NodeJS installed or even both! Draw a doodle of them and pop them in the Big Picture.

With the labels and projects in place, add in your CI/CD tooling to the namespace. Draw up Jenkins or Tekton or whatever else you're using and write a one line description of each to help new team members when onboarding them.

With all the compenents in place, create your pipeline. Draw the stages and add the lower level details ie the steps. This lower level detail is probable more helpful for the techie team, but it provides a great oportunity for the team to share this detail with the designers, product owners and anyone else who is interested! Add these pieces to the key and tell the story of code moving from source through builds and into an environment!



## Further Information
