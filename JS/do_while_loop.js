
let conesLeft = Math.floor(Math.random() * 50) + 50;
let boughtPerIndividual = Math.floor(Math.random() * 5) + 1

do {
    boughtPerIndividual = Math.floor(Math.random() * 5) + 1;
    if (conesLeft < boughtPerIndividual) {
        console.log("Cannot sell you " + boughtPerIndividual + " I only have " + conesLeft + "...");
    } else {
        console.log(boughtPerIndividual + " cones sold!");
        conesLeft -= boughtPerIndividual;
    }
} while (conesLeft > 0);

console.log("Yay!  I sold them all!");