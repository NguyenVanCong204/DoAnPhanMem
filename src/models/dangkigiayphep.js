"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DangKiGiayPhep extends Model {
    static associate(models) {}
  }
  DangKiGiayPhep.init(
    {
      MADANGKI: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      MANGUOIDUNG: DataTypes.STRING,
      DONDENGHI: DataTypes.STRING,
      BANTHUYETTRINH: DataTypes.STRING,
      GIAYTAPHUAN: DataTypes.STRING,
      GIAYSUCKHOE: DataTypes.STRING,
      GIAYPHEPKINHDOANH: DataTypes.STRING,
      NGAYDANGKI: DataTypes.STRING,
      NGAYHETHAN: DataTypes.STRING,
      NGAYCAPGIAYPHEP: DataTypes.STRING,
      TRANGTHAIGIAYPHEP: DataTypes.INTEGER,
      GHICHU: DataTypes.STRING,
      TRANGTHAITHANHTRA: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DangKiGiayPhep",
    }
  );
  return DangKiGiayPhep;
};
