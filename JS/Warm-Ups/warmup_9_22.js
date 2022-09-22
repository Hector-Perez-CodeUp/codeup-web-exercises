
// 1.
function lowToHigh(arr) {
    console.log(arr.sort());
}

lowToHigh([2,3,1,5,3,3,3,])


// 2.
// let book = {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: false
// }
// function findReadingStatus (book) {
//     console.log(book.readingStatus);
// }
// findReadingStatus(book)


let libraryArr = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay:",
        readingStatus: false
    }
]

function findingAllRead(arr) {
    let readBooks = arr.filter(book => book.readingStatus === true);
    console.log(readBooks);
    readBooks.forEach(readBook => {
        for (let key in readBook) {
            console.log(`${key}: ${readBook[key]}`)
        }
    })
    for (let i = 0; i < readBooks.length; i++) {
        console.log(`${this.title} by ${this.author} has already been read.`)
    }
    let unreadBooks = arr.filter(book => book.readingStatus === false);
    console.log(unreadBooks);
    for (let i = 0; i < unreadBooks.length; i++) {
        console.log(`${this.title} by ${this.author} has not been read.`)
}
}
findingAllRead(libraryArr)