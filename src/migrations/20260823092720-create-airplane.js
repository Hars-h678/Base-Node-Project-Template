'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 0,
        
        min:200,// see seince we haven;t apply any constraints of capacity of db so if in case if some run direct query or use db directlt so they can enter wrong value also
        max:1000
      
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  
  await queryInterface.addConstraint('Airplanes', {
      fields: ['capacity'],
      type: 'check',
      name: 'airplane_capacity_range_check',
      where: {
        capacity: {
          [Sequelize.Op.between]: [200, 1000]
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {/// this is for droping a table 
    // when u execute db:migrate:undo
    await queryInterface.dropTable('Airplanes');
  }
};