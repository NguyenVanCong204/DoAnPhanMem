"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("lichthanhtra_cosokinhdoanhs", {
      MaLich: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: "lichthanhtras",
          key: "MALICH",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      MaCoSoKinhDoanh: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: "cosokinhdoanhs",
          key: "MACOSOKD",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("lichthanhtra_cosokinhdoanhs");
  },
};
