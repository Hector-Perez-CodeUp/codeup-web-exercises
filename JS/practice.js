function createBook() {
    let bookTitles = ["Breathe", "Preacher", "1984", "Extreme Ownership", "The Art of War"];
    let bookAuthors = ["Rickson Gracie", "Garth Ennis", "George Orwell", "Jocko Willink", "Sun Tzu"]
    let library = [];
    let newBook = {};
    for (let i = 0; i < bookTitles.length; i++) {
        newBook["Number"] = (i + 1);
        newBook["title"] = (bookTitles[i]);
        newBook["author"] = (bookAuthors[i]);
        library.push(newBook)
    }
    console.log(library)
}
createBook();