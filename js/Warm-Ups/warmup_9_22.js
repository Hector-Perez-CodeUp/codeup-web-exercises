
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
        title: "Mockingjay",
        readingStatus: false
    }
]

function findingAllRead(libraryArr) {
    libraryArr.forEach(function(book) {
        console.log(`It is ${book.readingStatus} that the book '${book.title}' by ${book.author} as already been read`)

    })
}
findingAllRead(libraryArr)