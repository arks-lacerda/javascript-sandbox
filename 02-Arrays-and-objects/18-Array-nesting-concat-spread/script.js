let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits;

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...fruits];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object
const num = 24;
x = Array.isArray(berries);

x = Array.from('123456');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
