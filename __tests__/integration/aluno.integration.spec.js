//  Testes integrados do Aluno

//  Importando o supertest
//  Ele é responsável por fazer requisições HTTP e iniciar o servidor
const request = require('supertest');

// Importando o app (servidor)
const app = require('../../src/app');


//  Aqui começam os testes de integração
describe('Testes integrados do Aluno', () => {

    test('Deve cadastrar um novo aluno caso o mesmo ainda não exista', async () => {
        //  Dados do aluno a ser cadastrado
        const aluno = {
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
