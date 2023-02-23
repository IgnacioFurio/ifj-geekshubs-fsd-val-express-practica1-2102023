'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Appointments', [
      {id: 1,date: "Viernes 24 de Febrero de 2023", hour: "17:00", price: 2000, duration:5, about: "Mascara Oni en la espalda", cream:false ,createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", ArtistId: 3, UserId: 3},
      {id: 2,date: "Jueves 23 de Febrero de 2023", hour: "14:30", price: 120, duration:1, about: "Gato negro en el antebrazo", cream:false, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", ArtistId: 2, UserId: 1},
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
