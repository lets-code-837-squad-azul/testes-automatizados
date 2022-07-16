//  Testes integrados do Aluno

//  Importando o supertest
//  Ele é responsável por fazer requisições HTTP e iniciar o servidor
const request = require('supertest');

// Importando o app (servidor)
const app = require('../../src/app');

//  Importando o gerador de dados aleatórios
const { faker } = require('@faker-js/faker');

//  Aqui começam os testes de integração
describe('Testes integrados do Aluno', () => {

    test('Deve cadastrar um novo aluno caso o mesmo ainda não exista', async () => {
        
        //  Dados do aluno a ser cadastrado
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

        //  Realizando o cadastro do aluno
        const response = await request(app).post('/api/aluno').send(aluno);

        //  Verificando se o aluno foi cadastrado
        expect(response.statusCode).toBe(201);
        expect(response.body.nome).toBe(aluno.nome);
        expect(response.body.email).toBe(aluno.email);
        expect(response.body.senha).toBe(aluno.senha);
        expect(response.body.telefone).toBe(aluno.telefone);
        expect(response.body.cpf).toBe(aluno.cpf);
    });
});
