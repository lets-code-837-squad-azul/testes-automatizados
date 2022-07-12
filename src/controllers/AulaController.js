const AulaService = require('../services/AulaService') // REGRA DE NEGÓCIO

// CONTROLE DE METODOS

// metodo (POST)
const postAula = async (req, res) => {
    const aula = req.body
    console.log(aula)
    const response = await AulaService.createAula(aula)
    return res.status(response.statusCode).json(response.data)
}

// metodo (GET)
const findAulas = async (req, res) =>{
    const response = await AulaService.findAulas()
    return res.status(response.statusCode).json(response.data)
}

// metodo (DELETE)
const deleteAulas = async (req, res) => {
    const id = req.params.id;
    const response = await AulaService.deleteAulas(id)
    return res.status(200).json(response.data);
}

// metodo (PATCH)
const patchAulas = async (req, res) => {
    const aulas = req.body
    //console.log(aluno)
    const id = req.params.id;
    const response = await AulaService.patchAulas(id, aulas)
    return res.status(201).json(response.data);
}


module.exports = {
    postAula,
    findAulas,
    deleteAulas,
    patchAulas
}