// var express = require('express');
// var router = express.Router(); same thing or below
var { Router } = require('express');  // es6 feature object destructring

var router = Router();
var tokenVerify = require('./jwtVerify');

var registrationLogin = require('./registrationLogin');
router.post('/register', registrationLogin.registration)
router.post('/login', registrationLogin.login);
var todo = require('./todo');

router.post('/insertTask',
    tokenVerify, todo.insertTask);

module.exports = router;