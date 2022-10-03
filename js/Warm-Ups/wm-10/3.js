var i = 20;
while (i > 0) {
    console.log(i);
    i--;
}

for (let i = 20; i > 0; i--) {
    console.log(i);
}


var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
let fruitsMiddle = fruits.length / 2;
fruits.splice(fruitsMiddle, 0, "strawberry");
fruits.unshift("strawberry");
fruits.push("strawberry");
console.log(fruits);