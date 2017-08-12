"use strict";

/**
 * @class EspecialidadesController
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */

let response = require('../utils/response');
let models = require('../models/');

class EspecialidadesController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){
        
        models.especialidades.findAll().then((instance) =>{
            response.send(res,202,instance,null);
        }).catch((err) => {
            response.send(res,500,null,err);
        });


    }
}

module.exports = new EspecialidadesController();