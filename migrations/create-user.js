'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isID: true
        },
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      Birth: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      salt: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
