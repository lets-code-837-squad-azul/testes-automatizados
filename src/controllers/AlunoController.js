const AlunoService = require('../services/AlunoService') // REGRA DE NEGÓCIO

// CONTROLE DE METODOS

// metodo (POST)
const postAluno = async (req, res) => {
    const aluno = req.body
    const response = await AlunoService.createAluno(aluno)
    return res.status(response.statusCode).json(response.data)
}

// metodo (GET)
const findAlunos = async (req, res) =>{
    const response = await AlunoService.findAlunos()
    return res.status(response.statusCode).json(response.data)
}

// metodo (DELETE)
const deleteAlunos = async (req, res) => {
    const id = req.params.id;
    const response = await AlunoService.deleteAlunos(id)
    return res.status(response.statusCode).json(response.data);
}

// metodo (PATCH)
const patchAlunos = async (req, res) => {
    const aluno = req.body
    const id = req.params.id;
    const response = await AlunoService.patchAlunos(id, aluno)
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    postAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos
}