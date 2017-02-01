"use strict";

var express = require('express');
var router = express.Router();
var response = require('../utils/response');
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

    ciudades.findAll({
        include : [
            {
                model : estados
            }
        ]
    }).then((instance) =>{
        let data = instance;
        response.send(res,202,data,null);
    }).catch((err) => {
        console.log(err);
        response.send(res,500,null,err);
    });

});

module.exports = router;
