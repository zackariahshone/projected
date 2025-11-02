const { isInteger, uniqueId } = require('lodash');
const { Schema, model, Mongoose, default: mongoose } = require('mongoose');
const FoodTruckSchema = new Schema({
  name: {
    type: String
  },
  venderFirstName: {
    type: String
  },
  venderLastName: {
    type: String
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  IMG: {
    type: String,
  },
  dateAdded: {
    type: String
  },
  category: {
    type: [String]
  },
  coordinates: {
    type: Object
  },
  pwd: {
    type: String
  },
  rating: {
    type: mongoose.Mixed
  },
  ratingCount: {
    type: mongoose.Mixed
  }
},{strict:false});

const FoodTruck = model('Trucks', FoodTruckSchema);
module.exports = FoodTruck;