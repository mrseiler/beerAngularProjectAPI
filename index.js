require('dotenv').config()
var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const rfs = require('rotating-file-stream')

// var logDirectory = path.join(__dirname, 'logs')

// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// var accessLogStream = rfs('access.log', {
//     interval: '1d',
//     path: logDirectory
// })

// Rotating file logging

// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// Single file logging

// app.use(morgan('combined', {stream: accessLogStream}))

routes = require('./routes');

sequelize.sync(); // tip: {force: true} for resetting tables\

app.use(bodyParser.json());

app.use('/', routes)




app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}.`)
});