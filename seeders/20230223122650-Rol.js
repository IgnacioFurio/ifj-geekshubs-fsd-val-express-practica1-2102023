'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Rols', [
      {id: 1,client: true, worker: false, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2,client: false, worker: true, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    ], {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
