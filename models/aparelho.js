const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AparelhoSchema = new Schema({
  codigo: Number,
  nomeAparelho: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('aparelho', AparelhoSchema);