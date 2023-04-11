const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const treinoSchema = new mongoose.Schema({
  nome: String,
  duracao: String,
  exercicios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercicio' }],
});

// treinoSchema.plugin(autoIncrement.plugin, { model: 'Treino', field: 'id' });

const Treino = mongoose.model('Treino', treinoSchema);

module.exports = Treino;
