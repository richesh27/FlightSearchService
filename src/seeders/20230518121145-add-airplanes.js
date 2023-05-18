'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boing 727',
        capacity: 300,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Airbus A379',
        capacity: 350,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Boing 777',
        capacity: 400,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Boing 111',
        capacity: 250,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber: 'Airbus A538',
        capacity: 180,
        createdAt : new Date(),
        updatedAt : new Date()
      },
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
