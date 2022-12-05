const router = require('express').Router();

router.get('/api/foodtrucklists', (req, res) => {
    const listofTrucks = {
      'listOfTrucks': [
        "The Witching Hour",
        "Food Therapy NWA",
        "Foodology Food Truck",
        "Burntsugars Food Truck",
        "Fatt Fingers",
        "Roll & Fold",
        "Boondocks Grill",
        "City Pump",
        "Takashimura Hibachi - Rogers",
        "T-Mo's cajun Cookin",
        'new truck',
        'one more'
      ]
    }
    res.send(listofTrucks)
  });

  module.exports = router;
