'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.bulkInsert('items', [
      {
        item: 'Xbox', category: 'fun', availability: 'Out'
      },
      {
        item: 'Telescope', category: 'fun', availability: 'In'
      },
      {
        item: 'Puzzles', category: 'fun', availability: 'Out'
      },
      {
        item: 'Microscope', category: 'fun', availability: 'In'
      },
      {
        item: 'Lego', category: 'fun', availability: 'Out'
      },
      {
        item: 'Playstation', category: 'fun', availability: 'In'
      },
      {
        item: 'ipad', category: 'Tech', availability: 'In'
      },
      {
        item: 'Amazon Echo', category: 'Tech', availability: 'Out'
      },
      {
        item: 'Raspberry Pi', category: 'Tech', availability: 'In'
      },
      {
        item: 'Roku', category: 'Tech', availability: 'In'
      },
      {
        item: 'Google Home', category: 'Tech', availability: 'Out'
      },
      {
        item: 'Ladder', category: 'Tools', availability: 'In'
      },
      {
        item: 'Electric Drill', category: 'Tools', availability: 'In'
      },
      {
        item: 'Bicycle Pump', category: 'Tools', availability: 'In'
      },
      {
        item: 'Car battery jumpstarter', category: 'Tools', availability: 'In'
      },
      {
        item: 'Complete toolset', category: 'Tools', availability: 'In'
      },
      {
        item: 'Paper Shredder', category: 'Tools', availability: 'In'
      },
      {
        item: 'Garden tools', category: 'Tools', availability: 'In'
      },
      {
        item: 'Cookie cutter', category: 'Home', availability: 'Out'
      },
      {
        item: 'Cake pans', category: 'Home', availability: 'Out'
      },
      {
        item: 'Sewing Machine', category: 'Home', availability: 'In'
      },
      {
        item: 'Knitting items', category: 'Home', availability: 'In'
      },
      {
        item: 'Food Processor', category: 'Home', availability: 'In'
      },
      {
        item: 'Blender', category: 'Home', availability: 'Out'
      }
    ]
    )

    return queryInterface.bulkInsert('users', [
      { username: "Upasana", password: "Tanvir" },
      { username: "Tatiana", password: "Ortiz" },
      { username: "PatrickM", password: "Muwanguzi" },
      { username: "PatrickO", password: "OConnor" },
      { username: "Caleb", password: "French" },
      { username: "Ujwala", password: "Pawnarkar" },
      { username: "Mike", password: "Guillemette" },
      { username: "John", password: "Carmicheal" },
      { username: "David", password: "Yourgrau" },
      { username: "Erik", password: "Fogg" },
      { username: "Alex", password: "Johnson" }
    ])
  },

  down: (queryInterface, Sequelize) => {

    queryInterface.bulkDelete('items')
    return queryInterface.bulkDelete('users')
  }
};
