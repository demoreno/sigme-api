"use strict";

let fs        = require("fs");
let path      = require("path");
let Sequelize = require("sequelize");
let config = require('../config/config');
let sequelize = new Sequelize(config.databaseConfig.databaseName, config.databaseConfig.username, config.databaseConfig.password , {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: config.databaseConfig.logSequelize,
    define: {
        timestamps: false // true by default
    }

});
let db        = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;