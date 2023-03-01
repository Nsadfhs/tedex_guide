const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("common/common.html");
});

router.get("/normalized", function (req, res, next) {
  res.render("common/normalized.html");
});

router.get("/atomic", function (req, res, next) {
  res.render("common/atomic.html");
});

router.get("/all-in-one", function (req, res, next) {
  res.render("common/all_in_one.html");
});

module.exports = router;