//  Testes integrados do Professor

//  Importando o supertest
//  Ele é responsável por fazer requisições HTTP e iniciar o servidor
const request = require('supertest');

// Importando o app (servidor)
const app = require('../../src/app');

//  Imporando o gerador de dados aleatórios
const { faker } = require('@faker-js/faker');


//  Aqui começam os testes de integração
describe('Testes integrados do Professor', () => {

    test('Deve cadastrar um novo professor caso o mesmo ainda não exista', async () => {
        
        //  Dados do professor a ser cadastrado
        const professor = {
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
        };
            
        //  Realizando o cadastro do professor
        const response = await request(app).post('/api/professor').send(professor);

        //  Verificando se o professor foi cadastrado
        expect(response.statusCode).toBe(201);
        expect(response.body.nome).toBe(professor.nome);
        expect(response.body.email).toBe(professor.email);
        expect(response.body.senha).toBe(professor.senha);
        expect(response.body.telefone).toBe(professor.telefone);
        expect(response.body.cpf).toBe(professor.cpf);
        expect(response.body.disciplina).toBe(professor.disciplina);
    });
});
