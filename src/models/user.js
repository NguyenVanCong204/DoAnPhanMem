'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Allcode , {foreignKey : 'positionId', targetKey:'keyMap',as:'positionData'})
      User.belongsTo(models.Allcode, {foreignKey:'gender',targetKey:'keyMap',as:'genderData'})
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    gender: DataTypes.STRING,      //Giới tính
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,      //R1: admin R2:doctor R3:patients:bệnh nhân
    positionId: DataTypes.STRING  //Vị trí : Bác sĩ,y tá
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};