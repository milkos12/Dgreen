const Color = require('../models/colorModel');

// Obtener todos los colores
const obtenerColores = async (req, res) => {
  try {
    const colores = await Color.findAll();
    res.json(colores);
  } catch (error) {
    console.error('Error al obtener los colores:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los colores' });
  }
};

// Crear un nuevo color
const crearColor = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoColor = await Color.create({ nombre });
    res.json(nuevoColor);
  } catch (error) {
    console.error('Error al crear el color:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el color' });
  }
};

// Actualizar un color existente
const actualizarColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    await Color.update({ nombre }, { where: { id } });
    res.json({ mensaje: 'Color actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el color:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el color' });
  }
};

// Eliminar un color
const eliminarColor = async (req, res) => {
  try {
    const { id } = req.params;
    await Color.destroy({ where: { id } });
    res.json({ mensaje: 'Color eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el color:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el color' });
  }
};

module.exports = {
  obtenerColores,
  crearColor,
  actualizarColor,
  eliminarColor
};
