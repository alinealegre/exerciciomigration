'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
    queryInterface.addConstraint('address', { 
      fields: ['idClient'],
      type: 'foreign key',
      name: 'user-address-association',
      references: {
        table: 'user',
        field: 'idClient'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('address', { 
      fields: ['idClient'],
      type: 'foreign key',
      name: 'user-address-association',
      references: {
        table: 'user',
        field: 'idClient'
      }
    });
  }
};
