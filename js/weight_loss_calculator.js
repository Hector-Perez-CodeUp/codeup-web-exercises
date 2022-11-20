"use strict";

// todo: on pageLoad - modal with disclaimer
$(document).ready(function(){
    $("#myModal").modal('show');
});

$("#submit-btn").click(function() {
    // USER METRICS //
    let age = document.querySelector("#age").value;
    let height_unit = $("#height-selector :selected").text();
    let height_value = document.querySelector("#user-height").value;
    let c_weight_unit = $("#c_weight_selector :selected").text();
    let c_weight_value = document.querySelector("#user-current-weight").value;
    let g_weight_unit = $("#g_weight_selector :selected").text();
    let g_weight_value = document.querySelector("#user-goal-weight").value;
    let sex = document.querySelector("#sex :checked").value;
    let act_lvl = document.querySelector("#activityLevel").value;

    // FORMULAS //
    // Calorie Formulas
    //todo:  verify formulas are accurate
    let weight_kg;
    c_weight_unit == "lbs" ? weight_kg = c_weight_value * .453592 : weight_kg = c_weight_value; // Convert to kgs
    if (height_unit == "in") {height_value *= 2.54;} // Convert to cm
    let weight_deficit = c_weight_value - g_weight_value;
    let time_to_goal = weight_deficit / 2;
    let bmr = ((10 * weight_kg) + (6.25 * height_value) - (5 * age));
    let bmr_male = (bmr + 5);
    let bmr_female = (bmr - 161);

    // AMDR Formulas
    //Fat: 20-35%
    let fat_low_one = Math.floor(tdee - 500) * .2;
    let fat_low_two = Math.floor(tdee - 1000) * .2;
    let fat_high_one = Math.floor(tdee - 500) * .35;
    let fat_high_two = Math.floor(tdee - 1000) * .35;

    //Protein: 10-35%
    let pro_low_one = Math.floor(tdee - 500) * .1;
    let pro_low_two = Math.floor(tdee - 1000) * .1;
    let pro_high_one = Math.floor(tdee - 500) * .35;
    let pro_high_two = Math.floor(tdee - 1000) * .35;

    //Carbs: 45-65%
    let carb_low_one = Math.floor(tdee - 500) * .45;
    let carb_low_two = Math.floor(tdee - 500) * .45;
    let carb_high_one = Math.floor(tdee - 500) * .65;
    let carb_high_two = Math.floor(tdee - 500) * .65;


    // FINAL CALCULATIONS //
    function presentResults(bmrMaleOrFemale, multiplier) {
        let tdee = bmrMaleOrFemale * multiplier;
        document.querySelector("#results-modal").innerHTML = (`Losing 1 lb per week, you should reach your goal in ${weight_deficit} weeks!\nYou would need to maintain around ${Math.floor((tdee - 500))} calories a day.\nLosing 2 lbs per week, you should reach your goal in ${time_to_goal} weeks!\nYou would need to maintain around ${Math.floor((tdee - 1000))} calories a day.`);
    }
    // Male Calculations
    if ( sex == "M" && act_lvl == 1 ) {
        presentResults(bmr_male, 1.2);
    } else if ( sex == "M" && act_lvl == 2) {
        presentResults(bmr_male, 1.375);
    } else if ( sex == "M" && act_lvl == 3) {
        presentResults(bmr_male, 1.55);
    } else if ( sex == "M" && act_lvl == 4) {
        presentResults(bmr_male, 1.725);
    } else if ( sex == "M" && act_lvl == 5) {
        presentResults(bmr_male, 1.9);
    }
    // Female Calculations
    if ( sex == "F" && act_lvl == 1 ) {
        presentResults(bmr_female, 1.2);
    } else if ( sex == "F" && act_lvl == 2) {
        presentResults(bmr_female, 1.375);
    } else if ( sex == "F" && act_lvl == 3) {
        presentResults(bmr_female, 1.55);
    } else if ( sex == "F" && act_lvl == 4) {
        presentResults(bmr_female, 1.725);
    } else if ( sex == "F" && act_lvl == 5) {
        presentResults(bmr_female, 1.9);
    }
})


