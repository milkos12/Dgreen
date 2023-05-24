const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

// Ruta para obtener todos los colores
router.get('/', colorController.obtenerColores);

// Ruta para crear un nuevo color
router.post('/', colorController.crearColor);

// Ruta para actualizar un color existente
router.put('/:id', colorController.actualizarColor);

// Ruta para eliminar un color
router.delete('/:id', colorController.eliminarColor);

module.exports = router;
