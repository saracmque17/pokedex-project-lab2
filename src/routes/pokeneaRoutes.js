const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

// Ruta para mostrar un Pokenea aleatorio en formato JSON
router.get('/json', pokeneaController.getPokeneaJson);

// TODO:
// Ruta que renderiza imagen + frase de un Pokenea aleatorio
//router.get('/imagen', pokeneaController.getPokeneaImagen);

module.exports = router;
