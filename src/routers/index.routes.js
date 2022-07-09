const express = require('express');
const routes = express.Router();
const AlunoRouter = require('./Aluno.Router')
const AulaRouter = require('./Aula.Router')
const ProfessorRouter = require('./Professor.Router')

routes.use('/aluno', AlunoRouter)
routes.use('/aula', AulaRouter)
routes.use('/professor', ProfessorRouter)



module.exports = routes;