const ContenidoSiembra = require('../models/contenidoSiembraModel');
const Siembra = require('../models/simbraModel');
const Referencia = require('../models/referenciaModel');
const Variedad = require('../models/variedadesModel');
const Color = require('../models/colorModel');
const Especie = require('../models/especiesModel');

const crearContenidoSiembra = async (req, res) => {
    try {
        const { fecha, remision, siembraId, referenciaId, cantidadCanastillas, bulbosPorCanastilla } = req.body;

        // Lógica para crear el contenido de siembra con los nuevos campos
        const contenidoSiembra = await ContenidoSiembra.create({
            fecha,
            remision,
            siembraId,
            referenciaId,
            cantidadCanastillas,
            bulbosPorCanastilla,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        res.json(contenidoSiembra);
    } catch (error) {
        console.error('Error al crear el contenido de siembra:', error);
        res.status(500).json({ error: 'Ocurrió un error al crear el contenido de siembra' });
    }
};

const obtenerContenidoSiembraId = async (req, res) => {
    try {
        const contenidoSiembra = await ContenidoSiembra.findByPk(req.params.id);

        if (!contenidoSiembra) {
            return res.status(404).json({ error: 'Contenido de siembra no encontrado' });
        }

        res.json(contenidoSiembra);
    } catch (error) {
        console.error('Error al obtener el contenido de siembra:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener el contenido de siembra' });
    }
};

const obtenerContenidoSiembra = async (req, res) => {
    try {
      const contenidoSiembra = await ContenidoSiembra.findAll();
  
      if (!contenidoSiembra) {
        return res.status(404).json({ error: 'Contenido de siembra no encontrado' });
      }
  
      for (let i = 0; i < contenidoSiembra.length; i++) {
        const contenido = contenidoSiembra[i];
  
        const siembra = await Siembra.findByPk(contenido.siembraId);
        contenido.dataValues.siembra = siembra;
  
        const referencia = await Referencia.findByPk(contenido.referenciaId);
        const variedad = await Variedad.findByPk(referencia.variedadId);
        const color = await Color.findByPk(referencia.colorId);
        const especie = await Especie.findByPk(variedad.especieId);
  
        referencia.dataValues.variedad = variedad;
        referencia.dataValues.color = color;
        referencia.dataValues.variedad.dataValues.especie = especie;
  
        contenido.dataValues.referencia = referencia;
      }
  
      res.json(contenidoSiembra);
    } catch (error) {
      console.error('Error al obtener el contenido de siembra:', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener el contenido de siembra' });
    }
  };
  
  
const actualizarContenidoSiembra = async (req, res) => {
    try {
        const { fecha, remision } = req.body;

        const contenidoSiembra = await ContenidoSiembra.fin;

        if (!contenidoSiembra) {
            return res.status(404).json({ error: 'Contenido de siembra no encontrado' });
        }

        contenidoSiembra.fecha = fecha;
        contenidoSiembra.remision = remision;

        await contenidoSiembra.save();

        res.json(contenidoSiembra);
    } catch (error) {
        console.error('Error al actualizar el contenido de siembra:', error);
        res.status(500).json({ error: 'Ocurrió un error al actualizar el contenido de siembra' });
    }
};

const eliminarContenidoSiembra = async (req, res) => {
    try {
        const contenidoSiembra = await ContenidoSiembra.findByPk(req.params.id);

        if (!contenidoSiembra) {
            return res.status(404).json({ error: 'Contenido de siembra no encontrado' });
        }

        await contenidoSiembra.destroy();

        res.json({ message: 'Contenido de siembra eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el contenido de siembra:', error);
        res.status(500).json({ error: 'Ocurrió un error al eliminar el contenido de siembra' });
    }
};

module.exports = {
    crearContenidoSiembra,
    obtenerContenidoSiembra,
    actualizarContenidoSiembra,
    eliminarContenidoSiembra
};
