const usuarioController = require('../controllers/usuarioController');
const express = require('express');

const routes = express.Router();

routes.get('/usuarios', usuarioController.listarUsuarios);
routes.get('/usuarios/:codigo', usuarioController.buscarPorCodigo);
routes.post('/usuarios', usuarioController.createUsuario);
// routes.put('/usuarios/:codigo', usuarioController.atualizarUsuario);
routes.delete('/usuarios/:codigo', usuarioController.excluirUsuario);

module.exports = routes;
