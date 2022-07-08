const AulaService = require('../services/AulaService')


const postAula = async (req, res) => {
    const aula = req.body
    const response = await AulaService.createAluno(aula)
    return res.status(response.statusCode).json(response.data)
}


module.exports = {
    postAula
}