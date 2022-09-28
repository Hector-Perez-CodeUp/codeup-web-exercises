(function(){
    "use strict";

    // Convert Planets string to array
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);


    // Added <br> tags between each planet
    let brPlanetsString = planetsString.replaceAll("|", "<br>");
    console.log(brPlanetsString);


    // Unordered List
    let liPlanetsString = planetsString.replaceAll("|", "</li><li>");
    console.log("<ul><li>" + liPlanetsString + "</li></ul>");
})();