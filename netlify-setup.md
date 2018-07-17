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
3. setup the backend to connect using `git-gateway` in `config.toml`.
4. TODO - Add roles in  there too ???
5. on netlify, created a new app. 
6. On new app go to `settings/Identity` and add a GitHub external provider
7. CLICK  THE ENABLE GATEWAY BUTTON !!!
8. Add script tag's login widget to `admin/index.html` head and also to the end of the `<body>` in the generated doc site. NOTE - not 100% sure if this is needed or what it does. Think it's the dialog for the login page, but dunno if we need it on the generated site's html.




9.  build and deploy - created a `netlify.toml` config file
10. added some build env vars specific for prod and non-prod to use the latest version of hugo.
11. added a `build.sh` file to be executed by the build system and wired it to the `netlify.toml` config. This gives a hook for running our builds / tests etc.
12. 


