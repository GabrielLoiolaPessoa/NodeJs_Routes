const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req,res) => {
  res.send("user new form");
});

router.post("/", (req,res) => {
  res.send("Create user");
});

router.get("/:id", (req,res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

module.exports = router;
