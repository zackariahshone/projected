const router = require('express').Router();
// const mongoose = require('../../dbconnection/connection');
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
   router.post('/login', async (req, res) => {
    const currentUser = await User.find({email: req.body.email, pwd: req.body.password}).lean();
      // send tokenized user credenctial to decode on the front end. 
    if(currentUser.length !== 0){
         res.send({...currentUser[0],token:true});
       }else{
         res.send({token:false});
       }
   });
   
   module.exports = router;