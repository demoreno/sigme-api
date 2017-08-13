"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {

    let roles = sequelize.define('roles', {
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
                associate : (models) => {
                    roles.hasMany(models.usuarios , { foreignKey:  'id' });
                }
            }
        }
    );

    return roles;
};
