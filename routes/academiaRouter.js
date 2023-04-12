const usuarioController = require('../controllers/usuarioController');
const express = require('express');

const routes = express.Router();

routes.get('/usuarios', usuarioController.listarUsuarios);
// routes.get('/usuarios/:id', usuarioController.buscarUsuario);
routes.post('/usuarios', usuarioController.createUsuario);
// routes.put('/usuarios/:id', usuarioController.atualizarUsuario);
// routes.delete('/usuarios/:idUsuario', usuarioController.excluirUsuario);

module.exports = routes;
