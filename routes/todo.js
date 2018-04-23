var dbTodo = require('../models/task');

exports.insertTask = (req, res) => {
    if (!req.body.taskName) {
        res.json({
            success: false,
            msg: 'please enter task'
        })
    } else {
        var newTask = new dbTodo({
            email: req.body.email, //req.decoded.email
            taskName: req.body.taskName,

        })
    } newTask.save((err, data) => {
        if (err) {
            res.json({
                success: false,
                msg: "error in database"
            })
        } else {
            res.json({
                success: true,
                msg: "new task entered"
            })
        }
    })
}
