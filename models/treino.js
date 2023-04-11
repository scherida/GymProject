const mongoose = require('mongoose');

const treinoSchema = new mongoose.Schema({
  nome: String,
  duracao: String,
  exercicios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercicio' }],
  usuario : { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' }
});

const Treino = mongoose.model('Treino', treinoSchema);

module.exports = Treino;
