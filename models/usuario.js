const mongoose = require('mongoose');

// const autoIncrement = require('mongoose-auto-increment');

// const usuarioSchema = new mongoose.Schema({
//   codigo: Number,
//   cpf: String,
//   nome: String,
//   altura: String,
//   peso: String,
//   telefone: String,
//   dataNascimento: Date,
//   dataInicio: Date,
//   treinos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Treino' }],
// });
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

// usuarioSchema.plugin(autoIncrement.plugin, { model: 'Usuario', field: 'id' });

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;