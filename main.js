
let books = []


class Book{
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
        
    }
    display = () => {
        console.log(this.title)
    }
}

function addBook(title, author, pages){
    books.push(new Book(title, author, pages))
}

function searchBooks(input){
    for (const book of books){
        if (book.title == input || book.author == input){
            console.log(`We found your book: ${book.title} by ${book.author}`)
        }
    }
}

function viewShortBooks(listOfBooks){
    console.log(listOfBooks.filter( book => book.pages <= 100 ))
}

function addIntro(listOfBooks){

    listOfBooks = listOfBooks.map( book =>(
        book.title = `Title: ${book.title}`,
        book.author = `Author: ${book.author}`
    ))

}


addBook("Lord of the Rings", "Tolkien", 200 )
addBook("Game of Thrones", "George R.R. Martin", 375 )
addBook("Goosebumps", "R.L. Stine", 60 )
console.log(books)

books[0].display()
searchBooks("Tolkien")
viewShortBooks(books)
addIntro(books)
console.log(books)


