'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');
let router = express.Router();
let estadosController = require('../controllers/estadosController');

router.get('/', function(req, res, next) {
        estadosController.find(req,res,next);
});

module.exports = router;



