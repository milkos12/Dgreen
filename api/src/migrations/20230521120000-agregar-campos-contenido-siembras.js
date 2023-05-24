'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('contenido_siembras', 'cantidad_canastillas', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    });

    await queryInterface.addColumn('contenido_siembras', 'bulbos_por_canastillas', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('contenido_siembras', 'cantidad_canastillas');
    await queryInterface.removeColumn('contenido_siembras', 'bulbos_por_canastillas');
  }
};
