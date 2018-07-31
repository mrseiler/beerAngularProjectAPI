module.exports = function (sequelize, DataTypes){
    var userbeer =  sequelize.define('userbeer', {
        name: {
            type: DataTypes.STRING,
            validate:{
                notEmpty:true,
                max:30,
            }
        },
        locationhad:{
            type: DataTypes.STRING,
            validate:{
                notEmpty:true,
                max:30,
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            validate:{
                max:5,
                notEmpty:true,
            }
        },
        comment: {
            type:DataTypes.STRING,
            validate:{
                max:200,
            }
        },
        owner: {
            type:DataTypes.INTEGER,
            validate:{
                max: 30,
            }
        }
    }
        
    )

    userbeer.associate = function(models){
        userbeer.belongsTo(models.user, {foreignKey:models.user.id})
    }
    return userbeer;
}