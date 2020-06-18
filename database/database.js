const Sequelize = require('sequelize');

const connection = new Sequelize('<namedatabase>', 'root', '<password>.',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;