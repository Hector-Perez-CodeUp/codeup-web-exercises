//Welcome & Fav Color Block
alert("Welcome to my Website!");
favColor = prompt("What is your favorite color?");
alert("Great! " + favColor + " is my favorite color too!");

//Movie Rental Block
mermaidDuration = prompt("How many days did you have The Little Mermaid?");
bearDuration = prompt("How many days did you have Brother Bear?");
herculesDuration = prompt("How many days did you have Hercules?");
costPerDay = 3;

total = (mermaidDuration * 3) + (bearDuration * 3) + (herculesDuration * 3);
alert("Your total is " + total);

//FANG Pay Block
gPay = 400;
aPay = 380;
fPay = 350;

fHours = prompt("How many hours did you work with Facebook this week?");
gHours = prompt("How many hours did you work with Google this week?");
aHours = prompt("How many hours did you work with Amazon this week?");
total = (fHours * fPay) + (gHours * gPay) + (aHours * aPay);

alert("Your total pay this week is " + total);

//Enrollment Block
let isNotFull = confirm("Is the class NOT full?");
let doesNotConflict = confirm("Does the class NOT conflict with your schedule?");

alert("It is " + (isNotFull && doesNotConflict) + " that you can enroll in this class!");

//Product Offer Block
premiumMember = confirm("Are you a premium member?");
moreThanTwo = confirm("Did you buy more than two items?");
isNotExpired = confirm("Is the offer NOT expired?");
resultBoolean = (premiumMember && isNotExpired) || (moreThanTwo && isNotExpired);

alert("It is " + resultBoolean + " that you can use the " + "product offer!");