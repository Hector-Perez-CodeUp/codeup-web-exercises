// 1.
function filterNumbers(arr) {
    let numArr = [];
    arr.forEach(function(element) {
        if (isNaN(parseInt(element))) {
        } else {
            numArr.push(element);
        }
    });
    console.log(numArr.sort());
}
//filterNumbers(["fred", true, 5, 3]);


// 2.
function getOlder(arr) {
    arr.forEach(function(dog) {
        dog.age += 1;
        console.log(dog.age)
    });
}
let dogsArr = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastiff",
        age: 10
    }
]
// getOlder(dogsArr);


//  3
function washCars(arr) {
    arr.forEach(function(car) {
        car.isDirty = false;
        console.log(car.isDirty)
    });
}
let carArray = [
    {
        make: "Volvo",
        color: "Red",
        year: 1996,
        isDirty: true
    },
    {
        make: "Toyota",
        color: "Black",
        year: 2004,
        isDirty: false
    },
    {
        make: "Ford",
        color: "White",
        year: 2007,
        isDirty: true
    }
]
//washCars(carArray)


// 3
function adminList(arr) {
    let numberOfAdmin = 0;
    arr.forEach(function(employee) {
        if (employee.isAdmin === true) {
            console.log(employee);
            numberOfAdmin += 1;
            let adminEmail = [employee.email];
            console.log(`Admin's email: ${adminEmail}.`);
        }
    });
    console.log(`There are ${numberOfAdmin} admins in this employee group.`);
}
let employees = [
    {
        isAdmin: true,
        email: "user1@gmail.com"
    },
    {
        isAdmin: true,
        email: "user2@gmail.com"
    },
    {
        isAdmin: false,
        email: "user3@gmail.com"
    }
]
//adminList(employees);


// 4
function makesSandwichObjects(breads, fillings) {
    let sandwichObjectArray = [];
    let sandwichObject = {};
    for (let i = 0; i < breads.length; i++) {
        sandwichObject.bread = i;
    }
}
let breads = ["white", "wheat", "rhy", "white"];
let fillings = ["pb&j", "ham", "cheese steak", "tuna"];
makesSandwichObjects(breads, fillings)