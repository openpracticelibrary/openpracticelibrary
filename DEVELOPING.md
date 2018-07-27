# Developing

Open Practice Library is built with [Hugo](http://gohugo.io/) and the [Casper theme](https://github.com/vjeantet/hugo-theme-casper). To run it locally:

1. Check out this repo.
2. [Install Hugo](https://gohugo.io/getting-started/installing/).
3. [Install Node.js](https://nodejs.org/en/download/).
4. Run `git submodule update --init --recursive` to download the theme.
5. Navigate to the top level of the repo.
6. Run `npm install` to install the npm packages.
7. Run `npx grunt-cli lunr-index` to build the search index.
8. Run `hugo server` to run the site locally.

Alternately, you can run `hugo server -D` to preview drafts.

## Deploying

When changes are merged to master, the `build.sh` script will run, and the site will be deployed to https://openpracticelibrary.com. The [build log](https://app.netlify.com/sites/openpracticelibrary/deploys?filter=master) shows the status of each build.
