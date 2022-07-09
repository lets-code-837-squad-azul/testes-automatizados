const AulaRepository = require('../repository/AulasRepository')


const createAula = async (aula) => {
    try {
        const novaAula = await AulaRepository.createAula(aula)
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

const findAulas = async () =>{
    try {
        const getAulas = await AulaRepository.findAulas()
        return {
            statusCode: 200,
            data: getAulas
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
    findAulas
}
