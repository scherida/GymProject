const usuarioController = require('../controllers/usuarioController');
const treinoController = require('../controllers/treinoController');
const express = require('express');

const routes = express.Router();

//Usuarios
routes.get('/usuarios', usuarioController.listarUsuarios);
routes.get('/usuarios/:codigo', usuarioController.buscarPorCodigo);
routes.post('/usuarios', usuarioController.createUsuario);
routes.put('/usuarios/:codigo', usuarioController.atualizarUsuario);
routes.delete('/usuarios/:codigo', usuarioController.excluirUsuario);
// router.put('/:codigo/treinos', usuarioController.atualizarTreinos);

//Treino
routes.get('/treinos', treinoController.listarTreino);
routes.get('/treinos/:codigo', treinoController.buscarPorCodigo);
routes.post('/treinos', treinoController.criarTreino);
routes.put('/treinos/:codigo', treinoController.atualizarTreino);
routes.delete('/treinos/:codigo', treinoController.excluirTreino);

module.exports = routes;
