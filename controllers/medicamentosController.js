"use strict";
/**
 * @class MedicamentosController
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */


let response = require('../utils/response');
let models   = require('../models/');

class MedicamentosController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){
        
        models.medicamentos.findAll().then((instance) =>{
            response.send(res,202,instance,null);
        }).catch((err) => {
            response.send(res,500,null,err);
        });


    }
}

module.exports = new MedicamentosController();