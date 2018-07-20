require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var sequelize = require("./db");
//var variable = require('./controllers/variablecontroller');

var cors = require('cors');
app.use(cors());

sequelize.sync(); // {force: true}
app.use(bodyParser.json());

//var.use('/path', varName)

app.listen(process.env.PORT, function(){
    console.log('App is listening on 3000.')
});