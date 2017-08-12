"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {
    
    let medicosEspecialidades = sequelize.define('medicos_especialidades', {
            id_medico : {
                type : DataTypes.INTEGER,
                field : 'id_medico',
            },
            id_especialidades : {
                type : DataTypes.INTEGER,
                field : 'id_especialidad'
            }
        },
        {
            classMethods : {
                /*associate : (models) => {
                    
                }*/
            }
        }
    );

    return medicosEspecialidades;
};
