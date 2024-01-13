// Values are stored on the Stack
const name = 'John';
const age = 30;

// Reference values are stored on the Heap
const person = {
  name: 'Arthur',
  age: 41,
};

let newName = name;
newName = 'David';

let newPerson = person;
newPerson.name = 'Victor';

console.log(name, newName);
console.log(person, newPerson);
