"use strict";

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
                    ciudades.belongsTo(models.estados , { foreignKey:  'id_estado' , as : 'estado'});
                    ciudades.hasMany(models.centros,{foreignKey : 'id_clinica', as : 'clinicas'});
                }
            }
        }
    );

    return ciudades;
};