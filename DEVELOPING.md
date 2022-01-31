# Developing

## How we work together

We're using the "optimistic merging" strategy to make contributing simple and enjoyable.

1. To propose a change, log an issue.
2. Seek consensus on the value of that change.
   - Give the community a day or two to provide feedback on your issue.
   - If the feedback is mostly positive, move forward.
   - If you don't get any feedback after a day or two, move forward.
3. Create a pull request to make the change described in the issue.
4. The maintainers review the PR to determine whether it is a "correct patch". That means the PR:
  - Solves one "identified and agreed problem"
  - Clearly explains the problem and the proposed solution
  - Builds without errors, warnings, or test failures
  - Does not break our Code of Conduct  
5. If the PR is a "correct patch", the maintainer merges the PR. If not, the maintainer provides feedback.

If the person reviewing the PR has feedback on a change that is a "correct patch", he or she will merge the PR and include that feedback in a new issue.

To learn more, see [Why Optimistic Merging Works Better](http://hintjens.com/blog:106) and [Collective Code Construction Contract (C4)](https://rfc.zeromq.org/spec:42/C4/) from Pieter Hintjens, who coined the term "optimistic merging". The Open Practice Library community has discussed this way of working in #208.

This workflow is still being refined and improved. If you have feedback, feel free to [get in touch via Gitter](https://gitter.im/openpracticelibrary/).

## Running the site locally
Open Practice Library is built with [Gatsby](https://gatsbyjs.org/) and the [Material UI](https://material-ui.com/).

### Quick start
These steps should work on any platform.

1. [Install Node & npm](https://nodejs.org/en/download/).
2. Run `npm install -g gatsby-cli` to install Gatsby CLI
3. Check out this repo.
4. Navigate to the directory where you checked out this repo.
5. Run `npm install` to install dependencies.
6. Run `npx netlify-cms-proxy-server` to start a local cms proxy server.
7. Run `gatsby develop` in a new terminal to serve the site.

## Deploying

When changes are merged to master, the `npm run build` script will run, and the site will be deployed to https://openpracticelibrary.com. The [build log](https://app.netlify.com/sites/openpracticelibrary/deploys?filter=master) shows the status of each build.
