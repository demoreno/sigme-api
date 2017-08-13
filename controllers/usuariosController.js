"use strict";

/**
 * @class CuentaUsuarioController
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */

let response = require('../utils/response');
let models = require('../models/');

class UsuariosController {

    constructor(){

    }

    /**
     * @method find
     * @param req
     * @param res
     * @param next
     */
    find(req,res,next){
        
       models.usuarios.findAll({
           include : [
               {
                   model : models.roles
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

module.exports = new UsuariosController();