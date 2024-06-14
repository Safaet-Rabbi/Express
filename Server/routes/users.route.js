const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("<h1>I am a get request at register route</h1>");
});

router.get("/users.route", (req, res) => {
  res.send("<h1>I am a get request at login route</h1>");
});

module.exports = router;