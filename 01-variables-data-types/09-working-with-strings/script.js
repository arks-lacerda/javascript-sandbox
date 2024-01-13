let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

//Templates Literals
x = `Hello, my name is ${name} and I am ${age + age} years old`;

// String Properties and Methods
const s = new String('Hello world');

x = typeof s;

x = s.length;
// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.substring(4, s.length);

x = s.indexOf('l');

x = s.substring(0, 5);

x = s.slice(-11, -6);

x = '        Hello world';

x = x.trim();

x = s.replace('world', 'David');

x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

console.log(x);
