const AlunoController = require('../controllers/AlunoController')
const express = require('express')
const routerAluno = express.Router()


routerAluno.post('', AlunoController.postAluno)
routerAluno.get('', AlunoController.findAlunos)
routerAluno.delete('/delete/:id', AlunoController.deleteAlunos)
routerAluno.patch('/patch/:id', AlunoController.patchAlunos)

module.exports = routerAluno