//Criando o Schema

const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

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
    type: String, // ou Object ?
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

// Registrando o mongoose paginate da Aplicação
// UserSchema.plugin(mongoosePaginate);

// Registrando o schema
module.exports = mongoose.model('Aula', AulaSchema);