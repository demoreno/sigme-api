'use strict';

/**
 * Prueba Automatizada de peticiones HTTP
 * @author David Moreno <demoreno@gmail.com>
 */

let fs        = require("fs");
let path      = require("path");
let routes = {};
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let expect = chai.expect;

fs
    .readdirSync('./routes/')
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        let route =  path.basename(file,".js");

        describe('Testing Status HTTP Request /'+route , () => {

            it('/get', (done) => {
                chai.request(app).get('/' + route).end((err, res) => {
                    let dataResponse = JSON.parse(res.text);
                    expect(res).to.have.status(200);
                    expect(dataResponse).to.have.property('data');
                    expect(dataResponse.data).to.have.property('rows');
                    done();
                });
            });

        });
    });


