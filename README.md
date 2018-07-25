# Open Practice Library

## About

The [Open Practice Library](https://openpracticelibrary.com) provides information about practices and ideas that empower teams to collaborate and deliver iteratively. To learn more about the philosophy behind the library, see [about.md](content/page/about.md).

To get started contributing content, see the [Contributing](CONTRIBUTING.md) guide.

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

### Deploying

When changes are merged to master, the `build.sh` script will run, and the site will be deployed to https://openpracticelibrary.com. The site will then be deployed. The [build log] shows the status of each build.
