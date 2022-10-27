/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 */
function freeShipping(obj) {
    let sum = 0;
    let costs = Object.values(obj);
    for (let i = 0; i < costs.length; i++) {
        sum += costs[i];
    }
    let result = (sum > 50) ? true : false;
    console.log(result);
}
freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 })

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 */
let arr = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
]

function getBudget(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].budget;
    }
    console.log(sum);
}
getBudget(arr);

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 */

function convertAddressToObject(str) {
    let arr = str.split(" ");
    let address = {};
    address.streetNumber = arr.shift();
    address.streetName = arr.join(" ");
    console.log(address);
}

convertAddressToObject("8626 Sunny Oaks")

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 */
//
// let arr = [
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2}
// ]
//
// function totalPets(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].pets;
//     }
//     console.log(sum);
// }
//
// totalPets(arr);