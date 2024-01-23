// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// Initial expression -  Initializes a variable/counter
// Condition expression - Condition that the loop will continue to run as long as it is met or until the condition is false
// Increment expression - Expression that will be executed after each iteration of the loop. Usually increments the variable
/// Statements - Code that will be executed each time the loop is run. To execute a `block of code, use the `{}` syntax

// for (let i = 0; i <= 10; i = i + 2) {
//   console.log(1, 'Number ' + i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log(`${i} is my lucky number`);
//   } else {
//     console.log('Number ' + i);
//   }
// }

//Nest loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = [
  'Brad',
  'Sam',
  'Sara',
  'Mizuky',
  'John',
  'Tim',
  'Arthur',
  'Bone',
];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    // if (i === 2) {
    // names[2] = 'Sarah';
    // console.log(names[2] + ' is the best');
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}
