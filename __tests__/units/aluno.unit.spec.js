//  Testes unitários do aluno

//  Importando o aluno service
const alunoService = require('../../src/services/AlunoService');

//  Importando o modelo do aluno
const alunoModel = require('../../src/models/Alunos');

//  Importando o mockingoose
const mockingoose = require('mockingoose');

//  Importando o gerador de dados aleatórios
const { faker } = require('@faker-js/faker');

//  Limpando os mocks
afterEach(() => {
    jest.restoreAllMocks();
});

jest.setTimeout(30000);

//  Aqui iniciam os testes unitários
describe('Teste unitário do aluno', () => {

    //  Teste unitário de cadastro de aluno
    //  Problema de timeout do mockingoose
    test.skip('Deve criar um novo aluno no banco', async () => {

        //  Informações do aluno
        const aluno = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            senha: faker.internet.password(),
            telefone: faker.phone.number(),
            cpf: faker.random.numeric(11),
            endereco: {
                rua: faker.address.street(),
                numero: faker.random.numeric(4),
                cep: faker.address.zipCode(),
            }
        };

        //  Esperando retorno null do findOne
        mockingoose(alunoModel).toReturn(null, 'findOne');

        //  Fazendo a requisição
        const response = await alunoService.createAluno(aluno);

        console.log(response);

        //  Verificando o retorno
        expect(response.statusCode).toBe(201);
    });
});
