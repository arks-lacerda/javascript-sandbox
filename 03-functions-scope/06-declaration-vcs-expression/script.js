// Function Declaration
console.log(addDollarSign(200));

function addDollarSign(value) {
  return '$' + value;
}

// Function Expression
// console.log(addPlusSign(500));
const addPlusSign = function (value) {
  return '+' + value;
};
