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
    await queryInterface.bulkInsert('Airports', [
      {
        name: "Kampagoda",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),

      },{
        name: "Kampagoda,Maisoor",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),

      },{
        name: "Mangluru",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),

      },{
        name: "Indira gandhi",
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ], {})
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
