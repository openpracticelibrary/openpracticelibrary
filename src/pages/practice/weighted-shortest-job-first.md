---
templateKey: practice-page
title: Weighted Shortest Job First
subtitle: Practice for quantitatively assessing and agreeing backlog prioritisation
date: 2021-04-13T08:58:44.242Z
authors:
  - nick-woods
tags:
  - insight
mobiusTag: options
icon: /images/wsjf-template.jpg
whatIs: >-
  Weighted Shortest Job First, WSJF, is a method for assessing the items which
  are the most cost beneficial and the smallest job size, to infer work items we
  should prioritise and deliver first. 


  Think of "Cost Benefit" in a similar way to the cost of not doing something. If we decide NOT to fix something and it leads to significant damage, then the cost to fix it and the resulting damage has gone up over time. Or if we delay building something which would have generated income if it had been ready sooner, then the cost of NOT having that thing has increased over time. This could be the opportunity cost or the "Cost of Delay".


  We calculate the cost of delay as follows:


  **Cost of Delay, CoD = (Business Value, BV + Time Criticality, TC + Risk Reduction or Opportunity Enablement, RR/OE)**


  Once we have the Cost of Delay, we can calculate the Weighted Shortest Job First score by dividing this by the job size; therefore favouring the highly cost beneficial but smallest jobs first:


  **WSJF = Cost of Delay ÷ Job Size**


  This practice was established by Don Reinertson in the "Principles of Product Development Flow" as an evolution of the 'shortest job first' method used previously. It has been popularised in the Scaled Agile Framework methodology, supporting many of its guiding principles.
whyDo: >-
  This practice is a great way of taking big, unrefined work items, driving down
  details and establishing a shared and objective priority, which can be easily
  communicated to stakeholders and other interested parties.


  In running this exercise with the whole team, a more rounded view of the priority and sequencing is established; bringing the team closer to the urgency for working on particular items vs others.
howTo: >-
  Start by scoring the components of the Cost of Delay, one by one. It's
  recommended to use a fibonacci series, emphasising the larger the number the
  greater the uncertainty and start by sizing the smallest item and relatively
  sizing from there.


  In practice this means you could start with Business Value and choose the item on your list which you would consider the lowest, give this a score of 1. Then find the next smallest item, decide whether this is equally valuable or more valuable and then score it accordingly. Continue through the list and then move on to Time Criticality, then Risk Reduction or Opportunity Enablement. Once all these have been scored, you can sum the results to get the Cost of Delay for each item. 


  *TIP: Don't spent too long debating the exact scores of each item, this is helped along by sticking to the fibonacci series.*


  Next move onto the job sizing; with the team who will be working on these work items; similar to before, start with the item which is believed to be the smallest job size on the list and give this a 1, then relatively size other items on the list based on this.


  Once you have the Cost of Delay and Job Size, you're ready to calculate the Weighted Shortest Job First score. The higher the score, the higher the priority of the work item.


  *TIP: You'll notice as you go that job size plays a big role in the eventual prioritisation of work items. It may be useful to review your backlog when you have your scoring and see if the majority of the value from a work item is garnered from a smaller slice of the original backlog item.*
mediaGallery:
  - link: https://lh3.googleusercontent.com/SCSDiukNBtHKP4URJ3WXGR_nQTjK54O3Wqjj0dLmS4hdBikb6PwCZss41nVBzNHGw_NsOv8iHGLN-zKeH6txw2YfOQGY-EdqMhArK0g_FQTxqG4l1ztFCJ28BLKuniEZkIIxLITi
difficulty: moderate
participants: []
---
