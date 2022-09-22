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


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper) {
        if (shopper.amount >= 200) {
            console.log(`${shopper.name}'s total is ${shopper.amount}.  His discount is $${shopper.amount * .12}! His new total is now $${shopper.amount * .88}`)
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

    books.forEach(function(book, index) {
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        console.log("---");

        function createBook() {
            let bookTitles = ["Breathe", "Preacher", "1984", "Extreme Ownership", "The Art of War"];
            let bookAuthors = ["Rickson Gracie", "Garth Ennis", "George Orwell", "Jocko Willink", "Sun Tzu"]
            let newLibrary = [];
            let newBook = {};
            for (let i = 0; i < bookTitles.length; i++) {
                newBook.title = (bookTitles[i]);
                //newBook.author(bookAuthors[i]);
            }
            console.log(newBook)
        }
        createBook();
        // console.log("Book # " + (i + 1));
        // console.log(bookTitles[i]);
        // console.log(bookAuthors[i]);
        // console.log("---");


        function showBookInfo() {

        }

    });
    /**
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();