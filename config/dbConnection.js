var mongoose = require('mongoose');

// Set the path to the database

mongoose.connect(process.env.DATABASE);


let db = mongoose.connection;
let DB = module.exports = db;
