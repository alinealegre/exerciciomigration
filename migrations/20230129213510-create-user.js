'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      idClient: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true,
        autoIncrement: true  
      },
      nome: {
        type: Sequelize.STRING,
          notNull: true
      },
      email: {
        type: Sequelize.STRING,
        notNull: true
    },
    senha: {
        type: Sequelize.STRING,
        notNull: true
    }
    });
  }, 

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
