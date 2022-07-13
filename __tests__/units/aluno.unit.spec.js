//  Testes unitários do aluno

//  Importando o aluno service
const alunoService = require('../../src/services/AlunoService');

//  Importando o modelo do aluno
const alunoModel = require('../../src/models/Alunos');

//  Importando o mockingoose
const mockingoose = require('mockingoose');

//  Importando o gerador de dados aleatórios
const faker = require('@faker-js/faker');

//  Limpando os mocks
afterEach(() => {
    jest.restoreAllMocks();
});

jest.setTimeout(30000);

//  Aqui iniciam os testes unitários
describe('Teste unitário do aluno', () => {
    test('Deve criar um novo aluno no banco', async () => {
        // const aluno = {
        //     nome: faker.name.firstName(),
        //     email: faker.internet.email(),
        //     senha: faker.internet.password(),
        //     telefone: faker.phone.phoneNumber(),
        //     cpf: faker.random.number({ min: 10000000000, max: 99999999999 }),
        //     endereco: {
        //         rua: faker.address.streetName(),
        //         numero: faker.random.number({ min: 1, max: 1000 }),
        //         cep: faker.address.zipCode(),
        //     }
        // };

        const aluno = {
            nome: 'Aluno teste',
            email: 'aluno@teste.com',
            senha: '123456',
            telefone: '11999999999',
            cpf: '12345678901',
            endereco: {
                rua: 'Rua teste',
                numero: '123',
                cep: '12345-678',
            }
        }

        //  Forçando o retorno null para o findOne
        mockingoose(alunoModel).toReturn(null, 'findOne');

        //  Fazendo a requisição
        const response = await alunoService.createAluno(aluno);

        console.log(response);

        //  Verificando o retorno
        expect(response.statusCode).toBe(201);
    });
});
