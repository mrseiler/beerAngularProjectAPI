var sequelize = require('../db');
var UserBeer = sequelize.import('../models/userBeerModel.js');

const Op = sequelize.Op;

module.exports = class UserBeerServices{
    createUserBeer(req){
        return UserBeer.create({
            name:req.body.userbeer.name,
            locationhad:req.body.userbeer.locationhad,
            rating:req.body.userbeer.rating,
            comment:req.body.userbeer.comment,
            owner:req.user.id
        })
    }
    getUserBeer(name){
        return UserBeer.getOne({
            where:({
                name:name
            })
        })
    }
    getAllUserBeers(id){
        return UserBeer.findAll({
            where:{
                owner:id
            }
        })
    }
    searchUserBeers(query){
        return UserBeer.getAll({
            where: {[Op.or]:{
                    name:{[Op.iLike]: `%${query}`},
                    locationhad:{[Op.iLike]: `%${query}`},
                    rating:{[Op.iLike]: `%${query}`},
                }
            }
        })
    }
    updateUserBeer(req, name){
        return UserBeer.update({
            name:req.body.userbeer.name,
            locationhad:req.body.userbeer.locationhad,
            rating:req.body.userbeer.rating,
            comment:req.body.userbeer.comment
        },
        {where: {name:name}})
    }
    deleteUserBeer(name, user){
        return UserBeer.destroy({
            where: {name:name, owner:user}

        })
    }
}