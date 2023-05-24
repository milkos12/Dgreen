const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Especie = require('./especiesModel');

const Variedad = sequelize.define('Variedad', {
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
    tableName: 'variedades', // Asegúrate de que el nombre de la tabla sea 'variedades'
  });

Variedad.belongsTo(Especie, {
  foreignKey: 'especieId',
  as: 'especie'
});


module.exports = Variedad;