"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CoSoKinhDoanh extends Model {
    static associate(models) {
      CoSoKinhDoanh.hasMany(models.LichThanhTra_CoSoKinhDoanh, {
        foreignKey: "MACOSOKD",
        as: "MACOSOKDDATA",
      });
      CoSoKinhDoanh.belongsTo(models.NguoiDung, {
        foreignKey: "MANGUOIDUNG",
        targetKey: "MANGUOIDUNG",
        as: "MANGUOIDUNGKDData",
      });
    }
  }
  CoSoKinhDoanh.init(
    {
      MACOSOKD: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      TENCOSOKD: DataTypes.STRING,
      DIACHICOSOKD: DataTypes.STRING,
      SDT: DataTypes.STRING,
      EMAIL: DataTypes.STRING,
      GIAYPHEPKINHDOANH: DataTypes.STRING,
      GIAYPHEPATVSTP: DataTypes.STRING,
      SOLANVIPHAM: DataTypes.INTEGER,
      MANGUOIDUNG: DataTypes.STRING,
      MALOAIHINHKINHDOANH: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CoSoKinhDoanh",
    }
  );
  return CoSoKinhDoanh;
};
