var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Todo = require('../models/user')

/*
var chris = new User({
    firstName: 'Chris',
    lastName: 'Herrera'
})

chris.save(function (err) {
    if(err) throw err

    console.log('Usuario guardado satisfactoriamente')
})
*/

// get all the users
User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
});


router.get('/', function(req, res, next) {

});

router.post('/', function(req, res, next) {

    var email = req.body.email
    var firstName = req.body.firstName
    var lastName = req.body.lastName

    var user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email
    })

    user.save(function (err) {
        if(err) throw err

        res.json(user)
    })

});
router.post('/', function(req, res, next) {

    var task = req.body.task

    var todo = new Todo({
        task: task
    })

    todo.save(function (err) {
        if(err) throw err

        res.json(todo)
    })

});

module.exports = router;
