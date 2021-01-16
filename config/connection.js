const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P0d%st0Phi|",
    // password: process.env.DB_PASS || "password",
    database: "burger_db",
  });
}

connection.connect();

module.exports = connection;
