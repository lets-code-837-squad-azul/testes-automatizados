//Criando o Schema

const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  disciplina: {
    type: String,
    required: true,
  },
  endereco: {
    type: Object,
    required: true,
  },
  grauEscolaridade: {
    type: String,
    required: false,
  },
  etnia: {
    type: String,
    required: false,
  },
  genero: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Registrando o schema
module.exports = mongoose.model('Professores', ProfessorSchema);
