

const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.render("components/index.html");
});

router.get("/button", function (req, res, next) {
    res.render("components/button.html");
});

router.get("/card", function (req, res, next) {
    res.render("components/card.html");
});

router.get("/table", function (req, res, next) {
    res.render("components/table.html");
});

router.get("/text-filed", function (req, res, next) {
    res.render("components/text_field.html");
});

router.get("/icon", function (req, res, next) {
    res.render("components/icon.html");
});

module.exports = router;