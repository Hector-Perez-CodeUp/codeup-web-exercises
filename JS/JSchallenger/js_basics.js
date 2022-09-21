//
//
// function myFunction(a) {
//     let negNumbers = [];
//     for (let i = 0; i < a.length; i++) {
//         if (negNumbers.includes(i)){
//             a.push(i);
//         }
//     }
//     console.log(negNumbers.length)
// }
//
// myFunction([1, -2, 2, -4])
// //
// // let arr = [1, -2, 2, -4];
// // let negNumbers = [];
// // for (let i = 0; i < arr.length; i++) {
// //     console.log()
// // }
//
//
// let upToFive = [1, 2, 3, 4, 5];
// let arrayToCheck = [7, 3, 9];
// let verified = [];
// for (let i = 0; i < upToFive.length; i++) {
//     if (!(upToFive.includes(arrayToCheck[i]))) {
//         verified.push(arrayToCheck[i]);
//         console.log(verified)
//     }
// }

//let negNumbers = [];
function howManyNegNumbers(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            negNumbers.push(a[i]);
        }
    }
    console.log(negNumbers.length)
}
//howManyNegNumbers([4, -3, 2, 1, 0])

let arr = [1, -2, 2, -4];
let negNumbers = arr.filter(checkNeg);
console.log(negNumbers.length);
function checkNeg(numbers) {
    return numbers < 0;
}