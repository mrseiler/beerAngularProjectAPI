var express = require('express');
var router = express.Router();
var BeerServices = require('../services/beerServices')

var beer = new BeerServices();

router.post('/createbeer', function(req, res){
    console.log("beer controller: ", req)
    beer.createBeer(req)
    .then(
        function createSuccess(beer) {
                res.json({
                    beer: beer
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
    )
})

router.get('/getallbeers', function(req, res){
    beer.getAllBeers()
    .then(
        function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
    )
})

router.get('/getonebeer/:id', function(req, res){
    beer.getOneBeer(req.params.id)
    .then(
        function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
    )
})

router.put('/editbeer/:id', function(req, res){
    beer.editBeer(req, req.params.id)
    .then(
        function updateSuccess(beer) {
                res.json({
                    beer: beer
                });            
            },
            function updateError(err){
                res.send(500, err.message);
            }
    )
})

router.get('/searchbeer/:query', function(req, res){
    beer.searchBeer(req.params.query)
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    )
})

router.delete('/deletebeer/:id', function(req, res){
    beer.deleteBeer(req, req.params.id)
    .then(
            function deleteBeerSuccess(){
                res.send("you removed a beer");
            },
            function deleteBeerError(err){
                res.send(500, err.message);
            }
        )
})

module.exports = router;