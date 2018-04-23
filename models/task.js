var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    email : {
        type : String,
        Required : 'Required to link tasks'
    },
    taskName : {
        type : String,
        Required : 'Required to link tasks'
    },
    created_date : {
        type : Date,
        default : Date.now
    },
    status : {
        type : String,
        default : 'pending'
    },
    completed_date : {
        type : Date
    },
    updated_date :{
        type : Date
    },
    due_date : {
        type : Date
    }

})

module.exports = mongoose.model('Tasks',TaskSchema)
