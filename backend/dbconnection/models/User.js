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
  category:[String]
});

const User = model('User', UserSchema);
module.exports = User;

// module.exports = User;