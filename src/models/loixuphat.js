"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoiXuPhat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
