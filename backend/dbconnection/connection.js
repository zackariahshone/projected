const mongoose = require('mongoose');
// mongodb+srv://ZackShone:1234@clustertruck.dvwuahh.mongodb.net/?retryWrites=true&w=majority
const connectionString = process.env.MONGO_CONNECTION //'mongodb+srv://ZackShone:1234@clustertruck.dvwuahh.mongodb.net/?retryWrites=true&w=majority'
const connection = mongoose.connect(connectionString);

// mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

module.exports = connection


// module.exports = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });