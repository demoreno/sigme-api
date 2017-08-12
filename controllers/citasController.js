"use strict";

/**
 * @class CitasController
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */

let response = require('../utils/response');
let models = require('../models/');

class CitasController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){
        
        models.citas.findAll({
            include : [
                {
                    model : models.datos_personales,
                    as : 'datos_personales'
                },
                {
                    model : models.medicos,
                    as : 'medico',
                    include : [
                        {
                            model : models.datos_personales,
                            as : 'datos_personales'
                        }
                    ]
                },
                {
                    model : models.especialidades,
                    as : 'especialidad'
                },
                {
                    model : models.centros,
                    as : 'clinica'
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

module.exports = new CitasController();