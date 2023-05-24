const Finca = require('../models/fincaModel');

// Obtener todas las fincas
const obtenerFincas = async (req, res) => {
  try {
    const fincas = await Finca.findAll();
    res.json(fincas);
  } catch (error) {
    console.error('Error al obtener las fincas:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las fincas' });
  }
};

// Crear una nueva finca
const crearFinca = async (req, res) => {
  try {
    const { nombre, extension } = req.body;
    const finca = await Finca.create({
      nombre,
      extension
    });
    res.json(finca);
  } catch (error) {
    console.error('Error al crear la finca:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear la finca' });
  }
};

// Actualizar una finca existente
const actualizarFinca = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, extension } = req.body;

    const finca = await Finca.findByPk(id);
    if (!finca) {
      return res.status(404).json({ error: 'Finca no encontrada' });
    }

    finca.nombre = nombre;
    finca.extension = extension;
    await finca.save();

    res.json(finca);
  } catch (error) {
    console.error('Error al actualizar la finca:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar la finca' });
  }
};

// Eliminar una finca
const eliminarFinca = async (req, res) => {
  try {
    const { id } = req.params;

    const finca = await Finca.findByPk(id);
    if (!finca) {
      return res.status(404).json({ error: 'Finca no encontrada' });
    }

    await finca.destroy();

    res.json({ message: 'Finca eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la finca:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar la finca' });
  }
};

module.exports = {
  obtenerFincas,
  crearFinca,
  actualizarFinca,
  eliminarFinca
};
