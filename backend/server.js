const express = require('express');
const path = require('path');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const routes = require('./Routes');
const cors=require("cors");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(express.static("src"));
app.use(routes);
app.listen(PORT, ()=> console.log(`Listing on  port ${PORT}`));
app.get('/api', (req, res)=>{
    console.log('this route did get hit');
    res.json({"bodyofres":"Connected to express back end"});
})
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build'));
  });
