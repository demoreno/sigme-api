"use strict";

/**
 * @class ClinicasController
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */

let response = require('../utils/response');
let models = require('../models/');

class ClinicasController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){
        
       models.centros.findAll({
        include : [
            {
                model : models.ciudades,
                as : 'ciudad',
                include : [
                    {
                        model : models.estados,
                        as : 'estado'
                    }
                ]
            }
        ]
    }).then((instance) =>{
        let data = instance;
        response.send(res,202,data,null);
    }).catch((err) => {
        console.log(err);
        response.send(res,500,null,err);
    });
    }
}

module.exports = new ClinicasController();