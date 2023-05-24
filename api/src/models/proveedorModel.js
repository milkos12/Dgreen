const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Proveedor = sequelize.define('Proveedor', {
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
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'proveedores'
});

module.exports = Proveedor;
