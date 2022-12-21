const express = require('express')
const app = express()
const { exec } = require('child_process')
const fs = require('fs')
const moment = require('moment');
const currentTime = moment();
// const newTime = currentTime.add(9, 'hours'); 
const data3 = currentTime.format("YYYY/MM/DD/HH:mm:ss")
const request = require('request'); 
const https = require('https');
const config = require('./src/utils/_config.js');
const Twitter = require('twitter');
const client = new Twitter(config.auth);

// start http server
app.get('/', (req, res) => {
  res.send('You’re repl is now runnning!')
})

// run start.sh
app.get('/run', (req, res) => {
  exec('sh start.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
  res.send('STARTED BLOCKING')
})

// show latest runned time
app.get('/latest_run', async (req, res) => {
  const [time, time2] = await Promise.all([
    new Promise((resolve, reject) => {
      fs.readFile('./src/data/time.txt', 'utf8', (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    }),
    new Promise((resolve, reject) => {
      fs.readFile('./src/data/time2.txt', 'utf8', (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  ])
  res.send('Latest runned time(follow.js,main.js)\n' + time + '\n' + time2)
})

//start server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})