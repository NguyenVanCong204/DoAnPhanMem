"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ThamDinh extends Model {
    static associate(models) {}
  }
  ThamDinh.init(
    {
      MATHAMDINH: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      MACOSOKINHDOANH: DataTypes.STRING,
      NGAYTHAMDINH: DataTypes.STRING,
      TRANGTHAI: DataTypes.INTEGER,
      HINHANH: DataTypes.STRING,
      TONGTIENPHAT: DataTypes.FLOAT,
      NOIDUNG: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ThamDinh",
    }
  );
  return ThamDinh;
};
