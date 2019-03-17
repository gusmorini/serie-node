const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });

const uri = 'mongodb://localhost/noderest'
mongoose.connect(uri, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;