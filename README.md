# Open Practice Library

## About

The [Open Practice Library](https://rht-labs.github.io/practice-library/) provides information about practices and ideas that we use here at Red Hat Open Innovation Labs. To learn more about the philosophy behind the library, see [about.md](content/page/about.md).

## Adding Content

To add content: fork this repository, add your content, and then send us a pull request.

Content is formatted in [Markdown](http://commonmark.org/help/) with [YAML front matter](https://gohugo.io/content-management/front-matter/).

## Practices

Create a new markdown file in `/content/practices`. If you have hugo installed, you can run `hugo new practices/my_new_practice.md`.

## Waypoints

Create a new markdown file in `/content/waypoints`. If you have hugo installed, you can run `hugo new waypoints/my_new_waypoint.md`.

## Stages
Create a new markdown file in `/content/stages`. If you have hugo installed, you can run `hugo new stages/my_new_stage.md`.

## Routes
Edit one of the [Stage](/stages) pages.

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
