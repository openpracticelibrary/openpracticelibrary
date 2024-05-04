---
templateKey: practice-page
title: Docs As Code
subtitle: Have the whole team deliver current, useful, documentation using the
  minimum of effort.
date: 2021-07-22T02:07:51.398Z
authors:
  - alecthegeek
tags:
  - methods
mobiusTag: delivery
icon: /images/treat-docs-like-code.png
whatIs: >-
  Docs As Code (also known as “Docs Like Code”) is a popular approach to
  delivering documentation for software projects.


  There are three common themes that you can expect to see.


  1. Adopt an “[agile](https://en.wikipedia.org/wiki/Agile_software_development)” approach to content creation

  2. The whole team is responsible for content, not just the technical writers

  3. A culture of adaptation and improvement to both content, and  processes, over time.


  Docs As Code image copyright Anne Gentle. Released under an MIT license.
whyDo: >
  * Deliver valuable documentation faster with higher quality, because there are
  multiple voices working collaboratively

  * Avoid documentation being a bottleneck in the release cycle

  * Release technical writers to deliver higher value content (information architecture, customer experience, ....)

  * Remove need for proprietary technical writing and publication tools.
howTo: >-
  Use developer tools, and process, to create and deliver content. Specifically:


  1. Text based file content with embedded, lightweight, markup tags. Examples include [Markdown](https://en.wikipedia.org/wiki/Markdown), [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText), [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc)


  2. Developer based workflows. For example:

     1. Version Control using tools, such as [Git](https://en.wikipedia.org/wiki/Git)
     2. Change control driven though bugs and feature requests tickets
     3. Content reviews and merges

  3. Machine generated content. For example:

     1. Create diagrams from text using tools like [Mermaid.js](https://mermaid.js.org)
        or [PlantUML](https://plantuml.com)
     3. Add machine generated text by running CLI programs when a document is published
        (e.g. to insert current software version identifiers or other content)
     4. Use text processing tools to extract and use text from other files
        (e.g. fragments of released source code)

  4. Automated testing and verification. For example use:

     1. [Vale](https://vale.sh) to validate
        your written text against machine readable style guides
     2. [Spectral](https://stoplight.io/open-source/spectral) or
        [Redocly](https://redocly.com/docs/cli/commands/lint/) to
        validate your Open API Specifition files

  5. [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery), using static site generators (for example [Sphinx](https://www.sphinx-doc.org/) or [Hugo](https://gohugo.io/)). Note: This process is optional
mediaGallery:
  - link: https://www.doctave.com/assets/img/docs-as-code-flow.png
resources:
  - link: https://www.docslikecode.com/
    linkType: web
    description: Website related to the book Docs Like Code
  - link: https://www.writethedocs.org/guide/docs-as-code/
    linkType: web
    description: Docs as Code section on Write the Docs
people: 1+
difficulty: easy
participants: []
---
