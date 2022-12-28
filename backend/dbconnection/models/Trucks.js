const { isInteger } = require('lodash');
const { Schema, model } = require('mongoose');

 const FoodTruckSchema = new Schema({
 name:{
  type:String
 },
 vendorFirstName:{
  type:String
 },
 vendorLastName:{
  type:String
 },
 description: {
    type: String,
  },
  address:{
    type: String,
  },
  IMG:{
    type:String,
  },
  dateAdded:{ 
    type:String
  },
  category:{
    type:[String]
  },
  coordinates:{
    type:Object
  },
  pwd:{
    type:String
  }
});

const FoodTruck = model('Trucks', FoodTruckSchema);
module.exports = FoodTruck;