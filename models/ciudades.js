"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {

    let ciudades = sequelize.define('ciudades', {
            id_ciudades : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            id_estado : {
                type : DataTypes.INTEGER,
                field : 'idestado'
            },
            nombre : {
                type : DataTypes.STRING,
                field : 'nombre'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    ciudades.belongsTo(models.estados , { foreignKey:  'id_estado' , as : 'estados'});
                    ciudades.hasMany(models.centros,{foreignKey : 'id_ciudad', as : 'clinicas'});
                }
            }
        }
    );

    return ciudades;
};