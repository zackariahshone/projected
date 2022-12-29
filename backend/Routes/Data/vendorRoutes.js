const router = require('express').Router();
const User = require('../../dbconnection/models/User')
const jwt = require("jsonwebtoken");
const UTILS = require('./utils');
const { findOne } = require('../../dbconnection/models/User');
/**
 * Handle Sign up
 */
router.post('/registration',async (req, res) => {
 
 const key = jwt.decode(req.headers.token).email;
 const updatedUser = await User.findOneAndUpdate({email:key},
    {
        vender:true,
        venderCredentials:{...req.body}
    })
const user = await User.findOne({email:key});
  res.json(
    { 
        status: 200,
        venderdata:{...req.body} 
    });
});
/**
 * Handle log in 
 */

module.exports = router;