module.exports = function (sequelize, DataTypes){
    return sequelize.define('beer',{
        name:{
            type:DataTypes.STRING,
            unique: true,
            isNull: false,
            validate:{
                max:30,
            }
        },
        brewery:{
            type:DataTypes.STRING,
            isNull: false,
            validate:{
                max:30,
            }
        },
        breweryLocation:{
            type:DataTypes.STRING,
            isNull: false,
            validate:{
                max:30,
            }
        },
        style:{
            type:DataTypes.STRING,
            isNull: false,
            validate:{
                max:30,
            }
        },
        abv:{
            type:DataTypes.INTEGER,
            validate:{
                

            }
        },
        rating:{
            type: DataTypes.ARRAY(DataTypes.TEXT),
        },
        validatedByBrewer:{
            type:DataTypes.BOOLEAN
        },
        comments:{
            type: DataTypes.ARRAY(DataTypes.TEXT),

        },
        owner:{
            type:DataTypes.STRING,
        }
    })
}