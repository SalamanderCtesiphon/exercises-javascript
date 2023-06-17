const add7 = function(n) {
  return n += 7;
};
 
const multiply = function(n, m) {
  return n * m;
};

const capitalize = function(str) {
  const holder1 = str.slice(0, 1);
  const holder2 = holder1.toUpperCase();
  const holder3 = str.slice(1);
  return holder2 + holder3;
}

const lastLetter = function(str) {
  return str.slice(-1);
};

const fizzBuzz = function() {
  for(let i = 1; i <= 100; i++ ) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if(i % 5 === 0) {
      console.log('buzz');
    } else if(i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
  console.log('i love programming')
}

fizzBuzz();