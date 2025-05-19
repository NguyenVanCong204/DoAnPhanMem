"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LichThanhTra_CoSoKinhDoanh extends Model {
    static associate(models) {
      LichThanhTra_CoSoKinhDoanh.belongsTo(models.CoSoKinhDoanh, {
        foreignKey: "MACOSOKINHDOANH",
        targetKey: "MACOSOKD",
        as: "MACOSOKDDATA",
      });
    }
  }
  LichThanhTra_CoSoKinhDoanh.init(
    {
      MALICH: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      MACOSOKINHDOANH: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "LichThanhTra_CoSoKinhDoanh",
    }
  );
  return LichThanhTra_CoSoKinhDoanh;
};
