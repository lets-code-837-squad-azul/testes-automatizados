//  Este arquivo é responsável por iniciar o servidor e conectar com o banco de dados

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); // acesso a pasta (diretório)
require('dotenv').config();

// SERVIDOR
const app = express();

//  Determinar o uso de JSON
app.use(express.json());

//  Conectando com o banco de dados
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//  Fazendo o require da pasta models (diretório)
requireDir('./models');

//  Fazendo o require das rotas (GERENCIADOR DE ROTAS)
app.use('/api', require('./routers/index.routes'));

module.exports = app;
