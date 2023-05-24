'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Simbras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      extension: {
        type: Sequelize.DECIMAL(10, 2)
      },
      fincaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fincas',
          key: 'id'
        }
      },
      proveedorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Proveedores',
          key: 'id'
        }
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Simbras');
  }
};
