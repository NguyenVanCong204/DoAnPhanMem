"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoiXuPhat extends Model {
    static associate(models) {}
  }
  LoiXuPhat.init(
    {
      MALOI: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      TENLOI: DataTypes.STRING,
      TIENPHAT: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "LoiXuPhat",
    }
  );
  return LoiXuPhat;
};
