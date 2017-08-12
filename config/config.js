'use strict'

let config = {
    /**
     * Puerto utilizado para desplegar el server
     */
    ApiPort : 3000,
    /**
     * Configuración de paŕámetros de conexion a base de datos
     */
    databaseConfig : {
        /**
         * Nombre de usuario de base de datos
         */
        username : 'postgres',
        /**
         * Password usuario base de datos
         */
        password : '123456',
        /**
         * Nombre de la base de datos
         */
        databaseName:'sigme',
        /**
         * Log de transacciones de sequelize por defecto en false
         */
        logSequelize:false
    },

};

module.exports = config;