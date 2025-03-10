const myLibrary = [];

class Book {
  constructor(title, author, rating, read, image) {
    this.title = title;
    this.author = author;
    this.rating = rating
    this.read = read
    this.image = image    
  }
}

function addBookToLibrary(title, author, rating, read, image) {
  coverImage = document.createElement("img");
  if (image == undefined) {
    coverImage.src = 'images/no_cover.jpg'
  } else {
    coverImage.src = URL.createObjectURL(image); 
  }
  coverImage.onload = () => {
    URL.revokeObjectURL(coverImage);
  };
  
  newBook = new Book(title, author, rating, read, coverImage)
  myLibrary.push(newBook)
}

function createCardButtons() {
    const cardButtons = document.createElement('div')
    cardButtons.id = 'card-buttons'
        
    const starButton = document.createElement('button')
    starButton.className = 'card-button'
    starButton.id = 'star'

    const followButton = document.createElement('button')
    followButton.className = 'card-button'
    followButton.id = 'follow'

    const shareButton = document.createElement('button')
    shareButton.className = 'card-button'
    shareButton.id = 'share'

    const deleteButton = document.createElement('button')
    deleteButton.className = 'card-button'
    deleteButton.id = 'delete'
    deleteButton.addEventListener('click', () => {
      if (confirm("Remove this entry?")) {
        event.target.parentElement.parentElement.remove() 
      }
    })

    cardButtons.appendChild(starButton)
    cardButtons.appendChild(followButton)
    cardButtons.appendChild(shareButton)
    cardButtons.appendChild(deleteButton)

    return cardButtons
}

function displayBooks(bookArray) {
    const bookDisplayDiv = document.querySelector('#cards')
    
    bookArray.forEach(book => {
        let newBook = document.createElement('div')
        newBook.className = 'card'

        const bookTitle = document.createElement('p')
        bookTitle.className = 'card-title'
        bookTitle.textContent = book.title

        const bookAuthor = document.createElement('p')
        bookAuthor.className = 'card-text'
        bookAuthor.textContent = book.author

        const bookRating = document.createElement('p')
        bookRating.classList.add('card-text', 'book-rating')
        bookRating.id = `rating-${book.rating}`
        bookRating.textContent = `${book.rating}/5`

        const bookProgress = document.createElement('p')
        bookProgress.textContent = book.read
        bookProgress.classList.add('card-text', 'book-progress')
        if (bookProgress.textContent == 'Completed') {
          bookProgress.id = 'progress-complete'
        } else if (bookProgress.textContent == 'Currently Reading') {
          bookProgress.id = 'progress-reading'
        } else {
          bookProgress.id = 'progress-planning-to-read'
        }
        
        const bookImage = book.image
        bookImage.id = 'cover-image'
        console.log(book.image)

        newBook.appendChild(bookTitle)
        newBook.appendChild(bookAuthor)
        newBook.appendChild(bookImage)
        newBook.appendChild(bookProgress)
        newBook.appendChild(bookRating)
        newBook.appendChild(createCardButtons())

        bookDisplayDiv.insertBefore(newBook, bookDisplayDiv.childNodes[2]);
    })
}

const addBookButton = document.querySelector('#add-book')
addBookButton.addEventListener('click', () => {
  bookTitle = document.querySelector('#book-title')
  bookAuthor = document.querySelector('#book-author')
  bookRating = document.querySelector('#book-rating')
  bookStatus = document.querySelector('#book-status')
  bookImage = document.querySelector('#book-cover')

  if (bookTitle.value != '') {
    
    if (bookAuthor.value == '') {
      bookAuthor.value = 'Unknown Author'
    }

    if (bookRating.value == '') {
      bookRating.value = '-'
    }
    
    addBookToLibrary(
      bookTitle.value, 
      bookAuthor.value, 
      bookRating.value, 
      bookStatus.options[bookStatus.selectedIndex].text,
      bookImage.files[0])
    displayBooks(myLibrary.slice(-1))
  
    bookTitle.value = ''
    bookAuthor.value = ''
    bookRating.value = ''
    bookStatus.selectedIndex = 0;
    bookImage.value = ''
  }
})

const deleteButtons = document.querySelectorAll('#delete')
deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', () => {
    if (confirm("Remove this entry?")) {
      event.target.parentElement.parentElement.remove() 
    }
  })
})
