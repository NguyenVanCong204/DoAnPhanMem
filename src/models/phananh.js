"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhanAnh extends Model {
    static associate(models) {}
  }
  PhanAnh.init(
    {
      MAPHANANH: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      MANGUOIDUNG: DataTypes.STRING,
      MACOSOKD: DataTypes.STRING,
      NOIDUNG: DataTypes.STRING,
      HINHANH: DataTypes.STRING,
      THOIGIAN: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PhanAnh",
    }
  );
  return PhanAnh;
};
