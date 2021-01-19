const connection = require("../config/connection");

function printQuestionMarks(num) {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?")
  }

  return.arr.toString()

}

function objectToSQL(ob) {
  let arr = [];

  for (var key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);

    }
  }

  return.arr.toString();
}

let orm = {
  selectBurgers: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  },

  insertBurger: function(table, columns, values, cb) {
    let queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log("Create query string:" + queryString);

    connection.query(queryString, values, function(err, result) {
      if(err) {
        throw err;
      }

      cb(result);
    });
  },

  updateBurger: function (table, objectColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objectToSQL(objectColVals);
    queryString += " WHERE";
    queryString += objectToSQL(condition);

    console.log(queryString);
    console.log(condition);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  deleteBurger: function (table, condition, cb) {
    let querySelect = "DELET FROM " + table + " WHERE " + condition;
    console.log(querySelect)

    connection.query(querySelect, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

module.exports = orm;


// Confused me
// const orm = {
//   selectBurgers: function (table, cb) {
//     let querySelect = "SELECT * FROM ??";
//     connection.query(querySelect, [table], (err, res) => {
//       if (err) throw err;
//       cb(res);
//     });
//   },

//   insertBurger: function (table, column, value, cb) {
//     let querySelect = "INSERT INTO ?? (??) VALUES (?)";
//     connection.query(querySelect, [table, column, value], (err, res) => {
//       if (err) throw err;
//       cb(res);
//     });
//   },

//   updateBurger: function (table, value, id, cb) {
//     let querySelect = "UPDATE ?? SET devoured = ? WHERE id= " + id;

//     let indexValue = value[0];

//     let booleanValue = JSON.parse(indexValue);

//     console.log(booleanValue);
//     connection.query(querySelect, [table, booleanValue], (err, res) => {
//       if (err) throw err;
//       console.log(querySelect);
//       cb(res);
//     });
//   },

//   deleteBurger: function (table, id, cb) {
//     let querySelect = "DELETE FROM ?? WHERE id=" + id;
//     connection.query(querySelect, [table, id], (err, res) => {
//       if (err) throw err;
//       // console.log(querySelect);
//       cb(res);
//     });
//   },
// };