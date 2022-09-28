(function() {
    "use strict";

    // First Name Last Name Values
    let person = {
        firstName: "Hector",
        lastName: "Perez"
    }


    // sayHello function
    person.sayHello = function() {
        return(`Hello from ${person.firstName} ${person.lastName}!`)
    }
    console.log(person.sayHello());


    // Shoppers Discounts
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper) {
        if (shopper.amount >= 200) {
            console.log(`${shopper.name}: Pre-Discount Total = $${shopper.amount}.  Discount = $${shopper.amount * .12}.  Discounted Total = $${shopper.amount * .88}`)
            console.log("---")
        } else {
            console.log(`${shopper.name}: Pre-Discount Total = $${shopper.amount}.  Discount = $0.  Discounted Total = $${shopper.amount}`)
            console.log("---")
        }
    })


    // Books Array of Objects
    let books = [
        {
            title: "Breathe",
            author: {
                firstName: "Rickson",
                lastName: "Gracie"
            }
        },
        {
            title: "Preacher",
            author: {
                firstName: "Garth",
                lastName: "Ennis"
            }
        },
        {
            title: "Breathe",
            author: {
                firstName: "Rickson",
                lastName: "Gracie"
            }
        },
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "Extreme Ownership",
            author: {
                firstName: "Jocko",
                lastName: "Willink"
            }
        },
        {
            title: "The Art of War",
            author: {
                firstName: "Sun",
                lastName: "Tzu"
            }
        },
    ];


    // Loop through Books Array
    books.forEach(function(book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("---");

    });
})();