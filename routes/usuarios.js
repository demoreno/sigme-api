'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');
let router = express.Router();
let usuariosController = require('../controllers/usuariosController');

router.get('/', function(req, res, next) {
    usuariosController.find(req,res,next);
});

module.exports = router;
