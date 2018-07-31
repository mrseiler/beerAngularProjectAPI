require('dotenv').config()
var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const rfs = require('rotating-file-stream')
var cors = require('cors');
app.use(cors());

routes = require('./routes');

sequelize.sync(); // tip: {force: true} for resetting tables\

app.use(bodyParser.json());

app.use('/', routes)




app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}.`)
});