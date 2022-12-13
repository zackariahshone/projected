const { Schema, model } = require('mongoose');

 const FoodTruckSchema = new Schema({
 name:{
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
  'dateAdded': String,
  category:[String]
});

const FoodTruck = model('Trucks', FoodTruckSchema);
module.exports = FoodTruck;