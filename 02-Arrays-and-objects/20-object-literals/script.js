let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];

x = person.address.state;
x = person['address']['city'];

x = person.hobbies[0];
x = person['hobbies'][1];

person.name = 'Jane Doe';
x = person.name;

person['isAdmin'] = false;
x = person.isAdmin;

x = delete person.isAdmin;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person;

console.log(x);
