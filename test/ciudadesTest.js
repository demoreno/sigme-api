'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let expect = chai.expect;

chai.use(chaiHttp);

describe('Test Data /ciudades ' , () =>{

    it('/get' , (done) =>{
        chai.request(app).get('/ciudades').end((err,res) => {
            let dataResponse = JSON.parse(res.text);
            /*expect(dataResponse.data.rows[0]).to.have.property('id_estados');
            expect(dataResponse.data.rows[0]).to.have.property('nombre');
            expect(dataResponse.data.rows[0]).to.have.property('ciudades');*/
            done();
        });
    });

});