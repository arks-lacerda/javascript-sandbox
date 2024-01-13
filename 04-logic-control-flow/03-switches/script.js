const d = new Date(2024, 4, 13, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("It's January");
    break;
  case 2:
    console.log("It's February");
    break;
  case 3:
    console.log("It's March");
    break;
  default:
    console.log("It's not a month: January, February and March!");
}

switch (true) {
  case hour < 12:
    console.log('Good morning!');
    break;
  case hour < 18:
    console.log('Good afternoon!');
    break;
  default:
    console.log('Good evening!');
}
