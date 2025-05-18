"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("lichthanhtras", {
      MaLich: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      TenLich: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NgayBatDau: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NgayKetThuc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      TrangThai: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      GhiChu: {
        allowNull: false,
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
      MucDich: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("lichthanhtras");
  },
};
