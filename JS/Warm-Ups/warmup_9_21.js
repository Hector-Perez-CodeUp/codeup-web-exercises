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
// // Shuffle an Array
// function shuffleArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let randomIndex = Math.floor(Math.random() * (arr.length + 1));
//         let randomElement = arr.splice( , 1)
//         console.log(arr)
//     }
// }
// //shuffleArray([1, 2, 3, 4, 5])

//console.log(arr);
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
