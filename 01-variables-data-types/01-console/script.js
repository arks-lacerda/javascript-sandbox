console.log(100);
console.log('Hello world!');
console.log(20, 'hello', true);

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Arthur', email: 'arthur@gmail.com' });

console.group('Simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles =
  'padding: 10px; background-color: white; color: green; border-radius: 3px; font-weight: 900; font-size: 16px;';

console.log('%cHello World', styles);
