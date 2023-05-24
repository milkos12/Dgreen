const Proveedor = require('../models/proveedorModel');

// Obtener todos los proveedores
const obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    console.error('Error al obtener los proveedores:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los proveedores' });
  }
};

// Crear un nuevo proveedor
const crearProveedor = async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    const nuevoProveedor = await Proveedor.create({ nombre, correo });
    res.json(nuevoProveedor);
  } catch (error) {
    console.error('Error al crear el proveedor:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el proveedor' });
  }
};

// Actualizar un proveedor existente
const actualizarProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo } = req.body;
    await Proveedor.update({ nombre, correo }, { where: { id } });
    res.json({ mensaje: 'Proveedor actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el proveedor:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el proveedor' });
  }
};

// Eliminar un proveedor existente
const eliminarProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    await Proveedor.destroy({ where: { id } });
    res.json({ mensaje: 'Proveedor eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el proveedor:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el proveedor' });
  }
};

module.exports = {
  obtenerProveedores,
  crearProveedor,
  actualizarProveedor,
  eliminarProveedor
};
