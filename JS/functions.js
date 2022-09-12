"use strict";

// sayHello function
function sayHello(name) {
    return("Hello, " + name + "!");
}
alert(sayHello("Hector"));


// sayHello string literal
let helloMessage = sayHello("Hector");
alert(helloMessage);

// myName variable
let myName = "Hector (from myName variable)";
alert(sayHello(myName));


//isTwo function
function isTwo(random) {
    var random = Math.floor((Math.random() * 3) + 1);
    alert("Random num is " + random);
    alert(random == 2);
}
isTwo();


//calculateTip function
function calculateTip(tipPercent,billTotal) {
    return (billTotal * tipPercent);
}
alert(calculateTip(0.15, 33.42));


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
alert(applyDiscount(45.99, .12));