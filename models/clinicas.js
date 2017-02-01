"use strict";

module.exports = (sequelize,DataTypes) => {

    let centros = sequelize.define('centros', {
            id_clinica : {
                type : DataTypes.INTEGER,
                field : 'id',
                autoIncrement : true,
                primaryKey : true,
                allowNull : false
            },
            razon : {
                type : DataTypes.STRING,
                field : 'razon'
            },
            rif : {
                type : DataTypes.STRING,
                field : 'rif'
            },
            nombre : {
                type : DataTypes.STRING,
                field : 'razon'
            },
            telefonos : {
                type : DataTypes.STRING,
                field : 'telefonos'
            },
            email : {
                type : DataTypes.STRING,
                field : 'email'
            },
            direccion : {
                type : DataTypes.STRING,
                field : 'direccion'
            },
            id_ciudad : {
                type : DataTypes.INTEGER,
                field : 'idciudad'
            }
        },
        {
            classMethods : {
                associate : (models) => {
                    centros.belongsTo(models.ciudades , { foreignKey:  'id_ciudad' , as : 'ciudad'});
                }
            }
        }
    );

    return centros;
};


