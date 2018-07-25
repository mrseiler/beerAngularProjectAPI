var sequelize = require('../db');
var Beer = sequelize.import('../models/beerModel'); 

const Op = sequelize.Op;

module.exports = class BeerServices{

    createBeer(req){
        return Beer.create({
            beer:req.body.beer.item,
            name:req.body.beer.name,
            brewery:req.body.beer.brewery,
            breweryLocation:req.body.beer.breweryLocation,
            style:req.body.beer.style,
            abv:req.body.beer.abv,
            rating:req.body.beer.rating,
            validatedByBrewer:req.body.beer.validatedByBrewer,
            owner: req.user.id
        })
    }
    getAllBeers(){
        return Beer.findAll({

        })
    }
    getOneBeer(id){
        return Beer.findOne({
            where:{
                id:id
            }
        })
    }
    editBeer(req, id){
        return Beer.update({
            name:req.body.beer.name,
            brewery:req.body.beer.brewery,
            breweryLocation:req.body.beer.breweryLocation,
            style:req.body.beer.style,
            abv:req.body.beer.abv,
            rating:req.body.beer.rating,
            validatedByBrewer:req.body.beer.validatedByBrewer
        },
        {where: {id:id}})

    }
    searchBeer(data){
        return Beer.findAll({
            where: {[Op.or]:{
                    name:{[Op.iLike]: `%${data}%`},
                    brewery:{[Op.iLike]: `%${data}%`},
                    style:{[Op.iLike]: `%${data}%`},
                }
            }
        })
    }
    
    deleteBeer(req, id){
        return Beer.destroy({
            where:{
                id:id
            }
        })
    }
}