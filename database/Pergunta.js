const Sequelize = require('sequelize');
const connection = require('./database');

//define o modelo utilizado do banco de dados
const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        //impede que seja inserido valores nulos
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//Realiza a sincronização das informações contidas aqui com o banco de dados
Pergunta.sync({force:false}).then(() => {});

module.exports = Pergunta;