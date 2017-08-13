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
                field : 'idrol'
            },
            id_datos_personales : {
                type: DataTypes.INTEGER,
                field : 'id_datos_personales'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    usuarios.belongsTo(models.datos_personales , {foreignKey: 'id_datos_personales'});
                    usuarios.hasOne(models.roles , {foreignKey: 'id'});
                }
            }
        }
    );

    return usuarios;
};
