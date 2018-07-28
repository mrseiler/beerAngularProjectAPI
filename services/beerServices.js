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
    addRating(name, rating){
        return Beer.update({
            rating:sequelize.fn('array_append', Beer.sequelize.col('rating'), rating)
        },
        {where: {name:name}})
        
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
    searchBeer(value, data){
        return Beer.findAll({
            where: {[Op.or]:{
                    [value]:{[Op.iLike]: `%${data}%`},
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