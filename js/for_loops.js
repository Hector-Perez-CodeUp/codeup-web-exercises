//
// // 2.
function showMultiplicationTable(x) {
    for (let i = 1; i < 11; i++) {
        console.log(x * i);
    }
}

//showMultiplicationTable(7)


// // 3.
let randomNum = Math.floor(Math.random() * 180) + 20;
function evenOrOdd() {
    for (let i = 1; i < 11; i++) {
        if (randomNum % 2 == 0) {
            console.log(randomNum + " is even");
            randomNum = Math.floor(Math.random() * 180) + 20;
        }
        console.log(randomNum + " is odd");
        randomNum = Math.floor(Math.random() * 180) + 20;
    }
}
evenOrOdd()

// 4.
for (let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}


// 5.
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
