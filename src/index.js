const express = require('express');
const redis = require('redis');

// Constants
const WEB_LISTENING_PORT = 8081;
const VISITS_KEY = 'visits';

// Applications
const app = express();
const client = redis.createClient({
  host: 'counter-redis-server', // DOCKER-COMPOSE HOSTNAME
  port: 6379,
});
client.set(VISITS_KEY, 0);

app.get('/', (req, res) => {
  client.get(VISITS_KEY, (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set(VISITS_KEY, parseInt(visits, 10) + 1);
  });
});

app.listen(WEB_LISTENING_PORT, () => {});
