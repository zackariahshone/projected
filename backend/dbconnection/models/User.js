const { Schema, model } = require('mongoose');

 const UserSchema = new Schema({
 email:{
  type:String
 },
  firstName: {
    type: String,
  },
  lastName:{
    type: String,
  },
  pwd:{
    type:String,
  },
  category:[String],
  favFoodTrucks:[String],
  vender:{
    type:Boolean,
    default:false
  },
  venderCredentials:{
    foodTruckEmail:{
      type:String,
    },
    foodTruckPassword:{
      type:String
    }
  },
  foodtrucks:{
    type:Array
  }
});

const User = model('User', UserSchema);
module.exports = User;

// module.exports = User;