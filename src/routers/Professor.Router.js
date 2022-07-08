const ProfessorController = require('../controllers/ProfessorController')
const express = require('express')
const routerProfessor = express.Router()


routerProfessor.post('', ProfessorController.postProfessor)

module.exports = {
    routerProfessor
}