// Set up mongoose connection
var mongoose = require('mongoose');//mongodb://localhost/cdacqpointv1
var dev_db_url = 'mongodb://localhost/cdacqpointv1'
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));