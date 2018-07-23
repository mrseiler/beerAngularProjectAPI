module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique:true,
            validate:{
                isEmail:true,
                notEmpty:true,
                isLowercase:true,
            }
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notContains: ' ' ,
                min:5,
            }
        },
        username:{
            type:DataTypes.STRING,
            validate:{
                max:30,
                notEmpty:true,
            }
        },
        firstname:{
            type:DataTypes.STRING,
            validate:{
                max:30,
                notEmpty:true,
            }
        },
        lastname:{
            type:DataTypes.STRING,
            validate:{
                max:30,
                notEmpty:true,
            }
        },
        friends:{
            type:DataTypes.ARRAY(DataTypes.TEXT),
        }
        // Model: associate = (models) => {
        //     userModel.hasMany(models.userBeerModel)
        // }
    })
};

// {
//     "user":{
//         "email":"bob@bob.com",
//         "passwordhash":"12345",
//         "username":"bobster",
//         "firstname":"bob",
//         "lastname":"roberts",
//         "friends":["bill", "billybob","bobby"]
//     }
// }