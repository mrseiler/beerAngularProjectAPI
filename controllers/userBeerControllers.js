var express = require('express');
var router = express.Router();
var UserBeerServices = require('../services/userBeerServices')

const userBeer = new UserBeerServices();

router.post('/createuserbeer', function(req, res){
    userBeer.createUserBeer(req)
    .then(
        function createSuccess(userbeer) {
                res.json({
                    userbeer: userbeer
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
    )
})
router.get('/getbeer/:name', function(req, res){
    userBeer.getUserBeer(req.params.name)
    .then(
        function getSuccess(beer){
            res.json(beer)
        },
        function getError(err){
            res.send(500, err.message)
        }
    )
})
router.get('/getallbeers', function(req, res){
    userBeer.getAllUserBeers(req.body.user.id)
    .then(
        function getSuccess(beers){
            res.json(beers)
        },
        function getError(err){
            res.send(500, err.message)
        }
    )
})
router.post('/search/:query', function(req, res){
    userBeer.searchUserBeers(req.params.query)
    .then(
        function querySuccess(data){
            res.json(data)
        },
        function queryError(err){
            res.send("Could not find")
        }
    )
})
router.put('/update/:name', function (req, res){
    userBeer.updateUserBeer(req, req.params.name)
    .then(
        function updateSuccess(data){
            res.json(data)
        },
        function updateError(err){
            res.send(500, err.message)
        }
    )
})
router.delete('/delete/:name', function(req, res){
    userBeer.deleteUserBeer(req.params.name)
    .then(
        function deleteSuccess(){
            res.send("You removed a beer.")
        },
        function deleteError(){
            res.send("Could not remove.")
        }
    )
})

module.exports = router;