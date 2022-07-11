const express = require('express');
const routes = express.Router();
const AlunoRouter = require('./Aluno.Router') // ROTA ALUNO
const AulaRouter = require('./Aula.Router') // ROTA AULA
const ProfessorRouter = require('./Professor.Router') // ROTA PROFESSOR

// GERENCIADOR DE ROTAS
routes.use('/aluno', AlunoRouter) // acesso as rotas
routes.use('/aula', AulaRouter) // acesso as rotas
routes.use('/professor', ProfessorRouter) // acesso as rotas



module.exports = routes;