const Sequelize = require('sequelize');

const connection = new Sequelize('perguntasform', 'root', 'Tropix123.',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;