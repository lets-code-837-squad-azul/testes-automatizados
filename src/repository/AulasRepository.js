const Aulas = require('../models/Aulas'); //SCHEMA ("tabela")

// METODO CRUD AULA

// (GET, POST, DELETE, PATCH) <=(VERBOS)
// cria cadastro de usuario no banco de dados (POST)
const createAula = async (aula) => {
    return await Aulas.create(aula)
}

// faz busca de todo os cadastros no banco de dados (GET)
const findAulas = async () => {
    return await Aulas.find({})
}

// deleta cadastro de usuário no banco de dados pelo "id" (DELETE)
const deleteAulas = async (id) => {
    return await Aulas.deleteOne({_id: id})
}

// filtra número do "id" em todo banco de dados (FILTRO)
const findAulaByid = async (id) => {
    return await Aulas.findById(id)
}

// altera cadastro do usuário no banco de dados pelo número do "id" (PATCH)
const patchAulas = async (id, aula) => {
    return await Aulas.findByIdAndUpdate(id, {$set:aula}, {new: true})
}

module.exports = {
    createAula,
    findAulas,
    deleteAulas,
    patchAulas,
    findAulaByid
}