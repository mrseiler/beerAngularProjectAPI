var sequelize = require('../db');
const brewer = sequelize.import('../models/brewerModel')
var bcrypt = require('bcryptjs');

class BrewerServices {

    createBrewer (req) {
        return brewer.create({

            username:req.body.brewer.username,
            breweryname:req.body.brewer.breweryname,
            location:req.body.brewer.location,
            email:req.body.brewer.email,
            brewmaster:req.body.brewer.brewmaster,
            webpage:req.body.brewer.webpage,
            passwordhash: bcrypt.hashSync(req.body.brewer.passwordhash, 10)

        })
    }

    getBrewer (id) {
        return brewer.findOne({
            where:{
                id:id
            }
        })
    }

    updateBrewer (req) {
        return brewer.update({
                breweryname:req.body.brewer.breweryname,
                location:req.body.brewer.location,
                email:req.body.brewer.email,
                brewmaster:req.body.brewer.brewmaster,
                webpage:req.body.brewer.webpage,
                passwordhash: bcrypt.hashSync(req.body.brewer.passwordhash, 10)
            },
            {where: {id: req.body.brewer.id}}
        )
    }

    deleteBrewer (req) {
        return user.destroy({
            where:{id:req.body.brewer.id}
        })
    }

    brewerLogin (req) {
        return brewer.findOne({
            where: {
                username: req.body.brewer.username
            }
        })
    }
}

module.exports = BrewerServices;