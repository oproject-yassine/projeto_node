'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    //Creating a task list inside the seeders

     await queryInterface.bulkInsert('Tasks', [{
       description: 'Making Breakfast',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }, {
       description: 'Finishing NodeJS Project',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }, {
       description: 'Making Lunch',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }, {
       description: 'Closing Capixaba Schedule',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }, {
       description: 'Baby Homework',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }, {
       description: ' Primary Video',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }, {
       description: 'Making Dinner',
       done: false,
       createdAt: new Date(),
       updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
