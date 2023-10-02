const router = require('express').Router();
const User = require('../../dbconnection/models/User')
const Truck = require('../../dbconnection/models/Trucks');
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
/**
 * Handle Sign up
 */
router.post('/registration',async (req, res) => {
    const key = jwt.decode(req.headers.token).email;
 
 await User.findOneAndUpdate({email:key},
    {
        vender:true,
        venderCredentials:{...req.body}
    })
  res.json(
    { 
        status: 200,
        venderdata:{...req.body} 
    });
});
router.get('/vendortrucks',async(req,res)=>{
    try {    
        const userInfo = jwt.decode(req.headers.token);
        const currentUser = await User.find({email:userInfo.email})
        const usersTrucks = currentUser[0].foodtrucks;
        const validatedIds = [];
        const aggrigateTrucks = await Truck.find({'_id':{ $in: usersTrucks }} );
        // const aggrigateTrucks = await Truck.find().lean();
        res.json(aggrigateTrucks);
    } catch (error) {
        req.json({'error':error})
    }
})

module.exports = router;