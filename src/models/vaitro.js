"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VaiTro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
