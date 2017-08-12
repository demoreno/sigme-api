"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {

    let usuarios = sequelize.define('usuarios', {
            id : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            identificacion : {
                type : DataTypes.STRING,
                field : 'identificacion'
            },
            nombre : {
                type : DataTypes.STRING,
                field : 'p_nombre'
            },
            apellido : {
                type : DataTypes.STRING,
                field : 'p_apellido'
            },
            genero : {
                type : DataTypes.STRING,
                field : 'sexo'
            },
            fecha_nacimiento : {
                type : DataTypes.DATE,
                field : 'fecha_nacimiento'
            },
            email : {
                type : DataTypes.STRING,
                field : 'email'
            },
            user : {
                type : DataTypes.STRING,
                field : 'username'
            },
            pass : {
                type : DataTypes.STRING,
                field : 'pass'
            },
            id_rol : {
                type : DataTypes.INTEGER,
                field : 'id_rol'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    usuarios.belongsTo(models.roles , {foreignKey: 'id_rol'});
                }
            }
        }
    );

    return usuarios;
};
