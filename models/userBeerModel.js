module.exports = function (sequelize, DataTypes){
    return sequelize.define('userbeer', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                notEmpty:true,
                max:30,
                //does not contain weird stuff
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
                max:3,
                notEmpty:true,
            }
        },
        comment: {
            type:DataTypes.STRING,
            validate:{
                max:200,
                //doesn't contain weird stuff
            }
        },
        owner: {
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                max: 30,
                notEmpty:true,
            }
        }
        // Model: associate = (models) => {
        //     userbeer.belongsTo(models.userModel)
        // },
    })
}


// {
//     "userbeer":{
//     "name":"Dragonfly",
//     "locationhad":"O'Malleys"
//     "rating":"2"
//     "comment":"It was awesome"
//     }
// }