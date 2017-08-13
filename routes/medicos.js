'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');
let router = express.Router();
let medicosController = require('../controllers/medicosController');

router.get('/', function(req, res, next) {
    medicosController.find(req,res,next);
});

module.exports = router;

