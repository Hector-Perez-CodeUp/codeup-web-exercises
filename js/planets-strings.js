(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);


    let brPlanetsString = planetsString.replaceAll("|", "<br>");
    console.log(brPlanetsString);


    let liPlanetsString = planetsString.replaceAll("|", "</li><li>");
    console.log("<ul><li>" + liPlanetsString + "</li></ul>");
})();