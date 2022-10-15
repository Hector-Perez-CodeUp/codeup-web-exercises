
// Final Calculations
let onePound = "Losing 1 lb per week, you should reach your goal in ";
let twoPounds = "Losing 2 lbs per week, you should reach your goal in ";
let maintain = "You would need to maintain around ";

if ( sex == "M" && act_lvl == 1 ) {
    let tdee = bmr_male * 1.2
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 2) {
    let tdee = bmr_male * 1.375
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 3) {
    let tdee = bmr_male * 1.55
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 4) {
    let tdee = bmr_male * 1.725
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "M" && act_lvl == 5) {
    let tdee = bmr_male * 1.9
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
}

if ( sex == "F" && act_lvl == 1 ) {
    let tdee = bmr_female * 1.2
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 2) {
    let tdee = bmr_female * 1.375
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 3) {
    let tdee = bmr_female * 1.55
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 4) {
    let tdee = bmr_female * 1.725
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
} else if ( sex == "F" && act_lvl == 5) {
    let tdee = bmr_female * 1.9
    alert(onePound + weight_deficit + " weeks!\n" + maintain + Math.floor((tdee - 500)) + " a day. \n" +
        twoPounds + time_to_goal + " weeks!\n" + maintain + Math.floor((tdee - 1000)) + " a day.");
}