const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Especie = sequelize.define('Especie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Especie;
