"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ThamDinh_Loi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  ThamDinh_Loi.init(
    {
      MALOI: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      MATHAMDINH: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "ThamDinh_Loi",
    }
  );
  return ThamDinh_Loi;
};
