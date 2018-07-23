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
        // rating:{
        //     type:DataTypes.ARRAY,
        //     validate:{
                
        //     }
        // },
        validatedByBrewer:{
            type:DataTypes.BOOLEAN
        },
        // comments:{
        //     type:DataTypes.ARRAY,

        // }
    })
}


// {
//     "beer":{
//     		"name":"Dragonfly",
//             "brewery":"Upland",
//             "breweryLocation":"Bloomington, IN",
//             "style":"IPA",
//             "abv":"6",
//             "rating":"4",
//             "validatedByBrewer":"true"
//     }
// }


// {
//     "beer":{
//     		"name":"Centennial",
//             "brewery":"Founder's",
//             "breweryLocation":"Grand Rapids, MI",
//             "style":"IPA",
//             "abv":"7",
//             "rating":"5",
//             "validatedByBrewer":"true"
//     }
// }