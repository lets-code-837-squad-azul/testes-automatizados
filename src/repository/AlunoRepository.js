const mongoose = require('mongoose')
const Alunos = mongoose.model('Alunos')


const createAluno = async (user) => {
    return await Alunos.create(user)
}

const findAlunos = async () => {
    return await Alunos.find({})
}

module.exports = {
    createAluno,
    findAlunos
}