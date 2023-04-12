const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  codigo: Number,
  cpf: {
    type: String,
    required: true
  },
  altura: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  telefone: {
    type: String,
    required: false
  },
  dataNascimento: {
    type: Date,
    required: false
  },
  dataInicio: {
    type: Date,
    required: true,
    default: Date.now()
  },
  treinos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Treino'
  }]
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;