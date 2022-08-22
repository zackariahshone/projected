const axios = require("axios");
const router = require('express').Router();
const bodyParser = require('body-parser')

// GET "/api/notes" responds with all notes from the database
router.get('/testing', (req, res) => {
  console.log('route hit');
  res.json({ server: 'from server' });
});

router.post('/api/getTheBackEnd',(req,res)=>{
  console.log(req.body);
})
router.get('/getweather', (req, res) => {
  // console.log(JSON.parse(req.body));
  var options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
      aggregateHours: '24',
      location: 'Rogers,AR,USA',
      contentType: 'json',
      unitGroup: 'us',
      shortColumnNames: '0'
    },
    headers: {
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      'x-rapidapi-key': '4f514922bamsh130a9b7d139bda9p126f35jsnb81cc8ebed46'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
