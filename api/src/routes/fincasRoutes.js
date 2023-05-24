const express = require('express');
const router = express.Router();
const fincaController = require('../controllers/fincaController');

// Ruta para obtener todas las fincas
router.get('/', fincaController.obtenerFincas);

// Ruta para crear una nueva finca
router.post('/', fincaController.crearFinca);

// Ruta para actualizar una finca existente
router.put('/:id', fincaController.actualizarFinca);

// Ruta para eliminar una finca
router.delete('/:id', fincaController.eliminarFinca);

module.exports = router;
