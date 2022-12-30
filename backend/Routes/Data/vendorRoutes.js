const router = require('express').Router();
const User = require('../../dbconnection/models/User')
const Truck = require('../../dbconnection/models/Trucks');

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
    const userInfo = jwt.decode(req.headers.token);
    const currentUser = await User.find({email:userInfo.email})
    
    const aggrigateTrucks = []
    currentUser[0].foodtrucks.forEach(async (truck,i)=>{
        const foundTruck = await Truck.find({name:truck})
        if(foundTruck.length == 1){
            aggrigateTrucks.push(foundTruck[0])
        }
        if(i===currentUser[0].foodtrucks.length - 1){
           res.json(aggrigateTrucks);
        }
    })
})

module.exports = router;