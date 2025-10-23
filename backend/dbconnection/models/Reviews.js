const { Schema, model } = require('mongoose');

 const ReviewsSchema = new Schema({},{strict:false});

const Reviews = model('Reviews', ReviewsSchema);
module.exports = Reviews;