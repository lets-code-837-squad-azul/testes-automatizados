//  Testes integrados da Aula

//  Importando o supertest
//  Ele é responsável por fazer requisições HTTP e iniciar o servidor
const request = require('supertest');

// Importando o app (servidor)
const app = require('../../src/app');

//  Importando o gerador de dados aleatórios
const { faker } = require('@faker-js/faker');


//  Aqui começam os testes de integração
describe('Testes integrados da Aula', () => {

    test('Deve cadastrar uma nova aula caso a mesma ainda não exista', async () => {

        //  Dados da aula a ser cadastrada
        const aula = {
            aluno: {
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
            },
            professor: {
                nome: faker.name.firstName(),
                email: faker.internet.email(),
                senha: faker.internet.password(),
                telefone: faker.phone.number(),
                cpf: faker.random.numeric(11),
                endereco: {
                    rua: faker.address.street(),
                    numero: faker.random.numeric(4),
                    cep: faker.address.zipCode(),
                },
                disciplina: faker.random.word()
            },
            status: 'pendente'
        };

        //  Adicionado disciplina da aula = disciplina do professor
        aula.disciplina = aula.professor.disciplina;

        //  Realizando o cadastro da aula
        const response = await request(app).post('/api/aula').send(aula);

        //  Verificando se a aula foi cadastrada
        expect(response.statusCode).toBe(201);
        expect(response.body.disciplina).toBe(aula.disciplina);
        expect(response.body.status).toBe(aula.status);
    });
});
