const ProfessorService = require('../services/ProfessorService') // REGRA DE NEGÓCIO

// CONTROLE DE METODOS

// metodo (POST)
const postProfessor = async (req, res) => {
    const prof = req.body
    const response = await ProfessorService.createProfessor(prof)
    return res.status(response.statusCode).json(response.data)
}

// metodo (GET)
const findProfessores = async (req, res) =>{
    const response = await ProfessorService.findProfessores()
    return res.status(response.statusCode).json(response.data)
}

// metodo (DELETE)
const deleteProfessores = async (req, res) => {
    const id = req.params.id;
    const response = await ProfessorService.deleteProfessores(id)
    return res.status(response.statusCode).json(response.data);
}

// metodo (PATCH)
const patchProfessores = async (req, res) => {
    const prof = req.body
    const id = req.params.id;
    const response = await ProfessorService.patchProfessores(id, prof)
    return res.status(response.statusCode).json(response.data);
}


module.exports = {
    postProfessor,
    findProfessores,
    deleteProfessores,
    patchProfessores
}