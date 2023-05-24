const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Variedad = require('./variedadesModel');
const Color = require('./colorModel');

const Referencia = sequelize.define('Referencia', {
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
  tableName: 'Referencias', // Asegúrate de que el nombre de la tabla sea 'variedades'
});

Referencia.belongsTo(Variedad, {
  foreignKey: 'variedadId',
  as: 'variedad'
});

Referencia.belongsTo(Color, {
  foreignKey: 'colorId',
  as: 'color'
});

module.exports = Referencia;
