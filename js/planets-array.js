(function(){
    "use strict";

    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    console.log(planets);

    // Add "The Sun" to beginning of Planets
    console.log("Adding 'The Sun' to the beginning of the planets array.");
    console.log(planets.unshift("The Sun"));


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
})();