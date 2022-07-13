const AulaRepository = require('../repository/AulasRepository') // METODO CRUD ALUNO

// REGRA DE NEGÓCIO

// regra de negócio POST
const createAula = async (aula) => {
    try {
        const novaAula = await AulaRepository.createAula(aula) // cria cadastro
        return {
            statusCode: 201,
            data: novaAula
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
const findAulas = async () =>{
    try {
        const getAulas = await AulaRepository.findAulas() // busca cadastro de todas as aulas
        if (!getAulas){
            return{
                statusCode: 404,
                data: 'Nenhuma Aula encotrada!'
            }    
        } else {
            return {
                statusCode: 200,
                data: getAulas
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
const deleteAulas = async (id) =>{
    try {
        const aulaexiste = await AulaRepository.findAulaByid(id) // filtra usuário pelo "id"
        if(aulaexiste){
            const del = await AulaRepository.deleteAulas(id) // deleta usuario pelo "id" 
            if (del.acknowledged) {
                return {
                    statusCode: 200,
                    data: "Aula deletada com sucesso!"
                }
            } else {
                return {
                    statusCode: 500,
                    data: "Erro ao deletar aula!"
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
const patchAulas = async (id, aula) =>{

    try {
        const aulaexiste = await AulaRepository.findAulaByid(id) // filtra usuário pelo "id"
        if(aulaexiste){
            const altera = await AulaRepository.patchAulas(id, aula) // altera usuario pelo "id"
            return {
                statusCode: 200,
                data: altera
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
    createAula,
    findAulas,
    deleteAulas,
    patchAulas
}
