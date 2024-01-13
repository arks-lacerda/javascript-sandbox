const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

console.log('x = ', x);
console.log('y = ', y);

//Get the Sum
let sum = x + y;
let sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the Difference
let diff = x - y;
let differenceOutput = `${x} - ${y} = ${diff}`;
console.log(differenceOutput);

// Get the Product
let prod = x * y;
let productOutput = `${x} * ${y} = ${prod}`;
console.log(productOutput);

//Get the Quotient
let quot = x / y;
let quotientOutput = `${x} / ${y} = ${quot}`;
console.log(quotientOutput);

// Get the remainder
let rm = x % y;
let rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
