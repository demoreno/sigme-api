/**
 * Clase controller oauthNew
 * @class oauthController
 * @module controllers
 * @author Daniel Prato <daniel.prato@sigis.com.ve>
 */
"use strict";
var oauth = require('../utils/oauthInstance');
var models = require('../models');
var globalization = require('../utils/globalizationInstance');
var responseUtil = require('../utils/response');

class oauthController {
    /**
     * IO Constructor
     * @constructor
     */
    constructor(){}

    /**
     * Metodo utilizado por HTTP POST
     * @method create
     * @param req
     * @param res
     */
    create(req,res){
        oauth.grant().call(this,req,res,function(result){
            var status = result && result.code ? result.code : globalization.translate('status_codes').internal_server_error;
            var data = result && result.data ? result.data : null;
            var error = result && result.error && result.error_description ? {tag:result.error,description:result.error_description}: null;
            responseUtil.send(res,status,data,error);
        });
    }
    /**
     * Metodo utilizado por HTTP PUT
     * @method update
     * @param req
     * @param res
     */
    update(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base PUT',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
    /**
     * Metodo utilizado por HTTP DELETE
     * @method destroy
     * @param req
     * @param res
     */
    destroy(req,res){
        var tokenModel = models.access_token;

        if(req && req.body && req.body.token){
            tokenModel.destroy({
                where: {
                    token: req.body.token
                }
            }).then(function(result){
                var code = globalization.translate('status_codes').ok;
                responseUtil.send(res,code,{
                    deleted : result
                },null);
            }).catch(function(err){
                var code = globalization.translate('status_codes').internal_server_error;
                responseUtil.send(res,code,null,err);
            });
        }else{
            var code = globalization.translate('status_codes').bad_request;
            responseUtil.send(res,code,null,globalization.translate('body_incomplete'));
        }
    }
    /**
     * Metodo utilizado por HTTP GET (GET_ONE)
     * @method findOne
     * @param req
     * @param res
     */
    findOne(req,res){
        let id = req.param.id;
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base GET ONE',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
    /**
     * Metodo utilizado por HTTP GET (GET_ALL)
     * @method find
     * @param req
     * @param res
     */
    find(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base GET ALL',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
    /**
     * Metodo utilizado por HTTP OPTIONS
     * @method options
     * @param req
     * @param res
     */
    options(req,res){
        res.status(200).json(
            {
                sucess: true,
                messages: 'Estructura base OPTIONS',
                errors: null,
                data: [{}, {}, {}]
            }
        );
    }
}

module.exports = new oauthController();