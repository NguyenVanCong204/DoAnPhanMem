"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoaiHinhKinhDoanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
