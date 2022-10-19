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
        $("html").css({
            "background-image": "url(img/eight.jpeg)",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-0-background-size": "cover",
            "background-size": "cover",
            "background-color": "purple",
        });
        $("h1").css("color", "white");
        const successSound = new Audio("audio/511484__mlaudio__success-bell.wav");
        successSound.play();
    }
}