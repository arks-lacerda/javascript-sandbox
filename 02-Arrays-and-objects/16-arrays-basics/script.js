let x;
//Array Literal
const numbers = [12, 45, 23, 43, 66, 87];
const mixed = [15, 'Arthur', false, null, { name: 'Victor' }];

//Array Constructor
const fruits = new Array('apple', 'orange', 'pineapple', 'strawberry');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit's an ${fruits[3]}!`;

x = numbers.length;

fruits[2] = 'pear';

x = fruits;

// fruits.length = 2;
fruits[4] = 'watermelon'; // hardcoded

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);
