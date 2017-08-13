"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {
    
    let estados = sequelize.define('estados', {
            id_estados : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            nombre : {
                type : DataTypes.STRING,
                field : 'nombre'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    estados.hasMany(models.ciudades,{foreignKey : 'id_estado' });
                }
            }
        }
    );

    return estados;
};
