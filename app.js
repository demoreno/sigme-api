"use strict";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');

var config = require('./config/config');

http.createServer(app).listen(3000, function(){

    var index = require('./routes/index');
    var users = require('./routes/users');
    var estados = require('./routes/estados');
    var ciudades = require('./routes/ciudades');
    var clinicas = require('./routes/clinicas');
    var prueba = require('./routes/prueba');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', index);
    app.use('/users', users);
    app.use('/estados', estados);
    app.use('/ciudades', ciudades);
    app.use('/clinicas', clinicas);
    app.use('/prueba', prueba);
    console.log('Express server listening on port ' + config.ApiPort);
});

module.exports = app;
