/*
Name: Skip, Aaron, Connor, Ryan
Email: skip@stritter.com
Owner: VillageTech Solutions (villagetechsolutions.org)
Date: 2016 07
Revision: Looma Video Editor 1.0

filename: looma-video.js
Description: Can play an unedited video
             reroutes the user to looma-edited-video.php if they want to edit a video
Attribution: slightly borrowed from Matt West (blog.teamtreehouse.com)
 */

'use strict';

//NOTE: fileName, filePath , displayName, and thumbPath are set with JS injected by the PHP

   //var fullscreenPlayPauseButton;


$(document).ready(function () {
    //$('#gameArea').hide()

    $('#testButton').on('click', function(){
        $('#gameArea').show();
        startGame(["hi", "this", "is", "my", "test", "right"], "right");
    });

    document.getElementById('gameArea').addEventListener('won', function(){
        $('#main-container-horizontal').css("background-color", "red");
    })
});

function getNewWordsWithLastAsAnswer()
{
    return ["ih", "siht", "si", "ym", "tset", "thgir"];
}