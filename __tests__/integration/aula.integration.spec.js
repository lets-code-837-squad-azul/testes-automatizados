//  Testes integrados da Aula

//  Importando o supertest
//  Ele é responsável por fazer requisições HTTP e iniciar o servidor
const request = require('supertest');

// Importando o app (servidor)
const app = require('../../src/app');


//  Aqui começam os testes de integração
describe('Testes integrados da Aula', () => {

    test('Deve cadastrar uma nova aula caso a mesma ainda não exista', async () => {
        //  Dados da aula a ser cadastrada
        const aula = {
            aluno: {
                nome: 'Aluno Teste',
                email: 'aluno@teste.com',
                senha: '123456',
                telefone: '11 99999-9999',
                cpf: '12345678900',
                endereco: {
                    rua: 'Rua Teste',
                    numero: '123',
                    cep: '12345-678'
                }
            },
            professor: {
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
            },
            disciplina: 'Disciplina Teste',
            status: 'Status Teste'    
        };

        //  Realizando o cadastro da aula
        const response = await request(app).post('/api/aula').send(aula);

        //  Verificando se a aula foi cadastrada
        // expect(response.statusCode).toBe(201);
        // expect(response.body.aluno).toBe(aula.aluno);
        // expect(response.body.professor).toBe(aula.professor);
        // expect(response.body.disciplina).toBe(aula.disciplina);
        // expect(response.body.status).toBe(aula.status);

        expect(response.statusCode).toBe(201);
        expect(response.body.aluno).toStrictEqual(aula.aluno);
        expect(response.body.professor).toStrictEqual(aula.professor);
        expect(response.body.disciplina).toStrictEqual(aula.disciplina);
        expect(response.body.status).toStrictEqual(aula.status);
    });
});