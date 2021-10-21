const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("about page");
});

router.get("/me", (req, res) => {
  res.send("about me");
});

module.exports = router;
