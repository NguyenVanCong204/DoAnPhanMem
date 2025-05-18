"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("thamdinh_lois", {
      MaThamDinh: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: "thamdinhs",
          key: "MATHAMDINH",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      MaLoi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: "loixuphats",
          key: "MALOI",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("thamdinh_lois");
  },
};
