var dbLogin = require('../models/user');
var jwt = require('jsonwebtoken');

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
                    success: true,
                    msg: 'Error in database'
                })
            } else if (!data || data == null) {
                res.json({
                    success: false,
                    msg: "please register first"
                })
            }
            else if (logindata.password == req.body.password) {

                var tokenData = {
                    email: loginData.email
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