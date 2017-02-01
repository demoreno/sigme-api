"use strict";

var response = require('../utils/response');
var models = require('../models/');

class EstadosController {

    constructor(){

    }

    find(req,res,next){

        models.estados.findAll({
            include : [
                {
                    model : models.ciudades,
                    as : 'ciudades'
                }
            ]
        }).then((instance) =>{
            response.send(res,202,instance,null);
        }).catch((err) => {
            response.send(res,500,null,err);
        });


    }
}

module.exports = new EstadosController();