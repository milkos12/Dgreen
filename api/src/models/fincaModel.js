const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Finca = sequelize.define('Finca', {
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
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'Fincas'
});

module.exports = Finca;
