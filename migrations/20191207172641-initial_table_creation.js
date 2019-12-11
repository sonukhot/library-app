'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('items', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      item: { type: Sequelize.STRING },
      category: { type: Sequelize.ENUM('fun', 'Tech', 'Tools', 'Home') },
      availability: { type: Sequelize.ENUM('in', 'out') },

      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },


  down: (queryInterface, Sequelize) => {

    queryInterface.dropTable('items')
    return queryInterface.dropTable('users')
  }
};

