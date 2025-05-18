"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("thamdinhs", {
      MaThamDinh: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      MaCoSoKinhDoanh: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "cosokinhdoanhs",
          key: "MACOSOKD",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      NgayThamDinh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      TrangThai: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      HinhAnh: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      TongTienPhat: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      NoiDung: {
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
    await queryInterface.dropTable("thamdinhs");
  },
};
