'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: "Booking 777",
      capasity: 350,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      modelNumber: "Booking 352",
      capasity: 450,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      modelNumber: "Booking 756",
      capasity: 320,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      modelNumber: "Booking 989",
      capasity: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      modelNumber: "AirBUS 677",
      capasity: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
