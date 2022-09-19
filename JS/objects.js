(function() {
    "use strict";


    let person = {
        firstName: "Hector",
        lastName: "Perez"
    }


    person.sayHello = function() {
        console.log(`Hello from ${person.firstName} ${person.lastName}!`)
    }
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper, amount) {
        if (shopper.amount >= 200) {
            console.log(`${shopper.name}'s total is ${shopper.amount}.  His discount is $${shopper.amount * .12}! His new title is now $${shopper.amount * .88}`)
            console.log("---")
        } else {
            console.log(`${shopper.name}'s total is: $${shopper.amount}.`)
            console.log(`${shopper.name} would have to spend $${200 - shopper.amount} to get a discount.`)
            console.log("---")
        }
    })


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
    console.log(books[0].author.firstName)

    books.forEach(function(book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("---");
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();