'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */return queryInterface.createTable('items', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    item: { type: Sequelize.STRING },
    category: { type: Sequelize.ENUM('fun', 'Tech', 'Tools', 'Home') },
    availability: { type: Sequelize.ENUM('in', 'out') },

    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
    deletedAt: { type: Sequelize.DATE },
  }

  )

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('items')
  }
};
