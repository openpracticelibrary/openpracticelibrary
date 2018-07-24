# Open Practice Library

## About

The [Open Practice Library](https://openpracticelibrary.netlify.com/) provides information about practices and ideas that empower teams to collaborate and deliver iteratively. To learn more about the philosophy behind the library, see [about.md](content/page/about.md).

### Adding content

Fork the repo, add or change markdown files, and create a pull request. Your changes will be built in a preview environment and linked to from the pull request.

## Practices

Create a new markdown file in `/content/practices`.

## Pages

Create a new markdown file in `/content/pages`.

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
3. [Install Node.js](https://nodejs.org/en/download/).
4. Run `git submodule update --init --recursive` to download the theme.
5. Navigate to the top level of the repo.
6. Run `npm install` to install the npm packages.
7. Run `npx grunt-cli lunr-index` to build the search index.
8. Run `hugo server` to run the site locally.

Alternately, you can run `hugo server -D` to preview drafts.

## Developing with Docker

Note, npm and search are not working with this approach but you do have a single one line way to preview your local work on pages without installing lots of tools on your local machine.

1. Check out this repo.
1. Run `git submodule update --init --recursive` to download the theme.
1. Run `docker run --rm -it -v $(pwd):/src -p 1313:1313 klakegg/hugo:0.44 server`

### Deploying

When changes are merged to master, the `build.sh` script will run, and the site will be deployed to https://openpracticelibrary.netlify.com. The site will then be deployed. The [build log] shows the status of each build.
