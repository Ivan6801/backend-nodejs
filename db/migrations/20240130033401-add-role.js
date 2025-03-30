'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hasColumn = await queryInterface.describeTable(USER_TABLE)
      .then(table => table.hasOwnProperty('role'));

    if (!hasColumn) {
      await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  },
};
