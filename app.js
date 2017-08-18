"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 */

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let app = express();
let http = require('http');
let config = require('./config/config');
let portApp = config.ApiPort || 8080;


http.createServer(app).listen(portApp, function(){

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    require('./routes')(app);

    console.log('Express server listening on port ' + portApp);
});

module.exports = app;
