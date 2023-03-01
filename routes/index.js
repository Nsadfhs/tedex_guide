const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index.html");
});

router.get("/typography", function (req, res, next) {
  res.render("typography.html");
});

router.get("/parallax", function (req, res, next) {
  res.render("parallax.html");
});

router.get("/container", function (req, res, next) {
  res.render("container.html");
});

const commonRouter = require('./common.view.js');
router.use("/common", commonRouter);

const layoutsRouter = require('./layouts.view.js');
router.use("/layouts", layoutsRouter);

const componentsRouter = require('./components.view.js');
router.use("/components", componentsRouter);

module.exports = router;