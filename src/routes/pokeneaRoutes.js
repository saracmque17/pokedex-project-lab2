const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

// Ruta que devuelve JSON con info de un Pokenea aleatorio
router.get('/json', pokeneaController.getPokeneaJson);

// Ruta que renderiza imagen + frase de un Pokenea aleatorio
router.get('/imagen', pokeneaController.getPokeneaImagen);

module.exports = router;
