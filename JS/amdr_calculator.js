alert("Welcome to the Allowable Macronutrient Distribution Range Calculator!");
alert("Calculating your AMDR will give you general guidelines to aim for when \n" +
    "calculating how much protein, carbohydrates, and fats to eat daily.");

dailyCalories = prompt("Please enter your current daily calories");

let carbsLow = dailyCalories * .45;
let carbsHigh = dailyCalories * .65;
let proteinLow = dailyCalories * .1;
let proteinHigh = dailyCalories * .35;
let fatLow = dailyCalories * .2;
let fatHigh = dailyCalories * .35;

alert("You should aim to get between 45% - 65% of your calories from carbs! " +
    "For you that would be between "
    + Math.round((carbsLow / 4)) + " and " + Math.round((carbsHigh / 4))
    + " grams of protein per day!");
alert("You should aim to get between 10% - 35% of your calories from protein!" +
    " For you that would be between "
    + Math.round((proteinLow / 4)) + " and " + Math.round((proteinHigh / 4))
    + " grams of protein per day!");
alert("You should aim to get between 20% - 35% of your calories from fats! " +
    "For you that would be between "
    + Math.round((fatLow / 9)) + " and " + Math.round((fatHigh / 9))
    + " grams of protein per day!");