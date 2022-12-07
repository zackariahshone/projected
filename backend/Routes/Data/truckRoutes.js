const router = require('express').Router();
const Truck = require('../../dbconnection/models/Trucks');

router.get('/api/foodtrucklists', (req, res) => {
  Truck.find().then(data=>{
    res.send(data);
  })
});

module.exports = router;
