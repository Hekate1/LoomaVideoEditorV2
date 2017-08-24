/*
 * Name: Connor Kennedy
Email: skip@stritter.com
Owner: VillageTech Solutions (villagetechsolutions.org)
Date: 2017 07

filename: looma-scoreboard.js
*/

'use strict'

var scoreboard;
var scoreboardHeight = 80;

var t1Turn = true;

var t1Score = 0;
var t2Score = 0;

var winningScore = 500;


function loaded() //Must be called from outside file when loaded b/c window.onload gets overwritten by looma-word-game.js (I think)
{
	scoreboard = document.getElementById('scoreboard');
	scoreboard.style.width = scoreboard.parentElement.offsetWidth;
	scoreboard.style.height = scoreboardHeight + "px";
	scoreboard.style.backgroundColor = "gray";

	scoreboard.innerHTML = "Team 1's Turn &emsp; Team 1 Score: " + t1Score + " &emsp; Team 2 Score: " + t2Score
}

function updateScore(amount)
{
	if(t1Turn)
	{
		t1Score += amount;
	}
	else
	{
		t2Score += amount;
	}
}

function changeTurn()
{
	if(t1Turn)
	{
		t1Turn = false;
		scoreboard.innerHTML = "Team 2's Turn &emsp; Team 1 Score: " + t1Score + " &emsp; Team 2 Score: " + t2Score
	}
	else
	{
		t1Turn = true;
		scoreboard.innerHTML = "Team 1's Turn &emsp; Team 1 Score: " + t1Score + " &emsp; Team 2 Score: " + t2Score
		
	}
}

function winner()
{
	if(t1Score >= winningScore)
		return "Team 1 Wins!"
	else if(t2Score >= winningScore)
		return "Team 2 Wins"
	return null;
}

function resetScoreboard()
{
	t1Turn = true;
	t1Score = 0;
	t2Score = 0;
	scoreboard.innerHTML = "Team 1's Turn &emsp; Team 1 Score: " + t1Score + " &emsp; Team 2 Score: " + t2Score
}






