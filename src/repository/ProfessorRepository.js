const mongoose = require('mongoose')
const Professores = mongoose.model('Professores')


const createProfessor = async (prof) => {
    return await Professores.create(prof)
}

module.exports = {
    createProfessor
}