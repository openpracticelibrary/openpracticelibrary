# Contributing

Welcome! Thank you for taking the time to contribute. This project relies on an active and involved community, and we really appreciate your support.

## Code of Conduct

This project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). All participants are expected to uphold this code. Violations of the code can be
reported by contacting the community team at [info@openpracticelibrary.com](mailto:info@openpracticelibrary.com).

## How to contribute

Fork the repo, add or change markdown files, and create a pull request. You can make these changes via the GitHub web interface, the command line, or a git client of your choice.

Once you create a pull request, your changes will be built in a deploy preview. That way, you can see your changes without having to run a local development environment. To display the link to this preview, click "show all checks" at the bottom of a pull request.

## What to contribute

### A practice _must_ be

- **Empowering** - It helps teams discover and deliver iteratively.
- **Concise** - It can be read in a few minutes.
- **Agnostic** - It doesn't require the team to follow a specific project management framework.
- **Proven** - It has been tested in the real world by the practice author.

### A practice _should_ be

- **Approachable** - It can be understood by someone who's not an expert in project management.
- **Visual** - It includes images and videos.
- **Accessible** - It includes alt text for images and captions for videos.
- **Novel** - It isn't already covered by another practice.
- **Deep** - It provides links to related resources, examples, and other materials for readers who want to explore further.

## Gathering Feedback

As a community, we strive to provide kind and constructive feedback on your PR.

If a pull request doesn't meet the "must be" guidelines, we may ask that the practice be updated before it's merged. If a pull request doesn't meet the "should be" guidelines, we may merge the pull request and add an issue for future improvements to the practice.

Again, thank you so much for your interest and support! We look forward to enhancing the Open Practice Library.

## Style

These style guidelines apply to the Markdown files in the `/src/pages` directory.

- Use hyphens, not underscores, to separate parts of a filename. (The filenames are turned into URLs when the site is built.)
- Avoid putting HTML in Markdown. This is unsafe, and the site will not render your content.
- Don't put the document's title into a heading (`# My Title`). Instead, just include the title in the document's front matter (`title: my title`).
- We are using front matter to create the entire document. Look at other documents if you need help with the schema, or you can use the Netlify CMS, which will give you the fields to fill in.

## If Using Github to Contribute

New Content is created in draft status by default. To publish, set `draft: false` in the front matter or run `hugo undraft`. For example, typing `hugo undraft page/my_new_page.md` will publish the corresponding page.
