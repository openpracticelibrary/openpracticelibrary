This is a version of [Cheap Bots, Done Quick!](http://cheapbotsdonequick.com/) that runs as a single bot.

Basic instructions for usage:
- clone this repo to a Linux server
- get it set up as a Node app (install Node, if needed, then run `npm install`)
- create a Twitter app on the developer site, register a Twitter account, do that OAuth dance (maybe using [http://v21.io/iwilldancetheoauthdanceforyou/](http://v21.io/iwilldancetheoauthdanceforyou/) ?)
- put the values you get from that into a file called `.env` (Copy `.env_EXAMPLE`)
- add your Tracery code into the `rawGrammar` variable within `bot.js`
- call `run_bot.sh` whenever you want the bot to tweet (ie via `cron`)
