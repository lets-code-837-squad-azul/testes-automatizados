const mongoose = require('mongoose')
const Alunos = mongoose.model('Alunos')


const createAluno = async (aluno) => {
    return await Alunos.create(aluno)
}

const findAlunoBycpf = async (cpf) => {
    return await Alunos.findOne({ cpf: cpf });
}

const findAlunos = async () => {
    return await Alunos.find({})
}

const deleteAlunos = async (id) => {
    return await Alunos.deleteOne({_id: id})
}

const findAlunoByid = async (id) => {
    return await Alunos.findById(id)
}

const patchAlunos = async (id, aluno) => {
    return await Alunos.findByIdAndUpdate(id, {$set:aluno}, {new: true})
}

module.exports = {
    createAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos,
    findAlunoBycpf,
    findAlunoByid
}