'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');
let router = express.Router();
let user = require('../controllers/usuariosController');

router.get('/', function(req, res, next) {
  user.find(req,res,next);
});

module.exports = router;
