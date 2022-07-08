const AlunosRepository = require('../repository/AlunoRepository')


const createAluno = async (aluno) => {
    try {
        await AlunosRepository.createAluno(aluno)
        return {
            statusCode: 201,
            data: aluno
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

module.exports = {
    createAluno
}