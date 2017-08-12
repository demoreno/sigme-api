"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {
    
    let medicos = sequelize.define('medicos', {
            id : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            id_usuario : {
                type : DataTypes.INTEGER,
                field : 'idusuario'
            }
        },
        {
            classMethods : {
                associate : (models) => {                    
                    //medicos.belongsTo(models.datos_personales,{foreignKey : 'id_usuario', as : 'datos_personales' });
                    medicos.belongsToMany(models.especialidades , {through : 'medicos_especialidades', foreignKey : 'id_medico'});                    
                    medicos.belongsToMany(models.centros , {through : 'medicos_clinicas', foreignKey : 'id_medico'});                    
                    medicos.hasMany(models.citas , { foreignKey:  'id_cita' , as : 'medico'});
                }
            }
        }
    );

    return medicos;
};
