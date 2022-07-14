const Alunos = require('../models/Alunos') //SCHEMA ("tabela")

// METODO CRUD ALUNO

// (GET, POST, DELETE, PATCH) <=(VERBOS)
// cria cadastro de usuario no banco de dados (POST)
const createAluno = async (aluno) => {
    return await Alunos.create(aluno)
}

// faz busca de todo os cadastros no banco de dados (GET)
const findAlunos = async () => {
    return await Alunos.find({})
}

// filtra número do "cpf" em todo banco de dados (FILTRO)
const findAlunoBycpf = async (cpf) => {
    return await Alunos.findOne({ cpf: cpf });
}

// deleta cadastro de usuário no banco de dados pelo "id" (DELETE)
const deleteAlunos = async (id) => {
    return await Alunos.deleteOne({_id: id})
}

// filtra número do "id" em todo banco de dados (FILTRO)
const findAlunoByid = async (id) => {
    return await Alunos.findById(id)
}

// altera cadastro do usuário no banco de dados pelo número do "id" (PATCH)
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