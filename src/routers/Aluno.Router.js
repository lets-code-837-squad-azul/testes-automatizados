const AlunoController = require('../controllers/AlunoController')
const express = require('express')
const routerAluno = express.Router()


routerAluno.post('', AlunoController.postAluno)

module.exports = {
    routerAluno
}