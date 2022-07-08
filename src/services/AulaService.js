const AulaRepository = require('../repository/AulasRepository')


const createAula = async (aula) => {
    try {
        await AulaRepository.createAula(aula)
        return {
            statusCode: 201,
            data: aula
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
    createAula
}