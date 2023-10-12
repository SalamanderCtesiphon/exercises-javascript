// Object literal syntax example

/* const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function() {
    ///do stuff
  }
} */

// There two ways to get info out  of an object
// Dot notation and bracket notation

/* myObject.property

myObject["obnoxious property"] */

function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player("also steve", "O")


function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${haveRead}`
  }
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, 'have read')

console.log(Object.getPrototypeOf(player1))