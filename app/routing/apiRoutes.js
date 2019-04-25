const data = require("../data/friends");

console.log(data);

var externalApiRoutes = require("express").Router();

externalApiRoutes.get("/friends", function(req, res) {
    console.log("youve reached here");
    res.send(data);
});

module.exports = externalApiRoutes;


// module.exports = (function() {
    
//     'use strict';
    
//     var externalApiRoutes = require("express").Router();

//     externalApiRoutes.get("/friends", function(req, res) {
//         // res.send('youre at api/friends')
//         //res.sendFile(path.join(__dirname , "../public/home.html"));
//     });


//     return externalApiRoutes;
// })();