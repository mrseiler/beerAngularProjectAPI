var sequelize = require('../db');
const user = sequelize.import('../models/userModel')

var bcrypt = require('bcryptjs');

class UserServices {

    createUser (req) {
        var email = req.body.user.email;
        var pass = req.body.user.passwordhash;

        return user.create({
            email: email,
            passwordhash: bcrypt.hashSync(pass, 10)
        })
    }

    getUser (data) {
        return user.findAll({
            where: {[Op.or]:{
                    email:{[Op.iLike]: `%${data}%`},
                    
                }
            }
        })
        
    }

    updateUser (req) {
        return user.update({
            passwordhash:bcrypt.hashSync(req.body.user.passwordhash, 10)
        },
        {where:{id:req.body.id}})
    }

    deleteUser (req) {
        return user.destroy({
            where:{id:req.body.id}
        })
    }

    userLogin (req) {
        return user.findOne({
                where:{email: req.body.user.email}
        })
    }
}

module.exports = UserServices;