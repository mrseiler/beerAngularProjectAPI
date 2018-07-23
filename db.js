<<<<<<< HEAD
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DBNAME, process.env.PGUSER, process.env.PGPASS, {
    dialect: "postgres",
    port: 5432,
    host: process.env.PGHOST
=======
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGNAME, process.env.PGUSER, process.env.PGPASS, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    port:5432
>>>>>>> 44d9eeac98dbb2336ca6557eda8e857a03871818
});

sequelize.authenticate().then(
    function() {
<<<<<<< HEAD
        console.log("connected to the database");
    },
    function(err) {
=======
        console.log('Connected to holdmybeer postgres database');
    },
    function(err){
>>>>>>> 44d9eeac98dbb2336ca6557eda8e857a03871818
        console.log(err);
    }
);

module.exports = sequelize;