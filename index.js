const Twitter = require('twitter');
const fs = require('fs').promises;
const config = require('./config');
const client = new Twitter(config.auth);

async function main() {
  const follows = JSON.parse(await fs.readFile('following.json'));

  for (const query of config.blacklist_search_query) {
    client.get('search/tweets', { q: query, count: 100 }, (error, data, response) => {
      if (error) return console.log(error);

      for (const tweet of data.statuses) {
        if (follows.ids.includes(tweet.user['id_str'])) return;

        client.post('blocks/create', { user_id: tweet.user['id_str'] }, (error, data, response) => {
          if (error) return console.log(error);

          const { name, screen_name, description } = data;
          console.log(`[ \x1b[46mBlocked Target User!\x1b[0m ]=====> \n  ${name}\x1b[2m@${screen_name}\x1b[0m`);
        });
      }
    });
  }
}

main();
