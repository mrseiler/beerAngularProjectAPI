var express = require('express');
var router = express.Router(); 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

UserServices = require('../services/userServices')

User = new UserServices();

router.post('/createuser', function(req, res){
    User.createUser(req)
    .then(
        function createSuccess(user){
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})

            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            })
        }
    )
    .catch(
        function catchError(err){
            res.send(500, err.message)
        }
    )
})

router.put('/update/:id', function(req, res) {
    
    User.updateUser(req, req.params.id)
        .then(
            function updateSuccess(user) {
                res.json({
                    user: user
                });            
            },
            function updateError(err){
                res.send(500, err.message);
            }
        )
});

router.post('/login', function(req, res){
    User.userLogin(req)
    .then(
            function (user) {
                // console.log("user: ", user)
                if (user) {
                    bcrypt.compare(req.body.user.passwordhash, user.passwordhash, function (err, matches){
                        if(matches){
                            console.log("user id: ",user.id)
                            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                            res.json({
                                user: user,
                                message: "successfully authenticated",
                                sessionToken:token
                            })
                        } else {
                            res.status(502).send({error: "Invalid Credentials, didn't match"})
                        }
                    })
            } else {
                res.status(500).send({ error: "Failed to authenticate" })
            }
        },
        function (err) {
            res.status(501).send({ error: "Invalid Credentials"})
        }
    )
})

module.exports = router;