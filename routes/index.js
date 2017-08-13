'use strict';
/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

module.exports = (app) => {
    let fs        = require("fs");
    let path      = require("path");

    fs
        .readdirSync(__dirname)
        .filter(function(file) {
            return (file.indexOf(".") !== 0) && (file !== "index.js");
        })
        .forEach(function(file) {
            let route = require('./' + file);
            let nameRoute =  path.basename(file,".js");
            app.use('/' + nameRoute, route);
        });
    
};
