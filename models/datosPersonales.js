"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {

    let datosPersonales = sequelize.define('datos_personales', {
            id : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            nombre : {
                type : DataTypes.STRING,
                field : 'nombre'
            },
            apellido : {
                type : DataTypes.STRING,
                field : 'apellido'
            },
            correo : {
                type : DataTypes.STRING,
                field : 'correo'
            },
            telefono : {
                type : DataTypes.STRING,
                field : 'telefono'
            },
            fecha_nacimiento : {
                type : DataTypes.DATE,
                field : 'fecha_nacimiento'
            },
            identificacion : {
                type : DataTypes.STRING,
                field : 'identificacion'
            },
            genero : {
                type : DataTypes.STRING,
                field : 'genero'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    datosPersonales.hasOne(models.cuenta_usuarios , { foreignKey:  'id_datos_personales' , as : 'cuenta_usuario'});
                    datosPersonales.hasOne(models.medicos , { foreignKey:  'id' , as : 'datos_personales'});
                    datosPersonales.hasMany(models.citas , { foreignKey:  'id' , as : 'datos_personales'});
                }
            }
        }
    );

    return datosPersonales;
};