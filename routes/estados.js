"use strict";

var express = require('express');
var router = express.Router();
var estados = require('../controllers/estadosController');

router.get('/', function(req, res, next) {
        estados.find(req,res,next);
});

module.exports = router;



