//  Testes integrados do Professor

//  Importando o supertest
//  Ele é responsável por fazer requisições HTTP e iniciar o servidor
const request = require('supertest');

// Importando o app (servidor)
const app = require('../../src/app');


//  Aqui começam os testes de integração
describe('Testes integrados do Professor', () => {

    test('Deve cadastrar um novo professor caso o mesmo ainda não exista', async () => {
        //  Dados do professor a ser cadastrado
        const professor = {
            nome: 'Professor Teste',
            email: 'professor@teste.com',
            senha: '123456',
            telefone: '11 99999-9999',
            cpf: '12345678901',
            endereco: {
                rua: 'Rua Teste',
                numero: '123',
                cep: '12345-678'
            },
            disciplina: 'Disciplina Teste'
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
        expect(response.body.endereco).toBe(professor.endereco);
        expect(response.body.disciplina).toBe(professor.disciplina);

        // expect(response.statusCode).toBe(201);
        // expect(response.body.nome).toStrictEqual(professor.nome);
        // expect(response.body.email).toStrictEqual(professor.email);
        // expect(response.body.senha).toStrictEqual(professor.senha);
        // expect(response.body.telefone).toStrictEqual(professor.telefone);
        // expect(response.body.cpf).toStrictEqual(professor.cpf);
        // expect(response.body.disciplina).toStrictEqual(professor.disciplina);
    });
});