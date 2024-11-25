const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages
  this.read = read

}

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function createCardButtons() {
    const cardButtons = document.createElement('div')
        
    const starButton = document.createElement('button')
    starButton.className = 'card-button'
    starButton.id = 'star'

    const followButton = document.createElement('button')
    followButton.className = 'card-button'
    followButton.id = 'follow'

    const shareButton = document.createElement('button')
    shareButton.className = 'card-button'
    shareButton.id = 'share'

    cardButtons.appendChild(starButton)
    cardButtons.appendChild(followButton)
    cardButtons.appendChild(shareButton)

    return cardButtons
}

function displayBooks(bookArray) {
    const bookDisplayDiv = document.querySelector('#cards')
    
    bookArray.forEach(book => {
        let newBook = document.createElement('div')
        newBook.className = 'card'

        const bookTitle = document.createElement('p')
        bookTitle.id = 'card-title'
        bookTitle.textContent = book.title

        const bookAuthor = document.createElement('p')
        bookAuthor.id = 'card-text'
        bookAuthor.textContent = book.author

        const bookPages = document.createElement('p')
        bookPages.id = 'card-text'
        bookPages.textContent = `${book.pages} pages`

        const bookProgress = document.createElement('p')
        bookProgress.id = 'card-text'
        bookProgress.textContent = book.read

        newBook.appendChild(bookTitle)
        newBook.appendChild(bookAuthor)
        newBook.appendChild(bookPages)
        newBook.appendChild(bookProgress)
        newBook.appendChild(createCardButtons())

        bookDisplayDiv.insertBefore(newBook, bookDisplayDiv.childNodes[2]);
    })
}

const addBookButton = document.querySelector('#add-book')
addBookButton.addEventListener('click', () => {
  bookTitle = document.querySelector('#book-title')
  bookAuthor = document.querySelector('#book-author')
  bookPages = document.querySelector('#book-pages')
  bookStatus = document.querySelector('#book-status')

  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.options[bookStatus.selectedIndex].text)
  displayBooks(myLibrary.slice(-1))
})