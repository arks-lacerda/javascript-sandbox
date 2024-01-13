let x;

x = 5 + '5';
x = 5 + Number('5');
x = 5 * '5';
x = 5 * String(5);
x = 5 / '25';
x = 5 + null;

x = Number(null);
x = Number(true);
x = Number(false);

x = 5 + true;
x = 5 + false;

x = 5 + undefined;
x = Number(undefined);
x = 5 / undefined;

x = +'5' + '5';

console.log(x, typeof x);
