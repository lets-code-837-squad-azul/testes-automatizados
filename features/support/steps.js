/*  Arquivo de definição de passos do Cucumber  */

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

//  Criar aluno
Given('O usuário preenche os dados do aluno a ser cadastrado com as seguintes informações:', function (dataTable) {
    const aluno = dataTable.rowsHash();
    aluno.endereco = JSON.parse(aluno.endereco);
    return this.setAluno(aluno.nome, aluno.email, aluno.senha, aluno.telefone, aluno.cpf, aluno.endereco);
});

When('O usuário enviar os dados para o sistema por meio do método POST.', async function () {
    return await this.post('/aluno', this.aluno);
});

Then('O sistema deve criar o aluno com os dados informados e retornar um JSON com o status code {int} e o aluno criado.', function (code) {
    expect(this.response.statusCode).to.equal(code);
    expect(this.response.data.nome).to.equal(this.aluno.nome);
    expect(this.response.data.email).to.equal(this.aluno.email);
    expect(this.response.data.senha).to.equal(this.aluno.senha);
    expect(this.response.data.telefone).to.equal(this.aluno.telefone);
    expect(this.response.data.cpf).to.equal(this.aluno.cpf);
});
