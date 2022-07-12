const mongoose = require('mongoose')
const Professores = mongoose.model('Professores') //SCHEMA ("tabela")

// METODO CRUD PROFESSOR

// (GET, POST, DELETE, PATCH) <=(VERBOS)
// cria cadastro de usuario no banco de dados (POST)
const createProfessor = async (prof) => {
    return await Professores.create(prof)
}

// faz busca de todo os cadastros no banco de dados (GET)
const findProfessores = async () => {
    return await Professores.find({})
}

// filtra número do "cpf" em todo banco de dados (FILTRO)
const findProfessoresBycpf = async (cpf) => {
    return await Professores.findOne({ cpf: cpf });
}

// deleta cadastro de usuário no banco de dados pelo "id" (DELETE)
const deleteProfessores = async (id) => {
    return await Professores.deleteOne({_id: id})
}

// filtra número do "id" em todo banco de dados (FILTRO)
const findProfessoresByid = async (id) => {
    return await Professores.findById(id)
}

// altera cadastro do usuário no banco de dados pelo número do "id" (PATCH)
const patchProfessores = async (id, prof) => {
    return await Professores.findByIdAndUpdate(id, {$set:prof}, {new: true})
}

module.exports = {
    createProfessor,
    findProfessores,
    deleteProfessores,
    patchProfessores,
    findProfessoresBycpf,
    findProfessoresByid
    
}