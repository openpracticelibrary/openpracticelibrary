# Developing

## How we work together

We're using the "optimistic merging" strategy to make contributing simple and enjoyable.

1. To propose a change, log an issue.
2. Seek consensus on the value of that change.
  - Give the community a day or two to provide feedback on your issue.
  - If the feedback is mostly positive, move forward.
  - If you don't get any feedback after a day or two, move forward.
3. Create a pull request to make the change described in the issue.
4. The maintainer review the PR to determine whether it is a "correct patch". That means the PR:
  - Solves one "identified and agreed problem"
  - Clearly explains the problem and the proposed solution
  - Builds without errors, warnings, or test failures
  - Does not break our Code of Conduct  
5. If the PR is a "correct patch", the maintainer merges the PR. If not, the maintainer provides feedback.

If the person reviewing the PR has feedback on a change that is a "correct patch", he or she will merge the PR and include that feedback in a new issue.

To learn more, see [Why Optimistic Merging Works Better](http://hintjens.com/blog:106) and [Collective Code Construction Contract (C4)](https://rfc.zeromq.org/spec:42/C4/) from Pieter Hintjens, who coined the term "optimistic merging". The Open Practice Library community has discussed this way of working in #208.

This workflow is still being refined and improved. If you have feedback, feel free to [get in touch via Gitter](https://gitter.im/openpracticelibrary/).

## Running the site locally
Open Practice Library is built with [Hugo](http://gohugo.io/) and the [Casper theme](https://github.com/vjeantet/hugo-theme-casper).

### Quick start
These steps don't build card images or a search index, but they'll get the site up and running quickly. These steps should work on any platform.

1. [Install Hugo](https://gohugo.io/getting-started/installing/).
2. Check out this repo.
3. Navigate to the directory where you checked out this repo.
4. Run `git submodule update --init --recursive` to download the theme.
5. Run `hugo serve` to serve the site.

### Full build
These steps build the whole site, including card images and the search index. They are a bit more involved and require macOS or Linux. We're working on making this better - stay tuned!!

1. [Install Hugo](https://gohugo.io/getting-started/installing/).
2. [Install Node.js](https://nodejs.org/en/download/).
3. Check out this repo.
4. Navigate to the directory where you checked out this repo.
5. Install ImageMagick:
  - macOS: `brew install imagemagick`
  - Fedora/CentOS: `dnf install imagemagick` or `yum install imagemagick`
  - Ubuntu: `apt-get install imagemagick`
6. Run `git submodule update --init --recursive` to download the theme.
7. Run `chmod +x build.sh` to make the build script executable.
8. Run `./build.sh` to build the site.
9. Run `hugo serve` to serve the site.

## Deploying

When changes are merged to master, the `build.sh` script will run, and the site will be deployed to https://openpracticelibrary.com. The [build log](https://app.netlify.com/sites/openpracticelibrary/deploys?filter=master) shows the status of each build.
