"use strict";

// sayHello function
function sayHello(name) {
    return("Hello, " + name + "!");
}
console.log(sayHello("Hector"));


// sayHello string literal
let helloMessage = sayHello("Hector");
console.log(helloMessage);


// myName variable
let myName = "Hector";
console.log(sayHello(myName));


//isTwo function
var random = Math.floor((Math.random() * 3) + 1);
function isTwo(num) {
    return num ==2;
}
console.log(isTwo(random));


//calculateTip function
function calculateTip(tipPercent,billTotal) {
    return (billTotal * tipPercent);
}
console.log((calculateTip(0.15, 33.42)));


//calculateTip function with prompts & alerts
let billTotal = prompt("Please enter your bill total:  ");
let tipPercent = prompt("Please enter your tip %");
alert("Your tip amount is: $" + calculateTip(tipPercent, billTotal));


// applyDiscount function
function applyDiscount(price, discountPercentage) {
    let discount = price * discountPercentage;
    let discountedPrice = price - discount;
    return discountedPrice;
}
console.log(applyDiscount(45.99, .12));