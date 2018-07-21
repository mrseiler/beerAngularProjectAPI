var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/userModel'); 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

module.exports = router;