"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    static associate(models) {
      NguoiDung.hasMany(models.LichThanhTra, {
        foreignKey: "MANGUOIDUNG",
        as: "MANGUOIDUNGData",
      });
      NguoiDung.hasMany(models.CoSoKinhDoanh, {
        foreignKey: "MANGUOIDUNG",
        as: "MANGUOIDUNGKDData",
      });
    }
  }
  NguoiDung.init(
    {
      MANGUOIDUNG: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      MATKHAU: DataTypes.STRING,
      HOTEN: DataTypes.STRING,
      SDT: DataTypes.STRING,
      CCCD: DataTypes.STRING,
      GIOITINH: DataTypes.STRING,
      DIACHI: DataTypes.STRING,
      NGAYSINH: DataTypes.STRING,
      EMAIL: DataTypes.STRING,
      MAVAITRO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "NguoiDung",
    }
  );
  return NguoiDung;
};
