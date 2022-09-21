// Area of a Triangle
function areaOfTriangle(a, b, c) {
    let s = (a + b + c); // semi-perimeter
    return Math.sqrt(s(s-a)(s-b)(s-c));
}


// Reverse a String
function revString(str) {
    let strSplit = str.split("");
    let strReverse = strSplit.reverse();
    let joinArray = strSplit.join("")
    console.log(joinArray)
}
//revString("codeup")


// FizzBuzz Activity
for ( let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " 'FizzBuzz'");
        continue;
    } else if (i % 5 == 0) {
        console.log(i + " 'Pop'");
        continue;
    } else if (i % 3 == 0) {
        console.log(i + " 'Fizz'");
        continue;
    }
    console.log(i);
}

//
// if (i % 3 == 0) {
//     console.log(i + " 'Fizz'");
//     continue;
// } else if (i % 5 == 0) {
//     console.log(i + " 'Pop'");
//     continue;
// }
// console.log(i);
// }
