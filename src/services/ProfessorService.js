const ProfessorRepository = require('../repository/ProfessorRepository')


const createProfessor = async (prof) => {
    try {
        const novoProfessor = await ProfessorRepository.createProfessor(prof)
        return {
            statusCode: 201,
            data: novoProfessor
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const findProfessores = async () =>{
    try {
        const newProfessor = await ProfessorRepository.findProfessores()
        return {
            statusCode: 200,
            data: newProfessor
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
    findProfessores
}