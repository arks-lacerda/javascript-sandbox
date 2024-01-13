// function add(a, b) {
//   return a + b;
// }

//Arrow function syntax
const add = (a, b) => {
  return a + b;
};

//Implicit Return
const subtract = (a, b) => a - b;

// can leave off () with a single param
const double = (a) => a * 2;

console.log(add(1, 2));
console.log(subtract(4, 2));
console.log(double(20));

//Returning an Object
const createObj = () => ({
  name: 'Arthur',
});

console.log(createObj());
console.log(createObj().name);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

//Arrow function in a callback
numbers.forEach((n) => console.log(n));
