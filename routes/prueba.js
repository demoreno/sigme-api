"use strict";

var express = require('express');
var router = express.Router();
var prueba = require('../controllers/pruebaController');

router.get('/', function(req, res, next) {
    prueba.find(req,res,next);
});

module.exports = router;


