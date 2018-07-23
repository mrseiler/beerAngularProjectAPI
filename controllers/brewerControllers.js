var express = require('express');
var router = express.Router();
var sequelize = require('../db'); 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

BrewerServices = require('../services/brewerServices')

Brewer = new BrewerServices();

router.post('/createbrewer', function(req, res){
    
    Brewer.createBrewer(req)
    .then(
        function createSuccess(brewer){
            var token = jwt.sign({id: brewer.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})

            res.json({
                brewer: brewer,
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

router.get('/:id', function (req, res){
    const id = req.params.id;
    Brewer.getBrewer(id)
    .then(
        function findSuccess(data){
            res.json(data)
        },
        function findError(err){
            res.send(500, err.message)
        }
    )
})

router.post('/login', function(req, res){
    Brewer.brewerLogin(req)
    .then(
        function(brewer){
            if(brewer){
                bcrypt.compare(req.body.brewer.passwordhash, brewer.passwordhash, function(err, matches){
                    if (matches){
                        var token=jwt.sign({id:brewer.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.json({
                            brewer: brewer,
                            message:"successfully authenticated",
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({error:"Invalid"})
                    }
                })
            } else {
                res.status(500).send({error: "Invalid Credentials"})
            }
        },
        function (err){
            res.status(501).send({error: "Not Found"})
        }
    )
})

router.put('/update/:id', function(req, res){
    Brewer.updateBrewer(req)
    .then(
        function updateSuccess(brewer){
            res.json({
                brewer:brewer
            })
        },
        function updateError(err){
            res.send(500, err.message)
        }
    )
})

module.exports = router;