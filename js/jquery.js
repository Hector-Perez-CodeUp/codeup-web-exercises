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
    }
}