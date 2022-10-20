"use strict";

// Assign Variables
// Push Variables into client as attribute
//
let client = {
    age: 30,
    height: 75,
    c_weight: 240,
    g_weight: 220,
    sex: "Male",
    actLvl: "4. Very Active (heavy exercise 6-7 times a week)"
    }

let age = $("#age").value;
console.log(age);
    // Assigning Variables
    // let c_weight = document.getElementById("currentWeight").innerText;
    // let g_weight = document.getElementById("goalWeight").innerText;
    // let weight_deficit = c_weight - g_weight;

    // Return Results Function
    let returnResults = function() {
        // Remove Original Container
        document.getElementById("bootstrap-div").style.display = "none";

        // Create Results Container
        let resultsDiv = document.createElement("div");
        resultsDiv.setAttribute("id", "results-div");
        resultsDiv.classList.add("container", "my-5");
        document.body.append(resultsDiv);

        // Create Card Div
        let resultsCard = document.createElement("div");
        resultsCard.setAttribute("id", "results-card");
        resultsCard.style.width = "22em";
        resultsCard.style.height = "22em";  // temporary, need to delete when card content entered
        resultsCard.classList.add("card", "d-flex", "justify-contents-center", "align-items-center", "m-auto", "mt-5em")
        document.body.append(resultsCard);

        // Nest Card Div In Results Container
        resultsDiv.innerHTMl = resultsCard;

        // Create Card Img
        // let cardPic =


        // Recreate this div:
        // <div id="bootstrap-div" className="container my-5">
        //     <div id="input-card" className="card d-flex justify-contents-center align-items-center m-auto mt-5em"
        //          style="width: 22em;">
        //         <img src="img/scale.jpeg" className="card-img-top" alt="scale-img">
        //             <div className="card-body d-flex flex-column justify-content-center">
        //                 <h5 id="card-title" className="card-title m-auto">Weight Loss Calculator</h5>

        // Assign all card classes  --  document.getElementById("MyElement").classList.add('MyClass');

        // RESULTS DATA
        // Create h1    --  <h1>Mild Weight Loss</h1>
        // Create p --  <p>Losing 1 lb per week, you should reach your goal in + weight_defecit</p>
        // Create p --  You would have to maintain around "" calories per day
        // Create h1    --  <h1>Moderate Weight Loss</h1>
        // Create p --  Losing 2 lb per week, you should reach your goal in ""
        // Create p --  You would have to maintain around "" calories per day

        // Create button to Macro Calculator    --  Click here to calculate your estimated macros to help get you there!
        // Create h1    --  Good luck!
    }
    document.getElementById("btn-1").addEventListener("click", returnResults);

// Formulas
// let time_to_goal = weight_deficit / 2; // rate of 2lb lbs per week
// let weight_kg = c_weight * .453592;  // lbs to kg
// let bmr = ((10 * weight_kg) + (6.25 * height) - (5 * age));
// let bmr_male = (bmr + 5);
// let bmr_female = (bmr - 161);

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