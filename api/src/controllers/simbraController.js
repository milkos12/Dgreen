const Finca = require('../models/fincaModel');
const Simbra = require('../models/simbraModel');
const Proveedor = require('../models/proveedorModel');

const obtenerSimbras = async (req, res) => {
  try {
    const simbras = await Simbra.findAll({
      include: [
        { model: Finca },
        { model: Proveedor }
      ]
    });
    res.json(simbras);
  } catch (error) {
    console.error('Error al obtener las simbras:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las simbras' });
  }
};


const { getYear, getISOWeek } = require('date-fns');

const crearSimbra = async (req, res) => {
  try {
    const { fincaId, proveedorId, fecha } = req.body;
    const finca = await Finca.findByPk(fincaId);
    const proveedor = await Proveedor.findByPk(proveedorId);

    if (!finca || !proveedor) {
      return res.status(404).json({ error: 'Finca o proveedor no encontrado' });
    }

    const year = getYear(new Date(fecha)).toString();
    const fincaLetters = finca.nombre.slice(0, 2).toUpperCase();

    const weekNumber = getISOWeek(new Date(fecha)).toString();
    const nombre = `${year}${fincaLetters}${weekNumber}`;

    const formattedFecha = new Date(fecha).toISOString();

    const simbra = await Simbra.create({
      nombre,
      fincaId,
      proveedorId,
      fecha: formattedFecha
    });

    res.status(201).json(simbra);
  } catch (error) {
    console.error('Error al crear la simbra:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear la simbra' });
  }
};




module.exports = {
  obtenerSimbras,
  crearSimbra
};
