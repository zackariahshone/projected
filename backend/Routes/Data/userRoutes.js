const router = require('express').Router();
const mongoose = require('../../dbconnection/connection');
const User = require('../../dbconnection/models/User')

/**
 * Handle Sign up
 */
 router.post('/signup',(req, res)=>{
    User.create(req.body)
    res.json({status:200});
   });
   /**
    * Handle log in 
    */
   router.post('/login', (req, res) => {
     //check user auth
     // models.User.find({}).then((data)=>{console.log(data)})
     User.find({email: req.body.email, pwd: req.body.password})
     .then(currentUser=>{
       if(currentUser.length !== 0){
         res.send(true);
       }else{
         res.send(false);
       }
     })
   });
   
   module.exports = router;