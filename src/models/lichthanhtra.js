"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LichThanhTra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LichThanhTra.belongsTo(models.NguoiDung, {
        foreignKey: "MANGUOIDUNG",
        targetKey: "MANGUOIDUNG",
        as: "MANGUOIDUNGData",
      });
    }
  }
  LichThanhTra.init(
    {
      MALICH: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      TENLICH: DataTypes.STRING,
      NGAYBATDAU: DataTypes.STRING,
      NGAYKETTHUC: DataTypes.STRING,
      TRANGTHAI: DataTypes.INTEGER,
      GHICHU: DataTypes.STRING,
      MANGUOIDUNG: DataTypes.STRING,
      MUCDICH: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "LichThanhTra",
    }
  );
  return LichThanhTra;
};
