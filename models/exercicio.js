const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const exercicioSchema = new mongoose.Schema({
  nome: String,
  serie: Number,
  repeticao: Number,
  carga: Number,
});

// exercicioSchema.plugin(autoIncrement.plugin, { model: 'Exercicio', field: 'id' });

const Exercicio = mongoose.model('Exercicio', exercicioSchema);

module.exports = Exercicio;
