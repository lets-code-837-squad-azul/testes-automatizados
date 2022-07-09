const AulaService = require('../services/AulaService')


const postAula = async (req, res) => {
    const aula = req.body
    const response = await AulaService.createAula(aula)
    return res.status(response.statusCode).json(response.data)
}

const findAulas = async (req, res) =>{
    const response = await AulaService.findAulas()
    return res.status(response.statusCode).json(response.data)
}


module.exports = {
    postAula,
    findAulas
}