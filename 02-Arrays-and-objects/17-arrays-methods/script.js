let x;

const arr = [12, 45, 23, 43, 66];

// arr.push(100); // add 100 to the end

// arr.pop(); // remove to the end

// arr.unshift(5); // add 5 to the start

// arr.shift(); // remove to the start

// arr.reverse(); // reverted to the original

x = arr.includes(455);
x = arr.indexOf(66);

x = arr.slice(1, 4);
// x = arr.splice(1, 3);

// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
