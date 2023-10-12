

function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${haveRead}`
  }
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, 'have read')

