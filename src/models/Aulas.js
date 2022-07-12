const mongoose = require('mongoose');

//SCHEMA ("tabela")
const AulaSchema = new mongoose.Schema({
  aluno: {
    type: Object,
    required: true
  },
  professor: {
    type: Object,
    required: true
  },
  disciplina: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  horarioInicio: {
    type: Date,
    required: false
  },
  horarioFim: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Registrando o schema
module.exports = mongoose.model('Aulas', AulaSchema);
