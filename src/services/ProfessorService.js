const ProfessorRepository = require('../repository/ProfessorRepository')


const createProfessor = async (prof) => {
    try {
        await ProfessorRepository.createProfessor(prof)
        return {
            statusCode: 201,
            data: prof
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
    createProfessor
}