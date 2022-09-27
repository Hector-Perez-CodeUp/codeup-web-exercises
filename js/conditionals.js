"use strict";

//analyzeColor Function
function analyzeColor(color) {
    if (color == 'blue') {
        return("blue is the color of the sky");
    } else if ( color == 'red') {
        return('strawberries are red');
    } else if ( color == 'orange') {
        return('oranges are orange');
    } else if ( color == 'yellow') {
        return('bananas are yellow');
    } else if ( color == 'green') {
        return('kale is green');
    } else {
        return("I don't know anything about " + color );
    }
}
console.log(analyzeColor("cyan"));


//randomColor Function
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(analyzeColor(randomColor));


//analyzeColor Switch Case
switch(randomColor) {
    case "blue": {
        console.log("blue is the color of the sky");
        break; }
    case "red": {
        console.log("strawberries are red");
        break; }
    case "orange": {
        console.log("oranges are orange");
        break; }
    case "yellow": {
        console.log("bananas are yellow");
        break;}
    case "green": {
        console.log("kale is green");
        break; }
    default:
        console.log("I don't know anything about " + randomColor);
        break; }


// User Input
//let favColor = prompt("Enter your favorite color");
//alert(analyzeColor(favColor));


// calculateTotal Function
function calculateTotal(luckyNum, total) {
    if ( luckyNum == 0 ) {
        return total;
    } else if ( luckyNum == 1 ) {
        return total - (total * 0.1);
    } else if ( luckyNum == 2 ) {
        return total - (total * .25);
    } else if ( luckyNum == 3 ) {
        return total - (total * .35);
    } else if ( luckyNum == 4 ) {
        return total - (total * 0.5);
    } else if ( luckyNum == 5 ) {
        return 0;
    }
}
console.log(calculateTotal(5, 100));


// Random Lucky Number Input
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt("Enter your bill total");
alert("Your random lucky number is " + luckyNumber);
alert("Your price before the discount was: $" + totalBill);
alert("Your price after the discount is: $" + calculateTotal(luckyNumber, totalBill));


// enterNum Function
let enterNum = confirm("Would you like to enter a number?");
if ( enterNum == true ) {
    let number = Number(prompt("Please enter your number"));
    if (isNaN(number)) {
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
