//require all the modules that will be used in the simple server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
const cors = require('cors');

var config = require('./config');
// var registrationLogin = require('./routes/registrationLogin')
// var jwtVerify = require('./routes/jwtVerify')
var todoRoutes = require('./routes/todoRoutes')
// var todo = require('./routes/todo');


var port = process.env.PORT || 8000;  //used to create , sign, and verify tokens
mongoose.connect(config.database,(err,data) => {
    if(err){
        console.log('not connected');
    }else {
        console.log(`you are connected to database`);
    }
});  //connect to database

//use bodyparser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use(cors());

//use morgan to log requests to the console
app.use(morgan('dev'));

//  app.use('/',registrationLogin)

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//     next();
// });

app.set('secret',config.secret);
app.use('/api',todoRoutes)


app.listen(port,() => {
    console.log('use api routes http://localhost:' + port)
});

