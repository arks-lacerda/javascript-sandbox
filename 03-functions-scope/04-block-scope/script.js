const x = 100;
const foo = 1;
var bar = 2;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i);

if (true) {
  let a = 100;
  const b = 200;
  var c = 300;
}

// console.log(a);
// console.log(b);
console.log(c);

function run() {
  var d = 900;
  console.log(d);
}
run();

// console.log(d);
