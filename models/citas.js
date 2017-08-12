"use strict";

/**
 * @author David Moreno <demoreno@gmail.com>
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*}
 */
module.exports = (sequelize,DataTypes) => {

    let citas = sequelize.define('citas', {
            id_cita : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            idpaciente : {
                type : DataTypes.INTEGER,
                field : 'idpaciente'
            },
            idespecialista : {
                type : DataTypes.INTEGER,
                field : 'idespecialista'
            },
            idespecialidad : {
                type : DataTypes.INTEGER,
                field : 'idespecialidad'
            },
            idclinica : {
                type : DataTypes.INTEGER,
                field : 'idcentro'
            },
            fecha : {
                type : DataTypes.DATE,
                field : 'fecha'
            },
            hora : {
                type : DataTypes.TIME,
                field : 'hora'
            },
            estatus : {
                type : DataTypes.STRING,
                field : 'status'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    //citas.belongsTo(models.datos_personales , { foreignKey:  'idpaciente' , as : 'datos_personales'});
                    citas.belongsTo(models.medicos , { foreignKey:  'idespecialista' , as : 'medico'});                    
                    citas.belongsTo(models.especialidades , { foreignKey:  'idespecialidad' , as : 'especialidad'});
                    citas.belongsTo(models.centros , { foreignKey:  'idcentro' , as : 'clinica'});                    
                }
            }
        }
    );

    return citas;
};


