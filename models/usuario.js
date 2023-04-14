const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  codigo: Number,
  cpf: {
    type: String,
    required: true
  },
  nomeUsuario: {
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
    required: true
  },
  treinos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'treino'
  }]
});

module.exports = mongoose.model('usuario', UsuarioSchema);