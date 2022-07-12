#language: pt

Funcionalidade: Criar um novo aluno
    Criar um novo aluno com os dados informados pelo usuário.
    O aluno deve ter obrigatoriamente os seguintes dados:
    Nome, email, senha, telefone, cpf e endereço.

Cenário: Usuário informa os dados do aluno e o sistema cria o aluno.
    
    Dado O usuário preenche os dados do aluno a ser cadastrado com as seguintes informações:
        | nome      | João              |
        | email     | joao@email.com    |  
        | senha     | 123456            |
        | telefone  | 11 999999999      |
        | cpf       | 12345678901       |
        | endereco  | {"rua": "Rua dos Bobos", "numero": 0, "cep": "12345-678"} |
    Quando O usuário enviar os dados para o sistema por meio do método POST.
    Então O sistema deve criar o aluno com os dados informados e retornar um JSON com o status code 201 e o aluno criado.
