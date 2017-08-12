"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {
    
    let medicosClinicas = sequelize.define('medicos_clinicas', {
            id_medico : {
                type : DataTypes.INTEGER,
                field : 'id_medico',
            },
            id_clinica : {
                type : DataTypes.INTEGER,
                field : 'id_clinica'
            }
        },
        {
            classMethods : {
                /*associate : (models) => {
                    
                }*/
            }
        }
    );

    return medicosClinicas;
};
