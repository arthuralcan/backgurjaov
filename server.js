const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://backendgurjao01:1473570a@mongodb.backendgurjao.kinghost.net/backendgurjao01')
  .then(() => {
    console.log('Conectado ao MongoDB');
    
    // Restante do seu código que depende da conexão com o MongoDB
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json()); // Formato que trocaremos as informações do back para o front (JSON)
    app.use(routes); // Caminho para as rotas

    app.listen(3003, function () {
      console.log('Servidor iniciado com sucesso!');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });
