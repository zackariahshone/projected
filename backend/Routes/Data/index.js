const axios = require("axios");
const router = require('express').Router();
const bodyParser = require('body-parser');

const mongoose = require('../../dbconnection/connection');
const models = require('../../dbconnection/models')
// GET "/api/notes" responds with all notes from the database


/**
 * Handle Sign up
 */
router.post('/signup',(req, res)=>{
  // console.log(JSON.parse(req.body));
 models.User.create(req.body)
  
})
/**
 * Handle log in 
 */
router.post('/login', (req, res) => {
  console.log(req.body)
  //check user auth
  res.send(true)
})

/**
 * 
 *  Handle Searchable list 
 * of Food trucsk 
 * 
 */
router.get('/api/foodtrucklists', (req, res) => {
  console.log(`reached the correct route `);
  const listofTrucks = {
    listOfTrucks: [
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
  res.json(listofTrucks)
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
////////////////////////////////////////////////
//////////// test routes for FE ////////////////
////////////////////////////////////////////////
router.get('/testing', (req, res) => {
  console.log('route hit');
  res.json({ server: 'from server' });
});

router.post('/api/getTheBackEnd', (req, res) => {
  console.log(req.body);
})
module.exports = router;
