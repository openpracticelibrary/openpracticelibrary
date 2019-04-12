### Netlify

This is a dump of some of the things we did to setup practice libaray on my github working along side netlify

1. created `static/admin` folder
2. added 2 files `index.html` and `config.toml`

#### github auth
3. setup the backend to connect using `github`.
4. On [github repo created](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider) a new OAuth app and held the secret and client id for the next step
5. on netlify, created a new app. 
6. On new app go to `settings/Access Control` and add a GitHub OAuth with the secret and client id from above step
7. Add script tag's login widget to `admin/index.html` head and also to the end of the `<body>` in the generated doc site. NOTE - not 100% sure if this is needed or what it does. Think it's the dialog for the login page, but dunno if we need it on the generated site's html.

#### git-gateway auth
1. setup the backend to connect using `git-gateway` in `static/admin/config.yml`.
2. on netlify, created a new app. 
3. On new app go to `settings/Identity` and add a GitHub external provider
4. CLICK  THE ENABLE GATEWAY BUTTON !!!
5. Add script tag's login widget to `admin/index.html` head and also to the end of the `<body>` in the generated doc site. NOTE - not 100% sure if this is needed or what it does. Think it's the dialog for the login page, but dunno if we need it on the generated site's html.
6.  build and deploy - created a `netlify.toml` config file
7. added some build env vars specific for prod and non-prod to use the latest version of hugo.
8. added a `build.sh` file to be executed by the build system and wired it to the `netlify.toml` config. This gives a hook for running our builds / tests etc.

#### Developing locally

The simplest way to do this is to use the `test-repo-backend` documented at https://www.netlifycms.org/docs/authentication-backends/#test-repo-backend.

The instructions below provide a way of running the admin locally and still pushing to a git repo, but following those instructions may introduce unexpected behavior (see [Netlify Issue 1085](https://github.com/netlify/netlify-cms/issues/1085)). For CMS development, consider forking the repo and setting up a new Netlify site that's connected to that fork.

Currently, when the admin runs locally, it uses three different data sources:
- `config.yml` comes from the local dev environment.
- Content comes from the git repo specified in `config.yml`.
  - Content changes will need to be pushed to that repo before they appear locally.
- Content changes are saved to the main repo, _not_ the repo specified in `config.yml`.
  - Saving content locally will open a PR against `openpracticelibrary/openpracticelibrary`!

To run the admin locally:

1. Fork the repo and set up a new Netlify site following the instructions above.
2. Update `static/admin/config.yml` to point to a staging branch your fork, not the main openpracticelibrary repo.
4. Run the site locally using `hugo serve` and go to http://localhost:1313/admin/.
5. Log in with a username and password (_not_ GitHub auth). A local admin page should appear. Edits in this admin will create PRs in your fork. Edits to `static/admin/config.yml` should be reflected in this local admin.
6. Before making a PR, be sure to undo your changes to `static/admin/config.yml`! 😁