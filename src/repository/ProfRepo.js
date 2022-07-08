const Professor = require('../models/Professores')

const setProfessor = async (objeto) => {
    return await Professor.create(objeto)
}

const getProfessors = async (page) => {
    return Professor.paginate({}, {page, limit: 10})
}