const mongoose = require('mongoose')
const Aulas = mongoose.model('Aulas')


const createAula = async (aula) => {
    return await Aulas.create(aula)
}

const findAulas = async () => {
    return await Aulas.find({})
}

module.exports = {
    createAula,
    findAulas
}