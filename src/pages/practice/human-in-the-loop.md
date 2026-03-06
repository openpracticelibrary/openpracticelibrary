---
templateKey: practice-page
title: Human in the loop
subtitle: Keeping people at the center of AI-assisted decision-making
date: 2026-03-05T00:37:53.721Z
authors:
  - HunterGerlach
tags:
  - culture
  - methods
mobiusTag: foundation
icon: /images/human-in-the-loop.jpg
whatIs: >-
  Human-in-the-Loop (HITL) is a design pattern in which people remain actively
    involved in the decision-making process of an automated or AI-driven system.
    Rather than handing full control to a machine, a human reviews, approves, or
    corrects the system's output before it takes effect.

    HITL sits on a spectrum of human oversight models:

  * **Human-in-the-Loop (HITL):** A person must approve or reject every decision the system makes. Best for high-risk or high-consequence tasks such as medical diagnoses, legal judgments, or financial approvals.

  * **Human-on-the-Loop (HOTL):** The system operates autonomously but a person monitors its behavior and can intervene when needed. Suitable for moderate-risk tasks where speed matters but oversight is still required.

  * **Human-in-Command (HIC):** A person sets the goals, constraints, and boundaries within which the system operates, and retains the authority to override or shut it down at any time. Appropriate for strategic or organizational-level governance of AI systems.

    Choosing the right model depends on the risk level of the task, the maturity of the AI system, and the consequences of an incorrect decision.
whyDo: >-
  

  * **Safety:** AI systems can hallucinate, produce biased outputs, or fail in
    unexpected ways. Human oversight catches errors before they cause real harm.

    * **Accountability:** As a widely cited [IBM internal training slide from 1979](https://simonwillison.net/2025/Feb/3/a-computer-can-never-be-held-accountable/) put it: *"A computer can never be held accountable, therefore a computer must never make a management decision."* When decisions affect people's lives, livelihoods, or rights, there must be a responsible human who can explain and stand behind the outcome.
    * **Ethical oversight:** Humans bring moral judgment and contextual understanding that AI systems lack. They can recognize when a technically correct answer is ethically wrong.
    * **Regulatory compliance:** Frameworks such as the [EU AI Act, Article 14](https://artificialintelligenceact.eu/article/14/) and the [NIST AI RMF, GOVERN 3.2](https://airc.nist.gov/airmf-resources/playbook/govern/#govern-3-2) explicitly require human oversight for high-risk AI systems. Building HITL practices now prepares your organization for current and emerging regulations.
    * **Quality improvement:** Every human correction is a feedback signal. When reviewers flag errors, those corrections can be used to retrain and improve the AI system over time, creating a virtuous cycle that does a better job of benefitting the human users it serves.
    * **Trust building:** Teams, customers, and stakeholders are more likely to trust and adopt AI-assisted processes when they know a human is verifying the output.
howTo: >-
  ### Step 1: Classify workflows by risk level

    Map your AI-assisted workflows into risk tiers. High-risk decisions (affecting
    safety, finances, legal standing, or individual rights) require HITL. Moderate-risk
    tasks may use HOTL. Low-risk tasks with well-understood failure modes may operate
    autonomously with periodic audits.

  ### Step 2: Define review gates

    For each workflow, identify the specific points where a human must review,
    approve, or reject the AI output before it moves forward. Make these gates
    explicit in your process documentation and tooling so they cannot be skipped.

    *A note on the tension between flow and governance:* practices like [Continuous Delivery](/practice/continuous-delivery/) and [Continuous Deployment](/practice/continuous-deployment/) rightly teach us to eliminate manual gates that slow delivery. HITL review gates are not a step backward. They apply specifically where AI is making or influencing decisions that carry real risk. For lower-risk AI tasks, lean on automated checks, [Test Automation](/practice/test-automation/), [Canary Releases](/practice/canary-release/), and [Feature Toggles](/practice/feature-toggles/) to keep things flowing. Reserve human gates for where the cost of being wrong justifies the cost of slowing down.

  ### Step 3: Assign roles with real authority

    Designate specific people as reviewers and give them the authority and time to
    reject or override AI outputs. A review gate is meaningless if the reviewer
    feels pressured to rubber-stamp results or lacks the expertise to evaluate
    them.

  ### Step 4: Build on precedent to scale review

    The volume of AI-assisted decisions will only grow. Rather than reviewing every output from scratch, document prior human judgments and treat them as precedent. When a reviewer approves a pattern or rejects an approach, capture that rationale so future reviews of similar outputs can be resolved quickly or even automated. This is how you scale human verification without scaling headcount.

  ### Step 5: Create feedback loops

    Establish a mechanism for reviewers to report errors and patterns back to the
    team maintaining the AI system. Track what types of errors occur, how often,
    and whether they are improving over time. Use this data to retrain models and
    refine prompts. Over time, these feedback loops mature into structured **[evals](/practice/evals/)**, systematic evaluations that measure AI output quality against human-defined criteria and help you know whether the system is actually getting better.

  ### Step 6: Monitor and adapt

    Regularly review your oversight model. As the AI system matures and error
    rates change, you may be able to move some workflows from HITL to HOTL. Conversely,
    if new failure modes emerge, you may need to tighten oversight. The goal is a
    living process, not a one-time setup.

  ### Anti-patterns to avoid


  * **Rubber-stamping:** Reviewers approve everything without meaningful evaluation. Combat this by tracking rejection rates and reviewing a sample of approvals.

  * **Automation bias:** People over-trust the AI and stop critically evaluating its output. Rotate reviewers and provide training on known AI failure modes.

  * **Reviewer fatigue:** Asking humans to review too many outputs too quickly degrades the quality of oversight. Set sustainable review volumes and build in breaks.
mediaGallery:
  - link: https://static.simonwillison.net/static/2025/a-computer-can-never-be-held-accountable.jpg
resources:
  - link: https://airc.nist.gov/airmf-resources/playbook/govern/#govern-3-2
    linkType: web
    description: NIST AI RMF Playbook — GOVERN 3.2 covers human-AI configurations
      and oversight roles
  - link: https://artificialintelligenceact.eu/article/14/
    linkType: web
    description: EU AI Act — Article 14, Human Oversight
  - link: https://en.wikipedia.org/wiki/Human-in-the-loop
    description: Wikipedia - Human in the loop
    linkType: web
  - link: https://openpracticelibrary.com/practice/generative-ai-cost-equation/
    linkType: web
    description: Generative AI Cost Equation — references HITL as a cost component (Step 4)
people: 2+
time: ongoing
difficulty: moderate
participants: []
---
