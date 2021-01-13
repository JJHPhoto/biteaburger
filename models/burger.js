const orm = require("../config/orm.js");

const burger = {
  selectBurgers: function (cb) {
    orm.selectBurgers("burgers", (res) => {
      cb(res);
    });
  },
  insertBurger: function (column, value, cb) {
    orm.insertBurger("burgers", column, value, (res) => {
      cb(res);
    });
  },
  updateBurger: function (value, id, cb) {
    orm.updateBurger("burgers", value, id, (res) => {
      cb(res);
    });
  },
  deleteBurger: function (id, cb) {
    orm.deleteBurger("burgers", id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
