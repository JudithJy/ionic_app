const mysql = require("mysql");
require("dotenv").config();
env = require("./");

//epfapp database connection
const dataseConnection = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  multipleStatements: true,
});

dataseConnection.connect((err) => {
  if (!err) {
    console.log("Database connected successfully");
  } else {
    console.log(err);
  }
});

module.exports = dataseConnection;
