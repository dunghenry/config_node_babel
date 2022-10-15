const express = require("express");
const router = express.Router();

router.get("/about", function (req, res) {
  res.send("<h1>About Page</h1>");
});
router.get("/", function (req, res) {
  res.send("<h1>Home Page</h1>");
});
module.exports = router;
