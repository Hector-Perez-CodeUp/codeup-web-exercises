"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});


let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let inputArray = [];

$(document).keyup(function(event) {
    inputArray.push(event.keyCode);
    if (inputArray.length == konamiCode.length) {
        checkCode();
    }
})

function checkCode() {
    if (JSON.stringify(inputArray) === JSON.stringify(konamiCode)) {
        alert("You have added 30 lives!");
        $("html").css("background-image", "url(img/eight.jpeg)");
        $("html").css("-webkit-background-size", "cover");
        $("html").css("-moz-background-size", "cover");
        $("html").css("-0-background-size", "cover");
        $("html").css("background-size", "cover");
        $("h1").css("background-color", "purple");
        $("h1").css("color", "white");
        const successSound = new Audio("audio/511484__mlaudio__success-bell.wav");
        successSound.play();
    }
}