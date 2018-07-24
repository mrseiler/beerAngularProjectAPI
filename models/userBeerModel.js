module.exports = function (sequelize, DataTypes){
    var userbeer =  sequelize.define('userbeer', {
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
            type:DataTypes.INTEGER,
            validate:{
                max: 30,
            }
        }
    },
    {classMethods:{
                associate:function(models){
                    userbeer.belongsTo(models.user, { foreignKey:models.user.id, as:'User'} );
                }
            }
        }
    )

    userbeer.associate = function(models){
        userbeer.belongsTo(models.user, {foreignKey:models.user.id})
    }
    return userbeer;
}
// const City = sequelize.define('city', { countryCode: Sequelize.STRING });
// const Country = sequelize.define('country', { isoCode: Sequelize.STRING });

// Here we can connect countries and cities base on country code
// Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
// City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});

// {
//     "userbeer":{
//     "name":"Dragonfly",
//     "locationhad":"O'Malleys",
//     "rating":"2",
//     "comment":"It was awesome"
//     }
// }