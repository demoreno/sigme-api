"use strict";

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let app = express();
let http = require('http');

let config = require('./config/config');

http.createServer(app).listen(3000, function(){

    let routes = require('./routes')(app);
   
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    console.log('Express server listening on port ' + config.ApiPort);
});

module.exports = app;
