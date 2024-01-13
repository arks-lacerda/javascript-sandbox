// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(lastName, firstName);

// hosting variables
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore; snack_case
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score += score;
}
console.log(score);

const x = 100;

const arr = [1, 2, 3, 4, 5];
arr.push(6);

console.log(arr);

const person = {
  firstName: 'Brad',
};

person.firstName = 'John';
person.email = 'brad@gmail.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d, e, f);
