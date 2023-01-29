'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('address', {
      idAddress: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      fk_user: {
          type: Sequelize.INTEGER,
          notNull: true,
      },

      rua: {
          type: Sequelize.STRING,
          notNull: true
      },

      bairro: {
          type: Sequelize.STRING,
          notNull: true
      },

      cidade:{
          type: Sequelize.STRING,
          notNull: true
      },

      estado: {
          type: Sequelize.STRING,
          notNull: true
      },

      numero: {
        type: Sequelize.INTEGER,
        notNull: true
    },
      complemento: Sequelize.STRING

  },
  
  {
      tableName:'address',
      timestamps: false
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('address')
  }
};