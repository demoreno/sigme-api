"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {
    
    let especialidades = sequelize.define('especialidades', {
            id_especialidad : {
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
                    especialidades.belongsToMany(models.medicos,{ through : 'medicos_especialidades' , foreignKey : 'id_especialidad'});
                    especialidades.hasOne(models.citas,{ foreignKey : 'idespecialidad' , as : 'especialidad'});
                }
            }
        }
    );

    return especialidades;
};
