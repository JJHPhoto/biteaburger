let mysql = require("mysql");
// const db = require("db");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "P0d%st0Phi|",
    database: "burger_db",
  });
}

connection.connect();

module.exports = connection;
