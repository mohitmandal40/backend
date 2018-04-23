var dbLogin = require('../models/user');
var jwt = require('jsonwebtoken');

exports.registration = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: 'Please enter all details'
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Database error'
                })
            } else if (!data || data == null) {
                var newPerson = new dbLogin({
                    email: req.body.email,
                    password: req.body.password

                })
                newPerson.save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "error while saving data"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "New registration done"
                        })
                    }
                })
            } else {
                res.json({
                    success: true,
                    msg: "you have already registered.Please sign in."
                })
            }
        })
    }
}


// var jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: 'Please enter all details'
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, logindata) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Error in database',
                    err: err
                })
            } else if (!logindata || logindata == null) {
                res.json({
                    success: false,
                    msg: "please register first"
                })
            } else if (logindata.password == req.body.password) {
                var tokenData = {
                    email: logindata.email
                }
                var token = jwt.sign(tokenData, req.app.get('secret'))
                res.json({
                    success: true,
                    msg: 'login successfully',
                    token: token
                })
            } else {
                res.json({
                    success: false,
                    msg: "password mismatch",

                })
            }
        })
    }
}


