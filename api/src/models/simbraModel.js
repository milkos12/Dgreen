const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Finca = require('./fincaModel');
const Proveedor = require('./proveedorModel');

const Simbra = sequelize.define('Simbra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('nombre', value.toUpperCase());
    }
  },
  extension: {
    type: DataTypes.DECIMAL(10, 2)
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

Simbra.belongsTo(Finca, { foreignKey: 'fincaId' });
Simbra.belongsTo(Proveedor, { foreignKey: 'proveedorId' });

module.exports = Simbra;
