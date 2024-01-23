// and (&&) 1 values ​​are false, total values ​​are false.
// or (||) 1 value is true, total values ​​are true.
// negation (!)isTrue, this value is false.

// && - Will return first value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;
a = 10 && 0 && '' && 30;
console.log('a', a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log('posts', posts[0]);

// || - Will return first value or the last value
let b;

b = 10 || 20;
b = 20 || 30 || 40;
b = 0 || 30 || 40;
b = '' || 0 || 30;
b = 0 || '' || 60;
b = 0 || null || '';
b = 0 || null || '' || undefined;

console.log('b', b);

// ?? - Returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
c = 30 ?? 40 ?? 50;
c = null ?? 60;
c = undefined ?? 70;
c = 0 ?? 80;
c = '' ?? 90;

console.log('c', c);
