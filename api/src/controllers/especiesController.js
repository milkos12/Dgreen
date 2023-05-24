const Especie = require('../models/especiesModel');

// Obtener todas las especies
const obtenerEspecies = async (req, res) => {
  try {
    const especies = await Especie.findAll();
    res.json(especies);
  } catch (error) {
    console.error('Error al obtener las especies:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las especies' });
  }
};

// Controlador para obtener una especie por su ID
exports.obtenerEspeciePorId = async (req, res) => {
  try {
    const especie = await Especie.findById(req.params.id);
    if (!especie) {
      return res.status(404).json({ mensaje: 'Especie no encontrada' });
    }
    res.json(especie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Error al obtener la especie' });
  }
};

// Crear una nueva especie
const crearEspecie = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevaEspecie = await Especie.create({ nombre });
    res.json(nuevaEspecie);
  } catch (error) {
    console.error('Error al crear la especie:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear la especie' });
  }
};

// Actualizar una especie existente
const actualizarEspecie = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    await Especie.update({ nombre }, { where: { id } });
    res.json({ mensaje: 'Especie actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la especie:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar la especie' });
  }
};

// Eliminar una especie
const eliminarEspecie = async (req, res) => {
  try {
    const { id } = req.params;
    await Especie.destroy({ where: { id } });
    res.json({ mensaje: 'Especie eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la especie:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar la especie' });
  }
};

module.exports = {
  obtenerEspecies,
  crearEspecie,
  actualizarEspecie,
  eliminarEspecie
};
