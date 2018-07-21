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
        // Model: associate = (model) => {
        //     user.userBeers(model.userBeers)
        // }
    })
};

// {
//     'user':{
//         'email':'test@test.com',
//         'password':'12345',
//     }
// }