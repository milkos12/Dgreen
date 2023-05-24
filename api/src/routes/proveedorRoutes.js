const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Obtener todos los proveedores
router.get('/', proveedorController.obtenerProveedores);

// Crear un nuevo proveedor
router.post('/', proveedorController.crearProveedor);

// Actualizar un proveedor existente
router.put('/:id', proveedorController.actualizarProveedor);

// Eliminar un proveedor existente
router.delete('/:id', proveedorController.eliminarProveedor);

module.exports = router;
