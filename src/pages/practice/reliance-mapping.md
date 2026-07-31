---
templateKey: practice-page
title: Reliance Mapping
subtitle: A fast, visual planning method for sequencing outcomes based on how
  they depend on one another. Take your agreed value outcomes and turn them into
  a dependency-aware, colour-coded map that the whole room can read.
date: 2026-07-31T12:32:00.000Z
authors:
  - logananubis
tags:
  - validate
  - ideate
  - methods
mobiusTag: discovery
icon: /images/reliance-map-opl-mock-up.png
whatIs: >-
  

  Reliance Mapping is a **fast, visual planning method** used to sequence outcomes based on how they depend on one another. You take the agreed value outcomes from your planning or discovery process, place them on a shared canvas, and draw dependency lines between them to show what relies on what.


  Originally created in Red Hat, the practice was born out of a need to simplify conversations when building roadmaps and next steps — something you can run through quickly, with minimal explanation. Traditional tools like Impact Mapping have a high learning curve for both the audience and the facilitator. Reliance Mapping strips that back, focusing on **speed, clarity, and ease of use** so the conversation moves forward rather than stalling on methodology.


  The practice is primarily used in remote deliveries where you need multiple distributed teams in one setting, but translates easily to physical delivery with sticky notes and a whiteboard.


  > **Not tied to any single framework.** This guide references operating models as one example of how to feed items into the map, but Reliance Mapping works with any planning scenario where workstreams are interdependent. If you already have agreed outcomes from your own discovery process — bring them straight in.


  ### Scope categories


  Items are classified using a traffic-light system to represent agreed scope:


  - 🟢 **In Scope — MVP** — Items the team has committed to delivering. These are non-negotiable for the current phase.

  - 🟡 **Stretch Scope — v2.0** — Items the team aspires to deliver if capacity and dependencies allow. Planned but not guaranteed.

  - ⚪ **Out of Scope — Advanced** — Items explicitly deferred. Visible on the map to acknowledge the gap and prevent scope creep.


  ### Dependency lines


  Items are connected with dependency lines that carry specific meaning:


  - **Hard dependency** *(solid line)* — A must complete before B can start. This is a blocking relationship.

  - **Soft dependency** *(dotted line)* — A must *start* before B, but doesn't need to finish. Work can overlap.

  - **Parallel** *(dashed line)* — No dependency. Work can proceed simultaneously with independent teams.


  When an item is large enough to warrant its own breakdown, it is flagged as **"needs its own initiative"** and linked to a separate sub-map where the team can decompose it further without cluttering the main view.


  ### What you walk away with


  - ✓ A realistic expectation around risks and delays based on dependencies within the sequence

  - ✓ A shared understanding of sequencing across the team

  - ✓ A shared understanding of the limitations of the proposed delivery based on scope

  - ✓ A clear view forward from strategy to execution

  - ✓ A clear understanding of responsibilities between teams

  - ✓ Uncovered hidden dependencies that the conversation itself surfaces


  > **The biggest value** isn't just the finished map — it's the conversation required to build it. The process of drawing lines and debating dependencies naturally uncovers what your customer may *want* vs. what they actually *need*.
whyDo: >-
  

  - **Traditional frameworks are often too complex** for time-limited workshop environments. Reliance Mapping is simple to explain and quick to execute.

  - **Drives fast alignment and consensus** through the conversations required to build the map. The exercise forces implicit knowledge about dependencies onto a shared surface.

  - **Maps dependencies into clear roadmaps.** Tactical activities become visible execution cycles, not abstract strategy documents.

  - **Aligns understanding of scope.** The team can see at a glance what's in scope, what's a stretch, and what's been deferred — and how those categories affect each other through dependencies.

  - **Clarifies responsibilities.** When dependencies cross teams, the map makes it obvious where collaboration is needed to satisfy them — and who owns what.

  - **Prevents optimistic parallelism.** Teams often assume work can run in parallel. The map makes blocking relationships visible before they stall delivery weeks later.

  - **Creates a living artefact.** Unlike a static priority list, the map can be revisited. Items shift scope, new dependencies emerge, sub-maps get created — the artefact evolves with the programme.
howTo: >-
  

  ### Before you map


  Before you can build the map, you need outcomes to map. The journey below uses simple practices from the [Open Practice Library](https://openpracticelibrary.com/) so that even new facilitators can move the needle.


  > **These steps are guidance, not rigid.** If you already have agreed outcomes from your own discovery method — skip ahead to the mapping exercise. Often your customer will know 80% of what they need; you may only need to figure out the remaining 20%.


  1. **Run a high-level strategy discussion** — executive intent across 3, 6, 12 months. Note this down.

  2. **Identify stakeholders and teams involved** — this can be a RACI or a topological map, commonly tagged with who is a champion and who is enthusiastic toward the effort.

  3. **Clarify high-value outcomes** for the initiative.

  4. **Understand scope constraints** based on time and team capacity.

  5. **Expand the outcomes** — e.g. using [5 Whys](https://openpracticelibrary.com/practice/5-whys/) or an [Opportunity Solution Tree](https://openpracticelibrary.com/practice/opportunity-solution-tree/).

  6. **Refine and prioritise** the items you will map — e.g. using [Priority Sliders](https://openpracticelibrary.com/practice/priority-sliders/).


  If these are already known — move directly onto the mapping exercise. If more clarity is required around outcomes, run an outcome mapping exercise with the team first.


  > **The mapping exercise is just as much about the output as it is about encouraging the conversation.** Pulling stakeholders into an environment where they are all working to build the singular output (the map) should do 70% of the work of facilitating the discussion. The facilitator then guides the topic forward.


  ### Creating the Reliance Map


  Create a **left-to-right and top-to-bottom** linear map showing dependencies between outcomes and activities. You can use any surface that suits your team — a whiteboard with sticky notes, Miro, draw.io, or the [OMA Reliance Mapping tool](https://ansible-ops-model.github.io/oma-workshop/reliance-map/) which is purpose-built for this practice and supports importing items from CSV, Markdown, or an OMA workshop snapshot.


  1. **Add your items to the canvas.** Bring items in from an existing source or add them manually one by one. Each item gets a label, a scope classification, and an optional description.

  2. **Classify scope.** Assign each item to In Scope (MVP), Stretch (v2.0), or Out of Scope (Advanced). If you're working with an operating model, this mapping may already be done. If not, have the group agree on classification together — the conversation itself is valuable.

  3. **Arrange spatially.** Drag items to group related work. Some teams cluster by workstream, others by delivery phase. You can group items by scope colour and use numbering to show an agreed priority ordering. There's no fixed layout — the team decides what makes the most sense.

  4. **Draw dependency lines.** Hover over a card to reveal connection handles on each edge. Drag from a handle to another card to create a connection. The default is a hard dependency — click the line to change its type (solid, dotted, dashed) or add a note explaining the relationship.

  5. **Identify bottlenecks.** Look for items with many inbound hard-dependency lines — these are critical-path items. If they slip, everything downstream slips. Discuss whether the team needs to de-risk them, start them earlier, or break them down further.

  6. **Flag sub-initiatives.** Large items that need their own granular breakdown should be marked "Needs its own initiative." Give it a linked map name and click the badge to open a separate sub-map. Having several initiatives mapped digitally can help present roadmap complexities more clearly.

  7. **Tag teams and phases.** Assign teams to items to clarify ownership. Use phases to group work into delivery milestones. Multiple teams can be assigned to a single item when collaboration is required.

  8. **Review and export.** Walk the map as a group. Follow the dependency chains from left to right and narrate the delivery sequence. Export as PNG for stakeholder decks, as JSON to continue refining later, or import into tools like Miro or draw.io.


  ### After the map


  Once mapped, you have the opportunity to convert the output into a **proposal or statement of work**. The mapped items should correspond to opportunities in a solution tree or segments in an operating model. The child items can represent EPICs, which can then be distilled further into stories and tasks during sprint planning.


  A Reliance Map can be created at any level, but should not be overused. Primarily, it exists to establish an **initial high-level view** of how an initiative can be actioned and ordered — easily digestible regardless of your level within the business.


  This mapping journey acts as the **bridge between strategy and delivery**. All linked practices in this guide are used to encourage conversation and identify blind spots.


  ### 💡 Facilitation tips


  - **Two facilitators is better than one.** One leads while the other takes notes and reads the room. They can catch each other if one stumbles and bounce off each other to encourage conversation.

  - **Start rough, refine later.** Don't agonise over exact placement in the first pass. Get all items on the canvas, then rearrange as dependencies become clearer.

  - **Timebox the dependency drawing.** Give the group 15–20 minutes to draw lines in pairs or small groups, then review together. This prevents the loudest voice from dominating the dependency narrative.

  - **Challenge every hard dependency.** Teams default to "hard" when they're uncertain. Ask: *"Could B start with partial output from A?"* If yes, it's a soft dependency, and that opens up parallelism.

  - **Use notes on lines sparingly.** Only annotate a connection when the *why* behind the dependency isn't obvious. "Must complete security audit" is useful; "because it comes first" is not.

  - **Keep Out of Scope items visible.** They're on the map to prevent scope creep and acknowledge known gaps — removing them creates a false sense of completeness.

  - **Revisit with a break.** For the best outcome, do the initial mapping then come back after a break (or the next day) to finalise. Fresh eyes catch missed dependencies.

  - **Remote facilitation works well.** Share the screen and have one person drive the tool while the group calls out dependencies. Alternatively, export the JSON and have each sub-team add their dependencies asynchronously, then merge in a review session.


  ---


  ## 🔗 Links to help


  - [OMA Workshop & Reliance Mapping Tool](https://ansible-ops-model.github.io/oma-workshop/reliance-map/) — the interactive tool for running this practice digitally

  - [Opportunity Solution Tree](https://openpracticelibrary.com/practice/opportunity-solution-tree/) — map solutions back to desired outcomes; useful for expanding outcomes before mapping

  - [Priority Sliders](https://openpracticelibrary.com/practice/priority-sliders/) — rank and refine priorities before mapping

  - [5 Whys](https://openpracticelibrary.com/practice/five-whys-5-whys/) — dig into root causes and expand outcomes before drawing dependency lines

  - [Impact Mapping](https://openpracticelibrary.com/practice/impact-mapping/) — connect goals to deliverables through actors and impacts; Reliance Mapping was created as a faster, simpler alternative

  - [Value Slicing](https://openpracticelibrary.com/practice/user-story-mapping/) — break large items into thin, deliverable slices when a bottleneck item is too big

  - [Value Stream Mapping](https://openpracticelibrary.com/practice/vsm-and-mbpm/) — visualise end-to-end flow to find waste; a natural follow-up once the Reliance Map has revealed the critical path


  ---


  ## 📋 At a glance


  - **No. of people required** — 5–30 (keep it to those most actively engaged)

  - **Time length** — 2 hours (or 2 × 1 hr sessions over a couple of days)

  - **Facilitation difficulty** — Moderate — the practice is simple but guiding dependency conversations requires confidence

  - **Expected participants** — Facilitator(s) (two recommended), Product Owner, Project Sponsor (technical and business), Architects / Engineers, anyone who will be a primary persona tasked with an item on the map


  ### 🖥️ Materials — digital


  - The OMA Reliance Mapping tool, or a whiteboard tool like Miro, Draw.io

  - Screen sharing for the group

  - One person driving, group calling out


  ### 📝 Materials — physical


  - Coloured sticky notes (green, amber, red — or any three colours)

  - A whiteboard or large surface

  - Whiteboard markers

  - Markers for stickies

  - Stickers for team tagging (optional)
people: 5-30
time: 60-120
difficulty: easy
participants:
  - Facilitator(s) (two recommended)
  - Product Owner
  - Project Sponsor (technical and business)
  - Architects / Engineers
  - anyone who will be a primary persona tasked with an item on the map
---
