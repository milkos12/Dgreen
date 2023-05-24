'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Variedades', 'especieId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Especies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Variedades', 'especieId');
  }
};
