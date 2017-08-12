'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');
let router = express.Router();
let clinicasController = require('../controllers/ciudadesController');

router.get('/', function(req, res, next) {
    clinicasController.find(req,res,next);
});

module.exports = router;
