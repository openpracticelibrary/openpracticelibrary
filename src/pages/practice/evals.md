---
templateKey: practice-page
title: Evals
subtitle: Systematically measuring AI output quality when there is no single right answer
date: 2026-03-04T12:00:00.000Z
authors:
  - HunterGerlach
tags:
  - methods
mobiusTag: foundation
icon: /images/evals.jpg
whatIs: >-
  Evals are systematic methods for measuring the quality of AI and LLM outputs.
  They serve the same purpose as [Test Automation](/practice/test-automation/)
  - giving you confidence that your system behaves correctly - but they are
  fundamentally different.


  **Traditional tests give you certainty. Evals give you confidence.** A unit
  test is binary: the function returns 4 or it does not, and you can verify that
  with 100% accuracy. AI outputs are non-deterministic - the same prompt can
  produce different responses each time, and "correct" is a spectrum, not a
  binary. No single eval can tell you the system is working perfectly. Instead,
  multiple evals across different dimensions combine to build a **level of
  confidence** about your system's quality - confidence that is measurable,
  trackable, and sufficient to make informed decisions, but never 100% certain.


  This is a critical distinction for leaders and stakeholders to understand.
  Expecting evals to provide the same pass/fail certainty as traditional tests
  sets the wrong expectation and leads to either false confidence or
  unnecessary disappointment. Evals tell you "we are 85% confident the system
  produces helpful, accurate responses across our test scenarios" - and that
  level of confidence, tracked over time, is what you use to decide whether to
  ship, roll back, or invest more in quality.


  **The right confidence threshold depends on the use case.** If your AI system
  is doing something that was previously impossible or prohibitively expensive,
  even modest confidence may be a massive improvement over the status quo. But
  if humans are already doing the task well, the bar is much higher - and
  getting there follows a pattern that Andrej Karpathy calls
  ["the march of nines"](https://www.dwarkesh.com/p/andrej-karpathy):
  every additional nine of reliability (90% to 99% to 99.9%) requires roughly
  as much effort as all the previous nines combined. Set your target confidence
  level based on what the use case actually requires and what existed before,
  not on an assumption that every AI system must reach near-perfection to be
  valuable.


  ### Eval scope: components, segments, and end-to-end


  An AI system is made up of many parts, and you can eval at different scopes:


  * **Component evals** measure an individual piece of the system in isolation. The model itself (reasoning, factuality, instruction following), the retrieval pipeline (relevance, recall of retrieved documents), the prompt template, the post-processing logic. The tighter you scope an eval, the easier it is to pinpoint what is working and what needs to improve.

  * **Segment evals** measure multiple components working together. For example, retrieval + prompt + model as a group, to see whether the right context is being pulled in and used effectively. This catches integration problems that component evals miss.

  * **End-to-end evals** measure the full system as a user experiences it - the complete pipeline from input to final output. These are the most realistic but also the hardest to debug when something goes wrong, because the failure could be in any component.

  * Start narrow and work outward. Improving individual components improves the segments they belong to, which improves the end-to-end result. When an end-to-end eval shows a regression, scoped evals help you find exactly where the problem is.


  ### Not all evals are fuzzy


  While much of the eval conversation focuses on subjective quality judgments,
  some evals are fully deterministic. Checking that a required field is present
  in the output, that a response is valid JSON, that a summary stays under a
  token limit, or that no forbidden content appears - these are simple binary
  checks, just like traditional tests. They either pass or they fail.


  These deterministic evals form the base of the eval pyramid (see Step 3).
  They are fast, cheap, and reliable. The layers above - model-graded evals and
  human evals - handle the judgments that code cannot make on its own, like
  whether a response is helpful, accurate, or appropriate in tone. A good eval
  strategy starts with deterministic checks where they make sense and layers on
  the more expensive, less certain eval types only where needed.


  ### Offline vs. online evals


  * **Offline evals** run against a static dataset before deployment. Because the inputs are fixed, results are reproducible and you can compare changes side by side. They offer fast iteration and full control over variables, making them your primary tool for day-to-day development. They may not reflect real user behavior or production data distributions, but they catch regressions before anything reaches users.

  * **Online evals** run against live production traffic or real user interactions. They catch drift - gradual degradation in quality that offline evals miss because your static dataset no longer reflects how users actually use the system. They capture real-world conditions - actual queries, edge cases, and usage patterns - but provide slower feedback and make it harder to isolate variables.

  * Teams need both. Offline evals gate deployment; online evals monitor production.


  ### Evals vs. A/B tests


  Evals and [A/B tests](/practice/split-testing-a-b-testing/) answer different questions. Evals measure quality against a rubric or reference - you can run them with zero users. A/B tests compare two variants by measuring user behavior at scale - you need significant traffic to reach statistical significance.


  In practice, the choice often depends on the number of users: low-traffic AI features may never get enough volume for meaningful A/B tests, making evals the primary quality signal. High-traffic features can and should use both. Evals are also essential for higher-risk or regulated use cases where you need to demonstrate quality against specific criteria before exposing users to a change, not after.
whyDo: >-
  * **Non-deterministic outputs demand a new quality paradigm.** Traditional
  tests tell you "this works" or "this is broken" with certainty. Evals on
  their own cannot do that - and they are not supposed to. Instead, evals
  across multiple dimensions combine to give you a **degree of confidence**
  that your system is producing quality outputs. That confidence is what drives
  decisions: confident enough to ship, confident enough to scale, or not
  confident enough and here is specifically where quality is falling short.
  That said, tests and evals are not mutually exclusive. When AI generates code
  or an agentic system produces deterministic artifacts, traditional tests
  still apply to those outputs. The best strategies pair both: tests for what
  is deterministic, evals for what is not. Without either, you have no reliable
  way to know how your system is performing.

  * **Regression detection across changes.** Every prompt tweak, model upgrade, retrieval pipeline change, or system prompt revision can subtly alter output quality. Evals catch regressions before your users do.

  * **Turning prompt engineering from guesswork into engineering.** Without evals, prompt changes are vibes-based. With evals, you have data showing whether a change actually improved outputs across your full range of use cases.

  * **Trust and stakeholder confidence.** Showing stakeholders quantified confidence levels - and trends over time - builds far more trust than anecdotal "it seems to work well." Be upfront that evals provide confidence, not certainty. A stakeholder who understands they are looking at "92% confidence across 200 test cases, up from 78% last month" will make better decisions than one who mistakenly believes the system is guaranteed to be correct.

  * **Safety and harm prevention.** Evals can systematically test for harmful, biased, or inappropriate outputs rather than hoping they do not occur.

  * **Regulatory and governance readiness.** Frameworks like the [NIST AI RMF](https://airc.nist.gov/airmf-resources/playbook/measure/) (MEASURE function) and the [EU AI Act](https://artificialintelligenceact.eu/) require demonstrable evidence that AI systems are monitored and measured. Evals provide that evidence.

  * **Cost optimization (and cost awareness).** Running the same eval suite against different models on your specific tasks lets you make data-driven decisions about which model gives you the best quality-to-cost ratio. But be aware that evals themselves can be expensive. Model-graded evals (LLM-as-judge) use a second, more capable LLM to review the output of your first one, and that review [can cost more than running the application itself](https://www.cio.com/article/4123029/ai-agent-evaluations-the-hidden-cost-of-deployment.html). This is exactly why the eval pyramid (see Step 3) matters: start with cheap, deterministic, code-based checks that catch mechanical problems for nearly zero cost, and reserve expensive model-graded and human evals for the judgments that actually require them.
howTo: >-
  ### Step 1: Define what "good" looks like


  Work with domain experts to create a rubric with 3–5 evaluation criteria.
  For each criterion, document examples of good, acceptable, and poor outputs.
  This rubric is the foundation everything else builds on - without it, evals
  produce inconsistent, unreproducible results.


  ### Step 2: Build a representative dataset


  Start with 20-50 test cases that cover common scenarios, edge cases,
  adversarial inputs, and historical failures. It is perfectly reasonable to
  start with synthetic data - either model-generated examples or real data that
  has been altered to suit your needs. You do not need production traffic to get
  started. Grow the dataset over time from production data and
  [Human-in-the-Loop](/practice/human-in-the-loop/) reviews. A small,
  well-curated dataset is more valuable than a large, sloppy one.


  ### Step 3: Prioritize evals by the eval pyramid


  Because eval costs can spiral quickly (see "Cost optimization" above), the
  order in which you build your eval suite matters. Like the
  [testing pyramid](https://martinfowler.com/bliki/TestPyramid.html), start with
  high-volume, low-cost evals at the base and work upward. The base layer is
  deterministic and nearly free. Each layer above adds nuance but also adds cost.
  The pyramid ensures you are not paying LLM-as-judge prices to catch problems
  that a simple format check would have caught for free:


  * **Base - Automated / code-based evals:** Format checks, schema validation, length constraints, forbidden content filters. Fast, cheap, and deterministic. Run on every change.

  * **Middle - Model-graded evals (LLM-as-judge):** Use a language model to score outputs against your rubric. The judge model should be more capable than the model being evaluated - you would not ask a junior developer to review a senior's work. More nuanced than code checks but slower and costlier. Useful for evaluating coherence, relevance, and completeness.

  * **Top - Human evals:** Domain experts review sampled outputs. The gold standard for quality assessment, but expensive and slow. Use human evals to calibrate and validate your automated and model-graded evals.

  * **Separate track - Adversarial evals (red-teaming):** For safety-critical applications, systematically test for jailbreaks, harmful outputs, and policy violations.

  * Start at the base and expand upward. Do not jump to expensive human evals before you have automated the mechanical checks.


  ### Step 4: Integrate evals into your dev workflow


  Run evals locally during prompt engineering for fast feedback. Add evals to
  your [Continuous Integration](/practice/continuous-integration/) pipeline so
  that prompt, model, or retrieval changes are automatically evaluated on every
  change. Define quality thresholds and treat them the same way you treat
  failing tests - the build is red until the issue is fixed. This is the
  same principle behind [Test Driven Development](/practice/test-driven-development/)
  applied to AI systems. A companion practice, Eval-Driven Development, applies
  TDD's red-green-refactor cycle directly to evals.


  ### Step 5: Continuously monitor production with online evals


  Run evals on sampled live traffic to detect drift and regressions in real
  time. Offline evals validate before deployment; online evals verify that things are
  working in the wild. When online eval scores diverge from offline scores, it
  is a signal that your eval dataset no longer represents real-world usage.


  ### Step 6: Close the loop with user feedback


  Leverage both explicit and implicit user feedback as a source of new eval
  cases. Explicit feedback includes thumbs up/down, corrections, escalations,
  and complaints. Implicit feedback includes behavior signals like users
  rephrasing a question, abandoning a flow, copying an answer versus ignoring
  it, or escalating to a human. **Bucket feedback to find patterns:**
  individual complaints are noise; clusters of similar feedback reveal the true
  pattern worth evaluating. Once you identify a pattern, codify it as a new eval
  test case. This is the MLOps lifecycle applied to generative AI: users
  surface issues, patterns emerge, new evals catch regressions, and quality
  improves.


  ### Step 7: Review, report, and iterate


  Track eval scores as trends over time, not just point-in-time snapshots.
  Share results with stakeholders to maintain visibility and trust. Treat your
  eval suite as a living artifact - regularly refresh datasets with new cases
  from production and user feedback to prevent staleness.


  ### Anti-patterns to avoid


  * **Eval-washing:** Running evals but ignoring the results. If scores do not inform decisions, the evals are theater.

  * **Over-relying on a single eval type:** Use the pyramid. Code checks alone miss nuance; human evals alone do not scale.

  * **Teaching to the test:** Over-optimizing for a narrow eval dataset until scores look great but real-world quality has not improved. Refresh your dataset regularly.

  * **Evaluating without a rubric:** Leads to inconsistent, unreproducible results where different reviewers or judge models score the same output differently.

  * **Ignoring LLM judge calibration:** Model-graded evals have known biases - verbosity bias, position bias, and self-preference bias. Always use a more capable model as your judge than the one producing the outputs, and calibrate judge models against human ratings.

  * **Stale eval datasets:** Never updating your eval dataset as the product evolves creates blind spots where new failure modes go undetected.

  * **Expecting 100% accuracy:** Evals are not tests. No eval or combination of evals will tell you the system is perfect. Leaders who expect pass/fail certainty will either over-trust high scores or dismiss the practice entirely when it cannot deliver guarantees. Set expectations early: evals measure confidence, and confidence is what you use to make decisions.

  * **Skipping the feedback loop:** Not turning user feedback and production failures into new eval cases means your eval suite gradually loses relevance.
resources:
  - link: https://hamel.dev/blog/posts/evals/
    linkType: web
    description: "Hamel Husain - Your AI Product Needs Evals"
  - link: https://airc.nist.gov/airmf-resources/playbook/measure/
    linkType: web
    description: "NIST AI RMF Playbook - MEASURE function covers AI system evaluation"
  - link: https://www.anthropic.com/research/evaluating-ai-systems
    linkType: web
    description: "Anthropic - Evaluating AI Systems"
  - link: https://www.dwarkesh.com/p/andrej-karpathy
    linkType: web
    description: "Andrej Karpathy on the Dwarkesh Podcast - 'the march of nines' and why each additional nine of reliability requires as much work as all previous nines combined"
  - link: https://www.cio.com/article/4123029/ai-agent-evaluations-the-hidden-cost-of-deployment.html
    linkType: web
    description: "CIO - AI Agent Evaluations: The Hidden Cost of Deployment"
  - link: https://openpracticelibrary.com/practice/human-in-the-loop/
    linkType: web
    description: "Human-in-the-Loop - human evals and HITL reviews feed eval datasets"
  - link: https://openpracticelibrary.com/practice/test-automation/
    linkType: web
    description: "Test Automation - evals are the AI analog of automated tests"
  - link: https://openpracticelibrary.com/practice/split-testing-a-b-testing/
    linkType: web
    description: "Split Testing / A/B Testing - contrast with evals for measuring quality"
people: 2+
difficulty: moderate
participants:
  - Developers
  - Data Scientists
  - Product Owners
  - The Team
area: foundation-technical
time: Ongoing
---
