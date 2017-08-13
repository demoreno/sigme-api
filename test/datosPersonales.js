'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let expect = chai.expect;

chai.use(chaiHttp);

describe('Test Data /datos_personales ' , () =>{

    it('/get' , (done) =>{
        chai.request(app).get('/datosPersonales').end((err,res) => {
            let dataResponse = JSON.parse(res.text);
            expect(dataResponse.data.rows[0]).to.have.property('id');
            expect(dataResponse.data.rows[0]).to.have.property('nombre');
            expect(dataResponse.data.rows[0]).to.have.property('apellido');
            expect(dataResponse.data.rows[0]).to.have.property('correo');
            expect(dataResponse.data.rows[0]).to.have.property('telefono');
            expect(dataResponse.data.rows[0]).to.have.property('fecha_nacimiento');
            expect(dataResponse.data.rows[0]).to.have.property('identificacion');
            expect(dataResponse.data.rows[0]).to.have.property('genero');
            done();
        });
    });

    it('/post' , (done) =>{

        let data = {
            "nombre": "David",
            "apellido": "Moreno",
            "telefono": "04141383491",
            "correo": "demoreno@gmail.com",
            "fecha_nacimiento": "1991-09-09",
            "identificacion": "19736656",
            "genero": "M"
        };
        
        chai.request(app).post('/datosPersonales')
            .send(data)
            .end((err,res) =>{
                expect(res).to.have.status(200);
                done();
            });
    });
});