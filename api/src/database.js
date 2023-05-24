const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('dgreen_flowers', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Exporta la instancia de Sequelize
module.exports = sequelize;
