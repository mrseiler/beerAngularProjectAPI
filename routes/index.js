var express = require('express');
var app = module.exports = express();
var beer = require('../controllers/beerControllers')
var userBeer = require('../controllers/userBeerControllers')
user = require('../controllers/userControllers')
brewer = require('../controllers/brewerControllers')

app.use(require('../middleware/headers'))

app.use('/api/brewer', brewer)
app.use('/api/user', user)

app.use(require('../middleware/validate-session'));

app.use('/api/beer', beer);
app.use('/api/userbeer', userBeer);


