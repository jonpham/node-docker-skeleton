// Environment Var Import
const keys = require('./keys');

// Express Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require('pg');

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
const PG_FIB_VALUE_TABLE = 'queried_fib_values'

pgClient.on('error',() => {
  console.log('Lost PG Connection');
});

pgClient
  .query(`CREATE TABLE IF NOT EXISTS ${PG_FIB_VALUE_TABLE} (number INT)`)
  .catch( error => console.log(error));

// Redis Client Setup
const redis = require('redis');
const REDIS_FIB_VALUE_TABLE = 'fib_values';

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

// Duplicate is required based on redis.js client documentation...
const redisPublisher = redisClient.duplicate();

// Express Route Handlers
app.get('/', (req, res) => {
  res.send('Hi, I am a Backend Express API Server');
});

app.get('/values/all', async (req, res) => {
  const values = await pgClient.query(`SELECT * from ${PG_FIB_VALUE_TABLE}`);

  res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
  redisClient.hgetall(REDIS_FIB_VALUE_TABLE, (err, values) => {
    res.send(values);
  });
});

app.post('/values', async (req, res) => {
  const index = req.body.index;

  if (parseInt(index,10) > 40) {
    return res.status(422).send('Index too high');
  }

  redisClient.hset(REDIS_FIB_VALUE_TABLE, index, 'Nothing yet!');
  redisPublisher.publish('insert', index);
  
  pgClient.query(`INSERT INTO ${PG_FIB_VALUE_TABLE}(number) VALUES($1)`, [index]);

  res.send({working: true});
});

let servicePort = keys.appPort || 5000;
app.listen(servicePort, err => {
  console.log(`listening : err : ${err}`);
});