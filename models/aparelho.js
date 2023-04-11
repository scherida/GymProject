const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const aparelhoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
});

// aparelhoSchema.plugin(autoIncrement.plugin, { model: 'Aparelho', field: 'id' });

const Aparelho = mongoose.model('Aparelho', aparelhoSchema);

module.exports = Aparelho;