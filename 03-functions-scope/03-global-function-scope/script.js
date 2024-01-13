// alert('Hello JS Vanilla');
// console.log(window.innerWidth);
// console.log(innerWidth);

const x = 100;
console.log(x, ' in global scope!');

function run() {
  console.log(window.innerWidth);
  console.log(x, ' in local(in function) scope!');
  // console.log(y);
}

run();

if (true) {
  console.log(x, ' in block');
}

function add() {
  const x = 30;
  const y = 60;
  console.log(y, ' in local(in function) scope!');
  console.log(
    x + y,
    'not variable global(is doing overwriting the globally) + in local'
  );
}

add();
// console.log(y);
