

const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    console.log(req.params);
    // switch (req.params.type);
    res.render("layouts/index.html");

});

router.get("/flex", function (req, res, next) {
    console.log(req.params);
    res.render("layouts/flex.html");
});

router.get("/grid", function (req, res, next) {
    console.log(req.params);
    res.render("layouts/grid.html");
});

module.exports = router;