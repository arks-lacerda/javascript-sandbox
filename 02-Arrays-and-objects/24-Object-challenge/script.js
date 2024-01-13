// Step 1: Create
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    isStatus: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    isStatus: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay',
    author: 'Suzanne Collins',
    isStatus: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
// step 2: change values
library[0].isStatus.read = true;
library[1].isStatus.read = true;
library[2].isStatus.read = true;

console.log(library);

// Step 3: Destructure title
const { title: firstName } = library[0];
console.log(firstName);

// Step 4: Array to JSON
const str = JSON.stringify(library);
console.log(str);
