"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("nguoidungs", {
      MaNguoiDung: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      MatKhau: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      HoTen: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Sdt: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Cccd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GioiTinh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      DiaChi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NgaySinh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      MaVaiTro: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "vaitros",
          key: "MAVAITRO",
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
    await queryInterface.dropTable("nguoidungs");
  },
};
