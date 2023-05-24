const Variedad = require('../models/variedadesModel');
const Especie = require('../models/especiesModel');


// Obtener todas las variedades
const obtenerVariedades = async (req, res) => {
  try {
    const variedades = await Variedad.findAll({
      include: [{ model: Especie, attributes: ['id', 'nombre'] }],
    });
    res.json(variedades);
  } catch (error) {
    console.error('Error al obtener las variedades:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las variedades' });
  }
};


// Obtener variedad por ID
exports.obtenerVariedadPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const variedad = await Variedad.findByPk(id, {
      include: [{ model: Especie, attributes: ['id', 'nombre'] }],
    });

    if (!variedad) {
      return res.status(404).json({ error: 'Variedad no encontrada' });
    }

    return res.json(variedad);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error al obtener la variedad' });
  }
};


// Crear una nueva variedad
const crearVariedad = async (req, res) => {
  try {
    const { nombre, especieId } = req.body;
    const nuevaVariedad = await Variedad.create({ nombre, especieId });
    res.json(nuevaVariedad);
  } catch (error) {
    console.error('Error al crear la variedad:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear la variedad' });
  }
};



// Actualizar una variedad existente
const actualizarVariedad = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, especieId } = req.body;
    await Variedad.update({ nombre, especieId }, { where: { id } });
    res.json({ mensaje: 'Variedad actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la variedad:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar la variedad' });
  }
};


// Eliminar una variedad
const eliminarVariedad = async (req, res) => {
  try {
    const { id } = req.params;
    await Variedad.destroy({ where: { id } });
    res.json({ mensaje: 'Variedad eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la variedad:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar la variedad' });
  }
};

module.exports = {
  obtenerVariedades,
  crearVariedad,
  actualizarVariedad,
  eliminarVariedad
};
