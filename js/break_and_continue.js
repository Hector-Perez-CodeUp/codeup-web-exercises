//my code
while (true) {
    let number = prompt("Input an odd number between 1 and 50");
    if (number % 2 == 0) {
        alert("Invalid input.  " + number + " is an even number.");
        continue;
    }
    alert("Your odd number is: " + number);
    break;
}

let number = prompt("Input an odd number between 1 and 50");
for (let i = 1; i < 51; i += 2) {
    if (i == number) {
        alert("Yikes! Skipping number: " + number);
        continue;
    }
    alert("Here is an odd number: " + i);
}
//
// let oddNum = parseInt(prompt("Pick a odd number between 1 and 50"));
// console.log("the number chosen was " + oddNum);
// for (let i = 1; i < 50; i += 2) {
//     // valid input check
//     while (oddNum % 2 === 0 || oddNum > 50) {
//         alert("That is not an odd number between 1 and 50");
//         oddNum = parseInt(prompt("Pick an odd number between 1 and 50"));
//         console.log("the number chosen was " + oddNum);
//         continue;
//     }
//     // Yikes skip
//     while (i === oddNum) {
//         console.log("Yikes! Skipping number: " + oddNum);
//         break;
//     }
//     if (i != oddNum) {
//         console.log("Here is an odd number: " + i);
//     }
// }

//og code
// let oddNum = parseInt(prompt("Pick a odd number between 1 and 50"));
// console.log("the number chosen was " + oddNum);
// for (let i = 1; i < 50; i += 2) {
//     while (oddNum % 2 === 0 || oddNum > 50) {
//         alert("That is not an odd number between 1 and 50");
//         oddNum = parseInt(prompt("Pick an odd number between 1 and 50"));
//         console.log("the number chosen was " + oddNum);
//         continue;
//     } while (i === oddNum) {
//         console.log("Yikes! Skipping number: " + oddNum);
//         break;
//     }
//     console.log("Here is an odd number: " + i);
// }