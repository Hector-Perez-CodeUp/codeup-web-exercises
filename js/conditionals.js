"use strict";

//analyzeColor Function
function analyzeColor(color) {
    if (color == 'blue') {
        alert("blue is the color of the sky");
    } else if ( color == 'red') {
        alert('strawberries are red');
    } else if ( color == 'orange') {
        alert('oranges are orange');
    } else if ( color == 'yellow') {
        alert('bananas are yellow');
    } else if ( color == 'green') {
        alert('kale is green');
    } else {
        alert("I don't know anything about " + color );
    }
}
analyzeColor("blue")


//randomColor Function
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//analyzeColor(randomColor);


//analyzeColor Switch Case
switch(randomColor) {
    case "blue": {
        alert("blue is the color of the sky");
        break; }
    case "red": {
        alert("strawberries are red");
        break; }
    case "orange": {
        alert("oranges are orange");
        break; }
    case "yellow": {
        alert("bananas are yellow");
        break;}
    case "green": {
        alert("kale is green");
        break; }
    default:
        alert("I don't know anything about " + randomColor);
        break; }


// // User Input
let favColor = prompt("Enter your favorite color");
analyzeColor(favColor);


// calculateTotal Function
function calculateTotal(luckyNum, total) {
    if ( luckyNum == 0 ) {
        alert("Your total is " + total);
    } else if ( luckyNum == 1 ) {
        let discountPercent = 0.1;
        total = total - ( total * discountPercent);
        alert("Your new total is now:  $" + total);
    } else if ( luckyNum == 2 ) {
        let discountPercent = 0.25;
        total = total - ( total * discountPercent);
        alert("Your new total is now:  $" + total);
    } else if ( luckyNum == 3 ) {
        let discountPercent = 0.35;
        total = total - ( total * discountPercent);
        alert("Your new total is now:  $" + total);
    } else if ( luckyNum == 4 ) {
        let discountPercent = 0.5;
        total = total - ( total * discountPercent);
        alert("Your new total is now:  $" + total);
    } else if ( luckyNum == 5 ) {
        alert("Your item is now free!");
    }
}
calculateTotal(5, 100);


// Random Lucky Number Input
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt("Enter your bill total");
alert("Your random lucky number is " + luckyNumber);
calculateTotal(luckyNumber, totalBill);


// enterNum Function
let enterNum = confirm("Would you like to enter a number?");
if ( enterNum == true ) {
    let number = Number(prompt("Please enter your number"));
    if ( isNaN(number) ) {
        alert("Incorrect input data type.");
    } else {
        let positiveNegative = number >= 0 ? "Your number is positive" : "Your number is negative.";
        let evenOdd = number % 2 == 0 ? "Your number is even" : "Your number is odd.";
        alert(positiveNegative);
        alert(evenOdd);
        alert("Your number + 100 = " + (number + 100));
    }
} else if ( enterNum == false ) {
    alert("Okay fine.");
}
