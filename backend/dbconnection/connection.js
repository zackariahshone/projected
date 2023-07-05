const mongoose = require('mongoose');
require('dotenv').config()

const connectionString = process.env.MONGO_CONNECTION;
const connection = mongoose.connect('mongodb+srv://ZackShone:1234@clustertruck.dvwuahh.mongodb.net/?retryWrites=true&w=majority');

mongoose.set(
    {
        'debug': true,
        autoIndex:true
    }
    );

module.exports = connection
