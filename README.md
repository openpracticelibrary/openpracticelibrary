# Open Practice Library

## About

Red Hat Open Innovation Labs team is creating an open practice library! To learn more, see [about.md](content/page/about.md).

## Adding Content

To add content: fork this repository, add your content, and then send us a pull request.

Content is formatted in [Markdown](http://commonmark.org/help/) with [YAML front matter](https://gohugo.io/content-management/front-matter/).

### Taxonomies

Journeys, Stages, Waypoints and Routes are all stored as [taxonomies](https://gohugo.io/content-management/taxonomies/). Taxonomies allow us to link different types of content to one another. They work a little like tags in WordPress and other blogging systems.

A few useful tips:
- Content for each taxonomy item is stored in an _index.md file. For example: `content/routes/event-storming/_index.md`.
- Links to taxonomy items are stored in an item's front matter. For example: `stages: ['discovery']`
- Taxonomy items only appear if something links to them. If `content/routes/foo/_index.md` exists but nothing links to it, the "foo" route _will not_ appear on the website.
- A taxonomy item that's linked to somewhere will appear, even if its `_index.md` does not exist. For example, if  `routes: ['bar']` appears in a Waypoint but `content/routes/bar/_index.md` does not exist, the "bar" Waypoint _will_ appear on the website.

### Pages

Create a new markdown file in `/content/page`. If you have hugo installed, you can run `hugo new page/my_new_page.md`.

To display the page in the site menu, include `menu: main` in the front matter at the top of the file.

### Drafts

Content is created in draft status by default. To publish, set `draft: false` in the front matter or run `hugo undraft`. For example, typing `hugo undraft page/my_new_page.md` will publish the corresponding page.

### Style

These style guidelines apply to the Markdown files in the `/content` directory.

- Use hyphens, not underscores, to separate parts of a filename. (The filenames are turned into URLs when the site is built.)
- Where possible, avoid putting HTML in Markdown. Exception: the `<sup>` tag and anchors, which we're using for footnotes.
- When linking to external sites, place the link into an "external references" section, and use a footnote anchor to point to the link.
- Don't put the document's title into a heading (`# My Title`). Instead, just include the title in the document's front matter (`title: my title`).

## Developing

Open Practice Library is built with [Hugo](http://gohugo.io/) and the [Minimo theme](https://minimo.netlify.com/). To run it locally:

1. Check out this repo.
2. [Install Hugo](https://gohugo.io/getting-started/installing/).
3. Run `git submodule update --init --recursive` to download the theme.
4. Navigate to the top level of the repo.
5. Run `hugo server` to run the site locally.

Alternately, you can run `hugo server -D` to preview drafts.

### Deploying

The site is [published to GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch) using a `docs` directory on the master branch.

To push changes to GitHub pages:

1. Delete the `docs` directory. (Hugo won't delete old files by default.)
2. Run `hugo` (without any parameters) to rebuild the `docs` directory.
3. Add, commit, and push these changes.
4. Create a pull request.
5. Merge to master, or ask someone else to merge to master.

Once the changes are merged up, the new content will be deployed automatically.
