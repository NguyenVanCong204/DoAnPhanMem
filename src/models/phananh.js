"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhanAnh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
