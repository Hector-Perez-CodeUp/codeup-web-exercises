
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