'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Artists', [
      {id: 1,name: "David", style: "Blackwork", instagram: "davidvaleroInk4life", pricing:600, email: "davidink@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2,name: "Paula", style: "Fine line", instagram: "paulaIshiteru", pricing:700, email: "paula@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 3,name: "Fernando", style: "Full color", instagram: "colorInkTrue", pricing:1200, email: "fernando@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
