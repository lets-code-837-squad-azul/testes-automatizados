const AlunoController = require('../controllers/AlunoController') // CONTROLE DE METODOS
const express = require('express')
const routerAluno = express.Router()

// ROTA ALUNO

// rotas para os metodos (GET, POST, DELETE, PATCH) <=(VERBOS)
routerAluno.post('', AlunoController.postAluno)
routerAluno.get('', AlunoController.findAlunos)
routerAluno.delete('/delete/:id', AlunoController.deleteAlunos)
routerAluno.patch('/patch/:id', AlunoController.patchAlunos)

module.exports = routerAluno