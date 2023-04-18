const usuarioController = require('../controllers/usuarioController');
const treinoController = require('../controllers/treinoController');
const exercicioController = require('../controllers/exercicioController');
const aparelhoController = require('../controllers/aparelhoController');

const express = require('express');

const routes = express.Router();

//Usuarios
routes.get('/usuarios', usuarioController.listarUsuarios);
routes.get('/usuarios/:codigo', usuarioController.buscarPorCodigo);
routes.post('/usuarios', usuarioController.createUsuario);
routes.put('/usuarios/:codigo', usuarioController.atualizarUsuario);
routes.delete('/usuarios/:codigo', usuarioController.excluirUsuario);

//Treinos
routes.get('/treinos', treinoController.listarTreino);
routes.get('/treinos/:codigo', treinoController.buscarPorCodigo);
routes.post('/treinos', treinoController.criarTreino);
routes.put('/treinos/:codigo', treinoController.atualizarTreino);
routes.delete('/treinos/:codigo', treinoController.excluirTreino);

//Exercicios
routes.get('/exercicios', exercicioController.listarExercicios);
routes.get('/exercicios/:codigo', exercicioController.buscarPorCodigo);
routes.post('/exercicios', exercicioController.criarExercicios);
routes.put('/exercicios/:codigo', exercicioController.atualizarExercicios);
routes.delete('/exercicios/:codigo', exercicioController.excluirExercicios);

//Aparelhos
routes.get('/aparelhos', aparelhoController.listarAparelhos);
routes.get('/aparelhos/:codigo', aparelhoController.buscarPorCodigo);
routes.post('/aparelhos', aparelhoController.criarAparelhos);
routes.put('/aparelhos/:codigo', aparelhoController.atualizarAparelhos);
routes.delete('/aparelhos/:codigo', aparelhoController.excluirAparelhos);

module.exports = routes;
