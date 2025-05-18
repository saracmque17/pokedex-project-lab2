const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/json', pokeneaController.showJsonPokenea);
router.get('/image', pokeneaController.showImagePokenea);  
router.get('/', pokeneaController.homePage);

module.exports = router;