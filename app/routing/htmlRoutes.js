const path = require("path");
const data = require("../data/friends");

var htmlExternalRoutes = require("express").Router();

htmlExternalRoutes.get("/", function(req, res) {
    res.sendFile(path.join(__dirname , "../public/home.html"));
});

htmlExternalRoutes.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = htmlExternalRoutes