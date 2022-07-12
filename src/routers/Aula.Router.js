const AulaController = require('../controllers/AulaController') // CONTROLE DE METODOS
const express = require('express')
const routerAula = express.Router()

// ROTA AULA

// rotas para os metodos (GET, POST, DELETE, PATCH) <=(VERBOS)
routerAula.post('', AulaController.postAula)
routerAula.get('', AulaController.findAulas)
routerAula.delete('/delete/:id', AulaController.deleteAulas)
routerAula.patch('/patch/:id', AulaController.patchAulas)

module.exports = routerAula