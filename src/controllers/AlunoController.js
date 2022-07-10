const AlunoService = require('../services/AlunoService')


const postAluno = async (req, res) => {
    const aluno = req.body
    const response = await AlunoService.createAluno(aluno)
    return res.status(response.statusCode).json(response.data)
}

const findAlunos = async (req, res) =>{
    const response = await AlunoService.findAlunos()
    return res.status(response.statusCode).json(response.data)
}

const deleteAlunos = async (req, res) => {
    const id = req.params.id;
    const response = await AlunoService.deleteAlunos(id)
    return res.status(200).json(response.data);
}

const patchAlunos = async (req, res) => {
    const aluno = req.body
    console.log(aluno)
    const id = req.params.id;
    const response = await AlunoService.patchAlunos(id, aluno)
    return res.status(201).json(response.data);
}

module.exports = {
    postAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos
}