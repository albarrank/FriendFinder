const path = require("path");

module.exports = (function() {
    
    'use strict';
    
    var htmlExternalRouts = require("express").Router();

    htmlExternalRouts.get("/", function(req, res) {

        res.sendFile(path.join(__dirname , "../public/home.html"));
    });

    htmlExternalRouts.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    return htmlExternalRouts;
})();