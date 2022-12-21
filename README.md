[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/B4kedBr3ad/9995acef0933a1f9ab38d3cc93e9653c/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)
![Today Views](https://views.whatilearened.today/views/github/B4kedBr3ad/twitter-autoblock.svg)

Usage(for general users)
=====
(manual running)
1. clone this repo
2. install any packages
3. edit `/src/main/_config.js`
4. run `/src/main/follow.js`
5. run `/stc/main/block.js`

*Note: Steps 4 and 5 can be shortened by running `manual_run.sh`.

How to run it 24/7
=====
My environment is CLI base Linux, so Windows users and others should download the various Linux versions at WSL. Also, use crontab to run start.sh. If this is difficult, we recommend using replit.

Usage(for replit users)
=====
(manual running)
1. fork this repl. URL: https://replit.com/@B4kedBr3ad/twitter-blocker
2. install any packages
3. edit `/src/main/_config.js`
4. run `/src/main/follow.js`
5. run `/stc/main/block.js`

*Note: Steps 4 and 5 can be shortened by running `manual_run.sh`.

Run it 24/7
=====

1. Get the URL of this Repl. This can be obtained by running index.js. (In most cases, this is `twitter-blocker.<YOUR_REPLIT_USERNAME>.repl.co`.
2. Create a [cron-job.org](https://cron-job.org) user
3. Send HTTP requests to the URL obtained in step 1 every 5 minutes
4. Set up `/run` to send HTTP requests to any minute HTTP request. This is recommended to be about 30 minutes, as too short a time will be caught by Twitter's API restrictions.
5. ENJOY

Etc 
=====
- When /latest_run is accessed, the browser will show the last time it was started.
- The list of users you are following is displayed in `/src/data/follow.json`. This user will not be blocked even if he/she uses the specified word. If you want to block them regardless, run `/src/main/block.js` instead of `/src/main/follow.js`.
- When running in Replit, do not make the auto-execution too short, or the Replit side will force the execution to stop and you will not be able to access repl for about 30 minutes.