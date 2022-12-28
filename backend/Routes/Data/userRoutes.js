const router = require('express').Router();
const User = require('../../dbconnection/models/User')
const jwt = require("jsonwebtoken");
const UTILS = require('./utils');
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
  // send tokenized user credential to decode on the front end.
  if (currentUser.length !== 0) {
    const token = jwt.sign(currentUser[0],'124',{mutatePayload:true});
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
  console.log(userCred);
  // jwt.decode
  let itemsToUpdate = UTILS.rmvEmpty(req.body);
  console.log(itemsToUpdate);
  // try{
    const currentUser =  await User.findOneAndUpdate({email:userCred.email},itemsToUpdate).lean();
     // res.json({ status: 200 });
     const updatedUser = await User.findOne({email:userCred.email}).lean();
     const token = jwt.sign({updatedUser},'124');
     console.log(currentUser)
    console.log(updatedUser);
    res.send(
      {
        ...updatedUser,
        token: true,
        authToken: token
      });
  // } catch(error){
  //   console.log(error);
  // } 
});
module.exports = router;