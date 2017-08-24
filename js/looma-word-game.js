/*
 * Name: Connor Kennedy
Email: skip@stritter.com
Owner: VillageTech Solutions (villagetechsolutions.org)
Date: 2017 07

filename: looma-word-game.js
 */

var gameArea;
var context;
var width;
var height;
var drawnWords;
var xcords = [];
var ycords = [];
var xchange = [];
var ychange = [];
var answer;
var won = false;
var interval;

var buttonWidth = 100;
var buttonHeight = 100;

var wonEvent = new Event('won');


var outerTimer;
var innerTimer;
var timerWidth = 40;
var timerRemovalPercent = .004;
var timerRemovalPx;

var speed = 5;

var fps = 25;
//var timerTime = 20;

'use strict';
$(document).ready()
{
	loaded();

	gameArea = document.getElementById("gameArea");

	outerTimer = document.getElementById("outerTimer");
	innerTimer = document.getElementById("innerTimer");

	gameArea.parentElement.style.fontSize = "0"; //Removes gap between canvas and scoreboard

	width = gameArea.parentElement.offsetWidth - timerWidth;
	height = gameArea.parentElement.offsetHeight - scoreboardHeight;

	gameArea.width = width;
	gameArea.height = height;

	outerTimer.style.width = timerWidth + "px";
	outerTimer.style.height = height + "px";
	outerTimer.style.backgroundColor = "red";
	outerTimer.style.display = "inline-block";

	timerRemovalPx = timerRemovalPercent * height;

	innerTimer.style.width = timerWidth + "px";
	innerTimer.style.height = height + "px";
	innerTimer.style.bottom = scoreboardHeight + "px";
	innerTimer.style.position = "absolute";
	innerTimer.style.backgroundColor = "green";

	gameArea.style.backgroundColor = "#ffffff";

	context = gameArea.getContext("2d");
	
	context.font = "30px Arial"

	gameArea.addEventListener('click', function(evt){
		var mousePos = getMousePos(evt);
		var mx = mousePos.x;
		var my = mousePos.y;
		
		drawnWords.forEach(function(e, index){
			if(mx >= xcords[index] && mx <= xcords[index] + buttonWidth)
			{
				if(my >= ycords[index] && my <= ycords[index] + buttonHeight)
				{
					if(e == answer)
					{
						innerTimer.style.height = height + "px";
						updateScore(100);
						if(winner())
						{
							LOOMA.alert(winner(), 10, false);
							gameArea.dispatchEvent(wonEvent);
							won = true;
						}
						else
						{
							LOOMA.alert("Congratulations that is the right answer. You have earned your team 100 points. It is now the other team's turn.", 10, false);
							changeTurn();

							var newWords = getNewWords();
							var newAnswer = newWords[0];

							changeWords(newWords, newAnswer);
						}
					}
					else
					{
						innerTimer.style.height = height + "px";
						LOOMA.alert("Sadly that is the incorrect answer. You still earn your team 50 points however. It is now the other team's turn.", 10, false);
						updateScore(50);
						changeTurn();
					}
				}
			}
		});
	});
}

function startGame() //FIRST WORD IN WORDS IS CORRECT ANSWER
{
	if(interval)
	{
		clearInterval(interval)
	}
	resetScoreboard();

	var words = getNewWords();

	var x = 0;
	var y = 0;
	var dx = 0;
	var dy = 0;
	xcords = [];
	ycords = [];
	xchange = [];
	ychange = [];
	won = false;
	innerTimer.style.height = height + "px";

	words.forEach(function(e, index){
		x = (Math.random() * (width - 150)) + 25;
		y = (Math.random() * (height - 150)) + 25;
		dx = (Math.random() - .5) * speed;
		if(dx >= 0)
		{
			dx += 1;
		}
		else
		{
			dx -= 1;
		}
		if(Math.random() > .5)
		{
			dy = speed - Math.abs(dx);
		}
		else
		{
			dy = -(speed - Math.abs(dx));
		}
		xcords[index] = x;
		ycords[index] = y;
		xchange[index] = dx;
		ychange[index] = dy;
	})
	drawnWords = words;
	answer = words[0];
	interval = setInterval(draw, (1000/fps));
}

function draw()
{
	context.clearRect(0, 0, width, height);
	drawnWords.forEach(function(e, index){
		context.fillStyle = "#FFFF01";
		context.fillRect(xcords[index], ycords[index], buttonWidth, buttonHeight)
		context.fillStyle = "#000000";
		context.fillText(e, xcords[index] + 5, ycords[index] + 60, buttonWidth)
		xcords[index] += xchange[index];
		ycords[index] += ychange[index];	
	});


	if($('.popup').length == 0)
	{
		innerTimer.style.height = (parseInt(innerTimer.style.height) - parseInt(timerRemovalPx)) + "px";
	}

	bounce();
	if(won)
	{
		clearInterval(interval);
		interval = null;
	}
	if(parseInt(innerTimer.style.height) <= 1)
	{
		LOOMA.alert("You ran out of time. It is now the other teams turn.", 10, false);
		changeTurn();
		innerTimer.style.height = height + "px";
	}
}

function bounce()
{
	drawnWords.forEach(function(e, index){
		if(xcords[index] > width - buttonWidth || xcords[index] < 0)
		{
			xchange[index] = -xchange[index];
		}
		if(ycords[index] > height - buttonHeight || ycords[index] < 0)
		{
			ychange[index] = -ychange[index];
		}	
	});
}

function changeWords(words, correctAnswer)
{
	var x = 0;
	var y = 0;
	var dx = 0;
	var dy = 0;
	xcords = [];
	ycords = [];
	xchange = [];
	ychange = [];
	innerTimer.style.height = height + "px";

	words.forEach(function(e, index){
		x = (Math.random() * (width - 150)) + 25;
		y = (Math.random() * (height - 150)) + 25;
		dx = (Math.random() - .5) * 3;
		if(Math.random() > .5)
		{
			dy = speed - Math.abs(dx);
		}
		else
		{
			dy = -(speed - Math.abs(dx));
		}
		xcords[index] = x;
		ycords[index] = y;
		xchange[index] = dx;
		ychange[index] = dy;
	});
	drawnWords = words;
	answer = correctAnswer;
}

function getMousePos(evt) {
	var rect = gameArea.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}