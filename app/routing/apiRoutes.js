const data = require("../data/friends");
const express = require("express");
var externalApiRoutes = express.Router();
externalApiRoutes = express();

externalApiRoutes.use(express.urlencoded({extended: true}));
externalApiRoutes.use(express.json());

externalApiRoutes.get("/friends", function(req, res) {
    return res.json(data);
});

externalApiRoutes.post("/friends", function(req, res) {
    console.log("hello1");
    console.log(req.body);
    data.push(req.body);
    

    function makeArrayOfNewFriendScores() {

        var newFriend = req.body;
        var numberArray = newFriend.scores;

        getScoreArraysFromData(numberArray);
    }
    
    function getScoreArraysFromData(answerArray) {

        var compareArray = [];

        for (var i = 0; i < data.length - 1; i++) {
            compareArray.push(data[i].scores);
        }
        
        compareValues(answerArray, compareArray);
    }

    function compareValues(answerArrayScores, compareArrayScores) {
        var AvgdifferenceArrays = [];

        for (var i = 0; i < compareArrayScores.length; i++) {

            var selectedArray = compareArrayScores[i];
            var differenceArrays =[];
            var average = 0;

            for (var k = 0; k < selectedArray.length; k++) {

                var difference = Math.abs(parseInt(selectedArray[k]) - parseInt(answerArrayScores[k]));
                differenceArrays.push(difference);
                average += differenceArrays[k];
            }

            AvgdifferenceArrays.push(average);
        }
        findLowestAvg(AvgdifferenceArrays);
    }

    function findLowestAvg(avgArray) {
        console.log(avgArray);

        var lowestNum = Math.min.apply(Math, avgArray);
        var index = avgArray.indexOf(lowestNum);
        // console.log(lowestNum);
        // console.log(index);

        selectBestFriendToMatch(index);
    }
    
    function selectBestFriendToMatch(index) {
        var bestFriendName = data[index].name;
        var bestFriendImg = data[index].photo;
        var bestFriend = {
            name: bestFriendName,
            image: bestFriendImg
        }
        // console.log(bestFriendName);
        // console.log(bestFriendImg);
        res.send(bestFriend);
    }
    
    makeArrayOfNewFriendScores();


});

module.exports = externalApiRoutes;

