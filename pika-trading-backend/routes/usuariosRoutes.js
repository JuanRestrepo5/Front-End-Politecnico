const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/login', usuariosController.login);
router.post('/registro', usuariosController.registro);
router.post('/usuarios', usuariosController.crear);
router.get('/usuarios', usuariosController.listar);
router.delete('/usuarios/:id', usuariosController.eliminar);
router.put('/usuarios/:id', usuariosController.actualizar);

module.exports = router;