const express = require('express');
const router = express.Router();
const simbraController = require('../controllers/simbraController');

router.get('/', simbraController.obtenerSimbras);
router.post('/', simbraController.crearSimbra);

module.exports = router;
