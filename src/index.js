const express = require('express');
const redis = require('redis');

// Constants
const WEB_LISTENING_PORT = 80;

// Applications
const app = express();
const client = redis.createClient();

app.get('/', (req, res) => {
  //
  const visitKey = 'visits';

  client.get(visitKey, (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    res.set(visitKey, parseInt(visits, 10) + 1);
  });
});

app.listen(WEB_LISTENING_PORT, () => {});
