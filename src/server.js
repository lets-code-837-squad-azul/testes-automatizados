//  Este arquivo serve para iniciar o servidor através do npm run dev

const app = require('./app');
app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
