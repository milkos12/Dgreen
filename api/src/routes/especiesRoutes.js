const express = require('express');
const router = express.Router();
const especieController = require('../controllers/especiesController');

// Ruta para obtener todas las especies
router.get('/', especieController.obtenerEspecies);

// Ruta para obtener una especie por su ID
//router.get('/:id', especieController.obtenerEspeciePorId);

// Ruta para crear una nueva especie
router.post('/', especieController.crearEspecie);

// Ruta para actualizar una especie existente
router.put('/:id', especieController.actualizarEspecie);

// Ruta para eliminar una especie
router.delete('/:id', especieController.eliminarEspecie);

module.exports = router;
