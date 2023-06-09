const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExercicioSchema = new Schema({
  codigo: Number,
  nomeExercicio: {
    type: String,
    required: true
  },
  serie: {
    type: Number,
    required: true
  },
  repeticao: {
    type: Number,
    required: true
  },
  carga: {
    type: Number,
    required: false
  },
  aparelho : { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'aparelho' 
  },
  treino : { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'treino' 
  }
});

module.exports = mongoose.model('exercicio', ExercicioSchema);
