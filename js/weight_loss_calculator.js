"use strict";
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
    //todo:  verify formulas are accurate
    let weight_kg;
    c_weight_unit == "lbs" ? weight_kg = c_weight_value * .453592 : weight_kg = c_weight_value; // Convert to kgs
    if (height_unit == "in") {height_value *= 2.54;} // Convert to cm
    let weight_deficit = c_weight_value - g_weight_value;
    let time_to_goal = weight_deficit / 2;
    let bmr = ((10 * weight_kg) + (6.25 * height_value) - (5 * age));
    let bmr_male = (bmr + 5);
    let bmr_female = (bmr - 161);

    // FINAL CALCULATIONS //
    function presentResults(bmrMaleOrFemale, multiplier) {
        let tdee = bmrMaleOrFemale * multiplier;
        alert(`Losing 1 lb per week, you should reach your goal in ${weight_deficit} weeks!\nYou would need to maintain around ${Math.floor((tdee - 500))} a day.\nLosing 2 lbs per week, you should reach your goal in ${time_to_goal} weeks!\nYou would need to maintain around ${Math.floor((tdee - 1000))} a day.`);
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


