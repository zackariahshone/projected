const router = require('express').Router();
const User = require('../../dbconnection/models/User')
const jwt = require("jsonwebtoken");

/**
 * Handle Sign up
 */
router.post('/signup', (req, res) => {
  User.create(req.body)
  req.session.signinSuccess = true;
  res.json({ status: 200 });
});
/**
 * Handle log in 
 */
router.post('/login', async (req, res) => {
  const currentUser = await User.find({ email: req.body.email, pwd: req.body.password }).lean();
  // send tokenized user credenctial to decode on the front end.
  const token = jwt.sign(req.headers['x-access-token'],'secret');

  if (currentUser.length !== 0) {
    req.session.loginStatus = true;
    res.send(
      {
        ...currentUser[0],
        token: true,
        authToken: token
      });
  } else {
    req.session.loginStatus = false;
    res.send({ token: false });
  }
});

module.exports = router;