// Challenge function Fahrenheit to Celsius
// function getCelsius(f) {
//   const celsius = (f - 32) * (5 / 9);
//   return celsius;
// }

const getCelsius = (f) => (f - 32) * (5 / 9);
console.log(`The temp is ${getCelsius(86)} \xB0C`);

// Challenge min and max values for arrays

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6]));

// Challenge IIFE
// (function (length, width) {
//   let rectangle = length * width;
//   console.log(rectangle);
// })(10, 5);

((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
  console.log(output);
})(20, 10);
