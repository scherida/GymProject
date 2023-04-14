const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AparelhoSchema = new Schema({
  nome: String,
  descricao: String,
});

module.exports = mongoose.model('aparelho', AparelhoSchema);