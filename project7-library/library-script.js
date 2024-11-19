const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages

  if (read) {
    this.read = "Completed"
  } else {
    this.read = "In Progress/Not Started"
  }

  this.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
  }

}

function addBookToLibrary(title, author, pages, read) {
  newBook = Book(title, author, pages, read)
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
        bookTitle.textContent(book.title)

        const bookAuthor = document.createElement('p')
        bookAuthor.id = 'card-text'
        bookAuthor.textContent(book.author)

        const bookPages = document.createElement('p')
        bookPages.id = 'card-text'
        bookPages.textContent(`${book.author} pages`)

        const bookProgress = document.createElement('p')
        bookProgress.id = 'card-text'
        bookProgress.textContent(book.read)

        

        newBook.appendChild(bookTitle)
        newBook.appendChild(bookAuthor)
        newBook.appendChild(bookPages)
        newBook.appendChild(bookProgress)
        newBook.appendChild(createCardButtons())

        bookDisplayDiv.insertBefore(newBook, bookDisplayDiv.childNodes[1]);
    })
}