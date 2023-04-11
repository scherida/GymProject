const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');


const url = 'mongodb://127.0.0.1:27017/gymProject';
const db = mongoose.connect(url);

// Inicialização do mongoose-auto-increment
autoIncrement.initialize(mongoose.connection);

mongoose.connection.on('connected', () => console.log('Conectado ao MongoDB!'));
mongoose.connection.on('error', (erro) => console.log('Erro: ' + erro));

module.exports = db;