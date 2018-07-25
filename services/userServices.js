var sequelize = require('../db');
const user = sequelize.import('../models/userModel')
var bcrypt = require('bcryptjs');

class UserServices {

    createUser (req) {
        var pass = req.body.user.password;

        return user.create({
            email: req.body.user.email,
            passwordhash: bcrypt.hashSync(pass, 10),
            username: req.body.user.username,
            firstname: req.body.user.firstname,
            lastname: req.body.user.lastname
        })
    }

    getUser(data) {
        return user.findAll({
            where: {[Op.or]:{
                    email:{[Op.iLike]: `%${data}%`},
                    
                }
            }
        })
        
    }

    updateUser (req) {
        return user.update({
            passwordhash: bcrypt.hashSync(req.body.user.password, 10)
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
                where: {username: req.body.user.username}
        })
    }
}

module.exports = UserServices;