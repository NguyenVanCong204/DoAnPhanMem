"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("phananhs", {
      MaPhanAnh: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      MaNguoiDung: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "nguoidungs",
          key: "MANGUOIDUNG",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      MaCoSoKd: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "cosokinhdoanhs",
          key: "MACOSOKD",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      NoiDung: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      HinhAnh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ThoiGian: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("phananhs");
  },
};
