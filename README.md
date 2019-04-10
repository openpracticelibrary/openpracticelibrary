# Open Practice Library

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/openpracticelibrary/) [![Netlify Status](https://api.netlify.com/api/v1/badges/2f44b7cd-f0eb-4f8b-9ade-51a338a7d1aa/deploy-status)](https://app.netlify.com/sites/openpracticelibrary/deploys)

## About

The [Open Practice Library](https://openpracticelibrary.com) provides information about practices and ideas that empower teams to collaborate and deliver iteratively. To learn more about the philosophy behind the library, see [about.md](content/page/about.md).

## Publishing workflow

### Content Writers

1. On a practice page or the home page hit the `Improve` or `Add new` button to launch the CMS.
2. Login with your GitHub Account. (If you don't have an account you can [create one here](https://github.com/join). Don't worry, it's free to create an account!)
3. Once logged into the CMS, pick the `Practice` or `How To` guide you want to implement or improve.
4. Update it with your changes and remember to append your `github` username to the end of the authors list.
5. Make your changes and hit `Save`. The moderators will pick up the changes from there!

### Content Moderators

1. Once a PR is raised, the option will be to review for changes or to merge to `staging`. This will deploy the app to [https://staging.openpracticelibrary.com](https://staging.openpracticelibrary.com). 
2. If the changes look good and are to be promoted to the main domain, raise a PR from `staging` to `master` and merge it. The automation will kick in and deploy the site to the main domain [https://openpracticelibrary.com](https://openpracticelibrary.com).

## Contributing

To get started contributing content, see the [Contributing guide](https://openpracticelibrary.com/contribution-guide/). To start contributing code, see the [Developing guide](DEVELOPING.md).

See also: [Code of Conduct](CODE_OF_CONDUCT.md).
