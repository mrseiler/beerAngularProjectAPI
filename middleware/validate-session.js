var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/userModel');
// var Brewer = sequelize.import('../models/brewerModel')

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.headers.authorization;
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' });
        else { 
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { 
                console.log("token: ",sessionToken,"  secret: ", process.env.JWT_SECRET, "decoded: ",decoded)
                if(decoded){
                    User.findOne({where: { id: decoded.id}}).then(user => { 
                        req.user = user; 
                        next();
                    },
                    function(){ 
                        res.status(401).send({error: 'Not authorized'});
                    });
                } else { 
                    res.status(400).send({error: 'Not authorized, not found'});
                }
            });
        }
    }
}

// if(decoded){
//                     if(User.findOne({where: { id: decoded.id}})){
//                     User.findOne({where: { id: decoded.id}}).then(user => { 
//                         req.user = user; 
//                         next();
//                     },
//                     function(){ 
//                         res.status(401).send({error: 'Not authorized'});
//                     });
//                     } else {
//                         Brewer.findOne({where: { id: decoded.id}}).then(brewer =>{
//                             req.brewer = brewer;
//                             next();
//                         },
//                         function(){
//                             res.status(401).send({error: 'Not authorized brewer'})
//                         })
//                     }
//                 } else { 
//                     res.status(400).send({error: 'Not authorized, not found'});
//                 }
//             });
//         }
//     }
// }