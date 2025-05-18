"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dangkigiaypheps", {
      MaDangKi: {
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
      DonDeNghi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      BanThuyetTrinh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GiayTapHuan: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GiaySucKhoe: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GiayPhepKinhDoanh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NgayDangKi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NgayHetHan: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NgayCapGiayPhep: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      TrangThaiGiayPhep: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      GhiChu: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      TrangThaiThanhTra: {
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
    await queryInterface.dropTable("dangkigiaypheps");
  },
};
