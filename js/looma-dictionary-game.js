/*
 * Name: Connor Kennedy
Email: skip@stritter.com
Owner: VillageTech Solutions (villagetechsolutions.org)
Date: 2017 07

filename: looma-dictionary-game.js
 */

'use strict'

var vocabGrade;
var vocabSubject;
var vocabCount;
var vocabRandom;
var wordList;

$(document).ready(function()
{
	vocabGrade =   LOOMA.readStore("vocab-grade",   'local'); if (!vocabGrade) vocabGrade = "class1";
    vocabSubject = LOOMA.readStore("vocab-subject", 'local'); if (!vocabSubject) vocabSubject = "english";
    //vocabCount =   LOOMA.readStore("vocab-count",   'local'); if (!vocabCount) vocabCount = "25";
    vocabRandom =  LOOMA.readStore("vocab-random",  'local'); if (!vocabRandom) vocabRandom = "true";

    LOOMA.wordlist(vocabGrade, vocabSubject, null, "249", vocabRandom, success, failure);

	$('#gamestart-button').on('click', function(){
 		startGame();
 		$('#gamestart-button').hide();
 		$('#definition').show();
 	});

 	document.getElementById('gameArea').addEventListener('won', function(){
        $('#definition').text('');
        $('#definition').hide();
        $('#gamestart-button').show();
    });
});

function getNewWords()
{
	var w1 = wordList[Math.floor(Math.random() * 250)];
	LOOMA.lookup(w1, wordSuccess, wordFailure);

	var w2 = wordList[Math.floor(Math.random() * 250)];
	var w3 = wordList[Math.floor(Math.random() * 250)];
	var w4 = wordList[Math.floor(Math.random() * 250)];
	var w5 = wordList[Math.floor(Math.random() * 250)];
	var w6 = wordList[Math.floor(Math.random() * 250)];

	return [w1, w2, w3, w4, w5, w6];
}

//Generates the next card with the front word and corresponding back information
function success(result)
{
    console.log('VOCAB: success getting word list');
    wordList = result;
}

//If it fails, it alerts the user and describes the failure
function failure(jqXHR, textStatus, errorThrown)
{
    alert("enter function fail");
    console.log('VOCAB: AJAX call to dictionary-utilities.php FAILed, jqXHR is ' + jqXHR.status);
    window.alert('failed with textStatus = ' + textStatus);
    window.alert('failed with errorThrown = ' + errorThrown);
}

function wordSuccess(definition)
{
	console.log(definition);
	$('#definition').text('Click the word that matches this definition: "' + definition.def + '"');
}

function wordFailure()
{
	changeWords();
}

