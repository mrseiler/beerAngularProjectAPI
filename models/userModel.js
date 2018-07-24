
module.exports = function (sequelize, DataTypes) {
    
    var user =  sequelize.define('user', {
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
        },
        isbrewer:{
            type:DataTypes.BOOLEAN,
            allowNull:true,
        }
        // Model: associate = (models) => {
        //     userModel.hasMany(models.userBeerModel)
        // }
    },
    {classMethods:{
                associate:function(models){
                    user.hasMany(models.userbeer, { foreignKey: user.id, as: 'userbeers'} );
                }
            }
        }
    )

    user.associate = function(models){
        user.hasMany(models.userbeer,{foreignKey: models.user.id})
        console.log("models: ",models)
    }
    
    return user;
};

// const City = sequelize.define('city', { countryCode: Sequelize.STRING });
// const Country = sequelize.define('country', { isoCode: Sequelize.STRING });

// Here we can connect countries and cities base on country code
// Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
// City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});

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