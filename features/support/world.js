/*  Arquivo de configuração para os testes do Cucumber  */

const { setWorldConstructor } = require('cucumber');
const axios = require('axios');
const api = axios.create({ baseURL: 'http://localhost:3001/api/' });

class World {
    constructor() {
        //  Variáveis dos testes
        this.aluno = {},
        this.professor = {},
        this.disciplina = '',
        this.status = ''
        this.response = {}
    }

    //  Armazena os dados do aluno
    setAluno(nome, email, senha, telefone, cpf, endereco) {
        this.aluno.nome = nome;
        this.aluno.email = email;
        this.aluno.senha = senha;
        this.aluno.telefone = telefone;
        this.aluno.cpf = cpf;
        this.aluno.endereco = endereco;
    }

    //  Armazena os dados do professor
    setProfessor(nome, email, senha, telefone, cpf, endereco) {
        this.professor.nome = nome;
        this.professor.email = email;
        this.professor.senha = senha;
        this.professor.telefone = telefone;
        this.professor.cpf = cpf;
        this.professor.endereco = endereco;
    }

    //  Armazena os dados da aula
    setAula(aluno, professor, disciplina, status) {
        this.aluno = aluno;
        this.professor = professor;
        this.disciplina = disciplina;
        this.status = status;
    }
    
    //  Realiza uma requisição POST para o servidor
    async post(url, data) {
        const res = await api.post(url, data);
        this.response.statusCode = res.status;
        this.response.data = res.data;
    }
}

setWorldConstructor(World);
