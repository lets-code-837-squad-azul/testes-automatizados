const mongoose = require('mongoose')
const Alunos = mongoose.model('Alunos')


const createAluno = async (user) => {
    return await Alunos.create(user)
}

module.exports = {
    createAluno
}