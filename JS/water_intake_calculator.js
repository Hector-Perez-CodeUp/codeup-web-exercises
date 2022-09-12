alert("Welcome to the Weight Loss Calculator!");

// Subject Data Gathering
let age = prompt("Enter your age:  ");
let c_weight = prompt("Enter your current weight in lbs: ");
let g_weight = prompt("Enter your goal weight in lbs:  ");
let weight_deficit = c_weight - g_weight;
let time_to_goal = weight_deficit / 2; // rate of 2lb los per week
let height = prompt("Enter your height in cm:  ");
let sex = prompt("Enter M for Male or F for Female:  ");
let weight_kg = c_weight * .453592;  // lbs to kg
let bmr = ((10 * weight_kg) + (6.25 * height) - (5 * age));
let bmr_male = (bmr + 5);
let bmr_female = (bmr - 161);


// Present Activity Levels
act_lvl = prompt("Input the number associated with your current activity level:\n"
    + "1.  Sedentary (little to no exercise + desk job)\n"
    + "2.  Lightly Active (light exercise 1-3 days a week)\n"
    + "3.  Moderately Active (moderate exercise 3-5 days a week\n"
    + "4.  Very Active (heavy exercise 6-7 days a week)\n"
    + "5.  Extremely Active (strenuous training 2x a day)"
);


// Final Calculations
if ( sex == "M" && act_lvl == 1 ) {
    let tdee = bmr_male * 1.2
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 2) {
    let tdee = bmr_male * 1.375
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 3) {
    let tdee = bmr_male * 1.55
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 4) {
    let tdee = bmr_male * 1.725
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 5) {
    let tdee = bmr_male * 1.9
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
}

if ( sex == "F" && act_lvl == 1 ) {
    let tdee = bmr_female * 1.2
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 2) {
    let tdee = bmr_female * 1.375
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 3) {
    let tdee = bmr_female * 1.55
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 4) {
    let tdee = bmr_female * 1.725
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 5) {
    let tdee = bmr_female * 1.9
    alert("Losing 2 lbs per week, you should reach your goal in " + time_to_goal + " weeks!");
    alert("You would need to maintain around " + Math.floor((tdee - 1000)) + " a day.");
}