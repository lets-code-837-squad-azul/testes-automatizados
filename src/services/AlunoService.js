const AlunosRepository = require('../repository/AlunoRepository') // METODO CRUD ALUNO

// REGRA DE NEGÓCIO

// regra de negócio POST
const createAluno = async (aluno) => {
    
    try {
        const alunoexiste = await AlunosRepository.findAlunoBycpf(aluno.cpf) // filtra usuário pelo "cpf"
        if(alunoexiste){
            return {
                statusCode: 409,
                data: "CPF já cadastrado!!!"
            }
        } else {
            const novoAluno = await AlunosRepository.createAluno(aluno) // cria no cadastro
            return {
                statusCode: 201,
                data: novoAluno
            }
        }    
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

// regra de negócio GET
const findAlunos = async () =>{
    try {
        const alunos = await AlunosRepository.findAlunos() // busca cadastro de todos os usuarios
        if (!alunos){
            return {
                statusCode: 404,
                data: "Nenhum usuário encontrado!"
            }
        } else {
            return {
                statusCode: 200,
                data: alunos
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

// regra de negócio DELETE
const deleteAlunos = async (id) =>{
    try {
        const alunoexiste = await AlunosRepository.findAlunoByid(id) // filtra usuário pelo "id"
        if(alunoexiste){
            const alunos = await AlunosRepository.deleteAlunos(id) // deleta usuario pelo "id" 
            return {
                statusCode: 200,
                data: alunos
            }
        } else {
            return {
                statusCode: 404,
                data: "Id não encotrado!"
            }
        }    
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

// regra de negócio PATCH
const patchAlunos = async (id, aluno) =>{

    try {
        const alunoexiste = await AlunosRepository.findAlunoByid(id); // filtra usuério pelo "id"
        if(alunoexiste){
            const alunos = await AlunosRepository.patchAlunos(id, aluno) // deleta usuario pelo "id"
            return {
                statusCode: 200,
                data: alunos
            }
        } else {
            return {
                statusCode: 404,
                data: "Id não encotrado!"
            }
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