"use strict";

/**
 * @class DatosPersonalesController
 * @author David Moreno <demoreno@gmail.com>
 * @date 13/08/2017
 * @copyright David Moreno
 */

let response = require('../utils/response');
let models = require('../models/');

class DatosPersonalesController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){

        models.datos_personales.findAll({
            include : [
                {
                    model : models.usuarios,
                    include : [
                        {
                            model:models.roles
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

    /**
     * @method create
     * @param req
     * @param res
     * @param next
     */
    create(req,res,next){
        models.datos_personales.create(req.body).then((instance) => {
            response.send(res,200,instance,null);
        }).catch((err) =>{
            console.log(err);
            response.send(res,500,null,err);
        });
    }
}

module.exports = new DatosPersonalesController();