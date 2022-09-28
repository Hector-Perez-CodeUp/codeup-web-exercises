(function(){
    "use strict";

    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split('|');
    console.log(planetsArray);


    // Add "The Sun" to beginning of Planets
    planets.unshift("The Sun");
    console.log("Adding 'The Sun' to the beginning of the planets array.");
    console.log(planets);


    // Add "Pluto" to the end of Planets
    planets.push("Pluto");
    console.log("Adding 'Pluto' to the end of the planets array.");
    console.log(planets);


    // Removing "The Sun" from Planets
    planets.shift();
    console.log("Removing 'The Sun' from the planets array.");
    console.log(planets);


    // Removing "Pluto" from Planets
    planets.pop();
    console.log("Removing 'Pluto' from the end of the planets array.");
    console.log(planets);


    // Index of "Earth" in Planets
    console.log("Finding and logging the index of 'Earth' in the planets array.");
    console.log(planets.indexOf("Earth"));


    // Reverse Planets Array
    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);


    // Sorting Planets
    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);

    //
    let brString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    console.log(brString);

    let ulString = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li>Saturn</li><li>Uranus</li>Neptune</li></ul>"
    console.log(ulString)

})();