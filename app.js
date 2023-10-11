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
}

const player = new Player('steve', 'X')
console.log(player.name)

