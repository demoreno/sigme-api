"use strict";

/**
 * @method
 * @author David Moreno <demoreno@gmail.com>
 * @date 12/08/2017
 * @copyright David Moreno
 */

let fs        = require("fs");
let path      = require("path");
let controllers = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        console.log('aqui');
        console.log(file);
        /*let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;*/
    });