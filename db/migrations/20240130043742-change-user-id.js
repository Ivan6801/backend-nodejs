'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('users');
    
    if (!tableDescription.hasOwnProperty('role')) {
      await queryInterface.addColumn('users', 'role', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'customer',
      });
    }
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'role');
  },
};
