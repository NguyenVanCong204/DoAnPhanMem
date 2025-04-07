const { Sequelize } = require("sequelize"); // import

// Option 3: Truyền tham số riêng biệt (các phương ngữ khác)
const sequelizeOther = new Sequelize("hoidanit", "root", null, {
  //database name , user, passwwork
  host: "localhost",
  logging: false, //Tùy chọn này xác định xem bạn có muốn ghi lại các truy vấn SQL trong console hay không. false có nghĩa là không ghi lại.
  dialect: "mysql", // hoặc 'postgres', 'sqlite', 'mariadb', 'mssql', 'db2', 'snowflake', 'oracle'
});

// Kiểm tra kết nối
let connectDB = async () => {
  //async : bất đồng bộ
  try {
    await sequelizeOther.authenticate(); //Lệnh này gọi phương thức authenticate() của đối tượng sequelizeOther,
    //giúp xác thực kết nối với cơ sở dữ liệu.
    //await sẽ đợi cho đến khi kết nối được xác thực, giúp đảm bảo rằng mã tiếp theo chỉ chạy sau khi kết nối thành công hoặc thất bại.
    console.log("Connection has been established successfully (SQLite).");
  } catch (error) {
    console.error("Unable to connect to the database (SQLite):");
  }
};
module.exports = connectDB; //có thể sử dụng để gọi hàm connectDB ở nơi khác
