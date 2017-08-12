"use strict";

let express = require('express');
let router = express.Router();
let response = require('../utils/response');
let models = require('../models');

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
