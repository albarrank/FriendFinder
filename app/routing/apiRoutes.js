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
            var transferArray =[];
            var average = 0;
            for (var k = 0; k < selectedArray.length; k++) {

                var difference = Math.abs(parseInt(selectedArray[k]) - parseInt(answerArrayScores[k]));
                differenceArrays.push(difference);
                average += differenceArrays[k];
            }
            transferArray.push(average);
            AvgdifferenceArrays.push(transferArray);
        }
        console.log(AvgdifferenceArrays);
    }

    makeArrayOfNewFriendScores();

    // function getNewPersonFinalScore () {
    //     data.push(req.body);

    //     var newPerson = req.body;
    //     var numbers = newPerson.scores;
    //     var finalScore = 0;

    //     for (var i = 0; i < numbers.length; i++) {
    //         finalScore += parseInt(numbers[i]);
    //     }
    //     getScoresFromDataObject(finalScore);
    // }

    // function getScoresFromDataObject(newPersonFinalScore) {
    //     var resultsArray = [];
    //     for (var i = 0; i < data.length -1; i++) {
    //         var scoreArray = data[i].scores;
    //         var totalResult = 0;

    //         for (var k = 0; k < scoreArray.length; k++) {
    //             totalResult += parseInt(scoreArray[k]);

    //         }
    //         resultsArray.push(totalResult);
    //     }
    //     compareScores(resultsArray, newPersonFinalScore)
    // }

    // function compareScores(resultsArray, newPersonFinalScore) {

    // }
    
    // getNewPersonFinalScore();
});

module.exports = externalApiRoutes;

