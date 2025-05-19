const { Sequelize } = require("sequelize");

const sequelizeOther = new Sequelize("doanphanmem", "root", null, {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});

let connectDB = async () => {
  try {
    await sequelizeOther.authenticate();

    console.log("Connection has been established successfully (SQLite).");
  } catch (error) {
    console.error("Unable to connect to the database (SQLite):");
  }
};
module.exports = connectDB;
