const mongoose = require('mongoose');

// const autoIncrement = require('mongoose-auto-increment');

const usuarioSchema = new mongoose.Schema({
  cpf: {String},
  nome: String,
  altura: String,
  peso: String,
  telefone: String,
  dataNascimento: Date,
  dataInicio: Date,
  treinos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Treino' }],
});

// usuarioSchema.plugin(autoIncrement.plugin, { model: 'Usuario', field: 'id' });

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;