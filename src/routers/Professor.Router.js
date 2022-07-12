const ProfessorController = require('../controllers/ProfessorController') // CONTROLE DE METODOS
const express = require('express')
const routerProfessor = express.Router()


// ROTA PROFESSOR

// rotas para os metodos (GET, POST, DELETE, PATCH) <=(VERBOS)
routerProfessor.post('', ProfessorController.postProfessor)
routerProfessor.get('', ProfessorController.findProfessores)
routerProfessor.delete('/delete/:id', ProfessorController.deleteProfessores)
routerProfessor.patch('/patch/:id', ProfessorController.patchProfessores)

module.exports = routerProfessor