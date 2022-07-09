const AlunoService = require('../services/AlunoService')


const postAluno = async (req, res) => {
    const aluno = req.body
    const response = await AlunoService.createAluno(aluno)
    return res.status(response.statusCode).json(response.data)
}


module.exports = {
    postAluno
}