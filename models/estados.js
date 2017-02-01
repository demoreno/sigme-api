"use strict";

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
                    estados.hasMany(models.ciudades,{foreignKey : 'id_ciudades' });
                }
            }
        }
    );

    return estados;
};
