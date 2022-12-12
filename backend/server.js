const express = require('express');
const path = require('path');
const routes = require('./Routes');
const cors = require("cors");
const bodyParser = require('body-parser')
// require('./dbconnection/connection');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(routes);
app.use(express.static("client/build"));
app.listen(PORT, () => console.log(`Listing on  port ${PORT}`));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

