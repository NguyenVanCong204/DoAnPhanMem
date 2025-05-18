"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("loixuphats", {
      MaLoi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      TenLoi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      TienPhat: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("loixuphats");
  },
};
