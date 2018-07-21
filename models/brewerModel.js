module.exports = function (sequelize, DataTypes){

    return sequelize.define('brewer',{
        username:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate:{
                max: 20,
                notContains: ' ',
            }
        },
        breweryname:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate:{
                notEmpty: true,
                max: 30,
            }
        },
        location:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                max: 30,
            }
        },
        email:{
            type: DataTypes.STRING,
            unique:true,
            allowNull: false,
            validate:{
                isEmail:true,
                notEmpty:true,
                isLowercase:true,
                notContains: ' ',
            }
        },
        brewmaster:{
            type:  DataTypes.STRING,
            validate:{
                max: 30,
            }
        },
        webpage:{
            type:  DataTypes.STRING,
            validate:{
                isURL: true,
                notContains: ' ',
            }
        },
        passwordhash:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
                notContains: ' ',
                min: 5,
                max: 30,
            },
        }
    })
}

// {
//     "brewer":{
//         "username":"user1",
//         "breweryname":"Coors",
//         "location":"Boulder, CO",
//         "email":"coors@coors.com",
//         "brewmaster":"your mom",
//         "webpage":"coors.com",
//         "passwordhash":"12345"
//     }
// }