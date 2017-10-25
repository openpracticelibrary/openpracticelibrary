# Open Practice Library

## About

Red Hat Open Innovation Labs team is creating an open practice library! To learn more, see [about.md](content/page/about.md).

## Adding Content

To add content: fork this repository, add your content, and then send us a pull request.

Content is formatted in [Markdown](http://commonmark.org/help/) with [YAML front matter](https://gohugo.io/content-management/front-matter/).

### Techniques

Create a new markdown file in `/content/technique`. If you have hugo installed, you can run `hugo new technique/my_new_technique.md`.

### Pages

Create a new markdown file in `/content/page`. If you have hugo installed, you can run `hugo new page/my_new_page.md`.

To display the page in the site menu, include `menu: main` in the front matter at the top of the file.

### Drafts

Content is created in draft status by default. To publish, set `draft: false` in the front matter or run `hugo undraft` - for example, `hugo undraft technique/foo.md`.

## Developing

Open Practice Library is built with [Hugo](http://gohugo.io/) and the [Minimo theme](https://minimo.netlify.com/). To run it locally:

1. Check out this repo.
2. [Install Hugo](https://gohugo.io/getting-started/installing/).
3. Download the theme as a git submodule
> git submodule update --init --recursive
4. Run 'hugo' in the top level folder
5. Run `hugo server` to to run the site locally.

Alternately, you can run `hugo server -D` to preview drafts.

### Deploying

The site is [published to GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch) using a `docs` directory on the master branch.

To push changes to GitHub pages:

1. Delete the `docs` directory. (Hugo won't delete old files by default.)
2. Run `hugo` (without any parameters) to build the site.
3. Add, commit, and push these changes.
4. Create a pull request.
5. Merge to master, or ask someone else to merge to master.

Once the changes are merged up, the new content will be deployed automatically.
