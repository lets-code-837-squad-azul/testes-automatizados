const mongoose = require('mongoose')
const Aulas = mongoose.model('Aulas')


const createAulas = async (aula) => {
    return await Aulas.create(aula)
}

module.exports = {
    createAulas
}