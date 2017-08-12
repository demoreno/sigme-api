"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {
    
    let medicamentos = sequelize.define('medicamentos', {
            id : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            descripcion : {
                type : DataTypes.STRING,
                field : 'descripcion'
            }
        },
        {
            classMethods : {
                /*associate : (models) => {
                    estados.hasMany(models.ciudades,{foreignKey : 'id_estado' });
                }*/
            }
        }
    );

    return medicamentos;
};
