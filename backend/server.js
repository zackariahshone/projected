const express = require('express');
const path = require('path');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const routes = require('./Routes');
const cors = require("cors");
const bodyParser = require('body-parser')

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

// var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())

// app.use(cors(corsOptions))
// app.use(express.static("src"));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(routes);
app.use(express.static("client/build"));
app.listen(PORT, () => console.log(`Listing on  port ${PORT}`));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//   }
