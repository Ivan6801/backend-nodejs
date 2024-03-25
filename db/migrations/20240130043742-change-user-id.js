'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'customer',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'role');
  },
};
