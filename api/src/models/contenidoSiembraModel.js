const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ContenidoSiembra = sequelize.define('ContenidoSiembra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  remision: {
    type: DataTypes.STRING,
    allowNull: false
  },
  siembraId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Siembras',
      key: 'id'
    }
  },
  referenciaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Referencias',
      key: 'id'
    }
  },
  cantidadCanastillas: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'cantidad_canastillas'
  },
  bulbosPorCanastilla: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'bulbos_por_canastillas'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'contenido_siembras'
});

module.exports = ContenidoSiembra;
