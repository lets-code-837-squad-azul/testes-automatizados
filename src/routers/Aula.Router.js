const AulaController = require('../controllers/AulaController')
const express = require('express')
const routerAula = express.Router()


routerAula.post('', AulaController.postAula)
routerAula.get('', AulaController.findAulas)

module.exports = routerAula