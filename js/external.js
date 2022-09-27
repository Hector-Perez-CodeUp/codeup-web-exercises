//Welcome & Fav Color Block
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
favColor = prompt("What is your favorite color?");
alert("Great! " + favColor + " is my favorite color too!");

//Movie Rental Block
let mermaidDuration = prompt("How many days did you have The Little Mermaid?");
let bearDuration = prompt("How many days did you have Brother Bear?");
let herculesDuration = prompt("How many days did you have Hercules?");
let pricePerDay = prompt("How much is the price per day?");

let total = (mermaidDuration * pricePerDay) + (bearDuration * pricePerDay) + (herculesDuration * pricePerDay);
alert("Your total is " + total);

//FANG Pay Block
let gPay = prompt("How much do you make per hour with Google?");
let aPay = prompt("How much do you make per hour with Amazon?");
let fPay = prompt("How much do you make per hour with Facebook?");

let fHours = prompt("How many hours did you work with Facebook this week?");
let gHours = prompt("How many hours did you work with Google this week?");
let aHours = prompt("How many hours did you work with Amazon this week?");

let totalPay = (fHours * fPay) + (gHours * gPay) + (aHours * aPay);
alert("Your total pay this week is $" + totalPay);

//Enrollment Block
let isNotFull = confirm("Is the class NOT full?");
let doesNotConflict = confirm("Does the class NOT conflict with your schedule?");

alert("It is " + (isNotFull && doesNotConflict) + " that you can enroll in this class!");

//Product Offer Block
let premiumMember = confirm("Are you a premium member?");
let moreThanTwo = confirm("Did you buy more than two items?");
let isNotExpired = confirm("Is the offer NOT expired?");
let resultBoolean = (premiumMember && isNotExpired) || (moreThanTwo && isNotExpired);

alert("It is " + resultBoolean + " that you can use the " + "product offer!");