require('./db/mongo');
const express = require('express');
const servidor = express();
servidor.use(express.json());

//Rotas
const academiaRouter = require('./routes/academiaRouter');
servidor.use('/academia', academiaRouter);

servidor.get('/', function(req, res){    
    res.send('Servidor de APIs rodando...');
});

servidor.listen(3022, function(){
    console.log('Servidor rodando na porta 3022...');
});