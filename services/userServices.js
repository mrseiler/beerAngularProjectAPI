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
    getOneUser(id) {
        return user.findOne({
            where: {id: id}
        })
    }

    updateUser (req, id) {
        return user.update({
            passwordhash: bcrypt.hashSync(req.body.user.password, 10),
            firstname: req.body.user.firstname,
            lastname: req.body.user.lastname,
            username: req.body.user.username,
            email: req.body.user.email
        },
        {where:{id: id}})
    }

    deleteUser (id) {
        return user.destroy({
            where:{id: id}
        })
    }

    userLogin (req) {
        return user.findOne({
                where: {username: req.body.user.username}
        })
    }
}

module.exports = UserServices;