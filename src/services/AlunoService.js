const AlunosRepository = require('../repository/AlunoRepository')


const createAluno = async (aluno) => {

    try {
        const aluno = await AlunosRepository.findAlunoBycpf(aluno.cpf);
        if(aluno){
            return {
                statusCode: 406,
                data: "CPF já cadastrado!!!"
            }
        } else {
            const newAluno = await AlunosRepository.createAluno(aluno)
            return {
                statusCode: 201,
                data: newAluno
            }
        }    
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const findAlunos = async () =>{
    try {
        const alunos = await AlunosRepository.findAlunos()
        if (!alunos){
            return {
                statusCode: 400,
                data: "Nenhum usuário encontrado!"
            }
        } else {
            return {
                statusCode: 200,
                data: alunos
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const deleteAlunos = async (id) =>{
    try {
        const aluno = await AlunosRepository.findAlunoByid(id);
        if(aluno){
            const alunos = await AlunosRepository.deleteAlunos(id)
            return {
                statusCode: 200,
                data: alunos
            }
        } else {
            return {
                statusCode: 406,
                data: "Id não encotrado!"
            }
        }
        
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const patchAlunos = async (id, aluno) =>{

    try {
        const alunoexiste = await AlunosRepository.findAlunoByid(id);
        if(alunoexiste){
            const alunos = await AlunosRepository.patchAlunos(id, aluno)
            return {
                statusCode: 200,
                data: alunos
            }
        } else {
            return {
                statusCode: 406,
                data: "Id não encotrado!"
            }
        }
        
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

module.exports = {
    createAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos
}