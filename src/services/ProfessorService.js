const ProfessorRepository = require('../repository/ProfessorRepository') // METODO CRUD ALUNO PROFESSOR

// REGRA DE NEGÓCIO

// regra de negócio POST
const createProfessor = async (prof) => {
    try {
        const profexiste = await ProfessorRepository.findProfessoresBycpf(prof.cpf) // filtra usuário pelo "cpf"
        if(profexiste){
            return {
                statusCode: 409,
                data: "CPF já cadastrado!!!"
            }
        } else {
            const novoProfessor = await ProfessorRepository.createProfessor(prof) // cria no cadastro
            return {
                statusCode: 201,
                data: novoProfessor
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
const findProfessores = async () =>{
    try {
        const Professor = await ProfessorRepository.findProfessores() // busca cadastro de todos os usuarios
        if (!Professor){
            return {
                statusCode: 404,
                data: "Nenhum usuário encontrado!"
            }
        } else {
            return {
                statusCode: 200,
                data: Professor
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
const deleteProfessores = async (id) =>{
    try {
        const profexiste = await ProfessorRepository.findProfessoresByid(id) // filtra usuário pelo "id"
        if(profexiste){
            const del = await ProfessorRepository.deleteProfessores(id) // deleta usuario pelo "id" 
            if (del.acknowledged) {
                return {
                    statusCode: 200,
                    data: "Professor deletado com sucesso!"
                }
            } else {
                return {
                    statusCode: 500,
                    data: "Erro ao deletar professor!"
                }
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
const patchProfessores = async (id, prof) =>{

    try {
        const profexiste = await ProfessorRepository.findProfessoresByid(id); // filtra usuério pelo "id"
        if(profexiste){
            const Professor = await ProfessorRepository.patchProfessores(id, prof) // deleta usuario pelo "id"
            return {
                statusCode: 200,
                data: Professor
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
    createProfessor,
    findProfessores,
    deleteProfessores,
    patchProfessores
}