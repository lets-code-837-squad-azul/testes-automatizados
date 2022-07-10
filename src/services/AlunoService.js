const AlunosRepository = require('../repository/AlunoRepository')


const createAluno = async (aluno) => {
    try {
        const newAluno = await AlunosRepository.createAluno(aluno)
        return {
            statusCode: 201,
            data: newAluno
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const findAlunos = async () =>{
    try {
        const alunos = await AlunosRepository.findAlunos()
        return {
            statusCode: 200,
            data: alunos
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const deleteAlunos = async (id) =>{
    try {
        const alunos = await AlunosRepository.deleteAlunos(id)
        
        return {
            statusCode: 200,
            data: alunos
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const patchAlunos = async (id, aluno) =>{
    try {
        const alunos = await AlunosRepository.patchAlunos(id, aluno)
        return {
            statusCode: 200,
            data: alunos
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
    createAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos
}