const mongoose = require('mongoose')
const Professores = mongoose.model('Professores')


const createProfessor = async (prof) => {
    return await Professores.create(prof)
}

const findProfessores = async () => {
    return await Professores.find({})
}

module.exports = {
    createProfessor,
    findProfessores
}