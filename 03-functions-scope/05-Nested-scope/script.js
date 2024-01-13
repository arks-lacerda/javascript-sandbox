function first() {
  const x = 100;

  function second() {
    const y = 300;
    console.log(x + y);
  }

  // console.log(y);

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 400;
    console.log(x + y);
  }
  console.log(y);
}
