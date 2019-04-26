const data = require("../data/friends");
const express = require("express");
// var externalApiRoutes = require("express").Router();     or this one
var externalApiRoutes = express.Router();
externalApiRoutes = express();

externalApiRoutes.use(express.urlencoded({extended: true}));
externalApiRoutes.use(express.json());

externalApiRoutes.get("/friends", function(req, res) {
    return res.json(data);
});

externalApiRoutes.post("/friends", function(req, res) {
    console.log(req.body);
    console.log("api post request is working");
});

module.exports = externalApiRoutes;

