const Twitter = require('twitter');
const config = require('./_config');
const fs = require('fs').promises;
const client = new Twitter(config.auth);
const moment = require('moment');
const currentTime = moment();
// const newTime = currentTime.add(9, 'hours');
const data = currentTime.format("YYYY/MM/DD/HH:mm:ss")

const getFriends = () =>
  new Promise((resolve) => {
    const params = { screen_name: config.screen_name, cursor: -1, stringify_ids: true };
    client.get('friends/ids', params, (error, data, response) => {
      if (error) return console.log(error);
      resolve(data);
    });
  });

async function main() {
  const friends = await getFriends();
  await fs.writeFile('./src/data/follows.json', JSON.stringify(friends));
}

fs.writeFile("./src/data/time.txt", data, (err) => {
  if (err) throw err;
  console.log('Successfully written!');
});
main();