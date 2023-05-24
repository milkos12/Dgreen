const express = require('express');
const router = express.Router();
const contenidoSiembraController = require('../controllers/contenidoSiembraController');

router.post('/', contenidoSiembraController.crearContenidoSiembra);
router.get('/', contenidoSiembraController.obtenerContenidoSiembra);
router.put('/:id', contenidoSiembraController.actualizarContenidoSiembra);
router.delete('/:id', contenidoSiembraController.eliminarContenidoSiembra);

module.exports = router;
