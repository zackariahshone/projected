const mongoose = require('mongoose');
require('dotenv').config()

const connectionString = process.env.MONGO_CONNECTION;
const connection = mongoose.connect(connectionString);

mongoose.set('debug', true);

module.exports = connection
