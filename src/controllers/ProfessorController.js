const ProfessorService = require('../services/ProfessorService')


const postProfessor = async (req, res) => {
    const prof = req.body
    const response = await ProfessorService.createProfessor(prof)
    return res.status(response.statusCode).json(response.data)
}

const findProfessores = async (req, res) =>{
    const response = await ProfessorService.findProfessores()
    return res.status(response.statusCode).json(response.data)
}


module.exports = {
    postProfessor,
    findProfessores
}