const d = new Date(10, 30, 2024, 5, 0, 0);
const hour = d.getHours();

// if (hour < 12) {
//   console.log('Good morning!');
// } else if (hour < 18) {
//   console.log('Good afternoon!');
// } else {
//   console.log('Good evening!');
// }

// NESTING IF
if (hour < 12) {
  console.log('Good morning!');
  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good afternoon!');
  if (hour === 15) {
    console.log('Have a snacks!');
  }
} else {
  console.log('Good evening!');
  if (hour === 20) {
    console.log('Go to sleep! zzz');
  }
}

if (hour >= 6 && hour < 15) {
  console.log(`It's work time!`);
}

if (hour === 5 || hour === 20) {
  console.log(`Brush your teeth!`);
}
