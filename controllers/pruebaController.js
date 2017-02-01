"use strict";

var response = require('../utils/response');
var models = require('../models');

class PruebaController {

    constructor(){

    }

    find(req,res,next){
        response.send(res,200);
    }
};

module.exports = new PruebaController();
