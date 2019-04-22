const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res, next) => {

    console.log("got the users");
    //this will return all the data in User schema, exposing only the id and action field to the client
    User.find({})
    .then(data => res.json(data))
    .catch(next)
});

router.get('/users/:id', (req, res, next) => {

    console.log("got user by id");
    //this will return all the data, exposing only the id and action field to the client
    User.findById({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/users', (req, res, next) => {
    if(req.body.action){ //TODO: Change name
        User.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }else{
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/users/:id', (req, res, next) => {
    User.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
