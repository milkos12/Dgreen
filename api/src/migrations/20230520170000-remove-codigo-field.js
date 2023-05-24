'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('colores', 'codigo');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('colores', 'codigo', {
      type: Sequelize.STRING, // Debes proporcionar el tipo de datos correcto aquí
      allowNull: true,
    });
  }
};
