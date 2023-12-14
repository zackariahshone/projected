const express = require('express');
const path = require('path');
const routes = require('./Routes');
const bodyParser = require('body-parser');
const session = require('express-session');
const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * Redis set up
 */

// const redis = require('redis');
// const redisStore = require('connect-redis')(session);
// const client  = redis.createClient();
require('./dbconnection/connection');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1) // trust first proxy

/**
 * Redis set up
 */

// app.use(session({
//   secret: 'ssshhhhh',
//   // create new redis store.
//   store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
//   saveUninitialized: false,
//   resave: false
// }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(routes);
app.use(express.static("client/build"));
app.listen(PORT, () => console.log(`Listing on  port ${PORT}`));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});