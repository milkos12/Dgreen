const express = require('express');
const router = express.Router();
const variedadController = require('../controllers/variedadesController');

// Ruta para obtener todas las variedades
router.get('/', variedadController.obtenerVariedades);

// Ruta para obtener una variedad por su ID
//router.get('/:id', variedadController.obtenerVariedadPorId);

// Ruta para crear una nueva variedad
router.post('/', variedadController.crearVariedad);

// Ruta para actualizar una variedad existente
router.put('/:id', variedadController.actualizarVariedad);

// Ruta para eliminar una variedad
router.delete('/:id', variedadController.eliminarVariedad);

module.exports = router;
