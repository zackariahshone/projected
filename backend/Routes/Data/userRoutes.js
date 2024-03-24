const router = require('express').Router();
const User = require('../../dbconnection/models/User')
const jwt = require("jsonwebtoken");
const UTILS = require('./utils');
/**
 * Handle Sign up
 */
router.post('/signup', async (req, res) => {
 const createdUser = await User.create(req.body)
  req.session.signinSuccess = true;
  res.json({ 
    ...createdUser,
    status: 200 });
});
/**
 * Handle log in 
 */
router.post('/login', async (req, res) => {
  const currentUser = await User.find({ email: req.body.email, pwd: req.body.password }).lean();
  // send tokenized user credential to store on the front end.
  if (currentUser.length !== 0) {
    const token = jwt.sign(currentUser[0], '124', { mutatePayload: true });
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
/**
 * Edit User
 */
router.post('/editUser', async (req, res) => {
  const userCred = jwt.decode(req.headers['x-access-token']);
  let itemsToUpdate = UTILS.rmvEmpty(req.body);
  await User.findOneAndUpdate({ email: userCred.email }, itemsToUpdate).lean();
  const updatedUser = await User.findOne({ email: userCred.email }).lean();
  const token = jwt.sign({ ...updatedUser }, '124');
  res.send(
    {
      ...updatedUser,
      token: true,
      authToken: token
    });
});

router.post('/setFavoriteTrucks',async(req, res)=>{
  const userCred = jwt.decode(req.headers['x-access-token']);
  const updatedUser = await User.findOne({ email: userCred.email }).lean();

  if(!updatedUser.favFoodTrucks.includes(req.body.truckData)){
    await User.updateOne({ $push: { favFoodTrucks: req.body.truckData}})
  }else{
    const refinedList =  updatedUser.favFoodTrucks.filter((truck)=>truck != req.body.truckData);
    console.log(`refinedList${refinedList}`);
    debug = await User.findByIdAndUpdate(updatedUser._id, {favFoodTrucks: refinedList})
  }
});
module.exports = router;