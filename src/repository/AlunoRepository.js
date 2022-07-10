const mongoose = require('mongoose')
const Alunos = mongoose.model('Alunos')


const createAluno = async (aluno) => {
    return await Alunos.create(aluno)
}

const findAlunos = async () => {
    return await Alunos.find({})
}

const deleteAlunos = async (id) => {
    return await Alunos.deleteOne({_id: id})
}

const patchAlunos = async (id, aluno) => {
    return await Alunos.updateOne({_id: id}, {aluno})
}

module.exports = {
    createAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos
}