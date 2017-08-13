'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');
let router = express.Router();
let datosPersonalesController = require('../controllers/datosPersonalesController');

router.get('/', function(req, res, next) {
    datosPersonalesController.find(req,res,next);
});

router.post('/', function(req, res,next) {
    datosPersonalesController.create(req,res,next);
});

module.exports = router;
