const mongoose = require('mongoose');
require('dotenv').config()

const connectionString = 'mongodb+srv://ZackShone:1234@clustertruck.dvwuahh.mongodb.net/?retryWrites=true&w=majority';//process.env.MONGO_CONNECTION;
const connection = mongoose.connect(connectionString);

mongoose.set(
    {
        'debug': true,
        autoIndex:true
    }
    );

module.exports = connection
