"use strict";

/**
 * @class MedicosController
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */

let response = require('../utils/response');
let models = require('../models/');

class MedicosController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){
        
        models.medicos.findAll({
            include : [
                  {
                    model : models.datos_personales, 
                    as : 'datos_personales',
                    include : [
                        {
                            model : models.cuenta_usuarios,
                            as : 'cuenta_usuario'
                        }
                    ]
                },
                {
                    model : models.especialidades,                    
                    through : {
                        attributes : [],
                        model : models.medicos_especialidades
                    }
                },
                {
                    model : models.centros,                    
                    through : {
                        attributes : [],
                        model : models.medicos_clinicas
                    }
                }
            ]
        }).then((instance) =>{
            response.send(res,202,instance,null);
        }).catch((err) => {
            console.log(err);
            response.send(res,500,null,err);
        });


    }
}

module.exports = new MedicosController();