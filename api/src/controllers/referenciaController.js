const Referencia = require('../models/referenciaModel');
const Color = require('../models/colorModel'); // Importar el modelo Color
const Variedad = require('../models/variedadesModel');
const Especie = require('../models/especiesModel');

// Obtener todas las referencias
const obtenerReferencias = async (req, res) => {
  try {
    const referencias = await Referencia.findAll({
      include: [
        {
          model: Color,
          as: 'color',
        },
        {
          model: Variedad,
          as: 'variedad',
          include: [
            {
              model: Especie,
              as: 'especie', // Alias de la asociación entre Especie y Variedad
            },
          ],
        },
      ],
    });
    res.json(referencias);
  } catch (error) {
    console.error('Error al obtener las referencias:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las referencias' });
  }
};




// Crear una nueva referencia
const crearReferencia = async (req, res) => {
  try {
    const { nombre, variedadId, colorId } = req.body;
    const nuevaReferencia = await Referencia.create({ nombre, variedadId, colorId });
    res.json(nuevaReferencia);
  } catch (error) {
    console.error('Error al crear la referencia:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear la referencia' });
  }
};

// Actualizar una referencia existente
const actualizarReferencia = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, variedadId, colorId } = req.body;
    await Referencia.update({ nombre, variedadId, colorId }, { where: { id } });
    res.json({ mensaje: 'Referencia actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la referencia:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar la referencia' });
  }
};

// Eliminar una referencia
const eliminarReferencia = async (req, res) => {
  try {
    const { id } = req.params;
    await Referencia.destroy({ where: { id } });
    res.json({ mensaje: 'Referencia eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la referencia:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar la referencia' });
  }
};

module.exports = {
  obtenerReferencias,
  crearReferencia,
  actualizarReferencia,
  eliminarReferencia
};
