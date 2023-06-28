---
templateKey: practice-page
title: Technical Debt
subtitle: The cost of reworking quickly implemented solutions
date: 2020-02-17T13:56:42.629Z
authors:
  - dappleyard93
tags:
  - value
  - methods
mobiusTag: delivery
icon: /images/Tech debt Radar.jpg
whatIs: >-
  Technical debt as a concept reflects the cost of rework caused by taking
  shortcuts or choosing an easier solution, instead of using a better approach
  that may take longer. Technical debt can in some ways be compared to monetary
  debt in that it can accumulate 'interest', making it harder to implement
  changes later on. Unaddressed technical debt increases software entropy, slows
  development and may cause much bigger problems further down the line.


  You may question if it causes all these issues why use it in the first place?
whyDo: >-
  In the short term ; Technical debt is not necessarily a bad thing, and
  sometimes technical debt is required to move projects forward and access value
  now. The key is staying on top of this technical debt, ensuring visibility and
  managing it in the backlog.


  Beware, beware the technical debt cycle! Oh too often this can become the death of a product or company as things gradually get slower and less stable all in the false believe that the decisions being made will somehow bring more value.  However as we can see below this value is short lived.
howTo: See below for further information.
mediaGallery:
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/technical-debt-cycle.png?raw=true
  - link: https://github.com/openpracticelibrary/opl-media/blob/master/images/tech-debt-radar.jpg?raw=true
resources:
  - link: https://www.linkedin.com/pulse/when-your-tech-debt-comes-due-kevin-scott/
    linkType: web
    description: Linkedin's Project Inversion
participants: []
area: delivery-measure-and-learn
perspectives: []
---
## What is Technical Debt?

Technical debt as a concept reflects the cost of rework caused by taking shortcuts or choosing an easier solution, instead of using a better approach that may take longer. Technical debt can in some ways be compared to monetary debt in that it can accumulate 'interest', making it harder to implement changes later on. Unaddressed technical debt increases software entropy, slows development and may cause much bigger problems further down the line.

You may question if it causes all these issues why use it in the first play?

In the short term ; Technical debt is not necessarily a bad thing, and sometimes technical debt is required to move projects forward and access value now. The key is staying on top of this technical debt, ensuring visibility and managing it in the backlog.

**The Technical Debt Cycle**

Beware, beware the technical debt cycle! Oh too often this can become the death of a product or company as things gradually get slower and less stable all in the false believe that the decisions being made will somehow bring more value. However as we can see below this value is short lived

![](/images/Technical Debt Cycle.PNG)

**How do we manage Tech Debt?**

Within Scrum Tech Debt is primarily managed by both the Scrum Team and Product owner. These two parties are responsible for

- Its visibility - Ensuring required parties are aware of the current Tech debt along with its impact
- When its created - Making informed decisions as to when to take on the debt
- When/how its addressed - Making informed decisions as to when/how to pay that debt off

One helpful tool for categorising Tech Debt is a Tech Debt Radiator. Here effort relates to how much work is needed to address the tech debt and pain refers to the amount of trouble its currently causing. The highest priority will be the work causing the most pain but requiring the least effort to resolve, the lowest priority will likely have the lowest pain but requiring the most effort.

![](/images/Tech debt Radar.jpg)

**Best Practice**

Technical debt should be paid back little and often to prevent accumulations, with the aim being to fix it as areas of the code are worked on again

## Further Information

For a really good case study of technical debt going wrong and then how to deal with it check out [Linkedin's Project Inversion](https://www.linkedin.com/pulse/when-your-tech-debt-comes-due-kevin-scott/)
