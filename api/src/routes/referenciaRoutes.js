const express = require('express');
const router = express.Router();
const referenciaController = require('../controllers/referenciaController');

// Ruta para obtener todas las referencias
router.get('/', referenciaController.obtenerReferencias);

// Ruta para obtener una referencia por su ID
//router.get('/:id', referenciaController.obtenerReferenciaPorId);

// Ruta para crear una nueva referencia
router.post('/', referenciaController.crearReferencia);

// Ruta para actualizar una referencia existente
router.put('/:id', referenciaController.actualizarReferencia);

// Ruta para eliminar una referencia
router.delete('/:id', referenciaController.eliminarReferencia);

module.exports = router;
