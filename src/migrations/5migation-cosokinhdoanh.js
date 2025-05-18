"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cosokinhdoanhs", {
      MaCoSoKd: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      TenCoSoKd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      DiaChiCoSoKd: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Sdt: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GiayPhepKinhDoanh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GiayPhepAtvstp: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      SoLanViPham: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
      MaLoaiHinhKinhDoanh: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "loaihinhkinhdoanhs",
          key: "MALOAIHINHKD",
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
    await queryInterface.dropTable("cosokinhdoanhs");
  },
};
