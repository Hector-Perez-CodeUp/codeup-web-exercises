// write a function that returns the first and last name of a student

// 3. define the function -> parameters? yes
// // first name * lastName
// 4. call the function --> arguments? yes
// // variables

let firstName = prompt("Please enter your first name");
let lastName = prompt("Please enter your last name");

function fullName(firstName, lastName) {
    let fullName = (firstName + " " + lastName)
    return fullName;
}

alert("Your full name is " + fullName(firstName,lastName));