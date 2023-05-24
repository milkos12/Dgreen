const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Color = sequelize.define('Color', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  tableName: 'colores', // Asegúrate de que el nombre de la tabla sea 'variedades'
});

module.exports = Color;
