"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoaiHinhKinhDoanh extends Model {
    static associate(models) {}
  }
  LoaiHinhKinhDoanh.init(
    {
      MALOAIHINHKD: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      TENLOAIHINHKD: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LoaiHinhKinhDoanh",
    }
  );
  return LoaiHinhKinhDoanh;
};
