const user = require('./userModel')
const userbeer = require('./userBeerModel')

newFunction();



module.exports = function newFunction() {
    user.associate(userbeer);
    userbeer.associate(user);
}
// module.exports = user.hasMany(userbeer, {as: 'userbeers'})

// Project.hasMany(User, {as: 'Workers'})

