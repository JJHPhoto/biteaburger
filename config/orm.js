const connection = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    let querySelect = "SELECT * FROM ??";
    connection.query(querySelect, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function (table, column, value, cb) {
    let querySelect = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(querySelect, [table, column, value], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne: function (table, value, id, cb) {
    let querySelect = "UPDATE ?? SET devoured = ? WHERE id= " + id;

    let indexValue = value[0];

    let booleanValue = JSON.parse(indexValue);

    console.log(booleanValue);
    connection.query(querySelect, [table, booleanValue], (err, res) => {
      if (err) throw err;
      console.log(querySelect);
      cb(res);
    });
  },

  deleteOne: function (table, id, cb) {
    let querySelect = "DELETE FROM ?? WHERE id=" + id;
    connection.query(querySelect, [table, id], (err, res) => {
      if (err) throw err;
      console.log(querySelect);
      cb(res);
    });
  },
};
module.exports = orm;
