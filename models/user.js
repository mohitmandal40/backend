var mongoose = require('mongoose');
var {Schema} = require('mongoose');
// var Schema = mongoose.Schema;

//set up a mongoose model
var user = new Schema({
    email : String,
    password : String
})

module.exports = mongoose.model('User',user) //User name collection store in db

