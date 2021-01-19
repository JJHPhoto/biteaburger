const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  //where is this?
  burger.selectBurgers((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  //check this location
  burger.insertBurger(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertID });
      // console.log(result);
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  console.log(req.body);
  console.log(req.body.devoured);

  // Object vs array?
  burger.updateBurger([req.body.devoured], id, (result) => {
    //Unsure what this is.
    if (result.changeRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  const id = req.params.id;
  // console.log("id", id);

  burger.deleteBurger(id, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
