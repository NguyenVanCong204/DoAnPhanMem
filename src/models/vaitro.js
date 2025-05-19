"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VaiTro extends Model {
    static associate(models) {}
  }
  VaiTro.init(
    {
      MAVAITRO: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      TENVAITRO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "VaiTro",
    }
  );
  return VaiTro;
};
