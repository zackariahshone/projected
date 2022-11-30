const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  password:{
    type:String,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }
  ]
});

const User = model('User', UserSchema);

module.exports = User;