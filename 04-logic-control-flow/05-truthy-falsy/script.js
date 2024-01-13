const email = 'temp@example.com';

if (email) {
  console.log(`You passed in an email address - ${email}`);
}

// Falsy Values:
// - false
// - 0
// - "" or '' (empty string)
// - null
//- undefined
// - null
// - NaN

// Truthy values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - 'null' (null in a string)
// - 'undefined' (undefined in a string)
// - 'NaN' (NaN in a string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)

const x = [];

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats:

// const children = 0;
// if (children !== undefined) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }

const children = 0;
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
// const posts = ['Post One', 'Post Two'];
const posts = [];
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts to List');
}

// Checking for empty objects
// const user = {
//   name: 'Joe Doe',
// };
const user = {};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
