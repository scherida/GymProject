const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreinoSchema = new Schema({
  codigo: Number,
  nomeTreino: {
    type: String,
    required: true
  },
  duracao: {
    type: String,
    required: true
  },
  exercicios: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'treino' 
  }],
  usuario : { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'usuario' 
  }
});

module.exports = mongoose.model('treino', TreinoSchema);
