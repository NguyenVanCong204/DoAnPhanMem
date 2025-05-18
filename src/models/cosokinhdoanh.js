"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CoSoKinhDoanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
